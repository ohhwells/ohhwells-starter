import type { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'OhhWells Starter Template',
    headline: 'A minimal base for every vibe-coded site.',
    subheadline:
      'Clean structure, content-driven architecture, and a brand layer ready for any client. Swap colors, fonts, and copy — nothing else changes.',
    ctaText: 'Start a project',
    ctaLink: '/contact',
    secondaryCtaText: 'Learn more',
    secondaryCtaLink: '/about',
    backgroundImage:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop&q=80',
  },
  services: {
    eyebrow: "What's included",
    headline: 'Every layer, already built.',
    subheadline:
      'Six core conventions that make every OhhWells site consistent, editable, and fast to launch.',
    items: [
      {
        num: '01',
        title: 'Brand Layer',
        description:
          'All visual tokens — colors, fonts, spacing — live in brand.ts. One file controls the entire look of the site.',
      },
      {
        num: '02',
        title: 'Content Convention',
        description:
          'Content lives in typed TS objects. Components receive data via props. The OhhWells Content API can override any field.',
      },
      {
        num: '03',
        title: 'Ownership Model',
        description:
          'Developers own the template structure. Clients own the data. Clean handoff, zero conflicts.',
      },
      {
        num: '04',
        title: 'App Router',
        description:
          'Built on Next.js App Router with server components, typed metadata, and SEO utilities baked in.',
      },
      {
        num: '05',
        title: 'Typed Everywhere',
        description:
          'Every content shape has an interface in types/content.ts. Catch errors at build time, not in production.',
      },
      {
        num: '06',
        title: 'Deploy Ready',
        description:
          'Sitemap, robots.txt, OG images, 404, error pages. Configured out of the box for Vercel or any host.',
      },
    ],
  },
  about: {
    eyebrow: 'About this template',
    headline: 'Built once. Customised forever.',
    body: [
      'The OhhWells starter is a neutral canvas — no opinionated colors, no industry-specific imagery. It gives you the architecture: brand tokens, content conventions, typed props, and App Router scaffolding.',
      'From here, every site fork gets a unique brand, real photography, and genuine copy — all while staying compatible with the OhhWells editor.',
    ],
    stats: [
      { value: '3', label: 'OhhWells conventions' },
      { value: '20+', label: 'Starter components' },
      { value: '∞', label: 'Client skins' },
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    headline: 'Builders who rely on it.',
    items: [
      {
        quote:
          'The content convention means I can hand off to any client knowing they won\'t accidentally break the layout.',
        author: 'Alex Kim',
        role: 'Web Developer',
        initials: 'AK',
      },
      {
        quote:
          'Switching brand tokens takes two minutes. I\'ve launched five client sites from this base in a month.',
        author: 'Sophie Laurent',
        role: 'Freelance Designer',
        initials: 'SL',
      },
      {
        quote:
          'TypeScript interfaces on every content shape means zero runtime surprises. It just works.',
        author: 'Marcus Webb',
        role: 'Frontend Engineer',
        initials: 'MW',
      },
    ],
  },
  cta: {
    eyebrow: 'Ready to build',
    headline: 'Fork it. Brand it. Ship it.',
    subheadline:
      'The base template is your starting point. Every client gets a unique skin on top of the same solid architecture.',
    ctaText: 'Start a project',
    ctaLink: '/contact',
    secondaryCtaText: 'View on GitHub',
    secondaryCtaLink: '#',
  },
};
