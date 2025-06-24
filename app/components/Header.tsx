'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Sparkle, ChartNoAxesGantt, X } from "lucide-react";
import clsx from 'clsx';

export function Header() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled ? 'backdrop-blur-md bg-black/10 shadow-md' : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 pt-4 pb-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-0 xl:ml-24 px-6 py-3 rounded-md bg-gradient-to-r from-[#1A1A1A80] via-[#14141480] to-[#1A1A1A80] border border-[#2b2b2b80] shadow-lg">
            <h1 className="text-white font-semibold text-xl xl:text-2xl mr-8 xl:mr-12">Quoro</h1>
            <nav className="flex items-center space-x-6 xl:space-x-11 ml-16 xl:ml-32">
              <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Home</a>
              <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">About</a>
              <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Features</a>
              <a href="#" className="text-gray-200 text-sm hover:text-purple-300 transition">Contact</a>
            </nav>
            
            {/* Theme Switcher - Desktop */}
            <div className="ml-8">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Logo and Theme Switcher */}
          <div className="lg:hidden flex items-center gap-4">
            <h1 className="text-white font-semibold text-xl">Quoro</h1>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:block mr-0 xl:mr-24">
            <button className="group relative overflow-hidden px-4 xl:px-6 py-2 xl:py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 bg-[length:200%_100%] animate-pulse"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient-move 3s ease-in-out infinite'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/30 opacity-60"></div>
              <span className="relative z-10 flex items-center gap-3 xl:gap-6 font-bold">
                <Sparkle size={18} className="xl:w-6 xl:h-6" /> 
                <span className="text-base xl:text-lg">Login</span>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.1s'}}></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-200 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes gradient-move {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}} />
            </button>
          </div>

          {/* Mobile Menu Button and Theme Switcher */}
          <div className="lg:hidden flex items-center gap-3 mobile-menu-container">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              className="relative p-2 text-white hover:text-purple-300 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {!isMenuOpen ? (
                  <ChartNoAxesGantt 
                    size={24} 
                    className="transition-all duration-300 ease-in-out"
                  />
                ) : (
                  <X 
                    size={24} 
                    className="transition-all duration-300 ease-in-out"
                  />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 z-60 transition-all duration-300 ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {/* Backdrop */}
        <div 
          className={clsx(
            'absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={clsx(
            'mobile-menu-container absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-lg border-l border-gray-700/50 shadow-2xl transition-transform duration-300 ease-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <h2 className="text-white font-semibold text-lg">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800/50"
              >
              </button>
                <X 
                    size={24} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-4">
                {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={clsx(
                      'block py-3 px-4 text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 transform',
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    )}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Mobile Login Button */}
            <div className="p-6 border-t border-gray-700/50">
              <button 
                className="w-full group relative overflow-hidden px-6 py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 bg-[length:200%_100%]"
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-move 3s ease-in-out infinite'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/30 opacity-60"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 font-bold">
                  <Sparkle size={18} /> 
                  <span>Login</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}