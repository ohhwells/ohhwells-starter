import { contactContent } from '@/content/contact';
import { Container } from '@/components/layout/Container';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description: "Let's work together. Tell us about your project.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <section className="page-section">
      <Container>
        {contactContent.eyebrow && (
          <p className="eyebrow">{contactContent.eyebrow}</p>
        )}
        <h1 className="page-section__headline">{contactContent.headline}</h1>

        <form className="contact-form">
          {contactContent.fields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              required={field.required}
            />
          ))}
          <Button type="submit">{contactContent.submitText}</Button>
        </form>
      </Container>
    </section>
  );
}
