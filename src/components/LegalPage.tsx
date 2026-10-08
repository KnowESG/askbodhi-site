import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WebPageJsonLd } from "@/components/JsonLd";
import { LEGAL } from "@/content/legal";
import { absoluteUrl } from "@/lib/seo";

export default function LegalPage({
  doc,
  locale,
  path,
  description,
}: {
  doc: keyof typeof LEGAL;
  locale: string;
  path: string;
  description: string;
}) {
  const d = LEGAL[doc][locale === "en" ? "en" : "nl"];
  return (
    <>
      <WebPageJsonLd locale={locale} url={absoluteUrl(locale, path)} name={d.title} description={description} />
      <Header />
      <main id="main" className="flex-1">
        <article className="ab-wrap ab-prose">
          <p className="ab-eyebrow">{d.label}</p>
          <h1>{d.title}</h1>
          <p className="ab-updated">{d.updated}</p>
          {d.sections.map((s, i) => (
            <section key={i}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.blocks.map((b, j) =>
                b.type === "p" ? (
                  <p key={j}>{b.text}</p>
                ) : b.type === "ul" ? (
                  <ul key={j}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : (
                  <dl key={j}>
                    {b.rows.map(([k, v]) => (
                      <div key={k} style={{ display: "contents" }}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                )
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
