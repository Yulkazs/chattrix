// app/components/Background.tsx
'use client';

import { useTheme } from './ThemeContext';

export function Background() {
  const { theme } = useTheme();
  
  // Show background in both themes, but adjust opacity
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg 
        className={`absolute inset-0 w-full h-full ${isDark ? 'opacity-100' : 'opacity-30'}`}
        viewBox="0 0 1400 800" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for the main flowing line */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.7" />
          </linearGradient>
          
          {/* Gradient for the secondary line */}
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#9333EA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.6" />
          </linearGradient>

          {/* Enhanced glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Ambient shadow gradients */}
          <radialGradient id="shadowGradient1" cx="30%" cy="35%" r="45%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.01" />
          </radialGradient>

          <radialGradient id="shadowGradient2" cx="75%" cy="75%" r="40%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.01" />
          </radialGradient>
        </defs>

        {/* Ambient shadow areas */}
        <ellipse cx="420" cy="280" rx="500" ry="350" fill="url(#shadowGradient1)" />
        <ellipse cx="1050" cy="600" rx="450" ry="300" fill="url(#shadowGradient2)" />

        {/* Main flowing line - recreated to match your original with the subtle wave */}
        <path 
          d="M 50 700 Q 350 620 650 420 Q 750 380 850 360 Q 950 340 1350 180" 
          fill="none" 
          stroke="url(#lineGradient)" 
          strokeWidth="3.5" 
          filter="url(#glow)"
        />

        {/* Secondary flowing line - bottom right curve */}
        <path 
          d="M 900 780 Q 1100 730 1250 650 Q 1350 600 1450 550" 
          fill="none" 
          stroke="url(#lineGradient2)" 
          strokeWidth="3" 
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}