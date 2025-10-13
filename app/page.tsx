// app/page.tsx
import HomepageHero from 'components/homepage-hero';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Carousel } from 'components/carousel';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'La tienda oficial del Mexico Tech Week',
  openGraph: {
    type: 'website',
    url: 'https://store.mexicotechweek.mx'
  }
};

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
