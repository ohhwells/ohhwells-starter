import { Container } from '@/components/layout/Container';
import type { TestimonialItem } from '@/types/content';
import Image from 'next/image';

interface TestimonialsProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: TestimonialItem[];
}

export function Testimonials({ eyebrow, heading, subheading, items }: TestimonialsProps) {
  return (
    <section className="testimonials">
      <Container>
        <div className="testimonials__header">
          {eyebrow && <p className="eyebrow eyebrow--accent">{eyebrow}</p>}
          <h2 className="section-heading section-heading--light">{heading}</h2>
          {subheading && <p className="section-subheading">{subheading}</p>}
        </div>

        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div key={i} className="testimonials__card">
              <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonials__author">
                {item.photoUrl && (
                  <Image
                    src={item.photoUrl}
                    alt=""
                    className="testimonials__avatar"
                  />
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
