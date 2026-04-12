"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const serviceLinks = t.raw("footer.serviceLinks") as Array<{ name: string; href: string }>;

  return (
    <footer
      className="w-full border-t mt-auto"
      style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-stone-100)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              AskBodhi
            </p>
            <p className="text-sm" style={{ color: "var(--color-stone-400)" }}>
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-stone-400)" }}
            >
              {t("footer.services")}
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm no-underline" style={{ color: "var(--color-stone-600)" }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-stone-400)" }}
            >
              {t("footer.contact")}
            </p>
            <p className="text-sm" style={{ color: "var(--color-stone-600)" }}>
              <a href={`mailto:${t("footer.email")}`} className="no-underline" style={{ color: "var(--color-stone-600)" }}>{t("footer.email")}</a>
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--color-stone-400)" }}>
              {t("footer.location")}
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center"
          style={{ borderColor: "var(--color-stone-200)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-stone-400)" }}>
            {t("footer.copyright", { year: 2026 })}
          </p>
        </div>
      </div>
    </footer>
  );
}
