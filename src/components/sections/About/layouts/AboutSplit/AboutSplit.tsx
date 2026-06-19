import { Container } from '@/components/layout/Container';
import type { AboutSplitContent } from './AboutSplit.types';
import './AboutSplit.styles.css';

interface AboutSplitProps {
  content: AboutSplitContent;
}

export function AboutSplit({ content }: AboutSplitProps) {
  const imageFirst = content.imagePosition === 'left';
  const paragraphs = content.body.split('\n\n').filter(Boolean);

  const image = (
    <div
      className="about-split__image"
      style={{ backgroundImage: `url(${content.imageUrl})` }}
      role="img"
      aria-label=""
    />
  );

  const text = (
    <div className="about-split__text">
      <h2 className="about-split__heading">{content.heading}</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="about-split__body">
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <section className="about-split">
      <Container>
        <div className="about-split__grid">
          {imageFirst ? (
            <>
              {image}
              {text}
            </>
          ) : (
            <>
              {text}
              {image}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
