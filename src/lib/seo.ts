import type { Metadata } from "next";

export const SITE_URL = "https://askbodhi.ai";
export const LOCALES = ["nl", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** Company facts used in schema, footer and colofon. Single source of truth. */
export const COMPANY = {
  brand: "AskBodhi",
  legalName: "64 B.V.",
  street: "Sophialaan 33",
  postalCode: "1213 XL",
  city: "Hilversum",
  country: "NL",
  kvk: "42104155",
  vat: "NL869749481B01",
  email: "info@askbodhi.ai",
} as const;

export function absoluteUrl(locale: string, path = "") {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * Per-page metadata: self-referencing canonical, hreflang pair + x-default,
 * localized Open Graph. Every route calls this so no page inherits another's canonical.
 */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
  absoluteTitle = false,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(locale, path);
  const ogLocale = locale === "nl" ? "nl_NL" : "en_US";
  const altLocale = locale === "nl" ? "en_US" : "nl_NL";
  const image = `${SITE_URL}/og-${locale === "nl" ? "nl" : "en"}.png`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        nl: absoluteUrl("nl", path),
        en: absoluteUrl("en", path),
        "x-default": absoluteUrl("nl", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: "AskBodhi",
      locale: ogLocale,
      alternateLocale: altLocale,
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
