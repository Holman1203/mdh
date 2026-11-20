import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

/**
 * primary   = orange background, bold NAVY text (white on orange fails WCAG AA contrast)
 * secondary = navy outline (white outline in dark mode)
 * light     = white outline, for use on navy areas
 * All have hover, focus-visible and active states and a 48px minimum tap height.
 */
const styles = {
  primary:
    "border-2 border-accent bg-accent font-bold text-navy shadow-soft hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lift active:translate-y-0 active:scale-[0.98]",
  secondary:
    "border-2 border-brand font-semibold text-brand hover:-translate-y-0.5 hover:bg-brand/10 active:translate-y-0 active:scale-[0.98]",
  light:
    "border-2 border-snow/80 font-semibold text-snow hover:-translate-y-0.5 hover:bg-snow/10 active:translate-y-0 active:scale-[0.98]",
};

export default function Button({ href, children, variant = "primary", external, className = "" }: Props) {
  const cls = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-card px-6 py-3 text-base transition-all duration-200 ${styles[variant]} ${className}`;
  if (external || href.startsWith("http") || href.endsWith(".pdf")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
