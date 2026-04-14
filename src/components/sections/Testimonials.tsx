import { Container } from '@/components/layout/Container';
import type { TestimonialItem } from '@/types/content';

interface TestimonialsProps {
  eyebrow?: string;
  headline: string;
  items: TestimonialItem[];
}

export function Testimonials({ eyebrow, headline, items }: TestimonialsProps) {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonials__header">
          {eyebrow && <p className="eyebrow eyebrow--accent">{eyebrow}</p>}
          <h2 className="section-heading section-heading--light">{headline}</h2>
        </div>

        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div key={i} className="testimonials__card">
              <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonials__author">
                {item.initials && (
                  <div className="testimonials__avatar">{item.initials}</div>
                )}
                <div>
                  <div className="testimonials__name">{item.author}</div>
                  <div className="testimonials__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
