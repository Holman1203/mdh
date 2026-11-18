import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import Icon from "@/components/Icon";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import { pillars, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: services.meta.title,
  description: services.meta.description,
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  const l = services.labels;
  return (
    <>
      <PageHero {...services.hero} />

      {pillars.map((p, i) => (
        <Section key={p.id} id={p.id} tone={i % 2 === 0 ? "white" : "tint"}>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-card bg-brand text-white">
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <h2 className="font-heading text-3xl font-bold text-brand">{p.name}</h2>
              <p className="mt-2 font-semibold text-black/60">{p.tagline}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
              <Block title={l.purpose}>
                <p>{p.purpose}</p>
              </Block>
              <Block title={l.serves}>
                <p>{p.serves}</p>
              </Block>
              <Block title={l.delivers}>
                <ul className="space-y-2">
                  {p.delivers.map((d) => (
                    <li key={d} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title={l.outcomes}>
                <p>{p.outcomes}</p>
              </Block>
            </div>
          </div>
        </Section>
      ))}

      <Section tone="dark" id="digital-services">
        <SectionHeading {...services.arm} onDark />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.arm.items.map((x) => (
            <FeatureTile key={x.title} {...x} onDark />
          ))}
        </div>
      </Section>

      <Section id="expertise">
        <SectionHeading {...services.expertise} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.expertise.groups.map((g) => (
            <div key={g.title} className="rounded-tile border border-black/10 p-6">
              <h3 className="font-heading text-lg font-bold text-brand">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-black/80">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <PartnerCtaBand />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-card border border-black/10 bg-white p-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">{title}</h3>
      <div className="leading-relaxed text-black/80">{children}</div>
    </div>
  );
}
