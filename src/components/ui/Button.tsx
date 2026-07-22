import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  type?: 'button' | 'submit';
  'data-ohw-key'?: string;
  'data-ohw-editable'?: 'text' | 'plain';
  'data-ohw-max-length'?: number;
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  ...ohwProps
}: ButtonProps) {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <Link href={href} className={className} {...ohwProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...ohwProps}>
      {children}
    </button>
  );
}
