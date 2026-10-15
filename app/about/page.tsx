import Link from 'next/link';

export const metadata = {
  title: 'Sobre nosotros',
  description: 'Conoce Mexico Tech Week y su comunidad tecnológica en CDMX.'
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">Sobre nosotros</h1>
      <div className="space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-300">
        <p>Mexico Tech Week es un evento comunitario donde la comunidad tecnológica se reúne en CDMX. A lo largo de la semana, emprendedores, inversores y startups organizan sus propios eventos descentralizados, incluyendo paneles, eventos de networking, actividades deportivas y más.</p>
        <p>Más info en <a className="underline underline-offset-4" href="https://mexicotechweek.mx" target="_blank" rel="noopener noreferrer">mexicotechweek.mx</a>.</p>
      </div>
      <Link href="/" className="mt-10 inline-block border-b border-current pb-1 font-semibold">Volver a la tienda</Link>
    </section>
  );
}
