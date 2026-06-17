// ─── Content Types ─────────────────────────────────────────────────────────
// Every content file imports its shape from here.
// The OhhWells Content API will serve data matching these interfaces.

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImageUrl?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconUrl?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  photoUrl?: string;
}

export interface CTAContent {
  headline: string;
  subheadline?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutPreviewContent {
  heading: string;
  body: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
}

export interface ServicesPageContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  services: ServiceItem[];
}

export interface AboutPageContent {
  eyebrow?: string;
  headline: string;
  body: string[];
  image?: string;
  stats?: StatItem[];
}

export interface ContactPageContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  fields: ContactField[];
  submitText: string;
}

export interface ContactField {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
}

export interface HomeContent {
  hero: HeroContent;
  services: {
    eyebrow?: string;
    heading: string;
    subheading?: string;
    items: ServiceItem[];
  };
  about: AboutPreviewContent;
  testimonials: {
    eyebrow?: string;
    heading: string;
    subheading?: string;
    items: TestimonialItem[];
  };
  cta: CTAContent;
}

// ─── Global Types ──────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface LogoConfig {
  text: string;
  image?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  logoUrl?: string;
  tagline?: string;
  copyrightText: string;
  links: FooterLink[];
}

export interface GlobalContent {
  siteName: string;
  logo: LogoConfig;
  navItems: NavItem[];
  ctaButton?: { label: string; href: string };
  footer: FooterContent;
  socials: SocialLink[];
}

// ─── Brand Types ───────────────────────────────────────────────────────────

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  onPrimary: string;
  primarySurface: string;
  primaryBorder: string;
  onPrimaryMuted: string;
  onPrimaryFaint: string;
  navbarBackground: string;
}

export interface BrandFonts {
  heading: string;
  body: string;
}

export interface BrandSpacing {
  section: string;
  container: string;
  gap: string;
}

export interface BrandRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Brand {
  colors: BrandColors;
  fonts: BrandFonts;
  spacing: BrandSpacing;
  borderRadius: BrandRadius;
}
