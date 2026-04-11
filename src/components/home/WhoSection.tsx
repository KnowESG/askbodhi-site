const items = [
  "You're the founder, director, or partner — and marketing lands on your desk because there's no one else",
  "You spend €2K–8K/month on Google Ads and you're not sure it's working",
  "Your competitors rank above you for the terms that matter most",
  "You've heard about AI search but have no idea how to show up in it",
  "You want an embedded partner, not another agency that sends reports you don't read",
  "Your company does €1M–20M in revenue and growth depends on being found online",
];

export default function WhoSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--color-ember-soft)", borderTop: "3px solid var(--color-ember)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-ember)", fontFamily: "var(--font-body)" }}>
          This Is For You If...
        </p>
        <h2 className="text-[28px] font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          You'll know it when you see it
        </h2>
        <p className="text-[15px] max-w-[560px] mb-8" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
          We don't work with a sector. We work with a situation. If the lines below describe your
          Tuesday morning, we should talk.
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
