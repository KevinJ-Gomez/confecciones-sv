"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

// --- FÍSICAS DE ALTA PRECISIÓN ---
const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 30, staggerChildren: 0.04, delayChildren: 0.02 },
  },
  exit: { height: 0, opacity: 0, transition: { stiffness: 400, damping: 30, staggerChildren: 0.02, staggerDirection: -1 } },
};

const hiloVariants = {
  hidden: { pathLength: 0, opacity: 0, strokeDasharray: "4 6" },
  visible: { pathLength: 1, opacity: 1, strokeDasharray: "4 6", transition: { duration: 0.5, ease: "easeOut" } },
  broken: { 
    pathLength: 0, 
    opacity: 0, 
    strokeDasharray: "1 40", 
    transition: { duration: 0.25, ease: "circIn" } 
  },
  exit: { pathLength: 0, opacity: 0, transition: { duration: 0.2 } }
};

const tagVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 20 } },
  exit: { opacity: 0, x: 5, transition: { duration: 0.1 } }
};

export default function Calculadora({ dict }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const [selectedPrenda, setSelectedPrenda] = useState(null);
  
  // Reloj simulado para el metadato (Toque técnico)
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" }));
  }, [isOpen]);

  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  function handleMouseMove(event) {
    if(!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const handleSelect = (prenda) => {
    setIsBroken(true);
    setSelectedPrenda(prenda);
    setTimeout(() => {
      setIsOpen(false);
      setIsBroken(false);
    }, 300);
  };

  const prendasArray = ["Pantalón", "Camisa", "Vestido"];

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full flex justify-center py-20 relative"
      style={{ perspective: "2000px" }}
    >
      <motion.div 
        style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm relative z-10"
      >
        {/* DISEÑO NEO-EDITORIAL: Fondo de Papel Milimetrado (Blueprint) y Cristal */}
        <div className="absolute inset-0 bg-[#FFF3DD]/90 backdrop-blur-xl border border-dorado/30 shadow-[0_30px_60px_-15px_rgba(45,41,38,0.3)] z-0"
             style={{ 
               backgroundImage: `linear-gradient(to right, rgba(197, 160, 89, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 160, 89, 0.1) 1px, transparent 1px)`,
               backgroundSize: '16px 16px' 
             }} 
        />

        <div className="relative z-10 p-8">
          {/* MICRO-TIPOGRAFÍA Y METADATOS TÉCNICOS INTERNACIONALIZADOS */}
          <div className="flex justify-between items-center mb-6 text-[10px] font-mono text-dorado tracking-widest uppercase border-b border-dorado/20 pb-2">
            <span>{dict.step}</span>
            <span>{dict.timeLabel} {time}</span>
            <span className={selectedPrenda ? "text-green-600" : "text-marron-oscuro"}>
              {selectedPrenda ? dict.ok : dict.awaiting}
            </span>
          </div>

          <h2 className="text-marron-oscuro text-2xl font-serif tracking-tight mb-6 relative">
            {dict.question}
            {/* Pequeño acento de luz */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-1 h-6 bg-dorado shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
          </h2>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group w-full text-left text-sm mb-4 cursor-pointer flex justify-between items-center outline-none relative z-20 bg-white/50 p-4 border border-dorado/20 hover:border-dorado transition-all duration-300 shadow-sm"
            aria-expanded={isOpen}
            aria-controls="menu-prendas"
          >
            <span className={`uppercase tracking-widest text-xs font-bold ${selectedPrenda ? 'text-marron-oscuro' : 'text-marron-oscuro/50'}`}>
              {selectedPrenda ? selectedPrenda : dict.placeholder}
            </span>
            <motion.span 
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-xs text-dorado"
            >
              ▼
            </motion.span>
          </button>

          <div className="relative">
            <AnimatePresence>
              {isOpen && (
                <svg className="absolute left-6 top-0 w-4 h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 10 100" preserveAspectRatio="none">
                  <circle cx="5" cy="0" r="3" fill="#C5A059" style={{ filter: "drop-shadow(0px 0px 4px rgba(197,160,89,0.8))" }} />
                  <motion.path
                    d="M 5 0 L 5 100"
                    stroke="#C5A059"
                    strokeWidth="1.5"
                    fill="transparent"
                    variants={hiloVariants}
                    initial="hidden"
                    animate={isBroken ? "broken" : "visible"}
                    exit="exit"
                    // EL GLOW DEL HILO
                    style={{ filter: "drop-shadow(0px 0px 3px rgba(197,160,89,0.6))" }}
                  />
                </svg>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id="menu-prendas"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="overflow-hidden pl-12 relative z-10"
                >
                  <div className="flex flex-col gap-2 pb-4 pt-4">
                    {prendasArray.map((prenda) => (
                      <motion.button 
                        key={prenda}
                        variants={tagVariants}
                        onClick={() => handleSelect(prenda)}
                        className="group relative w-full text-left px-4 py-3 outline-none flex items-center justify-between overflow-hidden"
                      >
                        {/* Fondo que aparece desde la izquierda */}
                        <div className="absolute inset-0 bg-marron-oscuro -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        
                        <span className="relative z-10 uppercase tracking-widest text-xs font-semibold text-marron-oscuro group-hover:text-crema transition-colors duration-300">
                          {prenda}
                        </span>
                        
                        {/* Flecha magnética que entra por la derecha */}
                        <span className="relative z-10 text-dorado opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out font-mono">
                          →
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}