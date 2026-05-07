import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Notes from './components/Notes'
import Experience from './components/Experience'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Notes />
        <Experience />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
