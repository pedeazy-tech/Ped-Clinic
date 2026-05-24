export interface PatientInfo {
  name: string;
  age: string;
  gender: 'Boy' | 'Girl' | 'Other' | '';
  weight: string; // Crucial for pediatric dosage calculation
  temp: string; // Temperature in Fahrenheit
  pulse: string; // Heart rate / Pulse
  bp: string; // Blood pressure (rare in toddlers, but used in older kids)
  spo2: string; // SpO2 %
  date: string;
  feedingType: 'Breastfed' | 'Formula' | 'Mixed' | 'Solid/Regular' | '';
  immunizationUpToDate: boolean;
}

export interface Medication {
  id: string;
  name: string;
  type: 'Syrup' | 'Drops' | 'Suspension' | 'Sachet' | 'Tablet' | 'Capsule' | 'Inhaler' | 'Ointment' | 'Other';
  dosage: string; // e.g., "5 ml", "1.5 ml", "5 drops"
  frequency: string; // e.g., "Once Daily (OD)", "Twice Daily (BD)", "Thrice Daily (TDS)", "Four times (QID)", "As needed (PRN / SOS)"
  timing: 'Before Food' | 'After Food' | 'With Food' | 'Empty Stomach' | 'None';
  duration: string; // e.g., "5 days", "3 days", "1 week"
  notes: string; // e.g., "Shake well before use", "For fever > 100 F"
}

export interface LetterheadSettings {
  themeColor: 'royal' | 'teal' | 'indigo' | 'deepsea';
  watermark: 'bear' | 'stethoscope' | 'shield' | 'none';
  showVitals: boolean;
  showClinicalFeed: boolean; // Left sidebar for complaints, findings, milestones
  logoStyle: 'cute-panda' | 'stethoscope-pulse' | 'happy-baby' | 'minimalist';
  qrCodeLink: string;
  qrCodeEnabled: boolean;
  gridPaper: boolean;
  fontStyle: 'sans' | 'serif' | 'clinical';
  customAdvice: string;
  nextFollowUp: string; // Follow-up details
  signatureMode: 'text' | 'draw' | 'none';
  signatureText: string;
  signatureDrawData: string; // base64 canvas line data
}

export interface Prescription {
  id: string;
  patient: PatientInfo;
  chiefComplaints: string[];
  clinicalFindings: string[];
  diagnosis: string;
  medications: Medication[];
  advice: string;
  createdAt: string;
}

export interface PediatricDrugRef {
  name: string;
  salts: string;
  standardDose: string; // e.g., 15 mg/kg/dose
  recommendedFrequency: string;
  strengthOptions: {
    strength: string; // e.g., "120mg/5ml", "250mg/5ml"
    formula_mg_per_ml: number; // e.g., 24 (120/5)
  }[];
  category: 'Fever' | 'Cold & Cough' | 'Antibiotics' | 'Anti-emetic/Stomach' | 'Allergy' | 'Supplements';
}
