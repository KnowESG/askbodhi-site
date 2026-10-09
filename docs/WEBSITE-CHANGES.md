# Changing askbodhi.ai — the runbook

How a change gets from an idea to the live site without a five-hour afternoon. Written 9 October 2026, after the v7 release took about five hours from first push to production: five of six pushes failed to build. Vercel wasn't the problem (a build takes under a minute). Each push held half a change.

**The rule, in one line:** one complete change per branch, `npm run verify` passes before you push, and nothing reaches `main` except through a merged PR with a green check.

---

## 1. How the pipeline works

```
 your branch ──push──▶ GitHub ──webhook──▶ Vercel preview build (~1 min)
      │                  │                        │
      │                  └──▶ GitHub Actions CI ──┤  both must be green
      │                                           ▼
      └──── PR ──▶ review preview URL ──▶ squash-merge to main
                                                   │
                                                   ▼
                                   Vercel production build (~1 min)
                                                   │
                                                   ▼
                                       askbodhi.ai updated automatically
```

| Piece | Where | Notes |
|---|---|---|
| Source | `github.com/KnowESG/askbodhi-site` (**public repo**) | `main` is production. Everything in this repo is world-readable — see §7. |
| Hosting | Vercel, team **KnowESG**, project `askbodhi-site` | Git-linked to the repo above. Production branch: `main`. |
| Production domain | `askbodhi.ai` | DNS at Cloudflare, DNS-only (no proxy). |
| Previews | `askbodhi-site-git-<branch>-know-esg.vercel.app` | One per branch, rebuilt on every push. Sends `X-Robots-Tag: noindex` (set in `next.config.ts`), so previews never compete with production in search. Behind Vercel Authentication — you need to be logged in to the KnowESG team to open one. |
| CI | `.github/workflows/ci.yml` | Type-check, NL/EN key check, production build. Lint runs in report-only mode. |
| Stack | Next.js 16 (App Router, Turbopack), React 19, next-intl, Tailwind 4 | Locales `nl` (default) and `en`, always prefixed: `/nl/…`, `/en/…`. |

---

## 2. Making a change — the golden path

### Before you start

```bash
git clone https://github.com/KnowESG/askbodhi-site.git
cd askbodhi-site
npm ci                      # installs exactly what package-lock.json says
git checkout -b <type>/<short-name>   # e.g. copy/hero-v8, fix/colofon-links, feat/about-page
```

Branch names: `copy/` for text-only, `fix/` for bugs, `feat/` for new pages or sections, `chore/` for tooling. Never commit to `main` directly.

### While you work

```bash
npm run dev                 # http://localhost:3000 → redirects to /nl or /en
```

Check both locales for every page you touch: `/nl/<page>` and `/en/<page>`.

### Before you push — not optional

```bash
npm run verify
```

That runs, in order:

1. `tsc --noEmit` — type errors, missing imports, wrong export names
2. `node scripts/check-messages.mjs` — every key in `messages/nl.json` exists in `messages/en.json` and the reverse
3. `next build` — the same build Vercel runs, including prerendering every page in both locales

About 20 seconds locally. If it fails here, it will fail on Vercel too. Each failure on 8 October would have been caught at this step:

| What failed on Vercel | Which `verify` step catches it |
|---|---|
| `Module not found: '@/content/legal'` — a file imported before it was committed | 1 (and 3) |
| `Export Working doesn't exist` — `HomeSections.tsx` pushed empty | 1 |
| `MISSING_MESSAGE: meta.contact (en)` | 2 |
| `a.links.map is not a function` while prerendering `/nl/colofon` | 3 |

### Push and open a PR

```bash
git add -A
git status                  # read it: new files you created must be in the list
git commit -m "<what changed and why>"
git push -u origin <branch>
```

Then open a PR against `main`. In the PR description: what changed, which pages, and the preview URL.

It's fine to push several commits to a branch. Each one should still pass `npm run verify`. "Part 3 of 6" commits that only build once all six land are what made 8 October slow.

### Review

The PR is ready to merge when **all four** are true:

- [ ] CI check is green on the PR
- [ ] Vercel preview deployment is **Ready** (the Vercel bot comments on the PR)
- [ ] Someone opened the preview and checked the changed pages in **both** `/nl` and `/en`, on mobile width too
- [ ] For copy changes: the Dutch has had a native-speaker read

### Merge and confirm

1. **Squash and merge** the PR. One PR = one commit on `main` = one production deploy.
2. Vercel builds production automatically (≈1 minute).
3. Smoke-check the live site:

```bash
curl -sI https://askbodhi.ai/nl | head -1          # expect HTTP/2 200
curl -sI https://askbodhi.ai/en | head -1          # expect HTTP/2 200
curl -s  https://askbodhi.ai/sitemap.xml | head -5  # sitemap still renders
curl -sI https://askbodhi.ai/nl | grep -i x-robots  # expect NOTHING on production
```

