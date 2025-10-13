// components/homepage-hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomepageHero() {
  return (
    <section className="relative w-full">
      {/* Contenedor con proporciones responsivas */}
      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* 
          - En móvil usamos ratio más alto para que no se corte,
          - En desktop extendemos a panorámico.
        */}
        <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] w-full">
          <Image
            src="/Banner-Principal.jpeg"   // <--- tu imagen en /public
            alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover object-center rounded-none md:rounded-2xl"
          />
        </div>

        {/* CTA opcional (puedes quitar este bloque si no quieres botón) */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-4 sm:p-8 md:p-10">
          <div className="pointer-events-auto">
            <Link
              href="/search"
              prefetch={true}
              className="rounded-full bg-black/80 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-black/90 dark:bg-white/90 dark:text-black"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
