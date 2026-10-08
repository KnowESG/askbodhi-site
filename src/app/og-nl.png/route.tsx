import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return ogImage({
    a: "Groeien zonder",
    b: "verspilling.",
    sub: "AI-first groeipartner voor het mkb: SEO, GEO en AI",
    leaks: ["01 Zoekverkeer", "02 Conversie", "03 Bedrijfsvoering"],
  });
}
