'use client';

import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  /** Ruta en /public, ej: /banner-home.jpg */
  src: string;
  /** Texto alternativo */
  alt?: string;
  /** URL al hacer clic (opcional) */
  href?: string;
};

export default function Hero({ src, alt = 'Banner', href }: HeroProps) {
  const content = (
    <div className="relative w-full overflow-hidden rounded-none md:rounded-xl">
      {/* contenedor con ratio aproximado 21:9 en desktop y 4:5 en móvil */}
      <div className="relative h-[48vw] min-h-[220px] max-h-[520px] md:h-[28vw]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width:1024px) 100vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} prefetch={true} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
