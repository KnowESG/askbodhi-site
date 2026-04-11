import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Traffic Diagnostic",
  description:
    "Request a free traffic architecture breakdown from AskBodhi. We'll show you what percentage of your organic traffic actually drives revenue.",
  alternates: { canonical: "https://askbodhi.com/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
