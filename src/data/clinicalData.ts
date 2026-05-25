import { PediatricDrugRef } from '../types';

export const PEDIATRIC_DRUGS_REFERENCE: PediatricDrugRef[] = [
  // ================= FEVER (1-35) =================
  {
    name: 'Paracetamol 120 (Calpol)',
    salts: 'Paracetamol Oral Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml (Suspension)', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol 250 (Calpol DS)',
    salts: 'Paracetamol Double Strength Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Infant Drops (Calpol Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol 120 (Crocin)',
    salts: 'Paracetamol Oral Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml (Suspension)', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol 240 (Crocin DS)',
    salts: 'Paracetamol DS Oral Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '240 mg / 5 ml (DS Susp)', formula_mg_per_ml: 48 }]
  },
  {
    name: 'Paracetamol Drops (Crocin Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol 125 (Pyrigesic)',
    salts: 'Paracetamol Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '125 mg / 5 ml (Suspension)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Paracetamol 250 (Pyrigesic DS)',
    salts: 'Paracetamol Double Strength Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Drops (Pyrigesic Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol 125 (T-98)',
    salts: 'Paracetamol Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '125 mg / 5 ml (Suspension)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Paracetamol 250 (T-98 DS)',
    salts: 'Paracetamol Double Strength Suspension (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Drops (T-98 Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol 120 (Sumol)',
    salts: 'Paracetamol Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml (Suspension)', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol 250 (Sumol DS)',
    salts: 'Paracetamol Double Strength Suspension (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Drops (Sumol Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol 120 (P-120)',
    salts: 'Paracetamol Liquid Suspension (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml (Suspension)', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol 250 (P-250)',
    salts: 'Paracetamol Suspension 250 (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Drops (P-100 Drops)',
    salts: 'Paracetamol Pediatric Drops (15 mg/kg per dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN / SOS, Max 4 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Ibuprofen (Ibugesic 100)',
    salts: 'Ibuprofen Pediatric Suspension (10 mg/kg per dose)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Every 6-8 hours after food as needed (SOS, Max 3 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 5 ml (Suspension)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ibuprofen DS (Ibugesic DS 200)',
    salts: 'Ibuprofen Double Strength Suspension (10 mg/kg per dose)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Every 6-8 hours after food as needed (SOS, Max 3 times/day)',
    category: 'Fever',
    strengthOptions: [{ strength: '200 mg / 5 ml (DS Susp)', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Ibuprofen + Paracetamol (Ibugesic Plus)',
    salts: 'Ibuprofen (100mg) + Paracetamol (162.5mg) Suspension (0.5 ml/kg per dose)',
    standardDose: '0.5 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '100mg + 162.5mg / 5 ml', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ibuprofen + Paracetamol Syrup (Combiflam Syp)',
    salts: 'Ibuprofen (100mg) + Paracetamol (162.5mg) Syrup',
    standardDose: '10 mg/kg (Ibu)',
    recommendedFrequency: 'Three times daily after food (TDS/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '100mg + 162.5mg / 5 ml (Combiflam)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ibuprofen + Paracetamol Drops (Combiflam Drops)',
    salts: 'Ibuprofen + Paracetamol Pediatric Drops',
    standardDose: '10 mg/kg (Ibu)',
    recommendedFrequency: 'Three times daily after food (TDS/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '100mg + 162.5mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Mefenamic Acid (Meftal-P)',
    salts: 'Mefenamic Acid Oral Suspension (4 to 6 mg/kg/dose)',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Three times daily after food as needed (TDS / SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 5 ml (Suspension)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Mefenamic Acid DS (Meftal-GP DS)',
    salts: 'Mefenamic Acid Double Strength Suspension (4 to 6 mg/kg/dose)',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Three times daily after food as needed (TDS / SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Mefenamic Acid + Paracetamol (Meftal Forte)',
    salts: 'Mefenamic Acid + Paracetamol Pediatric Suspension',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '50mg + 125mg / 5 ml', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Ibuprofen + Paracetamol (Ibugesic Plus DS)',
    salts: 'Ibuprofen (200mg) + Paracetamol (325mg) Double Strength Syrup',
    standardDose: '0.25 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '200mg + 325mg / 5 ml (DS)', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Paracetamol (Pyrigesic 60mg Drops)',
    salts: 'Paracetamol Pediatric Hydro-drops (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (PRN/SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '60 mg / 1 ml (Drops)', formula_mg_per_ml: 60 }]
  },
  {
    name: 'Paracetamol (Macfast 125 Syp)',
    salts: 'Paracetamol Oral Suspension (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '125 mg / 5 ml (Syrup)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Paracetamol (Macfast 250 Syp)',
    salts: 'Paracetamol DS Suspension (15 mg/kg/dose)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed (SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol (T-98 120 Suspension)',
    salts: 'Paracetamol Suspension (15 mg/kg)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours as needed',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol (Paedimol 120 Syp)',
    salts: 'Paracetamol Suspension (15 mg/kg)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours (SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '120 mg / 5 ml', formula_mg_per_ml: 24 }]
  },
  {
    name: 'Paracetamol (Paedimol 250 Syp)',
    salts: 'Paracetamol DS Suspension (15 mg/kg)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours (SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '250 mg / 5 ml', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Paracetamol Drops (Paedimol Drops)',
    salts: 'Paracetamol Paediatric Drops',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Every 4-6 hours (SOS)',
    category: 'Fever',
    strengthOptions: [{ strength: '100 mg / 1 ml', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Paracetamol (Feverall Suppository)',
    salts: 'Paracetamol Suppositories for High Fever (15-20 mg/kg)',
    standardDose: '15 mg/kg',
    recommendedFrequency: 'Insert rectally every 6 hours SOS for high fever',
    category: 'Fever',
    strengthOptions: [{ strength: '80 mg / Suppository', formula_mg_per_ml: 80 }, { strength: '170 mg / Suppository', formula_mg_per_ml: 170 }]
  },

  // ================= COLD & COUGH (36-75) =================
  {
    name: 'Levosalbutamol (Asthalin Syp / Levolin)',
    salts: 'Bronchodilator Syrup (0.1 mg/kg per dose)',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for chest wheezing',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.2 }]
  },
  {
    name: 'Levosalbutamol drops (Levolin Drops)',
    salts: 'Levosalbutamol Pediatric Bronchodilator Drops (0.1 mg/kg)',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for wheeze',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '0.5 mg / 1 ml (Drops)', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Salbutamol (Asthalin 2mg/5ml)',
    salts: 'Salbutamol Bronchodilator Syrup (0.15 mg/kg)',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '2 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Montelukast + Levocetirizine (Montair LC Pediatric)',
    salts: 'Antileukotriene + Antihistamine chewable/Syp (Montelukast 4mg + Levocetirizine 2.5mg)',
    standardDose: '4 mg', // standard dose flat for 1-5 yrs
    recommendedFrequency: 'Once daily at bedtime (OD, HS) for 5-10 days',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4mg + 2.5mg / 5 ml (Syrup)', formula_mg_per_ml: 0.8 }]
  },
  {
    name: 'Montelukast + Levocetirizine Kid (Romilast L Syp)',
    salts: 'Montelukast (4mg) + Levocetirizine (2.5mg) Syrup',
    standardDose: '2.5 mg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4mg + 2.5mg / 5 ml (Romilast L)', formula_mg_per_ml: 0.8 }]
  },
  {
    name: 'Montelukast Kid (Montair Chewable)',
    salts: 'Montelukast chewable tablets (4mg standard flat dose)',
    standardDose: '4 mg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) - chew thoroughly',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4 mg Chewable Tablet', formula_mg_per_ml: 4 }]
  },
  {
    name: 'Montelukast Granules (Montair Sachet)',
    salts: 'Montelukast 4mg Oral Granules Sachet',
    standardDose: '4 mg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) mixed in milk/porridge',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4 mg Sachet', formula_mg_per_ml: 4 }]
  },
  {
    name: 'Ambroxol + Levosalbutamol + Guaiphenesin (Ascoril LS)',
    salts: 'Expectorant Cough Syrup (Ambroxol 15mg + Levosalbutamol 0.5mg + Guaiphenesin 50mg)',
    standardDose: '0.25 ml/kg',
    recommendedFrequency: 'Three times daily (TDS) for productive cold cough',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '15mg+0.5mg+50mg / 5 ml Syrup', formula_mg_per_ml: 5 }]
  },
  {
    name: 'Ambroxol + Levosalbutamol + Guaiphenesin Drops (Ascoril LS Drops)',
    salts: 'Pediatric LS Expecterant Drops',
    standardDose: '0.1 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '7.5mg+0.25mg+12.5mg / 1 ml Drops', formula_mg_per_ml: 12.5 }]
  },
  {
    name: 'Ambroxol (Mucolite Liquid)',
    salts: 'Mucolytic Syrup (Ambroxol 15 mg / 5 ml)',
    standardDose: '1.5 mg/kg/day split inside 2 doses',
    recommendedFrequency: 'Twice daily after food (BD) for wet congestion',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '15 mg / 5 ml Syrup', formula_mg_per_ml: 3 }, { strength: '30 mg / 5 ml DS Syrup', formula_mg_per_ml: 6 }]
  },
  {
    name: 'Ambroxol Drops (Mucolite Drops)',
    salts: 'Ambroxol Pediatric Mucolytic Drops (7.5 mg/ml)',
    standardDose: '0.75 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '7.5 mg / 1 ml (Drops)', formula_mg_per_ml: 7.5 }]
  },
  {
    name: 'Bromhexine (Solvin Syrup)',
    salts: 'Mucolytic Expectorant Syrup Bronchiectasis (4 mg / 5 ml)',
    standardDose: '0.3 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4 mg / 5 ml Syrup', formula_mg_per_ml: 0.8 }]
  },
  {
    name: 'Bromhexine + Levosalbutamol (Grilinctus-BM)',
    salts: 'Bromhexine 4mg + Levosalbutamol 1mg Syrup',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4mg + 1mg / 5 ml Syrup', formula_mg_per_ml: 0.8 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine (Sinarest Syrup)',
    salts: 'Chlorpheniramine Maleate (2mg) + Phenylephrine HCl (5mg) per 5 ml',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily for running nose and sneezing (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '2mg + 5mg / 5 ml Syrup', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine DS (Sinarest DS)',
    salts: 'Double Strength Cold and Flu Syrup',
    standardDose: '0.1 ml/kg',
    recommendedFrequency: 'Twice or thrice daily after food (BD/TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4mg + 10mg / 5 ml DS Syrup', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine Drops (Sinarest Drops)',
    salts: 'Pediatric Nasal Decongestant Drops',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1mg + 2.5mg / 1 ml Drops', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine (Wikoryl Syp)',
    salts: 'Chlorpheniramine (2mg) + Phenylephrine (5mg) Syrup',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily for common cold (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '2mg + 5mg / 5 ml Wikoryl', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine Drops (Wikoryl Drops)',
    salts: 'Wikoryl Pediatric Decongestant Drops',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1mg + 2.5mg / 1 ml Drops', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine (Solvin Cold Syp)',
    salts: 'CPM (2mg) + Phenylephrine (5mg) per 5 ml',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Thrice daily for cold & running nose (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '2mg + 5mg / 5 ml Syrup', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine Syp (T-Minic Syp)',
    salts: 'CPM 2mg + Phenylephrine 5mg Cold Syp',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '2mg + 5mg / 5 ml', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Chlorpheniramine + Phenylephrine Drops (T-Minic Drops)',
    salts: 'T-Minic Pediatric Cold Drops',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1mg + 2.5mg / 1 ml Drops', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Dextromethorphan (Alex Syrup)',
    salts: 'Dextromethorphan Cough Suppressant Syrup (10 mg / 5 ml)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for dry spasmodic cough',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '10 mg / 5 ml Syrup', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Dextromethorphan + Chlorpheniramine (Ascoril D)',
    salts: 'Dextromethorphan (10mg) + Chlorpheniramine CPM (2mg) per 5 ml',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily for dry allergic irritation (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '10mg + 2mg / 5 ml Syrup', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Dextromethorphan + Chlorpheniramine Syp (Alex Junior)',
    salts: 'Dextromethorphan (5mg) + CPM (2mg) per 5ml Syrup',
    standardDose: '0.25 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '5mg + 2mg / 5 ml', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Mucobutol (Ambroxol + Terbutaline + Guaiphenesin)',
    salts: 'Ambroxol 15mg + Terbutaline 1.25mg + Guaiphenesin 50mg Syp',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily with warm water (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '15mg+1.25mg+50mg / 5 ml', formula_mg_per_ml: 3 }]
  },
  {
    name: 'Salbutamol + Ambroxol Syp (Asthalin AX)',
    salts: 'Salbutamol 1mg + Ambroxol 15mg + Guaiphenesin 50mg Syrup',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1mg + 15mg + 50mg / 5 ml', formula_mg_per_ml: 3 }]
  },
  {
    name: 'Levosalbutamol + Ambroxol Syp (Levolin Plus)',
    salts: 'Levosalbutamol 0.5mg + Ambroxol 15mg + Guaiphenesin 50mg Syrup',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '0.5mg + 15mg + 50mg / 5 ml', formula_mg_per_ml: 3 }]
  },
  {
    name: 'Diphenhydramine + Ammonium Chloride (Benadryl Syp)',
    salts: 'Diphenhydramine 12.5mg + Ammonium Chloride Cough Syrupy Formula',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily after food (TDS) for throat soothing',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '12.5 mg / 5 ml Syrup', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Pholcodine + Promethazine Syp (Tixylix)',
    salts: 'Pholcodine (4mg) + Promethazine (1.5mg) per 5 ml Syrup',
    standardDose: '2.5 ml flat for toddlers, 5ml flat for children',
    recommendedFrequency: 'Twice daily or at bedtime (OD/BD) as dry cough suppressant',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '4mg + 1.5mg / 5 ml Syrup', formula_mg_per_ml: 0.8 }]
  },
  {
    name: 'Promethazine Syrup (Phenergan)',
    salts: 'Promethazine Hydrochloride Sedative antihistamine Syrup',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) for allergic cough',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '5 mg / 5 ml Syrup', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Phenylephrine + Triprolidine Syp (Actifed Syp)',
    salts: 'Triprolidine (1.25mg) + Phenylephrine (2.5mg) per 5ml',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily (TDS)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1.25mg + 2.5mg / 5 ml', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Normal Saline Nasal Spr (Nasoclear Spr)',
    salts: 'Sodium Chloride 0.9% Nasal Drops/Spray',
    standardDose: '1-2 drops',
    recommendedFrequency: '1-2 sprays/drops in each nostril 10 minutes before feed (BD/TDS/PRN)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '0.9% w/v Nasal Spray', formula_mg_per_ml: 9 }]
  },
  {
    name: 'Oxy破坏Lozine Nasal Drops (Otrivin Pediatric)',
    salts: 'Xylometazoline Hydrochloride 0.05% Nasal Drops',
    standardDose: '1 drop',
    recommendedFrequency: '1 drop in each nostril at night SOS (Max 3 days to avoid rebound)',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '0.05% otrivin nasal drops', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Sualin Herbal Syp (Sualin)',
    salts: 'Herbal Cough and Cold Soother Syrup',
    standardDose: '2.5 ml',
    recommendedFrequency: 'Two times daily (BD) for dry throat irritation',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: 'Herbal Formula Syrup', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Ketotifen Syrup (Ketasma)',
    salts: 'Antiasthmatic Prophylactic Ketotifen Syrup',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Twice daily (BD) for chronic asthma prophylaxis',
    category: 'Cold & Cough',
    strengthOptions: [{ strength: '1 mg / 5 ml Syrup', formula_mg_per_ml: 0.2 }]
  },

  // ================= ANTIBIOTICS (76-130) =================
  {
    name: 'Amoxicillin (Novamox 125)',
    salts: 'Amoxicillin Antibiotic Dry Oral Suspension (40 mg/kg/day split inside 2 doses)',
    standardDose: '20 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 3-5 days without fail',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml (Oral Susp)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Amoxicillin (Novamox 250 DS)',
    salts: 'Amoxicillin Double Strength Dried Oral Suspension',
    standardDose: '20 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 3-5 days without fail',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Oral Susp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Amoxicillin Dry Drops (Novamox Drops)',
    salts: 'Amoxicillin Pediatric Oral Drops',
    standardDose: '20 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 3-5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 1 ml (Oral Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Amoxicillin + Clavulanate (Augmentin 228.5)',
    salts: 'Amoxicillin (200mg) + Pot. Clavulanate (28.5mg) dry syrup (45 mg/kg/day split)',
    standardDose: '22.5 mg/kg',
    recommendedFrequency: 'Twice daily with food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '228.5 mg / 5 ml (Dry Syrup)', formula_mg_per_ml: 45.7 }]
  },
  {
    name: 'Amoxicillin + Clavulanate DS (Augmentin 457 DS)',
    salts: 'Amoxicillin (400mg) + Pot. Clavulanate (57mg) Double Strength Dry Syrup',
    standardDose: '22.5 mg/kg',
    recommendedFrequency: 'Twice daily with food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '457 mg / 5 ml (DS Dry Syrup)', formula_mg_per_ml: 91.4 }]
  },
  {
    name: 'Amoxicillin + Clavulanate Drops (Augmentin Drops)',
    salts: 'Amoxicillin (80mg) + Clavulanate (11.4mg) per ml',
    standardDose: '22.5 mg/kg',
    recommendedFrequency: 'Twice daily with food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '91.4 mg / 1 ml Drops', formula_mg_per_ml: 91.4 }]
  },
  {
    name: 'Azithromycin (Azee 100 Syp)',
    salts: 'Azithromycin Macrolide Antibiotic Syrup (10 mg/kg single dose)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily 1 hour before or 2 hours after feed (OD) for 3 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml Syrup', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Azithromycin (Azee 200 DS Syp)',
    salts: 'Azithromycin Double Strength Syrup (10 mg/kg single dose)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily 1 hour before or 2 hours after feed (OD) for 3 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '200 mg / 5 ml (DS Syp)', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Azithromycin drops (Azee Drops)',
    salts: 'Azithromycin Paediatric Drops',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily (OD) for 3 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 1 ml (Drops)', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Azithromycin (Azithral 100)',
    salts: 'Azithromycin Suspension (10 mg/kg)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily (OD) for 3 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Azithromycin (Azithral 200)',
    salts: 'Azithromycin DS Suspension (10 mg/kg)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily (OD) for 3-5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '200 mg / 5 ml', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Cefixime (Taxim-O 50 Syp)',
    salts: 'Cefixime Third Generation Oral Cephalosporin (8 mg/kg/day split inside 2 doses)',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5-7 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml (Oral Susp)', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Cefixime (Taxim-O 100 DS Syp)',
    salts: 'Cefixime Double Strength Dry Syrup',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5-7 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml (DS Dry Syp)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Cefixime Drops (Taxim-O Drops)',
    salts: 'Cefixime Oral Pediatric Drops',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 1 ml Drops', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cefixime (Zifi 50 Dry Syp)',
    salts: 'Cefixime Dry Syrup Antibiotic (8 mg/kg/day split)',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml Dry Syrup', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Cefixime (Zifi 100 DS)',
    salts: 'Cefixime Double Strength Dried Syrup',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml (DS Dry Syp)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Cefixime Drops (Zifi Drops)',
    salts: 'Cefixime Pediatric Soluble Drops',
    standardDose: '4 mg/kg',
    recommendedFrequency: 'Twice daily (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 1 ml (Drops)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cefopodoxime Proxetil (Monocef-O 50 Syp)',
    salts: 'Cefopodoximeproxetil Pediatric Suspension (10 mg/kg/day split inside 2 doses)',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml (Dry Syrup)', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Cefopodoxime Proxetil (Monocef-O 100 DS)',
    salts: 'Cefopodoxime Proxetil Double Strength Dry Syrup',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml (DS Dry Syp)', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Cefopodoxime Drops (Monocef-O Drops)',
    salts: 'Cefopodoxime Proxetil drops',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 1 ml (Drops)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cefopodoxime (Kefpod 50)',
    salts: 'Cefopodoxime Oral Suspension (10 mg/kg/day split)',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml Dry Syp', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Cefopodoxime (Kefpod 100 DS)',
    salts: 'Cefopodoxime Double Strength Suspension',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml DS Syp', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Cefopodoxime Drops (Kefpod Drops)',
    salts: 'Cefopodoxime Pediatric Drops',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 1 ml Drops', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cefuroxime Axetil (Ceftum 125 Syp)',
    salts: 'Cefuroxime Axetil Oral Dry Syrup (20-30 mg/kg/day split inside 2 doses)',
    standardDose: '12.5 mg/kg',
    recommendedFrequency: 'Twice daily immediately with or after rich food (BD) for 5-7 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml Dry Syrup', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cefuroxime Axetil DS (Ceftum 250 DS)',
    salts: 'Cefuroxime Double Strength Dry Syrup',
    standardDose: '12.5 mg/kg',
    recommendedFrequency: 'Twice daily immediately with or after food (BD) for 5-7 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Dry Syp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Cephalexin Dry Syp (Phexin 125)',
    salts: 'Cephalexin Cephalosporin First Gen (25-50 mg/kg/day in 3 divided doses)',
    standardDose: '12.5 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS) for skin/soft tissue focus',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml Dry Syrup', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Cephalexin DS Dry Syp (Phexin 250 DS)',
    salts: 'Cephalexin Double Strength Dried Syrup',
    standardDose: '12.5 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS) for skin/soft tissue focus',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '250 mg / 5 ml (DS Dry Syp)', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Cephalexin Drops (Phexin Drops)',
    salts: 'Cephalexin Oral Pediatric Drops',
    standardDose: '12.5 mg/kg',
    recommendedFrequency: 'Thrice daily after food (TDS)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 1 ml Drops', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Clarithromycin Dry Syp (Claribid 125)',
    salts: 'Clarithromycin Macrolide Suspension (15 mg/kg/day split inside 2 doses)',
    standardDose: '7.5 mg/kg',
    recommendedFrequency: 'Twice daily with/after food (BD) for atypical respiratory focus',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml Dry Syrup', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Clarithromycin DS Dry Syp (Claribid 250 DS)',
    salts: 'Clarithromycin Double Strength Macrolide Suspension',
    standardDose: '7.5 mg/kg',
    recommendedFrequency: 'Twice daily with/after food (BD) for atypical respiratory focus',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '250 mg / 5 ml DS Syp', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Erythromycin Estolate Syp (Erythrocin 100 Syp)',
    salts: 'Erythromycin Macrolide Dry Syrup (30-50 mg/kg/day split inside 3-4 doses)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Three times daily before food (TDS) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml Suspension', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Erythromycin Estolate DS (Erythrocin 200 DS)',
    salts: 'Erythromycin Double Strength Suspension',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Three times daily before food (TDS) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '200 mg / 5 ml (DS Susp)', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Metronidazole (Metrogyl Syp)',
    salts: 'Metronidazole Antiamoebic / Antibacterial Suspension (30 mg/kg/day inside 3 doses)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS) for pediatric amoebic diarrhea',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml Oral Syp', formula_mg_per_ml: 20 }, { strength: '200 mg / 5 ml DS Oral Syp', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Ofloxacin + Metronidazole Syp (O2 Syp)',
    salts: 'Ofloxacin (50mg) + Metronidazole (100mg) per 5 ml antidiarrheal syrup',
    standardDose: '0.5 ml/kg',
    recommendedFrequency: 'Twice daily after food (BD) for mixed enteric diarrhea',
    category: 'Antibiotics',
    strengthOptions: [{ strength: 'Ofloxacin 50mg + Metronidazole 100mg / 5ml', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Ofloxacin + Metronidazole Drops (O2 M Drops)',
    salts: 'Ofloxacin + Metronidazole Pediatric Diarrheal Drops',
    standardDose: '0.4 ml/kg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: 'Oflox 50mg + Metro 100mg / 1 ml Drops', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Colistin Sulphate (Colisith Syp)',
    salts: 'Colistin Pediatric Oral Antibiotic (5-15 mg/kg/day split in 3 doses)',
    standardDose: '2.5 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for severe gram-negative dysentery',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 5 ml (Equivalent to 12.5 lakh IU)', formula_mg_per_ml: 5 }]
  },
  {
    name: 'Linezolid Dry Syp (Lizomac 100)',
    salts: 'Linezolid Dry Syrup (20-30 mg/kg/day inside 2-3 doses)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Two or three times daily (BD/TDS) for resistant Gram Positives',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml Dry Syrup', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Linezolid (Lizolid Syp 100mg)',
    salts: 'Linezolid Syp',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Every 8 hours (TDS) for skin/bronchial infections',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '100 mg / 5 ml', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ofloxacin Syp (Oflox 50 Syp)',
    salts: 'Ofloxacin Fluoroquinolone Antibiotic Syrup (10-15 mg/kg/day in 2 split doses)',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for 5 days',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml Syrup', formula_mg_per_ml: 10 }, { strength: '100 mg / 5 ml DS Syp', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ofloxacin Drops (Oflox Drops)',
    salts: 'Ofloxacin Pediatric Drops',
    standardDose: '5 mg/kg',
    recommendedFrequency: 'Twice daily (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '25 mg / 1 ml (Drops)', formula_mg_per_ml: 25 }]
  },
  {
    name: 'Ciprofloxacin Syp (Cifran 125)',
    salts: 'Ciprofloxacin Pediatric Syrup (20-30 mg/kg/day split in 2 doses)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Twice daily after food (BD) for intestinal typhoid target',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml Oral Susp', formula_mg_per_ml: 25 }, { strength: '250 mg / 5 ml DS Oral Susp', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Co-Trimoxazole Syp (Septran Syp)',
    salts: 'Trimethoprim (40mg) + Sulfamethoxazole (200mg) Syrup (6-8 mg/kg/day TMP)',
    standardDose: '4 mg/kg (TMP)',
    recommendedFrequency: 'Twice daily after food (BD) for urinary/middle ear infection',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '40mg + 200mg / 5 ml Syrup', formula_mg_per_ml: 8 }]
  },
  {
    name: 'Co-Trimoxazole DS Syp (Septran DS Syp)',
    salts: 'Trimethoprim (80mg) + Sulfamethoxazole (400mg) Double Strength Syrup',
    standardDose: '4 mg/kg (TMP)',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '80mg + 400mg / 5 ml DS Syp', formula_mg_per_ml: 16 }]
  },
  {
    name: 'Fluconazole Syp (Syscan 50)',
    salts: 'Antifungal Fluconazole Oral Suspension (3-6 mg/kg/day single dose)',
    standardDose: '6 mg/kg',
    recommendedFrequency: 'Once daily after food (OD) for oral/systemic thrush',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '50 mg / 5 ml Syrup', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Griseofulvin Syp (Grisovin-FP 125)',
    salts: 'Systemic Antifungal Griseofulvin microsize (10-15 mg/kg/day)',
    standardDose: '10 mg/kg',
    recommendedFrequency: 'Once daily with whole fatty milk or ice cream (OD) for ringworm',
    category: 'Antibiotics',
    strengthOptions: [{ strength: '125 mg / 5 ml Syrup', formula_mg_per_ml: 25 }]
  },

  // ================= ANTI-EMETIC/STOMACH (131-165) =================
  {
    name: 'Ondansetron (Ondem 2mg Syp)',
    salts: 'Selective 5-HT3 Antagonist Oral Syrup (0.15 mg/kg per dose)',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Give 15 minutes before solid feed or other oral medicines (BD/TDS SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '2 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Ondansetron Infant Drops (Ondem Drops)',
    salts: 'Ondansetron Pediatric Drops (0.15 mg/kg)',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Give 15 minutes before feed as needed (BD/TDS SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '2 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Ondansetron (Emeset 2mg Syp)',
    salts: 'Ondansetron Pediatric Syrup',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Give 15 minutes before feed (BD/TDS SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '2 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Ondansetron Drops (Emeset Drops)',
    salts: 'Ondansetron Pediatric Oral Liquid Drops',
    standardDose: '0.15 mg/kg',
    recommendedFrequency: 'Give 15 minutes before feed SOS',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '20 mg / 10 ml MD bottle', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Ondansetron Orally Disintegrating (Ondem MD 2)',
    salts: 'Ondansetron Orally Disintegrating Kid Tablet (2 mg standard flat dose)',
    standardDose: '2 mg',
    recommendedFrequency: 'Place on toddler tongue for rapid dissolving 15 mins before feed (SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '2 mg Orally Disintegrating Tablet', formula_mg_per_ml: 2 }, { strength: '4 mg Orally Disintegrating Kid Tablet', formula_mg_per_ml: 4 }]
  },
  {
    name: 'Domperidone (Domstal Syp 5mg)',
    salts: 'Dopaminergic Antagonist Prokinetic Suspension (0.25 mg/kg per dose)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Three times daily, 15-30 minutes before food/milk (TDS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '5 mg / 5 ml (Suspension)', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Domperidone Baby Drops (Domstal Drops)',
    salts: 'Domperidone Pediatric Oral Drops (1 mg/ml)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Three times daily, 15-30 minutes before milk/feed (TDS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '1 mg / 1 ml (Drops)', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Dicyclomine + Simethicone (Cyclopam Syp)',
    salts: 'Dicyclomine HCl (10mg) + Simethicone (40mg) Spasmolytic per 5 ml',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Three times daily for abdominal colic distress (TDS / SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10mg + 40mg / 5 ml Syrup', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Dicyclomine + Simethicone Drops (Cyclopam Drops)',
    salts: 'Pediatric Colic Spasmolytic Drops',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily for abdominal flatulence colic (TDS / SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10mg + 40mg / 1 ml Drops', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Dicyclomine + Simethicone (Colimex Syp)',
    salts: 'Dicyclomine (10mg) + Simethicone (40mg) Spasmonil',
    standardDose: '0.2 ml/kg',
    recommendedFrequency: 'Thrice daily for severe baby gas/colic (TDS / SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10mg + 40mg / 5 ml Colimex', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Dicyclomine + Simethicone Drops (Colimex Drops)',
    salts: 'Colimex Pediatric Anti-flatulence Spasmodic Drops',
    standardDose: '0.15 ml/kg',
    recommendedFrequency: 'Three times daily (TDS / SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10mg + 40mg / 1 ml Drops', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Metoclopramide Syp (Reglan)',
    salts: 'Metoclopramide HCl Antiemetic Prokinetic (0.1 mg/kg/dose)',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Three times daily 20 minutes before feed (TDS SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '5 mg / 5 ml Syrup', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Metoclopramide Drops (Reglan Drops)',
    salts: 'Metoclopramide Pediatric Anti-vomit Drops',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Three times daily (TDS SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '1 mg / 1 ml Drops', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Zinc Gluconate (Zinconia Syp)',
    salts: 'Diarrheal Therapy (10-20 mg once daily flat dose for mucosal recovery)',
    standardDose: '20 mg',
    recommendedFrequency: 'Once daily (OD) for exactly 14 days to arrest recurrent diarrhea',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '20 mg / 5 ml (Syrup)', formula_mg_per_ml: 4 }]
  },
  {
    name: 'Zinc Gluconate Drops (Zinconia Drops)',
    salts: 'Zinc Gluconate Pediatric Drops (20mg/ml)',
    standardDose: '20 mg',
    recommendedFrequency: 'Once daily (OD) for 14 days',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '20 mg / 1 ml Drops', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Zinc Acetate (Baby-Zinc Syp)',
    salts: 'Zinc Acetate Diarrheal Syrup',
    standardDose: '20 mg',
    recommendedFrequency: 'Once daily (OD) for 14 days without fail',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '20 mg / 5 ml Syrup', formula_mg_per_ml: 4 }]
  },
  {
    name: 'Racecadotril Syp (Zedott 15mg)',
    salts: 'Enkephalinase Inhibitor Antisecretory Syrup (1.5 mg/kg per dose)',
    standardDose: '1.5 mg/kg',
    recommendedFrequency: 'Three times daily (TDS) for active watery secretory diarrhea for 3 days',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '15 mg / 5 ml Suspension', formula_mg_per_ml: 3 }, { strength: '30 mg / 5 ml DS Suspension', formula_mg_per_ml: 6 }]
  },
  {
    name: 'Racecadotril Sachets (Zedott 10 Sachet)',
    salts: 'Racecadotril Sachet for infants (10mg-30mg flat)',
    standardDose: '15 mg',
    recommendedFrequency: 'Three times daily (TDS) mixed with water/ORS/breastmilk',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10 mg Sachet', formula_mg_per_ml: 10 }, { strength: '30 mg Sachet', formula_mg_per_ml: 30 }]
  },
  {
    name: 'Oofloxacin + Ornidazole Syp (O2 Syp Dual)',
    salts: 'Ofloxacin (50mg) + Ornidazole (125mg) per 5 ml Antidiarrheal',
    standardDose: '0.4 ml/kg',
    recommendedFrequency: 'Twice daily after food (BD) for protozoal diarrhea for 5 days',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: 'Ofloxacin 50mg + Ornidazole 125mg / 5ml', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Lactobacillus Acidophilus (Darolac Sachet)',
    salts: 'Lactic Acid Bacillus Probiotic Sachet (1.5 billion spores)',
    standardDose: '1 sachet',
    recommendedFrequency: 'Twice daily (BD) dissolved in ORS/feed to restore gut gut flora',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '1.5 Billion Spores Sachet', formula_mg_per_ml: 1.5 }]
  },
  {
    name: 'Saccharomyces Boulardii (Econorm Sachet)',
    salts: 'Saccharomyces Boulardii Lyophilized Probiotic Sachet (250 mg)',
    standardDose: '1 sachet',
    recommendedFrequency: 'Twice daily (BD) mixed in cool water/ORS (Never mix in hot water/milk)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '250 mg Sachet', formula_mg_per_ml: 250 }]
  },
  {
    name: 'Saccharomyces Boulardii Syp (Econorm Liquid)',
    salts: 'Saccharomyces Boulardii Dry Oral Syrup',
    standardDose: '1 Sachet/Bottle',
    recommendedFrequency: 'Twice daily (BD) to arrest stool purging',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '250 mg / 5 ml Dry Syrup', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Bacillus Clausii (Enterogermina 2 Billion)',
    salts: 'Bacillus Clausii Probiotic Mini-bottles suspension',
    standardDose: '1 mini vial flat',
    recommendedFrequency: 'One vial twice daily (BD) to drink directly for 5 days',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '2 Billion Spores / 5 ml Vial', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Bacillus Clausii Syp (Sporlac Syp)',
    salts: 'Bacillus Clausii Suspension Probiotic',
    standardDose: '5 ml',
    recommendedFrequency: 'Twice daily after antibiotic dose (BD)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '1 Billion Spores / 5 ml Syp', formula_mg_per_ml: 0.2 }]
  },
  {
    name: 'Oral Rehydration Salts (WHO ORS Electral)',
    salts: 'WHO Recommended Osmolarity ORS formula',
    standardDose: 'Ad Libitum (PRN)',
    recommendedFrequency: '50-100 ml slowly after each loose stool or episode of purging',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '21.8 g Sachet / 1 Litre Water', formula_mg_per_ml: 21.8 }]
  },
  {
    name: 'ORS Liquid (Ready To Use Electral)',
    salts: 'Ready-to-drink Oral Osmolar Rehydration liquid',
    standardDose: 'PRN',
    recommendedFrequency: 'Sip slowly after each vomit or watery motion',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '200 ml Ready Tetra-pack', formula_mg_per_ml: 200 }]
  },
  {
    name: 'Simethicone Drops (Domstal Flatulence drops)',
    salts: 'Simethicone Pediatric Gas Carminative Drops',
    standardDose: '5-10 drops',
    recommendedFrequency: 'Four times daily, 15 minutes before feed (QID / SOS)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '40 mg / 1 ml Drops', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Lactulose (Duphalac Sol)',
    salts: 'Osmotic Laxative Lactulose Solution (1-2 ml/kg/day)',
    standardDose: '1 ml/kg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) or early morning with plenty of warm water',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '10 g / 15 ml Solution', formula_mg_per_ml: 0.67 }]
  },
  {
    name: 'Liquid Paraffin + Milk of Magnesia (Cremaffin)',
    salts: 'Liquid Paraffin + MoM Pediatric Laxative Syrup',
    standardDose: '0.5 ml/kg',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) for functional pediatric constipation',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: 'Paraffin + MoM Syrup', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Sennosides Syrup (Senokot Syp)',
    salts: 'Herbal Laxative Senna extract syrup',
    standardDose: '2.5 ml',
    recommendedFrequency: 'Once daily at bedtime (OD) SOS',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '7.5 mg / 5 ml Syrup', formula_mg_per_ml: 1.5 }]
  },
  {
    name: 'Albendazole (Zentel 400 Syp)',
    salts: 'Broad Spectrum Anthelmintic Deworming Liquid (400 mg single flat dose for children >2 yrs, 200 mg for 1-2 yrs)',
    standardDose: '400 mg',
    recommendedFrequency: 'One single dose at bedtime (OD); Repeat after 14 days without fail to break egg cycle',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '400 mg / 10 ml Suspension', formula_mg_per_ml: 40 }]
  },
  {
    name: 'Mebendazole (Mebex Syrup)',
    salts: 'Anthelmintic Deworming Suspension',
    standardDose: '100 mg',
    recommendedFrequency: 'Twice daily for 3 consecutive days for worm infections (BD)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '100 mg / 5 ml Syrup', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Ivermectin Syrup (Ivecop Kid)',
    salts: 'Antiparasitic Ivermectin Suspension (0.2 mg/kg single dose)',
    standardDose: '0.2 mg/kg',
    recommendedFrequency: 'Once single dose on empty stomach in morning (OD)',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '1.5 mg / 5 ml Syrup', formula_mg_per_ml: 0.3 }]
  },
  {
    name: 'Activated Charcoal Syp (Charcoal Susp)',
    salts: 'Activated Charcoal Poison Toxin adsorbent Suspension',
    standardDose: '1 g/kg',
    recommendedFrequency: 'Immediate single emergency oral dose for accidental non-corrosive ingestion',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '25 g / 120 ml Powder Susp', formula_mg_per_ml: 208 }]
  },
  {
    name: 'Sodium Picosulfate drops (Picofit Drops)',
    salts: 'Pediatric Contact Laxative Drops',
    standardDose: '1 drop/year of age',
    recommendedFrequency: 'Once daily at bedtime (OD, HS) for difficult hard stools',
    category: 'Anti-emetic/Stomach',
    strengthOptions: [{ strength: '7.5 mg / 1 ml Drops', formula_mg_per_ml: 7.5 }]
  },

  // ================= ALLERGY (166-185) =================
  {
    name: 'Cetirizine (Alerid 5mg Syp)',
    salts: 'Second Generation Non-sedative Antihistamine (0.25 mg/kg per dose)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Once daily at night (OD, HS) or twice daily for severe allergic hives (BD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '5 mg / 5 ml (Syrup)', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Cetirizine Infant Drops (Alerid Drops)',
    salts: 'Cetirizine Pediatric Antihistamine Drops (2.5 mg/ml)',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Once daily at night (OD, HS)',
    category: 'Allergy',
    strengthOptions: [{ strength: '2.5 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Levocetirizine (L-Cetriz Syp)',
    salts: 'Active L-enantiomer Antihistamine (0.12 mg/kg per dose)',
    standardDose: '0.12 mg/kg',
    recommendedFrequency: 'Once daily at night (OD, HS) or twice daily for severe itching (BD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '2.5 mg / 5 ml (Syrup)', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Levocetirizine Infant Drops (L-Cetriz Drops)',
    salts: 'Levocetirizine Pediatric Drops (2.5 mg/ml)',
    standardDose: '0.12 mg/kg',
    recommendedFrequency: 'Once daily at night (OD, HS)',
    category: 'Allergy',
    strengthOptions: [{ strength: '2.5 mg / 1 ml (Infant Drops)', formula_mg_per_ml: 2.5 }]
  },
  {
    name: 'Fexofenadine (Allegra Syp 30mg)',
    salts: 'Non-sedating Antihistamine H1-blocker (15 mg for 6-11 months, 30 mg to 60 mg for >2 years)',
    standardDose: '30 mg',
    recommendedFrequency: 'Twice daily after food (BD) for allergic rhinitis/urticaria',
    category: 'Allergy',
    strengthOptions: [{ strength: '30 mg / 5 ml (Syrup)', formula_mg_per_ml: 6 }]
  },
  {
    name: 'Fexofenadine DS (Allegra DS)',
    salts: 'Fexofenadine Double Strength Pediatric Syrup',
    standardDose: '30 mg',
    recommendedFrequency: 'Twice daily after food (BD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '60 mg / 5 ml (DS Syp)', formula_mg_per_ml: 12 }]
  },
  {
    name: 'Loratadine Syrup (Claridin)',
    salts: 'Loratadine H1-antihistamine Syrup 5mg/5ml',
    standardDose: '5 mg',
    recommendedFrequency: 'Once daily in morning (OD) for day-long outdoor allergy protection',
    category: 'Allergy',
    strengthOptions: [{ strength: '5 mg / 5 ml Syrup', formula_mg_per_ml: 1 }]
  },
  {
    name: 'Chlorpheniramine Maleate (Cadistin Syp)',
    salts: 'First Generation Sedative Antihistamine CPM Syrup',
    standardDose: '0.35 mg/kg/day split inside three doses',
    recommendedFrequency: 'Three times daily after food (TDS) for acute hyper-allergic skin rash',
    category: 'Allergy',
    strengthOptions: [{ strength: '2 mg / 5 ml Syrup', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Hydroxyzine (Atarax Syp 10mg)',
    salts: 'Antihistamine + Anxiolytic Antipruritic Syrup (2 mg/kg/day split in 3 doses)',
    standardDose: '0.6 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS) for excessive night scratching in eczemas',
    category: 'Allergy',
    strengthOptions: [{ strength: '10 mg / 5 ml Syrup', formula_mg_per_ml: 2 }]
  },
  {
    name: 'Hydroxyzine Drops (Atarax Drops)',
    salts: 'Hydroxyzine Hydrochloride pediatric drops (6 mg/ml)',
    standardDose: '0.6 mg/kg',
    recommendedFrequency: 'Three times daily after food (TDS)',
    category: 'Allergy',
    strengthOptions: [{ strength: '6 mg / 1 ml (Drops)', formula_mg_per_ml: 6 }]
  },
  {
    name: 'Prednisolone (Prelone 5mg Syp)',
    salts: 'Oral Corticosteroid Anti-inflammatory (1-2 mg/kg/day split or single dose)',
    standardDose: '1 mg/kg',
    recommendedFrequency: 'Once daily after breakfast (OD) for acute asthma exacerbation (Max 3-5 days)',
    category: 'Allergy',
    strengthOptions: [{ strength: '5 mg / 5 ml Syrup', formula_mg_per_ml: 1 }, { strength: '15 mg / 5 ml DS Syrup', formula_mg_per_ml: 3 }]
  },
  {
    name: 'Prednisolone Drops (Prelone Drops)',
    salts: 'Prednisolone pediatric steroid drops (5 mg/ml)',
    standardDose: '1 mg/kg',
    recommendedFrequency: 'Once daily after breakfast for maximum 3 days (OD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '5 mg / 1 ml (Steroid Drops)', formula_mg_per_ml: 5 }]
  },
  {
    name: 'Deflazacort Syrup (Defcort Syp)',
    salts: 'Cortico-steroid Deflazacort Pediatric Oral Liquid (0.2-1 mg/kg/day)',
    standardDose: '0.5 mg/kg',
    recommendedFrequency: 'Once daily after breakfast (OD) for severe allergen control',
    category: 'Allergy',
    strengthOptions: [{ strength: '6 mg / 5 ml Syrup', formula_mg_per_ml: 1.2 }]
  },
  {
    name: 'Tricholine Citrate + Cyproheptadine (Practin EN Syp)',
    salts: 'Appetite Stimulant Cyproheptadine (2mg) + Tricholine Citrate (275mg) per 5 ml',
    standardDose: '0.1 ml/kg',
    recommendedFrequency: 'Twice daily, 30 minutes before lunch & dinner (BD) for poor appetite boost',
    category: 'Allergy',
    strengthOptions: [{ strength: '2mg + 275mg / 5 ml', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Cyproheptadine Syrup (Practin syrup)',
    salts: 'Cyproheptadine H1-antagonist Appetite Stimulant Syrup',
    standardDose: '0.1 mg/kg',
    recommendedFrequency: 'Twice daily 30 minutes before food (BD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '2 mg / 5 ml Syrup', formula_mg_per_ml: 0.4 }]
  },
  {
    name: 'Clobetasol Propionate (Tenovate Cream)',
    salts: 'High potency topical corticosteroid for acute eczema patches',
    standardDose: 'Thin layer',
    recommendedFrequency: 'Apply thinly over affected skin folds twice daily for 5 days (Avoid face)',
    category: 'Allergy',
    strengthOptions: [{ strength: '0.05% Topical Cream', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Calamine + Liquid Paraffin (Lactocalamine)',
    salts: 'Soothing Antipruritic calamine lotion',
    standardDose: 'Liberal application',
    recommendedFrequency: 'Apply topically thrice daily (TDS) for dry itchy insect bites/prickly heat',
    category: 'Allergy',
    strengthOptions: [{ strength: 'Calamine skin lotion', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Desloratadine Syrup (Dezlor)',
    salts: 'Desloratadine Non-sedative Antihistamine Syrup 2.5mg/5ml',
    standardDose: '1.25 mg',
    recommendedFrequency: 'Once daily in morning (OD) for seasonal runny nose',
    category: 'Allergy',
    strengthOptions: [{ strength: '2.5 mg / 5 ml Syrup', formula_mg_per_ml: 0.5 }]
  },
  {
    name: 'Fluticasone Propionate (Flomist Spray)',
    salts: 'Nasal Corticosteroid Spray for Allergic Rhinitis (50 mcg/actuation)',
    standardDose: '1 spray',
    recommendedFrequency: '1 spray in each nostril once daily (OD) for moderate-severe congestion',
    category: 'Allergy',
    strengthOptions: [{ strength: '50 mcg per Spray', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Ketotifen Drops (Ketasma Drops)',
    salts: 'Ketotifen pediatric anti-allery drops',
    standardDose: '0.25 mg/kg',
    recommendedFrequency: 'Twice dailyafter food (BD)',
    category: 'Allergy',
    strengthOptions: [{ strength: '1 mg / 1 ml Drops', formula_mg_per_ml: 1 }]
  },

  // ================= SUPPLEMENTS (186-200) =================
  {
    name: 'Iron Supplement (Orofer XT Syp)',
    salts: 'Ferrous Ascorbate + Folic Acid Pediatric Hematinic (3-6 mg/kg/day elemental iron)',
    standardDose: '3.5 mg/kg',
    recommendedFrequency: 'Twice daily between feeds (BD) for 2-3 months for nutritional anemia resolution',
    category: 'Supplements',
    strengthOptions: [{ strength: '30 mg elemental Iron / 5 ml Syrup', formula_mg_per_ml: 6 }]
  },
  {
    name: 'Iron Supplement Drops (Orofer Drops)',
    salts: 'Ferrous Ascorbate pediatric drops (10 mg elemental iron per ml)',
    standardDose: '3.5 mg/kg',
    recommendedFrequency: 'Once daily on empty stomach (OD)',
    category: 'Supplements',
    strengthOptions: [{ strength: '10 mg Iron / 1 ml (Drops)', formula_mg_per_ml: 10 }]
  },
  {
    name: 'Iron Drops (Tonoferon Pediatric Drops)',
    salts: 'Colloidal Iron + Vitamin B12 + Folic Acid pediatric drops',
    standardDose: '3 mg/kg',
    recommendedFrequency: 'Once daily between milk feeds to avoid staining (OD)',
    category: 'Supplements',
    strengthOptions: [{ strength: '15 mg Iron / 1 ml Drops', formula_mg_per_ml: 15 }]
  },
  {
    name: 'Calcium + Vit D3 (Ostocalcium B12 Syp)',
    salts: 'Calcium Phosphate (250mg) + Vitamin D3 (200 IU) + Vitamin B12 (2.5mcg) per 5 ml',
    standardDose: '5 ml',
    recommendedFrequency: 'Twice daily after food (BD) for strong pediatric skeletal support',
    category: 'Supplements',
    strengthOptions: [{ strength: '250mg + 200 IU / 5 ml Syrup', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Calcium + Vit D3 (Calcimax Kid Syp)',
    salts: 'Calcium Carbonate + Magnesium + Zinc + Vitamin D3 Pediatric Formula',
    standardDose: '5 ml',
    recommendedFrequency: 'Twice daily after morning and night meals (BD)',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Calcium + Magnesium + Zinc Syrup', formula_mg_per_ml: 50 }]
  },
  {
    name: 'Vitamin D3 (Calcirol Sachet)',
    salts: 'Cholecalciferol 60,000 IU High potency Sachet',
    standardDose: '1 sachet',
    recommendedFrequency: '1 Sachet dissolved in milk once a week for 6 consecutive weeks (Then once a month)',
    category: 'Supplements',
    strengthOptions: [{ strength: '60,000 IU Sachet', formula_mg_per_ml: 60000 }]
  },
  {
    name: 'Vitamin D3 Pediatric Drops (D3-Must Drops)',
    salts: 'Cholecalciferol Vitamin D3 pediatric daily drops (400 IU/ml standard prophylactic)',
    standardDose: '1 ml flat daily',
    recommendedFrequency: 'Once daily (OD) in morning directly for standard rickets prophylaxis in infants',
    category: 'Supplements',
    strengthOptions: [{ strength: '400 IU / 1 ml Drops', formula_mg_per_ml: 400 }, { strength: '800 IU / 1 ml Double Strength Drops', formula_mg_per_ml: 800 }]
  },
  {
    name: 'Vitamin D3 Oral Drops (Arachitol Kids Drops)',
    salts: 'Cholecalciferol Vitamin D3 prophylactic daily drops',
    standardDose: '1 ml flat daily',
    recommendedFrequency: 'Once daily (OD) in morning',
    category: 'Supplements',
    strengthOptions: [{ strength: '400 IU / 1 ml Drops', formula_mg_per_ml: 400 }]
  },
  {
    name: 'Multivitamin Syp (Zincovit Pediatric Syp)',
    salts: 'Multivitamin + Multimineral + L-Lysine + Zinc Appetite Recovery Syrup',
    standardDose: '2.5 ml for infants, 5 ml for children',
    recommendedFrequency: 'Once daily after breakfast (OD) for clinical convalescence support',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Essential Minerals + Vitamins Syp', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Multivitamin Drops (Zincovit Drops)',
    salts: 'Multivitamins Pediatric Daily drops',
    standardDose: '0.5 ml to 1 ml flat',
    recommendedFrequency: 'Once daily (OD) inside morning',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Essential Vitamins Drops', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Multivitamin Syp (A to Z Junior)',
    salts: 'Appetite booster multi-vitamin syrup with Zinc',
    standardDose: '5 ml',
    recommendedFrequency: 'Once daily after dinner (OD)',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Minerals + Multivitamins Syp', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Vitamin B-Complex Syp (Becosules Syp)',
    salts: 'High potency Vitamin B-Complex with Vitamin C pediatric syrup',
    standardDose: '2.5 ml',
    recommendedFrequency: 'Twice daily after key meals (BD) for aphthous mouth ulcers recovery',
    category: 'Supplements',
    strengthOptions: [{ strength: 'B-Complex + Vitamin C Syrup', formula_mg_per_ml: 0 }]
  },
  {
    name: 'Vitamin C Syrup (Limcee Kid Syp)',
    salts: 'Vitamin C ascorbic acid immunity booster syrup',
    standardDose: '100 mg flat',
    recommendedFrequency: 'Once daily after breakfast (OD) for micro-vascular integrity',
    category: 'Supplements',
    strengthOptions: [{ strength: '100 mg / 5 ml Syrup', formula_mg_per_ml: 20 }]
  },
  {
    name: 'Co-Enzyme Q10 + Carnitine Syrup (Ubicar Syp)',
    salts: 'Carnitine + CoQ10 mitochondrial pediatric tonic',
    standardDose: '5 ml',
    recommendedFrequency: 'Twice daily with meals (BD) for physiological fatigue/muscle weakness',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Carnitine 500mg + CoQ10 Syrup', formula_mg_per_ml: 100 }]
  },
  {
    name: 'Omega-3 Fatty Acid Syp (SevenSeas Cod Liver Oll)',
    salts: 'Pure Cod Liver Oil rich in DHA + EPA + Vitamin A & D',
    standardDose: '2.5 ml',
    recommendedFrequency: 'Once daily after breakfast (OD) for healthy brain and visual progression',
    category: 'Supplements',
    strengthOptions: [{ strength: 'Cod Liver Oil Syrup', formula_mg_per_ml: 0 }]
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
  'Viral Gastroenteritis with No/Mild Dehydration',
  'Pediatric Dysentery / Bacterial Enteritis',
  'Atopic Dermatitis / Infantile Eczema',
  'Acute Tonsillopharyngitis',
  'Teething Dyspepsia / Colic',
  'Nutritional Iron Deficiency Anemia',
  'Acute Otitis Media (AOM)',
  'Bronchial Asthma / Acute Wheeze',
  'Gastroesophageal Reflux Disease (GERD)',
  'Urinary Tract Infection (UTI)',
  'Acute Pharyngitis',
  'Acute Croup (Laryngotracheobronchitis)',
  'Neonatal Hyperbilirubinemia (Physiological)',
  'Constipation (Functional)',
  'Intestinal Parasitosis / Worm Infestation',
  'Enteric Fever / Typhoid Fever',
  'Measles / Rubeola Suspect',
  'Chickenpox / Varicella Infection',
  'Hand, Foot, and Mouth Disease (HFMD)',
  'Allergic Rhinitis',
  'G6PD Deficiency Suspect',
  'Acute Sinusitis',
  'Roseola Infantum',
  'Mumps / Epidemic Parotitis',
  'Impetigo Contagiosa / Pyoderma',
  'Tinea Corporis / Fungal Dermatitis',
  'Pediculosis Capitis (Head Lice)',
  'Scabies / Sarcoptic Infestation',
  'Gastrointestinal Colic / Infantile Colic',
  'Vitamin D Deficiency Rickets Suspect',
  'Protein Energy Malnutrition (PEM) Grade I',
  'Protein Energy Malnutrition (PEM) Grade II',
  'Severe Acute Malnutrition (SAM)',
  'Moderate Acute Malnutrition (MAM)',
  'Dengue Fever (DHF/DSS Suspect)',
  'Malaria Suspect (Vivax/Falciparum)',
  'Scrub Typhus Suspect',
  'Influenza-Like Illness (ILI)',
  'Acute Lobar Pneumonia',
  'Bronchopneumonia',
  'Febrile Convulsions (Simple)',
  'Febrile Convulsions (Complex)',
  'Transient Synovitis (Irritable Hip)',
  'Acute Gouty Arthritis Suspect',
  'Henoch-Schönlein Purpura (HSP)',
  'Kawasaki Disease Suspect',
  'Scarlet Fever',
  'Whooping Cough / Pertussis Suspect',
  'Herpangina',
  'Neonatal Mastitis',
  'Diaper Dermatitis / Diaper Rash',
  'Seborrheic Dermatitis / Cradle Cap',
  'Phimosis / Paraphimosis',
  'Balanoposthitis',
  'Hydrocele (Congenital)',
  'Undescended Testis (Cryptorchidism)',
  'Umbirical Hernia',
  'Inguinal Hernia',
  'Foreign Body Ingestion Suspect',
  'Pica / Nutritional Eating Disorder',
  'Gastrointestinal Giardiasis',
  'Lactose Intolerance (Secondary)',
  'Celiac Disease Suspect',
  'Food Allergy / Cow\'s Milk Protein Allergy (CMPA)',
  'Physiological Growth Lag',
  'ADHD (Attention Deficit Hyperactivity Disorder) Suspect',
  'Autism Spectrum Disorder (ASD) Evaluation',
  'Global Developmental Delay (GDD)',
  'Nocturnal Enuresis (Bed wetting)',
  'Sleep Terror / Parasomnia',
  'Acute Lymphadenitis (Cervical)',
  'Aphthous Stomatitis / Mouth Ulcers',
  'Angular Cheilitis',
  'Scurvy / Vitamin C Deficiency',
  'Vitamin A Deficiency (Xerophthalmia Suspect)',
  'Obesity (Pediatric)',
  'Type 1 Diabetes Mellitus New Onset Suspect',
  'Congenital Hypothyroidism (Screening)',
  'Thalassemia Carrier/Trait Suspect',
  'Thalassemia Major (Post-Transfusion Support)',
  'Neonatal Colic',
  'Spasmus Nutans',
  'Seizure Disorder/Epilepsy Under Evaluation',
  'Tension-type Headache (Pediatric)',
  'Migraine (Pediatric)',
  'Sty / Hordeolum Externum',
  'Conjunctivitis (Acute Muco-purulent / Allergic)',
  'Dacryocystitis',
  'Foreign Body in Ear/Nose',
  'Epistaxis (Nose Bleeding - Benign)',
  'Acute Laryngitis',
  'Exercise-Induced Bronchospasm',
  'Insect Bite Hypersensitivity / Papular Urticaria',
  'Acute Urticaria',
  'Contact Dermatitis',
  'Chronic Nonspecific Diarrhea of Infancy (Toddler\'s Diarrhea)',
  'Cyclic Vomiting Syndrome',
  'Gastrointestinal Helminthiasis'
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

export const DIAGNOSTIC_INVESTIGATIONS_REFERENCE = [
  {
    category: 'Hematology / Blood Tests',
    tests: [
      'Complete Blood Count (CBC)',
      'Hemoglobin Estimation',
      'Total Leucocyte Count (TLC)',
      'Differential Leucocyte Count (DLC)',
      'Platelet Count',
      'Erythrocyte Sedimentation Rate (ESR)',
      'Peripheral Blood Smear',
      'Reticulocyte Count',
      'Packed Cell Volume (PCV)',
      'Blood Group & Rh Typing'
    ]
  },
  {
    category: 'Biochemistry / Metabolic Panel',
    tests: [
      'C-Reactive Protein (CRP) Quantitative',
      'Serum Electrolytes (Na+, K+, Cl-)',
      'Serum Bilirubin - Total, Direct & Indirect',
      'Liver Function Test (LFT)',
      'Renal Function Test / Kidney Profile (KFT)',
      'Blood Urea Nitrogen (BUN)',
      'Serum Creatinine',
      'Random Blood Sugar (RBS)',
      'Fasting Blood Sugar (FBS)',
      'HbA1c',
      'Serum Calcium / Ionic Calcium',
      'Serum Alkaline Phosphatase (ALP)'
    ]
  },
  {
    category: 'Infectious Diseases / Serology',
    tests: [
      'Widal Test (for Typhoid)',
      'Typhidot (IgM & IgG)',
      'Dengue Serology (NS1 Antigen, IgM, IgG)',
      'Malaria Antigen (RDT / smear)',
      'Influenza A/B PCR',
      'COVID-19 Rapid Antigen / RT-PCR',
      'Urine Culture & Sensitivity',
      'Stool Culture & Sensitivity',
      'Blood Culture & Sensitivity',
      'Mantoux Test (PPD)',
      'ASO Titre'
    ]
  },
  {
    category: 'Urine & Stool Analysis',
    tests: [
      'Urine Routine & Microscopy (U-R/M)',
      'Urine Bile Malt / Bile Pigment',
      'Urine Microalbumin',
      'Stool Routine & Microscopy (S-R/M)',
      'Stool for Reducing Substances',
      'Stool Occult Blood'
    ]
  },
  {
    category: 'Radiology & Imaging',
    tests: [
      'Chest X-Ray (A/P View)',
      'Chest X-Ray (P/A View)',
      'X-Ray PNS (Para-Nasal Sinuses)',
      'X-Ray Abdomen (Erect / Supine)',
      'X-Ray Limbs / Joints (Anteroposterior & Lateral)',
      'USG Whole Abdomen (Ultra-sonography)',
      'USG KUB (Kidney, Ureters, Bladder)',
      'Echocardiography (Pediatric 2D-Echo)',
      'HRCT Chest (High Resolution CT)',
      'MRI Brain (Pediatric)'
    ]
  },
  {
    category: 'Special / Other Diagnostic Investigations',
    tests: [
      'Sweet Chloride Test (Cystic Fibrosis)',
      'Thyroid Profile (TSH, Free T3, Free T4)',
      'Serum IgE Level',
      'G6PD Enzyme Assay',
      'EEG (Electroencephalogram)',
      'Cerebrospinal Fluid (CSF) Analysis'
    ]
  }
];
