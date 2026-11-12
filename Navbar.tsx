import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';
import { ToothLogo } from './ToothLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Dra. Viviane', href: '#dra-viviane' },
    { label: 'Nosso Time', href: '#nosso-time' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados Reais', href: '#resultados' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#localizacao' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Clean Single-Row Navbar without the top hours/tel bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3'
            : 'bg-white/95 backdrop-blur-xs border-b border-slate-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Brand Wordmark with Shiny White Tooth Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3 text-slate-950 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
            >
              {/* Shiny White Tooth with gleam */}
              <ToothLogo size="md" />

              <div className="flex flex-col">
                <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-slate-950 leading-tight group-hover:text-sky-700 transition-colors">
                  Dentista Guarujá Centro
                </span>
                <span className="text-xs font-black tracking-widest uppercase text-sky-600">
                  CERON · ODONTOLOGIA
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-sm font-bold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-sky-600 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action CTA */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-xs hover:shadow-sky-400/30 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden border-t border-slate-100 mt-3 pt-3 pb-4 space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2 text-sm font-bold text-slate-800 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-black text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
