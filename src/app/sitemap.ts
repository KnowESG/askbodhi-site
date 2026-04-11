import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://askbodhi.ai";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/assessment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Future pages — uncomment as they're built:
    // { url: `${baseUrl}/services/seo-geo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: `${baseUrl}/services/ai-engines`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: `${baseUrl}/generative-engine-optimization`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    // { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
