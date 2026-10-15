import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Envíos y retiros | Mexico Tech Week',
  description: 'Información sobre envío a domicilio y retiro gratuito durante Mexico Tech Week 2026.'
};

export default function ShippingAndPickupPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14 text-neutral-200">
      <h1 className="mb-8 text-4xl font-normal text-white">Envíos y retiros</h1>
      <section className="mb-10">
        <h2 className="mb-3 text-2xl text-white">Envío a domicilio</h2>
        <p>Puedes comprar desde ahora y solicitar envío a domicilio. El costo y el plazo de entrega se muestran durante el checkout, según tu dirección y las opciones disponibles. Los envíos no están limitados a las fechas del evento.</p>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-2xl text-white">Retiro gratuito durante Mexico Tech Week 2026</h2>
        <p>Si eliges retiro en tienda al finalizar tu compra, podrás recoger tu pedido <strong>únicamente el martes 27, miércoles 28 o jueves 29 de octubre de 2026</strong>, durante los horarios de entrega habilitados en el evento.</p>
        <p className="mt-4">Sedes participantes:</p>
        <ul className="mt-3 list-disc space-y-3 pl-6">
          <li><strong>MXTW AI House:</strong> Barcelona 26, 06600 Ciudad de México, CDMX.</li>
          <li><strong>MXTW Devs House:</strong> Calle Lucerna 34, 06600 Ciudad de México, CDMX.</li>
          <li><strong>MXTW Founders &amp; Investors House:</strong> Calle Marsella 45, 06030 Ciudad de México, CDMX.</li>
        </ul>
        <p className="mt-5"><strong>Importante:</strong> no se entregarán pedidos para retiro antes ni después de esas fechas. El horario específico de entrega se comunicará por los canales del evento. Espera la notificación de que tu pedido está listo y presenta tu confirmación de compra y número de pedido.</p>
        <p className="mt-4">La indicación automática de preparación que aparezca en Shopify no modifica las fechas exclusivas de retiro señaladas aquí.</p>
      </section>
      <Link href="/search" className="text-white underline underline-offset-4">Ver productos</Link>
    </article>
  );
}
