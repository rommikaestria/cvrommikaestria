import React, { useState, useEffect } from 'react';
import { FiCalendar, FiChevronRight, FiSun, FiTrendingUp } from 'react-icons/fi';

const Notes = () => {
  const [weatherTemp, setWeatherTemp] = useState('...');
  const [exchangeRate, setExchangeRate] = useState('...');

  useEffect(() => {
    // Ambil data cuaca realtime (Palangka Raya) menggunakan Open-Meteo API
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-2.21&longitude=113.92&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data && data.current_weather) {
          setWeatherTemp(`${Math.round(data.current_weather.temperature)}°C`);
        }
      })
      .catch(() => setWeatherTemp('31°C')); // Fallback jika gagal

    // Ambil data kurs realtime (USD ke IDR) menggunakan ExchangeRate-API
    fetch('https://open.er-api.com/v6/latest/USD')
      .then(res => res.json())
      .then(data => {
        if (data && data.rates && data.rates.IDR) {
          setExchangeRate(new Intl.NumberFormat('id-ID').format(Math.round(data.rates.IDR)));
        }
      })
      .catch(() => setExchangeRate('15.500')); // Fallback jika gagal
  }, []);

  return (
    <section id="notes" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Catatan & Perjalanan</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Kalau ada catatan harian nanti saya taruh disini
          </p>

          {/* Google Info Widgets */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Weather Widget */}
            <a
              href="https://www.google.com/search?q=cuaca+palangka+raya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <FiSun size={20} className="text-yellow-500" />
              <div className="text-left leading-tight">
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Palangka Raya</div>
                <div className="text-sm font-bold text-dark dark:text-white">{weatherTemp}</div>
              </div>
            </a>

            {/* Currency Widget */}
            <a
              href="https://www.google.com/search?q=usd+to+idr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="text-left leading-tight">
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">USD / IDR</div>
                <div className="text-sm font-bold text-dark dark:text-white flex items-center gap-1">
                  {exchangeRate} <FiTrendingUp size={14} className="text-green-500 stroke-[3]" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;
