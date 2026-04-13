"use client";

import { useEffect, useState } from "react";

/**
 * Animated counter — counts from 0 to `target` over `duration` ms.
 * Uses easeOutExpo for a fast-start, smooth-land feel.
 * Only starts when `trigger` becomes true.
 *
 * Returns the current display value (integer).
 */
export function useCountUp(target: number, duration = 1800, trigger = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger || target === 0) {
      if (trigger) setValue(target);
      return;
    }

    // Respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let rafId: number;

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setValue(Math.round(easedProgress * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, trigger]);

  return value;
}

/**
 * Parse a metric string like "€12K" or "56%" or "13,000" into parts.
 * Returns { prefix, number, suffix } so we can animate just the number.
 */
export function parseMetricValue(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  // Remove commas and spaces for parsing
  const cleaned = raw.replace(/,/g, "").replace(/\s/g, "");

  // Match: optional prefix (non-digit, non-dot chars) + number + optional suffix
  const match = cleaned.match(/^([^\d]*?)([\d.]+)(.*)$/);

  if (!match) {
    return { prefix: "", number: 0, suffix: raw };
  }

  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}
