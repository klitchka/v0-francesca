// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE = "https://v0-francesca-omega.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/what-is-ctm", "/masks", "/workshops", "/voices", "/about", "/contact"];
  const locales = ["en", "es", "it"];

  const entries = locales.flatMap((l) =>
    routes.map((r) => ({
      url: `${BASE}/${l}${r}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.7,
    }))
  );

  return entries;
}
