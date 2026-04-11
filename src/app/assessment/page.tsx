'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { STEPS, INDUSTRY_SUGGESTIONS, COUNTRY_SUGGESTIONS } from '@/data/assessment-steps';
import type { Answers, ScanResult, CompetitorResult, DimensionScore } from '@/types/assessment';
import Autocomplete from '@/components/assessment/Autocomplete';

/* ======================================================
   AskBodhi AI Readiness Assessment v4 — Live Intelligence
   ====================================================== */

// Map step numbers to named answer keys (scoring logic uses named keys)
const STEP_KEY_MAP: Record<string, string> = {
  '03': 'companySize',
  '04': 'discovery',
  '05': 'revenueTracking',
  '06': 'aiCited',
  '07': 'schemaMarkup',
  '08': 'aiMaturity',
  '09': 'challenge',
  '10': 'wish',
  '11': 'foundAskBodhi',
};

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const } },
};

// ─── Logo SVG ────────────────────────────────────────────
function LogoSvg({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size} style={{ color: 'var(--color-teal, #0F766E)' }}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="1" r="1" />
      <circle cx="12" cy="23" r="1" />
      <circle cx="1" cy="12" r="1" />
      <circle cx="23" cy="12" r="1" />
      <line x1="12" y1="4" x2="12" y2="10" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="20" strokeLinecap="round" />
    </svg>
  );
}

// ─── Scan Terminal Line ──────────────────────────────────
function ScanLine({ text, delay, done }: { text: string; delay: number; done?: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return show ? (
    <div className="text-xs text-slate-500 font-mono mb-1">
      <span className="inline-block w-1.5 h-1.5 bg-teal-600 rounded-full mr-2 align-text-bottom" />
      {text}
      {done && <span className="text-green-600"> ✓</span>}
    </div>
  ) : null;
}