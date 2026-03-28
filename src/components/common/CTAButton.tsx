interface CTAButtonProps {
  label: string;
  href: string;
}

export function CTAButton({ label, href }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="inline-block bg-secondary text-dark font-display font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity"
    >
      {label}
    </a>
  );
}
