import React, { useState, useEffect } from 'react';
import { PEDIATRIC_DRUGS_REFERENCE } from '../data/clinicalData';
import { PediatricDrugRef } from '../types';
import { Calculator, Plus, Info, Check } from 'lucide-react';

interface DoseCalculatorProps {
  patientWeight: string; // kg
  onAddMedication: (med: {
    name: string;
    type: any;
    dosage: string;
    frequency: string;
    timing: any;
    duration: string;
    notes: string;
  }) => void;
}

export default function DoseCalculator({ patientWeight, onAddMedication }: DoseCalculatorProps) {
  const [selectedDrug, setSelectedDrug] = useState<PediatricDrugRef | null>(PEDIATRIC_DRUGS_REFERENCE[0]);
  const [selectedStrengthIdx, setSelectedStrengthIdx] = useState<number>(0);
  const [calculatedVolume, setCalculatedVolume] = useState<number>(0);
  const [isAdded, setIsAdded] = useState(false);
  
  const weightNum = parseFloat(patientWeight) || 0;

  useEffect(() => {
    if (!selectedDrug || weightNum <= 0) {
      setCalculatedVolume(0);
      return;
    }

    const dosageFactor = parseFloat(selectedDrug.standardDose); // e.g. 15 or 10
    const strength = selectedDrug.strengthOptions[selectedStrengthIdx];
    
    if (strength) {
      // Calculate total dose in mg
      let totalMg = weightNum * dosageFactor;
      if (selectedDrug.name.includes('Zinc')) {
        // Special case: Zinc is flat-dose standard (10mg-20mg)
        totalMg = dosageFactor;
      }
      
      // Calculate volume: volume (ml) = total dose (mg) / concentration (mg/ml)
      const volumeMl = totalMg / strength.formula_mg_per_ml;
      // Round to 1 decimal place, e.g., 2.4ml, 5.0ml
      setCalculatedVolume(Math.round(volumeMl * 10) / 10);
    }
  }, [selectedDrug, selectedStrengthIdx, weightNum]);

  // Alert/feedback resetting
  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  const handleAdd = () => {
    if (!selectedDrug) return;
    const strength = selectedDrug.strengthOptions[selectedStrengthIdx];
    if (!strength) return;

    // Determine default package type
    let type: any = 'Syrup';
    if (strength.strength.toLowerCase().includes('drops')) {
      type = 'Drops';
    } else if (strength.strength.toLowerCase().includes('dry syrup')) {
      type = 'Suspension';
    }

    onAddMedication({
      name: `${selectedDrug.name.split(' (')[0]} (${strength.strength.split(' (')[0]})`,
      type,
      dosage: `${calculatedVolume} ml`,
      frequency: selectedDrug.recommendedFrequency.split(',')[0].includes('PRN') ? 'As needed (PRN / SOS)' : 'Twice Daily (BD)',
      timing: 'After Food',
      duration: selectedDrug.name.includes('Zinc') ? '14 days' : '5 days',
      notes: `${selectedDrug.salts}. Calculated for child of weight ${weightNum} kg.`
    });

    setIsAdded(true);
  };

  return (
    <div id="dose-calculator-panel" className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 transition-all hover:border-blue-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 bg-blue-500 rounded-lg text-white">
          <Calculator className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-semibold text-slate-800">Pediatric Dose Assistant</h3>
      </div>

      {weightNum <= 0 ? (
        <div className="text-xs text-amber-600 bg-amber-50 hover:bg-amber-100/70 py-2.5 px-3 rounded-lg border border-amber-100 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>Please enter the child's <strong>Weight (kg)</strong> in the patient profile above to unlock the dynamic dose-meter.</span>
        </div>
      ) : (
        <div className="space-y-3.5">
          {/* Drug Category Selector */}
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1">Select Medicine Base</label>
            <select
              className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedDrug ? selectedDrug.name : ''}
              onChange={(e) => {
                const drug = PEDIATRIC_DRUGS_REFERENCE.find(d => d.name === e.target.value);
                setSelectedDrug(drug || null);
                setSelectedStrengthIdx(0);
              }}
            >
              {PEDIATRIC_DRUGS_REFERENCE.map((drug) => (
                <option key={drug.name} value={drug.name}>
                  [{drug.category}] - {drug.name}
                </option>
              ))}
            </select>
          </div>

          {selectedDrug && (
            <>
              {/* Strength selector */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Available Preparation Strengths</label>
                <div className="grid grid-cols-1 gap-1.5">
                  {selectedDrug.strengthOptions.map((opt, i) => (
                    <button
                      key={opt.strength}
                      type="button"
                      onClick={() => setSelectedStrengthIdx(i)}
                      className={`text-left text-xs px-2.5 py-1.5 rounded-lg border transition-all flex justify-between items-center ${
                        selectedStrengthIdx === i
                          ? 'border-blue-400 bg-blue-500/10 text-blue-700 font-medium'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{opt.strength}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({opt.formula_mg_per_ml}mg/ml)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Formula and output reading */}
              <div className="bg-white border border-blue-100/60 rounded-lg p-3 space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-[11px] text-slate-500">Formulation Parameters:</span>
                  <span className="text-[11px] font-mono text-slate-600 font-medium">{selectedDrug.standardDose} dose</span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {selectedDrug.name.includes('Zinc') 
                        ? `Therapeutic flat dose (${selectedDrug.standardDose}mg)` 
                        : `${weightNum} kg × ${selectedDrug.standardDose}`}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      ÷ {selectedDrug.strengthOptions[selectedStrengthIdx]?.formula_mg_per_ml} mg/ml
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 mr-1">Take</span>
                    <span className="text-lg font-bold text-blue-600 font-mono">{calculatedVolume} ml</span>
                  </div>
                </div>

                <p className="text-[10px] italic text-slate-400 text-center border-t border-slate-100/50 pt-1.5">
                  Suggested: {selectedDrug.recommendedFrequency}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleAdd}
                disabled={calculatedVolume <= 0}
                className={`w-full py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all text-white cursor-pointer ${
                  isAdded 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Medication Table</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Append to Prescription (Rx)</span>
                  </>
                )}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
