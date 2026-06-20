"use client";

import React from "react";
import es from "../../dictionaries/es.json";
import en from "../../dictionaries/en.json";
import Calculadora from "../../components/Calculadora";
import Header from "../../components/Header";
import AnimatedThread from "../../components/AnimatedThread";
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
  { id: 1, src: "/assets/client-raw/máquina.jpg", alt: "Costura detalle 1", style: "h-[300px] md:h-[400px] md:mt-0" },
  { id: 2, src: "/assets/client-raw/tijeras.jpg", alt: "Máquina de coser", style: "h-[300px] md:h-[320px] md:mt-16" },
  { id: 3, src: "/assets/client-raw/hilos.jpg", alt: "Hilos y texturas", style: "h-[300px] md:h-[450px] md:mt-32 md:-ml-8 md:z-10 shadow-2xl" }, 
  { id: 4, src: "/assets/client-raw/tela.jpg", alt: "Toma de medidas", style: "h-[300px] md:h-[350px] md:-mt-12 md:-mr-6 md:z-10 shadow-2xl" }, 
  { id: 5, src: "/assets/client-raw/regla.jpg", alt: "Patrones", style: "h-[300px] md:h-[450px] md:-mt-4" },
  { id: 6, src: "/assets/client-raw/vestido.jpg", alt: "Acabado final", style: "h-[300px] md:h-[300px] md:-mt-20 md:-ml-4 md:z-10 shadow-2xl" }, 
];

