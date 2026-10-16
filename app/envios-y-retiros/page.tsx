import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Envíos y retiros | Mexico Tech Week',
  description: 'Información sobre envío a domicilio y retiro gratuito durante Mexico Tech Week 2026.'
};

export default function ShippingAndPickupPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 text-neutral-200">
      <h1 className="mb-8 text-4xl font-normal text-white">Envío a domicilio o retiro GRATIS en MXTW</h1>
      <section className="mb-10">
        <h2 className="mb-3 text-2xl text-white">Envío a domicilio</h2>
        <p>¡Haz tu pedido desde ahora! Las entregas están estimadas para la semana del <strong>26 de octubre de 2026</strong>, sujetas a los tiempos habituales de envío.</p>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-2xl text-white">Retiro GRATIS durante Mexico Tech Week</h2>
        <p>Recoge tu pedido sin costo los días <strong>27, 28 y 29 de octubre de 2026</strong>, durante los horarios del evento, en cualquiera de nuestras sedes habilitadas:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li><strong>AI House:</strong> Barcelona 26, CDMX.</li>
          <li><strong>Dev House:</strong> Lucerna 34, CDMX.</li>
          <li><strong>Founders &amp; Investors House:</strong> Marsella 45, CDMX.</li>
        </ul>
        <p className="mt-5"><strong>Importante:</strong> El retiro estará disponible únicamente durante estas fechas. Selecciona tu sede al finalizar la compra y espera la confirmación de que tu pedido está listo.</p>
      </section>
      <Link href="/search" className="text-white underline underline-offset-4">Ver productos</Link>
    </article>
  );
}
