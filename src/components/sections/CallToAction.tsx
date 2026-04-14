import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { CTAContent } from '@/types/content';

export function CallToAction({
  eyebrow,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: CTAContent) {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-section__inner">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="cta-section__headline">{headline}</h2>
          <p className="cta-section__sub">{subheadline}</p>
          <div className="cta-section__actions">
            <Button href={ctaLink}>{ctaText}</Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button href={secondaryCtaLink} variant="secondary">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
