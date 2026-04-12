"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function AssessmentCTA() {
  const t = useTranslations();
  const steps = (t.raw("assessment.steps") || []) as Array<{ num: string; text: string; bg: string }>;

  return (
    <section id="assessment" className="w-full py-20" style={{ backgroundColor: "var(--color-teal-pale)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
              {t("assessment.label")}
            </p>
            <h2 className="text-[28px] md:text-[32px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
              {t("assessment.title")}
            </h2>
            <p
              className="text-[19px] font-bold mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-ember)", lineHeight: 1.4 }}
            >
              {t("assessment.question")}
            </p>
            <p className="text-base mb-6" style={{ color: "var(--color-stone-600)", lineHeight: 1.7 }}>
              {t("assessment.description")}
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-base font-semibold no-underline transition-all hover:-translate-y-px"
              style={{ backgroundColor: "var(--color-ember)", color: "#fff", fontFamily: "var(--font-body)" }}
            >
              {t("assessment.cta")}
            </Link>
          </div>
          <div>
            <ul className="list-none p-0 m-0">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm mb-4" style={{ color: "var(--color-stone-600)", lineHeight: 1.6 }}>
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
