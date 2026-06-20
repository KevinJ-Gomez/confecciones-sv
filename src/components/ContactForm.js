"use client";

import { legalConfig, legalValue } from "../config/legal";

export default function ContactForm({ dict, lang = "es" }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = dict.message_template
      .replace("{name}", data.get("name").trim())
      .replace("{contact}", data.get("contact").trim())
      .replace("{service}", data.get("service"))
      .replace("{message}", data.get("message").trim());

    if (data.get("send_channel") === "email") {
      const subject = dict.email_subject.replace("{name}", data.get("name").trim());
      window.location.href = `mailto:confecciones.sv10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      return;
    }

    window.open(`https://wa.me/34657730970?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full border-b border-white/15 bg-transparent px-0 py-2 text-sm text-[#FFF5E8] outline-none transition-colors placeholder:text-white/25 focus:border-[#D8B66A]";
  const labelClass =
    "block text-[10px] font-mono uppercase tracking-[0.22em] text-white/45";
  const optionClass =
    "flex cursor-pointer items-center justify-center border border-white/10 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.16em] text-white/50 transition-colors has-[:checked]:border-[#D8B66A] has-[:checked]:bg-[#D8B66A]/10 has-[:checked]:text-[#D8B66A]";

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.025] p-5 md:p-7"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="font-serif text-2xl text-[#FFF5E8]">{dict.title}</h3>
        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#D8B66A]">
          {dict.required_note}
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

      <fieldset className="mt-5">
        <legend className={labelClass}>{dict.send_channel_label}</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <label className={optionClass}>
            <input className="sr-only" type="radio" name="send_channel" value="whatsapp" defaultChecked />
            {dict.whatsapp_option}
          </label>
          <label className={optionClass}>
            <input className="sr-only" type="radio" name="send_channel" value="email" />
            {dict.email_option}
          </label>
        </div>
      </fieldset>

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

      <div className="mt-5 border-l border-[#D8B66A]/40 pl-4 text-[10px] leading-relaxed text-white/40">
        <p><strong className="font-medium text-white/60">{dict.privacy_controller}</strong> {legalValue("legalName", lang)}.</p>
        <p>{dict.privacy_summary}</p>
        <p>{dict.privacy_rights} {legalConfig.email}.</p>
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 text-[11px] leading-relaxed text-white/50">
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

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#D8B66A] px-6 py-3 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#171412] transition-colors hover:bg-[#FFF5E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8B66A]"
      >
        {dict.submit} <span aria-hidden="true" className="text-base">→</span>
      </button>

      <p className="mt-4 text-center text-[10px] leading-relaxed text-white/35">
        {dict.helper}
      </p>
    </form>
  );
}
