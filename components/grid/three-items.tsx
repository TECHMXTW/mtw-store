import Image from 'next/image';
import Link from 'next/link';
import { getCollectionProducts } from 'lib/shopify';

function formatCurrency(value: string, currency: string) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currency || 'MXN',
    maximumFractionDigits: 2
  }).format(Number(value));
}

export async function ThreeItemGrid() {
  let products = await getCollectionProducts({ collection: 'hidden-homepage-collection' });

  if (!products?.length) {
    products = await getCollectionProducts({ collection: 'accesorios' });
  }

  if (!products?.length) return null;

  return (
    <section className="mx-auto w-full max-w-[1500px] px-4 py-12 sm:px-8 lg:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Mexico Tech Week 2026
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            Featured products
          </h2>
        </div>
        <Link
          href="/search"
          className="border-b border-current pb-1 text-sm font-semibold uppercase tracking-wider hover:opacity-60"
        >
          Shop all
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-6 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => {
          const price = product.priceRange?.minVariantPrice;

          return (
            <li key={product.handle} className="group min-w-0">
              <Link href={`/product/${product.handle}`} className="block">
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  {product.featuredImage?.url ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                      Image coming soon
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="text-sm font-semibold leading-snug sm:text-base">
                    {product.title}
                  </h3>
                  {price && (
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                      {formatCurrency(price.amount, price.currencyCode)}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ThreeItemGrid;
