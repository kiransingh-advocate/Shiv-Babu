import React, { useState, useEffect } from 'react';
import { Menu, X, Gavel, Globe, Phone } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.services, href: "#services" },
    { name: t.students, href: "#students" },
    { name: t.status, href: "#status" },
    { name: t.contact, href: "#footer" },
  ];

  // Remove contact from desktop links so CTA and links don't wrap
  const desktopLinks = navLinks.filter(link => link.name !== t.contact);

  const phoneNumber = '+917499165632';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-law-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={scrollToTop}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToTop(); } }}
          >
            <Gavel className="h-10 w-10 md:h-12 md:w-12 text-law-gold" />
            <span className={`font-serif font-bold text-2xl md:text-3xl ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              Prayagraj<span className="text-law-gold">Legal</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 flex-nowrap">
              {desktopLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-lg font-bold transition-colors duration-200 hover:text-law-gold ${scrolled ? 'text-gray-300' : 'text-white drop-shadow-md'} whitespace-nowrap`}
                >
                  {link.name}
                </a>
              ))}
              
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-white border border-white/30 transition-all"
              >
                <Globe size={16} />
                <span className="text-xs font-bold uppercase">{lang === 'en' ? 'HI' : 'EN'}</span>
              </button>

              {/* Call Now CTA - desktop */}
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call now"
                className="ml-3 hidden md:inline-flex items-center relative overflow-visible px-4 py-2 rounded-full bg-law-gold text-black font-bold shadow-lg hover:scale-105 transform transition-all"
              >
                <span className="absolute -inset-1 rounded-full bg-law-gold/40 opacity-80 animate-ping"></span>
                <Phone size={16} className="mr-2 z-10" />
                <span className="z-10">Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-law-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-law-gold block px-3 py-2 rounded-md text-lg font-bold"
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full text-left flex items-center gap-2 text-gray-300 hover:text-law-gold px-3 py-2 rounded-md text-lg font-bold"
              >
                <Globe size={16} />
                <span>{lang === 'en' ? 'Switch to Hindi' : 'Switch to English'}</span>
              </button>
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call now"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-law-gold text-black font-bold px-4 py-2 rounded-full shadow-md"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;