import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full border-t mt-auto"
      style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-stone-100)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-charcoal)" }}
            >
              AskBodhi
            </p>
            <p className="text-sm" style={{ color: "var(--color-stone-400)" }}>
              Your company deserves to be found — by humans and AI.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-stone-400)" }}
            >
              Services
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link href="/#services" className="text-sm no-underline" style={{ color: "var(--color-stone-600)" }}>
                  SEO & GEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm no-underline" style={{ color: "var(--color-stone-600)" }}>
                  Traffic Architecture Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm no-underline" style={{ color: "var(--color-stone-600)" }}>
                  Custom AI Engines
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm no-underline" style={{ color: "var(--color-stone-600)" }}>
                  AI-First Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-stone-400)" }}
            >
              Contact
            </p>
            <p className="text-sm" style={{ color: "var(--color-stone-600)" }}>
              <a href="mailto:info@askbodhi.ai" className="no-underline" style={{ color: "var(--color-stone-600)" }}>info@askbodhi.ai</a>
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--color-stone-400)" }}>
              Netherlands &middot; Serving globally
            </p>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center"
          style={{ borderColor: "var(--color-stone-200)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-stone-400)" }}>
            &copy; {new Date().getFullYear()} AskBodhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
