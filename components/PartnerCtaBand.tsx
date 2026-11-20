import Button from "./Button";
import { home, site } from "@/lib/site-data";
import { Download } from "lucide-react";

/** Navy call-to-action band with an orange primary button. */
export default function PartnerCtaBand() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="on-navy relative isolate overflow-hidden rounded-tile bg-navy px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="grid-bg absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
          <div className="glow-orange absolute -bottom-32 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2" aria-hidden="true" />
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-snow sm:text-5xl">{home.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-snow/85">{home.cta.text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/partner/">Partner With Us</Button>
            <Button href={site.profilePdf} variant="light">
              <Download className="h-5 w-5" aria-hidden="true" />
              Download Corporate Profile (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
