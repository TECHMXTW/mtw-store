import Link from 'next/link';
import NewsletterForm from 'components/newsletter-form';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111] px-6 pb-14 pt-20 text-neutral-300">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 text-center">
        <NewsletterForm />
        <div className="flex flex-col items-center gap-4 border-t border-neutral-800 pt-9 text-sm text-neutral-400 w-full">
          <p>© 2026, Mexico Tech Week</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link href="/about" className="hover:text-white">Sobre nosotros</Link>
            <Link href="/privacy" className="hover:text-white">Política de privacidad</Link>
          </nav>
          <p className="text-xs text-neutral-500">En colaboración con <a href="https://99minutos.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">99minutos.com</a></p>
        </div>
      </div>
    </footer>
  );
}
