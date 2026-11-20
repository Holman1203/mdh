import Link from "next/link";
import Icon from "./Icon";
import { pillars } from "@/lib/site-data";

/**
 * The five pillars as glass cards.
 * desktopOnly: staggered, gently floating column beside the headline (lg+).
 * default: compact wrapping chips shown under the buttons on small screens only.
 */
const offsets = ["ml-0", "ml-12", "ml-4", "ml-16", "ml-8"];

export default function HeroPillars({ desktopOnly = false }: { desktopOnly?: boolean }) {
  if (desktopOnly) {
    return (
      <ul className="flex flex-col gap-4" aria-label="Our five pillars">
        {pillars.map((p, i) => (
          <li key={p.id} className={`${offsets[i]} animate-float`} style={{ animationDelay: `${i * 0.7}s` }}>
            <Link
              href={`/services/#${p.id}`}
              className="group flex items-center gap-4 rounded-tile border border-snow/20 bg-snow/10 p-4 pr-6 shadow-lift backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-snow/15"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-accent text-navy transition-transform duration-300 group-hover:scale-110">
                <Icon name={p.icon} />
              </span>
              <span>
                <span className="block text-3xl leading-none text-snow">{p.name}</span>
                <span className="mt-1 block text-sm text-snow/80">{p.tagline}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="mt-8 flex flex-wrap gap-2 lg:hidden" aria-label="Our five pillars">
      {pillars.map((p) => (
        <li key={p.id}>
          <Link
            href={`/services/#${p.id}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-snow/25 bg-snow/10 px-4 text-sm font-semibold text-snow backdrop-blur transition-colors hover:border-accent hover:bg-snow/15"
          >
            <Icon name={p.icon} className="h-4 w-4 text-accent" />
            {p.short}
          </Link>
        </li>
      ))}
    </ul>
  );
}
