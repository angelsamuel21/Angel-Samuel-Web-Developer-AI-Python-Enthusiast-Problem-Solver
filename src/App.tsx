import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100 bg-gray-900 min-h-screen font-sans">
      <Navbar />

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
