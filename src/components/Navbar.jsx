import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiAward, FiPenTool, FiFileText, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Profil', href: '#about', icon: FiUser },
    { name: 'Catatan', href: '#notes', icon: FiFileText },
    { name: 'Karir', href: '#experience', icon: FiAward },
    { name: 'Karya', href: '#books', icon: FiPenTool },
  ];

  // Optional: Track active section for styling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'notes', 'experience', 'books'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on your layout
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 150) {
        current = ''; // Top of page
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
              {/* Added w-full and justify-center on mobile so logo is centered since there's no hamburger menu */}
              <a href="#hero" className="font-bold text-xl text-navy">Rommi Kaestria</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors font-medium text-sm ${activeSection === link.href.substring(1) ? 'text-navy dark:text-blue-400 font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Dark Mode Toggle Desktop */}
              <button 
                onClick={toggleTheme} 
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white transition-colors rounded-full"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dark Mode Toggle Mobile (Floating) */}
      <button 
        onClick={toggleTheme}
        className="md:hidden fixed top-20 right-4 p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md z-40 transition-colors border border-gray-200 dark:border-gray-700"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      {/* Mobile Bottom Navigation */}
      <div 
        className="md:hidden fixed bottom-0 w-full bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 z-50 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex justify-around items-center h-[4.5rem] px-2">
          <a href="#hero" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeSection === '' ? 'text-navy' : 'text-gray-400 hover:text-gray-600'}`}>
            <FiHome size={22} className={`mb-1 transition-transform ${activeSection === '' ? 'scale-110' : ''}`} />
            <span className="text-[10px] font-medium">Beranda</span>
          </a>
          
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isActive ? 'text-navy' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Icon size={22} className={`mb-1 transition-transform ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] font-medium">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
