"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const step1Variants = {
  active: { z: 0, scale: 1, opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 25 } },
  background: { z: -150, scale: 0.9, opacity: 0.4, y: -40, filter: "blur(4px)", transition: { type: "spring", stiffness: 300, damping: 25 } }
};

const step2Variants = {
  hidden: { z: 200, y: 100, opacity: 0 },
  visible: { z: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 } },
  exit: { z: 200, opacity: 0, transition: { duration: 0.2 } }
};

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { type: "spring", stiffness: 500, damping: 30, staggerChildren: 0.05, delayChildren: 0.02 } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 20 } }
};

export default function Calculadora({ dict }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedPrenda, setSelectedPrenda] = useState(null);
  
  // NUEVO ESTADO: Almacena el servicio elegido
  const [selectedService, setSelectedService] = useState(null);

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

  const handleSelectPrenda = (prendaObj) => {
    setSelectedPrenda(prendaObj);
    setSelectedService(null); // Reseteamos el servicio si cambia de prenda
    setIsOpen(false);
    setTimeout(() => setCurrentStep(2), 200);
  };

  const handleSelectService = (serviceObj) => {
    setSelectedService(serviceObj);
    // En el próximo hito, esto disparará el Paso 3 (El Presupuesto Final)
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="w-full flex justify-center py-20 relative h-[700px]"
      style={{ perspective: "2000px" }}
    >
      <motion.div 
        style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm relative z-10 flex justify-center items-center"
      >
        
        {/* ======================================= */}
        {/* PASO 1: TARJETA CLARA (Prendas)         */}
        {/* ======================================= */}
        <motion.div variants={step1Variants} animate={currentStep === 1 ? "active" : "background"} className="absolute w-full">
          <div className="bg-[#FAF7F2] shadow-[0_40px_80px_-20px_rgba(45,41,38,0.2)] rounded-sm p-1.5 relative overflow-hidden">
            <div className="border-[1.5px] border-dashed border-dorado/40 p-8 relative h-full">
              
              <div className="flex justify-between items-center mb-8 text-[9px] font-mono tracking-[0.2em] text-marron-oscuro/60 uppercase">
                <span>{dict.step}</span>
                <span className={`font-bold ${selectedPrenda ? "text-[#4A5D23]" : "text-dorado"}`}>
                  {selectedPrenda ? dict.ok : dict.awaiting}
                </span>
              </div>

              <h2 className="text-marron-oscuro text-4xl font-serif leading-none tracking-tight mb-8">
                {dict.question}
              </h2>
              
              <button onClick={() => currentStep === 1 && setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-center outline-none border-b border-marron-oscuro/20 pb-3 hover:border-dorado transition-colors group">
                <span className={`text-sm font-light uppercase tracking-widest ${selectedPrenda ? 'text-marron-oscuro font-medium' : 'text-marron-oscuro/40'}`}>
                  {selectedPrenda ? selectedPrenda.label : dict.placeholder}
                </span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-[10px] text-dorado group-hover:text-marron-oscuro transition-colors">▼</motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="overflow-hidden relative z-10 mt-4">
                    <div className="flex flex-col gap-1">
                      {dict.items.map((prenda) => (
                        <motion.button key={prenda.id} variants={tagVariants} onClick={() => handleSelectPrenda(prenda)} className="group relative flex items-center w-full text-left px-2 py-3 outline-none">
                          <span className="absolute left-0 w-1 h-1 rounded-full bg-dorado opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="text-sm font-serif italic text-marron-oscuro/70 group-hover:text-dorado group-hover:translate-x-3 transition-all duration-300">
                            {prenda.label}
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


        {/* ======================================= */}
        {/* PASO 2: TARJETA OSCURA (Servicios)      */}
        {/* ======================================= */}
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div variants={step2Variants} initial="hidden" animate="visible" exit="exit" className="absolute w-full">
              <div className="bg-[#2D2926] shadow-2xl rounded-sm p-1.5 relative text-crema">
                
                <svg className="absolute left-10 -top-16 w-4 h-16 pointer-events-none z-20 overflow-visible" viewBox="0 0 10 100" preserveAspectRatio="none">
                  <motion.path d="M 5 0 L 5 100" stroke="#C5A059" strokeWidth="2" strokeDasharray="4 6" fill="transparent" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ filter: "drop-shadow(0px 0px 3px rgba(197,160,89,0.8))" }} />
                  <circle cx="5" cy="100" r="3" fill="#C5A059" />
                </svg>

                <div className="border-[1.5px] border-dashed border-dorado/30 p-8">
                  
                  <div className="flex justify-between items-center mb-6 text-[9px] font-mono tracking-[0.2em] text-crema/50 uppercase">
                    <span>[ Paso 02 ]</span>
                    <span className="text-crema">{selectedPrenda?.label}</span>
                  </div>

                  <h2 className="text-crema text-3xl font-serif leading-none tracking-tight mb-6">
                    ¿Qué servicio aplicamos?
                  </h2>
                  
                  {/* LISTA DINÁMICA DE SERVICIOS */}
                  <div className="flex flex-col gap-1 mb-8">
                    {selectedPrenda?.services?.map((servicio, index) => (
                      <motion.button
                        key={servicio.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }} // Efecto cascada escalonado
                        onClick={() => handleSelectService(servicio)}
                        className={`group relative flex justify-between items-center w-full text-left px-2 py-3 outline-none border-b border-dorado/10 transition-colors ${selectedService?.id === servicio.id ? 'bg-dorado/10' : 'hover:bg-dorado/5'}`}
                      >
                        <div className="flex items-center">
                          <span className={`absolute left-0 w-1 h-1 rounded-full bg-dorado transition-opacity duration-300 ${selectedService?.id === servicio.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                          <span className={`text-sm font-serif italic transition-all duration-300 ${selectedService?.id === servicio.id ? 'text-dorado translate-x-3' : 'text-crema/70 group-hover:text-dorado group-hover:translate-x-3'}`}>
                            {servicio.label}
                          </span>
                        </div>
                        {/* Indicador de precio orientativo (Aporta valor inmediato) */}
                        <span className="text-[10px] font-mono text-dorado/60 tracking-widest">
                          + {servicio.price}€
                        </span>
                      </motion.button>
                    ))}
                  </div>
                  
                  <button 
                    className="text-xs font-mono tracking-widest text-dorado hover:text-crema transition-colors uppercase w-full text-left" 
                    onClick={() => { setCurrentStep(1); setSelectedService(null); }}
                  >
                    ← Volver
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}