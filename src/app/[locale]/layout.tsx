import type { Metadata, Viewport } from "next";
import { Lora, Geist_Mono, Instrument_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import "../components.css";
import { SiteJsonLd } from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getMessages } from "next-intl/server";
import { Providers } from "./provider";
import { SITE_URL } from "@/lib/seo";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/*
 * Site-wide defaults only. Canonical, hreflang, titles and Open Graph are set
 * per page through pageMetadata() in src/lib/seo.ts, so no page inherits
 * another page's canonical.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AskBodhi", template: "%s | AskBodhi" },
  applicationName: "AskBodhi",
  creator: "AskBodhi",
  publisher: "AskBodhi",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();
  setRequestLocale(locale);
  // Server components read their own copy; only send client components what they use.
  const { home: _home, meta: _meta, ...messages } = await getMessages();
  void _home;
  void _meta;

  return (
    <html lang={locale} className={`${lora.variable} ${geistMono.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SiteJsonLd locale={locale} />
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
