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
| `/` | Homepage — hero, case studies, services, vision |
| `/assessment` | AI Readiness Assessment — 11-step interactive lead magnet |
| `/contact` | Contact form — free traffic diagnostic request |
| `/api/assessment` | POST — receives assessment submissions (logs to Vercel) |
| `/api/contact` | POST — receives contact form submissions (logs to Vercel) |
| `/robots.txt` | Crawler rules (allows GPTBot, ClaudeBot, PerplexityBot) |
| `/sitemap.xml` | Dynamic sitemap |

## SEO & GEO

- **Domain:** `askbodhi.ai` — all canonical URLs, OG tags, sitemap, robots reference this domain
- **Hreflang:** `en` + `x-default` configured for Dutch market targeting
- **Structured data:** Organization (with Person schema for founder), WebSite, ProfessionalService
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
    page.tsx                # Homepage
    globals.css             # Luminous Clarity design tokens + nav classes
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
    Header.tsx              # Site header/navigation (CSS hover classes)
    Footer.tsx              # Site footer
    JsonLd.tsx              # Organization, WebSite, ProfessionalService schemas
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
