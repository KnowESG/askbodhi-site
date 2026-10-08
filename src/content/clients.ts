/*
 * Client showcase. Purpose: show how we work, not divulge client data.
 * Rules: high level only (multiples, direction), no raw client metrics, no page counts.
 * Named only with written consent (EximPe: yes; others anonymised).
 * Figures are rounded from Google Search Console, 2026. Ahrefs disagrees with GSC
 * on EximPe traffic, so no visit counts are shown.
 */

export type Entry = { flag: string; sector: string; text: string };
export type Platform = "shopify" | "wordpress" | "nextjs";
export type ClientCard = {
  platform?: { id: Platform; name: string };
  flag?: string;
  sector: string;
  status: string;
  title: string;
  text: string;
  entries?: Entry[];
  highlight?: { value: string; label: string };
  open?: string;
  did: string[];
};

export const CLIENTS: Record<"nl" | "en", { didLabel: string; openLabel: string; note: string; cards: ClientCard[] }> = {
  nl: {
    didLabel: "Wat we doen",
    openLabel: "Nog open",
    note: "Klanten worden alleen bij naam genoemd met hun toestemming. Cijfers afgerond, uit Google Search Console, 2026.",
    cards: [
      {
        platform: { id: "shopify", name: "Shopify" },
        sector: "2 winkels",
        status: "Lopend",
        title: "Gevonden worden voordat de klant binnenloopt",
        text: "Vindbaar in Google en in AI-assistenten, op de Shopify-winkel die er al stond. Een nieuw platform was niet nodig.",
        entries: [
          { flag: "🇳🇱", sector: "Oosterse tapijten · 3 galeries", text: "Lokaal gevonden worden, per vestiging." },
          { flag: "🇳🇱", sector: "Wijnwebwinkel · Amsterdam", text: "Landelijk gevonden worden met een kleine, zorgvuldig samengestelde collectie." },
        ],
        did: ["SEO", "GEO", "Lokale vindbaarheid"],
      },
      {
        platform: { id: "wordpress", name: "WordPress" },
        flag: "🇳🇱",
        sector: "Uitgeverij- en drukkerijgroep",
        status: "Lopend",
        title: "Posities fors omhoog. Daarna zochten we uit waar de klikken bleven.",
        text: "De posities in Google verbeterden flink, maar het aantal klikken groeide niet mee: AI-overzichten beantwoorden steeds meer zoekvragen zelf. We hebben de leadmeting op orde gebracht, zodat alleen echte aanvragen meetellen, en de site wordt opnieuw gebouwd.",
        highlight: { value: "2×+", label: "betere gemiddelde positie in Google dan een jaar eerder" },
        did: ["SEO", "GEO-diagnose", "Leadmeting", "Herbouw"],
      },
      {
        platform: { id: "nextjs", name: "Next.js" },
        flag: "🇳🇱",
        sector: "Financieel adviseur · 't Gooi",
        status: "Lopend",
        title: "Een nieuwe website in drie maanden. En die is van hen.",
        text: "Gebouwd om gevonden te worden in zoekmachines en AI-antwoorden, met lokale pagina's waar die nog ontbraken. Een adviseur keurt elke adviespagina in het CMS goed voordat die online gaat. Die stap zit in het systeem, niet in iemands geheugen. Code, content en hosting zijn bij oplevering van de klant.",
        did: ["SEO", "GEO", "Goedkeuring in het CMS", "Eigendom"],
      },
      {
        flag: "🇮🇳",
        sector: "EximPe · internationale betalingen",
        status: "2026",
        title: "Van blogverkeer naar tools die kopers gebruiken",
        text: "We hebben de site omgebouwd van vooral blogartikelen naar handelstools en betaalpagina's die naar elkaar verwijzen. Google toont die pagina's nu veel vaker, en na nieuwe titels en beschrijvingen werd er ongeveer twee keer zo vaak doorgeklikt. Betere posities hielpen daarbij mee.",
        highlight: { value: "~2×", label: "klikratio binnen één maand, na nieuwe titels en beschrijvingen" },
        open: "Organisch verkeer koppelen aan leads en omzet. Dat is de volgende stap.",
        did: ["SEO", "Contentstructuur", "Conversie"],
      },
    ],
  },
  en: {
    didLabel: "What we do",
    openLabel: "Still open",
    note: "Clients are named only with their consent. Figures rounded, from Google Search Console, 2026.",
    cards: [
      {
        platform: { id: "shopify", name: "Shopify" },
        sector: "2 stores",
        status: "Ongoing",
        title: "Found before the customer walks in",
        text: "Findable in Google and in AI assistants, built on the Shopify store they already had. No new platform needed.",
        entries: [
          { flag: "🇳🇱", sector: "Oriental rugs · 3 galleries", text: "Found locally, gallery by gallery." },
          { flag: "🇳🇱", sector: "Wine webshop · Amsterdam", text: "Found nationally with a small, curated range." },
        ],
        did: ["SEO", "GEO", "Local search"],
      },
      {
        platform: { id: "wordpress", name: "WordPress" },
        flag: "🇳🇱",
        sector: "Publishing and print group",
        status: "Ongoing",
        title: "Rankings up sharply. Then we found where the clicks went.",
        text: "Google rankings improved substantially, but clicks didn't follow: AI Overviews now answer more of these searches directly. We fixed lead tracking so real enquiries are counted, and the site is being rebuilt.",
        highlight: { value: "2×+", label: "better average Google position, year on year" },
        did: ["SEO", "GEO diagnosis", "Lead tracking", "Rebuild"],
      },
      {
        platform: { id: "nextjs", name: "Next.js" },
        flag: "🇳🇱",
        sector: "Financial adviser · 't Gooi",
        status: "Ongoing",
        title: "A new website in three months. And they own it.",
        text: "Built for search and AI answers, with local pages where there were none. An adviser signs off every advice page inside the CMS, so that step isn't left to memory. Code, content and hosting belong to the client at handover.",
        did: ["SEO", "GEO", "Sign-off in the CMS", "Ownership"],
      },
      {
        flag: "🇮🇳",
        sector: "EximPe · cross-border payments",
        status: "2026",
        title: "From blog traffic to tools buyers use",
        text: "We moved the site from blog posts to trade tools and payment pages that link to each other. Google now shows those pages far more often, and after title and snippet fixes, people clicked through about twice as often. Better rankings helped too.",
        highlight: { value: "~2×", label: "click-through rate in one month, after title and snippet fixes" },
        open: "Connecting organic traffic to leads and revenue. That's the next step.",
        did: ["SEO", "Content structure", "Conversion"],
      },
    ],
  },
};
