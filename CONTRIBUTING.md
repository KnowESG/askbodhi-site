# Contributing to AskBodhi Website

Business context, editorial rules, and workflow for maintaining [askbodhi.ai](https://askbodhi.ai).

## What This Website Is

AskBodhi is an AI-led growth consultancy helping B2B companies get found — by humans and by AI. The website serves as:

1. **Credibility signal** — proves expertise in SEO, GEO, and AI-led growth to prospective clients
2. **Lead magnet** — the `/assessment` page (AI Readiness Assessment) captures prospect data and demonstrates value before a sales conversation
3. **Positioning vehicle** — communicates the "Luminous Clarity" brand identity

This is NOT a content-heavy blog site. It’s a lean, high-quality marketing site that should feel like a premium consultancy, not an agency.

## Target Clients

**Geography:** Netherlands-based, serving globally. English primary, Dutch pages planned.
**Company size:** Small to mid-market (20–500 employees). Companies that need digital growth but lack in-house SEO/AI capability.
**Sectors:** B2B SaaS, fintech, e-commerce, publishing/media.

## Positioning Rules

Lead with what’s proven: **SEO, GEO, organic digital growth, traffic diagnostics.** AI transformation is the aspirational horizon — presented in a "where this is heading" section, not the hero.

**Hero message:** "Your company deserves to be found — by humans and AI."

**Service hierarchy:** (1) SEO & GEO, (2) Traffic Architecture Diagnostics, (3) Custom AI Engines, (4) AI-First Transformation (horizon, not hero).

## Case Study Rules

| Client | Public name | Flag | Sector |
|--------|------------|------|--------|
| Dutch publishing client | "Leading Dutch Publishing Group" (never name the client) | 🇳🇱 | Publishing |
| EximPe | EximPe (can name) | 🇮🇳 | Fintech / Cross-border payments |
| KnowESG | KnowESG (can name) | 🇳🇱 | ESG Intelligence / SaaS |

Always include country flag and sector label on case study cards.

## Homepage Architecture

The homepage is built from 8 composable sections, each a standalone component in `src/components/home/`. All exports via `home/index.ts` barrel file. Page orchestrator: `src/app/page.tsx`.

| # | Section | Component | Purpose |
|---|---------|-----------|--------|
| 1 | Hero | (inline in page.tsx) | Pain-point headline + proof bar + HeroVisual |
| 2 | What We Do | ServicesSection | Pain-point service cards, Core Expertise + horizon labels |
| 3 | Proven Results | ResultsSection | Case study cards + MirrorCard behavioral checklist |
| 4 | How We Work | ApproachSection | 3-phase timeline with timeframe tags + de-risk block |
| 5 | This Is For You If | WhoSection | 2-column behavior checklist, no sector names |
| 6 | Where This Is Heading | VisionSection | AI progression tags (active/next/future) |
| 7 | Assessment CTA | AssessmentCTA | 12-question hook, value framing |
| 8 | FAQ | FAQ + FaqJsonLd | Accordion + FAQPage JSON-LD (GEO schema) |

Supporting components: `ToolBar.tsx` (enterprise tool trust bar), `MirrorCard.tsx` ("Sound familiar?" checklist).

## CSS Architecture

CSS is split into two files (both in `src/app/`, imported by `layout.tsx`):

- **`globals.css`** — Tailwind import, CSS custom properties (Luminous Clarity tokens), base styles, header nav
- **`components.css`** — Component styles: service cards, case cards, mirror card, tool bar, vision tags, FAQ accordion, assessment overrides

This split exists because the GitHub MCP `push_files` truncates files >8KB. Keep each CSS file under 8KB.

## Brand: Luminous Clarity

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-teal` | `#0F766E` | Primary, CTAs, links |
| `--color-teal-bright` | `#14B8A6` | Hover states, gradients |
| `--color-teal-pale` | `#F0FDFA` | Backgrounds, highlights |
| `--color-ember` | `#EA580C` | Secondary accent (sparingly) |
| `--color-bg` | `#FAFAF9` | Page background (warm stone, NOT pure white) |
| `--color-charcoal` | `#1C1917` | Headings |
| `--color-stone-600` | `#57534E` | Body text |

**Typography:** Lora (headings), Instrument Sans (body), Geist Mono (data).
**Tone:** Light-first, warm whites, generous whitespace. Premium consultancy, not agency hustle.

## Content Tone

Write like a smart colleague, not a PowerPoint deck. Data-first, direct, conversational. Never corporate jargon. Always cite data with sources and dates. Deliverables should be developer-ready: file paths, code snippets, exact copy. Quick wins separated from strategic work.

## Assessment Page

The `/assessment` is an 11-step interactive AI Readiness Assessment (10 focused component files under `src/components/assessment/`). Prospect answers 12 questions (~5 min), scores across 5 dimensions (/100). Submissions POST to `/api/assessment` with dedup. This is the primary conversion path — all homepage CTAs route here.

## SEO & GEO Configuration

**Domain:** `askbodhi.ai` (all canonical URLs, OG tags, sitemap, robots.txt).

**Structured data:** Organization, WebSite, ProfessionalService, FAQPage — never Person, founder or employee schema (6 Q&A pairs from `src/data/faq-data.ts` — shared between the FAQ accordion and FaqJsonLd server component).

**GEO:** robots.txt allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Organization schema with `knowsAbout` array. ProfessionalService schema with service catalog.

**Hreflang:** `en` + `x-default` for Dutch market. No `meta keywords` (deprecated).

## Workflow: Making Changes

The full process — branching, `npm run verify`, PR review, merge, rollback — is in **[docs/WEBSITE-CHANGES.md](docs/WEBSITE-CHANGES.md)**. Short version:

```
git checkout -b copy/my-change     # never work on main
npm ci && npm run dev              # edit, check /nl and /en
npm run verify                     # type-check + NL/EN keys + build — before every push
git push -u origin copy/my-change  # open a PR; merge when CI is green and the preview is Ready
```

Do not push code with the GitHub MCP `push_files` tool — it truncates files over ~8KB, can't delete files and can't push `package-lock.json`. Use a real clone and `git push`.

### Repos
- **Canonical:** `KnowESG/askbodhi-site` — connected to Vercel, production source
- **Stale copy:** `aapka4u/askbodhi-site` — should be archived/deleted

## Future Pages (Roadmap)

**Phase 1:** `/generative-engine-optimization` (GEO guide, 1500/mo KD 2), `/about` (company, E-E-A-T), `/services/seo-geo`, `/services/ai-engines`
**Phase 2:** `/nl/seo-advies` (Dutch, 1100/mo KD 5), `/case-studies`
**Phase 3:** `/insights/` (blog), `/ai-readiness-assessment` (SEO landing for assessment)

## Pending Cleanup

- [ ] Delete `src/data/assessment_steps.ts` (dead file, snake_case duplicate — active file is `assessment-steps.ts`)
- [ ] Delete `next-env.d.ts` from git tracking
- [ ] Wire API routes to email service (Resend recommended for Vercel)
- [ ] Add brand assets to `/public` (favicon, OG image 1200x630, logo/icon.svg)
- [ ] Archive `aapka4u/askbodhi-site` duplicate repo
- [ ] Register `askbodhi.ai` in Google Search Console
- [ ] Set up Google Business Profile (service-area business, Netherlands)
