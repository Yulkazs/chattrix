'use client';

import { useTheme } from './ThemeContext';
import { SunMedium, Moon } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-3 rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-200 dark:text-gray-700" />
      ) : (
        <SunMedium className="h-5 w-5 text-gray-200" />
      )}
    </button>
  );
}