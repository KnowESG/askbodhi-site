"use client";

import { useTranslations } from "next-intl";

export default function WhoSection() {
  const t = useTranslations();
  const items = (t.raw("who.items") || []) as string[];

  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--color-ember-soft)", borderTop: "3px solid var(--color-ember)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-ember)", fontFamily: "var(--font-body)" }}>
          {t("who.label")}
        </p>
        <h2 className="text-[28px] font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          {t("who.title")}
        </h2>
        <p className="text-[15px] max-w-[560px] mb-8" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
          {t("who.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-[15px] py-2"
              style={{ color: "var(--color-stone-600)" }}
            >
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-[11px]"
                style={{ backgroundColor: "var(--color-ember)", color: "#fff" }}
              >
                &#10003;
              </span>
              <span style={{ lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
