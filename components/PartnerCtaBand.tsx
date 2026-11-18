import Button from "./Button";
import { home, site } from "@/lib/site-data";
import { Download } from "lucide-react";

export default function PartnerCtaBand() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-tile bg-brand px-6 py-12 text-center sm:px-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">{home.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{home.cta.text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
