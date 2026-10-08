import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/*
 * Homepage v7, "Groeien zonder verspilling". Server components only, so every word
 * is in the HTML that Google and AI crawlers receive. Copy lives in messages/*.json → home.
 */

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------------- Hero + three leaks ---------------- */

const BUYERS = new Set([13, 38, 61, 87]); // 4 of 100 dots ≈ 25 of ~700 visitors

// Illustrative week: value (v) vs. waste (w) blocks per day, in relative widths
const WEEK: Array<Array<["v" | "w", number]>> = [
  [["v", 40], ["w", 25], ["v", 20], ["w", 15]],
  [["v", 30], ["w", 20], ["v", 35], ["w", 15]],
  [["w", 20], ["v", 45], ["w", 20], ["v", 15]],
  [["v", 35], ["w", 30], ["v", 25], ["w", 10]],
  [["v", 25], ["w", 35], ["v", 25], ["w", 15]],
];

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" });
  const trust = t.raw("hero.trust") as string[];
  const points = t.raw("leaks.one.points") as string[];
  const days = t.raw("leaks.three.days") as string[];

  return (
    <section className="ab-hero" aria-labelledby="hero-title">
      <div className="ab-wrap ab-hero__inner">
        <div className="ab-hero__text">
          <p className="ab-badge">{t("hero.badge")}</p>
          <h1 id="hero-title">
            {t("hero.titleA")} <em>{t("hero.titleB")}</em>
          </h1>
          <p className="ab-hero__sub">{t("hero.sub")}</p>
          <p className="ab-hero__promise">{t("hero.promise")}</p>
          <div className="ab-hero__ctas">
            <Link href="/assessment" className="ab-btn ab-btn--primary">
              {t("hero.ctaPrimary")}
              <Arrow />
            </Link>
            <Link href="/#approach" className="ab-btn ab-btn--ghost">
              {t("hero.ctaSecondary")}
            </Link>
          </div>
          <ul className="ab-trust">
            {trust.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div id="leaks" className="ab-leaks">
          <div className="ab-leaks__head">
            <h2 className="ab-eyebrow">
              {t("leaks.label")} · {t("leaks.question")}
            </h2>
            <p className="ab-leaks__order">{t("leaks.order")}</p>
          </div>

          <div className="ab-leaks__grid">
            {/* Leak 1: search traffic */}
            <article className="ab-leak">
              <div className="ab-leak__visual">
                <span className="ab-leak__tag">{t("leaks.illustration")}</span>
                <svg className="ab-chart" viewBox="0 0 320 168" preserveAspectRatio="none" role="img" aria-label={t("leaks.one.chartAlt")}>
                  <line x1="0" y1="160" x2="320" y2="160" stroke="#E7E5E4" strokeWidth="1" />
                  <line x1="0" y1="110" x2="320" y2="110" stroke="#F0EFEE" strokeWidth="1" />
                  <line x1="0" y1="60" x2="320" y2="60" stroke="#F0EFEE" strokeWidth="1" />
                  <path d="M10 142 L60 134 L110 124 L160 110 L210 98 L260 86 L310 72 L310 160 L10 160 Z" fill="#78716C" fillOpacity="0.08" />
                  <path d="M10 142 L60 134 L110 124 L160 110 L210 98 L260 86 L310 72" fill="none" stroke="#78716C" strokeWidth="2" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                  <path d="M10 44 L60 50 L110 58 L160 72 L210 86 L260 104 L310 122" fill="none" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  <circle cx="310" cy="122" r="4" fill="#EA580C" />
                  <circle cx="310" cy="72" r="4" fill="#78716C" />
                  <text x="10" y="34" fontFamily="var(--font-mono)" fontSize="11" fill="#C2410C">{t("leaks.one.chartOrganic")}</text>
                  <text x="304" y="60" textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="#57534E">{t("leaks.one.chartAds")}</text>
                </svg>
              </div>
              <div>
                <p className="ab-leak__label">{t("leaks.one.tag")}</p>
                <h3>{t("leaks.one.title")}</h3>
                <ul className="ab-points">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Leak 2: visitors who never buy (client data) */}
            <article className="ab-leak">
              <div className="ab-leak__visual">
                <span className="ab-leak__tag ab-leak__tag--data">{t("leaks.clientData")}</span>
                <p className="ab-figure">
                  <strong>25</strong>
                  <span>{t("leaks.two.figure")}</span>
                </p>
                <div className="ab-dots" role="img" aria-label={t("leaks.two.dotsAlt")}>
                  {Array.from({ length: 100 }, (_, i) => (
                    <span key={i} className={BUYERS.has(i) ? "is-buyer" : undefined} />
                  ))}
                </div>
                <p className="ab-micro">{t("leaks.two.legend")}</p>
              </div>
              <div>
                <p className="ab-leak__label">{t("leaks.two.tag")}</p>
                <h3>{t("leaks.two.title")}</h3>
                <p className="ab-leak__text">{t("leaks.two.text")}</p>
              </div>
            </article>

            {/* Leak 3: hours without value */}
            <article className="ab-leak">
              <div className="ab-leak__visual">
                <span className="ab-leak__tag">{t("leaks.illustration")}</span>
                <p className="ab-micro">{t("leaks.three.week")}</p>
                <div className="ab-week" role="img" aria-label={t("leaks.three.weekAlt")}>
                  {WEEK.map((row, i) => (
                    <div className="ab-week__row" key={days[i]}>
                      <span className="ab-week__day">{days[i]}</span>
                      <div className="ab-week__bar">
                        {row.map(([kind, w], j) => (
                          <span key={j} className={kind === "v" ? "ab-v" : "ab-w"} style={{ flex: w }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="ab-legend">
                  <li><i className="ab-v" />{t("leaks.three.value")}</li>
                  <li><i className="ab-w" />{t("leaks.three.waste")}</li>
                </ul>
              </div>
              <div>
                <p className="ab-leak__label">{t("leaks.three.tag")}</p>
                <h3>{t("leaks.three.title")}</h3>
                <p className="ab-leak__text">{t("leaks.three.text")}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Approach ---------------- */

type Step = { num: string; when: string; tag: string; title: string; text: string; notice: string };

export async function Approach({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.approach" });
  const steps = t.raw("steps") as Step[];
  return (
    <section id="approach" className="ab-section" aria-labelledby="approach-title">
      <div className="ab-wrap">
        <div className="ab-head-row">
          <div>
            <p className="ab-eyebrow">{t("label")}</p>
            <h2 id="approach-title" className="ab-h2">{t("title")}</h2>
          </div>
          <p className="ab-lead">{t("intro")}</p>
        </div>
        <ol className="ab-steps">
          {steps.map((s) => (
            <li className="ab-step" key={s.num}>
              <div className="ab-step__num">
                <strong>{s.num}</strong>
                <span>{s.when}</span>
              </div>
              <div className="ab-step__body">
                <p className="ab-step__tag">{s.tag}</p>
                <h3>{s.title}</h3>
                <p className="ab-step__text">{s.text}</p>
              </div>
              <div className="ab-notice">
                <p className="ab-notice__label">{t("noticeLabel")}</p>
                <p className="ab-notice__text">{s.notice}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Engine ---------------- */

export async function Engine({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.engine" });
  const roles = t.raw("roles") as Array<{ title: string; text: string }>;
  const icons = [
    <svg key="w" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4z" /><path d="M13.5 6.5l4 4" /></svg>,
    <svg key="e" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>,
  ];
  return (
    <section id="engine" className="ab-section ab-section--tint" aria-labelledby="engine-title">
      <div className="ab-wrap ab-engine">
        <div className="ab-engine__text">
          <p className="ab-eyebrow">{t("label")}</p>
          <h2 id="engine-title" className="ab-h2">
            {t("titleA")} <em>{t("titleB")}</em>
          </h2>
          <p className="ab-engine__body">{t("text")}</p>
        </div>
        <div className="ab-roles">
          {roles.map((r, i) => (
            <div className="ab-role" key={r.title}>
              {icons[i]}
              <h3>{r.title}</h3>
              <p className="ab-role__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clients ---------------- */

type Client = { flag: string; sector: string; status: string; title: string; text: string; metric?: string; metricLabel?: string };

export async function Clients({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.clients" });
  const items = t.raw("items") as Client[];
  return (
    <section id="clients" className="ab-section" aria-labelledby="clients-title">
      <div className="ab-wrap">
        <p className="ab-eyebrow">{t("label")}</p>
        <h2 id="clients-title" className="ab-h2">{t("title")}</h2>
        <p className="ab-lead">{t("intro")}</p>
        <div className="ab-clients">
          {items.map((c) => (
            <article className="ab-client" key={c.title}>
              <div className="ab-client__top">
                <p className="ab-client__sector">
                  <span aria-hidden="true">{c.flag}</span> {c.sector}
                </p>
                <span className="ab-client__status">{c.status}</span>
              </div>
              <h3>{c.title}</h3>
              {c.metric && (
                <p className="ab-client__metric">
                  <strong>{c.metric}</strong>
                  <span>{c.metricLabel}</span>
                </p>
              )}
              <p className="ab-client__text">{c.text}</p>
            </article>
          ))}
        </div>
        <p className="ab-note">{t("note")}</p>
      </div>
    </section>
  );
}

/* ---------------- Working together ---------------- */

export async function Working({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.working" });
  const steps = t.raw("steps") as Array<{ when: string; title: string; text: string; accent?: boolean }>;
  return (
    <section className="ab-section ab-section--white" aria-labelledby="working-title">
      <div className="ab-wrap">
        <p className="ab-eyebrow">{t("label")}</p>
        <h2 id="working-title" className="ab-h2">{t("title")}</h2>
        <ol className="ab-timeline">
          {steps.map((s) => (
            <li key={s.title} className={s.accent ? "is-exit" : undefined}>
              <p className="ab-timeline__when">{s.when}</p>
              <h3>{s.title}</h3>
              <p className="ab-timeline__text">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="ab-price">
          <strong>{t("price")}</strong>
          <span>{t("priceNote")}</span>
        </p>
      </div>
    </section>
  );
}

/* ---------------- Not us ---------------- */

export async function NotUs({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.notUs" });
  const items = t.raw("items") as string[];
  return (
    <section className="ab-section" aria-labelledby="notus-title">
      <div className="ab-wrap ab-notus">
        <div className="ab-notus__text">
          <p className="ab-eyebrow">{t("label")}</p>
          <h2 id="notus-title" className="ab-h2">{t("title")}</h2>
          <p className="ab-notus__body">{t("text")}</p>
        </div>
        <ul>
          {items.map((x) => (
            <li key={x}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              {x}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FAQ (native details: answers stay in the HTML) ---------------- */

export async function Faq({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.faq" });
  const items = t.raw("items") as Array<{ q: string; a: string }>;
  return (
    <section id="faq" className="ab-section ab-section--white" aria-labelledby="faq-title">
      <div className="ab-wrap">
        <div className="ab-faq">
          <p className="ab-eyebrow">{t("label")}</p>
          <h2 id="faq-title" className="ab-h2">{t("title")}</h2>
          {items.map((it, i) => (
            <details key={it.q} open={i === 0}>
              <summary>
                <h3 style={{ font: "inherit", margin: 0, color: "inherit" }}>{it.q}</h3>
              </summary>
              <p className="ab-faq__answer">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export async function FinalCta({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.cta" });
  return (
    <section className="ab-section" aria-labelledby="cta-title">
      <div className="ab-wrap">
        <div className="ab-cta">
          <div className="ab-cta__text">
            <h2 id="cta-title" className="ab-h2">{t("title")}</h2>
            <p className="ab-cta__body">{t("text")}</p>
          </div>
          <div className="ab-cta__btns">
            <Link href="/assessment" className="ab-btn ab-btn--primary">
              {t("primary")}
              <Arrow />
            </Link>
            <Link href="/contact" className="ab-btn ab-btn--ghost">
              {t("secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
