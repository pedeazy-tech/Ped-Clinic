import React from 'react';
import { Prescription, LetterheadSettings, DoctorProfile } from '../types';
import { 
  StethoscopeHeart, CutePanda, HappyBaby, MinimalistCross, 
  TeddyBear, ShieldHeart, BabyCarriage, LittleSun, CuteRocket, 
  HappyTooth, ClinicalApple, ToyBlocks, SleepingOwl, BabyPram 
} from './PediatricLogos';
import { 
  Phone, Mail, MapPin, Clock, Award, ShieldCheck, Clipboard, HeartCrack, CalendarClock,
  Stethoscope, Heart, Activity, Baby, Shield, Smile, Sparkles, Beaker, Thermometer, Pill, 
  Syringe, Brain, Dna, HeartPulse, BriefcaseMedical, Microscope, Eye, Sprout, Leaf, Droplet
} from 'lucide-react';

interface PrescriptionPreviewProps {
  prescription: Prescription;
  settings: LetterheadSettings;
  doctorProfile: DoctorProfile;
  themeColors: {
    primary: string;
    secondary: string;
    subtle: string;
    border: string;
    text: string;
  };
}

export default function PrescriptionPreview({ prescription, settings, doctorProfile, themeColors }: PrescriptionPreviewProps) {
  const { name, age, gender, weight, height, temp, pulse, bp, spo2, date, feedingType, immunizationUpToDate, immunizationStatus, missingVaccines } = prescription.patient;

  // Render the selected SVG Logo
  const renderLogo = () => {
    switch (settings.logoStyle) {
      case 'cute-panda':
        return <CutePanda className="w-16 h-16 text-blue-600 print:text-blue-700" color={themeColors.primary} />;
      case 'happy-baby':
        return <HappyBaby className="w-16 h-16 text-blue-600 print:text-blue-700" color={themeColors.primary} />;
      case 'stethoscope-pulse':
        return <StethoscopeHeart className="w-16 h-16 text-blue-600 print:text-blue-700" color={themeColors.primary} />;
      case 'teddy-bear':
        return <TeddyBear className="w-16 h-16" color={themeColors.primary} />;
      case 'shield-heart':
        return <ShieldHeart className="w-16 h-16" color={themeColors.primary} />;
      case 'baby-carriage':
        return <BabyCarriage className="w-16 h-16" color={themeColors.primary} />;
      case 'little-sun':
        return <LittleSun className="w-16 h-16" color={themeColors.primary} />;
      case 'cute-rocket':
        return <CuteRocket className="w-16 h-16" color={themeColors.primary} />;
      case 'happy-tooth':
        return <HappyTooth className="w-16 h-16" color={themeColors.primary} />;
      case 'clinical-apple':
        return <ClinicalApple className="w-16 h-16" color={themeColors.primary} />;
      case 'toy-blocks':
        return <ToyBlocks className="w-16 h-16" color={themeColors.primary} />;
      case 'sleeping-owl':
        return <SleepingOwl className="w-16 h-16" color={themeColors.primary} />;
      case 'baby-pram':
        return <BabyPram className="w-16 h-16" color={themeColors.primary} />;
      case 'stethoscope':
        return <Stethoscope className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'heart':
        return <Heart className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'activity':
        return <Activity className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'baby':
        return <Baby className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'shield':
        return <Shield className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'smile':
        return <Smile className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'sparkles':
        return <Sparkles className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'beaker':
        return <Beaker className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'thermometer':
        return <Thermometer className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'pill':
        return <Pill className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'syringe':
        return <Syringe className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'brain':
        return <Brain className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'dna':
        return <Dna className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'heart-pulse':
        return <HeartPulse className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'first-aid':
        return <BriefcaseMedical className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'microscope':
        return <Microscope className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'eye':
        return <Eye className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'sprout':
        return <Sprout className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'leaf':
        return <Leaf className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'droplet':
        return <Droplet className="w-14 h-14" style={{ color: themeColors.primary }} />;
      case 'minimalist':
      default:
        return <MinimalistCross className="w-14 h-14 text-blue-600 print:text-blue-700" color={themeColors.primary} />;
    }
  };

  // --- LETTERHEAD HEADER LAYOUTS ---
  const renderClassicHeader = () => (
    <div className="flex justify-between items-start border-b-2 pb-4" style={{ borderColor: themeColors.primary }}>
      {/* Doctor details */}
      <div className="flex gap-3.5 items-center">
        {renderLogo()}
        <div className="space-y-0.5">
          <h1 className="text-xl font-bold tracking-tight font-display" style={{ color: themeColors.primary }}>
            {doctorProfile.name || 'Dr. Neeladri Dawn'}
          </h1>
          <div className="flex items-center gap-1.5 animate-fade-in">
            <span className="bg-blue-50/80 text-blue-700 print:bg-slate-100 print:text-black text-[11px] font-semibold px-2 py-0.5 rounded-full border border-blue-100/50 font-sans">
              {doctorProfile.speciality || 'Paediatrician & Child Specialist'}
            </span>
          </div>
          
          {doctorProfile.registrationNumber && (
            <div className="flex items-center gap-1 mt-1 text-[11px] text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: themeColors.secondary }} />
              <span>Regd. No: <strong className="text-slate-750 font-semibold font-sans">{doctorProfile.registrationNumber}</strong></span>
            </div>
          )}
        </div>
      </div>

      {/* Clinic address & hours */}
      <div className="text-right space-y-1 text-xs text-slate-600 max-w-xs">
        {doctorProfile.clinicName && (
          <div className="flex items-center gap-1.5 justify-end">
            <span className="font-semibold text-slate-800">{doctorProfile.clinicName}</span>
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
          </div>
        )}
        
        {doctorProfile.clinicAddress && (
          <p className="text-slate-500 leading-relaxed text-[11px]">
            {doctorProfile.clinicAddress}
          </p>
        )}
        
        {doctorProfile.clinicTimings && (
          <div className="flex items-center gap-1.5 justify-end text-[11px] text-slate-500">
            <span>{doctorProfile.clinicTimings}</span>
            <Clock className="w-3.5 h-3.5 text-slate-400" />
          </div>
        )}

        {doctorProfile.clinicPhone && (
          <div className="flex items-center gap-1.5 justify-end text-[11px] font-mono text-slate-500">
            <span>{doctorProfile.clinicPhone}</span>
            <Phone className="w-3.5 h-3.5 text-slate-400" />
          </div>
        )}
        
        {doctorProfile.email && (
          <div className="flex items-center gap-1.5 justify-end text-[11px] text-slate-500">
            <span>{doctorProfile.email}</span>
            <Mail className="w-3.5 h-3.5 text-slate-400" />
          </div>
        )}
      </div>
    </div>
  );

  const renderMinimalistHeader = () => (
    <div className="pb-3.5 border-b" style={{ borderColor: themeColors.border }}>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="scale-75 origin-left -my-1 pr-1">{renderLogo()}</div>
            <h1 className="text-xl font-medium tracking-tight text-slate-800">
              {doctorProfile.name || 'Dr. Neeladri Dawn'}
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            {doctorProfile.speciality || 'Paediatrician & Child Specialist'}
            {doctorProfile.registrationNumber && `  |  Regd. No: ${doctorProfile.registrationNumber}`}
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-400 max-w-sm space-y-0.5 leading-tight">
          {doctorProfile.clinicName && <div className="font-semibold text-slate-600">{doctorProfile.clinicName}</div>}
          <div className="flex flex-wrap justify-end gap-x-2 gap-y-0.5">
            {doctorProfile.clinicAddress && <span>{doctorProfile.clinicAddress}</span>}
            {doctorProfile.clinicPhone && <span>• {doctorProfile.clinicPhone}</span>}
            {doctorProfile.email && <span>• {doctorProfile.email}</span>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCenteredBadgeHeader = () => (
    <div className="text-center pt-2 pb-4 border-b border-dashed" style={{ borderColor: themeColors.border }}>
      <div className="flex justify-center mb-2.5">
        <div className="p-2.5 bg-slate-50 rounded-full border shadow-sm" style={{ borderColor: themeColors.border, backgroundColor: themeColors.subtle }}>
          {renderLogo()}
        </div>
      </div>
      <h1 className="text-2xl font-black tracking-tight" style={{ color: themeColors.primary }}>
        {doctorProfile.name || 'Dr. Neeladri Dawn'}
      </h1>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mt-1.5 shadow-sm" style={{ backgroundColor: themeColors.primary, color: '#ffffff' }}>
        <span>{doctorProfile.speciality || 'Paediatrician & Child Specialist'}</span>
      </div>
      {doctorProfile.registrationNumber && (
        <div className="text-[11px] text-slate-500 font-mono mt-1">
          National medical council ID: <span className="font-bold underline" style={{ color: themeColors.secondary }}>{doctorProfile.registrationNumber}</span>
        </div>
      )}
      <div className="mt-3 text-xs text-slate-500 max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-x-3 gap-y-1 bg-slate-50/50 p-2 rounded-xl border border-dotted" style={{ borderColor: themeColors.border }}>
        {doctorProfile.clinicName && <span className="font-bold text-slate-700">{doctorProfile.clinicName}</span>}
        {doctorProfile.clinicAddress && <span>• {doctorProfile.clinicAddress}</span>}
        {doctorProfile.clinicTimings && <span>• {doctorProfile.clinicTimings}</span>}
        {doctorProfile.clinicPhone && <span className="font-mono">• {doctorProfile.clinicPhone}</span>}
      </div>
    </div>
  );

  const renderEditorialHeader = () => (
    <div className="border-4 p-4 border-double" style={{ borderColor: themeColors.primary }}>
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="font-serif">
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: themeColors.primary }}>
            {doctorProfile.name || 'Dr. Neeladri Dawn'}
          </h1>
          <p className="text-xs italic text-slate-600 font-medium mt-0.5">
            {doctorProfile.speciality || 'Paediatrician & Child Specialist'}
          </p>
          {doctorProfile.registrationNumber && (
            <p className="text-[10px] text-slate-400 font-mono mt-1 uppercase tracking-wider">
              Registration No: {doctorProfile.registrationNumber}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center">
          {renderLogo()}
        </div>
        <div className="text-right text-xs text-slate-600 space-y-1 font-serif max-w-xs md:border-l md:pl-4" style={{ borderColor: themeColors.border }}>
          {doctorProfile.clinicName && <p className="font-bold text-slate-800">{doctorProfile.clinicName}</p>}
          {doctorProfile.clinicAddress && <p className="text-[11px] leading-tight">{doctorProfile.clinicAddress}</p>}
          <div className="text-[11px] text-slate-500 space-y-1 italic mt-1.5 flex flex-col items-end">
            {doctorProfile.clinicTimings && <p>{doctorProfile.clinicTimings}</p>}
            {doctorProfile.clinicPhone && <p className="font-mono">{doctorProfile.clinicPhone}</p>}
            {doctorProfile.email && <p>{doctorProfile.email}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSidebarHeader = () => (
    <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 animate-fade-in" style={{ borderColor: themeColors.primary }}>
      <div className="col-span-4 border-r-2 pr-3 flex flex-col justify-center gap-1.5" style={{ borderColor: themeColors.primary }}>
        <div className="flex items-center gap-1.5">
          <div className="scale-75 origin-left -my-3">{renderLogo()}</div>
          <h1 className="text-lg font-black tracking-tight leading-tight" style={{ color: themeColors.primary }}>
            {doctorProfile.name || 'Dr. Neeladri Dawn'}
          </h1>
        </div>
        <p className="text-[10px] leading-tight font-bold text-slate-600">
          {doctorProfile.speciality || 'Paediatrician & Child Specialist'}
        </p>
        {doctorProfile.registrationNumber && (
          <div className="text-[9px] text-slate-400 font-mono mt-1">
            Regd: {doctorProfile.registrationNumber}
          </div>
        )}
      </div>

      <div className="col-span-8 flex flex-col justify-center text-left pl-2.5 space-y-1 text-slate-600">
        {doctorProfile.clinicName && (
          <div className="text-sm font-black text-slate-800 tracking-tight flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColors.secondary }}></span>
            <span>{doctorProfile.clinicName}</span>
          </div>
        )}
        {doctorProfile.clinicAddress && (
          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
            {doctorProfile.clinicAddress}
          </p>
        )}
        <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[10px] font-mono text-slate-400">
          {doctorProfile.clinicTimings && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-450" /> {doctorProfile.clinicTimings}
            </span>
          )}
          {doctorProfile.clinicPhone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-450" /> {doctorProfile.clinicPhone}
            </span>
          )}
          {doctorProfile.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-slate-450" /> {doctorProfile.email}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const renderBannerHeader = () => (
    <div className="space-y-3">
      <div className="rounded-xl px-4 py-3 flex justify-between items-center text-white shadow-md relative overflow-hidden" style={{ backgroundColor: themeColors.primary }}>
        <div className="space-y-0.5 z-10">
          <h1 className="text-lg font-extrabold tracking-tight">
            {doctorProfile.name || 'Dr. Neeladri Dawn'}
          </h1>
          <p className="text-[10px] font-bold tracking-wide opacity-90 font-mono">
            {doctorProfile.speciality || 'Paediatrician & Child Specialist'}
            {doctorProfile.registrationNumber && `  •  Regd. No: ${doctorProfile.registrationNumber}`}
          </p>
        </div>
        <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-sm z-10 scale-75 origin-right">
          {renderLogo()}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-[10.5px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-dashed" style={{ borderColor: themeColors.border }}>
        {doctorProfile.clinicName && (
          <div className="col-span-1 border-r pr-2 leading-tight" style={{ borderColor: themeColors.border }}>
            <span className="font-extrabold text-slate-800 block text-[9.5px]">FACILITY STATION</span>
            <span>{doctorProfile.clinicName}</span>
          </div>
        )}
        {doctorProfile.clinicAddress && (
          <div className="col-span-1 border-r px-2 leading-tight" style={{ borderColor: themeColors.border }}>
            <span className="font-extrabold text-slate-800 block text-[9.5px]">LOCATION DETAILS</span>
            <span>{doctorProfile.clinicAddress}</span>
          </div>
        )}
        <div className="col-span-1 pl-2 leading-tight">
          <span className="font-extrabold text-slate-800 block text-[9.5px]">TIMINGS & REACH</span>
          <span>{doctorProfile.clinicTimings || 'Regular Hours'}</span>
          {doctorProfile.clinicPhone && <span className="block font-mono text-[9px] mt-0.5 text-slate-400 font-bold">{doctorProfile.clinicPhone}</span>}
        </div>
      </div>
    </div>
  );

  const renderAcademicHeader = () => (
    <div className="border-b-4 pb-4" style={{ borderColor: themeColors.primary }}>
      <div className="flex justify-between items-center mb-3">
        <div className="w-1/3 text-left space-y-0.5">
          <h1 className="text-[9px] font-extrabold tracking-wider text-slate-400 uppercase font-mono leading-none">Consultant Practitioner</h1>
          <h2 className="text-base font-bold text-slate-800 tracking-tight leading-snug">{doctorProfile.name || 'Dr. Neeladri Dawn'}</h2>
          <p className="text-[10px] font-semibold text-slate-500 leading-none">{doctorProfile.speciality || 'Paediatrician'}</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <div className="p-1.5 border-2 rounded-full inline-block bg-white shadow-sm scale-90" style={{ borderColor: themeColors.primary }}>
            {renderLogo()}
          </div>
        </div>
        <div className="w-1/3 text-right">
          <span className="inline-block text-[9.5px] bg-slate-50 border px-1.5 py-0.5 rounded font-mono text-slate-500" style={{ borderColor: themeColors.border }}>
            Council ID: {doctorProfile.registrationNumber || 'N/A'}
          </span>
          {doctorProfile.clinicName && <p className="font-bold text-slate-700 text-xs mt-1.5">{doctorProfile.clinicName}</p>}
        </div>
      </div>
      <div className="text-center text-[10.5px] text-slate-450 space-x-3 font-medium">
        {doctorProfile.clinicAddress && <span>{doctorProfile.clinicAddress}</span>}
        {doctorProfile.clinicPhone && <span className="font-mono">| Tel: {doctorProfile.clinicPhone}</span>}
        {doctorProfile.email && <span>| Email: {doctorProfile.email}</span>}
      </div>
    </div>
  );

  const renderAsymmetricHeader = () => (
    <div className="grid grid-cols-12 gap-3.5 items-end pb-3.5 border-b" style={{ borderColor: themeColors.border }}>
      <div className="col-span-7 bg-slate-50 rounded-2xl p-3.5 border shadow-inner relative overflow-hidden" style={{ borderColor: themeColors.border, backgroundColor: themeColors.subtle }}>
        <div className="absolute right-2 bottom-1 opacity-10 scale-125 origin-bottom-right pointer-events-none">
          {renderLogo()}
        </div>
        <span className="text-[8.5px] font-extrabold px-1.5 py-0.2 bg-white text-slate-500 rounded shadow-sm border font-mono tracking-wider uppercase leading-none">
          Medical Division Specialist
        </span>
        <h1 className="text-lg font-black mt-1.5 leading-tight" style={{ color: themeColors.primary }}>
          {doctorProfile.name || 'Dr. Neeladri Dawn'}
        </h1>
        <p className="text-[11px] font-semibold text-slate-600 mt-0.5">{doctorProfile.speciality || 'Pediatric Consultant'}</p>
        {doctorProfile.registrationNumber && (
          <p className="text-[9.5px] text-slate-400 font-mono mt-1.5">Official License: {doctorProfile.registrationNumber}</p>
        )}
      </div>
      <div className="col-span-5 text-right space-y-1 p-1 text-slate-500 text-[10.5px] leading-snug">
        {doctorProfile.clinicName && <p className="text-xs font-bold text-slate-800 leading-tight">{doctorProfile.clinicName}</p>}
        {doctorProfile.clinicAddress && <p className="leading-tight text-slate-450">{doctorProfile.clinicAddress}</p>}
        <div className="space-y-0.5 font-mono text-[9.5px] text-slate-450">
          {doctorProfile.clinicTimings && <p>Timings: {doctorProfile.clinicTimings}</p>}
          {doctorProfile.clinicPhone && <p className="font-bold shrink-0" style={{ color: themeColors.secondary }}>Tel: {doctorProfile.clinicPhone}</p>}
          {doctorProfile.email && <p className="truncate">{doctorProfile.email}</p>}
        </div>
      </div>
    </div>
  );

  const renderDualCardHeader = () => (
    <div className="grid grid-cols-2 gap-3 pb-2">
      {/* Clinician Card */}
      <div className="border rounded-xl p-2.5 bg-slate-50/40 shadow-sm flex gap-2.5 items-center" style={{ borderColor: themeColors.border }}>
        <div className="scale-75 origin-left -mr-4 shrink-0">{renderLogo()}</div>
        <div className="space-y-0.5 flex-1 min-w-0">
          <span className="text-[7.5px] tracking-wider uppercase font-extrabold text-slate-400 font-mono leading-none block">Specialist Physician</span>
          <h1 className="text-sm font-black text-slate-800 truncate">{doctorProfile.name || 'Dr. Neeladri Dawn'}</h1>
          <p className="text-[10px] font-medium text-slate-500 truncate">{doctorProfile.speciality || 'Pediatric Division'}</p>
          {doctorProfile.registrationNumber && (
            <span className="inline-block text-[8.5px] font-mono bg-slate-100 text-slate-500 rounded px-1">{doctorProfile.registrationNumber}</span>
          )}
        </div>
      </div>

      {/* Facility Card */}
      <div className="border rounded-xl p-2.5 bg-slate-50/40 shadow-sm flex flex-col justify-between min-w-0" style={{ borderColor: themeColors.border }}>
        <div>
          <div className="flex items-center gap-1 text-slate-700">
            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-[11px] font-black truncate">{doctorProfile.clinicName || 'Medical Facility'}</span>
          </div>
          {doctorProfile.clinicAddress && (
            <p className="text-[9.5px] text-slate-500 pl-4 truncate leading-tight mt-0.5">{doctorProfile.clinicAddress}</p>
          )}
        </div>
        <div className="flex justify-between items-center pl-4 text-[9px] font-mono text-slate-400 mt-1">
          <span className="truncate">{doctorProfile.clinicPhone || 'N/A'}</span>
          <span className="truncate pl-1">{doctorProfile.clinicTimings || 'Regular Hours'}</span>
        </div>
      </div>
    </div>
  );

  const renderInlineCompactHeader = () => (
    <div className="border-b pb-1.5 flex flex-col gap-1 text-[11px] text-slate-500" style={{ borderColor: themeColors.border }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <div className="scale-50 origin-left -my-4 pr-1 shrink-0">{renderLogo()}</div>
          <span className="font-extrabold text-sm text-slate-800 tracking-tight leading-none">{doctorProfile.name || 'Dr. Neeladri Dawn'}</span>
          <span className="bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-md font-bold text-[9.5px] leading-none shrink-0">{doctorProfile.speciality || 'Paediatrics'}</span>
          {doctorProfile.registrationNumber && <span className="font-mono text-slate-400 text-[9px] shrink-0">(No: {doctorProfile.registrationNumber})</span>}
        </div>
        <div className="font-extrabold text-slate-800 text-[10.5px]">
          {doctorProfile.clinicName || 'Clinic'}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1 text-[9px] font-mono leading-none border-t border-slate-100 pt-1">
        <span className="truncate max-w-[280px]">📍 {doctorProfile.clinicAddress || 'Address'}</span>
        <div className="flex gap-2 shrink-0">
          {doctorProfile.clinicPhone && <span>📞 {doctorProfile.clinicPhone}</span>}
          {doctorProfile.email && <span className="hidden sm:inline">✉️ {doctorProfile.email}</span>}
          {doctorProfile.clinicTimings && <span className="hidden sm:inline">🕒 {doctorProfile.clinicTimings}</span>}
        </div>
      </div>
    </div>
  );

  const renderBottomContactHeader = () => (
    <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: themeColors.border }}>
      <div className="flex gap-3 items-center">
        {renderLogo()}
        <div className="space-y-0.5">
          <h1 className="text-xl font-extrabold tracking-tight" style={{ color: themeColors.primary }}>
            {doctorProfile.name || 'Dr. Neeladri Dawn'}
          </h1>
          <p className="text-xs text-slate-600 font-semibold">{doctorProfile.speciality || 'Paediatrician & Child Specialist'}</p>
          {doctorProfile.registrationNumber && (
            <div className="text-[10px] text-slate-400 font-mono">Reg. License: {doctorProfile.registrationNumber}</div>
          )}
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="bg-emerald-50 text-emerald-800 text-[9px] font-black px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-widest block font-mono">
          Interactive Rx Template
        </span>
      </div>
    </div>
  );

  // Convert English times to clean clinical labels (Frequency markers)
  const renderFrequencyMarker = (freq: string) => {
    const f = freq.toLowerCase();
    if (f.includes('od') || f.includes('once')) {
      return (
        <div className="flex gap-1.5 items-center mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 print:bg-slate-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 print:bg-slate-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="text-[9px] font-medium text-slate-500 ml-1">0 - 0 - 1</span>
        </div>
      );
    }
    if (f.includes('bd') || f.includes('twice')) {
      return (
        <div className="flex gap-1.5 items-center mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300 print:bg-slate-300"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="text-[9px] font-medium text-slate-500 ml-1">1 - 0 - 1</span>
        </div>
      );
    }
    if (f.includes('tds') || f.includes('thrice')) {
      return (
        <div className="flex gap-1.5 items-center mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="text-[9px] font-medium text-slate-500 ml-1">1 - 1 - 1</span>
        </div>
      );
    }
    if (f.includes('qid') || f.includes('four')) {
      return (
        <div className="flex gap-1.5 items-center mt-1">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600 font-bold"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 print:bg-blue-600"></span>
          <span className="text-[9px] font-medium text-slate-500 ml-1">QID</span>
        </div>
      );
    }
    return (
      <div className="flex gap-1 items-center mt-1">
        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 print:bg-amber-50/20 px-1.5 py-0.5 rounded-md border border-amber-100">
          SOS / as needed
        </span>
      </div>
    );
  };

  const getFontFamily = () => {
    switch (settings.fontStyle) {
      case 'serif': return 'Georgia, serif';
      case 'clinical': return 'System-ui, sans-serif';
      case 'playfair': return '"Playfair Display", serif';
      case 'space': return '"Space Grotesk", sans-serif';
      case 'mono': return '"JetBrains Mono", monospace';
      case 'outfit': return '"Outfit", sans-serif';
      case 'merriweather': return '"Merriweather", serif';
      case 'poppins': return '"Poppins", sans-serif';
      case 'montserrat': return '"Montserrat", sans-serif';
      case 'nunito': return '"Nunito", sans-serif';
      case 'open-sans': return '"Open Sans", sans-serif';
      case 'courier': return '"Courier Prime", monospace';
      case 'lora': return '"Lora", serif';
      case 'fira': return '"Fira Sans", sans-serif';
      case 'sans':
      default: return 'var(--font-sans)';
    }
  };

  return (
    <div
      id="clinical-prescription-paper"
      className={`print-page w-full bg-white text-slate-800 shadow-xl print:shadow-none border-x border-b border-slate-200 print:border-none relative flex flex-col justify-between overflow-hidden p-8 ${
        settings.gridPaper ? 'watermark-bg' : ''
      }`}
      style={{
        fontFamily: getFontFamily(),
        minHeight: '297mm', // strict A4 ratio min height on desktop
        borderTop: `8px solid ${themeColors.primary}`
      }}
    >
      {/* Background Watermark decoration */}
      {settings.watermark !== 'none' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] print:opacity-[0.02] select-none">
          {settings.watermark === 'bear' && <CutePanda className="w-96 h-96" color={themeColors.primary} />}
          {settings.watermark === 'stethoscope' && <StethoscopeHeart className="w-96 h-96" color={themeColors.primary} />}
          {settings.watermark === 'shield' && <MinimalistCross className="w-80 h-80" color={themeColors.primary} />}
        </div>
      )}

      {/* Main Prescription content blocks */}
      <div className="space-y-4">
        {/* ================= HEADER SECTION ================= */}
        {(() => {
          switch (settings.headerStyle || 'classic') {
            case 'minimalist':
              return renderMinimalistHeader();
            case 'centered-badge':
              return renderCenteredBadgeHeader();
            case 'editorial':
              return renderEditorialHeader();
            case 'sidebar':
              return renderSidebarHeader();
            case 'banner':
              return renderBannerHeader();
            case 'academic':
              return renderAcademicHeader();
            case 'asymmetric-bold':
              return renderAsymmetricHeader();
            case 'dual-card':
              return renderDualCardHeader();
            case 'inline-compact':
              return renderInlineCompactHeader();
            case 'bottom-contact':
              return renderBottomContactHeader();
            case 'classic':
            default:
              return renderClassicHeader();
          }
        })()}

        {/* ================= PATIENT DETAILS STRIP ================= */}
        <div 
          className="border rounded-xl p-3 grid grid-cols-4 gap-y-2.5 gap-x-3 text-xs shadow-sm bg-slate-50/40"
          style={{ borderColor: themeColors.border }}
        >
          <div className="col-span-2">
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Patient Name</span>
            <span className="font-bold text-slate-800 text-[13px]">
              {name || <span className="text-slate-300 italic font-normal">___________________________</span>}
            </span>
          </div>
          
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Age</span>
            <span className="font-semibold text-slate-700">
              {age || <span className="text-slate-300 italic font-normal">______</span>}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Gender</span>
            <span className={`font-semibold ${gender === 'Boy' ? 'text-sky-600' : gender === 'Girl' ? 'text-pink-600' : 'text-slate-700'}`}>
              {gender || <span className="text-slate-300 italic font-normal">___</span>}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Date</span>
            <span className="font-semibold text-slate-700 font-mono">
              {date || <span className="text-slate-300 italic font-normal">__/__/____</span>}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Weight</span>
            <span className="font-bold text-slate-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100/40">
              {weight ? `${weight} kg` : <span className="text-slate-300 italic font-normal">___</span>}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Height</span>
            <span className="font-semibold text-slate-700">
              {height ? `${height} cm` : <span className="text-slate-300 italic font-normal">___</span>}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Feeding Type</span>
            <span className="font-medium text-slate-600">
              {feedingType || <span className="text-slate-300 italic font-normal">___</span>}
            </span>
          </div>

          <div className="col-span-4 border-t border-slate-100/60 pt-2 mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Immunization:</span>
            <span className={`font-bold text-xs ${(immunizationStatus || (immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'up_to_date' ? 'text-emerald-600' : 'text-amber-600'}`}>
              {(immunizationStatus || (immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'up_to_date' ? 'Up-to-date for Age' : 'Not Up-to-date'}
            </span>
            {((immunizationStatus || (immunizationUpToDate ? 'up_to_date' : 'not_up_to_date')) === 'not_up_to_date') && missingVaccines && (
              <span className="text-[11px] text-slate-700 italic font-semibold px-2 py-0.5 bg-amber-50 rounded border border-amber-200/50">
                (Pending / Not Taken: {missingVaccines})
              </span>
            )}
          </div>
        </div>

        {/* ================= VITALS SUB-STRIP ================= */}
        {settings.showVitals && (temp || pulse || bp || spo2) && (
          <div 
            className="flex flex-wrap items-center gap-x-6 gap-y-1.5 px-3 py-1.5 border-b border-dashed text-[11px] font-mono text-slate-500"
            style={{ borderColor: themeColors.border }}
          >
            {temp && (
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">Temp:</span> {temp}°F
              </span>
            )}
            {pulse && (
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">HR / Pulse:</span> {pulse} bpm
              </span>
            )}
            {bp && (
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">BP:</span> {bp}
              </span>
            )}
            {spo2 && (
              <span className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">SpO2:</span> {spo2}%
              </span>
            )}
          </div>
        )}

        {/* ================= CLINICAL BODY BLOCK ================= */}
        <div className="grid grid-cols-10 gap-x-6 pt-2">
          
          {/* SIDE PANEL (Complaints, Findings, Diagnosis - ~30%) */}
          {settings.showClinicalFeed ? (
            <div className="col-span-3 border-r pr-4 space-y-4 text-xs" style={{ borderColor: themeColors.border }}>
              
              {/* Complaints */}
              <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-1" style={{ color: themeColors.primary }}>
                  <Clipboard className="w-3 h-3" />
                  <span>Chief Complaints</span>
                </h4>
                {prescription.chiefComplaints.length > 0 ? (
                  <ul className="list-disc pl-4 space-y-1 font-medium text-slate-600">
                    {prescription.chiefComplaints.map((item, id) => (
                      <li key={id} className="leading-tight">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-350 italic text-[11px]">No symptoms entered</p>
                )}
              </div>

              {/* On Examination */}
              <div className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-1" style={{ color: themeColors.primary }}>
                  <Award className="w-3 h-3" />
                  <span>On Examination (O/E)</span>
                </h4>
                {prescription.clinicalFindings.length > 0 ? (
                  <ul className="list-disc pl-4 space-y-1 font-medium text-slate-600">
                    {prescription.clinicalFindings.map((item, id) => (
                      <li key={id} className="leading-tight">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-350 italic text-[11px]">No clinical findings entered</p>
                )}
              </div>

              {/* Diagnosis */}
              <div className="space-y-1 pt-1">
                <h4 className="font-bold uppercase tracking-wider text-[10px] flex items-center gap-1" style={{ color: themeColors.primary }}>
                  <HeartCrack className="w-3 h-3" />
                  <span>Diagnosis / Imp</span>
                </h4>
                {prescription.diagnosis ? (
                  <p className="font-bold text-slate-800 leading-tight border-l-2 pl-2" style={{ borderLeftColor: themeColors.secondary }}>
                    {prescription.diagnosis}
                  </p>
                ) : (
                  <p className="text-slate-350 italic text-[11px]">Under investigation</p>
                )}
              </div>

              {/* General Immunization/Feeding Tip */}
              <div className="pt-2 border-t border-slate-100 space-y-1 text-[10px] text-slate-400">
                <p>• Handwash strictly before preparing pediatric feed.</p>
                <p>• Review child weight log regularly.</p>
              </div>
            </div>
          ) : null}

          {/* Rx SECTION (Medications) */}
          <div className={`${settings.showClinicalFeed ? 'col-span-7' : 'col-span-10'} space-y-4`}>
            
            {/* Medical RX Emblem Header */}
            <div className="flex justify-between items-baseline mb-3 border-b-2 pb-1" style={{ borderColor: `${themeColors.primary}15` }}>
              <span className="text-3xl font-bold italic" style={{ fontFamily: 'Georgia, serif', color: themeColors.primary }}>
                ℞
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                Prescription / Treatment Plan
              </span>
            </div>

            {/* Core Medication lists */}
            {prescription.medications.length > 0 ? (
              <div className="space-y-3.5">
                {prescription.medications.map((item, index) => (
                  <div key={item.id} className="group pb-3 border-b border-slate-100 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-slate-400 font-mono">
                            {index + 1}.
                          </span>
                          <span className="font-bold text-slate-800 text-[13px]">
                            {item.name}
                          </span>
                          <span className={`text-[9px] font-medium px-1.5 py-0.2 rounded border uppercase font-mono ${
                            item.type === 'Syrup' || item.type === 'Suspension' || item.type === 'Drops'
                              ? 'text-sky-700 bg-sky-50 border-sky-100'
                              : 'text-slate-600 bg-slate-50 border-slate-200'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        {item.notes && (
                          <p className="text-xs text-slate-400 italic pl-5 leading-normal">
                            Note: {item.notes}
                          </p>
                        )}
                      </div>
                      
                      {/* Dose / duration info */}
                      <div className="text-right">
                        <span className="text-xs font-bold text-indigo-700 font-mono bg-indigo-50/60 print:bg-slate-100 px-2 py-0.5 rounded">
                          {item.dosage}
                        </span>
                        <span className="text-xs text-slate-500 font-medium ml-1.5 font-mono">
                          × {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Schedule and food Timing parameters */}
                    <div className="flex justify-between items-center mt-1.5 pl-5">
                      {renderFrequencyMarker(item.frequency)}
                      <div className="flex gap-2 text-[10px]">
                        {item.timing !== 'None' && (
                          <span className="font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {item.timing}
                          </span>
                        )}
                        <span className="text-slate-500 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded">
                          {item.frequency.split(' (')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 border border-dashed border-slate-200 rounded-xl bg-slate-50/20">
                <span className="text-2xl font-bold opacity-30 select-none mb-1">℞</span>
                <p className="text-xs text-slate-400 font-medium italic">
                  Prescription table is empty. Click medication helpers or custom fields to append.
                </p>
              </div>
            )}

            {prescription.previousMedications && (
              <div className="mt-4 p-3 bg-slate-50/75 border border-slate-200/40 rounded-xl space-y-1 shadow-sm">
                <h5 className="text-[9px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <span className="w-1 h-2 rounded bg-indigo-500"></span>
                  <span>Active Maintenance / Past Medications</span>
                </h5>
                <p className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-semibold pl-2.5">
                  {prescription.previousMedications}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= DIETARY / ADVICE & TREATMENT ================= */}
        {prescription.advice && (
          <div className="pt-3 border-t border-slate-150 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[10px] mb-1.5 flex items-center gap-1" style={{ color: themeColors.primary }}>
              <span>Dietary Notes & Supportive Advice</span>
            </h4>
            <div className="bg-slate-50/40 border border-slate-100/65 rounded-xl p-3 text-slate-600 leading-relaxed font-normal whitespace-pre-line">
              {prescription.advice}
            </div>
          </div>
        )}
      </div>

      {/* ================= BOTTOM FOOTER SECTION (A4 anchor footer) ================= */}
      <div className="space-y-4 pt-4 border-t" style={{ borderColor: themeColors.border }}>
        <div className="flex justify-between items-end text-xs">
          
          {/* Emergency note or Next Visit */}
          <div className="space-y-1 text-[11px] text-slate-500 max-w-sm">
            {settings.nextFollowUp && (
              <div className="flex items-center gap-1.5 font-semibold text-slate-700 bg-amber-50/60 border border-amber-100/50 rounded-lg p-2 mb-1.5">
                <CalendarClock className="w-3.5 h-3.5 text-amber-600" />
                <span>Next Review: <span className="text-blue-700 font-bold">{settings.nextFollowUp}</span></span>
              </div>
            )}
            <p className="italic leading-normal">
              ⚠️ <strong>Emergency Warning:</strong> In case of high-grade persistent fever, severe vomiting, fast breathing, or excessive lethargy, please report to an emergency pediatric care facility immediately.
            </p>
          </div>

          {/* Doctor Signature Pad */}
          <div className="text-right space-y-1 flex flex-col items-end">
            {settings.signatureMode === 'text' ? (
              <div className="font-serif italic text-base text-blue-800 pr-2 font-semibold">
                {settings.signatureText || doctorProfile.name || 'Dr. Neeladri Dawn'}
              </div>
            ) : settings.signatureMode === 'draw' && settings.signatureDrawData ? (
              <img 
                src={settings.signatureDrawData} 
                alt="Doctor Signature" 
                className="max-h-12 max-w-[150px] object-contain opacity-90 pr-2"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="h-10"></div>
            )}
            
            <div className="border-t w-48 text-center pt-1 font-semibold text-slate-600 text-[10px] uppercase font-mono tracking-wider">
              Authorized Signature / Seal
            </div>
            <div className="text-[9px] text-slate-400">
              {doctorProfile.name || 'Dr. Neeladri Dawn'}{doctorProfile.speciality ? `, ${doctorProfile.speciality}` : ''}
            </div>
          </div>
        </div>

        {/* If bottom-contact layout, render the clinic coordinates here in the footer */}
        {settings.headerStyle === 'bottom-contact' && (
          <div className="border-t border-t-2 pt-2.5 mt-2 grid grid-cols-3 gap-4 text-[10.5px] text-slate-500 leading-tight bg-slate-50/50 p-2.5 rounded-xl border" style={{ borderColor: themeColors.border }}>
            {doctorProfile.clinicName && (
              <div>
                <span className="font-extrabold text-slate-800 block text-[9px] uppercase tracking-wider">Facility Hub</span>
                <span>{doctorProfile.clinicName}</span>
              </div>
            )}
            {doctorProfile.clinicAddress && (
              <div>
                <span className="font-extrabold text-slate-800 block text-[9px] uppercase tracking-wider">CLINIC LOCATION</span>
                <span>{doctorProfile.clinicAddress}</span>
              </div>
            )}
            <div className="space-y-0.5">
              <span className="font-extrabold text-slate-800 block text-[9px] uppercase tracking-wider">TIMINGS & CONTACTS</span>
              {doctorProfile.clinicTimings && <p>🕒 {doctorProfile.clinicTimings}</p>}
              {doctorProfile.clinicPhone && <p className="font-mono">📞 {doctorProfile.clinicPhone}</p>}
              {doctorProfile.email && <p className="truncate">✉️ {doctorProfile.email}</p>}
            </div>
          </div>
        )}

        {/* Bottom micro branding & credits */}
        <div className="flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-100 pt-2 font-mono">
          <span>Printed on official consultation letterhead </span>
          <span className="font-semibold text-slate-350">Page 1 of 1 (A4)</span>
        </div>
      </div>
    </div>
  );
}
