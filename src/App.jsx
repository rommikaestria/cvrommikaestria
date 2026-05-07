import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Books from './components/Books'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafc] text-[#1a202c]">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Experience />
        <Books />
      </main>
      <Footer />
    </div>
  )
}

export default App
