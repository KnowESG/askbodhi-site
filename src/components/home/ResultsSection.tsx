"use client";

import { useTranslations } from "next-intl";
import MirrorCard from "../MirrorCard";

const getGradients = () => ({
  teal: "linear-gradient(90deg, var(--color-teal), var(--color-teal-bright))",
  ember: "linear-gradient(90deg, var(--color-ember), #F97316)",
  tealBright: "linear-gradient(90deg, var(--color-teal-bright), #2DD4BF)",
});

const getColors = () => ({
  teal: "var(--color-teal)",
  tealBright: "var(--color-teal-bright)",
  ember: "var(--color-ember)",
});

export default function ResultsSection() {
  const t = useTranslations();
  const caseItems = t.raw("results.items") as Array<{
    flag: string;
    region: string;
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
  }>;

  const gradients = getGradients();
  const colors = getColors();
  const gradientKeys = ["teal", "ember", "tealBright"] as const;
  const colorPairs = [
    { stat1: colors.teal, stat2: colors.tealBright },
    { stat1: colors.ember, stat2: colors.teal },
    { stat1: colors.tealBright, stat2: colors.teal },
  ];

  const cases = caseItems.map((item, idx) => ({
    ...item,
    desc: item.description,
    gradient: gradients[gradientKeys[idx]],
    stats: item.stats.map((stat, statIdx) => ({
      ...stat,
      color: colorPairs[idx][statIdx === 0 ? "stat1" : "stat2"],
    })),
  }));

  return (
    <section id="results" className="w-full" style={{ backgroundColor: "var(--color-stone-100)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
          {t("results.label")}
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          {t("results.title")}
        </h2>
        <p className="text-[17px] max-w-[680px] mb-10 italic" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
          {t("results.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="case-card-next">
              <div className="h-1 flex-shrink-0" style={{ background: c.gradient }} />
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 text-xs mb-2" style={{ color: "var(--color-stone-400)" }}>
                  <span className="text-base leading-none">{c.flag}</span>
                  <span>{c.region}</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
                  {c.title}
                </h3>
                <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{ color: "var(--color-stone-600)", lineHeight: 1.6 }}>
                  {c.desc}
                </p>
                <div className="flex gap-4 flex-wrap pt-4 mt-auto" style={{ borderTop: "1px solid var(--color-stone-200)" }}>
                  {c.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold" style={{ fontFamily: "var(--font-mono)", color: stat.color }}>
                        {stat.value}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--color-stone-400)" }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <MirrorCard />
        </div>
      </div>
    </section>
  );
}
