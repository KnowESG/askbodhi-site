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
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        fontFamily: "var(--font-mono, 'Geist Mono', monospace)",
        fontSize: 14,
        color: done ? 'var(--color-teal-bright, #14B8A6)' : 'var(--color-stone-400, #A8A29E)',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span style={{ color: done ? 'var(--color-teal-bright, #14B8A6)' : 'var(--color-ember, #EA580C)' }}>
        {done ? '✓' : '→'}
      </span>
      {text}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          style={{
            display: 'inline-block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'var(--color-teal-bright, #14B8A6)',
            marginLeft: 4,
          }}
        />
      )}
    </motion.div>
  );
}

// ─── Metric Card ─────────────────────────────────────────
function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        textAlign: 'center',
        padding: '16px',
        background: 'var(--color-stone-100, #F5F5F4)',
        borderRadius: 8,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display, 'Lora', serif)",
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--color-teal, #0F766E)',
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 12, color: 'var(--color-stone-600, #57534E)', fontWeight: 500 }}>
        {label}
      </div>
    </motion.div>
  );
}

// ─── Competitor Chip ─────────────────────────────────────
function CompetitorChip(
  {
    comp,
    index,
    onToggle,
  }: {
    comp: CompetitorResult;
    index: number;
    onToggle: () => void;
  }
) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.35 }}
      onClick={onToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        background: comp.checked ? 'var(--color-teal-pale, #F0FDFA)' : 'var(--color-white, #fff)',
        border: `1px solid ${comp.checked ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)'}`,
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'all 0.2s',
        userSelect: 'none' as const,
      }}
    >
      {/* Checkbox */}
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          border: `2px solid ${comp.checked ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)'}`,
          background: comp.checked ? 'var(--color-teal, #0F766E)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.2s',
        }}
      >
        {comp.checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>

      {/* Domain */}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)' }}>{comp.domain}</div>
        <div
          style={{
            fontSize: 12,
            color: 'var(--color-stone-400, #A8A29E)',
            marginTop: 2,
          }}
        >
          {comp.commonKeywords} shared keywords
        </div>
      </div>

      {/* DR Pill */}
      <div
        style={{
          padding: '3px 8px',
          borderRadius: 4,
          background: 'var(--color-teal-pale, #F0FDFA)',
          color: 'var(--color-teal, #0F766E)',
          fontSize: 11,
          fontWeight: 600,
          border: '1px solid var(--color-teal, #0F766E)',
        }}
      >
        DR {comp.dr}
      </div>
    </motion.div>
  );
}

// ─── Score Ring SVG ──────────────────────────────────────
function ScoreRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (circumference * score) / 100;

  return (
    <div style={{ width: 200, height: 200, margin: '0 auto 24px', position: 'relative' }}>
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-teal)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-teal-bright)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-stone-100, #F5F5F4)" strokeWidth="8" />
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: 'stroke-dashoffset 2.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-display, 'Lora', serif)",
            fontSize: 48,
            fontWeight: 700,
            color: 'var(--color-teal, #0F766E)',
            lineHeight: 1,
          }}
        >
          {score}
        </motion.div>
        <div
          style={{
            fontSize: 12,
            color: 'var(--color-stone-600, #57534E)',
            marginTop: 4,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          out of 100
        </div>
      </motion.div>
    </div>
  );
}

// ─── Dimension Bar ───────────────────────────────────────
function DimBar({ dim, delay }: { dim: DimensionScore; delay: number }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <span style={{ fontSize: 13, color: 'var(--color-stone-600, #57534E)', width: 160, flexShrink: 0, fontWeight: 500 }}>{dim.label}</span>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'var(--color-stone-100, #F5F5F4)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: animated ? `${(dim.value / dim.max) * 100}%` : '0%' }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            height: '100%',
            borderRadius: 3,
            background: `linear-gradient(90deg, var(--color-teal, #0F766E), var(--color-teal-bright, #14B8A6))`,
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "var(--font-mono, 'Geist Mono', monospace)",
          fontSize: 13,
          fontWeight: 600,
          width: 44,
          textAlign: 'right',
          color: 'var(--color-charcoal, #1C1917)',
        }}
      >
        {animated ? dim.value : 0}/{dim.max}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN ASSESSMENT COMPONENT
