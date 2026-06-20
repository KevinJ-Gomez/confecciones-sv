"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

// =========================================================================
// 📂 DATOS DE RESPALDO REALES (Fallback Pattern)
// =========================================================================
const defaultPrendas = [
  { 
    id: "pantalon", 
    label: "Pantalón", 
    basePrice: 10,
    services: [
      { id: "bajo_normal", label: "Coger Bajo (Máquina)", price: 8 },
      { id: "bajo_mano", label: "Coger Bajo (A Mano)", price: 10 },
      { id: "estrechar", label: "Estrechar Pantalón", price: 12 },
      { id: "cremallera", label: "Cambio de Cremallera", price: 11 },
      { id: "parche", label: "Parche / Zurcido", price: 10 }
    ]
  },
  { 
    id: "camisa", 
    label: "Camisa / Blusa", 
    basePrice: 12,
    services: [
      { id: "estrechar", label: "Estrechar Blusa", price: 12 },
      { id: "subir_puno", label: "Subir Puño / Manga", price: 15 },
      { id: "bajo", label: "Coger Bajo", price: 8 }
    ]
  },
  { 
    id: "vestido", 
    label: "Vestido", 
    basePrice: 20,
    services: [
      { id: "bajo_vestido", label: "Bajo de Vestido", price: 20 },
      { id: "estrechar", label: "Estrechar", price: 12 },
      { id: "ampliar", label: "Ampliar", price: 15 }
    ]
  },
  { 
    id: "chaqueta", 
    label: "Chaqueta / Americana", 
    basePrice: 15,
    services: [
      { id: "cremallera_chaqueta", label: "Cambio Cremallera", price: 15 },
      { id: "subir_puno", label: "Subir Puño", price: 15 },
      { id: "estrechar", label: "Estrechar", price: 12 }
    ]
  },
  { 
    id: "falda", 
    label: "Falda", 
    basePrice: 10,
    services: [
      { id: "bajo_falda", label: "Bajo de Falda", price: 10 },
      { id: "estrechar", label: "Estrechar", price: 12 },
      { id: "ampliar", label: "Ampliar", price: 15 },
      { id: "cambio_goma", label: "Cambio de Goma", price: 12 }
    ]
  },
  { 
    id: "abrigo", 
    label: "Abrigo", 
    basePrice: 20,
    services: [
      { id: "cremallera_gruesa", label: "Cambio Cremallera Gruesa", price: 20 },
      { id: "bajo_abrigo", label: "Coger Bajo", price: 20 }
    ]
  }
];

const step1Variants = {
  active: { z: 0, scale: 1, opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 25 } },
  background: { z: -150, scale: 0.92, opacity: 0.35, y: -34, filter: "blur(4px)", transition: { type: "spring", stiffness: 300, damping: 25 } },
};

const step2Variants = {
  hidden: { z: 200, y: 70, opacity: 0 },
  visible: { z: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 } },
  exit: { z: 200, opacity: 0, transition: { duration: 0.2 } },
};

const step3Variants = {
  hidden: { z: 200, y: 70, opacity: 0 },
  visible: { z: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 } },
  exit: { z: 200, opacity: 0, transition: { duration: 0.2 } },
};

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { type: "spring", stiffness: 500, damping: 30, staggerChildren: 0.05, delayChildren: 0.02 } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 20 } },
};

