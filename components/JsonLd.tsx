import { site } from "@/lib/site-data";

/** Organization + LocalBusiness structured data (address and contact only — no TIN or share capital). */
export default function JsonLd() {
  const base = {
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo-full.png`,
    image: `${site.url}/og-image.png`,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "NG",
    },
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${site.url}/#organization`, ...base },
      { "@type": "LocalBusiness", "@id": `${site.url}/#localbusiness`, ...base, areaServed: "Nigeria" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
