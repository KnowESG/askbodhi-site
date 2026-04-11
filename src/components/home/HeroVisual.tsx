export default function HeroVisual() {
  return (
    <div
      className="hidden md:block relative h-[340px] rounded-2xl overflow-hidden border"
      style={{ backgroundColor: "var(--color-white)", borderColor: "var(--color-stone-200)" }}
    >
      <span className="absolute top-4 left-5 text-[11px]" style={{ fontFamily: "var(--font-mono)", color: "var(--color-stone-400)" }}>Organic Visibility</span>
      <span className="absolute top-4 right-5 text-[11px]" style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal-bright)" }}>+ GEO</span>
      {/* Grey bars */}
      <div className="absolute bottom-0 rounded-t-lg" style={{ left: "12%", width: 36, height: "45%", background: "var(--color-stone-200)" }} />
      <div className="absolute bottom-0 rounded-t-lg" style={{ left: "22%", width: 36, height: "62%", background: "var(--color-stone-200)" }} />
      <div className="absolute bottom-0 rounded-t-lg" style={{ left: "32%", width: 36, height: "38%", background: "var(--color-stone-200)" }} />
      <div className="absolute bottom-0 rounded-t-lg" style={{ left: "42%", width: 36, height: "55%", background: "var(--color-stone-200)" }} />
      {/* Teal overlay bars */}
      <div className="absolute bottom-0 rounded-t-md" style={{ left: "14%", width: 32, height: "65%", background: "var(--color-teal)", opacity: 0.8 }} />
      <div className="absolute bottom-0 rounded-t-md" style={{ left: "24%", width: 32, height: "82%", background: "var(--color-teal)", opacity: 0.8 }} />
      <div className="absolute bottom-0 rounded-t-md" style={{ left: "34%", width: 32, height: "58%", background: "var(--color-teal-bright)", opacity: 0.8 }} />
      <div className="absolute bottom-0 rounded-t-md" style={{ left: "44%", width: 32, height: "75%", background: "var(--color-teal-bright)", opacity: 0.8 }} />
      {/* Trend dots */}
      <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "62%", top: "55%", background: "var(--color-ember)" }} />
      <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "69%", top: "45%", background: "var(--color-ember)" }} />
      <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "76%", top: "32%", background: "var(--color-ember)" }} />
      <div className="absolute w-2.5 h-2.5 rounded-full" style={{ left: "83%", top: "22%", background: "var(--color-ember)" }} />
      {/* Tags */}
      <span className="absolute text-xs font-semibold px-3 py-1.5 rounded-md" style={{ bottom: 60, right: 20, background: "var(--color-teal-pale)", color: "var(--color-teal)", fontFamily: "var(--font-mono)" }}>ChatGPT</span>
      <span className="absolute text-xs font-semibold px-3 py-1.5 rounded-md" style={{ bottom: 28, right: 20, background: "var(--color-ember-soft)", color: "var(--color-ember)", fontFamily: "var(--font-mono)" }}>Perplexity</span>
      <span className="absolute text-xs font-semibold px-3 py-1.5 rounded-md" style={{ bottom: 92, right: 100, background: "var(--color-stone-100)", color: "var(--color-stone-600)", fontFamily: "var(--font-mono)" }}>Google AI</span>
    </div>
  );
}
