import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter, Youtube } from "lucide-react";
import { LogoOnDark } from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { newsletter, nav, pillars, site, socials } from "@/lib/site-data";

const socialIcons = { Facebook, Instagram, Linkedin, Twitter, Youtube } as const;

const iconBtn =
  "flex h-11 w-11 items-center justify-center rounded-card border border-snow/25 text-snow transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:scale-95";

export default function Footer() {
  return (
    <footer className="on-navy bg-navy text-snow">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <LogoOnDark />
          <p className="mt-5 text-lg font-bold">{site.tagline}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-snow/80">
            Technology, skills, enterprise and infrastructure for Nigeria&apos;s next generation of innovators.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={iconBtn}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email us" className={iconBtn}>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={`tel:${site.phoneHref}`} aria-label="Call us" className={iconBtn}>
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            {socials.map((s) => {
              const I = socialIcons[s.icon as keyof typeof socialIcons];
              return I ? (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={iconBtn}>
                  <I className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : null;
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-base font-bold">Quick links</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[32px] items-center text-snow/80 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold">Services</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {pillars.map((p) => (
              <li key={p.id}>
                <Link href={`/services/#${p.id}`} className="inline-flex min-h-[32px] items-center text-snow/80 transition-colors hover:text-accent">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold">{newsletter.title}</h2>
          <p className="mt-2 text-sm text-snow/80">{newsletter.text}</p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
          <address className="mt-4 flex gap-3 text-sm not-italic text-snow/80">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            {site.address.full}
          </address>
        </div>
      </div>
      <div className="border-t border-snow/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-snow/80 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} ({site.rc}). All rights reserved.
          </p>
          <p>{site.email} · {site.phone}</p>
        </div>
      </div>
    </footer>
  );
}
