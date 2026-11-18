import type { ReactNode } from "react";

/** Inner-page hero: tinted background, eyebrow, title, intro and optional actions. */
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
    <div className="bg-brand/5">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
          <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight text-brand sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </div>
  );
}
