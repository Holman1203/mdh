import { home } from "@/lib/site-data";

/** Full-width indigo band, echoing the blue strip in the sample designs. Real figures only. */
export default function StatsStrip() {
  return (
    <div className="bg-brand">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {home.stats.map((s) => (
          <div key={s.label} className="flex flex-col text-center">
            <dt className="order-2 mt-1 text-sm font-medium text-white/80">{s.label}</dt>
            <dd className="font-heading text-4xl font-extrabold text-white sm:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
