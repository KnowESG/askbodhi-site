import { getTranslations } from "next-intl/server";
import { CLIENTS } from "@/content/clients";
import "./clients.css";

export async function Clients({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home.clients" });
  const data = CLIENTS[locale === "en" ? "en" : "nl"];

  return (
    <section id="clients" className="ab-section" aria-labelledby="clients-title">
      <div className="ab-wrap">
        <p className="ab-eyebrow">{t("label")}</p>
        <h2 id="clients-title" className="ab-h2">{t("title")}</h2>
        <p className="ab-lead">{t("intro")}</p>

        <div className="ab-cl-grid">
          {data.cards.map((c) => (
            <article className="ab-cl" key={c.title}>
              <div className="ab-cl__top">
                {c.platform ? (
                  <span className="ab-cl__platform">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/platforms/${c.platform.id}.svg`} alt="" width={16} height={16} />
                    {c.platform.name}
                  </span>
                ) : (
                  <span className="ab-cl__sector">
                    {c.flag && <span aria-hidden="true">{c.flag} </span>}
                    {c.sector}
                  </span>
                )}
                <span className="ab-cl__status">{c.status}</span>
              </div>
              {c.platform && (
                <p className="ab-cl__sector">
                  {c.flag && <span aria-hidden="true">{c.flag} </span>}
                  {c.sector}
                </p>
              )}
              <h3>{c.title}</h3>
              <p className="ab-cl__text">{c.text}</p>

              {c.entries && (
                <ul className="ab-cl__entries">
                  {c.entries.map((e) => (
                    <li key={e.sector}>
                      <span className="ab-cl__entry-sector">
                        <span aria-hidden="true">{e.flag} </span>
                        {e.sector}
                      </span>
                      <span className="ab-cl__entry-text">{e.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {c.highlight && (
                <p className="ab-cl__highlight">
                  <strong>{c.highlight.value}</strong>
                  <span>{c.highlight.label}</span>
                </p>
              )}

              {c.open && (
                <p className="ab-cl__open">
                  <span>{data.openLabel}</span> {c.open}
                </p>
              )}

              <div className="ab-cl__did">
                <span className="ab-cl__did-label">{data.didLabel}</span>
                <ul>
                  {c.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="ab-note">{data.note}</p>
      </div>
    </section>
  );
}
