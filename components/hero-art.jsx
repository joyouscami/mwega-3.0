/* Art-directed hero image. Decorative: the headline carries the meaning. Desktop uses the full composition, mobile a tighter crop of the paint. */
export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/brand/hero.webp" />
        <img src="/brand/hero-m.webp" alt="" width="900" height="941" fetchPriority="high" decoding="async" />
      </picture>
    </div>
  );
}
