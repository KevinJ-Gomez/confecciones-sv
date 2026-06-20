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
  { id: 1, src: "/assets/client-raw/máquina.jpg", alt: "Costura detalle 1", style: "h-48 sm:h-56 lg:col-start-1 lg:row-start-1 lg:row-span-7 lg:h-auto" },
  { id: 2, src: "/assets/client-raw/tijeras.jpg", alt: "Máquina de coser", style: "h-36 sm:h-44 lg:col-start-2 lg:row-start-1 lg:row-span-5 lg:h-auto" },
  { id: 3, src: "/assets/client-raw/hilos.jpg", alt: "Hilos y texturas", style: "h-56 sm:h-64 lg:col-start-3 lg:row-start-1 lg:row-span-8 lg:h-auto" },
  { id: 4, src: "/assets/client-raw/tela.jpg", alt: "Toma de medidas", style: "h-40 sm:h-48 lg:col-start-1 lg:row-start-8 lg:row-span-5 lg:h-auto" },
  { id: 5, src: "/assets/client-raw/regla.jpg", alt: "Patrones", style: "h-52 sm:h-60 lg:col-start-2 lg:row-start-6 lg:row-span-7 lg:h-auto" },
  { id: 6, src: "/assets/client-raw/vestido.jpg", alt: "Acabado final", style: "h-36 sm:h-44 lg:col-start-3 lg:row-start-9 lg:row-span-4 lg:h-auto" },
];

