import type { Metadata } from 'next';
import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: pageHandle } = await params;
  const page = await getPage(pageHandle);
  if (!page) notFound();

  const title = page.seo?.title || page.title || 'Página';
  const description = page.seo?.description || page.bodySummary || '';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt
    }
  };
}

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageHandle } = await params;
  const page = await getPage(pageHandle);
  if (!page) notFound();

  const updated =
    page.updatedAt &&
    new Intl.DateTimeFormat('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(page.updatedAt));

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={(page.body as string) ?? ''} />
      {updated ? (
        <p className="text-sm italic">
          {`Este documento se actualizó por última vez el ${updated}.`}
        </p>
      ) : null}
    </>
  );
}
