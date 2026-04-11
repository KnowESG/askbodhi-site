const phases = [
  {
    step: "01",
    title: "Diagnose",
    timeframe: "Week 1\u20132",
    numColor: "var(--color-teal-pale)",
    desc: "Full digital diagnostic. Traffic architecture breakdown, technical SEO audit, GEO readiness assessment, AI visibility check, and competitive landscape analysis. You get a clear picture of where you stand \u2014 and exactly what to fix first.",
  },
  {
    step: "02",
    title: "Build",
    timeframe: "Month 1\u20133",
    numColor: "var(--color-ember-soft)",
    desc: "Execute the prioritized fix list. Schema markup, content restructuring, AI engine optimization, GEO implementation. Quick wins first, then strategic moves. Everything developer-ready with file paths, code, and exact copy.",
  },
  {
    step: "03",
    title: "Scale",
    timeframe: "Month 4\u20136+",
    numColor: "var(--color-teal-pale)",
    desc: "Weekly scorecards, monthly strategy, quarterly roadmap. Prove results on one brand, replicate across the group. Expand from SEO/GEO into broader AI-first transformation as trust and results compound.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
          How We Work
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          Diagnose. Build. Scale.
        </h2>
        <p className="text-base max-w-[600px] mb-12" style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
          We don\u2019t hand over a strategy deck and disappear. We embed alongside your team and
          execute \u2014 proving the model before scaling.
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
          <strong style={{ color: "var(--color-charcoal)" }}>
            You\u2019ll see data in week one. Results in month one. ROI by month three.
          </strong>{" "}
          If it\u2019s not working, you\u2019ll know \u2014 and so will we. No 12-month lock-ins.
          No vague promises. Just transparent, measurable progress.
        </div>
      </div>
    </section>
  );
}
