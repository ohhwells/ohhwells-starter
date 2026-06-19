import { servicesContent } from '@/content/services';
import { ServicesLayouts } from '@/components/sections/Services';
import { Container } from '@/components/layout/Container';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Services',
  description: 'What we build with the OhhWells starter template.',
  path: '/services',
});

export default function ServicesPage() {
  const Services = ServicesLayouts.grid.component;

  return (
    <>
      <section className="page-section">
        <Container>
          {servicesContent.eyebrow && (
            <p className="eyebrow">{servicesContent.eyebrow}</p>
          )}
          <h1 className="page-section__headline">{servicesContent.headline}</h1>
          <p className="page-section__body">{servicesContent.subheadline}</p>
        </Container>
      </section>
      <Services
        content={{
          heading: '',
          items: servicesContent.services,
        }}
      />
    </>
  );
}
