import { Container } from '@/components/layout/Container';
import type { AboutPreviewContent } from '@/types/content';

export function AboutPreview({
  eyebrow,
  headline,
  body,
  stats,
  image,
}: AboutPreviewContent) {
  return (
    <section className="about-preview">
      <Container>
        <div className="about-preview__grid">
          {/* Image */}
          {image && (
            <div
              className="about-preview__image"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}

          {/* Text */}
          <div className="about-preview__text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-heading">{headline}</h2>

            {body.map((paragraph, i) => (
              <p key={i} className="about-preview__body">
                {paragraph}
              </p>
            ))}

            {stats && (
              <div className="about-preview__stats">
                {stats.map((stat, i) => (
                  <div key={i} className="about-preview__stat">
                    <div className="about-preview__stat-value">{stat.value}</div>
                    <div className="about-preview__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
