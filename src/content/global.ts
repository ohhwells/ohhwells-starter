import type { GlobalContent } from '@/types/content';

export const globalContent: GlobalContent = {
  siteName: 'OhhWells Starter',
  logo: {
    text: 'ohhwells',
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaButton: {
    label: 'Get Started',
    href: '/contact',
  },
  footer: {
    tagline: 'A minimal base for every vibe-coded site.',
    copyright: '© 2026 OhhWells. All rights reserved.',
  },
  socials: [
    { platform: 'instagram', url: 'https://instagram.com/ohhwells' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/ohhwells' },
    { platform: 'twitter', url: 'https://twitter.com/ohhwells' },
  ],
};
