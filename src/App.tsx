import React, { useState, useEffect } from 'react';
import { Prescription, LetterheadSettings } from './types';
import PrescriptionForm from './components/PrescriptionForm';
import PrescriptionPreview from './components/PrescriptionPreview';
import { Stethoscope, HelpCircle, Eye, FileText, Printer, FileDown, Heart, Sparkles, CheckCircle, Info } from 'lucide-react';

const THEME_MAPPING = {
  royal: {
    primary: '#1d4ed8', // Royal indigo blue
    secondary: '#3b82f6',
    subtle: '#eff6ff',
    border: '#bfdbfe',
    text: '#1e3a8a'
  },
  teal: {
    primary: '#0f766e', // Pediatric warm teal
    secondary: '#0d9488',
    subtle: '#f0fdfa',
    border: '#99f6e4',
    text: '#115e59'
  },
  indigo: {
    primary: '#4338ca', // Deep academic blue
    secondary: '#6366f1',
    subtle: '#f5f3ff',
    border: '#c7d2fe',
    text: '#312e81'
  },
  deepsea: {
    primary: '#0369a1', // Bright coastal pediatric blue
    secondary: '#0ea5e9',
    subtle: '#f0f9ff',
    border: '#bae6fd',
    text: '#0c4a6e'
  }
};

const DEFAULT_PRESCRIPTION: Prescription = {
  id: 'current-prescription',
  patient: {
    name: 'Aarav Chatterjee',
    age: '2 Years 4 Months',
    gender: 'Boy',
    weight: '12.5',
    temp: '101.4',
    pulse: '110',
    bp: '',
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
};

const DEFAULT_SETTINGS: LetterheadSettings = {
  themeColor: 'royal',
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
  signatureDrawData: ''
};

export default function App() {
  // Persistence Loading
  const [prescription, setPrescription] = useState<Prescription>(() => {
    const saved = localStorage.getItem('active_prescription_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_PRESCRIPTION;
      }
    }
    return DEFAULT_PRESCRIPTION;
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

  // Mobile viewport layout tracker ('edit' or 'view')
  const [mobileMode, setMobileMode] = useState<'edit' | 'view'>('edit');
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

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col selection:bg-blue-500/20 antialiased">
      
      {/* Upper Navigation & Doctor Badge Banner */}
      <header className="bg-white border-b border-slate-205 py-3.5 px-6 shadow-sm shrink-0 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          
          {/* Logo brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 tracking-tight text-base">Dr. Neeladri Dawn's Portal</span>
                <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-0.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                  <span>WBMC Registered</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Professional Pediatric Prescription & A4 Letterhead Generator</p>
            </div>
          </div>

          {/* Action Header controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowPrintHelp(!showPrintHelp)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold border border-slate-200"
              title="How to print perfectly"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Perfect PDF Guide</span>
            </button>

            {/* Print trigger */}
            <button
              type="button"
              onClick={handlePrint}
              style={{ background: activeTheme.primary }}
              className="hover:brightness-110 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all hover:shadow-lg active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 Prescription</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Core Area Split */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start overflow-hidden">
        
        {/* Help banner details (Expandable) */}
        {showPrintHelp && (
          <div className="lg:col-span-12 bg-blue-50 border border-blue-200 p-4 rounded-2xl flex items-start gap-3 shadow-inner no-print transition-all">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="space-y-1.5 text-xs text-slate-600">
              <h4 className="font-bold text-slate-800 text-sm">💡 Pediatrician Instruction Guide for Pristine A4 Printing & Saving:</h4>
              <p className="leading-relaxed">
                This designer generates standard **ISO A4 format (210mm × 297mm)** outputs dynamically. To ensure it fits exactly on one physical paper sheet, apply these settings in your native browser's Print dialog preview:
              </p>
              <ol className="list-decimal pl-5 space-y-1 font-medium mt-1">
                <li>Under <strong className="text-blue-800">Destination</strong>, choose <strong className="text-blue-800">"Save as PDF"</strong> or your office office printer.</li>
                <li>Set <strong className="text-blue-800">Margins</strong> to <strong className="text-blue-800">"None"</strong> or <strong className="text-blue-800">"Minimum"</strong> (this preserves our 14mm clinical safe paddings).</li>
                <li>Ensure the checkbox for <strong className="text-blue-800">"Background Graphics"</strong> is <strong className="text-blue-800">checked/enabled</strong> (to render logos, grids, status highlights, and watermarks!).</li>
                <li>Uncheck <strong className="text-blue-800">"Headers and Footers"</strong> to strip standard browser URL stamps and page numbering.</li>
              </ol>
            </div>
          </div>
        )}

        {/* Mobile View Toggle Rail */}
        <div className="lg:hidden col-span-1 flex items-center gap-1 bg-slate-200/60 rounded-xl p-1 no-print">
          <button
            type="button"
            onClick={() => setMobileMode('edit')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
              mobileMode === 'edit' ? 'bg-white text-blue-600 shadow' : 'text-slate-500'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Form Editor</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMode('view')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1 ${
              mobileMode === 'view' ? 'bg-white text-blue-600 shadow' : 'text-slate-500'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>A4 Letterhead</span>
          </button>
        </div>

        {/* Column 1: Form Inputs (~5 cols) */}
        <section className={`lg:col-span-5 ${mobileMode !== 'edit' ? 'hidden lg:block' : ''} no-print`}>
          <PrescriptionForm
            prescription={prescription}
            setPrescription={setPrescription}
            settings={settings}
            setSettings={setSettings}
            onPrint={handlePrint}
            themeColors={activeTheme}
          />
        </section>

        {/* Column 2: Printable letterhead screen mapping (~7 cols) */}
        <section 
          id="prescription-rendered-section" 
          className={`lg:col-span-7 flex justify-center items-start lg:sticky lg:top-6 overflow-y-auto ${
            mobileMode !== 'view' ? 'hidden lg:flex' : ''
          }`}
        >
          <div className="w-full max-w-[210mm] border border-slate-300 shadow-2xl rounded-2xl overflow-hidden bg-white print:border-none print:shadow-none print:rounded-none">
            
            {/* Screen Helper banner */}
            <div className="bg-slate-100 flex items-center justify-between px-4 py-2 border-b text-[11px] font-medium text-slate-500 no-print select-none">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span>Live Interactive A4 Letterhead Template View</span>
              </span>
              <span>210mm × 297mm Portrait</span>
            </div>

            {/* The printable prescription target */}
            <PrescriptionPreview
              prescription={prescription}
              settings={settings}
              themeColors={activeTheme}
            />
          </div>
        </section>

      </main>

      {/* Friendly Bottom footer decoration status */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t border-slate-200 mt-auto no-print select-none">
        <p className="font-semibold font-sans">
          Pediatric Consultation Workspace designed for Dr. Neeladri Dawn.
        </p>
        <p className="text-[10px] text-slate-400 mt-0.5">
          MBBS, MD Paediatrics (JR) • Registration Number: 93929 West Bengal Medical Council
        </p>
      </footer>

    </div>
  );
}
