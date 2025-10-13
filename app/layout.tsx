import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { Koulen, Noto_Sans_Hanunoo } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

// 💡 cambia esta fecha si vuelves a actualizar la imagen OG para refrescar caché de los crawlers
const OG_VERSION = '2025-10-13';

const koulen = Koulen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-koulen'
});

const notoSansHanunoo = Noto_Sans_Hanunoo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans-hanunoo'
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME || 'Mexico Tech Week Store',
    template: `%s | ${SITE_NAME || 'Mexico Tech Week Store'}`
  },
  description: 'La tienda oficial del Mexico Tech Week',
  robots: {
    follow: true,
    index: true
  },
  // 👇 Favicon
  icons: {
    icon: '/favicon.png'
  },
  // 👇 Open Graph para WhatsApp / FB / IG (con cache-buster)
  openGraph: {
    type: 'website',
    url: 'https://store.mexicotechweek.mx',
    title: SITE_NAME || 'Mexico Tech Week Store',
    description: 'La tienda oficial del Mexico Tech Week',
    images: [
      {
        url: `/Banner-Principal.jpg?v=${OG_VERSION}`,
        width: 1200,
        height: 630,
        alt: 'Mexico Tech Week Store'
      }
    ]
  },
  // 👇 Twitter Card (también la usan algunas apps de mensajería)
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME || 'Mexico Tech Week Store',
    description: 'La tienda oficial del Mexico Tech Week',
    creator: twitterCreator,
    site: twitterSite,
    images: [`/Banner-Principal.jpg?v=${OG_VERSION}`]
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = cookies().get('cartId')?.value;
  const cart = getCart(cartId);

  return (
    <html lang="es" className={`${koulen.variable} ${notoSansHanunoo.variable}`}>
      <body className="bg-neutral-50 text-black selection:bg-accent dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white font-body">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
  // 👇 Favicon PNG
  icons: {
    icon: '/favicon.png'
  },
  // 👇 Open Graph para WhatsApp / FB / IG
  openGraph: {
    type: 'website',
    url: 'https://store.mexicotechweek.mx',
    title: SITE_NAME || 'Mexico Tech Week Store',
    description: 'La tienda oficial del Mexico Tech Week',
    images: [
      {
        url: '/og-image.jpg', // coloca este archivo en /public
        width: 1200,
        height: 630,
        alt: 'Mexico Tech Week Store'
      }
    ]
  },
  // 👇 Twitter Card (también la usan algunas apps de mensajería)
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME || 'Mexico Tech Week Store',
    description: 'La tienda oficial del Mexico Tech Week',
    creator: twitterCreator,
    site: twitterSite,
    images: ['/og-image.png']
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = cookies().get('cartId')?.value;
  const cart = getCart(cartId);

  return (
    <html lang="es" className={`${koulen.variable} ${notoSansHanunoo.variable}`}>
      <body className="bg-neutral-50 text-black selection:bg-accent dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white font-body">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
            <Toaster closeButton />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
