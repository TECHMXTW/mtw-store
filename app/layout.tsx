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

const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

const siteName = SITE_NAME || 'Mexico Tech Week Store';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

// 👇 cambia este valor cuando quieras forzar recacheo de iconos/social
const ASSET_VERSION = '20251013';

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
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: 'La tienda oficial del Mexico Tech Week',
  robots: {
    follow: true,
    index: true
  },

  // ---------- ICONOS (WhatsApp usa mucho estos) ----------
  icons: {
    icon: [
      { url: `/favicon-32x32.png?v=${ASSET_VERSION}`, sizes: '32x32', type: 'image/png' },
      { url: `/favicon-16x16.png?v=${ASSET_VERSION}`, sizes: '16x16', type: 'image/png' },
      { url: `/favicon.png?v=${ASSET_VERSION}`, type: 'image/png' }
    ],
    apple: [
      { url: `/apple-touch-icon.png?v=${ASSET_VERSION}`, sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [`/favicon.png?v=${ASSET_VERSION}`]
  },

  // ---------- OPEN GRAPH (imagen grande del preview) ----------
  openGraph: {
    type: 'website',
    url: 'https://store.mexicotechweek.mx/',
    siteName: siteName,
    title: siteName,
    description: 'La tienda oficial del Mexico Tech Week',
    // usa URL ABSOLUTA para evitar problemas de crawlers
    images: [
      {
        url: 'https://store.mexicotechweek.mx/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mexico Tech Week Store'
      }
    ]
  },

  // ---------- Twitter Card (también lo usan algunas apps) ----------
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'La tienda oficial del Mexico Tech Week',
    creator: twitterCreator,
    site: twitterSite,
    images: ['https://store.mexicotechweek.mx/og-image.jpg']
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
