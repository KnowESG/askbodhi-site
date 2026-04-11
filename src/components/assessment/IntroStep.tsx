"use client";

import { motion } from 'framer-motion';
import { fadeUp, LogoSvg } from './AssessmentUI';

export function IntroStep({ goNext }: { goNext: () => void }) {
  return (
    <motion.div key="intro" {...fadeUp} style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
      <div style={{ width: 64, height: 64, margin: '0 auto 32px', background: 'var(--color-teal-pale, #F0FDFA)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LogoSvg size={40} />
      </div>
      <h1 style={{ marginBottom: 12, fontSize: 32, fontWeight: 600, color: 'var(--color-charcoal, #1C1917)', fontFamily: "var(--font-display, 'Lora', serif)", lineHeight: 1.2 }}>
        How AI-ready is your company?
      </h1>
      <p style={{ fontSize: 16, color: 'var(--color-stone-600, #57534E)', lineHeight: 1.6, marginBottom: 28 }}>
        Get a live digital analysis—we&apos;ll scan your site, benchmark competitors, and score your readiness across 5 dimensions.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
        {[
          { icon: '⏱️', text: '5 minutes' },
          { icon: '🔒', text: 'Data stays private' },
          { icon: '📊', text: 'Scored report' },
        ].map((item) => (
          <div key={item.text} style={{ fontSize: 12, color: 'var(--color-stone-400, #A8A29E)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        onClick={goNext}
        style={{ padding: '12px 32px', background: 'var(--color-teal, #0F766E)', color: '#fff', border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
      >
        Start the Assessment →
      </motion.button>
    </motion.div>
  );
}
