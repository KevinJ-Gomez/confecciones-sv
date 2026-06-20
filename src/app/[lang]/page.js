"use client";

import React from "react";
import es from "../../dictionaries/es.json";
import en from "../../dictionaries/en.json";
import Calculadora from "../../components/Calculadora";
import Header from "../../components/Header";
import AnimatedThread from "../../components/AnimatedThread";
import ContactSection from "../../components/ContactSection";
import { motion } from "framer-motion";

const diccionarios = { es, en };

const servicios = [
  { 
    numero: "01", 
    titulo: "Cambio de cremalleras", 
    texto: "Reparamos y sustituimos cremalleras en prendas delicadas, chaquetas, pantalones y vestidos.", 
    extra: "Precio orientativo en calculadora",
    img: "/assets/client-raw/cremallera.jpg" 
  },
  { 
    numero: "02", 
    titulo: "Ajustes a medida", 
    texto: "Adaptamos tus prendas: bajos, cintura, mangas, trajes, vestidos y prendas especiales.", 
    extra: "Precio orientativo en calculadora",
    img: "/assets/client-raw/ajustes.jpg" 
  },
  { 
    numero: "03", 
    titulo: "Arreglos generales", 
    texto: "Soluciones de costura para alargar la vida de tu ropa y recuperar prendas que todavía quieres usar.", 
    extra: "Precio orientativo en calculadora",
    img: "/assets/client-raw/arreglos.jpg" 
  },
  { 
    numero: "04", 
    titulo: "Prendas desde cero", 
    texto: "Creamos prendas nuevas desde la idea inicial, tomando medidas y acordando diseño, tejido y acabado.", 
    extra: "Presupuesto personalizado", 
    personalizado: true,
    img: "/assets/client-raw/medida.jpg" 
  },
];

const fotosTaller = [
  { id: 1, src: "/assets/client-raw/máquina.jpg", alt: "Costura detalle 1", style: "md:h-[400px] md:mt-0" },
  { id: 2, src: "/assets/client-raw/tijeras.jpg", alt: "Máquina de coser", style: "md:h-[320px] md:mt-16" },
  { id: 3, src: "/assets/client-raw/hilos.jpg", alt: "Hilos y texturas", style: "md:h-[450px] md:mt-32 md:-ml-8 md:z-10 shadow-2xl" },
  { id: 4, src: "/assets/client-raw/tela.jpg", alt: "Toma de medidas", style: "md:h-[350px] md:-mt-12 md:-mr-6 md:z-10 shadow-2xl" },
  { id: 5, src: "/assets/client-raw/regla.jpg", alt: "Patrones", style: "md:h-[450px] md:-mt-4" },
  { id: 6, src: "/assets/client-raw/vestido.jpg", alt: "Acabado final", style: "md:h-[300px] md:-mt-20 md:-ml-4 md:z-10 shadow-2xl" },
];

function MonogramaSVG({ size = "medium", className = "" }) {
  const sizeMap = {
    header: "h-12 w-auto opacity-20 brightness-0 invert-[32%] sepia-[18%] saturate-[930%] hue-rotate-[358deg] brightness-[92%] contrast-[86%]",
    calculatorWatermark: "h-40 w-auto opacity-[0.09] brightness-0 invert-[32%] sepia-[18%] saturate-[930%] hue-rotate-[358deg] brightness-[92%] contrast-[86%] md:h-56",
    endmark: "h-20 w-auto opacity-60 mix-blend-screen"
  };
  return (
    <img src="/assets/branding/logo-monograma.svg" alt="SV Monograma" className={`object-contain pointer-events-none ${sizeMap[size]} ${className}`} />
  );
}

