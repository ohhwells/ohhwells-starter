import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { HeroContent } from '@/types/content';

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundImage,
}: HeroContent) {
  return (
    <section className="hero">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1 className="hero__headline">{headline}</h1>

        <p className="hero__sub">{subheadline}</p>

        <div className="hero__actions">
          <Button href={ctaHref}>{ctaLabel}</Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button href={secondaryCtaHref} variant="ghost">
              {secondaryCtaLabel} <span aria-hidden="true">&rarr;</span>
            </Button>
          )}
        </div>

        {backgroundImage && (
          <div
            className="hero__image"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}
      </Container>
    </section>
  );
}
