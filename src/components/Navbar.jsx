import React, { useState, useEffect } from 'react';
import { FiHome, FiUser, FiBriefcase, FiCode, FiBook, FiFileText } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Profil', href: '#about', icon: FiUser },
    { name: 'Catatan', href: '#notes', icon: FiFileText },
    { name: 'Karir', href: '#experience', icon: FiBriefcase },
    { name: 'Karya', href: '#books', icon: FiBook },
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
      <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
              {/* Added w-full and justify-center on mobile so logo is centered since there's no hamburger menu */}
              <a href="#" className="font-bold text-xl text-navy">Rommi Kaestria</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors font-medium text-sm ${activeSection === link.href.substring(1) ? 'text-navy font-bold' : 'text-gray-600 hover:text-navy'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div 
        className="md:hidden fixed bottom-0 w-full bg-white bg-opacity-95 backdrop-blur-lg border-t border-gray-200 z-50 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="flex justify-around items-center h-[4.5rem] px-2">
          <a href="#" className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeSection === '' ? 'text-navy' : 'text-gray-400 hover:text-gray-600'}`}>
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
