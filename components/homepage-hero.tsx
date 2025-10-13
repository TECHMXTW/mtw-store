// components/homepage-hero.tsx
import Image from 'next/image';

export default function HomepageHero() {
  return (
    <section className="relative w-full">
      {/* Versión mobile: imagen completa (sin recorte) */}
      <div className="block md:hidden">
        <Image
          src="/Banner-Principal.jpg"
          alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
          width={2400} // puedes ajustar según tu imagen original
          height={1000}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>

      {/* Versión desktop: hero panorámico */}
      <div className="relative hidden md:block">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src="/Banner-Principal.jpg"
            alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
            fill
            priority
            sizes="(min-width: 768px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
