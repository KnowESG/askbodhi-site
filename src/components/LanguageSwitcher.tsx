"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const LOCALES = [
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "en", label: "EN", name: "English" },
] as const;

function rememberLocale(code: string) {
  try {
    document.cookie = `NEXT_LOCALE=${code}; max-age=${60 * 60 * 24 * 180}; path=/; SameSite=Lax`;
  } catch {
    /* cookie blocked: the link still works */
  }
}

/** Real links to the same page in the other language, so crawlers and keyboard users can follow them. */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className="ab-lang" aria-label={t("languageLabel")}>
      {LOCALES.map((l) =>
        l.code === locale ? (
          <span key={l.code} aria-current="true" lang={l.code} title={l.name}>
            {l.label}
          </span>
        ) : (
          <Link
            key={l.code}
            href={pathname}
            locale={l.code}
            hrefLang={l.code}
            lang={l.code}
            title={l.name}
            onClick={() => rememberLocale(l.code)}
          >
            {l.label}
          </Link>
        )
      )}
    </nav>
  );
}
