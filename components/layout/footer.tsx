import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="container mx-auto px-4 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

        {/* Bloque izquierdo: enlaces */}
        <nav className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/about" className="hover:text-white transition">Sobre nosotros</Link>
          <Link href="/privacy" className="hover:text-white transition">Política de Privacidad</Link>
        </nav>

        {/* Bloque derecho: texto + logo */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <p className="text-xs sm:text-sm">© 2023–2025 Todos los derechos reservados.</p>
          
          {/* Texto de colaboración */}
          <p className="text-xs sm:text-sm text-center sm:text-right opacity-90">
            En colaboración con&nbsp;
            <Link
              href="https://99minutos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image
                src="/web.png"
                alt="99minutos.com"
                width={150}  // 👈 aumentamos tamaño
                height={45}
                className="object-contain bg-white rounded-md px-2 py-1 shadow-sm dark:bg-white"
              />
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
}
