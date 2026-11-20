import type { Metadata } from "next";
import Button from "@/components/Button";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import CircleFeature from "@/components/CircleFeature";
import PillarCard from "@/components/PillarCard";
import PipelineSteps from "@/components/PipelineSteps";
import SdgBadges from "@/components/SdgBadges";
import PartnerCtaBand from "@/components/PartnerCtaBand";
import HeroScene from "@/components/HeroScene";
import TrustStrip from "@/components/TrustStrip";
import ImpactCounters from "@/components/ImpactCounters";
import Programmes from "@/components/Programmes";
import Testimonials from "@/components/Testimonials";
import PartnersStrip from "@/components/PartnersStrip";
import Reveal from "@/components/Reveal";
import { about, home, impactCopy, pillars, services, site, valuesIntro, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const { hero } = home;
  return (
    <>
      {/* 1. HERO — dynamic: cursor-reactive photo, photo tiles that change the background, live network */}
      <HeroScene>
        <p className="text-base font-bold uppercase tracking-[0.2em] text-accent sm:text-lg">{hero.welcome}</p>
        <h1 className="mt-4 text-7xl leading-[0.92] text-snow sm:text-8xl lg:text-[9rem]">
          {hero.headline.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-accent">{hero.headline.split(" ").slice(-1)}</span>
        </h1>
        <p className="mt-6 text-2xl font-bold leading-snug text-snow sm:text-3xl">{hero.title}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </HeroScene>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. THE THREE BARRIERS */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow={home.barriers.eyebrow} title={home.barriers.title} intro={home.barriers.intro} />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.barriers.items.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <CircleFeature {...b} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. SERVICES — five pillars + the digital services arm */}
      <Section tone="tint" id="services">
        <Reveal>
          <SectionHeading {...home.pillars} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <PillarCard id={p.id} icon={p.icon} name={p.name} tagline={p.tagline} purpose={p.purpose} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <h3 className="mt-16 text-3xl font-extrabold text-brand">Also from our digital services arm</h3>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.arm.items.map((x, i) => (
            <Reveal key={x.title} delay={i * 80}>
              <FeatureTile {...x} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. PIPELINE */}
      <Section>
        <Reveal>
          <SectionHeading {...home.pipeline} />
        </Reveal>
        <Reveal>
          <div className="mt-12">
            <PipelineSteps />
          </div>
        </Reveal>
      </Section>

      {/* 6. IMPACT NUMBERS (animated counters) + SDGs */}
      <Section tone="dark">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative">
          <SectionHeading eyebrow={impactCopy.eyebrow} title={impactCopy.title} intro={impactCopy.intro} onDark />
          <div className="mt-12">
            <ImpactCounters />
          </div>
          <div className="mt-14">
            <h3 className="mb-6 text-3xl font-bold text-snow">Aligned with the Sustainable Development Goals</h3>
            <SdgBadges onDark />
          </div>
        </div>
      </Section>

      {/* 7. WHY MAMREX — core values + reasons */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow={valuesIntro.eyebrow} title={valuesIntro.title} intro={about.valuesIntro} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-tile border border-black/10 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-navy ring-4 ring-accent/25">
                  <ValueIcon name={v.icon} />
                </span>
                <h3 className="mt-4 text-2xl font-bold text-brand">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 100}>
              <FeatureTile {...w} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. PROGRAMMES — filterable */}
      <Section tone="tint" id="programmes">
        <Reveal>
          <SectionHeading
            eyebrow="Programmes"
            title="Training, incubation and community programmes"
            intro="Filter by pillar to see what we are building across the Academy, Ventures, Community and Workspace."
          />
        </Reveal>
        <div className="mt-10">
          <Programmes />
        </div>
      </Section>

      {/* 9–10. TESTIMONIALS and PARTNERS appear automatically once real entries are added in lib/site-data.ts */}
      <Testimonials />
      <PartnersStrip />

      {/* 11. CALL-TO-ACTION BAND */}
      <PartnerCtaBand />
    </>
  );
}

import Icon from "@/components/Icon";
function ValueIcon({ name }: { name: string }) {
  return <Icon name={name} className="h-6 w-6" />;
}
