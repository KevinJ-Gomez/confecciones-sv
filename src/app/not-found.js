import Link from "next/link";

export const metadata = { title: "Página no encontrada | Confecciones SV" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#171412] px-6 text-center text-[#F8EFE2]">
      <div>
        <p className="font-mono text-xs tracking-[0.35em] text-[#D8B66A]">ERROR 404</p>
        <h1 className="mt-5 font-serif text-5xl">Esta página no existe</h1>
        <Link href="/es" className="mt-8 inline-block border border-[#D8B66A] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[#D8B66A] hover:bg-[#D8B66A] hover:text-[#171412]">Volver al inicio</Link>
      </div>
    </main>
  );
}
