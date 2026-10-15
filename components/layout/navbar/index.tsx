import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import { UserIcon } from '@heroicons/react/24/outline';

const HEADER_LOGO =
  'https://cdn.shopify.com/s/files/1/0626/7328/9258/files/X_-_1_-_Edited.png?v=1792007401';

export async function Navbar() {
  // Match Dawn's visible navigation while preserving the existing Shopify catalog.
  const menu = await getMenu('next-js-frontend-header-menu');
  const catalog = (menu || []).find((item: Menu) => /catalog|catálogo|accesorios/i.test(item.title));
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: catalog?.path || '/search' },
    { title: 'Contact', path: '/pages/contact' }
  ];

  return (
    <nav className="relative flex items-center justify-between bg-black px-4 py-5 text-white lg:px-6">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={navigation} />
        </Suspense>
      </div>

      <div className="flex w-full items-center">
        {/* Logo + Nombre */}
        <div className="flex w-full items-center md:w-auto">
          <Link
            href="/"
            prefetch={true}
            className="mr-4 flex w-full items-center justify-center md:w-auto lg:mr-9"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HEADER_LOGO}
              alt="Mexico Tech Week — Tecnológico de Monterrey y Branddu"
              className="h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[260px]"
            />
          </Link>

          {/* Menú principal (sin Founder Mode) */}
          {filteredMenu.length ? (
            <ul className="hidden gap-8 text-base md:flex md:items-center">
              {filteredMenu.map((item: Menu) => (
                <li key={`${item.title}-${item.path}`}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-200 underline-offset-4 hover:text-white hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Buscador */}
        <div className="hidden flex-1 justify-end px-6 md:flex">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>

        {/* Dawn-inspired header actions */}
        <div className="flex items-center justify-end gap-5 md:w-auto">
          <Link href="/account" aria-label="Cuenta" className="hidden text-white hover:text-neutral-300 md:block"><UserIcon /></Link>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
