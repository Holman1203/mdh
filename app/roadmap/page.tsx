import type { Metadata } from "next";
import { Check, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import { roadmap } from "@/lib/site-data";

export const metadata: Metadata = {
  title: roadmap.meta.title,
  description: roadmap.meta.description,
  alternates: { canonical: "/roadmap/" },
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero {...roadmap.hero} />

      <Section>
        <ol className="relative mx-auto max-w-4xl">
          {/* vertical line */}
          <span className="absolute bottom-0 left-6 top-0 w-0.5 bg-brand/20 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
          {roadmap.phases.map((p, i) => (
            <li key={p.phase} className="relative mb-12 pl-16 last:mb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
              <span
                className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-card bg-navy font-heading text-lg font-semibold text-snow md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className={`rounded-tile border border-black/10 bg-white p-6 shadow-sm ${i % 2 === 0 ? "md:col-start-1 md:mr-6" : "md:col-start-2 md:ml-6"}`}>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {p.time}
                </p>
                <h2 className="mt-2 font-heading text-4xl font-semibold text-brand">
                  {p.phase} — {p.name}
                </h2>
                {p.goal && <p className="mt-1 font-semibold text-black/70">{p.goal}</p>}
                <ul className="mt-4 space-y-2 text-black/80">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="tint">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-5xl font-semibold text-brand">{roadmap.gate.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-black/80">{roadmap.gate.text}</p>
          <p className="mt-4 text-sm text-black/70">{roadmap.gate.note}</p>
        </div>
      </Section>

      <PartnerCtaBand />
    </>
  );
}
