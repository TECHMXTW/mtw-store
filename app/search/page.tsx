import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Ver productos',
  description: 'Explora y busca productos en la tienda.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = (searchParams || {}) as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText =
    products.length === 1 ? 'resultado' : 'resultados';

  return (
    <>
      {/* Título de la página */}
      <h1 className="mb-4 text-2xl font-bold tracking-tight">
        {searchValue ? 'Resultados de búsqueda' : 'Ver productos'}
      </h1>

      {/* Subtítulo cuando hay búsqueda */}
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'No hay productos que coincidan con '
            : `Mostrando ${products.length} ${resultsText} para `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      {/* Grid de productos */}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
