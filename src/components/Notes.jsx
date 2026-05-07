import React from 'react';
import { FiCalendar, FiChevronRight } from 'react-icons/fi';

const Notes = () => {
  return (
    <section id="notes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-2">Catatan & Perjalanan</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kalau ada catatan harian nanti saya taruh disini
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notes;
