import Link from 'next/link';

export default function EventPickupNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="mt-5 border border-neutral-700 bg-neutral-950 px-4 py-4 text-sm leading-relaxed text-neutral-200" aria-label="Opciones de entrega y retiro">
      <p className="mb-3 font-semibold text-white">Envío a domicilio o retiro GRATIS en MXTW</p>
      <p className="font-semibold text-white">Envío a domicilio</p>
      <p className="mt-1">¡Haz tu pedido desde ahora! Las entregas están estimadas para la semana del <strong className="text-white">26 de octubre de 2026</strong>, sujetas a los tiempos habituales de envío.</p>
      <p className="mt-3 font-semibold text-white">Retiro GRATIS durante Mexico Tech Week</p>
      <p className="mt-1">Recoge tu pedido sin costo los días <strong className="text-white">27, 28 y 29 de octubre de 2026</strong>, durante los horarios del evento, en cualquiera de nuestras sedes habilitadas:</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-neutral-300">
        <li><strong className="text-white">AI House:</strong> Barcelona 26, CDMX.</li>
        <li><strong className="text-white">Dev House:</strong> Lucerna 34, CDMX.</li>
        <li><strong className="text-white">Founders &amp; Investors House:</strong> Marsella 45, CDMX.</li>
      </ul>
      <p className="mt-3"><strong className="text-white">Importante:</strong> El retiro estará disponible únicamente durante estas fechas. Selecciona tu sede al finalizar la compra y espera la confirmación de que tu pedido está listo.</p>
      <Link href="/envios-y-retiros" className="mt-3 inline-block text-sm text-white underline underline-offset-4">Ver condiciones y sedes →</Link>
    </aside>
  );
}
