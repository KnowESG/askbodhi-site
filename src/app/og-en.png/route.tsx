import { ogImage } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return ogImage({
    a: "Grow without",
    b: "the waste.",
    sub: "AI-first growth partner for Dutch SMEs: SEO, GEO and AI",
    leaks: ["01 Search traffic", "02 Conversion", "03 Operations"],
  });
}
