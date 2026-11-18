import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { LogoOnDark } from "./Logo";
import { nav, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <LogoOnDark />
          <p className="mt-4 font-heading text-lg font-semibold">{site.tagline}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
            Technology, skills, enterprise and infrastructure for Nigeria&apos;s next generation of innovators.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-heading text-base font-bold">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 transition-colors hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <address className="not-italic">{site.address.full}</address>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-white hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/80 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name} ({site.rc}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
