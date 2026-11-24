import type { ReactNode } from "react";

/** Inner-page hero: Deep Navy with the technical grid and a single orange glow. One H1 per page. */
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
    <div className="on-navy relative isolate overflow-hidden bg-navy">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="glow-orange absolute -right-24 -top-24 -z-10 h-96 w-96" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] sm:text-sm text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] text-snow sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-snow/85 sm:text-xl">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}
