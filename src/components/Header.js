"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// =========================================================================
// 🎨 COMPONENTES DE BANDERAS VECTORIALES (Inmunes al sistema operativo)
// =========================================================================
const FlagUK = () => (
  <svg viewBox="0 0 60 30" className="w-5 h-auto rounded-sm shadow-sm" preserveAspectRatio="none">
    <clipPath id="uk-clip">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="uk-cross">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-cross)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 750 500" className="w-5 h-auto rounded-sm shadow-sm" preserveAspectRatio="none">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect width="750" height="250" y="125" fill="#ffc400"/>
    {/* Escudo simplificado para que no pese el código a este tamaño microscópico */}
    <circle cx="250" cy="250" r="50" fill="#c60b1e" opacity="0.8" />
  </svg>
);

export default function Header({ lang = 'es' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: lang === 'es' ? 'Inicio' : 'Home' },
    { id: 'servicios', label: lang === 'es' ? 'Servicios' : 'Services' },
    { id: 'presupuesto', label: lang === 'es' ? 'Presupuesto' : 'Estimate' },
    { id: 'contacto', label: lang === 'es' ? 'Contacto' : 'Contact' }, 
  ];

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const isEs = lang === 'es';

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-[#2D2926]/5 shadow-sm py-0' 
          : 'bg-white/80 backdrop-blur-md border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between md:px-6">
        
        <div className="flex items-center gap-6 md:gap-10">
          <Link href={`/${lang}`} onClick={(e) => handleScrollClick(e, 'inicio')} className="hover:opacity-80 transition-opacity flex items-center h-full outline-none">
            <img 
              src="/assets/branding/logo-completo.svg" 
              alt="Confecciones SV" 
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:block w-px h-7 bg-[#2D2926]/20"></div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={(e) => handleScrollClick(e, link.id)}
                className="text-xs md:text-sm font-mono font-semibold tracking-[0.15em] uppercase text-[#2D2926] hover:text-[#C5A059] transition-colors outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex justify-end items-center">
          {/* ======================================================= */}
          {/* INTERRUPTOR DE IDIOMA ANIMADO CON BANDERAS VECTORIALES */}
          {/* ======================================================= */}
          <Link 
            href={`/${isEs ? 'en' : 'es'}`} 
            aria-label="Cambiar idioma"
            // Ampliamos un poco el ancho a w-20 para que las banderas respiren
            className={`relative flex items-center w-20 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 outline-none ${
              isEs ? 'bg-[#C5A059]/30' : 'bg-[#2D2926]/10'
            }`}
          >
            {/* Contenedor de las banderas de fondo */}
            <div className="absolute w-full flex justify-between px-[6px] left-0 pointer-events-none">
              <div className="opacity-80"><FlagUK /></div>
              <div className="opacity-80"><FlagES /></div>
            </div>
            
            {/* Círculo animado que tapa una bandera y deja ver la otra */}
            <motion.div 
              className="w-8 h-6 bg-white rounded-full shadow-md z-10 flex items-center justify-center relative border border-gray-100"
              // Si es 'es' (true), el círculo se mueve 40px a la derecha para tapar la bandera ES y mostrar EN
              animate={{ x: isEs ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {/* Mostramos el texto del idioma activo en el centro de la pastilla */}
              <span className="text-[10px] font-bold text-[#2D2926] mt-[1px]">
                {isEs ? 'ES' : 'EN'}
              </span>
            </motion.div>
          </Link>
        </div>

      </div>
    </header>
  );
}
