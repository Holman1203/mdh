import { sdgs } from "@/lib/site-data";

export default function SdgBadges({ onDark = false }: { onDark?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sdgs.map((g) => (
        <li
          key={g.number}
          className={`flex items-center gap-4 rounded-tile p-5 transition-all duration-300 hover:-translate-y-1 ${
            onDark ? "border border-snow/15 bg-snow/5 text-snow" : "border border-black/10 bg-white shadow-soft"
          }`}
        >
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-card text-xl font-extrabold ${
              onDark ? "bg-accent text-navy" : "bg-accent text-navy"
            }`}
          >
            {g.number}
          </span>
          <span>
            <span className={`block text-xs font-bold uppercase tracking-wider ${onDark ? "text-snow/80" : "text-black/70"}`}>
              SDG {g.number}
            </span>
            <span className={`block font-semibold leading-snug ${onDark ? "text-snow" : "text-brand"}`}>{g.name}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