export default function Home({ params }) {
  const resolvedParams = React.use(params);
  const lang = resolvedParams.lang;
  const t = diccionarios[lang];

  return (
    <>
      <Header lang={lang} />

      <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#171412] px-4 pb-6 pt-18 text-[#F8EFE2] md:px-8"
        style={{
          background: "radial-gradient(circle at 50% -10%, #3A2E20 0%, #171412 60%)",
          perspective: "1200px",
        }}
      >
        <div className="absolute inset-0 z-[2] opacity-100 mix-blend-screen pointer-events-none">
          <AnimatedThread />
        </div>

        <div className="pointer-events-none absolute left-[-20%] top-20 z-0 h-96 w-96 rounded-full bg-[#C8A45D]/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-20 right-[-20%] z-0 h-96 w-96 rounded-full bg-[#F4D6A2]/5 blur-[120px]" />

        <div className="pointer-events-none absolute right-10 top-32 z-0 hidden md:block">
          <MonogramaSVG size="header" />
        </div>

        {/* HERO: IMAGEN FLUIDA DE FONDO */}
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-[52vh] w-full">
          <img src="/assets/client-raw/hero.jpg" alt="Taller de costura" className="h-full w-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171412]/80 to-[#171412]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171412] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#C8A45D]/10 mix-blend-overlay" />
        </div>

        {/* HERO: TEXTO MINIMALISTA Y EDITORIAL */}
        <section className="relative z-10 mx-auto mb-8 flex min-h-[42vh] w-full max-w-7xl flex-col justify-center pt-[5vh]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full max-w-3xl">
            <span className="mb-4 block max-w-2xl font-sans text-sm font-medium leading-relaxed tracking-[0.03em] text-[#E2C581] drop-shadow-md md:text-base">
              {t.page.subtitle}
            </span>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tighter drop-shadow-2xl md:text-6xl lg:text-[6rem]">
              <span className="text-[#FFF5E8]">{t.page.title.split(' ')[0]}</span><br />
              <span className="text-[#D8B66A]">{t.page.title.split(' ')[1]}</span>
            </h1>

            <div className="mt-7 flex flex-col items-start gap-2">
               <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                 <motion.a href="#contacto" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} whileHover={{ y: -2 }} className="inline-flex items-center justify-center bg-[#D8B66A] px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#171412] transition-colors hover:bg-[#FFF5E8]">
                   {t.page.cta_contacto}
                 </motion.a>

                 <motion.a href="#presupuesto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} whileHover={{ x: 5 }} className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-[#D8B66A] transition-colors hover:text-white">
                   {t.page.cta_presupuesto} <span className="text-lg leading-none">→</span>
                 </motion.a>
               </div>
               
               <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-1 font-sans text-[10px] uppercase tracking-[0.06em] text-white/45">
                 {t.page.disclaimer_precio}
               </motion.span>
            </div>
          </motion.div>
        </section>

        {/* CONTACTO: ACCIÓN PRINCIPAL, VISIBLE INMEDIATAMENTE TRAS EL HERO */}
        <ContactSection dict={t.contacto_section} lang={lang} />

        {/* SERVICIOS: DISEÑO CON IMÁGENES INTEGRADAS */}
        <section id="servicios" className="relative z-20 mx-auto mb-12 w-full max-w-7xl px-4 md:mb-32">
          <div className="mb-8 flex flex-col items-start justify-between gap-3 md:mb-20 md:flex-row md:items-end md:gap-6">
            <div>
              <h2 className="mb-4 font-serif text-3xl text-[#FFF5E8] md:text-5xl">{t.servicios_section.title}</h2>
              <div className="h-px w-16 bg-[#D8B66A]" />
            </div>
            <span className="font-sans text-[10px] font-medium tracking-[0.04em] text-white/45 md:hidden">{t.servicios_section.swipe_hint}</span>
          </div>

          <div className="grid touch-pan-x auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-4 md:auto-cols-auto md:gap-10 md:overflow-visible md:pb-0">
            {servicios.map((servicio, index) => (
              <motion.article 
                key={servicio.titulo} 
                initial={{ opacity: 0, y: 35 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{ duration: 0.7, delay: index * 0.08 }} 
                whileHover={{ y: -8 }} 
                className={`group relative flex snap-start cursor-default flex-col items-start ${index === 1 || index === 3 ? "md:mt-12" : ""}`}
              >
                <div className="w-full h-48 mb-6 overflow-hidden rounded-sm relative border border-white/5">
                  <img src={servicio.img} alt={t.servicios_section.items[index].titulo} className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-90 group-hover:mix-blend-normal transition-all duration-700" />
                  <div className="absolute inset-0 bg-[#C8A45D]/10 mix-blend-overlay"></div>
                </div>

                <span className="pointer-events-none absolute -left-4 top-36 font-serif text-[7rem] leading-none text-[#D8B66A]/10 transition-all duration-500 group-hover:-top-2 group-hover:text-[#D8B66A]/30 z-10">
                  {servicio.numero}
                </span>

                <div className="relative z-20 w-full">
                  <div className="mb-6 h-px w-8 bg-[#D8B66A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#D8B66A]" />
                  
                  <h3 className="mb-4 font-serif text-2xl text-[#FFF5E8] transition-colors duration-300 group-hover:text-[#D8B66A]">
                    {t.servicios_section.items[index].titulo}
                  </h3>
                  
                  <p className="max-w-xs text-sm leading-relaxed text-white/50 font-light">{t.servicios_section.items[index].texto}</p>
                  <p className={`mt-6 font-sans text-[10px] font-medium uppercase tracking-[0.08em] ${servicio.personalizado ? "text-[#D8B66A]" : "text-white/35"}`}>{t.servicios_section.items[index].extra}</p>

                  {servicio.personalizado && (
                    <a href="#contacto" className="mt-6 inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#D8B66A] transition-colors hover:text-white">
                      {t.servicios_section.items[index].cta || "Consultar precio"} <span className="text-sm leading-none">→</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PRESUPUESTO: CALCULADORA COMPACTADA */}
        <section id="presupuesto" className="relative z-10 mb-3 flex w-full scroll-mt-24 flex-col items-center pt-0 md:mb-10">
          <div className="mb-1 flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl text-[#FFF5E8] md:text-4xl">{t.presupuesto_section.title}</h2>
          </div>
          <Calculadora dict={t.calculator} />
          <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-[58%]" aria-hidden="true">
            <MonogramaSVG size="calculatorWatermark" />
          </div>
        </section>

        {/* GALERÍA CINEMATOGRÁFICA "EL TALLER" (6 FOTOS) */}
        <section id="artesania" className="relative z-20 mx-auto w-full max-w-7xl border-t border-white/5 px-4 pb-10 pt-6 md:pb-20 md:pt-10">
           
           <div className="mb-8 flex flex-col items-start md:mb-16 md:items-end md:text-right">
              <span className="font-sans text-sm font-medium tracking-[0.03em] text-[#D8B66A]">{t.taller_section.subtitle}</span>
              <h2 className="mt-4 font-serif text-4xl text-[#FFF5E8] md:text-5xl max-w-xl">{t.taller_section.title}</h2>
              <span className="mt-3 font-sans text-[10px] font-medium tracking-[0.04em] text-white/45 md:hidden">{t.taller_section.swipe_hint}</span>
           </div>

           <div className="grid w-full touch-pan-x auto-cols-[78%] grid-flow-col gap-3 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-3 md:auto-cols-auto md:gap-6 md:overflow-visible md:pb-0">
              {fotosTaller.map((foto, index) => (
                <motion.div 
                  key={foto.id}
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.2 }} 
                  transition={{ type: "spring", stiffness: 40, damping: 15, delay: index * 0.1 }} 
                  className={`group relative h-56 w-full snap-start overflow-hidden rounded-sm border border-[#D8B66A]/10 ${foto.style}`}
                >
                   <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-transparent to-transparent opacity-80" />
                   <div className="absolute inset-0 bg-[#C8A45D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                </motion.div>
              ))}
           </div>
        </section>

        {/* END MARK & FIRMA DEL DESARROLLADOR */}
        <div className="relative z-10 flex w-full flex-col items-center border-t border-white/5 pb-3 pt-6">
          <MonogramaSVG size="endmark" className="mb-4 !h-12" />
          
          <nav aria-label={t.footer.legal_nav_label} className="mb-5 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/45">
            <a className="hover:text-[#D8B66A]" href={`/${lang}/legal/aviso-legal`}>{t.footer.legal_notice}</a>
            <a className="hover:text-[#D8B66A]" href={`/${lang}/legal/privacidad`}>{t.footer.privacy}</a>
            <a className="hover:text-[#D8B66A]" href={`/${lang}/legal/cookies`}>{t.footer.cookies}</a>
          </nav>

          <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center font-sans text-[10px] uppercase tracking-[0.06em] text-white/35 sm:flex-row sm:px-8 sm:text-left">
            <span>© {new Date().getFullYear()} {t.footer.rights}</span>
            
            <a 
              href="https://www.linkedin.com/in/kevin-gomez-ulloa-dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#D8B66A] transition-colors"
            >
              {t.footer.dev}
            </a>
          </div>
        </div>

        <style>{`
          html { scroll-behavior: smooth; }
        `}</style>
      </main>
    </>
  );
}
