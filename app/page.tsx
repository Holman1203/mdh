import type { Metadata } from "next";
import { Download } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import PillarCard from "@/components/PillarCard";
import PipelineSteps from "@/components/PipelineSteps";
import SdgBadges from "@/components/SdgBadges";
import StatsStrip from "@/components/StatsStrip";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import PlaceholderImage from "@/components/PlaceholderImage";
import Icon from "@/components/Icon";
import { home, pillars, site, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const { hero } = home;
  return (
    <>
      {/* HERO */}
      <div className="bg-brand/5">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
              <span className="h-1.5 w-6 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-brand sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/70">{hero.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6">
              <a
                href={site.profilePdf}
                className="inline-flex items-center gap-2 font-semibold text-brand underline underline-offset-4 hover:text-brand/70"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Corporate Profile (PDF)
              </a>
            </p>
          </div>

          {/* TODO: replace with real photo */}
          <div className="relative">
            <PlaceholderImage />
            {hero.chips.map((c, i) => (
              <div
                key={c.title}
                className={`absolute flex items-center gap-3 rounded-card border border-black/10 bg-white p-3 pr-5 shadow-lg ${
                  i === 0 ? "-left-2 top-6 sm:-left-6" : "-bottom-4 right-2 sm:-right-4"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-card bg-brand/10 text-brand">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand">{c.title}</span>
                  <span className="block text-xs text-black/60">{c.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <StatsStrip />

      {/* THREE BARRIERS */}
      <Section>
        <SectionHeading {...home.barriers} title={home.barriers.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {home.barriers.items.map((b) => (
            <FeatureTile key={b.title} {...b} />
          ))}
        </div>
      </Section>

      {/* FIVE PILLARS */}
      <Section tone="tint" id="pillars">
        <SectionHeading {...home.pillars} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <PillarCard key={p.id} id={p.id} icon={p.icon} name={p.name} tagline={p.tagline} purpose={p.purpose} />
          ))}
        </div>
      </Section>

      {/* PIPELINE */}
      <Section>
        <SectionHeading {...home.pipeline} />
        <div className="mt-10">
          <PipelineSteps />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tone="dark">
        <SectionHeading eyebrow={home.why.eyebrow} title={home.why.title} onDark />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <FeatureTile key={w.title} {...w} onDark />
          ))}
        </div>
      </Section>

      {/* SDGs */}
      <Section>
        <SectionHeading {...home.sdg} />
        <div className="mt-10">
          <SdgBadges />
        </div>
      </Section>

      <PartnerCtaBand />
    </>
  );
}
