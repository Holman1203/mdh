import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
  className?: string;
};

// primary   = orange background, white bold text (one per screen)
// secondary = indigo outline, indigo text
// light     = white outline, white text (for use on indigo backgrounds)
const styles = {
  primary:
    "bg-accent text-white font-bold text-[19px] hover:bg-accent/90 border-2 border-accent",
  secondary:
    "border-2 border-brand text-brand font-semibold text-base hover:bg-brand/5",
  light: "border-2 border-white text-white font-semibold text-base hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-card px-6 py-3 transition-colors duration-200 ${styles[variant]} ${className}`;
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
