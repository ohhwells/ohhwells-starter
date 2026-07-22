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
    <section
      className="contact-centered"
      data-ohw-section="contact"
      data-ohw-section-label="Contact"
    >
      <Container>
        <div className="contact-centered__header">
          <h1
            className="contact-centered__heading"
            data-ohw-editable="text"
            data-ohw-key="contact-heading"
            data-ohw-max-length="80"
          >
            {content.heading}
          </h1>
          {content.subheading && (
            <p
              className="contact-centered__sub"
              data-ohw-editable="text"
              data-ohw-key="contact-subheading"
              data-ohw-max-length="160"
            >
              {content.subheading}
            </p>
          )}
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
