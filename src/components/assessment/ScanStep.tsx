"use client";

import { motion } from 'framer-motion';
import { fadeUp, ScanLine } from './AssessmentUI';
import type { ScanStepProps } from './StepProps';

function MetricCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      padding: '14px 16px',
      background: highlight === false ? 'rgba(239, 68, 68, 0.05)' : highlight ? 'var(--color-teal-pale, #F0FDFA)' : 'rgba(28, 25, 23, 0.03)',
      borderRadius: 8,
      border: `1px solid ${highlight === false ? 'rgba(239, 68, 68, 0.2)' : highlight ? 'var(--color-teal, #0F766E)' : 'var(--color-stone-200, #E7E5E4)'}`,
      textAlign: 'left' as const,
    }}>
      <div style={{ fontSize: 11, color: 'var(--color-stone-500, #78716C)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: highlight === false ? '#EF4444' : highlight ? 'var(--color-teal, #0F766E)' : 'var(--color-charcoal, #1C1917)' }}>{value}</div>
    </div>
  );
}

export function ScanStep({ scanPhase, scanResult, pageSpeed, aiVisibility }: ScanStepProps) {
  const hasData = scanResult && scanResult.source === 'live';

  return (
    <motion.div key="scan" {...fadeUp} style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', marginBottom: 8, fontFamily: "var(--font-display, 'Lora', serif)" }}>
        {scanPhase === 'scanning' ? 'Analyzing your digital presence...' : 'Analysis complete'}
      </h2>

      {scanPhase === 'scanning' && (
        <div style={{ background: 'rgba(28, 25, 23, 0.03)', border: '1px solid var(--color-stone-200, #E7E5E4)', borderRadius: 8, padding: 20, margin: '24px 0', minHeight: 160, fontFamily: "var(--font-mono, 'Geist Mono', monospace)", fontSize: 13, textAlign: 'left' }}>
          <ScanLine text="Querying Ahrefs API for domain metrics..." delay={0} />
          <ScanLine text="Fetching domain rating and backlink profile..." delay={800} />
          <ScanLine text="Mapping organic keyword landscape..." delay={1600} />
          <ScanLine text="Running Google PageSpeed analysis..." delay={2400} />
          <ScanLine text="Checking AI search engine visibility..." delay={3200} />
          <ScanLine text="Identifying organic competitors..." delay={4000} />
        </div>
      )}

      {scanPhase === 'results' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 24 }}>
          {hasData ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <MetricCard label="Domain Rating" value={`${scanResult.domainRating}/100`} />
                <MetricCard label="Organic Keywords" value={scanResult.organicKeywords.toLocaleString()} />
                <MetricCard label="Monthly Traffic" value={scanResult.monthlyTraffic.toLocaleString()} />
                <MetricCard label="Live Backlinks" value={(scanResult.backlinks ?? 0).toLocaleString()} />
                {pageSpeed && (
                  <MetricCard label="PageSpeed (Mobile)" value={`${pageSpeed.performanceScore}/100`} />
                )}
                {aiVisibility && (
                  <MetricCard label="AI Visibility" value={aiVisibility.mentioned ? 'Visible' : 'Not found'} highlight={aiVisibility.mentioned} />
                )}
              </div>
              <div style={{ marginTop: 12, fontSize: 11, color: 'var(--color-stone-400, #A8A29E)' }}>
                Data sourced live from Ahrefs, Google PageSpeed &amp; Perplexity
              </div>
            </>
          ) : (
            <div style={{ padding: 20, background: 'var(--color-teal-pale, #F0FDFA)', borderRadius: 8, border: '1px solid var(--color-teal, #0F766E)' }}>
              <div style={{ fontSize: 14, color: 'var(--color-teal, #0F766E)', fontWeight: 600 }}>
                Domain registered for analysis. Your full report will include live metrics.
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
