import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Preview and development deployments must never compete with production in search.
const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
    ];
    return [
      {
        source: "/:path*",
        headers: isProduction ? security : [...security, { key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
