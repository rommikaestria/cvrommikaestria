import React from 'react';
import { FiCalendar, FiChevronRight } from 'react-icons/fi';

const Notes = () => {
  const notesData = [
    {
      category: "Berita & Kegiatan",
      date: "15 Mei 2026",
      title: "Riset Pendanaan RIIM Berjalan Lancar",
      description: "Progress riset pengembangan AI untuk pemantauan dan pelestarian hutan di Kalimantan Tengah menunjukkan hasil yang positif. Kami baru saja menyelesaikan tahap pengumpulan data tahap pertama di lapangan bersama tim ahli.",
      image: "https://placehold.co/600x400/0f172a/ffffff?text=Riset+RIIM"
    },
    {
      category: "Perjalanan Hidup",
      date: "10 April 2026",
      title: "Dedikasi untuk Pendidikan di Kalteng",
      description: "Lebih dari satu dekade mengabdi sebagai dosen, melihat para mahasiswa berkembang menjadi praktisi IT yang handal adalah pencapaian terbesar dalam hidup saya. Mari terus berkarya untuk daerah kita tercinta.",
      image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Pendidikan"
    },
    {
      category: "Kegiatan",
      date: "20 Maret 2026",
      title: "Pelatihan Digital untuk Penyuluh Agama",
      description: "Sangat senang bisa berbagi ilmu editing video dan pemanfaatan media digital bersama para penyuluh agama Islam di Kota Palangka Raya. Antusiasme peserta sangat luar biasa!",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Pelatihan"
    }
  ];

  return (
    <section id="notes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-dark mb-2">Catatan & Perjalanan</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulan berita terkini, dokumentasi kegiatan, serta cerita perjalanan karir dan kehidupan saya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notesData.map((note, index) => (
            <div key={index} className="bg-light rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={note.image} 
                  alt={note.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-2">
                  <FiCalendar size={12} /> {note.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-xs font-bold text-navy uppercase tracking-wider mb-2 block">{note.category}</span>
                  <h3 className="text-xl font-bold text-dark leading-snug mb-3 line-clamp-2">
                    {note.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-4 leading-relaxed">
                    {note.description}
                  </p>
                </div>
                
                <a href="#" className="inline-flex items-center text-sm font-bold text-navy hover:text-blue-700 transition-colors group-hover:gap-2 gap-1 w-fit">
                  Baca Selengkapnya <FiChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-navy text-navy font-bold rounded-xl hover:bg-navy hover:text-white transition-all shadow-sm hover:shadow-md">
            Lihat Semua Catatan
          </button>
        </div>

      </div>
    </section>
  );
};

export default Notes;
