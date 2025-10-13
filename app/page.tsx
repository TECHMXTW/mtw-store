// app/page.tsx
import Image from 'next/image';
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
      {/* 🔥 Hero banner responsivo */}
      <section className="relative w-full">
        <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] w-full">
          <Image
            src="/Banner-Principal.jpeg"
            alt="Conoce la edición limitada de merch — Mexico Tech Week 2025"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-8 text-2xl font-semibold text-white">MXTW Store</h1>

        {!products?.length ? (
          <p className="text-neutral-400">Pronto habrá productos.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {products.map((p) => {
              const price = p.priceRange?.minVariantPrice;
              const shortDescription =
                (p.description || '')
                  .replace(/<[^>]+>/g, '') // elimina etiquetas HTML
                  .trim()
                  .slice(0, 120); // recorta texto largo

              return (
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
                      {price?.amount} {price?.currencyCode}
                    </span>
                  </div>

                  {/* 📝 Descripción corta */}
                  {shortDescription && (
                    <p className="mt-2 text-sm text-neutral-400 line-clamp-3">
                      {shortDescription}
                    </p>
                  )}
                </a>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
