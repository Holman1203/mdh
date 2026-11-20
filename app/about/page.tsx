import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ResponsiveTable from "@/components/ResponsiveTable";
import FeatureTile from "@/components/FeatureTile";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import { about } from "@/lib/site-data";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...about.hero} />

      <Section>
        <SectionHeading title={about.summaryTitle} />
        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-black/80">
          {about.summary.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading title={about.whyTitle} intro={about.whyIntro} />
        <div className="mt-10">
          <ResponsiveTable headers={about.barrierHeaders} rows={about.barrierRows} caption="Barriers and how MAMREX HUB responds" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title={about.backgroundTitle} />
            <div className="mt-6 space-y-5 leading-relaxed text-black/80">
              {about.background.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-brand">{about.glanceTitle}</h2>
            <dl className="mt-6 divide-y divide-black/10 rounded-tile border border-black/10">
              {about.glance.map(([k, v]) => (
                <div key={k} className="grid gap-1 p-4 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-semibold uppercase tracking-wider text-brand">{k}</dt>
                  <dd className="text-black/80 sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-6 md:grid-cols-2">
          {[about.vision, about.mission].map((x) => (
            <div key={x.label} className="rounded-tile bg-snow/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-snow">
                <span className="mr-2 inline-block h-1.5 w-6 rounded-full bg-accent align-middle" aria-hidden="true" />
                {x.label}
              </p>
              <p className="mt-4 font-heading text-3xl leading-snug text-snow sm:text-4xl">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title={about.valuesTitle} intro={about.valuesIntro} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.values.map((v) => (
            <FeatureTile key={v.title} {...v} />
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHeading title={about.philosophyTitle} intro={about.philosophyIntro} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {about.philosophyParts.map((p) => (
            <div key={p.symbol} className="rounded-tile border border-black/10 bg-white p-8">
              <p className="font-heading text-5xl font-extrabold text-brand">{p.symbol}</p>
              <p className="mt-3 text-lg leading-relaxed text-black/80">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/80">{about.philosophyBody}</p>
        <p className="mt-6 font-heading text-4xl font-bold text-brand">Build on Strength.</p>
      </Section>

      <PartnerCtaBand />
    </>
  );
}
