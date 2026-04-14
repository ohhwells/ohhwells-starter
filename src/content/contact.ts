import type { ContactPageContent } from '@/types/content';

export const contactContent: ContactPageContent = {
  eyebrow: 'Contact',
  headline: "Let's work together.",
  subheadline:
    'Tell us about your project and we\'ll get back to you within 24 hours.',
  fields: [
    {
      name: 'name',
      placeholder: 'Your name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      placeholder: 'Email address',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      placeholder: 'Tell us about your project',
      type: 'textarea',
      required: true,
    },
  ],
  submitText: 'Send message',
};
