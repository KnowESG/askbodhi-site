"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer hook — triggers once when element enters viewport.
 * Returns [ref, isVisible]. Attach ref to the container you want to animate.
 *
 * SSR-safe: no-op on server, activates after hydration.
 * Respects prefers-reduced-motion: returns true immediately so content is visible.
 */
export function useScrollFadeUp(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}
