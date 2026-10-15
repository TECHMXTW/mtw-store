import Image from 'next/image';
import NewsletterForm from 'components/newsletter-form';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6">
        
        {/* Navegación */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/about" className="hover:text-white transition">Sobre nosotros</Link>
          <Link href="/privacy" className="hover:text-white transition">Política de Privacidad</Link>
        </nav>

        <NewsletterForm />

        {/* Derechos */}
        <p className="text-xs sm:text-sm opacity-90">
          © 2026 Mexico Tech Week. Todos los derechos reservados.
        </p>

        {/* Colaboración */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <p className="text-base font-medium opacity-90">
            En colaboración con
          </p>
          <Link
            href="https://99minutos.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="99minutos.com"
            className="flex items-center justify-center bg-white rounded-md dark:bg-white px-4 py-2 shadow-sm"
          >
            <Image
              src="/web.png"
              alt="99minutos.com"
              width={200}   // 👈 más grande
              height={60}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
