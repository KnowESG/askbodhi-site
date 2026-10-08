"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoMark from "./LogoMark";

const ANCHORS = [
  { href: "/#leaks", key: "leaks" },
  { href: "/#approach", key: "approach" },
  { href: "/#engine", key: "engine" },
  { href: "/#clients", key: "clients" },
  { href: "/#faq", key: "faq" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <header className="ab-header">
      <div className="ab-wrap ab-header__bar">
        <Link href="/" className="ab-logo" aria-label={t("home")}>
          <LogoMark />
          <span className="ab-logo__word">
            AskBodhi<span>.ai</span>
          </span>
        </Link>

        <nav className="ab-nav" aria-label="Main">
          {ANCHORS.map((a) => (
            <Link key={a.key} href={a.href}>
              {t(a.key)}
            </Link>
          ))}
        </nav>

        <div className="ab-header__right">
          <LanguageSwitcher />
          <Link href="/assessment" className="ab-header__cta">
            {t("cta")}
          </Link>
          <button
            type="button"
            className="ab-burger"
            aria-expanded={open}
            aria-controls="ab-mobile-menu"
            aria-label={t("menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="ab-mobile-menu" className="ab-mobile">
          {ANCHORS.map((a) => (
            <Link key={a.key} href={a.href} onClick={() => setOpen(false)}>
              {t(a.key)}
            </Link>
          ))}
          <Link href="/assessment" className="ab-header__cta" onClick={() => setOpen(false)}>
            {t("cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
