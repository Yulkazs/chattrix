'use client';

import { useTheme } from './ThemeContext';
import Image from 'next/image';

export function Background() {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src="/bg-line-upper.svg"
        alt=""
        fill
        className={`absolute inset-0 object-cover object-top ${isDark ? 'opacity-100' : 'opacity-30'}`}
        style={{ transform: 'translateY(-8%)' }}
        priority
      />
      
      <Image
        src="/bg-line-down.svg"
        alt=""
        fill
        className={`absolute inset-0 object-cover object-bottom ${isDark ? 'opacity-100' : 'opacity-30'}`}
        style={{ transform: 'translateY(40%)' }}
        priority
      />
    </div>
  );
}