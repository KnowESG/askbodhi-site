"use client";

import { motion } from 'framer-motion';
import { fadeUp, ScanLine } from './AssessmentUI';
import type { ScanStepProps } from './StepProps';

export function ScanStep({ scanPhase }: ScanStepProps) {
  return (
    <motion.div key="scan" {...fadeUp} style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 8, fontFamily: "var(--font-display, 'Lora', serif)" }}>
        Registering your domain for analysis...
      </h2>

      {scanPhase === 'scanning' && (
        <div style={{ background: 'rgba(28, 25, 23, 0.03)', border: '1px solid var(--color-stone-200, #E7E5E4)', borderRadius: 8, padding: 20, margin: '24px 0', minHeight: 160, fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontSize: 13, textAlign: 'left' }}>
          <ScanLine text="Connecting to analysis engine..." delay={0} />
          <ScanLine text="Reading domain signals..." delay={800} />
          <ScanLine text="Mapping keyword landscape..." delay={1600} />
          <ScanLine text="Checking domain authority..." delay={2400} />
          <ScanLine text="Domain registered." delay={3200} done />
        </div>
      )}

      {scanPhase === 'results' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 24, padding: 20, background: 'var(--color-teal-pale, #F0FDFA)', borderRadius: 8, border: '1px solid var(--color-teal, #0F766E)' }}>
          <div style={{ fontSize: 14, color: 'var(--color-teal, #0F766E)', fontWeight: 600 }}>
            Domain registered for analysis. Your full report will include live metrics.
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
