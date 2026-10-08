import type { MetadataRoute } from "next";

// AI crawlers are explicitly welcome: being cited by ChatGPT, Claude, Perplexity
// and Google's AI features is part of what we sell.
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: "https://askbodhi.ai/sitemap.xml",
    host: "https://askbodhi.ai",
  };
}
