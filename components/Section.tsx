import type { ReactNode } from "react";

/** Consistent page section: tone = white | tint (brand/5) | dark (indigo). */
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
  const bg = tone === "dark" ? "bg-brand text-white" : tone === "tint" ? "bg-brand/5" : "bg-white";
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
