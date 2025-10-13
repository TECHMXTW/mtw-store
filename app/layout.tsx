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

const koulen = Koulen({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-koulen',
});

const notoSansHanunoo = Noto_Sans_Hanunoo({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans-hanunoo',
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = cookies().get('cartId')?.value;
  const cart = getCart(cartId); // pasamos la Promise al provider

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
