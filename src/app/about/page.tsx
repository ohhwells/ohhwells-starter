import { aboutContent } from '@/content/about';
import { Container } from '@/components/layout/Container';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About',
  description: 'The story behind the OhhWells starter template.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <section className="page-section">
      <Container>
        {aboutContent.eyebrow && (
          <p className="eyebrow">{aboutContent.eyebrow}</p>
        )}
        <h1 className="page-section__headline">{aboutContent.headline}</h1>
        {aboutContent.body.map((paragraph, i) => (
          <p key={i} className="page-section__body">
            {paragraph}
          </p>
        ))}
      </Container>
    </section>
  );
}