function MonogramaSVG({ size = "medium", className = "" }) {
  const sizeMap = {
    header: "h-12 w-auto opacity-30 mix-blend-screen",
    watermark: "h-[80vh] w-auto opacity-[0.03] mix-blend-screen",
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

      <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#171412] px-4 pb-12 pt-24 text-[#F8EFE2] md:px-8"
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
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-[65vh] w-full">
          <img src="/assets/client-raw/hero.jpg" alt="Taller de costura" className="h-full w-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171412]/80 to-[#171412]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171412] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#C8A45D]/10 mix-blend-overlay" />
        </div>

        {/* HERO: TEXTO MINIMALISTA Y EDITORIAL */}
        <section className="relative z-10 mx-auto mb-16 flex min-h-[50vh] w-full max-w-7xl flex-col justify-center pt-[10vh]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full max-w-3xl">
            <span className="mb-6 block text-[10px] font-mono uppercase tracking-[0.4em] text-[#D8B66A] drop-shadow-md md:text-xs">
              {t.page.subtitle}
            </span>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tighter drop-shadow-2xl md:text-6xl lg:text-[7rem]">
              <span className="text-[#FFF5E8]">{t.page.title.split(' ')[0]}</span><br />
              <span className="text-[#D8B66A]">{t.page.title.split(' ')[1]}</span>
            </h1>

            <div className="mt-12 flex flex-col items-start gap-3">
               <div className="flex items-center gap-8">
                 <motion.a href="#presupuesto" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} whileHover={{ x: 5 }} className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-[0.2em] text-[#D8B66A] transition-colors hover:text-white">
                   {t.page.cta_presupuesto} <span className="text-xl leading-none">→</span>
                 </motion.a>
                 
                 <motion.a href="#servicios" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="hidden text-xs font-mono uppercase tracking-widest text-white/30 transition-colors hover:text-white sm:block">
                   {t.page.cta_servicios}
                 </motion.a>
               </div>
               
               <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-1 text-[9px] font-mono uppercase tracking-widest text-white/40">
                 {t.page.disclaimer_precio}
               </motion.span>
            </div>
          </motion.div>
        </section>

        {/* SERVICIOS: DISEÑO CON IMÁGENES INTEGRADAS */}
        <section id="servicios" className="relative z-20 mx-auto mb-32 w-full max-w-7xl px-4">
          <div className="pointer-events-none absolute right-[-10%] top-[-5%] z-0 overflow-hidden">
            <MonogramaSVG size="watermark" />
          </div>

          <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 font-serif text-3xl text-[#FFF5E8] md:text-5xl">{t.servicios_section.title}</h2>
              <div className="h-px w-16 bg-[#D8B66A]" />
            </div>
          </div>

          <div className="grid gap-16 md:grid-cols-4 md:gap-10">
            {servicios.map((servicio, index) => (
              <motion.article 
                key={servicio.titulo} 
                initial={{ opacity: 0, y: 35 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.2 }} 
                transition={{ duration: 0.7, delay: index * 0.08 }} 
                whileHover={{ y: -8 }} 
                className={`group relative flex cursor-default flex-col items-start ${index === 1 || index === 3 ? "md:mt-12" : ""}`}
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
                  <p className={`mt-6 text-[9px] font-mono uppercase tracking-[0.24em] ${servicio.personalizado ? "text-[#D8B66A]" : "text-white/30"}`}>{t.servicios_section.items[index].extra}</p>

                  {servicio.personalizado && (
                    <a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#D8B66A] transition-colors hover:text-white">
                      {t.servicios_section.items[index].cta || "Consultar precio"} <span className="text-sm leading-none">→</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* PRESUPUESTO: CALCULADORA COMPACTADA */}
        <section id="presupuesto" className="relative z-10 flex w-full flex-col items-center pt-0 mb-32">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl text-[#FFF5E8]">{t.presupuesto_section.title}</h2>
          </div>
          <Calculadora dict={t.calculator} />
        </section>

        {/* GALERÍA CINEMATOGRÁFICA "EL TALLER" (6 FOTOS) */}
        <section id="artesania" className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-10 pb-20 border-t border-white/5">
           
           <div className="mb-16 flex flex-col items-start md:items-end md:text-right">
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#D8B66A]">{t.taller_section.subtitle}</span>
              <h2 className="mt-4 font-serif text-4xl text-[#FFF5E8] md:text-5xl max-w-xl">{t.taller_section.title}</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {fotosTaller.map((foto, index) => (
                <motion.div 
                  key={foto.id}
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.2 }} 
                  transition={{ type: "spring", stiffness: 40, damping: 15, delay: index * 0.1 }} 
                  className={`w-full rounded-sm overflow-hidden border border-[#D8B66A]/10 relative group ${foto.style}`}
                >
                   <img src={foto.src} alt={foto.alt} className="w-full h-full object-cover opacity-60 mix-blend-luminosity transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-transparent to-transparent opacity-80" />
                   <div className="absolute inset-0 bg-[#C8A45D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                </motion.div>
              ))}
           </div>
        </section>

        {/* CONTACTO: INFORMACIÓN DEL CLIENTE */}
        <section id="contacto" className="relative z-20 mx-auto w-full max-w-7xl px-4 pt-16 pb-20 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase mb-4 block">{t.contacto_section.subtitle}</span>
              <h2 className="mb-12 font-serif text-4xl text-[#FFF5E8] md:text-5xl leading-tight">{t.contacto_section.title}</h2>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">{t.contacto_section.ubicacion_title}</h4>
                  <p className="text-lg font-serif text-white/80">{t.contacto_section.ciudad}</p>
                  <p className="text-sm text-[#D8B66A] mt-1">{t.contacto_section.horario}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">{t.contacto_section.comunicacion_title}</h4>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+34657730970" className="text-lg font-serif text-white/80 hover:text-[#D8B66A] transition-colors">657 730 970</a>
                    <a href="tel:+34602571925" className="text-lg font-serif text-white/80 hover:text-[#D8B66A] transition-colors">602 571 925</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-12">
              <div className="grid grid-cols-2 gap-8 border-l border-white/5 pl-8">
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-3">{t.contacto_section.envios_title}</h4>
                  <ul className="text-sm text-white/60 flex flex-col gap-2">
                    <li><span className="text-[#D8B66A]">→</span> {t.contacto_section.envios[0]}</li>
                    <li><span className="text-[#D8B66A]">→</span> {t.contacto_section.envios[1]}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-3">{t.contacto_section.pagos_title}</h4>
                  <ul className="text-sm text-white/60 flex flex-col gap-2">
                    <li><span className="text-[#D8B66A]">→</span> {t.contacto_section.pagos[0]}</li>
                    <li><span className="text-[#D8B66A]">→</span> {t.contacto_section.pagos[1]}</li>
                  </ul>
                </div>
              </div>
              <div className="border-l border-white/5 pl-8 pt-4 flex flex-col items-start gap-4">
                <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">{t.contacto_section.siguenos_title}</h4>
                <a href="https://www.facebook.com/" className="inline-flex size-12 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-[#D8B66A] hover:text-[#D8B66A] transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">Facebook</span>
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.101 23.691v-9.03H6.03v-3.525h3.071V8.59c0-3.041 1.858-4.7 4.576-4.7 1.301 0 2.419.097 2.744.14v3.183l-1.883.001c-1.476 0-1.762.701-1.762 1.73v2.266h3.522l-.459 3.525h-3.063v9.03H9.101z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* END MARK & FIRMA DEL DESARROLLADOR */}
        <div className="relative w-full flex flex-col items-center pb-8 pt-10 z-10 border-t border-white/5">
          <MonogramaSVG size="endmark" className="mb-8" />
          
          <div className="flex w-full max-w-7xl justify-between items-center px-4 md:px-8 text-[9px] font-mono uppercase tracking-widest text-white/30">
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