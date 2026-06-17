import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { HeroContent } from '@/types/content';

export function Hero({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  backgroundImageUrl,
}: HeroContent) {
  return (
    <section className="hero">
      <Container>
        <h1 className="hero__headline">{headline}</h1>

        <p className="hero__sub">{subheadline}</p>

        <div className="hero__actions">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>

        {backgroundImageUrl && (
          <div
            className="hero__image"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          />
        )}
      </Container>
    </section>
  );
}
