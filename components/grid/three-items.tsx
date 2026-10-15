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
    <section className="mx-auto w-full max-w-[1500px] px-6 py-12 sm:px-8 lg:py-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-normal tracking-normal sm:text-3xl">Featured products</h2>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-x-2 gap-y-8 lg:grid-cols-4">
        {products.slice(0, 6).map((product) => {
          const price = product.priceRange?.minVariantPrice;

          return (
            <li key={product.handle} className="group min-w-0">
              <Link href={`/product/${product.handle}`} className="block">
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  {product.featuredImage?.url ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-neutral-400">
                      Image coming soon
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="text-sm font-normal leading-snug tracking-wide sm:text-base">
                    {product.title}
                  </h3>
                  {price && (
                    <p className="mt-2 text-lg font-normal tracking-wide text-neutral-100 sm:text-xl">
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
