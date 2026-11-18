import Button from "./Button";
import { site } from "@/lib/site-data";
import { Download } from "lucide-react";

/** Dark strip under the hero (the sample's "Signup for free" bar). Black, white text. */
export default function CtaStrip() {
  return (
    <div className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-heading text-xl font-bold text-white">Partner with MAMREX HUB</p>
          <p className="text-sm text-white/80">
            Read our partnership prospectus for donors, development partners and government agencies.
          </p>
        </div>
        <Button href={site.profilePdf} variant="light" className="shrink-0">
          <Download className="h-5 w-5" aria-hidden="true" />
          Download Corporate Profile (PDF)
        </Button>
      </div>
    </div>
  );
}
