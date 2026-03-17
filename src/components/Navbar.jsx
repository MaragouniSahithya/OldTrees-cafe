import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { createPortal } from 'react-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'menu', 'gallery', 'offers', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection('#' + current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

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
      window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
    }
  };

  // ✅ THE FIX: Mobile menu rendered via Portal directly into document.body
  // This escapes the <nav> stacking context entirely, so z-index works correctly
  // no matter where you are on the page
  const MobileMenu = () => createPortal(
    <div
      className={`fixed inset-0 bg-dark/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8 overflow-y-auto py-20 px-6 ${
        isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ zIndex: 99999 }}
    >
      {/* Close button */}
      <button
        className="absolute top-6 right-6 text-cream hover:text-gold p-2 transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      {/* Logo in menu */}
      <div className="absolute top-5 left-6 flex items-center gap-2 text-cream">
        <span className="text-2xl">🌳</span>
        <span className="font-serif font-bold text-xl tracking-wide">OTC</span>
      </div>

      {/* Nav links */}
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleScrollTo(e, link.href)}
          className={`text-3xl font-serif transition-colors py-2 ${
            activeSection === link.href ? 'text-gold' : 'text-cream hover:text-gold'
          }`}
        >
          {link.name}
        </a>
      ))}

      {/* Book a Table CTA */}
      <button
        onClick={(e) => handleScrollTo(e, '#reservations')}
        className="glass-button text-lg mt-6 px-10 py-4 w-full max-w-xs text-center min-h-[56px]"
      >
        Book a Table
      </button>
    </div>,
    document.body  // ← Rendered directly into <body>, outside any stacking context
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
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
                className={`text-sm font-medium transition-colors relative group ${
                  activeSection === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
            <button
              onClick={(e) => handleScrollTo(e, '#reservations')}
              className="glass-button text-sm py-2 px-5"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu rendered via Portal — outside nav, directly in body */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
