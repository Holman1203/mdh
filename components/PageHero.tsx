import type { ReactNode } from "react";

/** Inner-page hero: full-width indigo band, uppercase title, orange divider (after the sample hero). */
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-brand">
      {/* decorative rounded squares (logo motif) */}
      <div className="pointer-events-none absolute -right-10 top-8 hidden gap-3 lg:grid lg:grid-cols-2" aria-hidden="true">
        <span className="h-32 w-32 rounded-tile bg-white/10" />
        <span className="h-32 w-32 rounded-tile bg-accent" />
        <span className="h-32 w-32 rounded-tile bg-white/10" />
        <span className="h-32 w-32 rounded-tile bg-white/10" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-white/80">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <span className="mt-5 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}
