"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const step1Variants = {
  active: {
    z: 0,
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  background: {
    z: -150,
    scale: 0.92,
    opacity: 0.35,
    y: -34,
    filter: "blur(4px)",
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const step2Variants = {
  hidden: { z: 200, y: 70, opacity: 0 },
  visible: {
    z: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
  },
  exit: { z: 200, opacity: 0, transition: { duration: 0.2 } },
};

const step3Variants = {
  hidden: { z: 200, y: 70, opacity: 0 },
  visible: {
    z: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.1 },
  },
  exit: { z: 200, opacity: 0, transition: { duration: 0.2 } },
};

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
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

  const total = (selectedPrenda?.price || 0) + (selectedService?.price || 0);

  const whatsappMessage = `Hola, quiero solicitar presupuesto para el servicio de ${selectedService?.label} en ${selectedPrenda?.label}. Entiendo que el coste base es desde ${total}€ y puede variar según el tejido y trabajo final.`;

  const whatsappUrl = `https://wa.me/34657730970?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative flex h-[570px] w-full justify-center py-4 md:h-[620px]"
      style={{ perspective: "2000px" }}
    >
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 flex w-full max-w-sm items-center justify-center"
      >
        {/* PASO 1 */}
        <motion.div
          variants={step1Variants}
          animate={currentStep === 1 ? "active" : "background"}
          className="absolute w-full"
        >
          <div className="relative overflow-hidden rounded-sm border border-[#D8B66A]/25 bg-[#171412]/75 p-1.5 text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="relative h-full border-[1.5px] border-dashed border-[#D8B66A]/25 p-8">
              <div className="mb-8 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.24em] text-[#F8EFE2]/42">
                <span>{dict?.step || "PASO 01"}</span>

                <span
                  className={`font-bold ${
                    selectedPrenda ? "text-[#D8B66A]" : "text-[#F8EFE2]/35"
                  }`}
                >
                  {selectedPrenda
                    ? dict?.ok || "COMPLETADO"
                    : dict?.awaiting || "ESPERANDO"}
                </span>
              </div>

              <h2 className="mb-8 font-serif text-4xl leading-none tracking-tight text-[#FFF5E8]">
                {dict?.question || "¿Qué prenda deseas arreglar?"}
              </h2>

              <button
                onClick={() => currentStep === 1 && setIsOpen(!isOpen)}
                className="group flex w-full items-center justify-between border-b border-[#D8B66A]/22 pb-3 text-left outline-none transition-colors hover:border-[#D8B66A]"
              >
                <span
                  className={`text-sm uppercase tracking-widest ${
                    selectedPrenda
                      ? "font-medium text-[#FFF5E8]"
                      : "font-light text-[#F8EFE2]/35"
                  }`}
                >
                  {selectedPrenda
                    ? selectedPrenda.label
                    : dict?.placeholder || "Selecciona una opción..."}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="text-[10px] text-[#D8B66A] transition-colors group-hover:text-[#FFF5E8]"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative z-10 mt-4 overflow-hidden"
                  >
                    <div className="flex flex-col gap-1">
                      {dict?.items?.map((prenda) => (
                        <motion.button
                          key={prenda.id}
                          variants={tagVariants}
                          onClick={() => handleSelectPrenda(prenda)}
                          className="group relative flex w-full items-center px-2 py-3 text-left outline-none"
                        >
                          <span className="absolute left-0 h-1 w-1 rounded-full bg-[#D8B66A] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <span className="font-serif text-sm italic text-[#F8EFE2]/62 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#D8B66A]">
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

        {/* PASO 2 */}
        <AnimatePresence>
          {currentStep === 2 && (
            <motion.div
              variants={step2Variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full"
            >
              <div className="relative rounded-sm border border-[#D8B66A]/25 bg-[#171412]/85 p-1.5 text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <svg
                  className="pointer-events-none absolute left-10 -top-16 z-20 h-16 w-4 overflow-visible"
                  viewBox="0 0 10 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 5 0 L 5 100"
                    stroke="#D8B66A"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                      filter:
                        "drop-shadow(0px 0px 3px rgba(216,182,106,0.8))",
                    }}
                  />
                  <circle cx="5" cy="100" r="3" fill="#D8B66A" />
                </svg>

                <div className="border-[1.5px] border-dashed border-[#D8B66A]/25 p-8">
                  <div className="mb-6 flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.24em] text-[#F8EFE2]/42">
                    <span>[ Paso 02 ]</span>
                    <span className="text-[#D8B66A]">
                      {selectedPrenda?.label}
                    </span>
                  </div>

                  <h2 className="mb-6 font-serif text-3xl leading-none tracking-tight text-[#FFF5E8]">
                    ¿Qué servicio aplicamos?
                  </h2>

                  <div className="mb-8 flex flex-col gap-1">
                    {selectedPrenda?.services?.map((servicio, index) => (
                      <motion.button
                        key={servicio.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        onClick={() => handleSelectService(servicio)}
                        className={`group relative flex w-full items-center justify-between border-b border-[#D8B66A]/10 px-2 py-3 text-left outline-none transition-colors ${
                          selectedService?.id === servicio.id
                            ? "bg-[#D8B66A]/10"
                            : "hover:bg-[#D8B66A]/5"
                        }`}
                      >
                        <div className="flex items-center">
                          <span
                            className={`absolute left-0 h-1 w-1 rounded-full bg-[#D8B66A] transition-opacity duration-300 ${
                              selectedService?.id === servicio.id
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />

                          <span
                            className={`font-serif text-sm italic transition-all duration-300 ${
                              selectedService?.id === servicio.id
                                ? "translate-x-3 text-[#D8B66A]"
                                : "text-[#F8EFE2]/62 group-hover:translate-x-3 group-hover:text-[#D8B66A]"
                            }`}
                          >
                            {servicio.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 border border-[#D8B66A]/18 bg-[#D8B66A]/8 px-2.5 py-1">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-[#D8B66A]/70">
                            Desde
                          </span>
                          <span className="font-serif text-xs font-medium text-[#D8B66A]">
                            {servicio.price}€
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <button
                    className="w-full text-left font-mono text-xs uppercase tracking-widest text-[#D8B66A] transition-colors hover:text-[#F8EFE2]"
                    onClick={() => {
                      setCurrentStep(1);
                      setSelectedService(null);
                    }}
                  >
                    ← Volver
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PASO 3 */}
        <AnimatePresence>
          {currentStep === 3 && (
            <motion.div
              variants={step3Variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full"
            >
              <div className="relative rounded-sm border border-[#D8B66A]/25 bg-[#171412]/85 p-1.5 text-[#F8EFE2] shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <svg
                  className="pointer-events-none absolute left-1/2 -top-16 z-20 h-16 w-4 -translate-x-1/2 overflow-visible"
                  viewBox="0 0 10 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 5 0 L 5 100"
                    stroke="#D8B66A"
                    strokeWidth="2"
                    strokeDasharray="4 6"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <circle cx="5" cy="100" r="3" fill="#D8B66A" />
                </svg>

                <div className="flex h-full flex-col border-[1.5px] border-dashed border-[#D8B66A]/25 p-8 text-center">
                  <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-[#F8EFE2]/42">
                    <span>[ Presupuesto orientativo ]</span>
                  </div>

                  <h2 className="mb-2 flex flex-col items-center justify-center font-serif text-6xl leading-none tracking-tight text-[#FFF5E8]">
                    <span className="mb-1 font-mono text-xs uppercase tracking-widest text-[#D8B66A]">
                      Desde
                    </span>
                    {total}€
                  </h2>

                  <p className="mb-3 text-xs font-light uppercase tracking-widest text-[#F8EFE2]/68">
                    {selectedPrenda?.label} / {selectedService?.label}
                  </p>

                  <small className="mb-6 block px-4 font-serif text-[11px] italic leading-relaxed text-[#D8B66A]">
                    * El precio es orientativo. El coste final depende del
                    tejido, la dificultad y el acabado de la prenda.
                  </small>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 flex w-full items-center justify-center gap-2 bg-[#D8B66A] py-3 text-xs font-bold uppercase tracking-widest text-[#171412] shadow-sm transition-colors hover:bg-[#F0CF88]"
                  >
                    Solicitar por WhatsApp
                  </a>

                  <div className="mt-2 border-t border-[#D8B66A]/15 pt-4">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-widest text-[#F8EFE2]/35">
                      O llámanos directamente:
                    </p>

                    <div className="flex items-center justify-center gap-3 font-serif text-sm italic text-[#F8EFE2]">
                      <a
                        href="tel:+34657730970"
                        className="transition-colors hover:text-[#D8B66A]"
                      >
                        657 730 970
                      </a>

                      <span className="text-[#F8EFE2]/20">|</span>

                      <a
                        href="tel:+34602571925"
                        className="transition-colors hover:text-[#D8B66A]"
                      >
                        602 571 925
                      </a>
                    </div>
                  </div>

                  <button
                    className="mt-6 font-mono text-[10px] uppercase tracking-widest text-[#F8EFE2]/35 transition-colors hover:text-[#F8EFE2]"
                    onClick={() => {
                      setCurrentStep(1);
                      setSelectedPrenda(null);
                      setSelectedService(null);
                      setIsOpen(false);
                    }}
                  >
                    Empezar de nuevo
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