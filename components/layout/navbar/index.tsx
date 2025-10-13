import CartModal from 'components/cart/modal';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  // Trae el menú configurado en Shopify
  const menu = await getMenu('next-js-frontend-header-menu');

  // ❌ Oculta cualquier entrada que sea "Founder Mode" (por título o ruta)
  const filteredMenu = (menu || []).filter((item: Menu) => {
    const title = (item.title || '').toLowerCase();
    const path = (item.path || '').toLowerCase();
    return title !== 'founder mode' && !path.includes('founder') && !path.includes('founder-mode');
  });

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={filteredMenu} />
        </Suspense>
      </div>

      <div className="flex w-full items-center">
        {/* Logo + Nombre */}
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>

          {/* Menú principal (sin Founder Mode) */}
          {filteredMenu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {filteredMenu.map((item: Menu) => (
                <li key={`${item.title}-${item.path}`}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Buscador */}
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        {/* Carrito */}
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
