import MirrorCard from "../MirrorCard";

const cases = [
  {
    flag: "🇳🇱",
    region: "Netherlands · Publishing",
    title: "Leading Dutch Publishing Group",
    desc: "Spending on ads across multiple brands with no organic strategy. We found that only 25 of their 700 monthly visits had commercial intent. Within 90 days, we restructured the entire organic architecture and built a custom AI engine that lifted paid performance by 56%.",
    gradient: "linear-gradient(90deg, var(--color-teal), var(--color-teal-bright))",
    stats: [
      { value: "+56%", label: "Paid performance lift", color: "var(--color-teal)" },
      { value: "13K", label: "Organic clicks / 90 days", color: "var(--color-teal-bright)" },
    ],
  },
  {
    flag: "🇮🇳",
    region: "India · Fintech",
    title: "EximPe",
    desc: "11,000 monthly visitors — and almost none of them were potential customers. Classic content-traffic mismatch. We rebuilt the content architecture to align traffic with revenue, turning vanity metrics into commercial pipeline.",
    gradient: "linear-gradient(90deg, var(--color-ember), #F97316)",
    stats: [
      { value: "11K", label: "Visits (zero commercial)", color: "var(--color-ember)" },
      { value: "Fixed", label: "Content → revenue aligned", color: "var(--color-teal)" },
    ],
  },
  {
    flag: "🇳🇱",
    region: "Netherlands · ESG Intelligence",
    title: "KnowESG",
    desc: "Competing against well-funded incumbents with no organic strategy. We deployed an AI-driven content architecture and entity-rich schema strategy that built organic authority in a regulation-heavy sector — and made them visible to AI search engines.",
    gradient: "linear-gradient(90deg, var(--color-teal-bright), #2DD4BF)",
    stats: [
      { value: "AI-first", label: "Content architecture", color: "var(--color-teal-bright)" },
      { value: "GEO", label: "AI engine visibility", color: "var(--color-teal)" },
    ],
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="w-full" style={{ backgroundColor: "var(--color-stone-100)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
          Proven Results
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          The sectors are different. The pattern is identical.
        </h2>
        <p className="text-[17px] max-w-[680px] mb-10 italic" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
          Every engagement starts the same way: a company spending on ads, underperforming on organic,
          and invisible to AI search. Here’s what happens when you fix it.
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
