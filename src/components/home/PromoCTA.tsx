import Link from "next/link";

interface PromoCTAProps {
  title: string;
  subtitle?: string;
  href: string;
  variant?: "primary" | "secondary";
}

export function PromoCTA({ title, subtitle, href, variant = "primary" }: PromoCTAProps) {
  const bgClass = variant === "primary" ? "bg-primary" : "bg-secondary";
  const textClass = variant === "primary" ? "text-white" : "text-dark";
  const hoverClass = variant === "primary" ? "hover:bg-primary/90" : "hover:bg-secondary/90";

  return (
    <Link href={href} className={`block group ${bgClass} ${hoverClass} rounded-lg p-6 transition-colors`}>
      <div className="flex flex-col items-center text-center py-4">
        <h3 className={`font-display text-xl font-bold uppercase tracking-wider ${textClass}`}>
          {title}
        </h3>
        {subtitle && (
          <p className={`mt-2 text-sm ${variant === "primary" ? "text-gray-300" : "text-dark/70"}`}>
            {subtitle}
          </p>
        )}
        <span
          className={`mt-4 inline-flex items-center gap-1 text-sm font-display uppercase tracking-wider ${
            variant === "primary" ? "text-secondary" : "text-primary"
          }`}
        >
          Learn More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
