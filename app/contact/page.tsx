import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const rows = [
    { icon: User, label: "Contact person", node: contact.contactPerson },
    { icon: MapPin, label: "Address", node: site.address.full },
    {
      icon: Mail,
      label: "Email",
      node: (
        <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
          {site.email}
        </a>
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      node: (
        <a href={`tel:${site.phoneHref}`} className="text-brand underline underline-offset-4">
          {site.phone}
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHero {...contact.hero} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-semibold text-brand">{site.name}</h2>
            <p className="mt-1 text-black/60">{site.rc}</p>
            <ul className="mt-6 space-y-5">
              {rows.map(({ icon: I, label, node }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-brand/10 text-brand">
                    <I className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-black/60">{label}</p>
                    <p className="text-black/90">{node}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-card border-2 border-brand px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand/5"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-semibold text-brand">{contact.form.title}</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <h2 className="font-heading text-4xl font-semibold text-brand">Find us</h2>
        <p className="mt-2 text-black/70">{site.address.full}</p>
        <div className="mt-6 overflow-hidden rounded-tile border border-black/10">
          <iframe
            title="Map showing 24 Police Road, Old Airport, Maiduguri"
            src={site.mapEmbed}
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />
        </div>
      </Section>
    </>
  );
}
