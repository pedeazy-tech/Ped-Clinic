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
