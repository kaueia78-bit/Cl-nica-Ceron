import React from 'react';

interface ToothLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ToothLogo: React.FC<ToothLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}>
      {/* Radiant Glow Aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/40 via-cyan-300/60 to-white/80 blur-xs tooth-logo-glow" />

      {/* Glossy Circular Shield */}
      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 p-1.5 shadow-md flex items-center justify-center border border-sky-300/60">
        
        {/* Shiny White Tooth SVG */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
        >
          <defs>
            {/* White glossy tooth gradient */}
            <linearGradient id="toothGradient" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#f8fafc" />
              <stop offset="75%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Specular enamel reflection */}
            <linearGradient id="enamelReflection" x1="30" y1="15" x2="50" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Radiant Sparkle Glint */}
            <radialGradient id="sparkleGlint" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Tooth Anatomy Path */}
          <path
            d="M50 14 C34 14, 20 22, 20 38 C20 54, 25 64, 32 86 C35 93, 44 94, 46 86 C48 78, 50 72, 50 72 C50 72, 52 78, 54 86 C56 94, 65 93, 68 86 C75 64, 80 54, 80 38 C80 22, 66 14, 50 14 Z"
            fill="url(#toothGradient)"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Glossy Enamel Highlight on Crown */}
          <path
            d="M30 24 C36 18, 48 18, 52 20 C42 22, 34 28, 30 36 C28 32, 28 26, 30 24 Z"
            fill="url(#enamelReflection)"
          />

          {/* Lateral specular light curve */}
          <path
            d="M25 36 C24 48, 27 60, 32 76"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
        </svg>

        {/* Sparkling gleam star at the crown corner */}
        <div className="absolute -top-1 -right-1 w-4 h-4 pointer-events-none sparkle-icon-animated">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
              fill="#ffffff"
              className="drop-shadow-[0_0_6px_#38bdf8]"
            />
          </svg>
        </div>

        {/* Micro secondary shine point */}
        <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-white blur-[0.5px] opacity-90 animate-ping" />
      </div>
    </div>
  );
};
