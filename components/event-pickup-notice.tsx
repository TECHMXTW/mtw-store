import Link from 'next/link';

export default function EventPickupNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="mt-5 border border-neutral-700 bg-neutral-950 px-4 py-4 text-sm leading-relaxed text-neutral-200" aria-label="Opciones de entrega y retiro">
      <p className="mb-2 font-semibold text-white">Envío a domicilio o retiro GRATIS en MXTW</p>
      <p><strong className="text-white">Envío:</strong> disponible desde ahora, sujeto a los plazos habituales.</p>
      <p className="mt-2"><strong className="text-white">Retiro:</strong> exclusivamente martes 27, miércoles 28 y jueves 29 de octubre de 2026, en los horarios habilitados del evento.</p>
      {!compact && (
        <ul className="mt-2 space-y-1 text-neutral-300">
          <li>AI House — Barcelona 26, CDMX</li>
          <li>Devs House — Lucerna 34, CDMX</li>
          <li>Founders &amp; Investors House — Marsella 45, CDMX</li>
        </ul>
      )}
      <p className="mt-2 text-xs text-neutral-400">El retiro no está disponible antes ni después de estas fechas. Selecciona la sede en el checkout y espera la confirmación de pedido listo.</p>
      <Link href="/envios-y-retiros" className="mt-2 inline-block text-sm text-white underline underline-offset-4">Ver condiciones y sedes</Link>
    </aside>
  );
}
