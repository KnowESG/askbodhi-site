import Link from "next/link";

export default function AssessmentCTA() {
  return (
    <section id="assessment" className="w-full py-20" style={{ backgroundColor: "var(--color-teal-pale)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
              AI Readiness Assessment
            </p>
            <h2 className="text-[28px] md:text-[32px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              12 questions. 5 minutes. We do the rest.
            </h2>
            <p
              className="text-[19px] font-bold mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ember)", lineHeight: 1.4 }}
            >
              What if 40% of your Google Ads budget could be replaced by organic traffic?
            </p>
            <p className="text-base mb-6" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
              You answer 12 questions about your business. We analyze your website's traffic architecture,
              AI visibility, and competitive position using the same tools enterprise agencies charge €5K to run.
              You get a scored report with specific recommendations — not a sales pitch.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
              style={{ backgroundColor: "var(--color-ember)", color: "#fff", fontFamily: "var(--font-body)" }}
            >
              Take the Free Assessment &rarr;
            </Link>
          </div>
          <div>
            <ul className="list-none p-0 m-0">
              {[
                { num: "1", bg: "var(--color-teal)", text: "You invest 5 minutes answering 12 honest questions about your business, traffic, and growth challenges." },
                { num: "2", bg: "var(--color-ember)", text: "We analyze your digital footprint — traffic architecture, AI engine visibility, competitive positioning, and content quality using enterprise-grade tools." },
                { num: "3", bg: "var(--color-teal-bright)", text: "You get a scored AI readiness report with specific, prioritized recommendations — not a sales pitch disguised as advice." },
              ].map((step) => (
                <li key={step.num} className="flex items-start gap-3 text-sm mb-4" style={{ color: "var(--color-stone-600)", lineHeight: 1.6 }}>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full text-[13px] font-bold flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: step.bg, color: "#fff" }}
                  >
                    {step.num}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: `<strong>${step.text.split(" ").slice(0, 4).join(" ")}</strong> ${step.text.split(" ").slice(4).join(" ")}` }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
