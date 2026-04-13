"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import HeroVisual from "./HeroVisual";

/**
 * Hero section — headline + CTAs on top, full-width convergence
 * visualization below. The image is a wide landscape (2400×1400)
 * that needs room to breathe — no longer squeezed into a 2-col grid.
 */
export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 lg:px-24">
        {/* ─── Text content ─── */}
        <div className="max-w-2xl">
          <p
            className="text-xs font-semibold uppercase tracking-[0.12em] mb-4"
            style={{
              color: "var(--color-teal)",
              fontFamily: "var(--font-body)",
            }}
          >
            {t("hero.label")}
          </p>
          <h1
            className="text-[34px] md:text-[44px] lg:text-[50px] font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-charcoal)",
            }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="text-[17px] md:text-lg max-w-[560px] mb-5"
            style={{
              color: "var(--color-stone-600)",
              fontFamily: "var(--font-body)",
              lineHeight: 1.7,
            }}
          >
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 mb-3">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
              style={{
                backgroundColor: "var(--color-teal)",
                color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              {t("hero.primaryCta")}
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline border transition-colors"
              style={{
                borderColor: "var(--color-stone-200)",
                color: "var(--color-stone-600)",
                fontFamily: "var(--font-body)",
                backgroundColor: "var(--color-white)",
              }}
            >
              {t("hero.secondaryCta")}
            </Link>
          </div>
          <Link
            href="#results"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold no-underline transition-all"
            style={{ color: "var(--color-teal)" }}
          >
            {t("hero.secondaryLink")}
          </Link>
        </div>

        {/* ─── Full-width convergence visualization ─── */}
        <HeroVisual />
      </div>
    </section>
  );
}
