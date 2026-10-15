import Link from 'next/link';

export const metadata = {
  title: 'Sobre nosotros',
  description: 'Conoce la tienda oficial de Mexico Tech Week.'
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Mexico Tech Week</p>
      <h1 className="mb-8 text-4xl font-bold uppercase tracking-tight sm:text-6xl">Sobre nosotros</h1>
      <div className="space-y-5 text-base leading-8 text-neutral-700 dark:text-neutral-300">
        <p>Bienvenido a la tienda oficial de Mexico Tech Week, un espacio para encontrar merchandise de nuestra comunidad.</p>
        <p>Explora nuestra colección de productos y lleva contigo un recuerdo de Mexico Tech Week.</p>
      </div>
      <Link href="/search" className="mt-10 inline-block border-b border-current pb-1 font-semibold uppercase tracking-wide">Explorar productos</Link>
    </section>
  );
}
