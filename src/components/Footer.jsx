import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080d08] py-12 border-t border-gold/20 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Logo Area */}
        <div className="mb-8 flex flex-col items-center">
          <a href="#home" className="flex items-center gap-3 text-cream hover:text-gold transition-colors mb-3">
            <span className="text-3xl">🌳</span>
            <span className="font-serif font-bold text-3xl tracking-wide">OTC</span>
          </a>
          <p className="font-serif italic text-gold text-lg">"The Ambience of a Childhood Home"</p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium text-cream/70">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#offers" className="hover:text-gold transition-colors">Offers</a>
          <a href="#reservations" className="hover:text-gold transition-colors">Reservations</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>

        {/* Social Bar */}
        <div className="flex justify-center mb-10">
          <a 
            href="https://instagram.com/otc.kompally" 
            target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white transition-all hover:scale-110 shadow-lg"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-xs text-cream/40 flex flex-col gap-2">
          <p>&copy; {new Date().getFullYear()} OTC Old Trees Cafe, Kompally, Hyderabad.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
