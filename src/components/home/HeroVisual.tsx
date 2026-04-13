"use client";

import { useScrollFadeUp } from "@/hooks/useScrollFadeUp";

/**
 * Animated hero data visualization — before/after traffic growth chart
 * plus an AI visibility trend line. Tells the AskBodhi story visually.
 *
 * Left: Bar chart (Q1-Q4) with grey "before" and teal "after" bars
 * Right: SVG trend line showing rising AI mentions
 * All animation triggered on scroll via IntersectionObserver
 */

const BEFORE_HEIGHTS = [40, 25, 35, 30];
const AFTER_HEIGHTS = [65, 82, 58, 75];
const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

const LINE_POINTS = [
  { x: 20, y: 120 },
  { x: 70, y: 90 },
  { x: 120, y: 55 },
  { x: 170, y: 20 },
];

function buildPath(points: { x: number; y: number }[]): string {
  return points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(" ");
}

export default function HeroVisual() {
  const [ref, isVisible] = useScrollFadeUp(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`hidden md:block relative h-[340px] rounded-2xl overflow-hidden border fade-up ${isVisible ? "visible" : ""}`}
      style={{
        backgroundColor: "var(--color-white)",
        borderColor: "var(--color-stone-200)",
      }}
    >
      {/* Header labels */}
      <span
        className="absolute top-4 left-5 text-[11px]"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-stone-400)",
        }}
      >
        Organic Visibility
      </span>
      <span
        className="absolute top-4 right-5 text-[11px] px-2 py-0.5 rounded"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-teal)",
          backgroundColor: "var(--color-teal-pale)",
        }}
      >
        + GEO
      </span>

      {/* ─── LEFT: Bar Chart ─── */}
      <div
        className="absolute bottom-8 left-5 flex items-end gap-3"
        style={{ height: "240px", width: "52%" }}
      >
        {QUARTERS.map((q, i) => (
          <div
            key={q}
            className="flex-1 flex items-end justify-center gap-1 relative"
          >
            {/* Before bar (grey) */}
            <div
              className="w-[14px] rounded-t-sm"
              style={{
                background: "var(--color-stone-200)",
                height: isVisible ? `${BEFORE_HEIGHTS[i]}%` : "0%",
                transition: `height 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`,
              }}
            />
            {/* After bar (teal) */}
            <div
              className="w-[14px] rounded-t-sm"
              style={{
                background:
                  i < 2 ? "var(--color-teal)" : "var(--color-teal-bright)",
                opacity: 0.85,
                height: isVisible ? `${AFTER_HEIGHTS[i]}%` : "0%",
                transition: `height 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15 + 0.3}s`,
              }}
            />
            {/* Quarter label */}
            <span
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-stone-400)",
              }}
            >
              {q}
            </span>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute -top-2 left-0 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-sm"
              style={{ background: "var(--color-stone-200)" }}
            />
            <span
              className="text-[10px]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-stone-400)",
              }}
            >
              Before
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-sm"
              style={{ background: "var(--color-teal)" }}
            />
            <span
              className="text-[10px]"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--color-stone-400)",
              }}
            >
              After
            </span>
          </div>
        </div>
      </div>

      {/* ─── Divider ─── */}
      <div
        className="absolute top-10 bottom-8"
        style={{
          left: "56%",
          width: "1px",
          background: "var(--color-stone-200)",
        }}
      />

      {/* ─── RIGHT: AI Visibility Trend ─── */}
      <div
        className="absolute top-8 bottom-8"
        style={{ left: "60%", right: "16px" }}
      >
        <span
          className="text-[10px] block mb-2"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-stone-400)",
          }}
        >
          AI Mentions
        </span>

        <svg
          viewBox="0 0 190 140"
          className="w-full h-[180px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid lines */}
          {[35, 70, 105].map((y) => (
            <line
              key={y}
              x1="10"
              y1={y}
              x2="180"
              y2={y}
              stroke="var(--color-stone-200)"
              strokeWidth="0.5"
              strokeDasharray="4 4"
            />
          ))}

          {/* Trend line */}
          <path
            d={buildPath(LINE_POINTS)}
            className={`hero-line ${isVisible ? "animate" : ""}`}
            stroke="var(--color-ember)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {LINE_POINTS.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="var(--color-ember)"
              className={`hero-dot ${isVisible ? "animate" : ""}`}
              style={{ animationDelay: `${0.8 + i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* AI platform tags */}
        <div className="absolute bottom-0 right-0 flex flex-col gap-1.5 items-end">
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
            style={{
              background: "var(--color-teal-pale)",
              color: "var(--color-teal)",
              fontFamily: "var(--font-mono)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.5s ease 1.2s",
            }}
          >
            ChatGPT
          </span>
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
            style={{
              background: "var(--color-ember-soft)",
              color: "var(--color-ember)",
              fontFamily: "var(--font-mono)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.5s ease 1.4s",
            }}
          >
            Perplexity
          </span>
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
            style={{
              background: "var(--color-stone-100)",
              color: "var(--color-stone-600)",
              fontFamily: "var(--font-mono)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(8px)",
              transition: "all 0.5s ease 1.6s",
            }}
          >
            Google AI
          </span>
        </div>
      </div>
    </div>
  );
}
