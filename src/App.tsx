import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Prescription, LetterheadSettings, DoctorProfile } from './types';
import PrescriptionForm from './components/PrescriptionForm';
import PrescriptionPreview from './components/PrescriptionPreview';
import GrowthImmunisationTab from './components/GrowthImmunisationTab';
import { 
  Stethoscope, HelpCircle, Eye, FileText, Printer, Heart, 
  Sparkles, CheckCircle, Info, LogOut, MessageSquare, Send, 
  Bot, RefreshCw, X, UserCheck, Shield, ClipboardCheck, Clock,
  ChevronRight, TrendingUp
} from 'lucide-react';

const THEME_MAPPING: Record<string, { primary: string; secondary: string; subtle: string; border: string; text: string }> = {
  royal: {
    primary: '#0f766e', // Classic Medical Teal
    secondary: '#0d9488',
    subtle: '#f0fdfa',
    border: '#99f6e4',
    text: '#115e59'
  },
  teal: {
    primary: '#0d9488', // Minty Pediatric Teal
    secondary: '#14b8a6',
    subtle: '#f0fdfa',
    border: '#ccfbf1',
    text: '#0f766e'
  },
  indigo: {
    primary: '#047857', // Sage / Spruce Forest Teal
    secondary: '#059669',
    subtle: '#f0fdf4',
    border: '#bbf7d0',
    text: '#064e3b'
  },
  deepsea: {
    primary: '#0891b2', // Turquoise Oceanic Teal
    secondary: '#06b6d4',
    subtle: '#ecfeff',
    border: '#a5f3fc',
    text: '#0e7490'
  },
  sky: {
    primary: '#0284c7', // Breezy Sky Blue
    secondary: '#0ea5e9',
    subtle: '#f0f9ff',
    border: '#bae6fd',
    text: '#0369a1'
  },
  cobalt: {
    primary: '#1d4ed8', // Cobalt Academic Blue
    secondary: '#3b82f6',
    subtle: '#eff6ff',
    border: '#bfdbfe',
    text: '#1e3a8a'
  },
  navy: {
    primary: '#1e3a8a', // Deep Navy Blue
    secondary: '#2563eb',
    subtle: '#f0f5ff',
    border: '#dbeafe',
    text: '#111827'
  },
  grape: {
    primary: '#6d28d9', // Lavender Grape
    secondary: '#8b5cf6',
    subtle: '#f5f3ff',
    border: '#ddd6fe',
    text: '#4c1d95'
  },
  orchid: {
    primary: '#a21caf', // Fuchsia Orchid
    secondary: '#d946ef',
    subtle: '#fdf4ff',
    border: '#f5d0fe',
    text: '#701a75'
  },
  rose: {
    primary: '#be123c', // Rosy Blossom Pink
    secondary: '#f43f5e',
    subtle: '#fff1f2',
    border: '#fecdd3',
    text: '#881337'
  },
  coral: {
    primary: '#e11d48', // Coral Red
    secondary: '#fb7185',
    subtle: '#fff1f2',
    border: '#ffe4e6',
    text: '#9f1239'
  },
  terracotta: {
    primary: '#c2410c', // Warm Terracotta Orange
    secondary: '#f97316',
    subtle: '#fff7ed',
    border: '#ffedd5',
    text: '#7c2d12'
  },
  amber: {
    primary: '#b45309', // Amber Honey Gold
    secondary: '#f59e0b',
    subtle: '#fffbeb',
    border: '#fef3c7',
    text: '#78350f'
  },
  yellow: {
    primary: '#854d0e', // Olive Yellow
    secondary: '#eab308',
    subtle: '#fefce8',
    border: '#fef9c3',
    text: '#713f12'
  },
  lime: {
    primary: '#4d7c0f', // Therapeutic Lime Green
    secondary: '#84cc16',
    subtle: '#f7fee7',
    border: '#ecfccb',
    text: '#3f6212'
  },
  forest: {
    primary: '#15803d', // Deep Jungle Forest
    secondary: '#22c55e',
    subtle: '#f0fdf4',
    border: '#dcfce7',
    text: '#14532d'
  },
  emerald: {
    primary: '#047857', // Spirited Emerald Green
    secondary: '#10b981',
    subtle: '#ecfdf5',
    border: '#d1fae5',
    text: '#064e3b'
  },
  slate: {
    primary: '#475569', // Professional Charcoal Slate
    secondary: '#64748b',
    subtle: '#f8fafc',
    border: '#e2e8f0',
    text: '#1e293b'
  },
  bronze: {
    primary: '#78350f', // Cozy Antique Bronze
    secondary: '#92400e',
    subtle: '#fffbeb',
    border: '#fef3c7',
    text: '#451a03'
  },
  plum: {
    primary: '#831843', // Autumn Plum Magenta
    secondary: '#db2777',
    subtle: '#fdf2f8',
    border: '#fce7f3',
    text: '#500724'
  }
};

