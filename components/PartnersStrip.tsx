import Image from "next/image";
import { partners } from "@/lib/site-data";

/** Greyscale partner logos (colour on hover). Renders nothing until real partners are added. */
export default function PartnersStrip() {
  if (partners.length === 0) return null;
  return (
    <section aria-label="Our partners" className="border-y border-black/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-black/70">Our partners</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <li key={p.name}>
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={48}
                loading="lazy"
                className="h-10 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
