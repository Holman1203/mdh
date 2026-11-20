import type { ReactNode } from "react";

/** Consistent page section: tone = white | tint (soft brand tint) | dark (Deep Navy). */
export default function Section({
  children,
  tone = "white",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "tint" | "dark";
  id?: string;
  className?: string;
}) {
  const bg =
    tone === "dark" ? "on-navy relative overflow-hidden bg-navy text-snow" : tone === "tint" ? "bg-brand/5" : "bg-white";
  return (
    <section id={id} className={`${bg} scroll-mt-24 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
