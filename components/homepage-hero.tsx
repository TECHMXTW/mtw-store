// components/homepage-hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import hero from '@/public/Banner-Principal.jpeg'; // ✅ import estático, evita rutas rotas

export default function HomepageHero() {
  return (
    <section className="relative w-full">
      <div className="relative mx-auto w-full max-w-[1600px]">
        {/* Altura controlada: no “empuja” demasiado la página */}
        <div className="relative w-full aspect-[16/9] max-h-[520px] sm:max-h-[560px] md:max-h-[600px]">
          <Image
            src={hero}
            alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover object-center rounded-none md:rounded-2xl"
          />
        </div>

        {/* CTA opcional */}
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
