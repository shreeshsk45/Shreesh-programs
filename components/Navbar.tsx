import React, { useState, useEffect } from 'react';
import { Menu, X, Map, Sun, Moon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check system preference or previous setting could be added here
    // For now, defaulting to class="dark" in html means we start dark.
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-[#0B0B0F]/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4 shadow-sm dark:shadow-none' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Map className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
              TripSync
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-brand-600 dark:hover:text-brand-400 transition-colors ${scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-600 dark:text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300' : 'hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-500 transition-all transform hover:scale-105 text-sm shadow-lg shadow-brand-500/20">
              Get App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#15151A] border-t border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 dark:text-slate-300 font-medium block px-2 py-1 hover:text-brand-600 dark:hover:text-brand-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-xl font-bold">
            Get App
          </button>
        </div>
      )}
    </nav>
  );
};