const tags = [
  { label: "SEO & GEO", type: "active" },
  { label: "Content Architecture", type: "active" },
  { label: "AI Workflows", type: "next" },
  { label: "Custom AI Engines", type: "next" },
  { label: "AI-First Operations", type: "future" },
  { label: "Product AI", type: "future" },
];

export default function VisionSection() {
  return (
    <section className="w-full py-14" style={{ backgroundColor: "var(--color-stone-100)", borderTop: "1px solid var(--color-stone-200)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
              Where This Is Heading
            </p>
            <h2 className="text-[26px] md:text-[30px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              It starts with being found. It leads to something bigger.
            </h2>
            <p className="text-[15px]" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
              We start with what's proven: making you the top digital asset in your sector.
              But the relationship doesn't stop at SEO. As your trusted AI partner, we help your
              company become genuinely AI-first — in how you serve customers, make decisions, and
              operate day to day.
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
              10–200
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--color-stone-400)" }}>
              person companies we're built for
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
