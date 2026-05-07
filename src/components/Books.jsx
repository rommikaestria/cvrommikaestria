import React from 'react';
import { FiBook } from 'react-icons/fi';
import QRCode from 'react-qr-code';

import imgSistemInformasi from '../assets/SistemInformasiBerorientasiData.png';
import imgKonsepDataWarehouseArsitektur from '../assets/KonsepDasarDataWarehouseArsitektur,IntegrasiData,danPenerapannya.png';
import imgDasarKomputer from '../assets/DASARDASARKOMPUTERDANPEMROGRAMAN(TEORI DAN PRAKTIK).png';
import imgKonsepDataWarehouse from '../assets/KonsepDasarDataWarehouse.png';
import imgPemrogramanWeb from '../assets/PemrogramanWebdanAplikasiMobile.png';

const Books = () => {
  const books = [
    {
      title: "Sistem Informasi Berorientasi Data",
      year: "2026",
      image: imgSistemInformasi,
      description: "Membahas secara mendalam tentang perancangan, pengembangan, dan implementasi sistem informasi yang berpusat pada pengelolaan data berskala besar.",
      link: "https://www.ycmm.org/book-store/book-catalog-2026/sistem-informasi-berorientasi-data"
    },
    {
      title: "Konsep Dasar Data Warehouse: Arsitektur, Integrasi Data, dan Penerapannya",
      year: "2026",
      image: imgKonsepDataWarehouseArsitektur,
      description: "Panduan komprehensif mengenai arsitektur Data Warehouse, teknik integrasi data (ETL), serta studi kasus penerapannya di dunia industri.",
      link: "https://www.ycmm.org/book-store/book-catalog-2026/konsep-dasar-data-warehouse-arsitektur-integrasi-data-dan-penerapannya"
    },
    {
      title: "Dasar-Dasar Komputer dan Pemrograman (Teori dan Praktik)",
      year: "2025",
      image: imgDasarKomputer,
      description: "Menghadirkan pemahaman dasar mengenai teknologi komputer, struktur inti, serta pengenalan algoritma dan bahasa pemrograman secara praktis.",
      link: "https://www.langsungterbit.com/product/dasar-dasar-komputer-dan-pemrograman-teori-dan-praktik/"
    },
    {
      title: "Konsep Dasar Data Warehouse",
      year: "2025",
      image: imgKonsepDataWarehouse,
      description: "Pengantar fundamental mengenai apa itu Data Warehouse, fungsinya untuk Business Intelligence, dan tahapan awal pembangunannya.",
      link: "https://www.ycmm.org/book-store/book-catalog-2025/konsep-dasar-data-warehouse"
    },
    {
      title: "Pemrograman Web dan Aplikasi Mobile",
      year: "2024",
      image: imgPemrogramanWeb,
      description: "Buku panduan praktis untuk menguasai pemrograman web modern dan pengembangan aplikasi mobile dari nol hingga siap publikasi.",
      link: "https://www.ycmm.org/book-store/book-catalog-2024/pemrograman-web-dan-aplikasi-mobile"
    }
  ];

  return (
    <section id="books" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Karya Buku</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sebagai bentuk kontribusi dalam bidang akademik dan praktisi, berikut adalah beberapa buku teknologi yang telah diterbitkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.title} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy dark:text-blue-400 shadow-sm">
                  {book.year}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dark dark:text-white leading-snug mb-3 line-clamp-2" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {book.description}
                  </p>
                </div>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-navy dark:bg-blue-900 bg-opacity-5 dark:bg-opacity-20 text-navy dark:text-blue-300 hover:bg-navy dark:hover:bg-blue-800 hover:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FiBook size={16} /> Lihat Detail Buku
                </a>
              </div>
            </div>
          ))}

          {/* Google Scholar QR Code */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-center hover:border-navy dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer group min-h-[400px]"
            onClick={() => window.open('https://scholar.google.com/citations?user=_rRCa3wAAAAJ&hl=en', '_blank')}
          >
            <div className="w-40 h-40 bg-white dark:bg-gray-200 rounded-2xl flex items-center justify-center mb-6 p-2 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <QRCode
                value="https://scholar.google.com/citations?user=_rRCa3wAAAAJ&hl=en"
                size={144}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-white mb-2">Google Scholar</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium group-hover:text-navy dark:group-hover:text-blue-400 transition-colors px-4">
              Scan atau klik untuk melihat daftar publikasi dan jurnal lengkap
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
