import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PatientInfo } from '../types';
import { 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Activity, 
  User, 
  Baby, 
  Info, 
  ShieldAlert, 
  Sparkles, 
  CheckSquare, 
  Square,
  Calculator,
  XCircle,
  RotateCcw
} from 'lucide-react';

interface GrowthCheckup {
  id: string;
  ageMonths: number;
  weightKg: number;
  heightCm: number;
  muacCm?: number;
  headCircumferenceCm?: number;
  date: string;
}

interface VaccineItem {
  id: string;
  name: string;
  fullName: string;
  recommendedAge: string;
  ageInMonthsLimit: number;
  diseases: string;
  notes: string;
}

interface GrowthImmunisationTabProps {
  patient: PatientInfo;
  themeColors: {
    primary: string;
    secondary: string;
    subtle: string;
    border: string;
    text: string;
  };
  onResetPatientVaccineParams?: () => void;
}

// WHO Child Growth Standards (simplified reference bands for 0-60 months)
const WEIGHT_PERCENTILES_BOY = [
  { age: 0, percentile5: 2.5, percentile50: 3.3, percentile95: 4.4 },
  { age: 3, percentile5: 5.0, percentile50: 6.4, percentile95: 8.0 },
  { age: 6, percentile5: 6.4, percentile50: 7.9, percentile95: 9.8 },
  { age: 9, percentile5: 7.2, percentile50: 8.9, percentile95: 11.0 },
  { age: 12, percentile5: 7.8, percentile50: 9.6, percentile95: 12.0 },
  { age: 18, percentile5: 8.8, percentile50: 10.9, percentile95: 13.7 },
  { age: 24, percentile5: 9.7, percentile50: 12.2, percentile95: 15.3 },
  { age: 36, percentile5: 11.3, percentile50: 14.3, percentile95: 18.3 },
  { age: 48, percentile5: 12.7, percentile50: 16.3, percentile95: 21.2 },
  { age: 60, percentile5: 14.1, percentile50: 18.3, percentile95: 24.1 },
];

const WEIGHT_PERCENTILES_GIRL = [
  { age: 0, percentile5: 2.4, percentile50: 3.2, percentile95: 4.2 },
  { age: 3, percentile5: 4.6, percentile50: 5.8, percentile95: 7.5 },
  { age: 6, percentile5: 5.8, percentile50: 7.3, percentile95: 9.3 },
  { age: 9, percentile5: 6.5, percentile50: 8.2, percentile95: 10.4 },
  { age: 12, percentile5: 7.1, percentile50: 8.9, percentile95: 11.5 },
  { age: 18, percentile5: 8.1, percentile50: 10.2, percentile95: 13.2 },
  { age: 24, percentile5: 9.0, percentile50: 11.5, percentile95: 14.8 },
  { age: 36, percentile5: 10.8, percentile50: 13.9, percentile95: 18.0 },
  { age: 48, percentile5: 12.3, percentile50: 16.0, percentile95: 20.8 },
  { age: 60, percentile5: 13.7, percentile50: 18.2, percentile95: 23.5 },
];

const HEIGHT_PERCENTILES_BOY = [
  { age: 0, percentile5: 46.1, percentile50: 49.9, percentile95: 53.7 },
  { age: 3, percentile5: 57.3, percentile50: 61.4, percentile95: 65.5 },
  { age: 6, percentile5: 63.3, percentile50: 67.6, percentile95: 71.9 },
  { age: 9, percentile5: 67.5, percentile50: 72.0, percentile95: 76.5 },
  { age: 12, percentile5: 71.0, percentile50: 75.7, percentile95: 80.5 },
  { age: 18, percentile5: 76.9, percentile50: 82.3, percentile95: 87.7 },
  { age: 24, percentile5: 81.7, percentile50: 87.8, percentile95: 93.9 },
  { age: 36, percentile5: 88.7, percentile50: 96.1, percentile95: 103.5 },
  { age: 48, percentile5: 94.9, percentile50: 103.3, percentile95: 111.7 },
  { age: 60, percentile5: 100.7, percentile50: 110.0, percentile95: 119.3 },
];

const HEIGHT_PERCENTILES_GIRL = [
  { age: 0, percentile5: 45.4, percentile50: 49.1, percentile95: 52.9 },
  { age: 3, percentile5: 55.6, percentile50: 59.8, percentile95: 64.0 },
  { age: 6, percentile5: 61.2, percentile50: 65.7, percentile95: 70.1 },
  { age: 9, percentile5: 65.3, percentile50: 70.1, percentile95: 74.9 },
  { age: 12, percentile5: 68.9, percentile50: 74.0, percentile95: 79.2 },
  { age: 18, percentile5: 74.9, percentile50: 80.7, percentile95: 86.5 },
  { age: 24, percentile5: 80.0, percentile50: 86.4, percentile95: 92.9 },
  { age: 36, percentile5: 87.4, percentile50: 95.1, percentile95: 102.7 },
  { age: 48, percentile5: 94.1, percentile50: 102.7, percentile95: 111.3 },
  { age: 60, percentile5: 99.9, percentile50: 109.4, percentile95: 118.9 },
];

const MUAC_PERCENTILES_BOY = [
  { age: 0, percentile5: 9.5, percentile50: 10.8, percentile95: 12.5 },
  { age: 3, percentile5: 11.2, percentile50: 12.8, percentile95: 14.5 },
  { age: 6, percentile5: 12.2, percentile50: 13.7, percentile95: 15.5 },
  { age: 9, percentile5: 12.5, percentile50: 14.0, percentile95: 16.0 },
  { age: 12, percentile5: 12.8, percentile50: 14.3, percentile95: 16.2 },
  { age: 18, percentile5: 13.0, percentile50: 14.6, percentile95: 16.6 },
  { age: 24, percentile5: 13.2, percentile50: 14.8, percentile95: 16.8 },
  { age: 36, percentile5: 13.5, percentile50: 15.2, percentile95: 17.2 },
  { age: 48, percentile5: 13.7, percentile50: 15.5, percentile95: 17.6 },
  { age: 60, percentile5: 14.0, percentile50: 15.8, percentile95: 18.0 },
];

