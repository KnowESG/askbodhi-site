"use client";

import { useTranslations } from "next-intl";
import { useScrollFadeUp } from "@/hooks/useScrollFadeUp";
import { useCountUp, parseMetricValue } from "@/hooks/useCountUp";

function AnimatedMetric({
  value,
  label,
  trigger,
  delay,
}: {
  value: string;
  label: string;
  trigger: boolean;
  delay: number;
}) {
  const { prefix, number, suffix } = parseMetricValue(value);
  const animated = useCountUp(number, 1800 + delay, trigger);

  // Format number with commas if the original had them
  const hasComma = value.replace(/[^\d,]/g, "").includes(",");
  const displayNum = hasComma ? animated.toLocaleString() : String(animated);

  return (
    <div className="px-3">
      <p
        className="text-[28px] font-bold"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)" }}
      >
        {prefix}
        {trigger ? displayNum : "0"}
        {suffix}
      </p>
      <p className="text-[13px] mt-1" style={{ color: "var(--color-stone-400)" }}>
        {label}
      </p>
    </div>
  );
}

export default function ProofBar() {
  const t = useTranslations();
  const items = (t.raw("proofBar.items") || []) as Array<{
    value: string;
    label: string;
  }>;
  const [ref, isVisible] = useScrollFadeUp(0.3);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full border-y fade-up ${isVisible ? "visible" : ""}`}
      style={{
        borderColor: "var(--color-stone-200)",
        backgroundColor: "var(--color-white)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-9 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, idx) => (
          <AnimatedMetric
            key={item.label}
            value={item.value}
            label={item.label}
            trigger={isVisible}
            delay={idx * 200}
          />
        ))}
      </div>
    </section>
  );
}