const BLANK_PRESCRIPTION = {
  id: 'current-prescription',
  patient: {
    name: '',
    age: '',
    gender: '' as any,
    weight: '',
    height: '',
    temp: '',
    pulse: '',
    bp: '',
    spo2: '',
    date: new Date().toISOString().split('T')[0],
    feedingType: '' as any,
    immunizationUpToDate: true,
    immunizationStatus: 'up_to_date' as const,
    missingVaccines: ''
  },
  chiefComplaints: [],
  clinicalFindings: [],
  diagnosis: '',
  medications: [],
  previousMedications: '',
  investigations: [],
  advice: '',
  createdAt: new Date().toISOString()
};

const DEFAULT_PRESCRIPTION: Prescription = {
  id: 'current-prescription',
  patient: {
    name: 'Aarav Chatterjee',
    age: '2 Years 4 Months',
    gender: 'Boy',
    weight: '12.5',
    height: '88',
    temp: '101.4',
    pulse: '110',
    bp: '',
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
  previousMedications: 'Vitamin D3 drops (D3-Must) 1 ml once daily (long term maintainance)',
  investigations: ['Complete Blood Count (CBC)', 'C-Reactive Protein (CRP) Quantitative'],
  advice: 'Give plenty of oral electrolyte hydration fluids (ORS). Sponging with room-temperature tap water if fever climbs. Light semi-solid food (Mashed Khichdi/Curd-Rice). Avoid cows milk temporarily.',
  createdAt: new Date().toISOString()
};

const DEFAULT_SETTINGS: LetterheadSettings = {
  themeColor: 'teal',
  watermark: 'bear',
  showVitals: true,
  showClinicalFeed: true,
  logoStyle: 'cute-panda',
  qrCodeLink: 'https://wa.me/918918525976', // WhatsApp clinic link
  qrCodeEnabled: true,
  gridPaper: true,
  fontStyle: 'sans',
  customAdvice: '',
  nextFollowUp: 'After 3 days, or SOS',
  signatureMode: 'text',
  signatureText: 'Dr. Neeladri Dawn',
  signatureDrawData: '',
  headerStyle: 'classic'
};

export default function App() {
  // Doctor profile loading & state
  const [doctorProfile, setDoctorProfile] = useState<DoctorProfile | null>(() => {
    const saved = localStorage.getItem('doctor_profile_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Clean up any potential dark class that might be left on documentElement
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Main prescription state (defaulting to a completely blank slate)
  const [prescription, setPrescription] = useState<Prescription>(() => {
    const saved = localStorage.getItem('active_prescription_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return JSON.parse(JSON.stringify(BLANK_PRESCRIPTION));
      }
    }
    return JSON.parse(JSON.stringify(BLANK_PRESCRIPTION));
  });

  const [settings, setSettings] = useState<LetterheadSettings>(() => {
    const saved = localStorage.getItem('letterhead_settings_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_SETTINGS;
      }
    }
    return DEFAULT_SETTINGS;
  });

  // Doctor Setup input fields (for onboarding screen)
  const [setupName, setSetupName] = useState('');
  const [setupSpeciality, setSetupSpeciality] = useState('');
  const [setupRegNo, setSetupRegNo] = useState('');
  const [setupClinicName, setSetupClinicName] = useState('');
  const [setupClinicAddress, setSetupClinicAddress] = useState('');
  const [setupClinicPhone, setSetupClinicPhone] = useState('');
  const [setupClinicTimings, setSetupClinicTimings] = useState('');
  const [setupEmail, setSetupEmail] = useState('');

  // AI Chat states
  const [aiExpanded, setAiExpanded] = useState(true);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: `Hello! I am your **Pediatric AI Companion**. 👋
      
I can assist with:
- **Dosage computations** based on child weight (e.g., *15 mg/kg* for Paracetamol).
- **Intervention suggestions** for cough, cold, fever, or gastroenteritis.
- **Supportive parenting notes** to paste on pediatric prescriptions.

How can I assist your consultation session today?`
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);



  const [mobileMode, setMobileMode] = useState<'edit' | 'view' | 'growth' | 'chat'>('edit');
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'prescription' | 'growth'>('prescription');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [showPrintHelp, setShowPrintHelp] = useState(false);

  // Write changes to local cached storage
  useEffect(() => {
    localStorage.setItem('active_prescription_v1', JSON.stringify(prescription));
  }, [prescription]);

  useEffect(() => {
    localStorage.setItem('letterhead_settings_v1', JSON.stringify(settings));
  }, [settings]);

  const activeTheme = THEME_MAPPING[settings.themeColor] || THEME_MAPPING.royal;

  const handlePrint = () => {
    window.print();
  };

  // Profile management logins
  const handleSaveProfile = async (profile: DoctorProfile) => {
    localStorage.setItem('doctor_profile_v1', JSON.stringify(profile));
    setDoctorProfile(profile);
    
    // Set dynamic signature text matching profile name
    setSettings(prev => ({ ...prev, signatureText: profile.name }));

    // Reset current prescription to blank slate
    setPrescription(JSON.parse(JSON.stringify(BLANK_PRESCRIPTION)));
  };

  const handleCustomSetupLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const customProfile: DoctorProfile = {
      name: setupName,
      speciality: setupSpeciality,
      registrationNumber: setupRegNo,
      clinicName: setupClinicName,
      clinicAddress: setupClinicAddress,
      clinicPhone: setupClinicPhone,
      clinicTimings: setupClinicTimings,
      email: setupEmail
    };
    handleSaveProfile(customProfile);
  };

  const handleLogout = () => {
    localStorage.removeItem('doctor_profile_v1');
    setDoctorProfile(null);
    setPrescription(JSON.parse(JSON.stringify(BLANK_PRESCRIPTION)));
  };

  // AI Chat communication
  const handleSendMessage = async (customPrompt?: string) => {
    const promptToSend = customPrompt || userInput;
    if (!promptToSend.trim()) return;

    const query = promptToSend;
    if (!customPrompt) {
      setUserInput('');
    }

    const currentHistory = [...chatMessages, { role: 'user' as const, content: query }];
    setChatMessages(currentHistory);
    setIsAiTyping(true);

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: currentHistory })
      });

      const data = await resp.json();
      if (resp.ok) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.text || "I was unable to retrieve a response, please try another query." }]);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', content: `⚠️ **Error Code:** ${data.error || "Communication failure"}` }]);
      }
    } catch (err: any) {
      setChatMessages(prev => [...prev, { role: 'assistant', content: `⚠️ Failed to reach the Pediatric AI Assistant. Is your dev server or secret configured?` }]);
    } finally {
      setIsAiTyping(false);
    }
  };

  // Diagnostic prefill clear
  const handleWipePrescription = () => {
    setPrescription(JSON.parse(JSON.stringify(BLANK_PRESCRIPTION)));
  };

  // ---------------- ONBOARDING GATE ----------------
  if (!doctorProfile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 select-none antialiased relative bg-[#f8fafc] text-slate-800">
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl w-full border border-slate-200 shadow-xl rounded-3xl overflow-hidden bg-white"
        >
          
          {/* Top pediatric brand banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-6 translate-x-3">
              <Stethoscope className="w-64 h-64" />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-blue-100">designed by Dr. Neeladri</span>
                <h1 className="text-2xl font-black tracking-tight font-display">PediScript- Your Own Clinic Companion</h1>
              </div>
            </div>
            <p className="text-blue-100/90 text-xs mt-3.5 leading-relaxed max-w-lg font-medium">
              A high-fidelity consultation platform optimized for child specialists. Enter your professional clinic parameters first to proceed.
            </p>
          </div>

          <div className="p-8 space-y-6">
            {/* Custom Doctor setup form */}
            <form onSubmit={handleCustomSetupLogin} className="space-y-4">
              <div className="flex items-center gap-2 border-b-2 pb-1 border-slate-100">
                <UserCheck className="w-4 h-4 text-slate-500" />
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Enter Doctor Credentials</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Doctor Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Doctor Name</label>
                  <input
                    type="text"
                    required
                    value={setupName}
                    onChange={(e) => setSetupName(e.target.value)}
                    placeholder="e.g. Dr. John Doe"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-850"
                  />
                </div>

                {/* Specialty */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Speciality / Qualifications</label>
                  <input
                    type="text"
                    required
                    value={setupSpeciality}
                    onChange={(e) => setSetupSpeciality(e.target.value)}
                    placeholder="e.g. Pediatrician • MBBS, MD"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Registration */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Medical Registration Number</label>
                  <input
                    type="text"
                    required
                    value={setupRegNo}
                    onChange={(e) => setSetupRegNo(e.target.value)}
                    placeholder="e.g. Regd No: 00000 (WBMC)"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Professional Consultation Email</label>
                  <input
                    type="email"
                    required
                    value={setupEmail}
                    onChange={(e) => setSetupEmail(e.target.value)}
                    placeholder="e.g. doctor@hospital.com"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Clinic Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Clinic / Chambers Name <span className="text-[9px] text-slate-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    value={setupClinicName}
                    onChange={(e) => setSetupClinicName(e.target.value)}
                    placeholder="e.g. Calcutta Consultation Clinic"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Timings */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Working Hours / Timings <span className="text-[9px] text-slate-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    value={setupClinicTimings}
                    onChange={(e) => setSetupClinicTimings(e.target.value)}
                    placeholder="e.g. Mon-Sat 9AM to 4PM"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Clinic Phone / WA Contact</label>
                  <input
                    type="text"
                    required
                    value={setupClinicPhone}
                    onChange={(e) => setSetupClinicPhone(e.target.value)}
                    placeholder="e.g. +91 9999999999"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Clinic Address <span className="text-[9px] text-slate-400 font-normal">(Optional)</span></label>
                  <input
                    type="text"
                    value={setupClinicAddress}
                    onChange={(e) => setSetupClinicAddress(e.target.value)}
                    placeholder="e.g. Kolkata, WB"
                    className="w-full border border-slate-200 rounded-xl p-2.5 text-xs focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                  />
                </div>

              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  💾 Save Profile & Start Consultation
                </button>
              </div>
            </form>
          </div>
          
        </motion.div>
      </div>
    );
  }

  // ---------------- MAIN WORKSPACE RUNTIME ----------------
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-500/20 antialiased bg-[#f1f5f9] text-slate-800">
      
      {/* Upper Navigation & Dynamic Doctor Details */}
      <header className="border-b py-3.5 px-6 shadow-sm shrink-0 no-print bg-white border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          {/* Logo brand / Dynamic doctor name */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-500/10">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold tracking-tight text-base text-slate-800">{doctorProfile.name}</span>
                {doctorProfile.registrationNumber && (
                  <span className="border text-[10px] font-mono font-medium px-2 py-0.1 rounded-md bg-slate-100 border-slate-200 text-slate-500">
                    Reg: {doctorProfile.registrationNumber}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-slate-500">
                {doctorProfile.clinicName || 'Pediatric Clinic'}
                {doctorProfile.clinicTimings ? ` • ${doctorProfile.clinicTimings}` : ''}
              </p>
            </div>
          </div>
 
          {/* Action Header controls */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-end gap-1.5 md:gap-2 text-slate-800 w-full md:w-auto animate-fade-in">
            
            {/* Desktop-only Workspace Switcher */}
            <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 select-none mr-1.5 shrink-0 no-print">
              <button
                type="button"
                onClick={() => {
                  setActiveWorkspaceTab('prescription');
                }}
                style={
                  activeWorkspaceTab === 'prescription'
                    ? { backgroundColor: activeTheme.subtle, color: activeTheme.text, borderColor: activeTheme.border }
                    : {}
                }
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border border-transparent ${
                  activeWorkspaceTab === 'prescription'
                    ? 'shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-250/20'
                }`}
              >
                <FileText className="w-3.5 h-3.5" style={{ color: activeWorkspaceTab === 'prescription' ? activeTheme.primary : undefined }} />
                <span>Prescription Workspace</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveWorkspaceTab('growth');
                }}
                style={
                  activeWorkspaceTab === 'growth'
                    ? { backgroundColor: activeTheme.subtle, color: activeTheme.text, borderColor: activeTheme.border }
                    : {}
                }
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border border-transparent ${
                  activeWorkspaceTab === 'growth'
                    ? 'shadow-sm'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-250/20'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" style={{ color: activeWorkspaceTab === 'growth' ? activeTheme.primary : undefined }} />
                <span>Growth and NIS</span>
              </button>
            </div>

            {/* Wipe Active Patient Content */}
            <button
              type="button"
              onClick={handleWipePrescription}
              className="bg-red-50 hover:bg-red-100 text-red-650 p-2 md:p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 text-[10px] md:text-xs font-bold border border-red-150 w-full md:w-auto"
              title="Clear current patient fields and start fresh"
            >
              <RefreshCw className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">New Patient</span>
            </button>

            {/* Logout/Exit Doctor */}
            <button
              type="button"
              onClick={handleLogout}
              className="bg-slate-50 hover:bg-red-50 hover:text-red-600 text-slate-500 p-2 md:p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 text-[10px] md:text-xs font-bold border border-slate-200 w-full md:w-auto"
              title="Sign out of current doctor session"
            >
              <LogOut className="w-3.5 h-3.5 shrink-0 text-red-400" />
              <span className="truncate">Switch Profile</span>
            </button>

            {/* Print trigger */}
            <button
              type="button"
              onClick={handlePrint}
              style={{ background: activeTheme.primary }}
              className="hover:brightness-110 text-white p-2 md:px-4 md:py-2.5 rounded-xl text-[10px] md:text-xs font-extrabold transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-1 cursor-pointer shadow-md w-full md:w-auto"
            >
              <Printer className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Print</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Core Area Split */}
      <main className={`flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 overflow-hidden ${isMobile ? 'pb-28' : ''}`}>
        
        {/* Help banner details (Expandable) */}
        {showPrintHelp && (
          <div className="mb-5 bg-blue-50 border border-blue-200 p-5 rounded-2xl flex items-start gap-3 shadow-inner no-print transition-all">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1.5 text-xs text-slate-600">
              <h4 className="font-bold text-slate-800 text-sm">💡 Pediatrician Instruction Guide for A4 Printing & Saving:</h4>
              <p className="leading-relaxed">
                This layouts generate exact standard **ISO A4 formats (210mm × 297mm)**. To ensure optimal output on physical sheets, apply these choices on your system Print Dialog:
              </p>
              <ol className="list-decimal pl-5 space-y-1 font-medium mt-1 text-slate-600">
                <li>Choose <strong className="text-blue-800">"Save as PDF"</strong> or your office laserjet printer.</li>
                <li>Set <strong className="text-blue-800">Margins</strong> to <strong className="text-blue-800">"None"</strong> or <strong className="text-blue-800">"Minimum"</strong>.</li>
                <li>Ensure the checkpoint for <strong className="text-blue-800">"Background Graphics"</strong> is <strong className="text-blue-800">checked/enabled</strong> (critical to render themes, watermark, grids, and logos).</li>
                <li>Uncheck <strong className="text-blue-800">"Headers and Footers"</strong> to drop system URL and time stamps.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Mobile Floating Action Nav Bar with sliding layoutId background pill */}
        {isMobile && (
          <div className="fixed bottom-6 left-4 right-4 z-50 flex items-center gap-1 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] no-print max-w-md mx-auto">
            <button
              type="button"
              onClick={() => {
                setMobileMode('edit');
                setActiveWorkspaceTab('prescription');
              }}
              className="flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 relative cursor-pointer bg-transparent border-none"
            >
              {mobileMode === 'edit' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <FileText className={`w-4 h-4 z-10 transition-colors duration-200 ${mobileMode === 'edit' ? 'text-blue-600 scale-105' : 'text-slate-400'}`} />
              <span className={`text-[9px] z-10 font-bold tracking-tight transition-colors duration-200 ${mobileMode === 'edit' ? 'text-blue-600 font-extrabold' : 'text-slate-500'}`}>Patient</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMode('view');
                setActiveWorkspaceTab('prescription');
              }}
              className="flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 relative cursor-pointer bg-transparent border-none"
            >
              {mobileMode === 'view' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Eye className={`w-4 h-4 z-10 transition-colors duration-200 ${mobileMode === 'view' ? 'text-indigo-600 scale-105' : 'text-slate-400'}`} />
              <span className={`text-[9px] z-10 font-bold tracking-tight transition-colors duration-200 ${mobileMode === 'view' ? 'text-indigo-600 font-extrabold' : 'text-slate-500'}`}>Prescription</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMode('growth');
                setActiveWorkspaceTab('growth');
              }}
              className="flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 relative cursor-pointer bg-transparent border-none"
            >
              {mobileMode === 'growth' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-x-0 inset-y-0 bg-indigo-50 border border-indigo-100 rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <TrendingUp className={`w-4 h-4 z-10 transition-colors duration-200 ${mobileMode === 'growth' ? 'text-indigo-600 scale-105' : 'text-slate-400'}`} />
              <span className={`text-[9px] z-10 font-bold tracking-tight transition-colors duration-200 ${mobileMode === 'growth' ? 'text-indigo-600 font-extrabold' : 'text-slate-500'}`}>Growth and NIS</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMode('chat');
                setActiveWorkspaceTab('prescription');
              }}
              className="flex-1 py-1.5 text-xs font-bold rounded-xl transition-all flex flex-col items-center justify-center gap-1 relative cursor-pointer bg-transparent border-none"
            >
              {mobileMode === 'chat' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-violet-50 border border-violet-100 rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <MessageSquare className={`w-4 h-4 z-10 transition-colors duration-200 ${mobileMode === 'chat' ? 'text-violet-600 scale-105' : 'text-slate-400'}`} />
              <span className={`text-[9px] z-10 font-bold tracking-tight transition-colors duration-200 ${mobileMode === 'chat' ? 'text-violet-600 font-extrabold' : 'text-slate-500'}`}>Help &amp; Support</span>
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {activeWorkspaceTab === 'prescription' ? (
            <motion.div
              key="prescription-workspace"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start w-full"
            >
              {(!isMobile || mobileMode === 'edit') && (
                <motion.section 
                  key="form-section-container"
                  initial={isMobile ? { opacity: 0, scale: 0.98, y: 12 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={isMobile ? { opacity: 0, scale: 0.98, y: -12, transition: { duration: 0.18 } } : undefined}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`lg:col-span-4 ${aiExpanded ? 'lg:col-span-4' : 'lg:col-span-5'} no-print`}
                >
                  <PrescriptionForm
                    prescription={prescription}
                    setPrescription={setPrescription}
                    settings={settings}
                    setSettings={setSettings}
                    onPrint={handlePrint}
                    themeColors={activeTheme}
                  />
                </motion.section>
              )}

              {(!isMobile || mobileMode === 'view') && (
                <motion.section 
                  key="preview-section-container"
                  id="prescription-rendered-section"
                  initial={isMobile ? { opacity: 0, scale: 0.98, y: 12 } : { opacity: 0, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={isMobile ? { opacity: 0, scale: 0.98, y: -12, transition: { duration: 0.18 } } : undefined}
                  transition={{ duration: 0.3, ease: 'easeOut', delay: isMobile ? 0 : 0.05 }}
                  className={`${aiExpanded ? 'lg:col-span-5' : 'lg:col-span-7'} flex justify-center items-start lg:sticky lg:top-6 overflow-y-auto w-full`}
                >
                  <div className="w-full max-w-[210mm] border border-slate-300 shadow-2xl rounded-2xl overflow-hidden bg-white print:border-none print:shadow-none print:rounded-none">
                    
                    {/* Screen Helper banner with interactive controls */}
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-b-slate-200 text-[11px] font-medium no-print select-none transition-colors text-slate-500">
                      <span className="flex items-center gap-1.5 font-sans">
                        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span>ISO A4 Letterhead Preview</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span>210mm × 297mm Portrait</span>
                      </div>
                    </div>

                    {/* The printable prescription target */}
                    <PrescriptionPreview
                      prescription={prescription}
                      settings={settings}
                      doctorProfile={doctorProfile}
                      themeColors={activeTheme}
                    />
                  </div>
                </motion.section>
              )}

              {(!isMobile || mobileMode === 'chat') && (aiExpanded || isMobile) && (
                <motion.section 
                  key="chat-section-container"
                  initial={isMobile ? { opacity: 0, scale: 0.98, y: 12 } : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={isMobile ? { opacity: 0, scale: 0.98, y: -12, transition: { duration: 0.18 } } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`lg:col-span-3 bg-white border border-slate-200 rounded-2xl shadow-lg lg:sticky lg:top-6 flex flex-col h-[calc(100vh-120px)] overflow-hidden no-print ${
                    isMobile ? 'w-full h-[68vh]' : ''
                  }`}
                >
                  
                  {/* AI Assistant Chat Header */}
                  <div className="p-3 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex justify-between items-center select-none shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-white/10 rounded-lg text-indigo-400">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black tracking-wide flex items-center gap-1">
                          <span>Help &amp; Support Console</span>
                        </h3>
                        <span className="text-[9px] text-indigo-300 font-mono">Pediatric Consultation Core</span>
                      </div>
                    </div>
                    {!isMobile && (
                      <button
                        type="button"
                        onClick={() => setAiExpanded(false)}
                        className="text-slate-400 hover:text-white transition-colors cursor-pointer lg:block hidden"
                        title="Collapse Assistant Panel"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Chat Messages Frame */}
                  <div className="flex-1 p-3 overflow-y-auto space-y-3.5 bg-slate-50/50 scrollbar-thin">
                    {chatMessages.map((msg, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className={`flex flex-col max-w-[90%] ${
                          msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                        }`}
                      >
                        <span className="text-[9px] font-semibold text-slate-450 uppercase mb-0.5 px-1 font-mono">
                          {msg.role === 'user' ? 'Doctor' : 'Help Desk'}
                        </span>
                        <div className={`p-2.5 rounded-2xl text-[11px] leading-relaxed shadow-sm whitespace-pre-line ${
                          msg.role === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-white border border-slate-200/80 text-slate-700 rounded-bl-none prose prose-slate max-w-none'
                        }`}>
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                    
                    {isAiTyping && (
                      <div className="flex flex-col max-w-[90%] mr-auto items-start animate-pulse">
                        <span className="text-[9px] font-semibold text-slate-450 uppercase mb-0.5 px-1 font-mono">Consultation Desk</span>
                        <div className="p-2.5 rounded-2xl text-[11px] bg-slate-100 text-slate-505 border border-slate-200 rounded-bl-none flex items-center gap-1.5 font-sans font-medium">
                          <span className="w-1.5 h-1.5 bg-indigo-505 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-indigo-505 rounded-full animate-bounce delay-100"></span>
                          <span className="w-1.5 h-1.5 bg-indigo-505 rounded-full animate-bounce delay-200"></span>
                          <span>Formulating support guides...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Helper prompts */}
                  <div className="p-2 bg-slate-100 border-t border-slate-200 text-[10px] space-y-1.5 shrink-0 select-none">
                    <span className="font-bold text-slate-400 block uppercase tracking-wider text-[8px] px-1">Quick Support Query Prompts:</span>
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => handleSendMessage("Suggest exact PRN Paracetamol (120mg/5ml suspension) dosing range for a child of weight 12.5 kg.")}
                        className="bg-white hover:bg-slate-50 hover:text-blue-600 border border-slate-200 rounded-lg px-2 py-1 text-slate-600 select-none cursor-pointer text-left transition-colors font-sans"
                      >
                        📊 12.5kg Paracetamol SOS Dosage
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSendMessage("Provide pediatric guidelines & supportive advice to type on a prescription for a 2yo child recovery from water diarrhoea.")}
                        className="bg-white hover:bg-slate-50 hover:text-blue-600 border border-slate-200 rounded-lg px-2 py-1 text-slate-600 select-none cursor-pointer text-left transition-colors font-sans"
                      >
                        🍼 Diarrhoea Dietary Notes
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSendMessage("What are normal HR and SpO2 ranges for a child aged 2 years old?")}
                        className="bg-white hover:bg-slate-50 hover:text-blue-600 border border-slate-200 rounded-lg px-2 py-1 text-slate-600 select-none cursor-pointer text-left transition-colors font-sans"
                      >
                        💓 2Yo Vital Ranges
                      </button>
                    </div>
                  </div>

                  {/* Provide Feedback Section inside Support Tab */}
                  <div className="p-3 border-t border-slate-100 bg-[#f8fafc] space-y-2 shrink-0 select-none">
                    <div className="flex justify-between items-center text-[10px] font-black tracking-wider text-slate-500 uppercase">
                      <span>📣 Provide Feedback</span>
                      <span className="text-[8px] font-medium tracking-normal text-indigo-600 capitalize">External Google Form</span>
                    </div>
                    <a
                      href="https://forms.gle/ttF6Hx3G8j1JwRtw5"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: activeTheme.subtle, color: activeTheme.text, borderColor: activeTheme.border }}
                      className="w-full py-2 px-3 rounded-xl border text-xs font-bold transition-all hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center transform active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" style={{ color: activeTheme.primary }} />
                      <span>Provide a Feedback</span>
                    </a>
                  </div>

                  {/* Chat Input Box */}
                  <div className="p-2 border-t border-slate-200 bg-white flex items-center gap-1.5 shrink-0">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask Help &amp; Support Assistant..."
                      disabled={isAiTyping}
                      className="flex-1 text-[11px] border border-slate-200 rounded-xl p-2 focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => handleSendMessage()}
                      disabled={isAiTyping || !userInput.trim()}
                      className="bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white p-2 rounded-xl transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.section>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="growth-immunisation-workspace"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <GrowthImmunisationTab
                patient={prescription.patient}
                themeColors={activeTheme}
                onResetPatientVaccineParams={() => {
                  setPrescription(prev => ({
                    ...prev,
                    patient: {
                      ...prev.patient,
                      immunizationUpToDate: true,
                      immunizationStatus: 'up_to_date',
                      missingVaccines: ''
                    }
                  }));
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Friendly Bottom footer decoration status */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200 mt-auto no-print select-none">
        <p className="font-semibold font-sans">
          Pediatric Consultation Companion designed by Dr. Neeladri.
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">
          Secure, Offline-Ready Pediatric Solution Stamped with Precision
        </p>
      </footer>

    </div>
  );
}
