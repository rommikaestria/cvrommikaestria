import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-dark mb-2">Tentang Saya</h2>
          <div className="w-20 h-1 bg-navy rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
            <p>
              Saya adalah Dosen di STMIK Palangkaraya dan praktisi Teknologi Informasi dengan latar belakang pendidikan Magister Komputer Teknik Komputer.
            </p>
            <p>
              Saya memiliki keahlian mendalam dalam arsitektur data dan pengembangan full-stack. Sebagai seorang pendidik dan aktif menulis , saya berfokus pada berbagi ilmu untuk menjembatani teori sistem informasi dengan implementasi teknologi terkini kepada masyarakat luas.
            </p>
          </div>

          <div className="bg-light p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <FiBookOpen className="text-navy" /> Pendidikan
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-dark">Magister Komputer (M.Kom.)</h4>
                <p className="text-sm text-navy">Teknik Komputer</p>
                <p className="text-sm text-gray-500">Universitas Amikom Jogjakarta</p>
              </div>
              <div className="h-px bg-gray-200 w-full"></div>
              <div>
                <h4 className="font-medium text-dark">Sarjana Komputer (S.Kom.)</h4>
                <p className="text-sm text-navy">Sistem Informasi</p>
                <p className="text-sm text-gray-500">STMIK Palangkaraya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
