import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { ServicesSection, ResultsSection, ApproachSection, WhoSection, VisionSection, AssessmentCTA } from "@/components/home";
import HeroVisual from "@/components/home/HeroVisual";
import ToolBar from "@/components/ToolBar";
import FAQ from "@/components/FAQ";
import { FaqJsonLd } from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "AskBodhi — AI-Led Growth for Forward-Thinking Companies",
  description:
    "Your competitors rank above you. You\u2019re spending on ads because organic isn\u2019t working. AskBodhi fixes SEO, GEO, and AI visibility for companies that depend on being found online.",
  alternates: { canonical: "https://askbodhi.ai" },
};

export default function Home() {
  return (
    <>
      <Header />
      <FaqJsonLd />

      <main className="flex-1">
        {/* ========== HERO (OPT #1 + #14) ========== */}
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
                {/* OPT #1: Pain-point subtitle */}
                <p
                  className="text-[17px] md:text-lg max-w-[560px] mb-5"
                  style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}
                >
                  You&apos;re spending on ads because organic isn&apos;t working. Your competitors rank above you.
                  AI search is changing the game and you&apos;re not in it. We fix all three.
                </p>
                <div className="flex flex-wrap gap-3 mb-3">
                  <Link
                    href="/assessment"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
                    style={{ backgroundColor: "var(--color-teal)", color: "#fff", fontFamily: "var(--font-body)" }}
                  >
                    Take the Free Assessment
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline border transition-colors"
                    style={{ borderColor: "var(--color-stone-200)", color: "var(--color-stone-600)", fontFamily: "var(--font-body)", backgroundColor: "var(--color-white)" }}
                  >
                    See How We Work
                  </Link>
                </div>
                {/* OPT #14: Secondary CTA */}
                <Link
                  href="#results"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold no-underline transition-all"
                  style={{ color: "var(--color-teal)" }}
                >
                  See how we diagnosed a company like yours &rarr;
                </Link>
              </div>

              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ========== PROOF BAR (OPT #2) ========== */}
        <section className="w-full border-y" style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-white)" }}>
          <div className="max-w-6xl mx-auto px-6 py-9 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "\u20ac0 \u2192 \u20ac12K", label: "Monthly organic traffic value created", color: "var(--color-teal)" },
              { value: "13,000", label: "New visitors without ad spend", color: "var(--color-teal)" },
              { value: "47", label: "Untapped keywords found per client (avg)", color: "var(--color-ember)" },
              { value: "3\u20135\u00d7", label: "ROI vs. equivalent ad spend", color: "var(--color-teal-bright)" },
            ].map((item) => (
              <div key={item.value} className="px-3">
                <p className="text-[28px] font-bold" style={{ fontFamily: "var(--font-mono)", color: item.color }}>{item.value}</p>
                <p className="text-[13px] mt-1" style={{ color: "var(--color-stone-400)" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
        <ResultsSection />
        <ApproachSection />
        <ToolBar />
        <WhoSection />
        <VisionSection />
        <FAQ />
        <AssessmentCTA />
      </main>

      <Footer />
    </>
  );
}
