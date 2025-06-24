'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Sparkle } from "lucide-react";
import clsx from 'clsx';

export function Header() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64); // Activate blur after scrolling 4rem
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-500',
        scrolled ? 'backdrop-blur-md bg-black/10 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between px-12 pt-4 pb-6">
        {/* Left: Logo + Nav (shifted right) */}
        <div className="flex items-center ml-24 px-6 py-3 rounded-md bg-gradient-to-r from-[#1A1A1A80] via-[#14141480] to-[#1A1A1A80] border border-[#2b2b2b80] shadow-lg">
            <h1 className="text-white font-semibold text-2xl mr-12">Quoro</h1>
            <nav className="flex items-center space-x-11 ml-32">
                <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Home</a>
                <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">About</a>
                <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Features</a>
                <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Contact</a>
            </nav>
        </div>

        {/* Right: Enhanced Animated Login Button */}
        <div className="mr-24">
          <button className="group relative overflow-hidden px-6 py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95">
            {/* Moving gradient background */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 bg-[length:200%_100%] animate-pulse"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient-move 3s ease-in-out infinite'
              }}
            ></div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            
            {/* Subtle border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/30 opacity-60"></div>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-6 font-bold">
                <Sparkle size={22} /> 
                <span className="text-lg">Login</span>
            </span>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.1s'}}></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-200 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* CSS for gradient animation */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes gradient-move {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}} />
          </button>
        </div>
      </div>
    </header>
  );
}