import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import type { TestimonialsGridContent } from './TestimonialsGrid.types';
import './TestimonialsGrid.styles.css';

interface TestimonialsGridProps {
  content: TestimonialsGridContent;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsGrid({ content }: TestimonialsGridProps) {
  return (
    <section className="testimonials-grid">
      <Container>
        <div className="testimonials-grid__header">
          <h2 className="testimonials-grid__heading">{content.heading}</h2>
          {content.subheading && (
            <p className="testimonials-grid__sub">{content.subheading}</p>
          )}
        </div>

        <div className="testimonials-grid__grid">
          {content.items.map((item, i) => (
            <div key={i} className="testimonials-grid__card">
              <p className="testimonials-grid__quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonials-grid__author">
                {item.photoUrl ? (
                  <Image
                    src={item.photoUrl}
                    alt=""
                    width={36}
                    height={36}
                    className="testimonials-grid__photo"
                  />
                ) : (
                  <div className="testimonials-grid__avatar">{getInitials(item.author)}</div>
                )}
                <div>
                  <div className="testimonials-grid__name">{item.author}</div>
                  {item.role && <div className="testimonials-grid__role">{item.role}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
