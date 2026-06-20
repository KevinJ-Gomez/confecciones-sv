import ContactForm from "./ContactForm";

export default function ContactSection({ dict, lang }) {
  return (
    <section id="contacto" className="relative z-20 mx-auto mb-12 w-full max-w-7xl scroll-mt-24 border-y border-[#D8B66A]/15 bg-white/[0.02] px-4 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:mb-20 md:px-8 md:py-12">
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <span className="mb-4 block font-sans text-sm font-medium leading-relaxed tracking-[0.03em] text-white/55">{dict.subtitle}</span>
          <h2 className="mb-7 font-serif text-3xl leading-tight text-[#FFF5E8] md:text-4xl">{dict.title}</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">{dict.ubicacion_title}</h3>
              <p className="font-serif text-lg text-white/80">{dict.ciudad}</p>
              <p className="mt-1 text-sm text-[#D8B66A]">{dict.horario}</p>
            </div>

            <div>
              <h3 className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">{dict.comunicacion_title}</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+34657730970" className="font-serif text-lg text-white/80 transition-colors hover:text-[#D8B66A]">657 730 970</a>
                <a href="tel:+34602571925" className="font-serif text-lg text-white/80 transition-colors hover:text-[#D8B66A]">602 571 925</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-5 sm:col-span-2">
              <div>
                <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">{dict.envios_title}</h3>
                <ul className="flex flex-col gap-2 text-sm text-white/60">
                  {dict.envios.map((item) => <li key={item}><span className="text-[#D8B66A]">→</span> {item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">{dict.pagos_title}</h3>
                <ul className="flex flex-col gap-2 text-sm text-white/60">
                  {dict.pagos.map((item) => <li key={item}><span className="text-[#D8B66A]">→</span> {item}</li>)}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:col-span-2">
              <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">{dict.siguenos_title}</h3>
              <a href="https://www.facebook.com/" className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#D8B66A] hover:text-[#D8B66A]" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.101 23.691v-9.03H6.03v-3.525h3.071V8.59c0-3.041 1.858-4.7 4.576-4.7 1.301 0 2.419.097 2.744.14v3.183l-1.883.001c-1.476 0-1.762.701-1.762 1.73v2.266h3.522l-.459 3.525h-3.063v9.03H9.101z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <ContactForm dict={dict.form} lang={lang} />
        </div>
      </div>
    </section>
  );
}
