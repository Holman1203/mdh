import type { Metadata } from "next";
import { Banknote, CreditCard, Landmark, Mail, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureTile from "@/components/FeatureTile";
import Button from "@/components/Button";
import CopyButton from "@/components/CopyButton";
import { donate, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: donate.meta.title,
  description: donate.meta.description,
  alternates: { canonical: "/donate/" },
};

export default function DonatePage() {
  const hasPaystack = Boolean(donate.paystackUrl);
  const hasBank = Boolean(donate.accountNumber);
  const rows = [
    ["Account name", donate.accountName],
    ["Account number", donate.accountNumber],
    ["Bank", donate.bankName],
  ];

  return (
    <>
      <PageHero {...donate.hero} />

      {/* WAYS TO GIVE */}
      <Section>
        <SectionHeading eyebrow="Ways to give" title="Choose how you would like to support us" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Paystack */}
          <div className="flex flex-col rounded-tile border border-black/10 bg-white p-7 shadow-soft">
            <span className="flex h-14 w-14 items-center justify-center rounded-card bg-accent text-navy">
              <CreditCard className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-4xl font-bold text-brand">Give online with Paystack</h2>
            <p className="mt-3 flex-1 text-lg leading-relaxed text-black/70">{donate.online.text}</p>
            <div className="mt-6">
              {hasPaystack ? (
                <Button href={donate.paystackUrl}>Donate with Paystack</Button>
              ) : (
                <p className="rounded-card border border-dashed border-black/30 p-4 text-black/70">
                  Online giving through Paystack is coming soon. Please use the bank transfer details for now.
                </p>
              )}
            </div>
          </div>

          {/* Bank transfer */}
          <div className="flex flex-col rounded-tile border border-black/10 bg-white p-7 shadow-soft">
            <span className="flex h-14 w-14 items-center justify-center rounded-card bg-accent text-navy">
              <Landmark className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-4xl font-bold text-brand">Give by bank transfer</h2>
            <p className="mt-3 text-lg leading-relaxed text-black/70">{donate.bank.text}</p>
            {hasBank ? (
              <dl className="mt-6 divide-y divide-black/10 rounded-card border border-black/10">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex flex-wrap items-center justify-between gap-3 p-4">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-black/70">{k}</dt>
                      <dd className="mt-1 break-words text-xl font-bold text-brand">{v}</dd>
                    </div>
                    {k !== "Bank" && <CopyButton value={v} label={k.toLowerCase()} />}
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 rounded-card border border-dashed border-black/30 p-4 text-black/70">
                Bank transfer details are coming soon.
              </p>
            )}
          </div>
        </div>

        {/* After giving */}
        <div className="mt-8 rounded-tile bg-accent/[0.08] p-6 sm:p-8">
          <h3 className="text-3xl font-bold text-brand">{donate.after.title}</h3>
          <p className="mt-2 max-w-3xl text-lg leading-relaxed text-black/80">{donate.after.text}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Donation to MAMREX HUB")}`}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-card border-2 border-brand px-5 font-semibold text-brand transition-all hover:-translate-y-0.5 hover:bg-brand/10"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-card border-2 border-brand px-5 font-semibold text-brand transition-all hover:-translate-y-0.5 hover:bg-brand/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* WHERE SUPPORT GOES */}
      <Section tone="tint">
        <SectionHeading eyebrow={donate.use.eyebrow} title={donate.use.title} intro={donate.use.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {donate.use.items.map((it) => (
            <FeatureTile key={it.title} {...it} />
          ))}
        </div>
      </Section>

      {/* OTHER WAYS */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow={donate.other.eyebrow} title={donate.other.title} intro={donate.other.text} />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/partner/">
              <Banknote className="h-5 w-5" aria-hidden="true" />
              Partner With Us
            </Button>
            <Button href="/contact/" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
