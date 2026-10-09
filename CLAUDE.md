# CLAUDE.md — askbodhi-site

Rules for any AI session working on this repo. The full process is in [docs/WEBSITE-CHANGES.md](docs/WEBSITE-CHANGES.md).

## Non-negotiable

1. **Never commit or push to `main`.** Work on a branch (`copy/`, `fix/`, `feat/`, `chore/`), open a PR, merge only when CI is green and the Vercel preview is Ready.
2. **Run `npm run verify` before every push** and report the result. It type-checks, checks that `messages/nl.json` and `messages/en.json` have identical keys, and runs the production build. If it fails, fix it before pushing.
3. **Every commit must build on its own.** No "part 3 of 6" commits that depend on files not yet committed. Run `git status` before committing and confirm every new file is staged.
4. **Use a real clone and `git push`.** Do not use GitHub MCP `push_files` / `create_or_update_file` for code changes: it truncates files over ~8KB, can't delete files, and can't push `package-lock.json`. If you can't push, hand over the branch or a patch and say so.
5. **This repo is public.** No personal names of the people behind AskBodhi, no Person/founder/employee schema, no uncleared client names, no pricing, no secrets — in code, comments, docs, commit messages or PR text.

## Working conventions

- Install with `npm ci`. Commit `package.json` and `package-lock.json` together when dependencies change.
- Every text change goes into **both** `messages/nl.json` and `messages/en.json`. Dutch is the default locale.
- Check changed pages under both `/nl/…` and `/en/…`.
- Preview deployments send `X-Robots-Tag: noindex` (`next.config.ts`); production must not. Don't change that logic.
- Brand: Luminous Clarity tokens live in `src/app/globals.css` — use the tokens, not new hex values.
- After a merge, confirm the production deployment is READY in Vercel (team KnowESG, project `askbodhi-site`) and smoke-check `https://askbodhi.ai/nl` and `/en`.
