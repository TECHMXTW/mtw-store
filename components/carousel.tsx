// components/carousel.tsx
import Link from 'next/link';
import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';

const CAROUSEL_HANDLE = 'hidden-homepage-carousel';
const HOMEPAGE_HANDLE = 'hidden-homepage-collection';

export async function Carousel() {
  let products = await getCollectionProducts({ collection: CAROUSEL_HANDLE });

  // Fallback si no hay carrusel configurado
  if (!products?.length) {
    products = await getCollectionProducts({ collection: HOMEPAGE_HANDLE });
  }
  if (!products?.length) return null;

  // Duplica para loop infinito en pantallas grandes
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => {
          const price = product.priceRange?.maxVariantPrice;
          return (
            <li
              key={`${product.handle}-${i}`}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Link href={`/product/${product.handle}`} className="relative block h-full w-full">
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  label={{
                    title: product.title,
                    amount: price?.amount || '',
                    currencyCode: price?.currencyCode || 'MXN'
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Carousel;
