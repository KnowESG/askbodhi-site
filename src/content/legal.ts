/*
 * Legal pages: privacy, voorwaarden (terms), colofon (company details).
 * Facts come from COMPANY in src/lib/seo.ts. Last reviewed: 8 October 2026.
 * Have a legal adviser review the privacy statement before relying on it.
 */
import { COMPANY } from "@/lib/seo";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "dl"; rows: Array<[string, string]> };

export type LegalSection = { heading?: string; blocks: LegalBlock[] };
export type LegalDoc = { label: string; title: string; updated: string; sections: LegalSection[] };

const ADDRESS = `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}`;

export const LEGAL: Record<"privacy" | "voorwaarden" | "colofon", Record<"nl" | "en", LegalDoc>> = {
  privacy: {
    nl: {
      label: "Juridisch",
      title: "Privacyverklaring",
      updated: "Laatst bijgewerkt: 8 oktober 2026",
      sections: [
        {
          blocks: [
            { type: "p", text: `AskBodhi.ai is een handelsnaam van ${COMPANY.legalName}, gevestigd aan ${ADDRESS}, KvK ${COMPANY.kvk}. Wij zijn verantwoordelijk voor de persoonsgegevens die u via deze website met ons deelt. In deze verklaring leest u welke gegevens dat zijn, waarom we ze gebruiken en welke rechten u heeft.` },
          ],
        },
        {
          heading: "Welke gegevens we verwerken",
          blocks: [
            { type: "ul", items: [
              "Kennismakingsformulier: uw naam, e-mailadres, website en uw bericht.",
              "Gratis scan: uw antwoorden op de vragen, uw naam, e-mailadres, bedrijfsnaam, website en de berekende score.",
              "Technische gegevens: onze hostingprovider registreert standaard serverlogs, zoals IP-adres, browsertype en tijdstip, om de website veilig en beschikbaar te houden.",
            ] },
          ],
        },
        {
          heading: "Waarom we ze gebruiken",
          blocks: [
            { type: "ul", items: [
              "Om te reageren op uw aanvraag en een kennismaking te plannen. Grondslag: de stappen die u zelf zet richting een mogelijke opdracht, en ons gerechtvaardigd belang om op vragen te antwoorden.",
              "Om de uitkomst van de gratis scan te berekenen en met u te bespreken. Grondslag: uw verzoek.",
              "Om de website te beveiligen en storingen op te lossen. Grondslag: gerechtvaardigd belang.",
            ] },
            { type: "p", text: "We gebruiken uw gegevens niet voor nieuwsbrieven of advertenties en we verkopen ze nooit." },
          ],
        },
        {
          heading: "Met wie we gegevens delen",
          blocks: [
            { type: "ul", items: [
              "Vercel Inc. host deze website. Vercel kan gegevens buiten de Europese Economische Ruimte verwerken; daarvoor gelden de standaardcontractbepalingen van de Europese Commissie.",
              "Voor de gratis scan sturen we het adres van uw website, en als u die invult uw bedrijfsnaam, naar Ahrefs, Google PageSpeed Insights en Perplexity om uw vindbaarheid te analyseren. Uw naam en e-mailadres sturen we daar niet heen.",
            ] },
          ],
        },
        {
          heading: "Cookies",
          blocks: [
            { type: "p", text: "Deze website plaatst alleen een functionele cookie (NEXT_LOCALE) die uw taalkeuze onthoudt. We gebruiken geen analytische of advertentiecookies. Verandert dat, dan passen we deze verklaring vooraf aan." },
          ],
        },
        {
          heading: "Hoe lang we gegevens bewaren",
          blocks: [
            { type: "p", text: "We bewaren gegevens uit het formulier en de scan zo lang als nodig is om uw aanvraag af te handelen, en uiterlijk 24 maanden na ons laatste contact. Wordt u klant, dan bewaren we gegevens zolang de opdracht loopt en daarna zolang de wet dat vereist, zoals de fiscale bewaarplicht van zeven jaar." },
          ],
        },
        {
          heading: "Uw rechten",
          blocks: [
            { type: "p", text: `U kunt ons vragen om uw gegevens in te zien, te corrigeren, te verwijderen of over te dragen, en u kunt bezwaar maken tegen het gebruik ervan. Mail daarvoor naar ${COMPANY.email}. We reageren binnen een maand. Bent u niet tevreden over hoe we met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.` },
          ],
        },
      ],
    },
    en: {
      label: "Legal",
      title: "Privacy statement",
      updated: "Last updated: 8 October 2026",
      sections: [
        {
          blocks: [
            { type: "p", text: `AskBodhi.ai is a trade name of ${COMPANY.legalName}, ${ADDRESS}, the Netherlands, Chamber of Commerce (KvK) ${COMPANY.kvk}. We are responsible for the personal data you share with us through this website. This statement explains which data that is, why we use it and what your rights are. The Dutch version is leading.` },
          ],
        },
        {
          heading: "What data we process",
          blocks: [
            { type: "ul", items: [
              "Intro call form: your name, email address, website and message.",
              "Free scan: your answers, your name, email address, company name, website and the calculated score.",
              "Technical data: our hosting provider keeps standard server logs, such as IP address, browser type and time, to keep the website secure and available.",
            ] },
          ],
        },
        {
          heading: "Why we use it",
          blocks: [
            { type: "ul", items: [
              "To reply to your request and schedule an intro call. Legal basis: steps you take towards a possible engagement, and our legitimate interest in answering questions.",
              "To calculate the outcome of the free scan and discuss it with you. Legal basis: your request.",
              "To secure the website and fix problems. Legal basis: legitimate interest.",
            ] },
            { type: "p", text: "We don't use your data for newsletters or advertising, and we never sell it." },
          ],
        },
        {
          heading: "Who we share data with",
          blocks: [
            { type: "ul", items: [
              "Vercel Inc. hosts this website. Vercel may process data outside the European Economic Area under the European Commission's standard contractual clauses.",
              "For the free scan we send your website address, and your company name if you enter it, to Ahrefs, Google PageSpeed Insights and Perplexity to analyse your findability. We don't send them your name or email address.",
            ] },
          ],
        },
        {
          heading: "Cookies",
          blocks: [
            { type: "p", text: "This website only sets one functional cookie (NEXT_LOCALE) that remembers your language choice. We use no analytics or advertising cookies. If that changes, we update this statement first." },
          ],
        },
        {
          heading: "How long we keep data",
          blocks: [
            { type: "p", text: "We keep form and scan data as long as needed to handle your request, and no longer than 24 months after our last contact. If you become a client, we keep data for the duration of the engagement and afterwards as long as the law requires, such as the seven-year tax retention period." },
          ],
        },
        {
          heading: "Your rights",
          blocks: [
            { type: "p", text: `You can ask us to access, correct, delete or transfer your data, and you can object to its use. Email ${COMPANY.email}. We reply within one month. If you're not satisfied with how we handle your data, you can file a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).` },
          ],
        },
      ],
    },
  },
  voorwaarden: {
    nl: {
      label: "Juridisch",
      title: "Algemene voorwaarden",
      updated: "Versie 1.2, 1 september 2026",
      sections: [
        {
          blocks: [
            { type: "p", text: `Op alle offertes, opdrachtbevestigingen en overeenkomsten van ${COMPANY.legalName}, handelend onder de naam AskBodhi.ai, zijn onze algemene voorwaarden versie 1.2 van toepassing.` },
          ],
        },
        {
          heading: "Hoe u ze ontvangt",
          blocks: [
            { type: "p", text: "U ontvangt de volledige voorwaarden bij elke offerte, vóór u een opdracht bevestigt. Wilt u ze eerder inzien, mail dan naar " + COMPANY.email + " en we sturen ze direct toe." },
          ],
        },
        {
          heading: "Gebruik van deze website",
          blocks: [
            { type: "ul", items: [
              "De informatie op deze website is algemeen van aard. Aan de inhoud, prijsindicaties en voorbeelden kunt u geen rechten ontlenen; wat geldt staat in uw opdrachtbevestiging.",
              "Teksten, ontwerp en beeld op deze website zijn van AskBodhi. Overnemen mag alleen met onze schriftelijke toestemming.",
              "Op deze website en alle afspraken met ons is Nederlands recht van toepassing.",
            ] },
          ],
        },
      ],
    },
    en: {
      label: "Legal",
      title: "Terms and conditions",
      updated: "Version 1.2, 1 September 2026",
      sections: [
        {
          blocks: [
            { type: "p", text: `All quotes, engagement letters and agreements of ${COMPANY.legalName}, trading as AskBodhi.ai, are governed by our general terms and conditions, version 1.2. The Dutch text is legally binding.` },
          ],
        },
        {
          heading: "How you receive them",
          blocks: [
            { type: "p", text: "You receive the full terms with every quote, before you confirm an engagement. To read them earlier, email " + COMPANY.email + " and we'll send them right away." },
          ],
        },
        {
          heading: "Use of this website",
          blocks: [
            { type: "ul", items: [
              "The information on this website is general. No rights can be derived from its content, price indications or examples; what applies is set out in your engagement letter.",
              "Text, design and images on this website belong to AskBodhi. Reuse is only allowed with our written permission.",
              "Dutch law applies to this website and to all agreements with us.",
            ] },
          ],
        },
      ],
    },
  },
  colofon: {
    nl: {
      label: "Juridisch",
      title: "Colofon",
      updated: "Bedrijfsgegevens",
      sections: [
        {
          blocks: [
            { type: "dl", rows: [
              ["Handelsnaam", "AskBodhi.ai"],
              ["Rechtspersoon", COMPANY.legalName],
              ["Adres", ADDRESS],
              ["KvK-nummer", COMPANY.kvk],
              ["Btw-nummer", COMPANY.vat],
              ["E-mail", COMPANY.email],
            ] },
          ],
        },
      ],
    },
    en: {
      label: "Legal",
      title: "Company details",
      updated: "Colofon",
      sections: [
        {
          blocks: [
            { type: "dl", rows: [
              ["Trade name", "AskBodhi.ai"],
              ["Legal entity", COMPANY.legalName],
              ["Address", `${ADDRESS}, the Netherlands`],
              ["Chamber of Commerce (KvK)", COMPANY.kvk],
              ["VAT number", COMPANY.vat],
              ["Email", COMPANY.email],
            ] },
          ],
        },
      ],
    },
  },
};
