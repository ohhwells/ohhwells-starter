'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="page-section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <p className="eyebrow">Error</p>
        <h1 className="page-section__headline" style={{ maxWidth: 'none' }}>
          Something went wrong.
        </h1>
        <p className="page-section__body" style={{ margin: '0 auto 2rem' }}>
          An unexpected error occurred. Please try again.
        </p>
        <Button onClick={reset}>Try again</Button>
      </Container>
    </section>
  );
}
