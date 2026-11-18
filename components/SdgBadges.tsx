import { sdgs } from "@/lib/site-data";

export default function SdgBadges({ onDark = false }: { onDark?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sdgs.map((g) => (
        <li
          key={g.number}
          className={`flex items-center gap-4 rounded-tile p-5 ${
            onDark ? "bg-white/10 text-white" : "border border-black/10 bg-white"
          }`}
        >
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-card font-heading text-xl font-extrabold ${
              onDark ? "bg-white text-brand" : "bg-brand text-white"
            }`}
          >
            {g.number}
          </span>
          <span>
            <span className={`block text-xs font-semibold uppercase tracking-wider ${onDark ? "text-white/80" : "text-black/60"}`}>
              SDG {g.number}
            </span>
            <span className={`block font-semibold leading-snug ${onDark ? "text-white" : "text-brand"}`}>
              {g.name}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
