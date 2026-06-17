import { Container } from '@/components/layout/Container';
import type { ServiceItem } from '@/types/content';
import Image from 'next/image';

interface ServicesProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: ServiceItem[];
}

export function Services({ eyebrow, heading, subheading, items }: ServicesProps) {
  return (
    <section className="services">
      <Container>
        <div className="services__header">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="section-heading">{heading}</h2>
          </div>
          {subheading && <p className="services__sub">{subheading}</p>}
        </div>

        <div className="services__grid">
          {items.map((item, i) => (
            <div key={i} className="services__card">
              {item.iconUrl && (
                <Image
                  src={item.iconUrl}
                  alt=""
                  className="services__icon"
                />
              )}
              <h3 className="services__title">{item.title}</h3>
              <p className="services__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
