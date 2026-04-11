# AskBodhi

AI-Led Growth for Forward-Thinking Companies. Next.js website with the Luminous Clarity brand system.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4 + CSS custom properties (Luminous Clarity tokens)
- **Animation:** Framer Motion
- **Hosting:** Vercel (auto-deploys from `main`)
- **Fonts:** Lora (display), Instrument Sans (body), Geist Mono (data)

## Pages

| Route | Purpose |
|-------|--------|
| `/` | Homepage — hero, case studies, services, vision |
| `/assessment` | AI Readiness Assessment — 11-step interactive lead magnet |
| `/contact` | Contact form |

## SEO & GEO

- `robots.ts` — allows all crawlers including GPTBot, ClaudeBot, PerplexityBot
- `sitemap.ts` — dynamic sitemap generation
- `JsonLd.tsx` — Organization, WebSite, and Service structured data
- Full metadata with OpenGraph and Twitter cards

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # eslint
npx tsc --noEmit  # type-check without emitting
```

## Deployment

Pushes to `main` auto-deploy to Vercel via the KnowESG team project.

**Before pushing:** Always run `npx tsc --noEmit` and `npm run build` to catch TypeScript errors locally.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata, JSON-LD
    page.tsx            # Homepage
    globals.css         # Luminous Clarity design tokens
    robots.ts           # Crawler rules
    sitemap.ts          # Dynamic sitemap
    assessment/
      page.tsx          # AI Readiness Assessment
    contact/
      page.tsx          # Contact page
  components/
    Header.tsx          # Site header/navigation
    Footer.tsx          # Site footer
    JsonLd.tsx          # Structured data components
    assessment/
      Autocomplete.tsx  # Industry autocomplete input
  data/
    assessment_steps.ts # Assessment question definitions
  types/
    assessment.ts       # TypeScript interfaces for assessment
```

## Brand: Luminous Clarity

- **Primary:** Teal `#0F766E`
- **Accent:** Ember `#EA580C`
- **Background:** Warm stone `#FAFAF9`
- **Display font:** Lora (serif)
- **Body font:** Instrument Sans
