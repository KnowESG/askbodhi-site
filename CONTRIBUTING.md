# Contributing to AskBodhi Website

Business context, editorial rules, and workflow for maintaining askbodhi.com.

## What This Website Is

AskBodhi is an AI-led growth consultancy helping B2B companies get found — by humans and by AI. The website serves as:

1. **Credibility signal** — proves expertise in SEO, GEO, and AI-led growth to prospective clients
2. **Lead magnet** — the `/assessment` page (AI Readiness Assessment) captures prospect data and demonstrates value before a sales conversation
3. **Positioning vehicle** — communicates the "Luminous Clarity" brand identity

This is NOT a content-heavy blog site. It's a lean, high-quality marketing site that should feel like a premium consultancy, not an agency.

## Target Clients

| Type | Examples |
|------|----------|
| B2B companies | SaaS platforms, corporate groups |
| Fintech | Cross-border payments, compliance tech |
| E-commerce | Multi-brand retail, D2C |
| Publishing / media | Digital transformation plays |

**Geography:** Netherlands-based, serving globally. Dual-language ambition (English primary, Dutch secondary — Dutch pages are planned but not yet built).

**Company size:** Small to mid-market. Typically 20-500 employees. Companies that know they need digital growth but don't have in-house SEO/AI capability.

## Positioning Rules

The website leads with what's proven: **SEO, GEO, organic digital growth, traffic diagnostics.** These are the services that attract clients and that the case studies validate.

AI transformation is the aspirational horizon — presented in a "where this is heading" section, not the hero. The narrative arc: prospect comes in for "help being found" and discovers AskBodhi can transform their whole operation.

**Hero message:** "Your company deserves to be found — by humans and AI."

**Service hierarchy (in order of prominence):**
1. SEO & Generative Engine Optimization (lead with this)
2. Traffic Architecture Diagnostics
3. Custom AI Engines
4. AI-First Transformation (horizon, not hero)

## Case Study Rules

Three case studies are used on the homepage. Naming rules are strict:

| Client | Public name | Flag | Sector |
|--------|------------|------|--------|
| Boekengilde / Gildeprint | "Leading Dutch Publishing Group" (NEVER name) | NL | Publishing |
| EximPe | EximPe (can name) | IN | Fintech / Cross-border payments |
| KnowESG | KnowESG (can name) | NL | ESG Intelligence / SaaS |

**Always include country flag and sector label on case study cards.**

## Brand: Luminous Clarity

Every page, component, and visual must follow the Luminous Clarity system.

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-teal` | `#0F766E` | Primary brand color, CTAs, links, accents |
| `--color-teal-bright` | `#14B8A6` | Hover states, gradients |
| `--color-teal-pale` | `#F0FDFA` | Backgrounds, selection highlight |
| `--color-ember` | `#EA580C` | Secondary accent (sparingly — alerts, highlights) |
| `--color-bg` | `#FAFAF9` | Page background (warm stone, NOT pure white) |
| `--color-charcoal` | `#1C1917` | Headings, strong text |
| `--color-stone-600` | `#57534E` | Body text |

### Typography
- **Headings:** Lora (serif) — `var(--font-display)`
- **Body:** Instrument Sans — `var(--font-body)`
- **Data/code:** Geist Mono — `var(--font-mono)`

### Tone
- Light-first, warm whites, generous whitespace
- Modern 2026 aesthetic — no dark mode, no heavy shadows
- Premium consultancy feel, not agency hustle

## Content Tone

Write like a smart colleague, not a PowerPoint deck.
- Data-first, direct, conversational
- Never corporate jargon ("synergize", "leverage", "paradigm")
- Always cite data with sources and dates
- Deliverables should be developer-ready: file paths, code snippets, exact copy
- Quick wins separated from strategic work

## Assessment Page (Lead Magnet)

The `/assessment` is an 11-step interactive AI Readiness Assessment:
- Prospect answers 12 multiple-choice questions (~5 min)
- Key input: website URL (triggers automated analysis)
- Scores across 5 dimensions, each out of 20 (total /100)
- Score bands: AI-Ready (75-100) / Emerging (50-74) / Catching Up (25-49) / Starting Line (0-24)
- Leads to a report delivered within 5 business days

**Important:** This is the primary conversion path. All homepage CTAs route to `/assessment`, not `/contact`.

## Scope Boundaries

**In scope for this website:**
- SEO/GEO content and technical optimization
- Assessment tool maintenance and improvement
- New service pages and insights articles
- Dutch-language pages (planned)
- Schema markup and structured data

**Out of scope:**
- PPC/advertising management
- Social media content
- Major UX redesign (iterate within Luminous Clarity)
- Third-party CMS integration (the site is static Next.js, keep it that way)

## Workflow: Making Changes via Cowork

The site is managed entirely through Cowork sessions. No local dev environment needed (though one works fine too).

### Standard workflow
```
1. Clone repo in sandbox:  git clone https://github.com/KnowESG/askbodhi-site.git
2. Install:                cd askbodhi-site && npm install
3. Make changes:           Edit files in sandbox
4. Validate TypeScript:    npx tsc --noEmit
5. Validate build:         npx next build
6. Push via GitHub MCP:    push_files to KnowESG/askbodhi-site, branch: main
7. Verify deploy:          list_deployments via Vercel MCP → wait for READY
```

### Known MCP limitations
- **Large files (>100KB) get truncated** during MCP push. The `package-lock.json` (229KB) cannot be pushed via MCP — it needs a local `git push`.
- **File deletion** is not available via GitHub MCP. To remove tracked files, use the GitHub web UI.
- **Sandbox resets between sessions.** Each Cowork session needs to re-clone (~20s) and re-install (~19s).

### Repos
- **Canonical:** `KnowESG/askbodhi-site` — this is connected to Vercel
- **Stale copy:** `aapka4u/askbodhi-site` — personal account, should be deleted

## Future Pages (Planned)

These are stubbed in `sitemap.ts` as comments:
- `/services/seo-geo` — SEO & GEO service page
- `/services/ai-engines` — Custom AI engines service page
- `/nl/generative-engine-optimization` — Dutch GEO page
- `/nl/ai-advies` — Dutch AI consulting page
- `/insights/what-is-geo` — Educational content
