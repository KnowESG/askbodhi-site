import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AskBodhi — AI-Led Growth for Forward-Thinking Companies",
  description:
    "AskBodhi helps companies grow through AI-led SEO, Generative Engine Optimization, custom AI engines, and digital diagnostics. Based in the Netherlands, serving globally.",
  alternates: { canonical: "https://askbodhi.com" },
};

/* ─── Service card data ─── */
const services = [
  {
    title: "SEO & Generative Engine Optimization",
    description:
      "Technical audits, content strategy, and GEO — the discipline of getting cited by AI engines, not just ranked by Google. We optimize for ChatGPT, Perplexity, Google AI Overviews, and every AI-powered search surface that's eating traditional traffic.",
    featured: true,
    tealIcon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Traffic Architecture Diagnostics",
    description:
      "Our signature deep-dive. We break your traffic into five categories — branded, informational-zero-intent, adjacent, commercial, and misaligned — to reveal what percentage actually drives revenue. Most companies are shocked by the answer.",
    featured: true,
    tealIcon: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Custom AI Engines",
    description:
      "Purpose-built AI systems for your domain — product recommendation engines, intelligent content generation, automated workflows. Not ChatGPT wrappers, but engines designed around your specific business logic and data.",
    featured: false,
    tealIcon: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "AI-First Transformation",
    description:
      "The bigger play. Once we've proven impact on your digital presence, we help convert your entire operation into an AI-first architecture — from how you serve customers to how your team works. A fractional AI transformation lead, embedded in your business.",
    featured: false,
    tealIcon: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

/* ─── Case study data ─── */
const cases = [
  {
    flag: "\ud83c\uddF3\ud83c\uddF1",
    region: "Netherlands · Publishing",
    title: "Leading Dutch Publishing Group",
    desc: "One of the oldest publishing companies in the Netherlands. Multi-brand group stuck at a performance ceiling. We built a custom AI recommendation engine and restructured their organic architecture across all brands.",
    accentGradient: "linear-gradient(90deg, var(--color-teal), var(--color-teal-bright))",
    stats: [
      { value: "+56%", label: "Paid performance lift", color: "var(--color-teal)" },
      { value: "13K", label: "Organic clicks / 90 days", color: "var(--color-teal-bright)" },
    ],
  },
  {
    flag: "\ud83c\uddEE\ud83c\uddF3",
    region: "India · Fintech",
    title: "EximPe",
    desc: "Cross-border payments platform with 11K monthly visits generating near-zero commercial traffic. Traffic architecture breakdown revealed a complete content-revenue disconnect. Blog restructuring turned visitors into pipeline.",
    accentGradient: "linear-gradient(90deg, var(--color-ember), #F97316)",
    stats: [
      { value: "11K", label: "Visits (zero commercial)", color: "var(--color-ember)" },
      { value: "Fixed", label: "Content → revenue aligned", color: "var(--color-teal)" },
    ],
  },
  {
    flag: "\ud83c\uddF3\ud83c\uddF1",
    region: "Netherlands · ESG Intelligence",
    title: "KnowESG",
    desc: "ESG data platform competing against well-funded incumbents. Deployed AI-driven content strategy and entity-rich architecture to build organic authority in a complex, regulation-heavy sector.",
    accentGradient: "linear-gradient(90deg, var(--color-teal-bright), #2DD4BF)",
    stats: [
      { value: "AI-first", label: "Content architecture", color: "var(--color-teal-bright)" },
      { value: "GEO", label: "AI engine visibility", color: "var(--color-teal)" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ========== HERO ========== */}
        <section className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.12em] mb-4"
                  style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
                >
                  AI-Led Growth Consultancy
                </p>
                <h1
                  className="text-[34px] md:text-[44px] lg:text-[50px] font-bold leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                >
                  Your company deserves to be{" "}
                  <span style={{ color: "var(--color-teal)" }}>found</span> —
                  <br className="hidden md:block" />
                  by humans <em>and</em>{" "}
                  <span style={{ color: "var(--color-ember)" }}>AI</span>.
                </h1>
                <p
                  className="text-[17px] md:text-lg max-w-[560px] mb-9"
                  style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                >
                  AskBodhi helps forward-thinking companies become the top digital asset
                  in their sector — through SEO, Generative Engine Optimization, custom AI engines,
                  and data-driven growth strategy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/assessment"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
                    style={{
                      backgroundColor: "var(--color-teal)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Take the AI Readiness Assessment
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline border transition-colors"
                    style={{
                      borderColor: "var(--color-stone-200)",
                      color: "var(--color-stone-600)",
                      fontFamily: "var(--font-body)",
                      backgroundColor: "var(--color-white)",
                    }}
                  >
                    See How We Work
                  </Link>
                </div>
              </div>

              {/* Hero visual — abstract data viz */}
              <div
                className="hidden md:block relative h-[340px] rounded-2xl overflow-hidden border"
                style={{ backgroundColor: "var(--color-white)", borderColor: "var(--color-stone-200)" }}
              >
                {/* Labels */}
                <span className="absolute top-4 left-5 text-[11px]" style={{ fontFamily: "var(--font-mono)", color: "var(--color-stone-400)" }}>
                  Organic Visibility
                </span>
                <span className="absolute top-4 right-5 text-[11px]" style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal-bright)" }}>
                  + GEO
                </span>

                {/* Google bars (grey) */}
                <div className="absolute bottom-0 rounded-t-lg" style={{ left: "12%", width: 36, height: "45%", background: "var(--color-stone-200)" }} />
                <div className="absolute bottom-0 rounded-t-lg" style={{ left: "22%", width: 36, height: "62%", background: "var(--color-stone-200)" }} />
                <div className="absolute bottom-0 rounded-t-lg" style={{ left: "32%", width: 36, height: "38%", background: "var(--color-stone-200)" }} />
                <div className="absolute bottom-0 rounded-t-lg" style={{ left: "42%", width: 36, height: "55%", background: "var(--color-stone-200)" }} />

                {/* AI engine bars (teal overlay) */}
                <div className="absolute bottom-0 rounded-t-md" style={{ left: "14%", width: 32, height: "65%", background: "var(--color-teal)", opacity: 0.8 }} />
                <div className="absolute bottom-0 rounded-t-md" style={{ left: "24%", width: 32, height: "82%", background: "var(--color-teal)", opacity: 0.8 }} />
                <div className="absolute bottom-0 rounded-t-md" style={{ left: "34%", width: 32, height: "58%", background: "var(--color-teal-bright)", opacity: 0.8 }} />
                <div className="absolute bottom-0 rounded-t-md" style={{ left: "44%", width: 32, height: "75%", background: "var(--color-teal-bright)", opacity: 0.8 }} />

                {/* Trend dots */}
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "62%", top: "55%", background: "var(--color-ember)" }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "69%", top: "45%", background: "var(--color-ember)" }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "76%", top: "32%", background: "var(--color-ember)" }} />
                <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "83%", top: "22%", background: "var(--color-ember)" }} />

                {/* Tags */}
                <span
                  className="absolute text-xs font-semibold px-3 py-1.5 rounded-md"
                  style={{ bottom: 60, right: 20, background: "var(--color-teal-pale)", color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}
                >
                  ChatGPT
                </span>
                <span
                  className="absolute text-xs font-semibold px-3 py-1.5 rounded-md"
                  style={{ bottom: 28, right: 20, background: "var(--color-ember-soft)", color: "var(--color-ember)", fontFamily: "var(--font-mono)" }}
                >
                  Perplexity
                </span>
                <span
                  className="absolute text-xs font-semibold px-3 py-1.5 rounded-md"
                  style={{ bottom: 92, right: 100, background: "var(--color-stone-100)", color: "var(--color-stone-600)", fontFamily: "var(--font-mono)" }}
                >
                  Google AI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROOF BAR ========== */}
        <section
          className="w-full border-y"
          style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-white)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-9 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+56%", label: "Paid lift via AI engine", color: "var(--color-teal)" },
              { value: "13K+", label: "Organic clicks in 90 days", color: "var(--color-teal)" },
              { value: "KD 0–2", label: "GEO keywords wide open in NL", color: "var(--color-ember)" },
              { value: "3", label: "Countries served", color: "var(--color-teal-bright)" },
            ].map((item) => (
              <div key={item.value} className="px-3">
                <p
                  className="text-[28px] font-bold"
                  style={{ fontFamily: "var(--font-mono)", color: item.color }}
                >
                  {item.value}
                </p>
                <p className="text-[13px] mt-1" style={{ color: "var(--color-stone-400)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section id="services" className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
            >
              What We Do
            </p>
            <h2
              className="text-[28px] md:text-[34px] font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              We make companies the top digital asset in their sector
            </h2>
            <p
              className="text-base max-w-[600px] mb-12"
              style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
            >
              Today, being &ldquo;found&rdquo; means more than Google rankings. Your customers search on ChatGPT,
              Perplexity, and AI Overviews. We make sure you show up everywhere that matters — and that the
              traffic you get actually drives revenue.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border p-8 transition-all hover:shadow-lg hover:-translate-y-0.5 relative overflow-hidden"
                  style={{
                    borderColor: s.featured ? "var(--color-teal)" : "var(--color-stone-200)",
                    backgroundColor: "var(--color-white)",
                  }}
                >
                  {s.featured && (
                    <span
                      className="absolute top-0 right-0 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-bl-lg"
                      style={{ backgroundColor: "var(--color-teal)", color: "#fff" }}
                    >
                      Core Expertise
                    </span>
                  )}
                  <div
                    className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: s.tealIcon ? "var(--color-teal-pale)" : "var(--color-ember-soft)",
                      color: s.tealIcon ? "var(--color-teal)" : "var(--color-ember)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== RESULTS ========== */}
        <section id="results" className="w-full" style={{ backgroundColor: "var(--color-stone-100)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
            >
              Proven Results
            </p>
            <h2
              className="text-[28px] md:text-[34px] font-bold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              Three companies. Three transformations.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cases.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-white)" }}
                >
                  <div className="h-1" style={{ background: c.accentGradient }} />
                  <div className="p-7">
                    <div className="flex items-center gap-1.5 text-xs mb-2" style={{ color: "var(--color-stone-400)" }}>
                      <span className="text-base leading-none">{c.flag}</span>
                      <span>{c.region}</span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                    >
                      {c.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-5" style={{ color: "var(--color-stone-600)", lineHeight: 1.6 }}>
                      {c.desc}
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      {c.stats.map((stat) => (
                        <div key={stat.label}>
                          <p
                            className="text-xl font-bold"
                            style={{ fontFamily: "var(--font-mono)", color: stat.color }}
                          >
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
          </div>
        </section>

        {/* ========== APPROACH ========== */}
        <section id="approach" className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
            >
              How We Work
            </p>
            <h2
              className="text-[28px] md:text-[34px] font-bold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              Diagnose. Build. Scale.
            </h2>
            <p
              className="text-base max-w-[600px] mb-12"
              style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
            >
              We don&apos;t hand over a strategy deck and disappear. We embed alongside your team and
              execute — proving the model on one brand before scaling across the group.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  step: "01",
                  title: "Diagnose",
                  desc: "Full digital diagnostic. Traffic architecture breakdown, technical SEO audit, GEO readiness assessment, AI visibility check, and competitive landscape analysis. We map the territory before proposing the route.",
                  numColor: "var(--color-teal-pale)",
                  hasArrow: true,
                },
                {
                  step: "02",
                  title: "Build",
                  desc: "Execute the prioritized fix list. Schema markup, content restructuring, AI engine optimization, GEO implementation. Quick wins first, then strategic moves. Everything developer-ready with file paths, code, and exact copy.",
                  numColor: "var(--color-ember-soft)",
                  hasArrow: true,
                },
                {
                  step: "03",
                  title: "Scale",
                  desc: "Weekly scorecards, monthly strategy, quarterly roadmap. Prove results on one brand, replicate across the group. Expand from SEO/GEO into broader AI-first transformation as trust and results compound.",
                  numColor: "var(--color-teal-pale)",
                  hasArrow: false,
                },
              ].map((phase, i) => (
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
                  <p
                    className="text-5xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-mono)", color: phase.numColor }}
                  >
                    {phase.step}
                  </p>
                  <h3
                    className="text-lg font-bold mb-2.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                  >
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
                    {phase.desc}
                  </p>
                  {phase.hasArrow && (
                    <div
                      className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full border items-center justify-center text-sm"
                      style={{
                        backgroundColor: "var(--color-white)",
                        borderColor: "var(--color-stone-200)",
                        color: "var(--color-stone-400)",
                      }}
                    >
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== VISION BANNER ========== */}
        <section className="w-full py-16 relative overflow-hidden" style={{ backgroundColor: "var(--color-charcoal)" }}>
          {/* Decorative circles */}
          <div
            className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full"
            style={{ background: "var(--color-teal)", opacity: 0.08 }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-[200px] h-[200px] rounded-full"
            style={{ background: "var(--color-ember)", opacity: 0.06 }}
          />

          <div className="max-w-6xl mx-auto px-6 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
              <div>
                <p
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "var(--color-teal-bright)", fontFamily: "var(--font-body)" }}
                >
                  Where This Is Heading
                </p>
                <h2
                  className="text-[28px] md:text-[32px] font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "#fff" }}
                >
                  From digital presence to AI-first company
                </h2>
                <p className="text-base" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                  We start with what's proven: making you the top digital asset in your sector.
                  But the relationship doesn't stop at SEO. As your trusted AI partner, we help your
                  company become genuinely AI-first — in how you serve customers, make decisions, and
                  operate day to day.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    { label: "SEO & GEO", active: true },
                    { label: "Content Architecture", active: true },
                    { label: "AI Workflows", active: false },
                    { label: "Custom AI Engines", active: false },
                    { label: "AI-First Operations", active: false },
                    { label: "Product AI", active: false },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className="text-[13px] font-medium px-3.5 py-1.5 rounded-full border"
                      style={
                        tag.active
                          ? { backgroundColor: "var(--color-teal)", borderColor: "var(--color-teal)", color: "#fff" }
                          : { borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }
                      }
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p
                  className="text-[64px] font-bold leading-none"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal-bright)" }}
                >
                  10–200
                </p>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  person companies we're built for
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== WHO WE SERVE ========== */}
        <section
          className="w-full py-16"
          style={{ backgroundColor: "var(--color-ember-soft)", borderTop: "3px solid var(--color-ember)" }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "var(--color-ember)", fontFamily: "var(--font-body)" }}
                >
                  Who This Is For
                </p>
                <h2
                  className="text-[28px] font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                >
                  The companies that need this most
                </h2>
                <p className="text-[15px]" style={{ color: "var(--color-stone-600)", lineHeight: 1.8 }}>
                  You're past the startup phase but not yet enterprise. You know AI is reshaping
                  your market. You need someone who can both think strategically <em>and</em> execute —
                  not another agency adding to the noise.
                </p>
              </div>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {[
                  "Multi-brand groups wanting one growth partner across all brands",
                  "B2B SaaS needing organic visibility and AI engine citations",
                  "Professional services firms falling behind on digital",
                  "Scale-ups that outgrew their scrappy SEO setup",
                  "E-commerce and publishing companies with content-traffic mismatches",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] px-4 py-3 rounded-lg border"
                    style={{
                      color: "var(--color-stone-600)",
                      backgroundColor: "var(--color-white)",
                      borderColor: "rgba(234,88,12,0.12)",
                    }}
                  >
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: "var(--color-ember)" }}>
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ========== ASSESSMENT CTA ========== */}
        <section id="assessment" className="w-full py-20" style={{ backgroundColor: "var(--color-teal-pale)" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p
                  className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
                >
                  AI Readiness Assessment
                </p>
                <h2
                  className="text-[28px] md:text-[32px] font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
                >
                  Find out how AI-ready your company actually is
                </h2>
                <p className="text-base mb-6" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
                  Not a quick quiz. A structured assessment that takes 15 minutes of real thought
                  about your business. In return, you get a scored AI readiness report with specific,
                  prioritized recommendations.
                </p>
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
                  style={{ backgroundColor: "var(--color-ember)", color: "#fff", fontFamily: "var(--font-body)" }}
                >
                  Take the Assessment →
                </Link>
              </div>
              <div>
                <ul className="list-none p-0 m-0">
                  {[
                    {
                      num: "1",
                      bg: "var(--color-teal)",
                      text: (
                        <>
                          <strong>You invest 15 minutes</strong> answering honest questions about your
                          business, tech stack, and growth challenges.
                        </>
                      ),
                    },
                    {
                      num: "2",
                      bg: "var(--color-ember)",
                      text: (
                        <>
                          <strong>We analyze your digital footprint</strong> — traffic architecture,
                          AI engine visibility, competitive positioning, content quality.
                        </>
                      ),
                    },
                    {
                      num: "3",
                      bg: "var(--color-teal-bright)",
                      text: (
                        <>
                          <strong>You get a scored AI readiness report</strong> with specific
                          recommendations — not a sales pitch disguised as advice.
                        </>
                      ),
                    },
                  ].map((step) => (
                    <li key={step.num} className="flex items-start gap-3 text-sm mb-4" style={{ color: "var(--color-stone-600)", lineHeight: 1.6 }}>
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full text-[13px] font-bold flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: step.bg, color: "#fff" }}
                      >
                        {step.num}
                      </span>
                      <span>{step.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}