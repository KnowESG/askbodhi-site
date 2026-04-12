import type { Metadata } from "next";
import { Lora, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import "./components.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://askbodhi.ai"),
  title: {
    default: "AskBodhi — AI-Led Growth for Forward-Thinking Companies",
    template: "%s | AskBodhi",
  },
  description:
    "AskBodhi helps companies grow through AI-led SEO, Generative Engine Optimization, custom AI engines, and digital diagnostics. Based in the Netherlands, serving globally.",
  authors: [{ name: "RM", url: "https://askbodhi.ai" }],
  creator: "AskBodhi",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${lora.variable} ${geistMono.variable} ${instrumentSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
