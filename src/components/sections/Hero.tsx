import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { HeroContent } from '@/types/content';

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroContent) {
  return (
    <section className="hero">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1 className="hero__headline">{headline}</h1>

        <p className="hero__sub">{subheadline}</p>

        <div className="hero__actions">
          <Button href={ctaLink}>{ctaText}</Button>
          {secondaryCtaText && secondaryCtaLink && (
            <Button href={secondaryCtaLink} variant="ghost">
              {secondaryCtaText} <span aria-hidden="true">&rarr;</span>
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
