import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import { leadership } from "@/lib/site-data";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: leadership.meta.title,
  description: leadership.meta.description,
  alternates: { canonical: "/leadership/" },
};

export default function LeadershipPage() {
  const f = leadership.founder;
  return (
    <>
      <PageHero {...leadership.hero} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* TODO: replace with real photo */}
          <div
            role="img"
            aria-label="Placeholder portrait of the founder"
            className="flex aspect-square items-center justify-center rounded-tile bg-navy font-heading text-7xl font-extrabold text-snow"
          >
            SH
          </div>
          <div className="lg:col-span-2">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              {f.role}
            </p>
            <h2 className="font-heading text-5xl font-bold text-brand">{f.name}</h2>
            <p className="mt-5 text-lg leading-relaxed text-black/80">{f.bio}</p>
          </div>
        </div>

        <div className="mt-12 flex gap-4 rounded-tile border border-dashed border-brand/40 bg-brand/5 p-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-brand/10 text-brand">
            <Users className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-heading text-4xl font-bold text-brand">{leadership.advisory.title} — to be announced</h3>
            <p className="mt-1 text-black/80">{leadership.advisory.text}</p>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading {...leadership.governance} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadership.governance.items.map((g) => (
            <FeatureTile key={g.title} {...g} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={leadership.cac.title} />
        <dl className="mt-8 max-w-3xl divide-y divide-black/10 rounded-tile border border-black/10">
          {leadership.cac.rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 p-4 sm:grid-cols-2 sm:gap-4">
              <dt className="font-semibold text-brand">{k}</dt>
              <dd className="text-black/80">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <PartnerCtaBand />
    </>
  );
}
