"use client";

export default function ContactForm({ dict, lang = "es" }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const sendChannel = event.nativeEvent.submitter?.value || "whatsapp";
    const message = dict.message_template
      .replace("{name}", data.get("name").trim())
      .replace("{contact}", data.get("contact").trim())
      .replace("{service}", data.get("service"))
      .replace("{message}", data.get("message").trim());

    if (sendChannel === "email") {
      const subject = dict.email_subject.replace("{name}", data.get("name").trim());
      window.location.href = `mailto:confecciones.sv10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      return;
    }

    window.open(`https://wa.me/34657730970?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full border-b border-white/15 bg-transparent px-0 py-2 text-sm text-[#FFF5E8] outline-none transition-colors placeholder:text-white/25 focus:border-[#D8B66A]";
  const labelClass =
    "block font-sans text-[11px] font-semibold uppercase tracking-[0.07em] text-white/50";
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.025] p-5 md:p-7"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <h3 className="font-serif text-2xl text-[#FFF5E8]">{dict.title}</h3>
        <span className="text-right font-sans text-[10px] font-medium tracking-[0.04em] text-[#D8B66A]">
          {dict.quick_note}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className={labelClass}>{dict.name_label}</span>
          <input
            className={fieldClass}
            type="text"
            name="name"
            autoComplete="name"
            placeholder={dict.name_placeholder}
            required
          />
        </label>

        <label>
          <span className={labelClass}>{dict.contact_label}</span>
          <input
            className={fieldClass}
            type="text"
            name="contact"
            autoComplete="tel"
            placeholder={dict.contact_placeholder}
            required
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{dict.service_label}</span>
        <select className={`${fieldClass} cursor-pointer [&>option]:bg-[#231e1a]`} name="service" defaultValue="" required>
          <option value="" disabled>{dict.service_placeholder}</option>
          {dict.services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className={labelClass}>{dict.message_label}</span>
        <textarea
          className={`${fieldClass} min-h-20 resize-y`}
          name="message"
          placeholder={dict.message_placeholder}
          maxLength={800}
          required
        />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-[11px] leading-relaxed text-white/50">
        <input
          className="mt-0.5 size-4 shrink-0 accent-[#D8B66A]"
          type="checkbox"
          name="privacy_acknowledged"
          required
        />
        <span>
          {dict.privacy_prefix}{" "}
          <a className="text-[#D8B66A] underline underline-offset-4 hover:text-white" href={`/${lang}/legal/privacidad`} target="_blank" rel="noopener noreferrer">
            {dict.privacy_link}
          </a>.
        </span>
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          value="whatsapp"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.07em] text-[#102418] transition-colors hover:bg-[#FFF5E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
        >
          {dict.send_whatsapp} <span aria-hidden="true">→</span>
        </button>
        <button
          type="submit"
          value="email"
          className="inline-flex items-center justify-center gap-2 border border-[#D8B66A]/50 px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.07em] text-[#D8B66A] transition-colors hover:border-[#FFF5E8] hover:text-[#FFF5E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B66A]"
        >
          {dict.send_email} <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="mt-4 text-center text-[10px] leading-relaxed text-white/35">
        {dict.helper}
      </p>
    </form>
  );
}
