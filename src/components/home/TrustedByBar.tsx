"use client";

import { useTranslations } from "next-intl";
import { useScrollFadeUp } from "@/hooks/useScrollFadeUp";

export default function TrustedByBar() {
  const t = useTranslations();
  const [ref, isVisible] = useScrollFadeUp(0.2);

  const sectors = (t.raw("trustedBy.sectors") || []) as Array<{
    flag: string;
    label: string;
  }>;

  if (!sectors.length) return null;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full fade-up ${isVisible ? "visible" : ""}`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 lg:px-24">
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.14em] text-center mb-5"
          style={{
            color: "var(--color-stone-400)",
            fontFamily: "var(--font-body)",
          }}
        >
          {t("trustedBy.label")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector) => (
            <div key={sector.label} className="trust-chip">
              <span className="text-lg leading-none">{sector.flag}</span>
              <span
                className="text-[13px] font-semibold"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-stone-600)",
                }}
              >
                {sector.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
