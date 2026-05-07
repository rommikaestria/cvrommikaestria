import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Experience = () => {
  const experiences = [
    {
      title: "Dosen & Peneliti",
      company: "STMIK Palangkaraya",
      year: "2011 - Sekarang",
      description: "Menyusun dan mengajar mata kuliah inti (Web Technology, Database Systems, Network Security). Aktif dalam pengabdian masyarakat."
    },
    {
      title: "Penerima Pendanaan RIIM Kompetisi",
      company: "Riset Nasional",
      year: "2026",
      description: "Riset pengembangan AI untuk pemantauan dan pelestarian hutan di Kalimantan Tengah."
    },
    {
      title: "Ahli Akademik Evaluasi TPPS Kalteng",
      company: "Pemerintah Provinsi Kalteng",
      year: "2025",
      description: "Narasumber pemodelan matematika untuk dinamika stunting di Kalimantan Tengah."
    },
    {
      title: "Juri & Penguji Ahli",
      company: "Tingkat Provinsi & Sekolah",
      year: "2025",
      description: "Juri LKS SMK Tingkat Provinsi Kalteng (2025), Penguji Ahli UKK di SMKN 1 Palangka Raya."
    },
    {
      title: "Instruktur Pelatihan Digital",
      company: "Berbagai Instansi",
      year: "Terkini",
      description: "Pelatihan Canva (MIN 1 Palangka Raya), Pelatihan Editing Video untuk Penyuluh Agama Islam Kota Palangka Raya."
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "NoSQL", "PHP", "Javascript"]
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "Flutter", "Streamlit", "Laravel"]
    },
    {
      title: "Tools & Ecosystem",
      skills: ["VSCode", "Excel / Google Sheet", "MongoDB", "Big Data Integration", "Cloud Computing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Pengalaman Kerja Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Pengalaman Kerja</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto"></div>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-navy dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-30 rounded-2xl flex items-center justify-center text-navy dark:text-blue-400 flex-shrink-0">
                  <FiBriefcase size={28} />
                </div>
                <span className="text-sm font-bold text-navy dark:text-blue-300 bg-navy dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-30 px-4 py-2 rounded-full whitespace-nowrap ml-4">
                  {exp.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 leading-tight">{exp.title}</h3>
              <p className="text-sm text-navy dark:text-blue-400 font-bold mb-6 uppercase tracking-wider">{exp.company}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base flex-grow">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View (Swiper Cards) */}
        <div className="md:hidden max-w-sm sm:max-w-md mx-auto mb-24 px-4 sm:px-0">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full h-auto"
          >
            {experiences.map((exp) => (
              <SwiperSlide key={exp.title} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-navy dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-30 rounded-2xl flex items-center justify-center text-navy dark:text-blue-400 flex-shrink-0">
                    <FiBriefcase size={28} />
                  </div>
                  <span className="text-sm font-bold text-navy dark:text-blue-300 bg-navy dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-30 px-4 py-2 rounded-full whitespace-nowrap ml-4">
                    {exp.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2 leading-tight">{exp.title}</h3>
                <p className="text-sm text-navy dark:text-blue-400 font-bold mb-6 uppercase tracking-wider">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">{exp.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Keahlian Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Keahlian</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-light dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:border-navy dark:hover:border-blue-400 hover:text-navy dark:hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
