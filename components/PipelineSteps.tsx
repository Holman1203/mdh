import { pipelineSteps } from "@/lib/site-data";

export default function PipelineSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {pipelineSteps.map((s, i) => (
        <li key={s.title} className="relative rounded-tile border border-black/10 bg-white p-6">
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-card bg-brand font-heading text-lg font-bold text-white">
            {i + 1}
          </span>
          <h3 className="font-heading text-lg font-bold text-brand">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-black/70">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
