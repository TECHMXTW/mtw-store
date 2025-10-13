// components/homepage-hero.tsx
import Image from 'next/image';

export default function HomepageHero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        {/* Alto del banner responsive */}
        <div className="h-[30vh] sm:h-[40vh] lg:h-[55vh] relative">
          <Image
            src="/Banner-Principal.jpg" // ✅ esta ruta te carga 200 OK
            alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
