export default function ToolBar() {
  return (
    <section
      className="w-full text-center"
      style={{ padding: "48px 0", backgroundColor: "var(--color-white)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <p className="text-sm mb-8" style={{ color: "var(--color-stone-400)", letterSpacing: "0.02em" }}>
          We don&apos;t guess. Every recommendation is backed by the same data platforms used by enterprise growth teams.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Ahrefs */}
          <div className="tool-logo-chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#FF6B35" fillOpacity="0.12" />
              <path d="M7 17V10.5C7 8.567 8.567 7 10.5 7h0C12.433 7 14 8.567 14 10.5V17M7 13.5h7M14 17V12c0-1.657 1.343-3 3-3h0" stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="tool-logo-label">Ahrefs</span>
          </div>

          {/* Google Search Console */}
          <div className="tool-logo-chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#4285F4" fillOpacity="0.12" />
              <circle cx="11" cy="11" r="4.5" stroke="#4285F4" strokeWidth="1.8" />
              <path d="M14.5 14.5L18 18" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M11 8.5v5M8.5 11h5" stroke="#4285F4" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="tool-logo-label">Google Search Console</span>
          </div>

          {/* GA4 */}
          <div className="tool-logo-chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#F9AB00" fillOpacity="0.12" />
              <rect x="6" y="14" width="3.5" height="4" rx="1" fill="#F9AB00" />
              <rect x="10.25" y="10" width="3.5" height="8" rx="1" fill="#E37400" />
              <rect x="14.5" y="6" width="3.5" height="12" rx="1" fill="#F9AB00" />
            </svg>
            <span className="tool-logo-label">GA4</span>
          </div>

          {/* AI Brand Radar */}
          <div className="tool-logo-chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#0F766E" fillOpacity="0.10" />
              <circle cx="12" cy="12" r="3" stroke="#0F766E" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="6" stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="12" cy="12" r="1.2" fill="#0F766E" />
              <path d="M12 5V7M12 17V19M5 12H7M17 12H19" stroke="#0F766E" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="tool-logo-label">AI Brand Radar</span>
          </div>

          {/* AI Engine Monitoring */}
          <div className="tool-logo-chip">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#7C3AED" fillOpacity="0.10" />
              <path d="M8 16l2.5-4 2 2.5L15.5 10 18 14" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="7" cy="8" r="2" stroke="#7C3AED" strokeWidth="1.2" />
              <path d="M9 8h3M17 7l-3 2 3 2" stroke="#7C3AED" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="tool-logo-label">AI Engine Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
}
