import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { CTACenteredContent } from './CTACentered.types';
import './CTACentered.styles.css';

interface CTACenteredProps {
  content: CTACenteredContent;
}

export function CTACentered({ content }: CTACenteredProps) {
  return (
    <section
      className="cta-centered"
      style={content.backgroundColor ? { background: content.backgroundColor } : undefined}
    >
      <Container>
        <div className="cta-centered__inner">
          <h2 className="cta-centered__headline">{content.headline}</h2>
          {content.subheadline && <p className="cta-centered__sub">{content.subheadline}</p>}
          <div className="cta-centered__actions">
            <Button href={content.ctaHref}>{content.ctaLabel}</Button>
            {content.secondaryCtaLabel && content.secondaryCtaHref && (
              <Button href={content.secondaryCtaHref} variant="secondary">
                {content.secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
