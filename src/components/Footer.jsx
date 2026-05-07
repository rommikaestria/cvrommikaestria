import React from 'react';
import { FiMail, FiGlobe, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-24 md:pb-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Rommi Kaestria</h2>
          <p className="text-gray-400 text-sm max-w-sm">
            Educontent Creator, Akademisi, dan Praktisi IT yang berdedikasi menjembatani teori dan implementasi teknologi.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="mailto:rokafordev@gmail.com" className="p-3 bg-gray-800 hover:bg-navy rounded-full transition-colors">
            <FiMail size={20} />
          </a>
          <a href="https://www.google.com/search?q=rommi+kaestria&oq=rommi+kaestria&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEEyBggCEEUYPDIGCAMQRRg8MgYIBBBFGEEyBggFEEUYQdIBCTQxNTFqMGoxNagCCLACAfEFbVzqp_BoKJY&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-navy rounded-full transition-colors">
            <FiGlobe size={20} />
          </a>
          <a href="https://linkedin.com/in/rommi-kaestria" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-navy rounded-full transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="https://github.com/rommikaestria" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-navy rounded-full transition-colors">
            <FiGithub size={20} />
          </a>
        </div>

      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rommi Kaestria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
