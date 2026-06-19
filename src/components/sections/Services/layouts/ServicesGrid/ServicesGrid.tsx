import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import type { ServicesGridContent } from './ServicesGrid.types';
import './ServicesGrid.styles.css';

interface ServicesGridProps {
  content: ServicesGridContent;
}

export function ServicesGrid({ content }: ServicesGridProps) {
  return (
    <section className="services-grid">
      <Container>
        <div className="services-grid__header">
          <div>
            {content.eyebrow && <p className="services-grid__eyebrow">{content.eyebrow}</p>}
            {content.heading && <h2 className="services-grid__heading">{content.heading}</h2>}
          </div>
          {content.subheading && <p className="services-grid__sub">{content.subheading}</p>}
        </div>

        <div className="services-grid__grid">
          {content.items.map((item, i) => (
            <div key={i} className="services-grid__card">
              {item.iconUrl && (
                <Image
                  src={item.iconUrl}
                  alt=""
                  width={32}
                  height={32}
                  className="services-grid__icon"
                />
              )}
              <h3 className="services-grid__title">{item.title}</h3>
              <p className="services-grid__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
