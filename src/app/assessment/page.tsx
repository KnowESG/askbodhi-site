"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { STEPS } from '@/data/assessment-steps';
import type { Answers, ScanResult, CompetitorResult } from '@/types/assessment';
import { STEP_KEY_MAP, computeScore, computeDimensions } from '@/components/assessment/scoring';
import { LogoSvg } from '@/components/assessment/AssessmentUI';
import { IntroStep } from '@/components/assessment/IntroStep';
import { FieldsStep, ChoiceStep, TextStep } from '@/components/assessment/FormSteps';
import { ScanStep } from '@/components/assessment/ScanStep';
import { CompetitorsStep } from '@/components/assessment/CompetitorsStep';
import { ResultStep } from '@/components/assessment/ResultStep';

/* ======================================================
   AskBodhi AI Readiness Assessment v4
   ====================================================== */

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0);
  const [, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanPhase, setScanPhase] = useState<'scanning' | 'results'>('scanning');
  const [competitors, setCompetitors] = useState<CompetitorResult[]>([]);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = STEPS[current];
  const totalSteps = STEPS.length;
  const pct = current <= 0 ? 0 : current >= totalSteps - 1 ? 100 : Math.round((current / (totalSteps - 1)) * 100);

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

  const setAnswer = useCallback((key: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  }, []);

  const selectOption = useCallback(
    (num: string, value: string) => {
      const key = STEP_KEY_MAP[num] || num;
      setAnswer(key, value);
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = setTimeout(goNext, 400);
    },
    [setAnswer, goNext]
  );

  // Field completeness checks
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

  const textComplete = useCallback(() => {
    if (step.type !== 'text') return true;
    if (step.optional) return true;
    return !!answers[step.field.id];
  }, [step, answers]);

  const answerKey = step.num ? (STEP_KEY_MAP[step.num] || step.num) : '';

  const canAdvance =
    step.type === 'intro' || step.type === 'scan' ||
    step.type === 'competitors_ai' || step.type === 'result' ||
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
        if (step.type === 'intro' || (canAdvance && step.type !== 'scan' && step.type !== 'result')) {
          e.preventDefault();
          goNext();
        }
      }
      if (step.type === 'choice' && step.options) {
        const k = e.key.toLowerCase();
        const opt = step.options.find((o) => o.key.toLowerCase() === k);
        if (opt) selectOption(step.num!, opt.value);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step, canAdvance, goNext, selectOption]);

  // Scan effect
  useEffect(() => {
    if (step.type !== 'scan') return;
    const runScan = async () => {
      setScanPhase('scanning');
      await new Promise((r) => setTimeout(r, 4800));
      const website = answers.website || 'example.com';
      void website;
      setScanResult({ domainRating: 0, organicKeywords: 0, monthlyTraffic: 0, source: 'pending' });
      setCompetitors([]);
      await new Promise((r) => setTimeout(r, 800));
      setScanPhase('results');
      await new Promise((r) => setTimeout(r, 2200));
      goNext();
    };
    runScan();
  }, [step, answers.website, goNext]);

  // Submit to API on result step
  useEffect(() => {
    if (step.type !== 'result') return;
    if (answers._submitted) return;
    setAnswers((prev) => ({ ...prev, _submitted: 'true' }));
    const score = computeScore(answers);
    const dims = computeDimensions(answers);
    fetch('/api/assessment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, score, dimensions: dims, competitors, timestamp: new Date().toISOString() }),
    }).catch(() => {});
  }, [step, answers, competitors]);

  // Shared props
  const formProps = { step, answers, answerKey, canAdvance, setAnswer, selectOption, goNext, goBack };

  const renderStep = () => {
    switch (step.type) {
      case 'intro': return <IntroStep goNext={goNext} />;
      case 'fields': return <FieldsStep {...formProps} />;
      case 'choice': return <ChoiceStep {...formProps} />;
      case 'text': return <TextStep {...formProps} />;
      case 'scan': return <ScanStep scanPhase={scanPhase} scanResult={scanResult} />;
      case 'competitors_ai': return <CompetitorsStep answers={answers} setAnswer={setAnswer} goNext={goNext} goBack={goBack} />;
      case 'result': return <ResultStep score={computeScore(answers)} dimensions={computeDimensions(answers)} scanResult={scanResult} competitors={competitors} answers={answers} />;
      default: return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg, #FAFAF9)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ position: 'sticky', top: 0, background: 'var(--color-white, #fff)', borderBottom: '1px solid var(--color-stone-100, #F5F5F4)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <LogoSvg size={32} />
          <div style={{ fontSize: 14, color: 'var(--color-stone-600, #57534E)', fontWeight: 500 }}>
            <span style={{ fontWeight: 700, color: 'var(--color-charcoal, #1C1917)' }}>{current}</span> of {STEPS.length - 1}
          </div>
        </div>
        <Link href="/"><button style={{ background: 'none', border: 'none', fontSize: 20, color: 'var(--color-stone-400, #A8A29E)', cursor: 'pointer', padding: '4px 8px' }} title="Close">&times;</button></Link>
      </header>
      <div style={{ position: 'relative', height: 3, background: 'var(--color-stone-100, #F5F5F4)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg, var(--color-teal, #0F766E), var(--color-teal-bright, #14B8A6))', transition: 'width 0.3s ease-out' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', overflowY: 'auto' }}>
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </div>
    </div>
  );
}
