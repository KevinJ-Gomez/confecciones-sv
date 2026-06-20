import Link from "next/link";
import { isLegalConfigComplete, missingLegalFields } from "../config/legal";

export default function LegalPage({ document, lang }) {
  return (
    <main className="min-h-screen bg-[#171412] px-5 py-10 text-[#F8EFE2] md:py-16">
      <article className="mx-auto max-w-3xl">
        <Link href={`/${lang}`} className="font-sans text-xs font-semibold uppercase tracking-[0.07em] text-[#D8B66A] hover:text-white">{document.back}</Link>
        <header className="border-b border-white/10 pb-8 pt-10">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-[#D8B66A]">Confecciones SV</p>
          <h1 className="font-serif text-4xl md:text-6xl">{document.title}</h1>
          <p className="mt-4 text-sm text-white/45">{document.updated}</p>
        </header>

        {!isLegalConfigComplete && (
          <aside className="my-8 border border-amber-400/50 bg-amber-400/10 p-5" role="alert">
            <h2 className="font-serif text-xl text-amber-200">{document.pendingTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/70">{document.pendingText}</p>
            <p className="mt-3 break-words font-sans text-[10px] font-medium uppercase tracking-[0.05em] text-amber-200/70">{missingLegalFields.join(" · ")}</p>
          </aside>
        )}

        <div className="space-y-10 py-10">
          {document.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-serif text-2xl text-[#D8B66A]">{section.title}</h2>
              <div className="space-y-3 text-sm font-light leading-7 text-white/65">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-[#D8B66A] underline underline-offset-4">{link.label}</a>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
