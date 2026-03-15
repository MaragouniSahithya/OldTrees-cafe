import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Offers', href: '#offers' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80, // Offset for fixed navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/95 backdrop-blur-md border-b border-gold/20 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
        >
          <span className="text-2xl">🌳</span>
          <span className="font-serif font-bold text-2xl tracking-wide">OTC</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-cream/80 hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={(e) => handleScrollTo(e, '#reservations')}
            className="glass-button text-sm py-2 px-5"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark/98 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-cream hover:text-gold p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-2xl font-serif text-cream hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={(e) => handleScrollTo(e, '#reservations')}
          className="glass-button text-lg mt-4 px-8 py-4"
        >
          Book a Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
