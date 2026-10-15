const HERO_URL =
  'https://cdn.shopify.com/s/files/1/0626/7328/9258/files/HERO_MXTW_26.png?v=1792005799';

export default function HomepageHero() {
  return (
    <section aria-label="Mexico Tech Week 2026 official merchandise" className="w-full bg-black">
      {/* Preserve the source image's native aspect ratio on every screen. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_URL}
        alt="Mexico Tech Week 2026 — Official Merch Store"
        className="block h-auto w-full"
        loading="eager"
        fetchPriority="high"
      />
    </section>
  );
}
