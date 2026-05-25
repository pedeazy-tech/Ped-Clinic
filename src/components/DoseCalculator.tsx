import React, { useState, useEffect } from 'react';
import { PEDIATRIC_DRUGS_REFERENCE } from '../data/clinicalData';
import { PediatricDrugRef } from '../types';
import { Calculator, Plus, Info, Check, Search } from 'lucide-react';

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
  const [editedVolume, setEditedVolume] = useState<string>('0');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const weightNum = parseFloat(patientWeight) || 0;

  const filteredDrugs = PEDIATRIC_DRUGS_REFERENCE.filter((drug) => {
    const s = searchTerm.toLowerCase().trim();
    if (!s) return true;
    return (
      drug.name.toLowerCase().includes(s) ||
      drug.salts.toLowerCase().includes(s) ||
      drug.category.toLowerCase().includes(s)
    );
  });

  // Sync searchTerm when selectedDrug changes
  useEffect(() => {
    if (selectedDrug) {
      setSearchTerm(selectedDrug.name);
    } else {
      setSearchTerm('');
    }
  }, [selectedDrug]);

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
      const roundedVolume = Math.round(volumeMl * 10) / 10;
      setCalculatedVolume(roundedVolume);
    }
  }, [selectedDrug, selectedStrengthIdx, weightNum]);

  const [customFrequency, setCustomFrequency] = useState<string>('Twice Daily (BD)');
  const [customTiming, setCustomTiming] = useState<any>('After Food');
  const [customDuration, setCustomDuration] = useState<string>('5 days');

  const getInitialFrequency = (drug: PediatricDrugRef) => {
    const rx = drug.recommendedFrequency.toLowerCase();
    if (rx.includes('prn') || rx.includes('sos') || rx.includes('as needed')) {
      return 'As needed (PRN / SOS)';
    }
    if (rx.includes('three') || rx.includes('tds') || rx.includes('thrice')) {
      return 'Thrice Daily (TDS)';
    }
    if (rx.includes('once') || rx.includes('od') || rx.includes('daily after breakfast')) {
      return 'Once Daily (OD)';
    }
    return 'Twice Daily (BD)';
  };

  useEffect(() => {
    if (selectedDrug) {
      setCustomFrequency(getInitialFrequency(selectedDrug));
      
      const rx = selectedDrug.recommendedFrequency.toLowerCase();
      if (rx.includes('before food') || rx.includes('empty stomach')) {
        setCustomTiming('Before Food');
      } else if (rx.includes('with food')) {
        setCustomTiming('With Food');
      } else {
        setCustomTiming('After Food');
      }

      setCustomDuration(selectedDrug.name.includes('Zinc') ? '14 days' : '5 days');
    }
  }, [selectedDrug]);

  // Sync editedVolume when calculatedVolume changes
  useEffect(() => {
    setEditedVolume(calculatedVolume.toString());
  }, [calculatedVolume]);

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

    const finalVolume = parseFloat(editedVolume) || 0;

    onAddMedication({
      name: `${selectedDrug.name.split(' (')[0]} (${strength.strength.split(' (')[0]})`,
      type,
      dosage: `${finalVolume} ml`,
      frequency: customFrequency,
      timing: customTiming,
      duration: customDuration,
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
          {/* Drug Category Selector with Search */}
          <div className="relative">
            <label className="block text-xs font-medium text-slate-600 mb-1">Select Medicine Base (Searchable)</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-8 py-1.5 text-xs text-slate-750 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-400"
                placeholder="Search base (e.g., Paracetamol, Ibuprofen)..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => {
                  // Wait slightly so mousedown handler can execute first
                  setTimeout(() => setIsDropdownOpen(false), 200);
                }}
              />
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Search className="w-3.5 h-3.5" />
              </span>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDrug(null);
                    setIsDropdownOpen(true);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold p-0.5 cursor-pointer text-sm"
                >
                  ×
                </button>
              )}
            </div>

            {/* Float Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute z-30 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto divide-y divide-slate-50">
                {filteredDrugs.length > 0 ? (
                  filteredDrugs.map((drug) => (
                    <button
                      key={drug.name}
                      type="button"
                      onMouseDown={() => {
                        setSelectedDrug(drug);
                        setSelectedStrengthIdx(0);
                        setSearchTerm(drug.name);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-slate-50 transition-colors flex flex-col ${
                        selectedDrug?.name === drug.name ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-semibold">{drug.name}</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 font-medium px-1.5 py-0.2 rounded font-sans shrink-0 ml-2">
                          {drug.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5 line-clamp-1">{drug.salts}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-xs text-slate-400 italic">No matching drug found. Try checking spelling or use the custom manual section below.</div>
                )}
              </div>
            )}
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
                
                <div className="flex justify-between items-center gap-2">
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-400 font-mono">
                      {selectedDrug.name.includes('Zinc') 
                        ? `Therapeutic flat dose (${selectedDrug.standardDose}mg)` 
                        : `${weightNum} kg × ${selectedDrug.standardDose}`}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      ÷ {selectedDrug.strengthOptions[selectedStrengthIdx]?.formula_mg_per_ml} mg/ml
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 shrink-0 bg-blue-50/70 px-2.5 py-1.5 rounded-lg border border-blue-105">
                    <span className="text-xs text-slate-500 font-medium">To Give:</span>
                    <input 
                      type="number"
                      step="0.1"
                      className="w-16 bg-white border border-blue-200 rounded px-1.5 py-0.5 text-xs font-bold text-blue-600 text-center focus:outline-none focus:border-blue-500 font-mono shadow-sm"
                      value={editedVolume}
                      onChange={(e) => setEditedVolume(e.target.value)}
                    />
                    <span className="text-xs font-semibold text-slate-550">ml</span>
                  </div>
                </div>

                <div className="text-[10.5px] text-amber-600 font-medium bg-amber-50/70 border border-amber-100/55 rounded-lg p-2 text-center leading-normal">
                  💡 Autocalculated dose: <strong>{calculatedVolume} ml</strong>. Feel free to edit the <strong>mL to give</strong> above if needed.
                </div>

                <p className="text-[10px] italic text-slate-400 text-center border-t border-slate-100/50 pt-1.5">
                  Suggested: {selectedDrug.recommendedFrequency}
                </p>
              </div>

              {/* Dosing Schedule Customizer */}
              <div className="bg-white border border-blue-100/50 rounded-lg p-3 space-y-2.5">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide flex items-center justify-between pb-1 border-b border-slate-100">
                  <span className="text-slate-600">Customize Dosing Schedule</span>
                  <span className="text-[10px] text-blue-500 font-sans font-medium">Editable</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5 font-medium">Frequency</label>
                    <select
                      className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-600 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={customFrequency}
                      onChange={(e) => setCustomFrequency(e.target.value)}
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
                    <label className="block text-[10px] text-slate-500 mb-0.5 font-medium">Relationship to Food</label>
                    <select
                      className="w-full bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-600 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={customTiming}
                      onChange={(e) => setCustomTiming(e.target.value as any)}
                    >
                      <option value="After Food">After Food</option>
                      <option value="Before Food">Before Food</option>
                      <option value="With Food">With Food</option>
                      <option value="Empty Stomach">Empty Stomach</option>
                      <option value="None">None</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 mb-0.5 font-medium">Duration</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-600 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. 5 days / 1 week"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleAdd}
                disabled={parseFloat(editedVolume) <= 0}
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
