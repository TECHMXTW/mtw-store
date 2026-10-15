import { AddToCart } from 'components/cart/add-to-cart';
import EventPickupNotice from 'components/event-pickup-notice';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col">
        <h1 className="mb-5 text-4xl font-normal leading-tight tracking-normal sm:text-5xl">{product.title}</h1>
        <div className="mr-auto w-auto text-xl font-normal tracking-wide text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
      <EventPickupNotice />
    </>
  );
}
