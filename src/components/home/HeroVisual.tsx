"use client";

import Image from "next/image";
import { useScrollFadeUp } from "@/hooks/useScrollFadeUp";

/**
 * Hero visualization — Organic Visibility convergence map
 * Shows SEO (search engines) and GEO (AI engines) fields with
 * proportionally-sized engine badges based on validated market share data.
 * AI Overviews sits in the convergence zone as the bridge between both worlds.
 *
 * Data sources: StatCounter (SEO), Similarweb (GEO) — April 2026
 */
export default function HeroVisual() {
  const [ref, isVisible] = useScrollFadeUp(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`w-full mt-8 md:mt-12 fade-up ${isVisible ? "visible" : ""}`}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden border"
        style={{
          borderColor: "var(--color-stone-200)",
          backgroundColor: "var(--color-white)",
        }}
      >
        <Image
          src="/hero-organic-visibility.png"
          alt="Organic Visibility — the convergence of SEO (Google 90%, Bing 4.3%, Yahoo 1.2%) and AI engines (ChatGPT 68%, Gemini 18%, Perplexity 2%, Claude 3%). AI Overviews triggers on 48% of Google searches, bridging traditional search and AI discovery."
          width={2400}
          height={1400}
          priority
          className="w-full h-auto"
          style={{
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
