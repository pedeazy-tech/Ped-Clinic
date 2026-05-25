import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export function StethoscopeHeart({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6a5 5 0 0 1 10 0M12 10.5a5 5 0 0 1 10 0c0 2.5-1 4.5-2.5 6" />
      <path d="M12 5V3M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M8 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      <path d="M19 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      <path d="M12 14.5c1.2-1.2 3.2-1.2 4.4 0s1.2 3.2 0 4.4l-4.4 4.4-4.4-4.4c-1.2-1.2-1.2-3.2 0-4.4s3.2-1.2 4.4 0z" fill={color} fillOpacity="0.1" />
    </svg>
  );
}

export function CutePanda({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Ears */}
      <circle cx="6" cy="6" r="3.5" fill={color} fillOpacity="0.8" />
      <circle cx="18" cy="6" r="3.5" fill={color} fillOpacity="0.8" />
      <circle cx="6" cy="6" r="2" fill="#ffffff" />
      <circle cx="18" cy="6" r="2" fill="#ffffff" />
      
      {/* Head */}
      <rect x="3" y="6" width="18" height="14" rx="7" fill="#ffffff" stroke={color} strokeWidth="1.8" />
      
      {/* Eyes */}
      <ellipse cx="8.5" cy="12" rx="2.5" ry="3.2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" />
      <ellipse cx="15.5" cy="12" rx="2.5" ry="3.2" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1" />
      
      <circle cx="8.5" cy="12" r="1.2" fill={color} />
      <circle cx="15.5" cy="12" r="1.2" fill={color} />
      
      {/* Nose/Snout */}
      <ellipse cx="12" cy="14.5" rx="1.5" ry="1" fill={color} />
      <path d="M11 16.2c0.5 0.5 1.5 0.5 2 0" stroke={color} strokeWidth="1.2" />
      
      {/* Cheeks */}
      <circle cx="5" cy="14.5" r="1" fill="#f87171" fillOpacity="0.4" />
      <circle cx="19" cy="14.5" r="1" fill="#f87171" fillOpacity="0.4" />
    </svg>
  );
}

