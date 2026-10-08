import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/seo";

const UPDATED = new Date("2026-10-08");

const PAGES: Array<{ path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/assessment", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/voorwaarden", changeFrequency: "yearly", priority: 0.2 },
  { path: "/colofon", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: UPDATED,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          nl: `${SITE_URL}/nl${page.path}`,
          en: `${SITE_URL}/en${page.path}`,
          "x-default": `${SITE_URL}/nl${page.path}`,
        },
      },
    }))
  );
}
