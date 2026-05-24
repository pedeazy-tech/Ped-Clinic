import { PediatricDrugRef } from '../types';

export const PEDIATRIC_DRUGS_REFERENCE: PediatricDrugRef[] = [
  {
    name: 'Paracetamol (Calpol / Crocin)',
    salts: 'Paracetamol Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [
      { strength: '120 mg / 5 ml (Drops/Susp)', formula_mg_per_ml: 24 },
      { strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 },
      { strength: '100 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 100 }
    ]
  },
  {
    name: 'Ibuprofen (Ibugesic)',
    salts: 'Ibuprofen Suspension (10 mg/kg per dose)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Every 6-8 hours after food (BD/TDS, Max 3 times/day)',
    category: 'Fever',
    strengthOptions: [
      { strength: '100 mg / 5 ml (Suspension)', formula_mg_per_ml: 20 },
      { strength: '200 mg / 5 ml (DS Suspension)', formula_mg_per_ml: 40 }
    ]
  },
  {
    name: 'Ondansetron (Ondem / Emeset)',
    salts: 'Anti-emetic (0.15 mg/kg per dose)',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Give 15 minutes before solid feed/medicine (BD/TDS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [
      { strength: '2 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.4 },
      { strength: '2 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 2 }
    ]
  },
  {
    name: 'Domperidone (Domstal)',
    salts: 'Prokinetic Anti-emetic (0.25 mg/kg per dose)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Twice daily, 15-30 minutes before feed (BD)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [
      { strength: '5 mg / 5 ml (Suspension)', formula_mg_per_ml: 1 },
      { strength: '1 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 1 }
    ]
  },
  {
    name: 'Cetirizine (Alerid / Cetzine)',
    salts: 'Antihistamine (0.25 mg/kg single dose)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Once daily, preferably at bedtime (OD)',
    category: 'Allergy',
    strengthOptions: [
      { strength: '5 mg / 5 ml (Syrup)', formula_mg_per_ml: 1 },
      { strength: '2.5 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 2.5 }
    ]
  },
  {
    name: 'Amoxicillin (Novamox)',
    salts: 'Amoxicillin Antibiotic (40 mg/kg/day split in 2 doses)',
    standardDose: '20 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 3-5 days',
    category: 'Antibiotics',
    strengthOptions: [
      { strength: '125 mg / 5 ml (Oral Susp)', formula_mg_per_ml: 25 },
      { strength: '250 mg / 5 ml (DS Oral Susp)', formula_mg_per_ml: 50 }
    ]
  },
  {
    name: 'Leven (Levosalbutamol) (Asthalin / L-Syp)',
    salts: 'Bronchodilator Syrup (0.1 mg/kg per dose)',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for chest wheezing/cough',
    category: 'Cold & Cough',
    strengthOptions: [
      { strength: '1 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.2 }
    ]
  },
  {
    name: 'Amoxicillin + Clavulanate (Augmentin)',
    salts: 'Broad Spectrum Antibiotic (45 mg/kg/day split)',
    standardDose: '22.5 mg/kg',
    recommendedFrequency: 'Twice daily with food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [
      { strength: '228.5 mg / 5 ml (Dry Syrup)', formula_mg_per_ml: 45.7 },
      { strength: '457 mg / 5 ml (DS Dry Syrup)', formula_mg_per_ml: 91.4 }
    ]
  },
  {
    name: 'Zinc Gluconate (Zinconia)',
    salts: 'Diarrheal Therapy (10-20 mg once daily)',
    standardDose: '20 mg', // Standard Zinc therapeutic dose for children > 6 months is 20mg flat
    recommendedFrequency: 'Once daily (OD) for 14 days without fail',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [
      { strength: '20 mg / 5 ml (Syrup)', formula_mg_per_ml: 4 }
    ]
  }
];

export const COMMON_COMPLAINTS = [
  'Fever: persistent high grade (>101°F)',
  'Fever: low grade with chills & rigors',
  'Cough: dry irritation / spasmodic cough',
  'Cough: wet productive / nocturnal cough',
  'Runny nose, sneezing, nasal congestion',
  'Loose watery stools (frequency > 4/day)',
  'Vomiting: post-feed / projectile',
  'Poor feeding / Refusing milk',
  'Decreased urine activity (<5 times in 24 hrs)',
  'Abdominal colic / Excessive crying at night',
  'Red itchy skin rashes on cheeks or folds',
  'Ear irritation / Scratching ear continuously'
];

export const COMMON_FINDINGS = [
  'General Condition: Active, alert, playful',
  'General Condition: Mildly toxic, irritable, febrile',
  'Throat: Congested pharynx, tonsils clean',
  'Throat: Clear, no pharyngeal cobblestoning',
  'Chest: Bilateral Vesicular Breath Sounds (BVBS) - Clear',
  'Chest: Coarse crepitations present / expiratory wheeze (-)',
  'Abdomen: Soft, non-tender, active bowel sounds',
  'Ears: Tympanic membranes normal, bilaterally intact',
  'Skin: Atopic eczematous patches on limbs, no petechiae',
  'Hydration: Good, tongue moist, skin pinch immediate back',
  'Hydration: Mildly dry tongue, active crying with tears present'
];

export const COMMON_DIAGNOSES = [
  'Acute Viral Upper Respiratory Tract Infection (URTI)',
  'Acute Bronchiolitis',
  'Viral Gastroenteritis with Mild/No Dehydration',
  'Pediatric Dysentery / Bacterial Enteritis',
  'Atopic Dermatitis / Infantile Eczema',
  'Acute Tonsillopharyngitis',
  'Teething Dyspepsia / Colic',
  'Nutritional Iron Deficiency Anemia',
  'Acute Otitis Media (AOM)'
];

export const PEDIATRIC_DIETARY_ADVICE = [
  'Continue frequent demand breastfeeds / formula milk feeds.',
  'Encourage plenty of oral fluids (ORS, coconut water, rice starch), specially after each loose stool.',
  'Give light, easily digestible semi-solid food (Mashed Khichdi, Cerelac, Curd Rice, Banana).',
  'Avoid canned juices, sweetened drinks, bakery sweets, cows milk (if age < 1 yr).',
  'Sponging with tap water if armpit temperature exceeds 100°F. Do not use ice water.'
];

export const PEDIATRIC_MILESTONES = [
  'Social smile present & tracking objects (2-3 months)',
  'Steady head control achieved (4 months)',
  'Rolls over from back to tummy (5-6 months)',
  'Sits steadily without support (8 months)',
  'Starts crawling / cruising with support (9-10 months)',
  'Stands alone & walks first steps (12-14 months)',
  'Speaks 2-3 single words with meaning (12-15 months)',
  'Scribbles & speaks simple sentences (18-24 months)'
];
