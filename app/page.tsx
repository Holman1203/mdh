import type { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import CircleFeature from "@/components/CircleFeature";
import CtaStrip from "@/components/CtaStrip";
import PillarCard from "@/components/PillarCard";
import PipelineSteps from "@/components/PipelineSteps";
import SdgBadges from "@/components/SdgBadges";
import StatsStrip from "@/components/StatsStrip";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import HeroSlider from "@/components/HeroSlider";
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
      {/* HERO — full-width indigo band, uppercase headline, image on the right (after the sample) */}
      <div className="bg-brand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">{hero.eyebrow}</p>
            <h1>
              <span className="block font-heading text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
                {hero.headline}
              </span>
              <span className="mt-4 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
              <span className="mt-4 block font-heading text-lg font-semibold uppercase leading-snug tracking-wide text-white/90 sm:text-xl">
                {hero.title}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{hero.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="light">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative">
            <HeroSlider />
            <div className="absolute -top-4 right-2 flex items-center gap-3 rounded-card bg-white p-3 pr-5 shadow-lg sm:-right-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-card bg-brand/10 text-brand">
                <Icon name={hero.chips[0].icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-brand">{hero.chips[0].title}</span>
                <span className="block text-xs text-black/60">{hero.chips[0].sub}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <CtaStrip />

      {/* THREE BARRIERS — circular icon features */}
      <Section>
        <SectionHeading center eyebrow={home.barriers.eyebrow} title={home.barriers.title} intro={home.barriers.intro} />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {home.barriers.items.map((b) => (
            <CircleFeature key={b.title} {...b} />
          ))}
        </div>
      </Section>

      {/* FIVE PILLARS — "main features" */}
      <Section tone="tint" id="pillars">
        <SectionHeading center {...home.pillars} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <PillarCard key={p.id} id={p.id} icon={p.icon} name={p.name} tagline={p.tagline} purpose={p.purpose} />
          ))}
        </div>
      </Section>

      {/* PIPELINE */}
      <Section>
        <SectionHeading center {...home.pipeline} />
        <div className="mt-12">
          <PipelineSteps />
        </div>
      </Section>

      <StatsStrip />

      {/* WHY CHOOSE US */}
      <Section>
        <SectionHeading center eyebrow={home.why.eyebrow} title={home.why.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w) => (
            <FeatureTile key={w.title} {...w} />
          ))}
        </div>
      </Section>

      {/* SDGs */}
      <Section tone="tint">
        <SectionHeading center {...home.sdg} />
        <div className="mt-12">
          <SdgBadges />
        </div>
      </Section>

      <PartnerCtaBand />
    </>
  );
}
