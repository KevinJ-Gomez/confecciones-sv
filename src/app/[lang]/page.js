import es from "../../dictionaries/es.json";
import en from "../../dictionaries/en.json";
import Calculadora from "../../components/Calculadora";

const diccionarios = { es, en};

export default async function Home({ params }) {
  const { lang } = await params;
  const t = diccionarios[lang];

  return (
    <main className="min-h-screen bg-crema text-marron-oscuro p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">{t.page.title}</h1>
      <p className="mb-8">{t.page.subtitle}</p>
      <Calculadora dict={t.calculator} />
    </main>
  );
}