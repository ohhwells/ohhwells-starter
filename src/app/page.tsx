import { homeContent } from '@/content/home';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <Services {...homeContent.services} />
      <AboutPreview {...homeContent.about} />
      <Testimonials {...homeContent.testimonials} />
      <CallToAction {...homeContent.cta} />
    </>
  );
}
