import { notFound } from "next/navigation";
import LegalPage from "../../../../components/LegalPage";
import { getLegalDocument, legalSlugs } from "../../../../legal/content";

export function generateStaticParams() {
  return ["es", "en"].flatMap((lang) =>
    legalSlugs.map((document) => ({ lang, document })),
  );
}

export async function generateMetadata({ params }) {
  const { lang, document: slug } = await params;
  const document = getLegalDocument(slug, lang);
  if (!document) return {};
  return { title: `${document.title} | Confecciones SV`, description: document.description };
}

export default async function LegalDocumentPage({ params }) {
  const { lang, document: slug } = await params;
  if (!["es", "en"].includes(lang)) notFound();
  const document = getLegalDocument(slug, lang);
  if (!document) notFound();
  return <LegalPage document={document} lang={lang} />;
}
