"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LogoMark from "./LogoMark";

type FooterLink = { name: string; href: string };

export default function Footer() {
  const t = useTranslations("footer");
  const columns: Array<{ title: string; links: FooterLink[] }> = [
    { title: t("services"), links: t.raw("serviceLinks") as FooterLink[] },
    { title: t("company"), links: t.raw("companyLinks") as FooterLink[] },
    { title: t("legal"), links: t.raw("legalLinks") as FooterLink[] },
  ];

  return (
    <footer className="ab-footer">
      <div className="ab-wrap">
        <div className="ab-footer__grid">
          <div className="ab-footer__brand">
            <Link href="/" className="ab-logo" aria-label="AskBodhi.ai">
              <LogoMark size={28} />
              <span className="ab-logo__word" style={{ fontSize: 20 }}>
                AskBodhi<span>.ai</span>
              </span>
            </Link>
            <p>{t("tagline")}</p>
            <p>
              <a href={`mailto:${t("email")}`}>{t("email")}</a>
              <br />
              {t("location")}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="ab-footer__h">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ab-footer__base">
          <p>{t("companyLine")}</p>
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
