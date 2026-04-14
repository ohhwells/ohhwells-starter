import { Container } from '@/components/layout/Container';
import type { ServiceItem } from '@/types/content';

interface ServicesProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  items: ServiceItem[];
}

export function Services({ eyebrow, headline, subheadline, items }: ServicesProps) {
  return (
    <section className="services">
      <Container>
        <div className="services__header">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-heading">{headline}</h2>
          </div>
          {subheadline && <p className="services__sub">{subheadline}</p>}
        </div>

        <div className="services__grid">
          {items.map((item, i) => (
            <div key={i} className="services__card">
              {item.num && <span className="services__num">{item.num}</span>}
              <h3 className="services__title">{item.title}</h3>
              <p className="services__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
