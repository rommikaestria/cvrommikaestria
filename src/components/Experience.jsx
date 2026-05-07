import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

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

        <div className="max-w-3xl mx-auto space-y-8 mb-24">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-sm text-navy dark:text-blue-400 z-10">
                  <FiBriefcase size={20} />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-px h-full bg-gray-200 dark:bg-gray-700 my-2"></div>
                )}
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex-1 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-dark dark:text-white">{exp.title}</h3>
                  <span className="text-sm font-medium text-navy dark:text-blue-300 bg-navy dark:bg-blue-900 bg-opacity-10 dark:bg-opacity-30 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                    {exp.year}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
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
