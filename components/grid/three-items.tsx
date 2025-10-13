import Link from 'next/link';
import Image from 'next/image';
import { getCollectionProducts } from 'lib/shopify';

/**
 * Utilidad mínima para formatear precios
 */
function money(amount: string, currencyCode: string) {
  const value = Number(amount);
  try {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 0
    }).format(value);
  } catch {
    return `${value} ${currencyCode}`;
  }
}

export async function ThreeItemGrid() {
  // Ajusta la colección si lo necesitas
  const products = await getCollectionProducts({ collection: 'hidden-homepage-featured' })
    .then(p => p.slice(0, 3))
    .catch(() => []);

  if (!products?.length) return null;

  return (
    <section className="px-4 pt-6 md:px-6 md:pt-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.handle}
            href={`/product/${product.handle}`}
            prefetch={true}
            className="group block"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <Image
                src={product.featuredImage?.url || ''}
                alt={product.title}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* Caption: título + precio */}
            <div className="mt-3">
              <h3 className="text-sm font-medium leading-tight md:text-base">
                {product.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {money(
                  product.priceRange.maxVariantPrice.amount,
                  product.priceRange.maxVariantPrice.currencyCode
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
