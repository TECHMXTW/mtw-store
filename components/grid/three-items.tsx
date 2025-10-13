// components/grid/three-items.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getCollectionProducts } from 'lib/shopify';

function formatCurrency(value: string, currency: string) {
  const number = Number(value);
  try {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency
    }).format(number);
  } catch {
    return `${number} ${currency}`;
  }
}

export async function ThreeItemGrid() {
  // usa tu colección "hidden-homepage-collection"
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-collection'
  });

  // por si viene vacía, no rendereamos nada:
  if (!products?.length) return null;

  // Nos quedamos con los primeros 3–6, según quieras
  const items = products.slice(0, 6);

  return (
    <section className="mx-auto mb-10 mt-8 w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
      {/* grid responsiva */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => {
          const price = product.priceRange?.maxVariantPrice;
          const description =
            (product.description || '')
              .replace(/<[^>]+>/g, '')              // por si viniera con HTML
              .replace(/\s+/g, ' ')
              .trim()
              .slice(0, 140) || '';                // recorte suave

          return (
            <li key={product.handle} className="group">
              <Link
                href={`/product/${product.handle}`}
                prefetch={true}
                className="block overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                {/* Imagen */}
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.featuredImage?.url || '/placeholder.png'}
                    alt={product.featuredImage?.altText || product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Contenido: título, precio, descripción */}
                <div className="space-y-2 px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="line-clamp-1 text-base font-semibold tracking-tight">
                      {product.title}
                    </h3>

                    {price ? (
                      <span className="whitespace-nowrap rounded-full bg-blue-600/90 px-2.5 py-1 text-xs font-semibold text-white dark:bg-blue-500/90">
                        {formatCurrency(price.amount, price.currencyCode)}
                      </span>
                    ) : null}
                  </div>

                  {/* Descripción corta */}
                  {description ? (
                    <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
                      {description}
                    </p>
                  ) : null}
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
