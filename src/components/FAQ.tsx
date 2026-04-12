"use client";

import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations();
  const faqItems = (t.raw("faq.items") || []) as Array<{ q: string; a: string }>;

  return (
    <section className="faq-section" id="faq" style={{ padding: "80px 0", backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3"
          style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}
        >
          {t("faq.label")}
        </p>
        <h2
          className="text-[28px] md:text-[34px] font-bold mb-10"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
        >
          {t("faq.title")}
        </h2>

        <div className="faq-grid" style={{ maxWidth: 800 }}>
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => {
                  const parent = (e.target as HTMLElement).closest(".faq-item");
                  parent?.classList.toggle("open");
                }}
              >
                {item.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
