import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import fotoRommi from '../assets/foto_rommi.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white leading-tight">
            Hi, Saya <br />
            <span className="text-navy dark:text-blue-400">Rommi Kaestria</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Educontent Creator, Dosen STMIK Palangkaraya, Praktisi IT, & Penulis .
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="mailto:rokafordev@gmail.com" className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-navy dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all border border-gray-100 dark:border-gray-700">
              <FiMail size={22} />
            </a>
            <a href="https://www.google.com/search?q=rommi+kaestria" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-navy dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all border border-gray-100 dark:border-gray-700">
              <FiGlobe size={22} />
            </a>
            <a href="https://linkedin.com/in/rommi-kaestria" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-navy dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all border border-gray-100 dark:border-gray-700">
              <FiLinkedin size={22} />
            </a>
            <a href="https://github.com/rommikaestria" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-navy dark:hover:text-blue-400 rounded-full shadow-sm hover:shadow transition-all border border-gray-100 dark:border-gray-700">
              <FiGithub size={22} />
            </a>
          </div>
          <div className="pt-6">
            <a href="#about" className="inline-block px-8 py-3 bg-navy text-white font-medium rounded-lg shadow-md hover:bg-blue-900 transition-colors">
              Tentang Saya
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-navy bg-opacity-10 rounded-full blur-2xl transform scale-110"></div>
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img src={fotoRommi} alt="Rommi Kaestria" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