// FUTURO: cambia a `false` para retirar por completo la reserva de opiniones.
// La galería recuperará automáticamente todo el ancho sin tocar su marcado.
const MOSTRAR_ESPACIO_OPINIONES = true;

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

      <main id="inicio" className="relative min-h-screen overflow-hidden bg-[#171412] px-4 pb-6 pt-18 text-[#F8EFE2] md:px-6"
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
        <section className="relative z-10 mx-auto mb-8 flex min-h-[42vh] w-full max-w-[1500px] flex-col justify-center pt-[5vh]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full max-w-3xl">
            <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B66A] md:text-sm">
              {t.page.brand}
            </span>

            <h1 className="font-serif text-5xl leading-[0.9] tracking-tighter drop-shadow-2xl md:text-7xl lg:text-[6.5rem]">
              <span className="text-[#FFF5E8]">{t.page.title_line_1}</span><br />
              <span className="italic text-[#D8B66A]">{t.page.title_line_2}</span>
            </h1>

            <p className="mt-5 max-w-2xl font-sans text-sm font-medium leading-relaxed tracking-[0.03em] text-[#F8EFE2]/70 drop-shadow-md md:text-base">
              {t.page.subtitle}
            </p>

            <div className="mt-7 flex flex-col items-start gap-2">
               <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                 <motion.a href="#contacto" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} whileHover={{ y: -2 }} className="inline-flex items-center justify-center bg-[#D8B66A] px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#171412] transition-colors hover:bg-[#FFF5E8]">
                   {t.page.cta_contacto}
                 </motion.a>

                 <motion.a href="#presupuesto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} whileHover={{ y: -2 }} className="inline-flex items-center justify-center border border-[#D8B66A]/70 bg-[#D8B66A]/10 px-5 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#F4D797] shadow-[0_8px_30px_rgba(216,182,106,0.08)] transition-colors hover:border-[#FFF5E8] hover:bg-[#FFF5E8] hover:text-[#171412]">
                   {t.page.cta_presupuesto}
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

        {/* PRESUPUESTO Y SERVICIOS: CALCULADORA A LA IZQUIERDA, SERVICIOS A LA DERECHA */}
        <section id="servicios" className="relative z-20 mx-auto mb-14 w-full max-w-[1500px] scroll-mt-24 px-2 md:mb-24 md:px-0">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(420px,0.78fr)_minmax(0,1.22fr)] lg:gap-14 xl:gap-20">
            <section id="presupuesto" className="relative flex w-full scroll-mt-24 flex-col items-center lg:pt-1">
              <div className="mb-4 w-full text-left">
                <h2 className="font-serif text-3xl text-[#FFF5E8] md:text-4xl">{t.presupuesto_section.title}</h2>
                <div className="mt-4 h-px w-16 bg-[#D8B66A]" />
              </div>
              <Calculadora dict={t.calculator} />
              <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-[45%]" aria-hidden="true">
                <MonogramaSVG size="calculatorWatermark" />
              </div>
            </section>

            <div>
              <div className="mb-8 md:mb-12">
                <h2 className="mb-4 font-serif text-3xl text-[#FFF5E8] md:text-5xl">{t.servicios_section.title}</h2>
                <div className="h-px w-16 bg-[#D8B66A]" />
              </div>

              <div className="grid touch-pan-y grid-cols-2 gap-x-3 gap-y-8 md:gap-x-8 md:gap-y-12">
                {servicios.map((servicio, index) => (
                  <motion.article
                    key={servicio.titulo}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 1.04 }}
                    className="group relative z-0 flex touch-pan-y cursor-default flex-col items-start active:z-20"
                  >
                    <div className="relative mb-4 h-28 w-full overflow-hidden rounded-sm border border-white/5 md:mb-5 md:h-40">
                      <img src={servicio.img} alt={t.servicios_section.items[index].titulo} className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:mix-blend-normal group-active:scale-105 group-active:opacity-90 group-active:mix-blend-normal" />
                      <div className="absolute inset-0 bg-[#C8A45D]/10 mix-blend-overlay" />
                    </div>

                    <span className="pointer-events-none absolute -left-1 top-20 z-10 font-serif text-[4rem] leading-none text-[#D8B66A]/10 transition-all duration-500 group-hover:-top-2 group-hover:text-[#D8B66A]/30 group-active:-top-2 group-active:text-[#D8B66A]/30 md:top-28 md:text-[6rem]">
                      {servicio.numero}
                    </span>

                    <div className="relative z-20 w-full">
                      <div className="mb-4 h-px w-8 bg-[#D8B66A]/30 transition-all duration-500 group-hover:w-full group-hover:bg-[#D8B66A] group-active:w-full group-active:bg-[#D8B66A]" />
                      <h3 className="mb-2 font-serif text-lg leading-tight text-[#FFF5E8] transition-colors group-hover:text-[#D8B66A] group-active:text-[#D8B66A] md:text-2xl">
                        {t.servicios_section.items[index].titulo}
                      </h3>
                      <p className="max-w-sm text-xs font-light leading-relaxed text-white/50 md:text-sm">{t.servicios_section.items[index].texto}</p>
                      <p className={`mt-4 font-sans text-[9px] font-medium uppercase tracking-[0.06em] md:text-[10px] ${servicio.personalizado ? "text-[#D8B66A]" : "text-white/35"}`}>{t.servicios_section.items[index].extra}</p>
                      {servicio.personalizado && (
                        <a href="#contacto" className="mt-5 inline-flex font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#D8B66A] transition-colors hover:text-white">
                          {t.servicios_section.items[index].cta || "Consultar precio"}
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* TALLER: GALERÍA EDITORIAL Y RESERVA PARA FUTURAS OPINIONES REALES */}
        <section id="artesania" className="relative z-20 mx-auto w-full max-w-[1500px] scroll-mt-24 border-t border-white/5 px-2 pb-14 pt-10 md:pb-24 md:pt-14">
          <div className="mb-8 flex items-end justify-between md:mb-14">
            <h2 className="font-serif text-4xl text-[#FFF5E8] md:text-5xl">{t.taller_section.title}</h2>
            <div className="mb-2 hidden h-px w-20 bg-[#D8B66A]/60 sm:block" />
          </div>

          <div className={`grid items-stretch gap-8 ${MOSTRAR_ESPACIO_OPINIONES ? "lg:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_280px]" : "grid-cols-1"}`}>
            <div className="grid w-full touch-pan-y grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:h-[540px] lg:grid-rows-12 xl:h-[600px]">
              {fotosTaller.map((foto, index) => (
                <motion.div
                  key={foto.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 40, damping: 15, delay: index * 0.1 }}
                  whileTap={{ scale: 1.06 }}
                  className={`group relative z-0 w-full touch-pan-y overflow-hidden rounded-sm border border-[#D8B66A]/10 active:z-20 ${foto.style}`}
                >
                  <img src={foto.src} alt={foto.alt} className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal group-active:scale-105 group-active:opacity-100 group-active:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171412] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-[#C8A45D]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>

            {MOSTRAR_ESPACIO_OPINIONES && (
              /*
               * FUTURO: sustituir este contenido por reseñas verificadas de Facebook y
               * fotografías autorizadas por sus propietarios. No copiar opiniones sin permiso.
               * PARA ELIMINAR LA RESERVA: poner MOSTRAR_ESPACIO_OPINIONES en false.
               * La galería pasará a ocupar todo el ancho automáticamente.
               */
              <aside className="hidden h-full border-l border-[#D8B66A]/30 bg-white/[0.015] px-6 py-7 lg:block" aria-label={t.taller_section.reviews_label}>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D8B66A]">{t.taller_section.reviews_eyebrow}</span>
                <p className="mt-4 font-serif text-xl leading-snug text-[#FFF5E8]/70">{t.taller_section.reviews_placeholder}</p>
              </aside>
            )}
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

          <div className="flex w-full max-w-[1500px] flex-col items-center justify-between gap-3 px-4 text-center font-sans text-[9px] uppercase tracking-[0.04em] text-white/35 sm:flex-row sm:px-8 sm:text-left md:text-[10px] md:tracking-[0.06em]">
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
