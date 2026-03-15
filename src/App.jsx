import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Offers from './components/Offers'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark min-h-screen text-cream overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Offers />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