Then open the pages you changed on askbodhi.ai itself.

---

## 3. When something goes wrong

### The preview build fails

Open the failed deployment in Vercel (or the red CI check) and read the **last 30 lines** of the log — the error is almost always there. Fix it on the same branch, run `npm run verify`, push again. Don't merge around a red check.

### Production is broken after a merge

Roll back first, debug second.

1. Vercel → project `askbodhi-site` → **Deployments** → filter Production → find the last good deployment → **⋯ → Instant Rollback**. askbodhi.ai serves the old build within seconds.
   CLI equivalent: `vercel rollback <deployment-url>` (Pro plan, which the KnowESG team is on).
2. Fix the problem in a new PR (or revert the bad PR in GitHub with **Revert**) and merge it.
3. Check that the fix actually went live: the newest production deployment in Vercel should be the one serving askbodhi.ai. If the project still shows a "rolled back" state and the new build isn't live, open the new deployment and **Promote to Production**.

### The domain shows an error but the deployment is Ready

Check Vercel → project → **Settings → Domains**: `askbodhi.ai` must show *Valid Configuration*. If not, the problem is DNS at Cloudflare, not the code.

---

## 4. Where things live in the code

| You want to change… | Edit |
|---|---|
| Any visible text on the homepage, nav, footer, meta titles | `messages/nl.json` **and** `messages/en.json` (same keys in both) |
| Homepage section layout | `src/components/home/HomeSections.tsx`, styles alongside |
| Clients showcase | `src/content/clients.ts` |
| Privacy, voorwaarden, colofon | `src/content/legal.ts` (one company-facts source), rendered by `src/components/LegalPage.tsx` |
| Canonical, hreflang, per-page meta | `src/lib/seo.ts` |
| Structured data (JSON-LD) | `src/components/JsonLd.tsx` — no Person, founder or employee schema, ever |
| Sitemap / robots / llms.txt | `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt` |
| OG images | `src/app/og-nl.png/route.tsx`, `src/app/og-en.png/route.tsx`, `src/lib/og.tsx` |
| Locale routing and geo-redirect | `src/i18n/routing.ts`, `middleware.ts` |
| Security and noindex headers | `next.config.ts` |
| Brand tokens (Luminous Clarity) | `src/app/globals.css` |

**Adding a new page:** create `src/app/[locale]/<slug>/page.tsx`, add its text to both message files, add metadata via `src/lib/seo.ts`, add the URL to `src/app/sitemap.ts`. Run `npm run verify` and check the build output lists both `/nl/<slug>` and `/en/<slug>`.

---

## 5. Working with an AI assistant on this repo

The same rules apply. Two extra ones, because breaking them caused most of the past trouble:

- **Use a real git clone and `git push`, not file-by-file API pushes.** GitHub MCP `push_files` silently truncates files over ~8KB, can't delete files, and can't push `package-lock.json`. That's how an empty `HomeSections.tsx` reached a build. If the assistant can't `git push` (no GitHub App access to the KnowESG org), it should hand over a branch or patch instead of falling back to `push_files`.
- **The assistant runs `npm run verify` and reports the result before every push.** A push without a passing verify is a bug in the process, not a shortcut.

`CLAUDE.md` at the repo root carries these rules so every session picks them up automatically.

---

## 6. Dependencies

- `package-lock.json` is committed and is the source of truth. Install with `npm ci`, not `npm install`, unless you're deliberately changing dependencies.
- To add or upgrade a package: `npm install <pkg>@<version>`, commit both `package.json` and `package-lock.json` in the same PR, run `npm run verify`.
- Node version: Vercel builds on Node 24.x. CI uses 24 too.

---

## 7. This repo is public

Anything committed here — code, comments, docs, commit messages, PR descriptions — is readable by anyone, and stays in git history even after it's deleted.

- No personal names of the team behind AskBodhi, no Person/founder schema, no bios.
- No client names that have not been cleared for public use, no pricing, no internal metrics.
- No secrets. Environment variables go in Vercel → Settings → Environment Variables; `.env*` is git-ignored. `.env.example` lists names only.

If something sensitive does get committed, tell the repo owner immediately. Removing it needs a history rewrite, not just a new commit.

---

## 8. Quick reference

```bash
npm ci                         # install
npm run dev                    # local dev server
npm run verify                 # type-check + NL/EN keys + build — run before every push
npm run lint                   # report-only for now (6 known errors)
git checkout -b copy/my-change # never work on main
```

Merge checklist: **CI green · preview Ready · both locales checked · Dutch read by a native speaker · squash-merge · smoke-check askbodhi.ai.**
