import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero, Approach, Engine, Clients, Working, NotUs, Faq, FinalCta } from "@/components/home/HomeSections";
import { FaqJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return pageMetadata({ locale, title: t("title"), description: t("description"), absoluteTitle: true });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations({ locale, namespace: "meta.home" });
  const faq = await getTranslations({ locale, namespace: "home.faq" });

  return (
    <>
      <WebPageJsonLd locale={locale} url={absoluteUrl(locale)} name={meta("title")} description={meta("description")} />
      <FaqJsonLd items={faq.raw("items") as Array<{ q: string; a: string }>} />
      <Header />
      <main id="main" className="flex-1">
        <Hero locale={locale} />
        <Approach locale={locale} />
        <Engine locale={locale} />
        <Clients locale={locale} />
        <Working locale={locale} />
        <NotUs locale={locale} />
        <Faq locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <Footer />
    </>
  );
}
