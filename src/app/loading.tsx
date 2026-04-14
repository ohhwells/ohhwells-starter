export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: 'var(--color-textMuted)',
      }}
    >
      Loading...
    </div>
  );
}
