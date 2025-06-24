'use client';

import { useTheme } from './ThemeContext';
import Image from 'next/image';

export function Background() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Mobile-optimized background wrapper */}
      <div className="absolute inset-0 will-change-transform">
        <Image
          src="/bg-line-upper.svg"
          alt=""
          fill
          className={`absolute inset-0 object-cover object-top ${isDark ? 'opacity-100' : 'opacity-30'}`}
          style={{ 
            transform: 'translateY(-8%) translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          priority
        />
        
        <Image
          src="/bg-line-down.svg"
          alt=""
          fill
          className={`absolute inset-0 object-cover object-bottom ${isDark ? 'opacity-100' : 'opacity-30'}`}
          style={{ 
            transform: 'translateY(40%) translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          priority
        />
      </div>
    </div>
  );
}