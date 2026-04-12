"use client";

import { useTranslations } from "next-intl";

const getServiceIcons = () => ({
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  architecture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  engines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  transformation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
});

export default function ServicesSection() {
  const t = useTranslations();
  const serviceItems = t.raw("services.items") as Array<{ title: string; description: string }>;
  const icons = getServiceIcons();
  const iconKeys = ["seo", "architecture", "engines", "transformation"] as const;

  const services = serviceItems.map((item, idx) => ({
    ...item,
    featured: idx < 2,
    horizon: idx >= 2,
    tealIcon: idx < 2,
    icon: icons[iconKeys[idx]],
  }));

  return (
    <section id="services" className="w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20 lg:px-24">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-teal)", fontFamily: "var(--font-body)" }}>
          {t("services.label")}
        </p>
        <h2 className="text-[28px] md:text-[34px] font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
          {t("services.title")}
        </h2>
        <p className="text-base max-w-[600px] mb-12" style={{ color: "var(--color-stone-600)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
          {t("services.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`service-card-next ${s.featured ? "service-featured" : ""} ${s.horizon ? "service-horizon" : ""}`}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-4"
                style={{
                  backgroundColor: s.tealIcon ? "var(--color-teal-pale)" : "var(--color-ember-soft)",
                  color: s.tealIcon ? "var(--color-teal)" : "var(--color-ember)",
                }}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}>
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
  );
}
