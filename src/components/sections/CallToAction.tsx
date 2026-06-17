import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { CTAContent } from '@/types/content';

export function CallToAction({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: CTAContent) {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-section__inner">
          <h2 className="cta-section__headline">{headline}</h2>
          <p className="cta-section__sub">{subheadline}</p>
          <div className="cta-section__actions">
            <Button href={ctaHref}>{ctaLabel}</Button>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary">
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
