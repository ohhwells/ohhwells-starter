import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { HeroCenteredContent } from './HeroCentered.types';
import './HeroCentered.styles.css';

interface HeroCenteredProps {
  content: HeroCenteredContent;
}

export function HeroCentered({ content }: HeroCenteredProps) {
  return (
    <section className="hero-centered">
      <Container>
        <h1 className="hero-centered__headline">{content.headline}</h1>
        <p className="hero-centered__sub">{content.subheadline}</p>
        <div className="hero-centered__actions">
          <Button href={content.ctaHref}>{content.ctaLabel}</Button>
        </div>
        {content.backgroundImageUrl && (
          <div
            className="hero-centered__image"
            style={{ backgroundImage: `url(${content.backgroundImageUrl})` }}
            role="img"
            aria-label=""
          />
        )}
      </Container>
    </section>
  );
}
