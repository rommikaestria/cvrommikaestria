import React, { useState, useEffect, useRef } from 'react';
import { FiSun, FiTrendingUp } from 'react-icons/fi';

const Notes = () => {
  const [weatherTemp, setWeatherTemp] = useState('...');
  const [exchangeRate, setExchangeRate] = useState('...');
  const [isRefreshingWeather, setIsRefreshingWeather] = useState(false);
  const [isRefreshingKurs, setIsRefreshingKurs] = useState(false);

  // -- Notes App State --
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, id: null, type: 'note' });
  const [selectedColor, setSelectedColor] = useState('bg-white');
  const [noteTitle, setNoteTitle] = useState('');

  const noteBodyRef = useRef(null);

  const fetchWeather = async () => {
    setIsRefreshingWeather(true);
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-2.21&longitude=113.92&current_weather=true', { cache: 'no-store' });
      const data = await res.json();
      if (data && data.current_weather) {
        setWeatherTemp(`${Math.round(data.current_weather.temperature)}°C`);
      }
    } catch (err) {
      setWeatherTemp('31°C');
    } finally {
      setIsRefreshingWeather(false);
    }
  };

  const fetchKurs = async () => {
    setIsRefreshingKurs(true);
    try {
      const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD', { cache: 'no-store' });
      const data = await res.json();
      if (data && data.data && data.data.rates && data.data.rates.IDR) {
        setExchangeRate(new Intl.NumberFormat('id-ID').format(Math.round(data.data.rates.IDR)));
      }
    } catch (err) {
      // Fallback API if coinbase fails
      try {
        const res2 = await fetch('https://open.er-api.com/v6/latest/USD', { cache: 'no-store' });
        const data2 = await res2.json();
        if (data2 && data2.rates && data2.rates.IDR) {
          setExchangeRate(new Intl.NumberFormat('id-ID').format(Math.round(data2.rates.IDR)));
        }
      } catch (err2) {
        setExchangeRate('15.500');
      }
    } finally {
      setIsRefreshingKurs(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    fetchKurs();

    // Initialize notes from local storage
    const savedNotes = localStorage.getItem('sakuNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const openModal = (id = null, type = 'note') => {
    if (id) {
      const note = notes.find((n) => n.id === id);
      if (note) {
        setNoteTitle(note.title);
        setSelectedColor(note.color);
        setModalConfig({ isOpen: true, id, type: 'note' });
        setTimeout(() => {
          if (noteBodyRef.current) {
            noteBodyRef.current.innerHTML = note.body;
            noteBodyRef.current.focus();
          }
        }, 10);
      }
    } else {
      setNoteTitle('');
      setSelectedColor('bg-white');
      setModalConfig({ isOpen: true, id: null, type });
      setTimeout(() => {
        if (noteBodyRef.current) {
          noteBodyRef.current.innerHTML = '';
          noteBodyRef.current.focus();
          if (type === 'todo') {
            document.execCommand('insertUnorderedList', false, null);
          }
        }
      }, 10);
    }
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, id: null, type: 'note' });
    setNoteTitle('');
    if (noteBodyRef.current) noteBodyRef.current.innerHTML = '';
  };

  const saveNote = () => {
    if (!noteBodyRef.current) return;

    const lists = noteBodyRef.current.querySelectorAll('ul');
    lists.forEach(ul => {
      const tempItems = Array.from(ul.children);
      tempItems.sort((a, b) => {
        const aDone = a.classList.contains('done');
        const bDone = b.classList.contains('done');
        return aDone - bDone;
      });
      tempItems.forEach(item => ul.appendChild(item));
    });

    const body = noteBodyRef.current.innerHTML.trim();
    const title = noteTitle.trim();

    if (!title && (body === '' || body === '<br>' || body === '<ul><li><br></li></ul>' || body === '<ul><li></li></ul>')) {
      closeModal();
      return;
    }

    const noteData = {
      id: modalConfig.id || Date.now().toString(),
      title,
      body,
      color: selectedColor,
      pinned: modalConfig.id ? (notes.find(n => n.id === modalConfig.id)?.pinned || false) : false,
      updatedAt: new Date().toISOString(),
    };

    let newNotes;
    if (modalConfig.id) {
      newNotes = notes.map(n => n.id === modalConfig.id ? noteData : n);
    } else {
      newNotes = [noteData, ...notes];
    }

    setNotes(newNotes);
    localStorage.setItem('sakuNotes', JSON.stringify(newNotes));
    closeModal();
  };

  const deleteNote = (id) => {
    if (window.confirm('Hapus item ini?')) {
      const newNotes = notes.filter(n => n.id !== id);
      setNotes(newNotes);
      localStorage.setItem('sakuNotes', JSON.stringify(newNotes));
    }
  };

  const togglePin = (id) => {
    const newNotes = notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n);
    setNotes(newNotes);
    localStorage.setItem('sakuNotes', JSON.stringify(newNotes));
  };

  const formatDoc = (cmd) => {
    document.execCommand(cmd, false, null);
    if (noteBodyRef.current) noteBodyRef.current.focus();
  };

  const handleEditorClick = (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('done');
      const ul = e.target.parentElement;
      const tempItems = Array.from(ul.children);
      tempItems.sort((a, b) => {
        const aDone = a.classList.contains('done');
        const bDone = b.classList.contains('done');
        return aDone - bDone;
      });
      tempItems.forEach(item => ul.appendChild(item));
    }
  };

  const handleGridClick = (e, noteId) => {
    let target = e.target;
    while (target && target.tagName !== 'LI' && target !== e.currentTarget) {
      if (target.tagName === 'BUTTON' || target.tagName === 'A') return;
      target = target.parentNode;
    }

    if (target && target.tagName === 'LI') {
      e.stopPropagation();
      const newNotes = [...notes];
      const noteIndex = newNotes.findIndex(n => n.id === noteId);
      if (noteIndex === -1) return;

      const parentUl = target.parentNode;
      const items = Array.from(parentUl.children);
      const itemIndex = items.indexOf(target);

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newNotes[noteIndex].body;
      const targetLi = tempDiv.querySelectorAll('li')[itemIndex];

      if (targetLi) {
        targetLi.classList.toggle('done');
        const ul = targetLi.parentElement;
        const tempItems = Array.from(ul.children);
        tempItems.sort((a, b) => {
          const aDone = a.classList.contains('done');
          const bDone = b.classList.contains('done');
          return aDone - bDone;
        });
        tempItems.forEach(item => ul.appendChild(item));

        newNotes[noteIndex].body = tempDiv.innerHTML;
        newNotes[noteIndex].updatedAt = new Date().toISOString();
        setNotes(newNotes);
        localStorage.setItem('sakuNotes', JSON.stringify(newNotes));
      }
    }
  };

  const filteredNotes = notes.filter(n =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.body.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const pinnedNotes = filteredNotes.filter(n => n.pinned);
  const othersNotes = filteredNotes.filter(n => !n.pinned);

  return (
    <section id="notes" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <style>{`
        .note-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .note-card:hover {
          transform: translateY(-4px);
        }
        .editor-content:empty:before {
          content: attr(data-placeholder);
          color: #cbd5e1;
          cursor: text;
        }
        .note-content ul,
        .editor-content ul {
          list-style-type: none;
          padding-left: 0;
        }
        .note-content li,
        .editor-content li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
          transition: all 0.3s ease;
          padding: 4px;
          border-radius: 6px;
        }
        .note-content li::before,
        .editor-content li::before {
          content: '☐';
          color: #6366f1;
          font-weight: bold;
          flex-shrink: 0;
          cursor: pointer;
          font-size: 1.1em;
          transition: transform 0.2s;
        }
        .note-content li.done,
        .editor-content li.done {
          opacity: 0.6;
          text-decoration: line-through;
          color: #94a3b8;
        }
        .note-content li.done::before,
        .editor-content li.done::before {
          content: '☑';
          color: #10b981;
          text-decoration: none !important;
          display: inline-block;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Catatan & Perjalanan</h2>
          <div className="w-20 h-1 bg-navy rounded mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Kalau ada catatan harian nanti saya taruh disini
          </p>

          {/* Info Widgets (Self-Refreshing) */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Weather Widget */}
            <button
              onClick={fetchWeather}
              disabled={isRefreshingWeather}
              title="Klik untuk perbarui cuaca"
              className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 disabled:opacity-70 active:scale-95"
            >
              <FiSun size={20} className={`text-yellow-500 ${isRefreshingWeather ? 'animate-spin' : ''}`} />
              <div className="text-left leading-tight">
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Palangka Raya</div>
                <div className="text-sm font-bold text-dark dark:text-white">
                  {isRefreshingWeather ? '...' : weatherTemp}
                </div>
              </div>
            </button>

            {/* Currency Widget */}
            <button
              onClick={fetchKurs}
              disabled={isRefreshingKurs}
              title="Klik untuk perbarui kurs"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 disabled:opacity-70 active:scale-95"
            >
              <div className="text-left leading-tight">
                <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">USD / IDR</div>
                <div className="text-sm font-bold text-dark dark:text-white flex items-center gap-1">
                  {isRefreshingKurs ? '...' : exchangeRate} 
                  <FiTrendingUp size={14} className={`text-green-500 stroke-[3] ${isRefreshingKurs ? 'animate-pulse' : ''}`} />
                </div>
              </div>
            </button>
          </div>

          {/* SakuCatat App Section */}
          <div className="mt-16 w-full max-w-6xl mx-auto border-t border-gray-100 dark:border-gray-800 pt-10 text-left">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100">

              {/* App Header/Nav */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4">
                <div className="flex items-center order-1">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                    CatatanSaku
                  </h3>
                </div>

                <div className="relative w-full sm:flex-1 sm:max-w-md order-3 sm:order-2">
                  <input
                    type="text"
                    placeholder="Cari catatan atau tugas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700/50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400"
                  />
                  <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <div className="relative w-auto z-10 flex justify-end order-2 sm:order-3">
                  <button
                    onClick={() => openModal(null, 'note')}
                    title="Tambah Catatan"
                    className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-6 lg:p-8 min-h-[400px]">
                {pinnedNotes.length > 0 && (
                  <div className="mb-10 animate-fade-in">
                    <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21v-6m-3-4l-2 2h10l-2-2m-6 0V7a2 2 0 012-2h2a2 2 0 012 2v4m-6 0h6"></path>
                      </svg>
                      Disematkan
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pinnedNotes.map(note => (
                        <NoteCard key={note.id} note={note} openModal={openModal} togglePin={togglePin} deleteNote={deleteNote} handleGridClick={handleGridClick} />
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  {(othersNotes.length > 0 || pinnedNotes.length > 0) && (
                    <h2 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">
                      Semua Catatan
                    </h2>
                  )}

                  {othersNotes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {othersNotes.map(note => (
                        <NoteCard key={note.id} note={note} openModal={openModal} togglePin={togglePin} deleteNote={deleteNote} handleGridClick={handleGridClick} />
                      ))}
                    </div>
                  ) : pinnedNotes.length === 0 ? (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <p className="text-lg font-medium text-slate-600 dark:text-slate-400">Belum ada catatan</p>
                      <p className="text-sm">Gunakan tombol 'Tambah' untuk memulai.</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay & Content */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in text-left">
          <div className={`w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${selectedColor === 'bg-white' ? 'bg-white dark:bg-slate-800' : selectedColor}`}>
            <div className="p-6">
              <div className="flex items-center gap-1 mb-4 p-1 bg-white/50 dark:bg-slate-900/50 rounded-lg w-fit border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                <button onClick={() => formatDoc('bold')} title="Tebal" className="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300 font-bold">B</button>
                <button onClick={() => formatDoc('italic')} title="Miring" className="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300 italic">I</button>
                <button onClick={() => formatDoc('underline')} title="Garis Bawah" className="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300 underline">U</button>
                <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                <button onClick={() => formatDoc('insertUnorderedList')} title="To-do List" className="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-md transition-all text-slate-600 dark:text-slate-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </button>
              </div>

              <input
                type="text"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder="Judul"
                className={`w-full text-xl font-bold border-none focus:ring-0 mb-2 p-0 bg-transparent placeholder-slate-400 ${selectedColor === 'bg-white' ? 'text-slate-800 dark:text-white' : 'text-slate-800'}`}
              />

              <div
                ref={noteBodyRef}
                contentEditable="true"
                data-placeholder="Tuliskan sesuatu..."
                onClick={handleEditorClick}
                className={`editor-content w-full min-h-[200px] max-h-[400px] overflow-y-auto border-none focus:ring-0 p-0 outline-none ${selectedColor === 'bg-white' ? 'text-slate-600 dark:text-slate-300' : 'text-slate-600'}`}
              ></div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Tema:</span>
                  <div className="flex gap-1.5">
                    {['bg-white', 'bg-rose-50', 'bg-amber-50', 'bg-emerald-50', 'bg-sky-50', 'bg-violet-50'].map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-6 h-6 rounded-full border ${color === 'bg-white' ? 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600' : color + ' border-transparent'} ${selectedColor === color ? 'ring-2 ring-indigo-400 ring-offset-2 dark:ring-offset-slate-800' : ''} transition-all`}
                      ></button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button onClick={closeModal} className="flex-1 sm:flex-none px-6 py-2 rounded-xl text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Batal</button>
                  <button onClick={saveNote} className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all">Simpan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const NoteCard = ({ note, openModal, togglePin, deleteNote, handleGridClick }) => {
  const isTodo = note.body.includes('<li');
  const date = new Date(note.updatedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });

  const bgClass = note.color === 'bg-white' ? 'bg-white dark:bg-slate-800' : note.color;
  const textClass = note.color === 'bg-white' ? 'text-slate-800 dark:text-slate-100' : 'text-slate-800';
  const subTextClass = note.color === 'bg-white' ? 'text-slate-600 dark:text-slate-300' : 'text-slate-600';

  return (
    <div
      onClick={() => openModal(note.id)}
      className={`note-card ${bgClass} p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md flex flex-col h-fit group animate-fade-in relative text-left`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {isTodo && <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] font-bold rounded-full uppercase">Todo</span>}
          <h3 className={`font-bold ${textClass} line-clamp-1`}>{note.title || 'Tanpa Judul'}</h3>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); togglePin(note.id); }}
          className={`p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${note.pinned ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}
        >
          <svg className="w-4 h-4" fill={note.pinned ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21v-6m-3-4l-2 2h10l-2-2m-6 0V7a2 2 0 012-2h2a2 2 0 012 2v4m-6 0h6"></path>
          </svg>
        </button>
      </div>
      <div
        className={`note-content text-sm ${subTextClass} mb-6 line-clamp-6`}
        onClick={(e) => handleGridClick(e, note.id)}
        dangerouslySetInnerHTML={{ __html: note.body }}
      />
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{date}</span>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
            className="p-2 bg-white/80 dark:bg-slate-700/80 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl shadow-sm text-rose-500 transition-all border border-black/5 dark:border-white/5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;

