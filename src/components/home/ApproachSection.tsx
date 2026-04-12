"use client";

import { useTranslations } from "next-intl";

const getColors = () => ({
  tealPale: "var(--color-teal-pale)",
  emberSoft: "var(--color-ember-soft)",
});

export default function ApproachSection() {
  const t = useTranslations();
  const phaseItems = (t.raw("approach.items") || []) as Array<{
    step: string;
    title: string;
    timeframe: string;
    description: string;
  }>;

  const colors = getColors();
  const colorSequence = [colors.tealPale, colors.emberSoft, colors.tealPale];

  const phases = phaseItems.map((item, idx) => ({
    ...item,
    desc: item.description,
    numColor: colorSequence[idx],
  }));

  return (
    <section id="approach" className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
          {t("approach.label")}
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          {t("approach.title")}
        </h2>
        <p className="text-base max-w-[600px] mb-12" style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
          {t("approach.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {phases.map((phase, i) => (
            <div
              key={phase.step}
              className="p-8 border relative"
              style={{
                borderColor: "var(--color-stone-200)",
                backgroundColor: "var(--color-white)",
                ...(i === 0 ? { borderRadius: "12px 12px 0 0" } : {}),
                ...(i === 2 ? { borderRadius: "0 0 12px 12px" } : {}),
              }}
            >
              <p className="text-5xl font-bold mb-1" style={{ fontFamily: "var(--font-mono)", color: phase.numColor }}>
                {phase.step}
              </p>
              <span
                className="inline-block text-[11px] font-bold mb-3.5 px-2.5 py-0.5 rounded"
                style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)", backgroundColor: "var(--color-teal-pale)", letterSpacing: "0.04em" }}
              >
                {phase.timeframe}
              </span>
              <h3 className="text-lg font-bold mb-2.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
                {phase.desc}
              </p>
              {i < 2 && (
                <div
                  className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full border items-center justify-center text-sm"
                  style={{ backgroundColor: "var(--color-white)", borderColor: "var(--color-stone-200)", color: "var(--color-teal)" }}
                >
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-6 rounded-xl text-[15px]"
          style={{
            backgroundColor: "var(--color-teal-pale)",
            borderLeft: "4px solid var(--color-teal)",
            color: "var(--color-stone-600)",
            lineHeight: 1.7,
          }}
        >
          <p>{t("approach.callout")}</p>
        </div>
      </div>
    </section>
  );
}
