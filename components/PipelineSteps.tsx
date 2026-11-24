import { pipelineSteps } from "@/lib/site-data";

export default function PipelineSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pipelineSteps.map((s, i) => (
        <li
          key={s.title}
          className="relative rounded-tile border border-black/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-card bg-accent text-lg font-semibold text-navy">
            {i + 1}
          </span>
          <h3 className="text-3xl font-semibold tracking-normal text-brand">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-black/70">{s.text}</p>
          {i % 3 !== 2 && i < pipelineSteps.length - 1 && (
            <span className="absolute -right-3 top-10 hidden h-0.5 w-6 bg-accent lg:block" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
