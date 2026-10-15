import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Información sobre la política de privacidad de la tienda Mexico Tech Week.'
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <h1 className="mb-8 text-4xl font-bold uppercase tracking-tight sm:text-5xl">Política de Privacidad</h1>
      <p className="mb-6 leading-8 text-neutral-700 dark:text-neutral-300">
        La tienda utiliza Shopify para procesar las compras. Puedes consultar la información de privacidad publicada en nuestra tienda de Shopify.
      </p>
      <a
        href="https://mexicotechweek.myshopify.com/policies/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border-b border-current pb-1 font-semibold underline-offset-4 hover:opacity-70"
      >
        Consultar la política de privacidad en Shopify
      </a>
      <p className="mt-10 text-sm text-neutral-500">
        Si el enlace no está disponible, contáctanos para solicitar la versión vigente de la política.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm underline underline-offset-4">Volver a la tienda</Link>
    </section>
  );
}
