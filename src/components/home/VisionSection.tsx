"use client";

import { useTranslations } from "next-intl";

export default function VisionSection() {
  const t = useTranslations();
  const tags = t.raw("vision.tags") as Array<{ label: string; type: string }>;

  return (
    <section className="w-full py-14" style={{ backgroundColor: "var(--color-stone-100)", borderTop: "1px solid var(--color-stone-200)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
              {t("vision.label")}
            </p>
            <h2 className="text-[26px] md:text-[30px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              {t("vision.title")}
            </h2>
            <p className="text-[15px]" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
              {t("vision.description")}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border vision-tag-${tag.type}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-[56px] font-bold leading-none" style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)" }}>
              {t("vision.scale")}
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--color-stone-400)" }}>
              {t("vision.scaleSubtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