const MUAC_PERCENTILES_GIRL = [
  { age: 0, percentile5: 9.2, percentile50: 10.5, percentile95: 12.2 },
  { age: 3, percentile5: 10.8, percentile50: 12.4, percentile95: 14.1 },
  { age: 6, percentile5: 11.8, percentile50: 13.2, percentile95: 15.0 },
  { age: 9, percentile5: 12.1, percentile50: 13.6, percentile95: 15.4 },
  { age: 12, percentile5: 12.4, percentile50: 13.9, percentile95: 15.8 },
  { age: 18, percentile5: 12.6, percentile50: 14.2, percentile95: 16.2 },
  { age: 24, percentile5: 12.8, percentile50: 14.4, percentile95: 16.4 },
  { age: 36, percentile5: 13.1, percentile50: 14.8, percentile95: 16.8 },
  { age: 48, percentile5: 13.4, percentile50: 15.1, percentile95: 17.2 },
  { age: 60, percentile5: 13.7, percentile50: 15.5, percentile95: 17.7 },
];

const HEAD_PERCENTILES_BOY = [
  { age: 0, percentile5: 32.1, percentile50: 34.5, percentile95: 36.9 },
  { age: 3, percentile5: 38.0, percentile50: 40.5, percentile95: 43.0 },
  { age: 6, percentile5: 41.2, percentile50: 43.8, percentile95: 46.4 },
  { age: 9, percentile5: 43.0, percentile50: 45.4, percentile95: 47.8 },
  { age: 12, percentile5: 44.2, percentile50: 46.7, percentile95: 49.2 },
  { age: 18, percentile5: 45.6, percentile50: 48.1, percentile95: 50.6 },
  { age: 24, percentile5: 46.8, percentile50: 49.3, percentile95: 51.8 },
  { age: 36, percentile5: 48.0, percentile50: 50.5, percentile95: 53.0 },
  { age: 48, percentile5: 49.0, percentile50: 51.5, percentile95: 54.0 },
  { age: 60, percentile5: 49.8, percentile50: 52.3, percentile95: 54.8 },
];

const HEAD_PERCENTILES_GIRL = [
  { age: 0, percentile5: 31.5, percentile50: 33.9, percentile95: 36.2 },
  { age: 3, percentile5: 37.1, percentile50: 39.5, percentile95: 42.0 },
  { age: 6, percentile5: 40.1, percentile50: 42.6, percentile95: 45.1 },
  { age: 9, percentile5: 41.9, percentile50: 44.3, percentile95: 46.8 },
  { age: 12, percentile5: 43.1, percentile50: 45.5, percentile95: 48.0 },
  { age: 18, percentile5: 44.5, percentile50: 46.9, percentile95: 49.4 },
  { age: 24, percentile5: 45.6, percentile50: 48.0, percentile95: 50.5 },
  { age: 36, percentile5: 46.9, percentile50: 49.3, percentile95: 51.8 },
  { age: 48, percentile5: 47.9, percentile50: 50.3, percentile95: 52.8 },
  { age: 60, percentile5: 48.7, percentile50: 51.1, percentile95: 53.6 },
];