export function HappyBaby({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Baby bonnet / hair */}
      <path d="M3 13a9 9 0 0 1 18 0" stroke={color} strokeWidth="1.8" />
      <path d="M12 4a3 3 0 0 0-3 3" stroke={color} strokeWidth="1.5" />
      
      {/* Face outline */}
      <circle cx="12" cy="13" r="7.5" fill="#ffffff" stroke={color} strokeWidth="1.8" />
      
      {/* Happy closed eyes */}
      <path d="M8.5 12.5c.3 .5 .8 .5 1.1 0" stroke={color} strokeWidth="1.6" />
      <path d="M14.4 12.5c.3 .5 .8 .5 1.1 0" stroke={color} strokeWidth="1.6" />
      
      {/* Rosy Cheeks */}
      <circle cx="7" cy="14.5" r="0.8" fill="#f87171" fillOpacity="0.6" />
      <circle cx="17" cy="14.5" r="0.8" fill="#f87171" fillOpacity="0.6" />
      
      {/* Smile with tongue/open */}
      <path d="M10.5 15.5c0 1 1.5 1 3 0" stroke={color} fill="#f87171" fillOpacity="0.2" strokeWidth="1.5" />
      
      {/* Pacifier outline */}
      <circle cx="12" cy="17" r="1.5" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.2" />
      <path d="M12 18.5v1.5M10.5 20h3" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function MinimalistCross({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
      <path d="M12 8v8M8 12h8" strokeWidth="2.5" />
      <path d="M7 7c2-2 8-2 10 0M7 17c2 2 8 2 10 0" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

export function TeddyBear({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7" cy="7" r="2.5" fill={color} fillOpacity="0.8" />
      <circle cx="17" cy="7" r="2.5" fill={color} fillOpacity="0.8" />
      <circle cx="12" cy="13" r="6.5" fill="#ffffff" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="14" r="2.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
      <circle cx="9.5" cy="11.5" r="1" fill={color} />
      <circle cx="14.5" cy="11.5" r="1" fill={color} />
      <path d="M12 14v1M11 15.5c.5 .5 1.5 .5 2 0" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function ShieldHeart({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={color} fillOpacity="0.05" />
      <path d="M12 8.5c.8-1 2.3-1 3.1 0 .8.8.8 2.3 0 3.1l-3.1 3.1-3.1-3.1c-.8-.8-.8-2.3 0-3.1.8-1 2.3-1 3.1 0z" fill="#ef4444" stroke="#ef4444" strokeWidth="1.5" />
    </svg>
  );
}

export function BabyCarriage({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="19" r="2.5" />
      <circle cx="16" cy="19" r="2.5" />
      <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z" fill={color} fillOpacity="0.1" />
      <path d="M4 12c0 2.5 1.5 4.5 4 5h8c2.5-.5 4-2.5 4-5M2 12h20M12 12v5M18 12c0-3-1.5-5.5-4-5.5" />
    </svg>
  );
}

export function LittleSun({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4.5" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.8" />
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#f59e0b" strokeWidth="1.8" />
      <path d="M10.5 11c0 .2.1.5.3.5.2 0 .3-.3.3-.5M12.9 11c0 .2.1.5.3.5.2 0 .3-.3.3-.5M11.3 13.5c.3.5 1.1.5 1.4 0" stroke="#f59e0b" strokeWidth="1.2" />
    </svg>
  );
}

export function CuteRocket({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5 16.5c-1.5 1.5-2.5 3.5-2.5 5.5l5.5-2.5-3-3z" />
      <path d="M12 2c6 0 10 4 10 10l-3 7-7-3-10-14zM12 2l7 7" fill={color} fillOpacity="0.1" />
      <circle cx="13" cy="9" r="2" fill="#3b82f6" fillOpacity="0.6" stroke={color} strokeWidth="1.2" />
      <path d="M7 17l-3 3M17 7l3-3" />
    </svg>
  );
}

export function HappyTooth({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 3c1.5 0 3 1.5 6 1.5s4.5-1.5 6-1.5 3.5 1.5 3.5 4.5S20 14 18.5 17.5c-1.5 3.5-3.5 3.5-4.5 3.5-.8 0-1-.3-2-1-.8.7-1.2 1-2 1-1 0-3 0-4.5-3.5C4 14 2.5 10.5 2.5 7.5S4.5 3 6 3z" fill={color} fillOpacity="0.05" />
      <path d="M8.5 9c.2 0 .5-.2.5-.5s-.2-.5-.5-.5M15.5 9c.2 0 .5-.2.5-.5s-.2-.5-.5-.5M10.5 12.5c.3.5 2.7.5 3 0" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function ClinicalApple({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5c.5-1.5 1.5-2.5 3-2.5s2 1.5 1.5 3.5c-.8 2.2-3 2.5-4.5 2" />
      <path d="M12 7.5c-1.8-1.5-5-1.5-7 .5s-1.5 5.5 1 8c2.5 2.5 4.5 4.5 6 5 1.5-.5 3.5-2.5 6-5s3-6 1-8-5.2-2-7-.5z" fill="#22c55e" fillOpacity="0.1" />
      <path d="M12 7.5v2" strokeWidth="2" />
    </svg>
  );
}

export function ToyBlocks({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="8" height="8" rx="1.5" fill={color} fillOpacity="0.1" />
      <rect x="13" y="11" width="8" height="8" rx="1.5" fill={color} fillOpacity="0.25" />
      <rect x="8" y="3" width="8" height="7" rx="1.5" fill={color} fillOpacity="0.05" />
      <path d="M12 3v7M7 11v8M17 11v8" />
    </svg>
  );
}

export function SleepingOwl({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="6" width="16" height="15" rx="8" fill={color} fillOpacity="0.05" />
      <rect x="7" y="10" width="4" height="4" rx="2" fill={color} fillOpacity="0.2" />
      <rect x="13" y="10" width="4" height="4" rx="2" fill={color} fillOpacity="0.2" />
      <path d="M8.5 11.5c.3.5 1 .5 1.2 0M14.5 11.5c.3.5 1 .5 1.2 0M11 13.5l1 1 1-1" />
      <path d="M4 10c-1-1-3 0-3 1M20 10c1-1 3 0 3 1" />
    </svg>
  );
}

export function BabyPram({ className = "w-12 h-12", color = "currentColor" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="20" r="2" />
      <circle cx="16" cy="20" r="2" />
      <path d="M3 11a7 7 0 0 0 14 0H3zM17 11l4-5M19 8h3" />
      <path d="M3 11V5h2" />
    </svg>
  );
}
