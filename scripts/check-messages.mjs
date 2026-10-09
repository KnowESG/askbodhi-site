// Fails when messages/nl.json and messages/en.json do not have the same keys.
// A key that exists in one locale only builds fine locally in that locale and
// then breaks the production build with MISSING_MESSAGE (see 8 Oct 2026).
import { readFileSync } from "node:fs";

const load = (locale) => JSON.parse(readFileSync(new URL(`../messages/${locale}.json`, import.meta.url), "utf8"));

const flatten = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" && !Array.isArray(value) ? flatten(value, path) : [path];
  });

const nl = new Set(flatten(load("nl")));
const en = new Set(flatten(load("en")));
const onlyNl = [...nl].filter((k) => !en.has(k));
const onlyEn = [...en].filter((k) => !nl.has(k));

if (onlyNl.length || onlyEn.length) {
  if (onlyNl.length) console.error(`Missing in en.json (${onlyNl.length}):\n  ${onlyNl.join("\n  ")}`);
  if (onlyEn.length) console.error(`Missing in nl.json (${onlyEn.length}):\n  ${onlyEn.join("\n  ")}`);
  process.exit(1);
}
console.log(`messages OK: ${nl.size} keys in both nl.json and en.json`);
