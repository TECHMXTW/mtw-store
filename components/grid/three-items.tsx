// components/grid/three-items.tsx
import Link from 'next/link';
import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts, getProducts } from 'lib/shopify';

const HOMEPAGE_HANDLE = 'hidden-homepage-collection';

export async function ThreeItemGrid() {
  // Intenta con la colección “oculta” de homepage
  let products = await getCollectionProducts({
    collection: HOMEPAGE_HANDLE
  });

  // Fallback: si la colección está vacía, toma los más recientes
  if (!products?.length) {
    products = await getProducts({ sortKey: 'CREATED_AT', reverse: true });
  }

  // Limita a 6 para un grid limpio
  const visible = products.slice(0, 6);

  if (!visible.length) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => {
          const price = product.priceRange?.maxVariantPrice;
          return (
            <li key={product.handle} className="group">
              <Link href={`/product/${product.handle}`} className="block">
                {/* Imagen con etiqueta flotante (pill) */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <GridTileImage
                    src={product.featuredImage?.url}
                    alt={product.featuredImage?.altText || product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    label={{
                      title: product.title,
                      amount: price?.amount || '',
                      currencyCode: price?.currencyCode || 'MXN'
                    }}
                  />
                </div>

                {/* Caption bajo la imagen */}
                <div className="mt-2 flex items-baseline justify-between">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {product.title}
                  </h3>
                  {price?.amount ? (
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {Number(price.amount).toLocaleString('es-MX', {
                        style: 'currency',
                        currency: price.currencyCode || 'MXN',
                        maximumFractionDigits: 0
                      })}
                    </span>
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
