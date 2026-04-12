import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://askbodhi.ai";
  const locales = ["nl", "en"] as const;
  const lastModified = new Date("2026-04-12");

  // Define pages with their priorities
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/assessment", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Generate entries for each locale × page combination with alternates
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            nl: `${baseUrl}/nl${page.path}`,
            en: `${baseUrl}/en${page.path}`,
            "x-default": `${baseUrl}/nl${page.path}`,
          },
        },
      });
    }
  }

  return entries;
}
