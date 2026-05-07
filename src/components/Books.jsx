import React from 'react';
import { FiBook } from 'react-icons/fi';
import QRCode from 'react-qr-code';

const Books = () => {
  const books = [
    { title: "Sistem Informasi Berorientasi Data", year: "2026" },
    { title: "Konsep Dasar Data Warehouse: Arsitektur, Integrasi Data, dan Penerapannya", year: "2026" },
    { title: "Dasar-Dasar Komputer dan Pemrograman (Teori dan Praktik)", year: "2025" },
    { title: "Konsep Dasar Data Warehouse", year: "2025" },
    { title: "Pemrograman Web dan Aplikasi Mobile", year: "2024" }
  ];

  return (
    <section id="books" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark mb-2">Karya Buku</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sebagai bentuk kontribusi dalam bidang akademik dan praktisi, berikut adalah beberapa buku teknologi yang telah diterbitkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-navy bg-opacity-10 text-navy rounded-xl flex items-center justify-center mb-4">
                  <FiBook size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dark leading-snug mb-2">{book.title}</h3>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Tahun Terbit</span>
                <span className="text-sm font-bold text-navy bg-light px-3 py-1 rounded-full">{book.year}</span>
              </div>
            </div>
          ))}
          
          {/* Google Scholar QR Code */}
          <div 
            className="bg-white rounded-2xl p-6 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center hover:border-navy hover:shadow-md transition-all cursor-pointer group"
            onClick={() => window.open('https://scholar.google.com/citations?user=_rRCa3wAAAAJ&hl=en', '_blank')}
          >
             <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-4 p-1 group-hover:scale-105 transition-transform">
               <QRCode 
                 value="https://scholar.google.com/citations?user=_rRCa3wAAAAJ&hl=en" 
                 size={120} 
                 style={{ height: "auto", maxWidth: "100%", width: "100%" }}
               />
             </div>
             <p className="text-sm text-gray-500 font-medium group-hover:text-navy transition-colors">Scan atau klik untuk melihat<br/>daftar publikasi lengkap</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
