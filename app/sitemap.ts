import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "about", "services", "partner", "leadership", "roadmap", "donate", "contact"];
  return paths.map((p) => ({
    url: `${site.url}/${p ? p + "/" : ""}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
