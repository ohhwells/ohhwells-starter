import { Container } from '@/components/layout/Container';
import type { AboutPreviewContent } from '@/types/content';

export function AboutPreview({
  heading,
  body,
  imageUrl,
  imagePosition,
}: AboutPreviewContent) {
  const image = (
    <div
      className="about-preview__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );

  const text = (
    <div className="about-preview__text">
      <h2 className="section-heading">{heading}</h2>

      {body.map((paragraph, i) => (
        <p key={i} className="about-preview__body">
          {paragraph}
        </p>
      ))}
    </div>
  );

  return (
    <section className="about-preview">
      <Container>
        <div className="about-preview__grid">
          {imagePosition === 'left' ? (
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
