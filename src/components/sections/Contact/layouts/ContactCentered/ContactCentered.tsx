import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import type { ContactCenteredContent } from './ContactCentered.types';
import './ContactCentered.styles.css';

interface ContactCenteredProps {
  content: ContactCenteredContent;
}

export function ContactCentered({ content }: ContactCenteredProps) {
  return (
    <section className="contact-centered">
      <Container>
        <div className="contact-centered__header">
          <h1 className="contact-centered__heading">{content.heading}</h1>
          {content.subheading && <p className="contact-centered__sub">{content.subheading}</p>}
        </div>

        <form className="contact-centered__form">
          {content.formFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              type={field.type}
              required={field.required}
            />
          ))}
          <Button type="submit">{content.submitLabel}</Button>
        </form>
      </Container>
    </section>
  );
}
