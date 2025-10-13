import { getCollectionProducts } from 'lib/shopify';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'La tienda oficial del Mexico Tech Week',
  openGraph: {
    type: 'website',
    url: 'https://store.mexicotechweek.mx'
  }
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'accesorios' });

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-2xl font-semibold text-white">MXTW Store</h1>

        {!products?.length ? (
          <p className="text-neutral-400">Pronto habrá productos.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {products.map((p) => (
              <a key={p.id} href={`/product/${p.handle}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.featuredImage?.url}
                    alt={p.featuredImage?.altText ?? p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-base font-medium text-white/90">{p.title}</h3>
                  <span className="text-sm text-white/70">
                    {p.priceRange?.minVariantPrice?.amount}{' '}
                    {p.priceRange?.minVariantPrice?.currencyCode}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
