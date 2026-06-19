import es from "../../dictionaries/es.json";
import en from "../../dictionaries/en.json";
import Calculadora from "../../components/Calculadora";

const diccionarios = { es, en };

export default async function Home({ params }) {
  const { lang } = await params;
  const t = diccionarios[lang];

  return (
    // CAMBIO DE ARQUITECTURA: Contenedor escénico con degradado dramático y perspectiva habilitada
    <main 
      className="min-h-screen p-8 flex flex-col items-center relative overflow-hidden"
      style={{
        // Simulación de estudio: Foco cenital dorado que se funde a marrón oscuro
        background: "radial-gradient(circle at 50% 10%, #FFF3DD 0%, #2D2926 70%)",
        perspective: "1200px", // Habilita el entorno 3D para TODA la página
      }}
    >
      {/* Elementos decorativos borrosos para dar sensación de profundidad (Bokeh 3D) */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-dorado/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-crema/5 blur-3xl pointer-events-none" />

      <h1 className="text-4xl font-bold mb-4 text-crema relative z-10">{t.page.title}</h1>
      <p className="mb-12 text-dorado relative z-10">{t.page.subtitle}</p>
      
      {/* La calculadora ahora vive en este espacio escénico */}
      <Calculadora dict={t.calculator} />
    </main>
  );
}