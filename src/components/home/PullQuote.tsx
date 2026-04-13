"use client";

import { useTranslations } from "next-intl";
import { useScrollFadeUp } from "@/hooks/useScrollFadeUp";

export default function PullQuote() {
  const t = useTranslations();
  const [ref, isVisible] = useScrollFadeUp(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`my-10 fade-up ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Decorative opening quote */}
        <span className="pull-quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* Quote text */}
        <p
          className="text-[20px] md:text-[24px] italic -mt-6"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-charcoal)",
            lineHeight: 1.6,
          }}
        >
          {t("pullQuote.text")}
        </p>

        {/* Attribution */}
        <p
          className="text-[14px] mt-4"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-stone-400)",
          }}
        >
          {t("pullQuote.attribution")}
        </p>
      </div>
    </div>
  );
}
