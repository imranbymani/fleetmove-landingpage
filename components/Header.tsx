
'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'glass border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-extrabold text-xl">F</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">FleetMove</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-sm font-semibold text-gray-600">
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#download" className="hover:text-indigo-600 transition-colors">Download</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-bold text-gray-700 hover:text-indigo-600 transition-colors">Sign in</button>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-100">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
