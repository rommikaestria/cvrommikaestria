import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Tentang Saya</h2>
          <div className="w-20 h-1 bg-navy rounded"></div>
        </div>

        <div className="w-full">
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
            <p>
              Saya adalah Dosen di STMIK Palangkaraya dan praktisi Teknologi Informasi dengan latar belakang pendidikan Magister Komputer Teknik Komputer.
            </p>
            <p>
              Saya memiliki keahlian mendalam dalam arsitektur data dan pengembangan full-stack. Sebagai seorang pendidik dan aktif menulis, saya berfokus pada berbagi ilmu untuk menjembatani teori sistem informasi dengan implementasi teknologi terkini kepada masyarakat luas.
            </p>
            <p>
              Aktivitas Tridharma Perguruan Tinggi yang saya jalani meliputi mengajar, meneliti, dan pengabdian masyarakat.
            </p>
            <p>Saya seorang pengembang web yang berbasis di Palangka Raya, Indonesia.
              Saya mengkhususkan diri dalam membangun situs web dan aplikasi web modern menggunakan kode yang bersih, arsitektur yang skalabel, dan desain basis data yang efisien.
              Dengan latar belakang sebagai dosen di bidang Ilmu Komputer, saya menggabungkan keahlian teknis dengan kemampuan komunikasi dan pemecahan masalah yang kuat.
              Saya membantu klien mengubah ide menjadi produk digital yang fungsional, andal, dan elegan.</p>
            <p>Fokus teknologi: Pengembangan web, rekayasa backend, sistem basis data.</p>
            <div className="bg-light dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4 flex items-center gap-2">
                <FiBookOpen className="text-navy dark:text-blue-400" /> Pendidikan
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dark dark:text-white">Magister Komputer (M.Kom.)</h4>
                  <p className="text-sm text-navy dark:text-blue-400">Teknik Komputer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Universitas Amikom Jogjakarta</p>
                </div>
                <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
                <div>
                  <h4 className="font-medium text-dark dark:text-white">Sarjana Komputer (S.Kom.)</h4>
                  <p className="text-sm text-navy dark:text-blue-400">Sistem Informasi</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">STMIK Palangkaraya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
