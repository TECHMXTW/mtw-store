import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="container mx-auto px-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Izquierda: enlaces */}
        <nav className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/about" className="hover:text-white transition">Sobre nosotros</Link>
          <Link href="/privacy" className="hover:text-white transition">Política de Privacidad</Link>
        </nav>

        {/* Derecha: derechos + logo 99minutos */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 sm:justify-end">
          <p className="text-xs sm:text-sm text-center sm:text-right">
            © 2023–2025 Todos los derechos reservados.
          </p>

          {/* Badge para asegurar contraste en dark mode */}
          <Link
            href="https://99minutos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white/95 px-2 py-1 shadow-sm dark:bg-white" // placa clara en dark
            aria-label="Envíos por 99minutos.com"
          >
            <Image
              src="/web.png"           // <-- tu archivo ya en /public
              alt="Envíos por 99minutos.com"
              width={132}              // responsive: ajusta si lo quieres más grande/pequeño
              height={40}
              className="h-6 w-auto sm:h-7 object-contain"
              priority={false}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