export default function Calculadora({ dict }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedPrenda, setSelectedPrenda] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  function handleMouseMove(event) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - (rect.left + rect.width / 2));
    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  }

  const handleSelectPrenda = (prendaObj) => {
    setSelectedPrenda(prendaObj);
    setSelectedService(null);
    setIsOpen(false);
    setTimeout(() => setCurrentStep(2), 200);
  };

  const handleSelectService = (serviceObj) => {
    setSelectedService(serviceObj);
    setTimeout(() => setCurrentStep(3), 200);
  };

  const prendasToRender = dict?.items?.length > 0 ? dict.items : defaultPrendas;
  const total = (selectedService?.price || 0);
  const heightClass = isOpen
    ? "min-h-[570px] md:min-h-[590px]"
    : currentStep === 1
      ? "min-h-[300px] md:min-h-[340px]"
      : currentStep === 2
        ? "min-h-[520px] md:min-h-[540px]"
        : "min-h-[460px] md:min-h-[500px]";

  // =========================================================================
  // ⚙️ MOTOR DE MENSAJES (Tokenización i18n)
  // Reemplazamos los huecos del string con los valores reales.
  // =========================================================================
  const rawMsg = dict?.whatsapp_msg || "Hola, quiero solicitar presupuesto para el servicio de {service} en {prenda}. Entiendo que el coste base es desde {total}€ y puede variar según el tejido y trabajo final.";
  
  const whatsappMessage = rawMsg
    .replace("{service}", selectedService?.label || "")
    .replace("{prenda}", selectedPrenda?.label || "")
    .replace("{total}", total);

  const whatsappUrl = `https://wa.me/34657730970?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className={`relative flex w-full justify-center py-2 transition-[min-height] duration-300 ${heightClass}`}
      style={{ perspective: "2000px" }}
    >
      <motion.div
        style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex w-full max-w-md items-start justify-center"
      >
        {/* ======================================= */}
        {/* PASO 1 */}
        {/* ======================================= */}
        <motion.div variants={step1Variants} animate={currentStep === 1 ? "active" : "background"} className="absolute top-0 w-full">
          <div className="relative overflow-hidden rounded-sm border border-white/5 bg-[#171412]/80 p-7 text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-9">
            
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#D8B66A]">
                {dict?.step || "[ PASO 01 ]"}
              </span>
              <span className={`font-mono text-[9px] font-bold tracking-widest uppercase ${selectedPrenda ? "text-[#D8B66A]" : "text-[#F8EFE2]/30"}`}>
                {selectedPrenda ? (dict?.ok || "OK") : (dict?.awaiting || "ESPERANDO")}
              </span>
            </div>

            <h2 className="mb-7 font-serif text-3xl leading-[1.1] tracking-tighter text-[#FFF5E8] md:text-4xl">
              {dict?.question || "¿Qué prenda vamos a trabajar?"}
            </h2>

            <button onClick={() => currentStep === 1 && setIsOpen(!isOpen)} className="group flex w-full items-center justify-between border-b border-white/10 pb-4 text-left outline-none transition-colors hover:border-[#D8B66A]">
              <span className={`text-xs md:text-sm font-mono uppercase tracking-[0.2em] ${selectedPrenda ? "font-semibold text-[#D8B66A]" : "font-light text-[#F8EFE2]/40"}`}>
                {selectedPrenda ? selectedPrenda.label : (dict?.placeholder || "Selecciona tu prenda")}
              </span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-xs text-[#D8B66A] transition-colors group-hover:text-[#FFF5E8]">▼</motion.span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="relative z-10 mt-6 overflow-hidden">
                  <div className="flex max-h-[40vh] flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
                    {prendasToRender.map((prenda) => (
                      <motion.button key={prenda.id} variants={tagVariants} onClick={() => handleSelectPrenda(prenda)} className="group relative flex w-full items-center px-3 py-3 text-left outline-none bg-white/5 hover:bg-white/10 transition-colors rounded-sm flex-shrink-0">
                        <span className="absolute left-0 h-full w-1 rounded-l-sm bg-[#D8B66A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="font-serif text-lg md:text-xl text-[#F8EFE2]/70 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#D8B66A]">
                          {prenda.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ======================================= */}
        {/* PASO 2 */}
        {/* ======================================= */}
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div variants={step2Variants} initial="hidden" animate="visible" exit="exit" className="absolute top-0 w-full">
              <div className="relative rounded-sm border border-white/5 bg-[#171412]/90 p-7 text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl md:p-9">
                
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#D8B66A]">
                    {dict?.step2 || "[ PASO 02 ]"}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#F8EFE2]/50">
                    {selectedPrenda?.label}
                  </span>
                </div>

                <h2 className="mb-6 font-serif text-3xl leading-[1.1] tracking-tighter text-[#FFF5E8] md:text-4xl">
                  {dict?.service_question || "¿Qué servicio aplicamos?"}
                </h2>

                <div className="mb-6 flex flex-col gap-2">
                  {selectedPrenda?.services?.map((servicio, index) => (
                    <motion.button key={servicio.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }} onClick={() => handleSelectService(servicio)} className={`group relative flex w-full items-center justify-between border px-3 py-3 text-left outline-none transition-colors rounded-sm ${selectedService?.id === servicio.id ? "border-[#D8B66A]/20 bg-[#D8B66A]/10" : "border-transparent bg-white/5 hover:bg-white/10"}`}>
                      <div className="flex items-center">
                        <span className={`absolute left-0 h-full w-1 rounded-l-sm bg-[#D8B66A] transition-opacity duration-300 ${selectedService?.id === servicio.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                        <span className={`font-sans text-[15px] md:text-base font-light tracking-wide transition-all duration-300 ${selectedService?.id === servicio.id ? "translate-x-3 text-[#D8B66A]" : "text-[#F8EFE2]/80 group-hover:translate-x-3 group-hover:text-[#D8B66A]"}`}>
                          {servicio.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#D8B66A]/5 px-3 py-1.5 rounded-sm">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#D8B66A]/70">
                          {dict?.from || "Desde"}
                        </span>
                        <span className="font-sans text-sm font-semibold text-[#D8B66A]">
                          {servicio.price}€
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <button className="w-full text-left font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-[#FFF5E8]" onClick={() => { setCurrentStep(1); setSelectedService(null); }}>
                  ← {dict?.back || "Volver"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================= */}
        {/* PASO 3: DISEÑO "BOUTIQUE INVOICE" */}
        {/* ======================================= */}
        <AnimatePresence>
          {currentStep === 3 && (
            <motion.div variants={step3Variants} initial="hidden" animate="visible" exit="exit" className="absolute top-0 w-full">
              <div className="relative rounded-sm border border-white/5 bg-[#171412]/95 p-7 text-left text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.8)] backdrop-blur-xl md:p-9">
                
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#D8B66A]">
                    {dict?.estimate_title || "PRESUPUESTO ESTIMADO"}
                  </span>
                  
                  <img src="/assets/branding/logo-monograma.svg" alt="SV" className="h-5 w-auto opacity-30 mix-blend-screen" />
                </div>

                <div className="mb-6 flex flex-col gap-4">
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-1">Prenda</span>
                    <span className="text-sm font-sans font-light tracking-wide text-[#F8EFE2]">{selectedPrenda?.label}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 mb-1">Servicio</span>
                    <span className="text-base font-sans font-medium tracking-wide text-[#D8B66A]">{selectedService?.label}</span>
                  </div>
                </div>

                <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#D8B66A]/20 to-transparent" />

                <div className="mb-10 flex items-end justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {dict?.total_base || "Total Base"}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl leading-none tracking-tighter text-[#FFF5E8]">
                    {total}€
                  </h2>
                </div>

                <small className="mb-10 block font-sans text-[11px] font-light leading-relaxed text-white/40">
                  {dict?.disclaimer || "* El precio es orientativo. El coste final depende del tejido, la dificultad y el acabado."}
                </small>

                <div className="flex flex-col gap-5">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 border border-[#D8B66A]/40 bg-transparent py-4 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D8B66A] transition-colors hover:bg-[#D8B66A] hover:text-[#171412]">
                    {dict?.whatsapp || "Solicitar por WhatsApp"} →
                  </a>
                  
                  <button className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-[#F8EFE2]" onClick={() => { setCurrentStep(1); setSelectedPrenda(null); setSelectedService(null); setIsOpen(false); }}>
                    {dict?.restart || "Empezar de nuevo"} ↺
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(216,182,106,0.2); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(216,182,106,0.4); }
      `}</style>
    </div>
  );
}
