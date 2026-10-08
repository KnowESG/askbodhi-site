import { COMPANY, SITE_URL } from "@/lib/seo";

/*
 * Structured data for the whole site.
 * Rule: no founder, employee or Person schema, and no sameAs to other brands.
 * The organisation is the only author.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output contains no closing script tags from our own static data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const copy = {
  nl: {
    orgDescription:
      "AskBodhi is een AI-first groeipartner voor het Nederlandse mkb. We vinden waar een bedrijf geld en tijd verliest en dichten het, in vaste volgorde: vindbaarheid in Google en AI-assistenten (SEO, GEO, SEA), een eigen digitale collega (de Bodhi Engine) en het schrappen van werk zonder waarde.",
    serviceName: "AI-first groeipartnerschap",
    services: [
      {
        name: "Stop de verspilling in zoeken",
        description:
          "Diagnose van welk verkeer omzet oplevert, daarna vindbaarheid in Google en in AI-assistenten zoals ChatGPT en Perplexity (SEO, GEO). Advertenties alleen waar ze zich terugverdienen.",
      },
      {
        name: "De Bodhi Engine",
        description:
          "Een digitale collega, gebouwd en getraind op het bedrijf van de klant. Schrijft concepten, volgt posities en AI-vermeldingen en rapporteert maandelijks. Eigendom van de klant.",
      },
      {
        name: "Schrap wat geen waarde toevoegt",
        description:
          "Procesoptimalisatie met AI: werk zonder waarde verdwijnt of gaat naar AI, wat blijft wordt eenvoudiger.",
      },
    ],
  },
  en: {
    orgDescription:
      "AskBodhi is an AI-first growth partner for Dutch SMEs. We find where a company loses money and time and fix it in a fixed order: findability in Google and AI assistants (SEO, GEO, SEA), a digital colleague of its own (the Bodhi Engine), and cutting work that adds no value.",
    serviceName: "AI-first growth partnership",
    services: [
      {
        name: "Stop the waste in search",
        description:
          "A diagnosis of which traffic brings in revenue, then findability in Google and in AI assistants such as ChatGPT and Perplexity (SEO, GEO). Ads only where they pay for themselves.",
      },
      {
        name: "The Bodhi Engine",
        description:
          "A digital colleague built and trained on the client's business. Drafts content, tracks rankings and AI mentions, and reports monthly. Owned by the client.",
      },
      {
        name: "Cut what adds no value",
        description:
          "Process optimisation with AI: work that adds no value disappears or goes to AI, and what stays gets simpler.",
      },
    ],
  },
};

export function SiteJsonLd({ locale }: { locale: string }) {
  const c = locale === "nl" ? copy.nl : copy.en;
  const inLanguage = locale === "nl" ? "nl-NL" : "en";

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: COMPANY.brand,
        alternateName: "AskBodhi.ai",
        legalName: COMPANY.legalName,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-${locale === "nl" ? "nl" : "en"}.png`,
        description: c.orgDescription,
        email: COMPANY.email,
        vatID: COMPANY.vat,
        identifier: {
          "@type": "PropertyValue",
          propertyID: "KvK",
          value: COMPANY.kvk,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.street,
          postalCode: COMPANY.postalCode,
          addressLocality: COMPANY.city,
          addressCountry: COMPANY.country,
        },
        areaServed: { "@type": "Country", name: "Netherlands" },
        knowsLanguage: ["nl", "en"],
        priceRange: "€€€",
        knowsAbout: [
          "Search Engine Optimization",
          "Generative Engine Optimization",
          "Search Engine Advertising",
          "AI search visibility",
          "Process optimisation",
          "AI automation for SMEs",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: COMPANY.email,
          contactType: "sales",
          availableLanguage: ["Dutch", "English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: c.serviceName,
          itemListElement: c.services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              provider: { "@id": ORG_ID },
              areaServed: { "@type": "Country", name: "Netherlands" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: "AskBodhi",
        inLanguage,
        publisher: { "@id": ORG_ID },
      },
    ],
  };

  return <Script data={graph} />;
}

export function WebPageJsonLd({
  locale,
  url,
  name,
  description,
}: {
  locale: string;
  url: string;
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "nl" ? "nl-NL" : "en",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
  return <Script data={data} />;
}

export function FaqJsonLd({ items }: { items: Array<{ q: string; a: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <Script data={data} />;
}
