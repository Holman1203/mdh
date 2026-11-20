import type { Metadata } from "next";
import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import ResponsiveTable from "@/components/ResponsiveTable";
import Button from "@/components/Button";
import { partner, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: partner.meta.title,
  description: partner.meta.description,
  alternates: { canonical: "/partner/" },
};

export default function PartnerPage() {
  return (
    <>
      <PageHero {...partner.hero}>
        <Button href="/contact/">Contact Us</Button>
        <Button href={site.profilePdf} variant="light">
          <Download className="h-5 w-5" aria-hidden="true" />
          Download Corporate Profile (PDF)
        </Button>
      </PageHero>

      <Section>
        <SectionHeading {...partner.clients} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partner.clients.items.map((c) => (
            <FeatureTile key={c.title} {...c} />
          ))}
        </div>
      </Section>

      <Section tone="tint" id="pathways">
        <SectionHeading eyebrow={partner.pathways.eyebrow} title={partner.pathways.title} />
        <div className="mt-10">
          <ResponsiveTable
            headers={partner.pathways.headers}
            rows={partner.pathways.rows}
            caption="Partnership pathways by partner type"
          />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow={partner.ways.eyebrow} title={partner.ways.title} onDark />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partner.ways.items.map((w) => (
            <FeatureTile key={w.title} {...w} onDark />
          ))}
        </div>
      </Section>

      <Section id="impact">
        <SectionHeading eyebrow={partner.impact.eyebrow} title={partner.impact.title} intro={partner.impact.intro} />
        <div className="mt-10">
          <ResponsiveTable headers={partner.impact.headers} rows={partner.impact.rows} caption="Impact and measurement indicators" />
        </div>
      </Section>

      <Section tone="tint" id="sustainability">
        <SectionHeading
          eyebrow={partner.sustainability.eyebrow}
          title={partner.sustainability.title}
          intro={partner.sustainability.intro}
        />
        <div className="mt-10">
          <ResponsiveTable
            headers={partner.sustainability.headers}
            rows={partner.sustainability.rows}
            caption="Revenue streams and their role in the model"
          />
        </div>
      </Section>

      <Section>
        <div className="rounded-tile bg-navy px-6 py-12 text-center sm:px-12">
          <h2 className="font-heading text-3xl font-bold text-snow">Start a conversation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-snow/80">
            Tell us about your priorities and reporting requirements and we will explore how to co-design a programme together.
          </p>
          <div className="mt-8">
            <Button href="/contact/">Contact Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
