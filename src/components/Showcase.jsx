import React from 'react';
import { FiBook, FiPlayCircle } from 'react-icons/fi';
import QRCode from 'react-qr-code';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import imgSistemInformasi from '../assets/SistemInformasiBerorientasiData.png';
import imgKonsepDataWarehouseArsitektur from '../assets/KonsepDasarDataWarehouseArsitektur,IntegrasiData,danPenerapannya.png';
import imgDasarKomputer from '../assets/DASARDASARKOMPUTERDANPEMROGRAMAN(TEORI DAN PRAKTIK).png';
import imgKonsepDataWarehouse from '../assets/KonsepDasarDataWarehouse.png';
import imgPemrogramanWeb from '../assets/PemrogramanWebdanAplikasiMobile.png';

const Showcase = () => {
  const videos = [
    {
      title: "Data Normalization Fundamentals",
      year: "Terbaru",
      videoId: "5-lcz1L7dnI",
    },
    {
      title: "Dokumentasi materi perkuliahan Pengenalan IP Address",
      year: "Materi",
      videoId: "2S81aMjeC5U",
    },
    {
      title: "Samudra Data pada SQL dan NoSQL",
      year: "Materi",
      videoId: "kAMDvuj4GMc",
    }
  ];

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

  const renderBookCard = (book) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full w-full">
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
  );

  const renderGoogleScholar = () => (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center text-center hover:border-navy dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full min-h-[400px] w-full"
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
  );

  const renderVideoCard = (video) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full w-full">
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 z-20">
          <FiPlayCircle className="text-white drop-shadow-md" size={64} />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 dark:text-red-400 shadow-sm z-30">
          {video.year}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-dark dark:text-white leading-snug mb-6 line-clamp-2" title={video.title}>
            {video.title}
          </h3>
        </div>
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <FiPlayCircle size={16} /> Tonton Video
        </a>
      </div>
    </div>
  );

  return (
    <section id="books" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Karya</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sebagai bentuk kontribusi Saya dalam bidang akademik dan praktisi, berikut ini adalah apa saja yang bisa saya berikan untuk berbagi ilmu bersama anda semua.
          </p>
        </div>

        {/* Desktop Grid (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <React.Fragment key={book.title}>
              {renderBookCard(book)}
            </React.Fragment>
          ))}
          {renderGoogleScholar()}
        </div>

        {/* Mobile Infinity Slider (below md) */}
        <div className="block md:hidden -mx-4 pb-8">
          <Swiper
            loop={true}
            slidesPerView={1.1}
            spaceBetween={20}
            centeredSlides={true}
            className="w-full px-4"
          >
            {books.map((book) => (
              <SwiperSlide key={book.title} className="h-auto pb-2">
                {renderBookCard(book)}
              </SwiperSlide>
            ))}
            <SwiperSlide className="h-auto pb-2">
              {renderGoogleScholar()}
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Pembatas / Header Video */}
        <div className="mt-16 md:mt-24 mb-8 md:mb-16 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Karya Video</h2>
          <div className="w-20 h-1 bg-red-600 rounded mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berbagi wawasan seputar teknologi, tutorial, dan edukasi melalui kanal YouTube <a href="https://www.youtube.com/@the.room.40" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline">@the.room.40</a>.
          </p>
        </div>

        {/* Desktop Grid (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <React.Fragment key={video.videoId}>
              {renderVideoCard(video)}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Infinity Slider (below md) */}
        <div className="block md:hidden -mx-4 pb-8">
          <Swiper
            loop={true}
            slidesPerView={1.1}
            spaceBetween={20}
            centeredSlides={true}
            className="w-full px-4"
          >
            {[...videos, ...videos].map((video, idx) => (
              <SwiperSlide key={`${video.videoId}-${idx}`} className="h-auto pb-2">
                {renderVideoCard(video)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.youtube.com/@the.room.40?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-red-600 text-white hover:bg-red-700 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-3"
          >
            <FiPlayCircle size={20} /> Melihat Video Lainnya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
