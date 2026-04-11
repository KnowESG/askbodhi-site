import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Traffic Diagnostic",
  description:
    "Request a free traffic architecture breakdown from AskBodhi. We'll show you what percentage of your organic traffic actually drives revenue.",
  alternates: { canonical: "https://askbodhi.ai/contact" },
  openGraph: {
    title: "Get a Free Traffic Diagnostic | AskBodhi",
    description:
      "We'll show you what percentage of your organic traffic actually drives revenue. Free diagnostic for qualifying companies.",
    url: "https://askbodhi.ai/contact",
  },
  twitter: {
    title: "Get a Free Traffic Diagnostic | AskBodhi",
    description:
      "We'll show you what percentage of your organic traffic actually drives revenue.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