const VACCINE_SCHEDULE_DATA: VaccineItem[] = [
  // Birth
  { id: 'v_bcg', name: 'BCG', fullName: 'Bacillus Calmette-Guérin', recommendedAge: 'Birth', ageInMonthsLimit: 0, diseases: 'Tuberculosis (Miliary & Meningitis)', notes: '0.1 ml (0.05 ml for under 1 month). Intradermal injection on left upper arm; leaves a typical permanent scar.' },
  { id: 'v_opv0', name: 'OPV-0', fullName: 'Oral Polio Vaccine - Birth Dose', recommendedAge: 'Birth', ageInMonthsLimit: 0, diseases: 'Poliomyelitis (Infantile Paralysis)', notes: '2 drops administered orally. Must be initiated within 15 days of birth.' },
  { id: 'v_hepb_birth', name: 'HepB Birth Dose', fullName: 'Hepatitis B Vaccine - Birth Dose', recommendedAge: 'Birth', ageInMonthsLimit: 0, diseases: 'Hepatitis B viral liver infection', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh. Must receive within 24 hours.' },

  // 6 Weeks
  { id: 'v_penta1', name: 'Pentavalent-1', fullName: 'Penta-1 (DPT + HepB + Hib)', recommendedAge: '6 Weeks', ageInMonthsLimit: 1.5, diseases: 'Diphtheria, Pertussis, Tetanus, Hepatitis B, Influenza B', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh.' },
  { id: 'v_opv1', name: 'OPV-1', fullName: 'Oral Polio Vaccine - 1st Dose', recommendedAge: '6 Weeks', ageInMonthsLimit: 1.5, diseases: 'Poliomyelitis', notes: '2 drops administered orally.' },
  { id: 'v_fipv1', name: 'fIPV-1', fullName: 'Fractional Inactivated Polio - 1st Dose', recommendedAge: '6 Weeks', ageInMonthsLimit: 1.5, diseases: 'Poliomyelitis', notes: '0.1 ml. Fractional dose intradermally (ID) on right upper arm.' },
  { id: 'v_rvv1', name: 'Rotavirus-1 (RVV)', fullName: 'Rotavirus Vaccine - 1st Dose', recommendedAge: '6 Weeks', ageInMonthsLimit: 1.5, diseases: 'Severe watery diarrhoea (Rotavirus)', notes: '5 drops stable liquid vaccine orally.' },
  { id: 'v_pcv1', name: 'PCV-1', fullName: 'Pneumococcal Conjugate Vaccine - 1st Dose', recommendedAge: '6 Weeks', ageInMonthsLimit: 1.5, diseases: 'Sepsis, Meningitis, Pneumonia (Pneumococcus)', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh.' },

  // 10 Weeks
  { id: 'v_penta2', name: 'Pentavalent-2', fullName: 'Penta-2 (DPT + HepB + Hib)', recommendedAge: '10 Weeks', ageInMonthsLimit: 2.5, diseases: 'Diphtheria, Pertussis, Tetanus, Hepatitis B, Influenza B', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh. Minimum gap of 4 weeks after Penta-1.' },
  { id: 'v_opv2', name: 'OPV-2', fullName: 'Oral Polio Vaccine - 2nd Dose', recommendedAge: '10 Weeks', ageInMonthsLimit: 2.5, diseases: 'Poliomyelitis', notes: '2 drops administered orally. Gap of 4 weeks after OPV-1.' },
  { id: 'v_rvv2', name: 'Rotavirus-2 (RVV)', fullName: 'Rotavirus Vaccine - 2nd Dose', recommendedAge: '10 Weeks', ageInMonthsLimit: 2.5, diseases: 'Severe rotavirus diarrhoea', notes: '5 drops administered orally.' },

  // 14 Weeks
  { id: 'v_penta3', name: 'Pentavalent-3', fullName: 'Penta-3 (DPT + HepB + Hib)', recommendedAge: '14 Weeks', ageInMonthsLimit: 3.5, diseases: 'Diphtheria, Pertussis, Tetanus, Hepatitis B, Influenza B', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh.' },
  { id: 'v_opv3', name: 'OPV-3', fullName: 'Oral Polio Vaccine - 3rd Dose', recommendedAge: '14 Weeks', ageInMonthsLimit: 3.5, diseases: 'Poliomyelitis', notes: '2 drops administered orally.' },
  { id: 'v_fipv2', name: 'fIPV-2', fullName: 'Fractional Inactivated Polio - 2nd Dose', recommendedAge: '14 Weeks', ageInMonthsLimit: 3.5, diseases: 'Poliomyelitis', notes: '0.1 ml. Fractional dose intradermally (ID) on right upper arm.' },
  { id: 'v_rvv3', name: 'Rotavirus-3 (RVV)', fullName: 'Rotavirus Vaccine - 3rd Dose', recommendedAge: '14 Weeks', ageInMonthsLimit: 3.5, diseases: 'Rotavirus Diarrhoea', notes: '5 drops administered orally.' },
  { id: 'v_pcv2', name: 'PCV-2', fullName: 'Pneumococcal Conjugate Vaccine - 2nd Dose', recommendedAge: '14 Weeks', ageInMonthsLimit: 3.5, diseases: 'Pneumococcal infections', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh.' },

  // 9-12 Months
  { id: 'v_mr1', name: 'MR-1', fullName: 'Measles & Rubella Vaccine - 1st Dose', recommendedAge: '9 Months', ageInMonthsLimit: 9, diseases: 'Measles and Rubella', notes: '0.5 ml. Subcutaneous injection in right upper arm.' },
  { id: 'v_pcv_booster', name: 'PCV Booster', fullName: 'Pneumococcal Conjugate Booster', recommendedAge: '9 Months', ageInMonthsLimit: 9, diseases: 'Pneumococcal Pneumonia & Sepsis', notes: '0.5 ml. Intramuscular injection in anterolateral mid-thigh.' },
  { id: 'v_je1', name: 'JE-1 (Endemic districts)', fullName: 'Japanese Encephalitis - 1st Dose', recommendedAge: '9 Months', ageInMonthsLimit: 9, diseases: 'Brain inflammation (JE virus)', notes: '0.5 ml. Subcutaneous injection in left upper arm (In endemic districts).' },
  { id: 'v_vit_a1', name: 'Vitamin A (1st Dose)', fullName: 'Vitamin A Supplementation 1st Dose', recommendedAge: '9 Months', ageInMonthsLimit: 9, diseases: 'Vitamin A Deficiency & childhood blindness prevention', notes: '100,000 IU (1 ml). Administered orally alongside Measles Rubella vaccine.' },

  // 16-24 Months
  { id: 'v_mr2', name: 'MR-2', fullName: 'Measles & Rubella Vaccine - 2nd Dose', recommendedAge: '16-24 Months', ageInMonthsLimit: 16, diseases: 'Measles and Rubella', notes: '0.5 ml. Subcutaneous injection in right upper arm.' },
  { id: 'v_dpt_b1', name: 'DPT Booster-1', fullName: 'Diphtheria, Pertussis & Tetanus Booster 1', recommendedAge: '16-24 Months', ageInMonthsLimit: 16, diseases: 'Diphtheria, Pertussis, Tetanus', notes: '0.5 ml. Deep Intramuscular injection in anterolateral mid-thigh.' },
  { id: 'v_opv_b', name: 'OPV Booster', fullName: 'Oral Polio Vaccine Booster Dose', recommendedAge: '16-24 Months', ageInMonthsLimit: 16, diseases: 'Poliomyelitis', notes: '2 drops administered orally.' },
  { id: 'v_je2', name: 'JE-2 (Endemic districts)', fullName: 'Japanese Encephalitis - 2nd Dose', recommendedAge: '16-24 Months', ageInMonthsLimit: 16, diseases: 'Japanese Encephalitis brain inflammation', notes: '0.5 ml. Subcutaneous injection in left upper arm (In endemic districts).' },
  { id: 'v_vit_a2', name: 'Vitamin A Booster (2nd Dose)', fullName: 'Vitamin A Supplementation 2nd Dose', recommendedAge: '16-24 Months', ageInMonthsLimit: 16, diseases: 'Vitamin A Deficiency', notes: '200,000 IU (2 ml) orally. Followed by a dose every 6 months up to 5 years (total 9 doses).' },

  // 5-6 Years
  { id: 'v_dpt_b2', name: 'DPT Booster-2', fullName: 'Diphtheria, Pertussis & Tetanus Booster 2', recommendedAge: '5-6 Years', ageInMonthsLimit: 60, diseases: 'Diphtheria, Pertussis, Tetanus', notes: '0.5 ml. Intramuscular injection in upper arm.' },

  // 10 Years
  { id: 'v_td10', name: 'Td-10', fullName: 'Tetanus & adult Diphtheria - 10 Yr', recommendedAge: '10 Years', ageInMonthsLimit: 120, diseases: 'Lockjaw (Tetanus) and Diphtheria', notes: '0.5 ml. Intramuscular injection in upper arm.' },

  // 16 Years
  { id: 'v_td16', name: 'Td-16', fullName: 'Tetanus & adult Diphtheria - 16 Yr', recommendedAge: '16 Years', ageInMonthsLimit: 192, diseases: 'Lockjaw (Tetanus) and Diphtheria', notes: '0.5 ml. Intramuscular injection in upper arm.' }
];

export default function GrowthImmunisationTab({ patient, themeColors, onResetPatientVaccineParams }: GrowthImmunisationTabProps) {
  const [metricMode, setMetricMode] = useState<'weight' | 'height' | 'muac' | 'head'>('weight');
  const [savedRecords, setSavedRecords] = useState<GrowthCheckup[]>([]);
  const [immunisationState, setImmunisationState] = useState<Record<string, { status: 'given' | 'pending' | 'not_taken'; dateGiven?: string }>>({});
  
  // Quick entry forms
  const [customAgeWeeksMonths, setCustomAgeWeeksMonths] = useState<string>('');
  const [customWeight, setCustomWeight] = useState<string>('');
  const [customHeight, setCustomHeight] = useState<string>('');
  const [customMuac, setCustomMuac] = useState<string>('');
  const [customHead, setCustomHead] = useState<string>('');

  // Interactive BMI Calculator state hook
  const [bmiWeight, setBmiWeight] = useState<string>('');
  const [bmiHeight, setBmiHeight] = useState<string>('');

  // Dynamic patient key for immunization cache
  const patientKey = patient?.name ? patient.name.toLowerCase().trim().replace(/[^a-z0-9]/g, '_') : '';
  const immCacheKey = patientKey ? `immunisation_records_v1_${patientKey}` : 'immunisation_records_v1_anonymous';

  // Loaded cache
  useEffect(() => {
    const cachedRecords = localStorage.getItem('growth_records_v1');
    if (cachedRecords) {
      try {
        setSavedRecords(JSON.parse(cachedRecords));
      } catch (e) {
        console.error("Failed to parse growth cache", e);
      }
    }
  }, []);

  // Reload immunization state whenever active patient changes
  useEffect(() => {
    const cachedImm = localStorage.getItem(immCacheKey);
    if (cachedImm) {
      try {
        setImmunisationState(JSON.parse(cachedImm));
      } catch (e) {
        console.error("Failed to parse vaccination cache", e);
        setImmunisationState({});
      }
    } else {
      setImmunisationState({});
    }
  }, [immCacheKey]);

  // Sync back to local storage
  const saveRecordsToCache = (updated: GrowthCheckup[]) => {
    localStorage.setItem('growth_records_v1', JSON.stringify(updated));
    setSavedRecords(updated);
  };

  const saveImmToCache = (updated: Record<string, { status: 'given' | 'pending' | 'not_taken'; dateGiven?: string }>) => {
    localStorage.setItem(immCacheKey, JSON.stringify(updated));
    setImmunisationState(updated);
  };

  // Helper to parse age from patient text
  const getParsedAgeInMonths = (ageStr: string): number => {
    if (!ageStr) return 12; // default to 1 year
    const cleaned = ageStr.toLowerCase().trim();
    const num = parseFloat(cleaned) || 12;
    if (cleaned.includes('month') || cleaned.includes('mon') || cleaned.includes('m')) {
      return num;
    }
    if (cleaned.includes('year') || cleaned.includes('yr') || cleaned.includes('y')) {
      return num * 12;
    }
    // assume years if plain number > 24, otherwise months
    if (num < 15) return num * 12; // assume years
    return num;
  };

  // Active patient details from another page are not valid in this section, so we don't auto-fill or sync them.
  // Kept pure for growth checkup records entered below.

  const handleAddCheckup = (e: React.FormEvent) => {
    e.preventDefault();
    const ageVal = parseFloat(customAgeWeeksMonths);
    const weightVal = parseFloat(customWeight);
    const heightVal = parseFloat(customHeight);
    const muacVal = parseFloat(customMuac);
    const headVal = parseFloat(customHead);

    if (isNaN(ageVal) || ageVal < 0 || ageVal > 60) {
      alert("Please enter a valid age between 0 and 60 months.");
      return;
    }

    if (isNaN(weightVal) && isNaN(heightVal) && isNaN(muacVal) && isNaN(headVal)) {
      alert("Please enter at least one measurement (Weight, Height, MUAC or Head Circumference).");
      return;
    }

    const newRecord: GrowthCheckup = {
      id: Math.random().toString(36).substr(2, 9),
      ageMonths: ageVal,
      weightKg: isNaN(weightVal) ? 0 : weightVal,
      heightCm: isNaN(heightVal) ? 0 : heightVal,
      muacCm: isNaN(muacVal) ? 0 : muacVal,
      headCircumferenceCm: isNaN(headVal) ? 0 : headVal,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [...savedRecords, newRecord].sort((a, b) => a.ageMonths - b.ageMonths);
    saveRecordsToCache(updated);
    
    // reset inputs but keep age default
    setCustomWeight('');
    setCustomHeight('');
    setCustomMuac('');
    setCustomHead('');
  };

  const handleDeleteCheckup = (id: string) => {
    const updated = savedRecords.filter(r => r.id !== id);
    saveRecordsToCache(updated);
  };

  const setVaccineStatus = (vaccineId: string, status: 'given' | 'pending' | 'not_taken') => {
    const updated = {
      ...immunisationState,
      [vaccineId]: { status }
    };
    saveImmToCache(updated);
  };

  const toggleVaccine = (vaccineId: string) => {
    const record = immunisationState[vaccineId];
    const status = record?.status || 'pending';
    let nextStatus: 'given' | 'pending' | 'not_taken';
    if (status === 'pending') {
      nextStatus = 'given';
    } else if (status === 'given') {
      nextStatus = 'not_taken';
    } else {
      nextStatus = 'pending';
    }
    setVaccineStatus(vaccineId, nextStatus);
  };

  const handleClearVaccines = () => {
    if (window.confirm("Reset all vaccine tracker statuses for this patient?")) {
      saveImmToCache({});
      onResetPatientVaccineParams?.();
    }
  };

  const handleCheckAllVaccines = () => {
    if (window.confirm("Mark all vaccines as taken / given?")) {
      const allGiven: Record<string, { status: 'given' | 'pending' | 'not_taken'; dateGiven?: string }> = {};
      VACCINE_SCHEDULE_DATA.forEach(v => {
        allGiven[v.id] = { status: 'given' };
      });
      saveImmToCache(allGiven);
    }
  };

  // Numerical percentiles helper array
  const currentSex = patient.gender === 'Girl' ? 'Girl' : 'Boy';
  let percentilePoints;
  if (metricMode === 'weight') {
    percentilePoints = currentSex === 'Girl' ? WEIGHT_PERCENTILES_GIRL : WEIGHT_PERCENTILES_BOY;
  } else if (metricMode === 'height') {
    percentilePoints = currentSex === 'Girl' ? HEIGHT_PERCENTILES_GIRL : HEIGHT_PERCENTILES_BOY;
  } else if (metricMode === 'muac') {
    percentilePoints = currentSex === 'Girl' ? MUAC_PERCENTILES_GIRL : MUAC_PERCENTILES_BOY;
  } else {
    percentilePoints = currentSex === 'Girl' ? HEAD_PERCENTILES_GIRL : HEAD_PERCENTILES_BOY;
  }

  // Math to coordinate plotting into safe responsive SVG coordinates
  // Width: 0 to 60 months => Translate to SVG 80 to 520
  // Height/Weight: 0 to MaxVal => Translate to SVG height (320 down to 40)
  const xMin = 0;
  const xMax = 60;
  const svgWidth = 600;
  const svgHeight = 355;
  const paddingLeft = 45;
  const paddingRight = 20;
  const paddingTop = 25;
  const paddingBottom = 35;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  let yMax = 130;  // dynamic scale
  let yMin = 40;
  if (metricMode === 'weight') {
    yMax = 28;
    yMin = 1;
  } else if (metricMode === 'height') {
    yMax = 130;
    yMin = 40;
  } else if (metricMode === 'muac') {
    yMax = 22;
    yMin = 6;
  } else if (metricMode === 'head') {
    yMax = 60;
    yMin = 25;
  }

  const getX = (age: number) => {
    const ratio = (age - xMin) / (xMax - xMin);
    return paddingLeft + ratio * chartWidth;
  };

  const getY = (val: number) => {
    const ratio = (val - yMin) / (yMax - yMin);
    // SVG y-axis is inverted
    return svgHeight - paddingBottom - ratio * chartHeight;
  };

  // Generate Bezier standard curves
  const getPercentilePath = (percentileKey: 'percentile5' | 'percentile50' | 'percentile95') => {
    return percentilePoints.map((pt, index) => {
      const x = getX(pt.age);
      const y = getY(pt[percentileKey]);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  // Generate SVG shading band between 5th and 95th
  const getShadingAreaPath = () => {
    if (percentilePoints.length === 0) return '';
    const topPath = percentilePoints.map(pt => `${getX(pt.age)},${getY(pt.percentile95)}`);
    const bottomPath = [...percentilePoints].reverse().map(pt => `${getX(pt.age)},${getY(pt.percentile5)}`);
    return `M ${topPath.join(' L ')} L ${bottomPath.join(' L ')} Z`;
  };

  // Vaccination completion rate
  const administeredVaccines = VACCINE_SCHEDULE_DATA.filter(v => immunisationState[v.id]?.status === 'given').length;
  const totalVaccines = VACCINE_SCHEDULE_DATA.length;
  const vaccinePercentage = totalVaccines > 0 ? Math.round((administeredVaccines / totalVaccines) * 100) : 0;

  // Age based vaccine grouping
  const vaccineAges = Array.from(new Set(VACCINE_SCHEDULE_DATA.map(v => v.recommendedAge)));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full transition-all">
      
      {/* LEFT COLUMN: Growth Curves plotting & Interactive Grid */}
      <div className="lg:col-span-7 space-y-5">
        
        {/* Main Growth Graph Panel */}
        <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-5 relative overflow-hidden transition-all">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg text-white`} style={{ background: themeColors.primary }}>
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">
                  Pediatric Growth Percentiles <span className="text-[11px] font-medium text-slate-500">[{currentSex} Scale]</span>
                </h3>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1">
                Matched with WHO standard percentile curves (5th to 95th Percentile)
              </p>
            </div>

            {/* Toggle switch */}
            <div className="inline-flex flex-wrap rounded-lg bg-slate-100 p-1 self-stretch sm:self-auto shrink-0 select-none gap-1 sm:gap-0">
              <button
                type="button"
                onClick={() => setMetricMode('weight')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  metricMode === 'weight' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-550 hover:text-slate-800'
                }`}
              >
                Weight
              </button>
              <button
                type="button"
                onClick={() => setMetricMode('height')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  metricMode === 'height' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-550 hover:text-slate-800'
                }`}
              >
                Height
              </button>
              <button
                type="button"
                onClick={() => setMetricMode('muac')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  metricMode === 'muac' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-550 hover:text-slate-800'
                }`}
              >
                MUAC
              </button>
              <button
                type="button"
                onClick={() => setMetricMode('head')}
                className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md transition-all cursor-pointer ${
                  metricMode === 'head' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-550 hover:text-slate-800'
                }`}
              >
                Head Circ.
              </button>
            </div>
          </div>

          {/* SVG Canvas Area */}
          <div className="w-full relative bg-slate-50/50 rounded-xl p-2 select-none border border-slate-100 mb-4 overflow-hidden">
            <svg 
              viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
              className="w-full h-auto drop-shadow-sm font-sans"
              style={{ overflow: 'visible' }}
            >
              {/* Grids and Axes */}
              <g className="opacity-100">
                {/* Horizontal line grids */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const val = yMin + (i * (yMax - yMin)) / 5;
                  const y = getY(val);
                  return (
                    <g key={`y-grid-${i}`} className="stroke-slate-200/80">
                      <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} strokeWidth="1" strokeDasharray="3 3" />
                      <text 
                        x={paddingLeft - 8} 
                        y={y + 3} 
                        className="fill-slate-400 stroke-none text-[9px] font-bold font-mono text-right"
                        textAnchor="end"
                      >
                        {Math.round(val)}
                      </text>
                    </g>
                  );
                })}

                {/* Vertical months grid lines */}
                {[0, 6, 12, 18, 24, 36, 48, 60].map((age) => {
                  const x = getX(age);
                  return (
                    <g key={`x-grid-${age}`}>
                      <line x1={x} y1={paddingTop} x2={x} y2={svgHeight - paddingBottom} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 4" />
                      <text 
                        x={x} 
                        y={svgHeight - paddingBottom + 12} 
                        className="fill-slate-450 text-[9px] font-bold text-center" 
                        textAnchor="middle"
                      >
                        {age === 0 ? 'Birth' : `${age}M`}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* WHO Bounds shaded area */}
              <path 
                d={getShadingAreaPath()} 
                fill={currentSex === 'Girl' ? 'rgba(244,63,94,0.06)' : 'rgba(59,130,246,0.06)'} 
                className="transition-all duration-300"
              />

              {/* Percentile Lines */}
              <path d={getPercentilePath('percentile5')} fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
              <path d={getPercentilePath('percentile95')} fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
              <path d={getPercentilePath('percentile50')} fill="none" stroke={currentSex === 'Girl' ? '#fb7185' : '#60a5fa'} strokeWidth="1.8" className="transition-all duration-300" />

              {/* Standard text titles inside chart */}
              <text x={getX(55)} y={getY(percentilePoints[percentilePoints.length - 1].percentile95) - 4} className="fill-slate-400 text-[8px] font-bold uppercase tracking-wider">95th Percentile</text>
              <text x={getX(55)} y={getY(percentilePoints[percentilePoints.length - 1].percentile50) - 4} className="fill-slate-500 font-bold text-[8px] uppercase tracking-wider">50th (Median)</text>
              <text x={getX(55)} y={getY(percentilePoints[percentilePoints.length - 1].percentile5) + 8} className="fill-slate-400 text-[8px] font-bold uppercase tracking-wider">5th Percentile</text>

              {/* Plotting Doctor's Entries */}
              {savedRecords
                .filter(rec => {
                  if (metricMode === 'weight') return rec.weightKg > 0;
                  if (metricMode === 'height') return rec.heightCm > 0;
                  if (metricMode === 'muac') return (rec.muacCm ?? 0) > 0;
                  return (rec.headCircumferenceCm ?? 0) > 0;
                })
                .map((rec, idx, arr) => {
                  let val = 0;
                  if (metricMode === 'weight') val = rec.weightKg;
                  else if (metricMode === 'height') val = rec.heightCm;
                  else if (metricMode === 'muac') val = rec.muacCm ?? 0;
                  else val = rec.headCircumferenceCm ?? 0;

                  const x = getX(rec.ageMonths);
                  const y = getY(val);

                  // Connect lines between doctor checkups
                  let connectingLine = null;
                  if (idx > 0) {
                    const prevRec = arr[idx - 1];
                    let prevVal = 0;
                    if (metricMode === 'weight') prevVal = prevRec.weightKg;
                    else if (metricMode === 'height') prevVal = prevRec.heightCm;
                    else if (metricMode === 'muac') prevVal = prevRec.muacCm ?? 0;
                    else prevVal = prevRec.headCircumferenceCm ?? 0;

                    const prevX = getX(prevRec.ageMonths);
                    const prevY = getY(prevVal);
                    connectingLine = (
                      <line 
                        x1={prevX} 
                        y1={prevY} 
                        x2={x} 
                        y2={y} 
                        stroke="#4f46e5" 
                        strokeWidth="2.2" 
                        strokeLinecap="round" 
                      />
                    );
                  }

                  // Unit label
                  const labelSuffix = metricMode === 'weight' ? 'kg' : 'cm';

                  return (
                    <g key={rec.id}>
                      {connectingLine}
                      <circle 
                        cx={x} 
                        cy={y} 
                        r="6.5" 
                        fill="#4f46e5" 
                        stroke="#ffffff" 
                        strokeWidth="2.5" 
                        className="cursor-pointer tracking-wider filter drop-shadow hover:scale-125 transition-transform" 
                      />
                      <text 
                        x={x} 
                        y={y - 9} 
                        className="fill-indigo-900 text-[9px] font-extrabold stroke-white stroke-[2px] paint-order-stroke text-center" 
                        textAnchor="middle"
                      >
                        {val} {labelSuffix}
                      </text>
                    </g>
                  );
                })}
            </svg>

            {/* Empty state alert inside graph */}
            {savedRecords.filter(rec => {
              if (metricMode === 'weight') return rec.weightKg > 0;
              if (metricMode === 'height') return rec.heightCm > 0;
              if (metricMode === 'muac') return (rec.muacCm ?? 0) > 0;
              return (rec.headCircumferenceCm ?? 0) > 0;
            }).length === 0 && (
              <div className="absolute inset-x-0 top-32 flex flex-col items-center justify-center p-4 text-center pointer-events-none select-none">
                <TrendingUp className="w-10 h-10 text-slate-350 animate-bounce" />
                <span className="text-xs font-bold text-slate-400 mt-2">No custom points plotted yet.</span>
                <span className="text-[10px] text-slate-400">Add entries in the growth checkup record below to start plotting!</span>
              </div>
            )}
          </div>
        </div>
        {/* Interactive BMI Calculator Card */}
        <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <div className="p-1.5 rounded-lg text-white bg-indigo-600">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Pediatric BMI Calculator
              </h4>
              <p className="text-[10px] text-slate-500">
                Analyze Body Mass Index (BMI) and classification for any weight and height
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Weight (kg)</label>
              <input
                type="number"
                placeholder="e.g. 12.5"
                value={bmiWeight}
                onChange={(e) => setBmiWeight(e.target.value)}
                className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Height (cm)</label>
              <input
                type="number"
                placeholder="e.g. 88"
                value={bmiHeight}
                onChange={(e) => setBmiHeight(e.target.value)}
                className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
              />
            </div>
          </div>

          {/* Result calculation panel */}
          {(() => {
            const wt = parseFloat(bmiWeight || '0');
            const ht = parseFloat(bmiHeight || '0');
            if (wt > 0 && ht > 50) {
              const heightM = ht / 100;
              const bmi = parseFloat((wt / (heightM * heightM)).toFixed(1));
              
              let status = 'Normal Weight';
              let colorClass = 'text-emerald-700 bg-emerald-50 border-emerald-200';
              let badgeBg = 'bg-emerald-500';

              if (bmi < 13.5) {
                status = 'Underweight';
                colorClass = 'text-blue-700 bg-blue-50 border-blue-200';
                badgeBg = 'bg-blue-500';
              } else if (bmi > 18.5 && bmi <= 21.5) {
                status = 'Overweight';
                colorClass = 'text-amber-700 bg-amber-50 border-amber-200';
                badgeBg = 'bg-amber-500';
              } else if (bmi > 21.5) {
                status = 'Obese';
                colorClass = 'text-rose-700 bg-rose-50 border-rose-200';
                badgeBg = 'bg-rose-500';
              }

              return (
                <div className={`p-3 rounded-xl border ${colorClass} transition-all space-y-1.5`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold font-mono text-[13px]">Calculated BMI Score: {bmi}</span>
                    <span className={`text-[9px] font-extrabold font-mono text-white ${badgeBg} px-2.5 py-0.5 rounded-full select-none capitalize shadow-sm`}>
                      {status}
                    </span>
                  </div>
                  <p className="text-[10px] opacity-90 leading-normal">
                    WHO Pediatric guidelines track relative weight to height curves. For basic screening, indicative healthy range spans 13.5 - 18.5.
                  </p>
                </div>
              );
            }
            return (
              <div className="p-3 bg-slate-50 border border-slate-150 rounded-xl text-center text-[10px] text-slate-400">
                Please enter Weight & Height parameters to evaluate BMI performance.
              </div>
            );
          })()}
        </div>

        {/* Growth checkups records logs */}
        <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-5">
          <h4 className="text-xs font-black text-slate-700 uppercase tracking-widest pl-1 mb-3">Add Custom Growth Checkup Record</h4>
          <form onSubmit={handleAddCheckup} className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-end">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Age (Months)</label>
                <input
                  type="number"
                  min="0"
                  max="60"
                  step="0.5"
                  placeholder="e.g. 18"
                  value={customAgeWeeksMonths}
                  onChange={(e) => setCustomAgeWeeksMonths(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-505 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Weight (kg)</label>
                <input
                  type="number"
                  min="0"
                  max="40"
                  step="0.1"
                  placeholder="e.g. 11.5"
                  value={customWeight}
                  onChange={(e) => setCustomWeight(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-505 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Height (cm)</label>
                <input
                  type="number"
                  min="20"
                  max="150"
                  step="0.5"
                  placeholder="e.g. 82.5"
                  value={customHeight}
                  onChange={(e) => setCustomHeight(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-505 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">MUAC (cm)</label>
                <input
                  type="number"
                  min="5"
                  max="30"
                  step="0.1"
                  placeholder="e.g. 14.2"
                  value={customMuac}
                  onChange={(e) => setCustomMuac(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-505 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Head Circ. (cm)</label>
                <input
                  type="number"
                  min="15"
                  max="70"
                  step="0.1"
                  placeholder="e.g. 46.5"
                  value={customHead}
                  onChange={(e) => setCustomHead(e.target.value)}
                  className="w-full text-xs font-semibold border border-slate-200 focus:ring-2 focus:ring-indigo-505 outline-none rounded-lg p-2 bg-slate-50 text-slate-800"
                />
              </div>
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-900 transition-all rounded-lg cursor-pointer flex items-center justify-center gap-1.5 shadow-sm active:scale-95 text-center"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Save Growth Entry</span>
              </button>
            </div>
          </form>

          {/* Historical Logs List */}
          {savedRecords.length > 0 && (
            <div className="border-t border-slate-100 mt-5 pt-4 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 block tracking-widest pl-1">HISTORICAL REGISTERED POINTS:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                {savedRecords.map((rec) => (
                  <div key={rec.id} className="flex justify-between items-center bg-slate-50 border border-slate-200/60 p-2 rounded-xl text-xs font-sans text-slate-600 font-medium">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span className="font-extrabold text-slate-850">{rec.ageMonths} Mos:</span>
                        <span className="text-[9px] text-slate-400">({rec.date})</span>
                      </div>
                      <div className="flex flex-wrap gap-x-1.5 text-[9px] text-slate-500">
                        {rec.weightKg > 0 && <span>Wt: <strong>{rec.weightKg}kg</strong></span>}
                        {rec.heightCm > 0 && <span>Ht: <strong>{rec.heightCm}cm</strong></span>}
                        {(rec.muacCm ?? 0) > 0 && <span>MUAC: <strong>{rec.muacCm}cm</strong></span>}
                        {(rec.headCircumferenceCm ?? 0) > 0 && <span>HC: <strong>{rec.headCircumferenceCm}cm</strong></span>}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteCheckup(rec.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors py-0.5 px-1 cursor-pointer"
                      title="Delete measurement"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Childhood Immunisation Schedule */}
      <div className="lg:col-span-5">
        <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-5">
          
          {/* Progress Header widget */}
          <div className="border-b border-slate-100 pb-4 mb-4">
            <div className="flex justify-between items-start">
              <div className="flex-1 mr-4">
                <span 
                  style={{ color: themeColors.primary, backgroundColor: themeColors.subtle, borderColor: themeColors.border }}
                  className="text-[10px] font-black tracking-widest uppercase border px-2 py-0.5 rounded-full inline-block mb-1.5"
                >
                  National Immunisation Schedule (India)
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <h3 className="text-sm font-black text-slate-800">
                    <span>India UIP Vaccine Tracker</span>
                  </h3>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      type="button"
                      onClick={handleCheckAllVaccines}
                      className="text-[10.5px] px-2 py-1 rounded-lg border border-emerald-200 text-emerald-700 bg-emerald-50 font-bold transition-all cursor-pointer flex items-center gap-1 active:scale-95 shadow-sm hover:opacity-90"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Mark All Taken</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleClearVaccines}
                      style={{ color: themeColors.primary, borderColor: themeColors.border, backgroundColor: themeColors.subtle }}
                      className="text-[10.5px] px-2 py-1 rounded-lg border font-bold transition-all cursor-pointer flex items-center gap-1 active:scale-95 shadow-sm hover:opacity-90"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Vaccine Tab</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Progress counter pill */}
              <div className="bg-slate-100 border p-1 rounded-xl text-center select-none">
                <span className="text-sm font-black text-slate-800 block leading-tight">{administeredVaccines}/{totalVaccines}</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Given</span>
              </div>
            </div>

            {/* Progression Bar */}
            <div className="mt-3.5">
              <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                <span>Progress Checklist Completion</span>
                <span className="font-black" style={{ color: themeColors.primary }}>{vaccinePercentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${vaccinePercentage}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{ backgroundColor: themeColors.primary }}
                  className="h-full rounded-full" 
                />
              </div>
            </div>
          </div>

          {/* Interactive Vaccine Ages Groups */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
            {vaccineAges.map((ageGroup) => {
              const cohortVaccines = VACCINE_SCHEDULE_DATA.filter(v => v.recommendedAge === ageGroup);
              
              // Find out if this age cohort applies and is outstanding
              // e.g. parse active patient's current month
              const patientAgeMonths = patient.name ? getParsedAgeInMonths(patient.age) : 0;
              const isCohortPastDue = cohortVaccines.some(v => v.ageInMonthsLimit <= patientAgeMonths);

              return (
                <div key={ageGroup} className="space-y-2 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between pl-1">
                    <span className="text-xs font-black text-[#1e1b4b] leading-tight flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColors.primary }}></span>
                      <span>{ageGroup} Milestone Vaccines</span>
                    </span>
                    {patient.name && isCohortPastDue && (
                      <span className="text-[8px] bg-amber-50 border border-amber-200 text-amber-600 font-bold px-1.5 py-0.2 rounded-md">
                        Due/Overdue
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    {cohortVaccines.map((v) => {
                      const record = immunisationState[v.id];
                      const status = record?.status || 'pending';
                      const isCompleted = status === 'given';
                      const isNotTaken = status === 'not_taken';

                      return (
                        <div 
                          key={v.id}
                          onClick={() => toggleVaccine(v.id)}
                          className={`flex items-start gap-2.5 p-3 rounded-xl border text-left cursor-pointer select-none transition-all duration-200 hover:-translate-y-[1px] ${
                            isCompleted 
                              ? 'bg-emerald-50/45 border-emerald-250/60 shadow-inner' 
                              : isNotTaken
                              ? 'bg-red-50/35 border-red-200/50 shadow-inner'
                              : 'bg-white border-slate-200/80 hover:bg-slate-50 shadow-sm'
                          }`}
                        >
                          {/* Checkbox state */}
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : isNotTaken ? (
                              <XCircle className="w-4 h-4 text-red-500" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-300 hover:text-slate-500" />
                            )}
                          </div>

                          <div className="flex-1 space-y-0.5">
                            <div className="flex justify-between items-center">
                              <span className={`text-[11px] font-black ${isCompleted ? 'text-slate-500 line-through' : isNotTaken ? 'text-slate-400 font-semibold' : 'text-slate-800'}`}>
                                {v.name} <span className="font-medium text-slate-400 text-[9px]">({v.fullName})</span>
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-tight">
                              Diseases: <strong className="text-slate-600 font-medium">{v.diseases}</strong>
                            </p>
                            <p className="text-[9px] text-slate-400 leading-normal italic font-medium">
                              {v.notes}
                            </p>
                            
                            {/* Action Buttons Options */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setVaccineStatus(v.id, 'given');
                                }}
                                className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all cursor-pointer ${
                                  isCompleted
                                    ? 'bg-emerald-600 text-white border-emerald-700'
                                    : 'bg-slate-50 text-slate-500 border-slate-205 hover:bg-slate-100 hover:text-slate-850'
                                }`}
                              >
                                Taken / Given
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setVaccineStatus(v.id, 'pending');
                                }}
                                className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all cursor-pointer ${
                                  status === 'pending'
                                    ? 'bg-blue-600 text-white border-blue-700'
                                    : 'bg-slate-50 text-slate-500 border-slate-205 hover:bg-slate-100 hover:text-slate-850'
                                }`}
                              >
                                Pending
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setVaccineStatus(v.id, 'not_taken');
                                }}
                                className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all cursor-pointer ${
                                  isNotTaken
                                    ? 'bg-red-650 text-white border-red-750'
                                    : 'bg-slate-50 text-slate-500 border-slate-205 hover:bg-slate-100 hover:text-slate-850'
                                }`}
                              >
                                Not Taken
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
