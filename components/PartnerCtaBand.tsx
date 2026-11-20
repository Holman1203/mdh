import Button from "./Button";
import { home, site } from "@/lib/site-data";
import { Download } from "lucide-react";

/** Vivid Bright Orange call-to-action band with Deep Navy text and buttons. */
export default function PartnerCtaBand() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-tile bg-accent px-6 py-14 text-center shadow-[0_30px_60px_-30px_rgb(255_122_0/0.8)] sm:px-12 sm:py-20">
          {/* rounded-square motif from the logo */}
          <span className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-tile bg-navy/10" aria-hidden="true" />
          <span className="absolute -bottom-12 -right-8 -z-10 h-48 w-48 rounded-tile bg-navy/10" aria-hidden="true" />
          <span className="absolute bottom-10 left-1/4 -z-10 hidden h-16 w-16 rounded-card bg-snow/25 sm:block" aria-hidden="true" />
          <h2 className="mx-auto max-w-3xl text-4xl font-extrabold text-navy sm:text-6xl">{home.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-navy/90">{home.cta.text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/partner/" variant="navy">
              Partner With Us
            </Button>
            <Button href={site.profilePdf} variant="navyOutline">
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Corporate Profile (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