// ═══════════════════════════════════════════════════════════

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanPhase, setScanPhase] = useState<'scanning' | 'results'>('scanning');
  const [competitors, setCompetitors] = useState<CompetitorResult[]>([]);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = STEPS[current];
  const totalSteps = STEPS.length;
  const pct = current <= 0 ? 0 : current >= totalSteps - 1 ? 100 : Math.round((current / (totalSteps - 1)) * 100);

  // ─── V4 SCORING LOGIC ────────────────────────────────────
  const computeScore = useCallback(() => {
    let score = 45; // base

    // Company size
    if (answers.companySize === '200+') score += 8;
    else if (answers.companySize === '51-200') score += 5;

    // Discovery channel
    if (answers.discovery === 'google') score += 8;
    else if (answers.discovery === 'ai_search') score += 10;

    // Revenue tracking
    if (answers.revenueTracking === 'yes') score += 7;

    // AI cited
    if (answers.aiCited === 'yes_cited') score += 12;
    else if (answers.aiCited === 'yes_not_cited') score += 3;

    // Schema markup
    if (answers.schemaMarkup === 'yes_ext') score += 8;
    else if (answers.schemaMarkup === 'some') score += 4;

    // AI maturity
    if (answers.aiMaturity === 'embedded') score += 10;
    else if (answers.aiMaturity === 'some') score += 6;

    // Challenge
    if (answers.challenge === 'no_strategy') score += 5;

    // Found AskBodhi
    if (answers.foundAskBodhi === 'google' || answers.foundAskBodhi === 'ai') score += 3;

    return Math.min(score, 100);
  }, [answers]);

  // ─── V4 DIMENSIONS ───────────────────────────────────────
  const computeDimensions = useCallback((): DimensionScore[] => {
    return [
      {
        label: 'Search Visibility',
        value: Math.min(100, 30 + (answers.discovery === 'google' ? 40 : 20)),
        max: 100,
        color: 'var(--color-teal, #0F766E)',
      },
      {
        label: 'AI Readiness',
        value: Math.min(100, answers.aiMaturity === 'embedded' ? 80 : answers.aiMaturity === 'some' ? 60 : 30),
        max: 100,
        color: 'var(--color-teal-bright, #14B8A6)',
      },
      {
        label: 'Technical Foundation',
        value: Math.min(100, answers.schemaMarkup === 'yes_ext' ? 85 : answers.schemaMarkup === 'some' ? 55 : 25),
        max: 100,
        color: 'var(--color-ember, #EA580C)',
      },
      {
        label: 'Content Strategy',
        value: Math.min(100, answers.challenge === 'no_strategy' ? 40 : 65),
        max: 100,
        color: 'var(--color-teal, #0F766E)',
      },
      {
        label: 'Competitive Position',
        value: Math.min(100, 45 + (answers.companySize === '200+' ? 30 : 15)),
        max: 100,
        color: 'var(--color-teal-bright, #14B8A6)',
      },
    ];
  }, [answers]);

  // Navigate
  const goNext = useCallback(() => {
    if (current >= STEPS.length - 1) return;
    setDirection(1);
    setCurrent((c) => c + 1);
  }, [current]);

  const goBack = useCallback(() => {
    if (current <= 0) return;
    setDirection(-1);
    setCurrent((c) => c - 1);
  }, [current]);

  // Update answer
  const setAnswer = useCallback((key: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  }, []);

  // Select option (with auto-advance) — uses named key from STEP_KEY_MAP
  const selectOption = useCallback(
    (num: string, value: string) => {
      const key = STEP_KEY_MAP[num] || num;
      setAnswer(key, value);
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = setTimeout(goNext, 400);
    },
    [setAnswer, goNext]
  );

  // Check if fields step is complete
  const fieldsComplete = useCallback(() => {
    if (step.type !== 'fields') return true;
    for (const f of step.fields) {
      const items = f.row || (f.single ? [f.single] : []);
      for (const r of items) {
        if (r.required && !answers[r.id]) return false;
      }
    }
    return true;
  }, [step, answers]);

  // Check if text step is complete
  const textComplete = useCallback(() => {
    if (step.type !== 'text') return true;
    if (step.optional) return true;
    return !!answers[step.field.id];
  }, [step, answers]);

  // Get the named answer key for the current step
  const answerKey = step.num ? (STEP_KEY_MAP[step.num] || step.num) : '';

  // Can advance?
  const canAdvance =
    step.type === 'intro' ||
    step.type === 'scan' ||
    step.type === 'competitors_ai' ||
    step.type === 'result' ||
    (step.type === 'choice' && !!answers[answerKey]) ||
    (step.type === 'fields' && fieldsComplete()) ||
    (step.type === 'text' && textComplete());

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        const target = e.target as HTMLElement;
        if (target.tagName === 'TEXTAREA' && !e.metaKey && !e.ctrlKey) return;
        if (target.closest('.ac-group')) return;

        if (step.type === 'intro') {
          e.preventDefault();
          goNext();
        } else if (canAdvance && step.type !== 'scan' && step.type !== 'result') {
          e.preventDefault();
          goNext();
        }
      }

      if (step.type === 'choice' && step.options) {
        const key = e.key.toLowerCase();
        const opt = step.options.find((o) => o.key.toLowerCase() === key);
        if (opt) {
          selectOption(step.num!, opt.value);
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step, canAdvance, goNext, selectOption]);

  // Trigger scan on scan step
  useEffect(() => {
    if (step.type !== 'scan') return;

    const runScan = async () => {
      setScanPhase('scanning');
      await new Promise((r) => setTimeout(r, 4800)); // Wait for terminal animation

      const website = answers.website || 'example.com';
      const simulated: ScanResult = {
        domainRating: Math.floor(Math.random() * 60) + 15,
        organicKeywords: Math.floor(Math.random() * 5000) + 100,
        monthlyTraffic: Math.floor(Math.random() * 10000) + 200,
        source: 'simulated',
      };

      setScanResult(simulated);

      const comps: CompetitorResult[] = [
        { domain: 'competitor1.com', dr: Math.floor(Math.random() * 40) + 50, commonKeywords: Math.floor(Math.random() * 100) + 50, checked: true },
        { domain: 'competitor2.com', dr: Math.floor(Math.random() * 40) + 50, commonKeywords: Math.floor(Math.random() * 100) + 50, checked: true },
        { domain: 'competitor3.com', dr: Math.floor(Math.random() * 40) + 50, commonKeywords: Math.floor(Math.random() * 100) + 50, checked: true },
      ];
      setCompetitors(comps);

      await new Promise((r) => setTimeout(r, 800));
      setScanPhase('results');

      // Auto-advance after showing results
      await new Promise((r) => setTimeout(r, 2200));
      goNext();
    };

    runScan();
  }, [step, answers.website, goNext]);

  // Render step content
  const renderStep = () => {
    if (step.type === 'intro') {
      return (
        <motion.div key="intro" {...fadeUp} style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
          <div style={{ width: 64, height: 64, margin: '0 auto 32px', background: 'var(--color-teal-pale, #F0FDFA)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LogoSvg size={40} />
          </div>
          <h1 style={{ marginBottom: 12, fontSize: 32, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', fontFamily: "var(--font-display, 'Lora', serif)", lineHeight: 1.2 }}>
            How AI-ready is your company?
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-stone-600, #57534E)', lineHeight: 1.6, marginBottom: 28 }}>
            Get a live digital analysis—we'll scan your site, benchmark competitors, and score your readiness across 5 dimensions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 12, color: 'var(--color-stone-400, #A8A29E)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>⏱️</span>
              <span>5 minutes</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-stone-400, #A8A29E)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>🔒</span>
              <span>Data stays private</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-stone-400, #A8A29E)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>📊</span>
              <span>Scored report</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={goNext}
            style={{
              padding: '12px 32px',
              background: 'var(--color-teal, #0F766E)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Start the Assessment →
          </motion.button>
        </motion.div>
      );
    }

    if (step.type === 'fields') {
      return (
        <motion.div key={`fields-${step.num}`} {...fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-teal, #0F766E)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
              Question {step.num}
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 20, fontFamily: "var(--font-display, 'Lora', serif)" }}>
              {step.title}
            </h2>
            {step.hint && <p style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', marginBottom: 24 }}>{step.hint}</p>}
          </div>

          {step.fields.map((fieldGroup, idx) => {
            if (fieldGroup.row) {
              return (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  {fieldGroup.row.map((f) => (
                    <div key={f.id}>
                      <label style={{ display: 'block', fontWeight: 500, marginBottom: 8, fontSize: 14, color: 'var(--color-charcoal, #1C1917)' }}>
                        {f.label}
                      </label>
                      <input
                        type={f.type || 'text'}
                        id={f.id}
                        placeholder={f.placeholder}
                        value={answers[f.id] || ''}
                        onChange={(e) => setAnswer(f.id, e.target.value)}
                        required={f.required}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid var(--color-stone-200, #E7E5E4)',
                          borderRadius: 8,
                          fontFamily: "var(--font-body, 'Instrument Sans', sans-serif)",
                          fontSize: 14,
                          color: 'var(--color-charcoal, #1C1917)',
                          background: 'var(--color-white, #fff)',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = 'var(--color-teal, #0F766E)';
                          (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = '';
                          (e.target as HTMLInputElement).style.boxShadow = '';
                        }}
                      />
                    </div>
                  ))}
                </div>
              );
            }

            if (fieldGroup.single) {
              const f = fieldGroup.single;
              // Check if this is an autocomplete field
              const isAutocomplete = f.id === 'industry' || f.id === 'country';
              const suggestions = f.id === 'industry' ? INDUSTRY_SUGGESTIONS : f.id === 'country' ? COUNTRY_SUGGESTIONS : [];

              if (isAutocomplete) {
                return (
                  <div key={f.id} style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontWeight: 500, marginBottom: 8, fontSize: 14, color: 'var(--color-charcoal, #1C1917)' }}>
                      {f.label}
                    </label>
                    <Autocomplete
                      items={suggestions}
                      value={answers[f.id] || ''}
                      onChange={(val) => setAnswer(f.id, val)}
                      placeholder={f.placeholder}
                      label=""
                    />
                  </div>
                );
              }

              return (
                <div key={f.id} style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontWeight: 500, marginBottom: 8, fontSize: 14, color: 'var(--color-charcoal, #1C1917)' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type || 'text'}
                    id={f.id}
                    placeholder={f.placeholder}
                    value={answers[f.id] || ''}
                    onChange={(e) => setAnswer(f.id, e.target.value)}
                    required={f.required}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      border: '1px solid var(--color-stone-200, #E7E5E4)',
                      borderRadius: 8,
                      fontFamily: "var(--font-body, 'Instrument Sans', sans-serif)",
                      fontSize: 14,
                      color: 'var(--color-charcoal, #1C1917)',
                      background: 'var(--color-white, #fff)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      outline: 'none',
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-teal, #0F766E)';
                      (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = '';
                      (e.target as HTMLInputElement).style.boxShadow = '';
                    }}
                  />
                </div>
              );
            }

            return null;
          })}

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goBack}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: 'var(--color-stone-100, #F5F5F4)',
                color: 'var(--color-stone-600, #57534E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ← Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              disabled={!canAdvance}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: canAdvance ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)',
                color: canAdvance ? '#fff' : 'var(--color-stone-400, #A8A29E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: canAdvance ? 'pointer' : 'not-allowed',
              }}
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>
      );
    }

    if (step.type === 'choice') {
      return (
        <motion.div key={`choice-${step.num}`} {...fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-teal, #0F766E)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
              Question {step.num}
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 20, fontFamily: "var(--font-display, 'Lora', serif)" }}>
              {step.title}
            </h2>
            {step.hint && <p style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', marginBottom: 24 }}>{step.hint}</p>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {step.options?.map((opt) => (
              <motion.div
                key={opt.key}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => selectOption(step.num!, opt.value)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 16px',
                  border: `1px solid ${answers[answerKey] === opt.value ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)'}`,
                  borderRadius: 8,
                  background: answers[answerKey] === opt.value ? 'var(--color-teal-pale, #F0FDFA)' : 'var(--color-white, #fff)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: 14,
                  color: 'var(--color-charcoal, #1C1917)',
                  fontWeight: answers[answerKey] === opt.value ? 500 : 400,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    border: `2px solid ${answers[answerKey] === opt.value ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)'}`,
                    background: answers[answerKey] === opt.value ? 'var(--color-teal, #0F766E)' : 'transparent',
                    marginRight: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {answers[answerKey] === opt.value && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                </div>
                {opt.text}
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goBack}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: 'var(--color-stone-100, #F5F5F4)',
                color: 'var(--color-stone-600, #57534E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ← Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              disabled={!canAdvance}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: canAdvance ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)',
                color: canAdvance ? '#fff' : 'var(--color-stone-400, #A8A29E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: canAdvance ? 'pointer' : 'not-allowed',
              }}
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>
      );
    }

    if (step.type === 'text') {
      return (
        <motion.div key={`text-${step.num}`} {...fadeUp} style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-teal, #0F766E)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
              Question {step.num}
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 20, fontFamily: "var(--font-display, 'Lora', serif)" }}>
              {step.title}
            </h2>
            {step.hint && <p style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', marginBottom: 24 }}>{step.hint}</p>}
          </div>

          <div style={{ marginBottom: 24 }}>
            <textarea
              placeholder={step.field.placeholder}
              value={answers[step.field.id] || ''}
              onChange={(e) => setAnswer(step.field.id, e.target.value)}
              style={{
                width: '100%',
                minHeight: 120,
                padding: '12px 14px',
                border: '1px solid var(--color-stone-200, #E7E5E4)',
                borderRadius: 8,
                fontFamily: "var(--font-body, 'Instrument Sans', sans-serif)",
                fontSize: 14,
                color: 'var(--color-charcoal, #1C1917)',
                background: 'var(--color-white, #fff)',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                outline: 'none',
                resize: 'vertical',
              }}
              onFocus={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = 'var(--color-teal, #0F766E)';
                (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px rgba(15, 118, 110, 0.1)';
              }}
              onBlur={(e) => {
                (e.target as HTMLTextAreaElement).style.borderColor = '';
                (e.target as HTMLTextAreaElement).style.boxShadow = '';
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goBack}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: 'var(--color-stone-100, #F5F5F4)',
                color: 'var(--color-stone-600, #57534E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ← Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              disabled={!canAdvance}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: canAdvance ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)',
                color: canAdvance ? '#fff' : 'var(--color-stone-400, #A8A29E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: canAdvance ? 'pointer' : 'not-allowed',
              }}
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>
      );
    }

    if (step.type === 'scan') {
      return (
        <motion.div key="scan" {...fadeUp} style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 8, fontFamily: "var(--font-display, 'Lora', serif)" }}>
            Scanning your digital footprint...
          </h2>

          {scanPhase === 'scanning' && (
            <div style={{ background: 'rgba(28, 25, 23, 0.03)', border: '1px solid var(--color-stone-200, #E7E5E4)', borderRadius: 8, padding: 20, margin: '24px 0', minHeight: 160, fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontSize: 13, textAlign: 'left' }}>
              <ScanLine text="Connecting to analysis engine..." delay={0} />
              <ScanLine text="Reading domain signals..." delay={800} />
              <ScanLine text="Mapping keyword landscape..." delay={1600} />
              <ScanLine text="Checking domain authority..." delay={2400} />
              <ScanLine text="Scan complete." delay={3200} done />
            </div>
          )}

          {scanPhase === 'results' && scanResult && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 24 }}>
              <MetricCard label="Domain Rating" value={scanResult.domainRating} />
              <MetricCard label="Organic Keywords" value={scanResult.organicKeywords.toLocaleString()} />
              <MetricCard label="Monthly Traffic" value={`~${scanResult.monthlyTraffic.toLocaleString()}`} />
            </motion.div>
          )}
        </motion.div>
      );
    }

    if (step.type === 'competitors_ai') {
      return (
        <motion.div key="competitors" {...fadeUp} style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 6, fontFamily: "var(--font-display, 'Lora', serif)" }}>
            We found your competitors
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', marginBottom: 24 }}>
            Based on your keyword overlap, these companies compete for the same search terms.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {competitors.map((comp, idx) => (
              <CompetitorChip
                key={comp.domain}
                comp={comp}
                index={idx}
                onToggle={() => {
                  setCompetitors((prev) =>
                    prev.map((c) =>
                      c.domain === comp.domain ? { ...c, checked: !c.checked } : c
                    )
                  );
                }}
              />
            ))}
          </div>

          <p style={{ fontSize: 12, color: 'var(--color-stone-400, #A8A29E)', marginBottom: 24 }}>
            We identified these automatically. Confirm the ones relevant to your space, or add your own.
          </p>

          <div style={{ display: 'flex', gap: 12 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goBack}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: 'var(--color-stone-100, #F5F5F4)',
                color: 'var(--color-stone-600, #57534E)',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              ← Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goNext}
              style={{
                flex: 1,
                padding: '12px 20px',
                background: 'var(--color-teal, #0F766E)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue →
            </motion.button>
          </div>
        </motion.div>
      );
    }

    if (step.type === 'result') {
      const score = computeScore();
      const dims = computeDimensions();

      return (
        <motion.div key="result" {...fadeUp} style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 20, fontFamily: "var(--font-display, 'Lora', serif)" }}>
            Your AI Readiness Score
          </h2>

          <ScoreRing score={score} />

          {/* Intelligence Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              background: 'var(--color-white, #fff)',
              borderRadius: 8,
              border: '1px solid var(--color-stone-200, #E7E5E4)',
              borderLeft: '4px solid var(--color-teal, #0F766E)',
              padding: '20px',
              marginBottom: 24,
              textAlign: 'left',
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-teal, #0F766E)', marginBottom: 16, fontFamily: "var(--font-mono, 'Geist Mono', monospace)" }}>
              Intelligence Summary
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px 16px', alignItems: 'center', fontSize: 14, marginBottom: 16 }}>
              <div style={{ fontWeight: 600, color: 'var(--color-stone-600, #57534E)' }}>Domain Rating</div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                {scanResult?.domainRating || '—'}
              </div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                {competitors.length > 0 ? Math.round(competitors.reduce((s, c) => s + c.dr, 0) / competitors.length) : '—'}
              </div>

              <div style={{ fontWeight: 600, color: 'var(--color-stone-600, #57534E)' }}>Organic Keywords</div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                {scanResult?.organicKeywords.toLocaleString() || '—'}
              </div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                {competitors.length > 0 ? Math.round(competitors.reduce((s, c) => s + c.commonKeywords, 0) / competitors.length).toLocaleString() : '—'}
              </div>

              <div style={{ fontWeight: 600, color: 'var(--color-stone-600, #57534E)' }}>Monthly Traffic</div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                ~{scanResult?.monthlyTraffic.toLocaleString() || '—'}
              </div>
              <div style={{ fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontWeight: 700, color: 'var(--color-charcoal, #1C1917)', textAlign: 'center' }}>
                —
              </div>
            </div>

            <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--color-stone-100, #F5F5F4)', fontSize: 13, color: 'var(--color-stone-600, #57534E)', lineHeight: 1.6 }}>
              Your full report will identify exactly which keyword gaps to close first and how to improve AI visibility.
            </div>
          </motion.div>

          {/* Dimensions */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--color-stone-200, #E7E5E4)', textAlign: 'left' }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-charcoal, #1C1917)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Scored Dimensions
            </div>
            {dims.map((dim, idx) => (
              <DimBar key={dim.label} dim={dim} delay={900 + idx * 150} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{
              marginTop: 28,
              padding: 16,
              background: 'var(--color-teal-pale, #F0FDFA)',
              borderRadius: 8,
              fontSize: 13,
              color: 'var(--color-stone-600, #57534E)',
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: 'var(--color-charcoal, #1C1917)', fontWeight: 600 }}>Your full report is on the way.</strong> We've sent the assessment details to your email. Your personalized AI readiness report—with specific gaps and opportunities—will arrive within 24 hours.
          </motion.div>

          {/* Get Full Report Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            style={{ marginTop: 24 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '12px 32px',
                  background: 'var(--color-teal, #0F766E)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Get Your Full Report →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg, #FAFAF9)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, background: 'var(--color-white, #fff)', borderBottom: '1px solid var(--color-stone-100, #F5F5F4)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <LogoSvg size={32} />
          <div style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', fontWeight: 500 }}>
            <span style={{ fontWeight: 700, color: 'var(--color-charcoal, #1C1917)' }}>{current}</span> of {STEPS.length - 1}
          </div>
        </div>
        <Link href="/">
          <button style={{ background: 'none', border: 'none', fontSize: 20, color: 'var(--color-stone-400, #A8A29E)', cursor: 'pointer', padding: '4px 8px', transition: 'color 0.2s' }} title="Close">
            ×
          </button>
        </Link>
      </header>

      {/* Progress Bar */}
      <div style={{ position: 'relative', height: 3, background: 'var(--color-stone-100, #F5F5F4)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--color-teal, #0F766E), var(--color-teal-bright, #14B8A6))',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', right: -4, top: -2, width: 7, height: 7, background: 'var(--color-teal-bright, #14B8A6)', borderRadius: '50%', boxShadow: '0 0 8px rgba(20, 184, 166, 0.4)' }} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', overflowY: 'auto' }}>
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </div>
    </div>
  );
}
