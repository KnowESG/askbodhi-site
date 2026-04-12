"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useCallback } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = useCallback((newLocale: string) => {
    // Persist locale preference to cookie (7-day expiry)
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `NEXT_LOCALE=${newLocale}; ${expires}; path=/; SameSite=Lax`;

    // Navigate to the same pathname with new locale
    router.push(pathname, { locale: newLocale });
  }, [pathname, router]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLocaleChange("nl")}
        className={`text-xs font-medium px-2.5 py-1.5 rounded transition-colors ${
          locale === "nl"
            ? "bg-teal-100 text-teal-700"
            : "text-stone-600 hover:text-stone-800"
        }`}
        style={
          locale === "nl"
            ? {
                backgroundColor: "var(--color-teal-pale)",
                color: "var(--color-teal)",
              }
            : {
                color: "var(--color-stone-600)",
              }
        }
        title="Switch to Dutch"
      >
        NL
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`text-xs font-medium px-2.5 py-1.5 rounded transition-colors ${
          locale === "en"
            ? "bg-teal-100 text-teal-700"
            : "text-stone-600 hover:text-stone-800"
        }`}
        style={
          locale === "en"
            ? {
                backgroundColor: "var(--color-teal-pale)",
                color: "var(--color-teal)",
              }
            : {
                color: "var(--color-stone-600)",
              }
        }
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
