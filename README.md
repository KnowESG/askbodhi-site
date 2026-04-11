# AskBodhi

AI-Led Growth for Forward-Thinking Companies. Next.js website with the Luminous Clarity brand system.

**Live:** [askbodhi.ai](https://askbodhi.ai)

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, React 19)
- **Styling:** Tailwind CSS 4 + CSS custom properties (Luminous Clarity tokens)
- **Animation:** Framer Motion
- **Hosting:** Vercel (auto-deploys from `main`, KnowESG team)
- **Domain:** askbodhi.ai (Cloudflare DNS, DNS-only mode)
- **Fonts:** Lora (display), Instrument Sans (body), Geist Mono (data)

## Pages & Routes

| Route | Purpose |
|-------|--------|
| `/` | Homepage — 8-section optimized layout (hero, services, results, approach, who, vision, assessment CTA, FAQ) |
| `/assessment` | AI Readiness Assessment — 11-step interactive lead magnet |
| `/contact` | Contact form — free traffic diagnostic request |
| `/api/assessment` | POST — receives assessment submissions (logs to Vercel) |
| `/api/contact` | POST — receives contact form submissions (logs to Vercel) |
| `/robots.txt` | Crawler rules (allows GPTBot, ClaudeBot, PerplexityBot) |
| `/sitemap.xml` | Dynamic sitemap |

## Homepage Sections (in order)

1. **Hero** — Pain-point headline, proof bar with reframed stats, HeroVisual SVG
2. **What We Do** (ServicesSection) — Pain-point service cards with Core Expertise + horizon labels
3. **Proven Results** (ResultsSection) — Cross-sector case studies + MirrorCard behavioral checklist
4. **How We Work** (ApproachSection) — 3-phase timeline with timeframe tags and de-risk block
5. **This Is For You If** (WhoSection) — Behavior/situation checklist, 2-column grid, zero sector names
6. **Where This Is Heading** (VisionSection) — AI progression tags (active/next/future)
7. **AI Readiness Assessment** (AssessmentCTA) — 12-question hook, value framing
8. **FAQ** — 6-question accordion with FAQPage JSON-LD schema (GEO)

## SEO & GEO

- **Domain:** `askbodhi.ai` — all canonical URLs, OG tags, sitemap, robots reference this domain
- **Hreflang:** `en` + `x-default` configured for Dutch market targeting
- **Structured data:** Organization, WebSite, ProfessionalService, Person (founder), FAQPage
- **AI crawlers:** Explicitly allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- **OpenGraph:** Page-specific OG tags on all routes

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # eslint
npx tsc --noEmit  # type-check without emitting
```

## Deployment

Pushes to `main` auto-deploy to Vercel via the KnowESG team project (`prj_zAhLUV1bxka4lXI7a2zDDCZl1D6m`).

**Before pushing:** Always run `npx tsc --noEmit` and `npm run build` to catch TypeScript errors locally.

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout, fonts, metadata, hreflang, JSON-LD
    page.tsx                # Homepage (imports home/ section components)
    globals.css             # Luminous Clarity design tokens + nav styles
    components.css          # Component styles (cards, tags, FAQ, assessment)
    robots.ts               # Crawler rules (all AI bots allowed)
    sitemap.ts              # Dynamic sitemap (askbodhi.ai)
    assessment/
      layout.tsx            # Assessment SEO metadata + page-specific OG
      page.tsx              # Assessment orchestrator (imports step components)
    contact/
      layout.tsx            # Contact SEO metadata + page-specific OG
      page.tsx              # Contact form (wired to /api/contact)
    api/
      assessment/route.ts   # POST handler for assessment submissions
      contact/route.ts      # POST handler for contact form
  components/
    Header.tsx              # Site header/navigation
    Footer.tsx              # Site footer
    JsonLd.tsx              # Organization, WebSite, ProfessionalService, Person schemas
    FAQ.tsx                 # Accordion FAQ (client component, imports faq-data)
    FaqJsonLd.tsx           # FAQPage JSON-LD schema (server component)
    MirrorCard.tsx          # "Sound familiar?" behavioral checklist
    ToolBar.tsx             # Enterprise tool trust bar (logo chips)
    home/
      index.ts              # Barrel export for all home sections
      ServicesSection.tsx   # Pain-point service cards
      ResultsSection.tsx    # Case studies + MirrorCard
      ApproachSection.tsx   # 3-phase timeline
      WhoSection.tsx        # Behavior/situation checklist
      VisionSection.tsx     # AI progression tags
      AssessmentCTA.tsx     # Assessment lead-in CTA
      HeroVisual.tsx        # Abstract data visualization SVG
    assessment/
      scoring.ts            # Score computation + dimension calculation
      StepProps.ts          # TypeScript interfaces for step components
      AssessmentUI.tsx      # Shared UI: LogoSvg, ScanLine, MetricCard, CompetitorChip
      ScoreDisplay.tsx      # ScoreRing (SVG) + DimBar (animated bar)
      IntroStep.tsx         # Assessment intro screen
      ScanStep.tsx          # Domain registration step (honest messaging)
      CompetitorsStep.tsx   # User-provided competitor input (textarea)
      ResultStep.tsx        # Score display + "What happens next" section
      FormSteps.tsx         # Field inputs, choice selectors, text areas
      Autocomplete.tsx      # Industry/country autocomplete input
  data/
    faq-data.ts             # FAQ Q&A pairs (shared between FAQ.tsx and FaqJsonLd.tsx)
    assessment-steps.ts     # Assessment question definitions
  types/
    assessment.ts           # TypeScript interfaces for assessment flow
```

## Brand: Luminous Clarity

- **Primary:** Teal `#0F766E`
- **Accent:** Ember `#EA580C`
- **Background:** Warm stone `#FAFAF9`
- **Display font:** Lora (serif)
- **Body font:** Instrument Sans

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for business context, target clients, positioning rules, case study naming conventions, brand guidelines, content tone, and the Cowork workflow for making changes.
