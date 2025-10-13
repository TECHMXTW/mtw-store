import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/search/accesorios', label: 'Accesorios' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" aria-label="MXTW">
          <Image src="/logo-mxtw.svg" alt="MXTW" width={32} height={32} priority />
        </Link>

        <nav className="hidden gap-6 sm:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
