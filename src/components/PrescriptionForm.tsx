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
        temp: '101.4',
        pulse: '110',
        bp: '90/60',
        spo2: '98',
        date: new Date().toISOString().split('T')[0],
        feedingType: 'Solid/Regular',
        immunizationUpToDate: true
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

  const clearAllPrescriptionData = () => {
    if (window.confirm("Are you sure you want to clear all active patient entries?")) {
      setPrescription({
        id: Math.random().toString(),
        patient: {
          name: '',
          age: '',
          gender: '',
          weight: '',
          temp: '',
          pulse: '',
          bp: '',
          spo2: '',
          date: new Date().toISOString().split('T')[0],
          feedingType: '',
          immunizationUpToDate: true
        },
        chiefComplaints: [],
        clinicalFindings: [],
        diagnosis: '',
        medications: [],
        advice: '',
        createdAt: new Date().toISOString()
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/85 shadow-md overflow-hidden flex flex-col h-[calc(100vh-140px)] lg:h-[820px] transition-all no-print">
      
      {/* Tab Navigation header */}
      <div className="flex bg-slate-50 border-b border-slate-100 p-1 divide-x divide-slate-100">
        <button
          type="button"
          onClick={() => setActiveTab('patient')}
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'patient' 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Patient Profile</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('clinical')}
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'clinical' 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <Baby className="w-4 h-4" />
          <span>Clinical Exam</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('medications')}
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'medications' 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <HeartPulse className="w-4 h-4" />
          <span>Rx Medications</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('advice')}
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'advice' 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <ListCheck className="w-4 h-4" />
          <span>Diet & Advice</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('settings')}
          className={`flex-1 flex flex-col items-center gap-1.5 py-3 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'settings' 
              ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>Letterhead Style</span>
        </button>
      </div>

      {/* Editor Content Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">
        
        {/* ================= TAB: PATIENT ================= */}
        {activeTab === 'patient' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-blue-50/40 p-3 rounded-xl border border-blue-100/40">
              <span className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Dr. Neeladri, use the demo pre-filler to quickly test-drive calculated pediatric doses!
              </span>
              <button
                type="button"
                onClick={loadDemoPatient}
                className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700 active:scale-95 flex items-center gap-1 cursor-pointer transition-all shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Onload Demo Case</span>
              </button>
            </div>

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

              <div className="flex items-center gap-2 py-2 mt-4 col-span-2">
                <input
                  id="imm-chk"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  checked={prescription.patient.immunizationUpToDate}
                  onChange={(e) => handlePatientChange('immunizationUpToDate', e.target.checked)}
                />
                <label htmlFor="imm-chk" className="text-xs font-medium text-slate-600 cursor-pointer select-none">
                  Child Pediatric Immunizations are strictly Up-To-Date for Age
                </label>
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

              <button
                type="button"
                onClick={handleAddManualMed}
                disabled={!medName.trim()}
                className="w-full py-2 px-3 border border-blue-200 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Custom Medicine</span>
              </button>
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
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'royal', label: 'Royal Blue', color: 'bg-blue-600' },
                  { id: 'teal', label: 'Pediatric Teal', color: 'bg-teal-700' },
                  { id: 'indigo', label: 'Indigo Blue', color: 'bg-indigo-600' },
                  { id: 'deepsea', label: 'Deep Sea Blue', color: 'bg-cyan-700' }
                ].map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setSettings(prev => ({ ...prev, themeColor: th.id as any }))}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 text-[10px] font-semibold transition-all cursor-pointer ${
                      settings.themeColor === th.id
                        ? 'border-blue-400 bg-blue-50 text-blue-600 shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-500'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${th.color} shadow-inner`}></span>
                    <span>{th.label}</span>
                  </button>
                ))}
              </div>
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
                <label className="flex items-center gap-1.5 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    checked={settings.gridPaper}
                    onChange={(e) => setSettings(prev => ({ ...prev, gridPaper: e.target.checked }))}
                  />
                  <span>Enable Subtle Grid Paper Texture Block</span>
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
                  Draw above using a tablet pen or mouse, and it is instantly saved as a secure localized template on Dr. Neeladri Dawn's letterhead!
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
          onClick={onPrint}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Launch System Print / PDF Export (A4)</span>
        </button>

        <button
          type="button"
          onClick={clearAllPrescriptionData}
          className="w-full py-2 border border-slate-250 bg-white hover:bg-slate-100 text-slate-600 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Profile Details</span>
        </button>
      </div>

    </div>
  );
}
