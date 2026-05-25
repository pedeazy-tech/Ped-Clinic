import React, { useState, useRef, useEffect } from 'react';
import { Prescription, LetterheadSettings, Medication } from '../types';
import { PEDIATRIC_DRUGS_REFERENCE, COMMON_COMPLAINTS, COMMON_FINDINGS, COMMON_DIAGNOSES, PEDIATRIC_DIETARY_ADVICE } from '../data/clinicalData';
import { 
  User, Baby, HeartPulse, Sparkles, Plus, Trash2, Settings, ListCheck, CheckCircle2, 
  RotateCcw, Printer, FileDown, Heart, Eye, ArrowUpRight, CloudLightning, PencilLine 
} from 'lucide-react';
import DoseCalculator from './DoseCalculator';

interface PrescriptionFormProps {
  prescription: Prescription;
  setPrescription: React.Dispatch<React.SetStateAction<Prescription>>;
  settings: LetterheadSettings;
  setSettings: React.Dispatch<React.SetStateAction<LetterheadSettings>>;
  onPrint: () => void;
  themeColors: any;
}

export default function PrescriptionForm({ 
  prescription, 
  setPrescription, 
  settings, 
  setSettings, 
  onPrint, 
  themeColors
}: PrescriptionFormProps) {
  // Tabs for structured editing
  const [activeTab, setActiveTab] = useState<'patient' | 'clinical' | 'medications' | 'advice' | 'settings'>('patient');

  // Input states for adding items
  const [customComplaint, setCustomComplaint] = useState('');
  const [customFinding, setCustomFinding] = useState('');
  
  // Custom Medication Add States
  const [medName, setMedName] = useState('');
  const [medType, setMedType] = useState<'Syrup' | 'Drops' | 'Suspension' | 'Sachet' | 'Tablet' | 'Capsule' | 'Inhaler' | 'Ointment' | 'Other'>('Syrup');
  const [medDosage, setMedDosage] = useState('5 ml');
  const [medFrequency, setMedFrequency] = useState('Twice Daily (BD)');
  const [medTiming, setMedTiming] = useState<'Before Food' | 'After Food' | 'With Food' | 'Empty Stomach' | 'None'>('After Food');
  const [medDuration, setMedDuration] = useState('5 days');
  const [medNotes, setMedNotes] = useState('');

  // Favorites State (Frequently used drugs templates)
  interface FavoriteMed {
    id: string;
    name: string;
    type: 'Syrup' | 'Drops' | 'Suspension' | 'Sachet' | 'Tablet' | 'Capsule' | 'Inhaler' | 'Ointment' | 'Other';
    dosage: string;
    frequency: string;
    timing: 'Before Food' | 'After Food' | 'With Food' | 'Empty Stomach' | 'None';
    duration: string;
    notes: string;
  }

  const [favorites, setFavorites] = useState<FavoriteMed[]>(() => {
    const saved = localStorage.getItem('ped_favorite_drugs_v1');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    // standard clinic defaults
    return [
      { id: 'fav-1', name: 'Syrup Calpol 250', type: 'Syrup', dosage: '5 ml', frequency: 'Thrice Daily (TDS)', timing: 'After Food', duration: '3-5 days', notes: 'SOS if temp > 100 F' },
      { id: 'fav-2', name: 'Syrup Ondem 2mg', type: 'Suspension' as any, dosage: '2.5 ml', frequency: 'Thrice Daily (TDS)', timing: 'Before Food', duration: '3 days', notes: 'Give 15 minutes before feed/solids' },
      { id: 'fav-3', name: 'Nasal Spray Nasoclear', type: 'Drops' as any, dosage: '2 drops', frequency: 'As needed (PRN / SOS)', timing: 'None', duration: '5 days', notes: 'Apply in both nostrils before feeding' },
      { id: 'fav-4', name: 'Syrup Augmentin 228.5', type: 'Suspension' as any, dosage: '5 ml', frequency: 'Twice Daily (BD)', timing: 'With Food', duration: '5 days', notes: 'Finish full 5-day course' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('ped_favorite_drugs_v1', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (med: Omit<FavoriteMed, 'id'>) => {
    const exists = favorites.find(f => f.name.toLowerCase() === med.name.toLowerCase().trim());
    if (exists) {
      setFavorites(prev => prev.filter(f => f.id !== exists.id));
    } else {
      const newFav: FavoriteMed = {
        id: 'fav_' + Math.random().toString(36).substring(2, 9),
        name: med.name.trim(),
        type: med.type,
        dosage: med.dosage,
        frequency: med.frequency,
        timing: med.timing,
        duration: med.duration,
        notes: med.notes
      };
      setFavorites(prev => [...prev, newFav]);
    }
  };

  const deleteFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => prev.filter(f => f.id !== id));
  };

  const useFavorite = (fav: FavoriteMed) => {
    setMedName(fav.name);
    setMedType(fav.type);
    setMedDosage(fav.dosage);
    setMedFrequency(fav.frequency);
    setMedTiming(fav.timing);
    setMedDuration(fav.duration);
    setMedNotes(fav.notes);
  };

  const addFavoriteDirectly = (fav: FavoriteMed, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddMedication({
      name: fav.name,
      type: fav.type,
      dosage: fav.dosage,
      frequency: fav.frequency,
      timing: fav.timing,
      duration: fav.duration,
      notes: fav.notes
    });
  };

  // Canvas Signature pad ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Quick prefill helper for standard patient profiles (for pediatric onboarding demo)
  const loadDemoPatient = () => {
    setPrescription({
      id: 'demo-prescription',
      patient: {
        name: 'Aarav Chatterjee',
        age: '2 Years 4 Months',
        gender: 'Boy',
        weight: '12.5',
        height: '88',
        temp: '101.4',
        pulse: '110',
        bp: '90/60',
        spo2: '98',
        date: new Date().toISOString().split('T')[0],
        feedingType: 'Solid/Regular',
        immunizationUpToDate: true,
        immunizationStatus: 'up_to_date',
        missingVaccines: ''
      },
      chiefComplaints: [
        'Fever: persistent high grade (>101°F) x 2 days',
        'Cough: dry irritation / spasmodic cough',
        'Loose watery stools (frequency > 4/day)'
      ],
      clinicalFindings: [
        'General Condition: Active, alert, playful',
        'Throat: Congested pharynx, tonsils clean',
        'Hydration: Good, tongue moist, skin pinch immediate back'
      ],
      diagnosis: 'Acute Viral Gastrointestinal & Upper Respiratory Infection',
      medications: [
        {
          id: 'med-1',
          name: 'Paracetamol (Calpol 250 mg / 5 ml)',
          type: 'Suspension',
          dosage: '3.8 ml',
          frequency: 'As needed (PRN / SOS, Max 4 times/day)',
          timing: 'After Food',
          duration: '3 days',
          notes: 'Give SOS if armpit temperature exceeds 100°F. Space by at least 6 hours.'
        },
        {
          id: 'med-2',
          name: 'Zinc Gluconate (Zinconia)',
          type: 'Syrup',
          dosage: '5 ml',
          frequency: 'Once Daily (OD)',
          timing: 'Before Food',
          duration: '14 days',
          notes: 'Diarrheal therapy. Complete full 14 day course.'
        }
      ],
      advice: 'Give plenty of oral electrolyte hydration fluids (ORS). Sponging with room-temperature tap water if fever climbs. Light semi-solid food (Mashed Khichdi/Curd-Rice). Avoid cows milk temporarily.',
      createdAt: new Date().toISOString()
    });
  };

  // Drawing signature Canvas handlers
  useEffect(() => {
    if (activeTab === 'settings' && canvasRef.current && settings.signatureMode === 'draw') {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#1e3a8a'; // deep indigo blue ink
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
      }
    }
  }, [activeTab, settings.signatureMode]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    saveSignature();
  };

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSettings(prev => ({ ...prev, signatureDrawData: '' }));
  };

  const saveSignature = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL();
    setSettings(prev => ({ ...prev, signatureDrawData: dataUrl }));
  };

  const handlePatientChange = (field: keyof typeof prescription.patient, value: any) => {
    setPrescription(prev => ({
      ...prev,
      patient: {
        ...prev.patient,
        [field]: value
      }
    }));
  };

  // Add symptom/finding list managers
  const toggleComplaint = (complaint: string) => {
    setPrescription(prev => {
      const exists = prev.chiefComplaints.includes(complaint);
      return {
        ...prev,
        chiefComplaints: exists 
          ? prev.chiefComplaints.filter(c => c !== complaint) 
          : [...prev.chiefComplaints, complaint]
      };
    });
  };

  const toggleFinding = (finding: string) => {
    setPrescription(prev => {
      const exists = prev.clinicalFindings.includes(finding);
      return {
        ...prev,
        clinicalFindings: exists 
          ? prev.clinicalFindings.filter(f => f !== finding) 
          : [...prev.clinicalFindings, finding]
      };
    });
  };

  const handleAddCustomComplaint = () => {
    if (!customComplaint.trim()) return;
    setPrescription(prev => ({
      ...prev,
      chiefComplaints: [...prev.chiefComplaints, customComplaint.trim()]
    }));
    setCustomComplaint('');
  };

  const handleAddCustomFinding = () => {
    if (!customFinding.trim()) return;
    setPrescription(prev => ({
      ...prev,
      clinicalFindings: [...prev.clinicalFindings, customFinding.trim()]
    }));
    setCustomFinding('');
  };

  // Medication managers
  const handleAddMedication = (newMed: Medication | {
    name: string;
    type: any;
    dosage: string;
    frequency: string;
    timing: any;
    duration: string;
    notes: string;
  }) => {
    const medComplete: Medication = {
      id: Math.random().toString(36).substring(2, 9),
      ...newMed
    };
    setPrescription(prev => ({
      ...prev,
      medications: [...prev.medications, medComplete]
    }));
  };

  const handleAddManualMed = () => {
    if (!medName.trim()) return;
    handleAddMedication({
      name: medName.trim(),
      type: medType,
      dosage: medDosage.trim(),
      frequency: medFrequency,
      timing: medTiming,
      duration: medDuration.trim(),
      notes: medNotes.trim()
    });
    // Reset form fields
    setMedName('');
    setMedNotes('');
  };

  const deleteMedication = (id: string) => {
    setPrescription(prev => ({
      ...prev,
      medications: prev.medications.filter(med => med.id !== id)
    }));
  };

  const clearActiveTabDetails = () => {
    switch (activeTab) {
      case 'patient':
        setPrescription(prev => ({
          ...prev,
          patient: {
            name: '',
            age: '',
            gender: '',
            weight: '',
            height: '',
            temp: '',
            pulse: '',
            bp: '',
            spo2: '',
            date: new Date().toISOString().split('T')[0],
            feedingType: '',
            immunizationUpToDate: true,
            immunizationStatus: 'up_to_date' as const,
            missingVaccines: ''
          }
        }));
        break;
      case 'clinical':
        setPrescription(prev => ({
          ...prev,
          chiefComplaints: [],
          clinicalFindings: [],
          diagnosis: ''
        }));
        break;
      case 'medications':
        setPrescription(prev => ({
          ...prev,
          medications: []
        }));
        break;
      case 'advice':
        setPrescription(prev => ({
          ...prev,
          advice: ''
        }));
        break;
      case 'settings':
        setSettings(prev => ({
          ...prev,
          signatureDrawData: '',
          signatureText: ''
        }));
        break;
    }
  };

  const getClearButtonLabel = () => {
    switch (activeTab) {
      case 'patient': return 'Clear Patient Details';
      case 'clinical': return 'Clear Clinical & Diagnosis';
      case 'medications': return 'Clear Rx Medications';
      case 'advice': return 'Clear Dietary Advice';
      case 'settings': return 'Clear Signature & Profile settings';
      default: return 'Clear Tab Details';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/85 shadow-md overflow-hidden flex flex-col h-[calc(100vh-140px)] lg:h-[820px] transition-all no-print">
      
      {/* Tab Navigation header */}
      <div className="flex bg-slate-50 border-b border-slate-100 p-1 divide-x divide-slate-100/60">
        <button
          type="button"
          onClick={() => setActiveTab('patient')}
          style={
            activeTab === 'patient' 
              ? { backgroundColor: themeColors.subtle, color: themeColors.text, borderColor: themeColors.border }
              : {}
          }
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all border border-transparent ${
            activeTab === 'patient' 
              ? 'shadow-sm' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <User className="w-4 h-4" style={{ color: activeTab === 'patient' ? themeColors.primary : undefined }} />
          <span>Patient Profile</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('clinical')}
          style={
            activeTab === 'clinical' 
              ? { backgroundColor: themeColors.subtle, color: themeColors.text, borderColor: themeColors.border }
              : {}
          }
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all border border-transparent ${
            activeTab === 'clinical' 
              ? 'shadow-sm' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <Baby className="w-4 h-4" style={{ color: activeTab === 'clinical' ? themeColors.primary : undefined }} />
          <span>Clinical Exam</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('medications')}
          style={
            activeTab === 'medications' 
              ? { backgroundColor: themeColors.subtle, color: themeColors.text, borderColor: themeColors.border }
              : {}
          }
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all border border-transparent ${
            activeTab === 'medications' 
              ? 'shadow-sm' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <HeartPulse className="w-4 h-4" style={{ color: activeTab === 'medications' ? themeColors.primary : undefined }} />
          <span>Rx Medications</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('advice')}
          style={
            activeTab === 'advice' 
              ? { backgroundColor: themeColors.subtle, color: themeColors.text, borderColor: themeColors.border }
              : {}
          }
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all border border-transparent ${
            activeTab === 'advice' 
              ? 'shadow-sm' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <ListCheck className="w-4 h-4" style={{ color: activeTab === 'advice' ? themeColors.primary : undefined }} />
          <span>Diet & Advice</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('settings')}
          style={
            activeTab === 'settings' 
              ? { backgroundColor: themeColors.subtle, color: themeColors.text, borderColor: themeColors.border }
              : {}
          }
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all border border-transparent ${
            activeTab === 'settings' 
              ? 'shadow-sm' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <Settings className="w-4 h-4" style={{ color: activeTab === 'settings' ? themeColors.primary : undefined }} />
          <span>Letterhead Style</span>
        </button>
      </div>

      {/* Editor Content Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        
        {/* ================= TAB: PATIENT ================= */}
        {activeTab === 'patient' && (
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-3.5">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Child's Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  placeholder="e.g. Master Aarav Chatterjee"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={prescription.patient.name}
                  onChange={(e) => handlePatientChange('name', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Age Descriptor</label>
                <input
                  type="text"
                  placeholder="e.g. 2 yrs 4 months"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={prescription.patient.age}
                  onChange={(e) => handlePatientChange('age', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Gender</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all text-slate-700"
                  value={prescription.patient.gender}
                  onChange={(e) => handlePatientChange('gender', e.target.value as any)}
                >
                  <option value="">Select Gender</option>
                  <option value="Boy">Boy</option>
                  <option value="Girl">Girl</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Weight <strong className="text-blue-600">(Kg)</strong> <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  placeholder="e.g. 12.5"
                  className="w-full bg-slate-50 font-bold text-slate-800 border-2 border-blue-100 focus:bg-white focus:border-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={prescription.patient.weight}
                  onChange={(e) => handlePatientChange('weight', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Height <strong className="text-slate-500">(cm)</strong></label>
                <input
                  type="text"
                  placeholder="e.g. 88"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={prescription.patient.height || ''}
                  onChange={(e) => handlePatientChange('height', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Prescription Date</label>
                <input
                  type="date"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={prescription.patient.date}
                  onChange={(e) => handlePatientChange('date', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Feeding Regimen</label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all text-slate-700"
                  value={prescription.patient.feedingType}
                  onChange={(e) => handlePatientChange('feedingType', e.target.value as any)}
                >
                  <option value="">Regimen Type</option>
                  <option value="Breastfed">Exclusively Breastfed</option>
                  <option value="Formula">Formula Feed</option>
                  <option value="Mixed">Mixed Breast & Solids</option>
                  <option value="Solid/Regular">Regular Solids Table Food</option>
                </select>
              </div>

              <div className="col-span-2 pt-3 border-t border-slate-100/70 space-y-2.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Pediatric Immunization Status
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600">
                    <input
                      type="radio"
                      name="immunizationStatus"
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-505 accent-indigo-600"
                      checked={(prescription.patient.immunizationStatus || (prescription.patient.immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'up_to_date'}
                      onChange={() => {
                        handlePatientChange('immunizationStatus', 'up_to_date');
                        handlePatientChange('immunizationUpToDate', true);
                        handlePatientChange('missingVaccines', ''); // reset missing when up to date
                      }}
                    />
                    <span>Up to Date for Age</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600">
                    <input
                      type="radio"
                      name="immunizationStatus"
                      className="w-4 h-4 text-indigo-600 focus:ring-indigo-505 accent-indigo-600"
                      checked={(prescription.patient.immunizationStatus || (prescription.patient.immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'not_up_to_date'}
                      onChange={() => {
                        handlePatientChange('immunizationStatus', 'not_up_to_date');
                        handlePatientChange('immunizationUpToDate', false);
                      }}
                    />
                    <span>Not Up to Date</span>
                  </label>
                </div>

                {((prescription.patient.immunizationStatus || (prescription.patient.immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'not_up_to_date') && (
                  <div className="space-y-1.5 pt-1.5 animate-fadeIn">
                    <label className="block text-[11px] font-bold text-slate-500 uppercase">
                      Specify vaccines not taken / delayed:
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Delayed 3rd dose of Pentavalent & Rotavirus booster vaccine..."
                      className="w-full bg-slate-50 border border-slate-205 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all text-slate-700 font-semibold"
                      value={prescription.patient.missingVaccines || ''}
                      onChange={(e) => handlePatientChange('missingVaccines', e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Vitals expandable panel */}
            <div className="border border-slate-200/80 rounded-xl p-3 space-y-3.5 bg-slate-50/20">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-slate-400" />
                <span>Pediatric Vitals Indicators (Optional)</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Temperature (°F)</label>
                  <input
                    type="text"
                    placeholder="e.g. 100.4"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={prescription.patient.temp}
                    onChange={(e) => handlePatientChange('temp', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Pulse / HR (bpm)</label>
                  <input
                    type="text"
                    placeholder="e.g. 110"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={prescription.patient.pulse}
                    onChange={(e) => handlePatientChange('pulse', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Blood Pressure (BP)</label>
                  <input
                    type="text"
                    placeholder="e.g. 90/60"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={prescription.patient.bp}
                    onChange={(e) => handlePatientChange('bp', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">SpO2 Percentage (%)</label>
                  <input
                    type="text"
                    placeholder="e.g. 98"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={prescription.patient.spo2}
                    onChange={(e) => handlePatientChange('spo2', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: CLINICAL EXAM ================= */}
        {activeTab === 'clinical' && (
          <div className="space-y-4">
            
            {/* Chief Complaints Tag Toggle section */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">Chief Complaints (C/O) Prefills</label>
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {COMMON_COMPLAINTS.map((item) => {
                  const active = prescription.chiefComplaints.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleComplaint(item)}
                      className={`text-[11px] px-2.5 py-1.5 rounded-full border transition-all text-left flex items-center justify-between gap-1 ${
                        active 
                          ? 'bg-blue-600 border-blue-600 text-white font-medium shadow-sm' 
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.split(': ')[1] || item}</span>
                      {active && <CheckCircle2 className="w-3 H-3 inline-block" />}
                    </button>
                  );
                })}
              </div>

              {/* Add custom complaint */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Custom Chief Complaint x duration..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={customComplaint}
                  onChange={(e) => setCustomComplaint(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCustomComplaint()}
                />
                <button
                  type="button"
                  onClick={handleAddCustomComplaint}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 rounded-lg text-slate-600 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* On Examination Tag Toggle Section */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block text-xs font-semibold text-slate-700 mb-2">On Examination (O/E) Parameters</label>
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {COMMON_FINDINGS.map((item) => {
                  const active = prescription.clinicalFindings.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleFinding(item)}
                      className={`text-[11px] px-2.5 py-1.5 rounded-full border transition-all text-left flex items-center justify-between gap-1 ${
                        active 
                          ? 'bg-emerald-600 border-emerald-600 text-white font-medium shadow-sm' 
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.split(': ')[1] || item}</span>
                      {active && <CheckCircle2 className="w-3 H-3 inline-block" />}
                    </button>
                  );
                })}
              </div>

              {/* Add custom finding */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Custom Clinical examination finding..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={customFinding}
                  onChange={(e) => setCustomFinding(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCustomFinding()}
                />
                <button
                  type="button"
                  onClick={handleAddCustomFinding}
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 rounded-lg text-slate-600 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Provisional Diagnosis Section */}
            <div className="pt-3 border-t border-slate-100">
              <label className="block text-xs font-semibold text-slate-700 mb-2">Provisional Diagnosis</label>
              <select
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all text-slate-700 mb-2.5"
                value={prescription.diagnosis}
                onChange={(e) => setPrescription(prev => ({ ...prev, diagnosis: e.target.value }))}
              >
                <option value="">-- Choose Common Diagnosis --</option>
                {COMMON_DIAGNOSES.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Or type diagnosis manually..."
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                value={prescription.diagnosis}
                onChange={(e) => setPrescription(prev => ({ ...prev, diagnosis: e.target.value }))}
              />
            </div>
          </div>
        )}

        {/* ================= TAB: MEDICATIONS ================= */}
        {activeTab === 'medications' && (
          <div className="space-y-4">

            {/* Frequently Used Drugs Section */}
            <div className="border border-blue-100 rounded-xl p-3.5 space-y-2.5 bg-[#f0f9ff]/50">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-black text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-500/20" />
                  <span>Frequently Used Therapeutics ({favorites.length})</span>
                </h4>
                <span className="text-[10px] text-slate-500">Click card to use • (+) to add Rx</span>
              </div>

              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {favorites.map((fav) => (
                    <div
                      key={fav.id}
                      onClick={() => useFavorite(fav)}
                      className="group border border-slate-200 bg-white hover:bg-blue-50/50 hover:border-blue-300 rounded-xl p-2.5 cursor-pointer shadow-sm transition-all flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-extrabold text-slate-800 text-[11px] leading-tight">
                          {fav.name}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {/* Add directly button */}
                          <button
                            type="button"
                            onClick={(e) => addFavoriteDirectly(fav, e)}
                            className="p-1 text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                            title="Add directly to prescription"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                          {/* Delete favorite button */}
                          <button
                            type="button"
                            onClick={(e) => deleteFavorite(fav.id, e)}
                            className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove from favorites"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <div className="text-[9px] text-slate-500 font-mono mt-1 flex flex-wrap gap-1 items-center">
                        <span className="bg-slate-100 px-1 py-0.2 rounded text-[8px] uppercase font-bold text-slate-500">{fav.type}</span>
                        <span>• {fav.dosage}</span>
                        <span>• {fav.frequency.split(' (')[0]}</span>
                      </div>
                      {fav.notes && (
                        <div className="text-[9px] text-slate-400 italic mt-0.5 line-clamp-1">
                          {fav.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                  <p className="text-xs text-slate-400 italic">No custom therapeutics saved yet.</p>
                  <p className="text-[9px] text-slate-400 mt-0.5 text-center">Type details in Manual addition below and click 'Save to Favorites'.</p>
                </div>
              )}
            </div>
            
            {/* Automated calculator takes precedent */}
            <DoseCalculator 
              patientWeight={prescription.patient.weight} 
              onAddMedication={(med) => handleAddMedication(med)} 
            />

            {/* Manual medication creator */}
            <div className="border border-slate-200/80 rounded-xl p-4 space-y-3.5 bg-slate-50/20">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1">
                <PencilLine className="w-4 h-4 text-slate-400" />
                <span>Manual Prescription Addition</span>
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-[11px] text-slate-500 mb-1">Medication Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Syrup Calpol 250 / Syrup Alerid"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={medName}
                    onChange={(e) => setMedName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Prep Form</label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none text-slate-600"
                    value={medType}
                    onChange={(e: any) => setMedType(e.target.value)}
                  >
                    <option value="Syrup">Syrup</option>
                    <option value="Drops">Infant Drops</option>
                    <option value="Suspension">Suspension</option>
                    <option value="Sachet">Dry Sachet</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Capsule">Capsule</option>
                    <option value="Inhaler">Aerosol Inhaler</option>
                    <option value="Ointment">Cream/Ointment</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Dose / Volume</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 ml or 2.5 ml"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
                    value={medDosage}
                    onChange={(e) => setMedDosage(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Frequency</label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none text-slate-600"
                    value={medFrequency}
                    onChange={(e) => setMedFrequency(e.target.value)}
                  >
                    <option value="Once Daily (OD)">Once Daily (OD)</option>
                    <option value="Twice Daily (BD)">Twice Daily (BD)</option>
                    <option value="Thrice Daily (TDS)">Thrice Daily (TDS)</option>
                    <option value="Four times (QID)">Four times (QID)</option>
                    <option value="As needed (PRN / SOS)">As needed (PRN / SOS)</option>
                    <option value="Immediate (STAT)">Immediate (STAT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Relationship to Food</label>
                  <select
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none text-slate-600"
                    value={medTiming}
                    onChange={(e: any) => setMedTiming(e.target.value)}
                  >
                    <option value="After Food">After Food</option>
                    <option value="Before Food">Before Food</option>
                    <option value="With Food">With Food</option>
                    <option value="Empty Stomach">Empty Stomach</option>
                    <option value="None">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 5 days / 1 week"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
                    value={medDuration}
                    onChange={(e) => setMedDuration(e.target.value)}
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[11px] text-slate-500 mb-1">Special Guidelines</label>
                  <input
                    type="text"
                    placeholder="e.g. Shake well / If temperature > 101 F"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none"
                    value={medNotes}
                    onChange={(e) => setMedNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAddManualMed}
                  disabled={!medName.trim()}
                  className="w-full py-2 px-3 border border-blue-200 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Custom Medicine</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!medName.trim()) return;
                    toggleFavorite({
                      name: medName.trim(),
                      type: medType,
                      dosage: medDosage.trim(),
                      frequency: medFrequency,
                      timing: medTiming,
                      duration: medDuration.trim(),
                      notes: medNotes.trim()
                    });
                  }}
                  disabled={!medName.trim()}
                  className="w-full py-2 px-3 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed shadow-sm"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                  <span>Save to Favorites</span>
                </button>
              </div>
            </div>

            {/* Currently Prescribed medications table */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">Added Medications ({prescription.medications.length})</label>
              {prescription.medications.length > 0 ? (
                <div className="border border-slate-100 rounded-xl divide-y divide-slate-100 bg-slate-50/10">
                  {prescription.medications.map((item, i) => (
                    <div key={item.id} className="flex justify-between items-center p-3 text-xs">
                      <div>
                        <div className="font-bold text-slate-700">{i + 1}. {item.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono flex gap-2">
                          <span>{item.type}</span>•
                          <span>{item.dosage}</span>•
                          <span>{item.frequency.split(' (')[0]}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteMedication(item.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 cursor-pointer transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic">No medicines listed yet.</p>
              )}
            </div>

            {/* Previous / Maintenance Medications Block */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-semibold text-slate-705 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-505"></span>
                <span>Previous / Chronic Maintenance Medications</span>
              </label>
              <textarea
                rows={3}
                placeholder="Enter details of any previous medications, long-term syrups, inhalers, or home remedies the child is currently taking..."
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-3 py-2 text-xs focus:outline-none transition-all text-slate-700 font-medium"
                value={prescription.previousMedications || ''}
                onChange={(e) => setPrescription(prev => ({ ...prev, previousMedications: e.target.value }))}
              />
              <p className="text-[10px] text-slate-400 italic leading-snug">
                These settings persist and render automatically in the final printable Rx as "Active Maintenance / Past Medications".
              </p>
            </div>
          </div>
        )}

        {/* ================= TAB: ADVICE & DIET ================= */}
        {activeTab === 'advice' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">Frequent Pediatric Advices Info</label>
              <div className="flex flex-wrap gap-1.5 mb-2 px-1">
                {PEDIATRIC_DIETARY_ADVICE.map((adviceLine) => (
                  <button
                    key={adviceLine.slice(0, 30)}
                    type="button"
                    onClick={() => {
                      setPrescription(prev => {
                        const hasAdvice = prev.advice.includes(adviceLine);
                        if (hasAdvice) {
                          // Strip it out
                          const clean = prev.advice.replace(adviceLine, '').trim();
                          return { ...prev, advice: clean };
                        } else {
                          const separator = prev.advice ? '\n\n' : '';
                          return { ...prev, advice: prev.advice + separator + adviceLine };
                        }
                      });
                    }}
                    className="text-[10px] px-2.5 py-1.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 rounded-lg text-slate-600 transition-all text-left truncate max-w-xs cursor-pointer"
                  >
                    {adviceLine}
                  </button>
                ))}
              </div>

              <textarea
                rows={5}
                placeholder="Review and customize dietary or post-fever advices for child recovery..."
                className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-3 py-2 text-xs focus:outline-none transition-all text-slate-700 font-medium"
                value={prescription.advice}
                onChange={(e) => setPrescription(prev => ({ ...prev, advice: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Follow-up Schedule</label>
                <input
                  type="text"
                  placeholder="e.g. After 3 days, or SOS"
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-lg px-3 py-2 text-xs focus:outline-none transition-all"
                  value={settings.nextFollowUp}
                  onChange={(e) => setSettings(prev => ({ ...prev, nextFollowUp: e.target.value }))}
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB: STYLE SETTINGS ================= */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">Letterhead Color Accent Theme</label>
              <select
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 text-xs focus:outline-none font-medium text-slate-700"
                value={settings.themeColor}
                onChange={(e) => setSettings(prev => ({ ...prev, themeColor: e.target.value }))}
                style={{
                  borderColor: themeColors.border,
                  backgroundColor: themeColors.subtle,
                  color: themeColors.text
                }}
              >
                <option value="royal">🟢 Classic Medical Teal (Royal)</option>
                <option value="teal">🟢 Mint Pediatric Teal (Teal)</option>
                <option value="indigo">🟢 Sage / Spruce Forest (Indigo)</option>
                <option value="deepsea">🔵 Turquoise Ocean (Deep Sea)</option>
                <option value="sky">🔵 Breezy Sky Blue (Sky)</option>
                <option value="cobalt">🔵 Cobalt Academic Blue (Cobalt)</option>
                <option value="navy">🔵 Deep Navy Blue (Navy)</option>
                <option value="grape">🟣 Lavender Grape (Grape)</option>
                <option value="orchid">🟣 Fuchsia Orchid (Orchid)</option>
                <option value="rose">🔴 Rosy Blossom Pink (Rose)</option>
                <option value="coral">🔴 Coral Red (Coral)</option>
                <option value="terracotta">🟠 Warm Terracotta Orange (Terracotta)</option>
                <option value="amber">🟠 Amber Honey Gold (Amber)</option>
                <option value="yellow">🟡 Olive Yellow (Yellow)</option>
                <option value="lime">🟢 Therapeutic Lime Green (Lime)</option>
                <option value="forest">🟢 Deep Jungle Forest (Forest)</option>
                <option value="emerald">🟢 Spirited Emerald Green (Emerald)</option>
                <option value="slate">⚫ Professional Charcoal Slate (Slate)</option>
                <option value="bronze">🟤 Cozy Antique Bronze (Bronze)</option>
                <option value="plum">🔴 Autumn Plum Magenta (Plum)</option>
              </select>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <label className="block text-xs font-semibold text-slate-700">Letterhead Branding & Utilities</label>
              
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Header Icon Style</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none"
                    value={settings.logoStyle}
                    onChange={(e: any) => setSettings(prev => ({ ...prev, logoStyle: e.target.value }))}
                  >
                    <option value="cute-panda">Cute Panda Face</option>
                    <option value="happy-baby">Happy Baby Face</option>
                    <option value="stethoscope-pulse">Stethoscope Heart</option>
                    <option value="teddy-bear">Friendly Teddy Bear</option>
                    <option value="shield-heart">Shield & Heart Protection</option>
                    <option value="baby-carriage">Classic Carriage</option>
                    <option value="little-sun">Happy Sunshine</option>
                    <option value="cute-rocket">Space Discovery Rocket</option>
                    <option value="happy-tooth">Happy Dental Tooth</option>
                    <option value="clinical-apple">Green Health Apple</option>
                    <option value="toy-blocks">Alphabet Toy Blocks</option>
                    <option value="sleeping-owl">Wise Sleeping Owl</option>
                    <option value="baby-pram">Retro Pediatric Pram</option>
                    <option value="stethoscope">Stethoscope Professional</option>
                    <option value="heart">Loving Care Heart</option>
                    <option value="activity">ECG Pulse Track</option>
                    <option value="baby">Healthy Pediatric Baby</option>
                    <option value="shield">Safe Medical Shield</option>
                    <option value="smile">Healthy Kid Smile</option>
                    <option value="sparkles">Wellness Spark Icon</option>
                    <option value="beaker">Chemical Research Beaker</option>
                    <option value="thermometer">Clinical Temperature</option>
                    <option value="pill">Capsule Treatment Pill</option>
                    <option value="syringe">Vaccine Syringe Logo</option>
                    <option value="brain">Cognitive Neurology Brain</option>
                    <option value="dna">Genetics DNA Helix</option>
                    <option value="heart-pulse">Cardiovascular Heart Rate</option>
                    <option value="first-aid">First Aid Kit Box</option>
                    <option value="microscope">Diagnostic Microscope</option>
                    <option value="eye">Ophthalmic Vision Circle</option>
                    <option value="sprout">Natural Sprout Health</option>
                    <option value="leaf">Organic Green Medicine</option>
                    <option value="droplet">Pure Hydration Droplet</option>
                    <option value="minimalist">Clinical Red Cross</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Watermark Layout</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none"
                    value={settings.watermark}
                    onChange={(e: any) => setSettings(prev => ({ ...prev, watermark: e.target.value }))}
                  >
                    <option value="bear">Centered Panda</option>
                    <option value="stethoscope">Stethoscope Loop</option>
                    <option value="shield">Medical Cross Badge</option>
                    <option value="none">Blank/None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Font Family</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none"
                    value={settings.fontStyle}
                    onChange={(e: any) => setSettings(prev => ({ ...prev, fontStyle: e.target.value }))}
                  >
                    <option value="sans">Jakarta Friendly</option>
                    <option value="serif">Classic Editorial Georgia</option>
                    <option value="clinical">Standard Clinical Sans</option>
                    <option value="playfair">Playfair Display Elegant</option>
                    <option value="space">Space Grotesk Modern</option>
                    <option value="mono">JetBrains Mono Code style</option>
                    <option value="outfit">Outfit Contemporary</option>
                    <option value="merriweather">Merriweather Serif</option>
                    <option value="poppins">Poppins Geometric</option>
                    <option value="montserrat">Montserrat Strong</option>
                    <option value="nunito">Nunito Cheerful Rounded</option>
                    <option value="open-sans">Open Sans Neutral</option>
                    <option value="courier">Courier Typewriter classic</option>
                    <option value="lora">Lora Soft Serif</option>
                    <option value="fira">Fira Sans Technical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-500 mb-1">Signature Mode</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none"
                    value={settings.signatureMode}
                    onChange={(e: any) => setSettings(prev => ({ ...prev, signatureMode: e.target.value }))}
                  >
                    <option value="draw">Draw Interactive Ink</option>
                    <option value="text">Digital Typed Font</option>
                    <option value="none">None/Leave Blank</option>
                  </select>
                </div>
              </div>

              {/* Toggle checklist items */}
              <div className="space-y-1.5 pt-2">
                <label className="flex items-center gap-1.5 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    checked={settings.showClinicalFeed}
                    onChange={(e) => setSettings(prev => ({ ...prev, showClinicalFeed: e.target.checked }))}
                  />
                  <span>Display Left Clinical Sidebar (Symptoms & Notes)</span>
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    checked={settings.showVitals}
                    onChange={(e) => setSettings(prev => ({ ...prev, showVitals: e.target.checked }))}
                  />
                  <span>Display Secondary Clinical Vitals Bar</span>
                </label>
              </div>
            </div>

            {/* Signature Draw Module */}
            {settings.signatureMode === 'draw' && (
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-semibold text-slate-700">Practice Virtual Signature</label>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-[11px] font-medium transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Redraw</span>
                  </button>
                </div>

                <div className="border-2 border-dashed border-blue-100 rounded-lg overflow-hidden bg-slate-50/50">
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={100}
                    className="w-full h-[100px] cursor-crosshair touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                  />
                </div>
                <p className="text-[10px] text-slate-400 leading-normal italic">
                  Draw above using a tablet pen or mouse, and it is instantly saved as a secure localized template on your letterhead!
                </p>
              </div>
            )}

            {/* Signature Title */}
            {settings.signatureMode === 'text' && (
              <div className="pt-3 border-t border-slate-100">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Typed Signature Name</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={settings.signatureText}
                  onChange={(e) => setSettings(prev => ({ ...prev, signatureText: e.target.value }))}
                />
              </div>
            )}
          </div>
        )}

      </div>

      {/* Editor footer actions */}
      <div className="bg-slate-50/80 border-t border-slate-100 p-4 shrink-0 space-y-2">
        <button
          type="button"
          onClick={clearActiveTabDetails}
          className="w-full py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold rounded-xl shadow-sm transition-all hover:text-red-650 hover:bg-red-50/40 hover:border-red-150 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{getClearButtonLabel()}</span>
        </button>
      </div>

    </div>
  );
}
