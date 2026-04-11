const items = [
  "You're the founder, director, or partner \u2014 and marketing lands on your desk because there's no one else",
  "You spend \u20ac2K\u20138K/month on Google Ads and you're not sure it's working",
  "Your competitors rank above you for the terms that matter most",
  "You've heard about AI search but have no idea how to show up in it",
  "You want an embedded partner, not another agency that sends reports you don't read",
  "Your company does \u20ac1M\u201320M in revenue and growth depends on being found online",
];

export default function WhoSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--color-ember-soft)", borderTop: "3px solid var(--color-ember)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-ember)", fontFamily: "var(--font-body)" }}>
              This Is For You If...
            </p>
            <h2 className="text-[28px] font-bold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              You'll know it when you see it
            </h2>
            <p className="text-[15px]" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
              We don't work with a sector. We work with a situation. If the lines below describe your
              Tuesday morning, we should talk.
            </p>
          </div>
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] px-4 py-3 rounded-lg border"
                style={{ color: "var(--color-stone-600)", backgroundColor: "var(--color-white)", borderColor: "rgba(234,88,12,0.12)" }}
              >
                <span className="text-lg font-bold flex-shrink-0" style={{ color: "var(--color-ember)" }}>&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
