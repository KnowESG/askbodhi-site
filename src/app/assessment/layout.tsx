import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "Take the AskBodhi AI Readiness Assessment. Get a scored report across 5 dimensions — search visibility, AI readiness, technical foundation, content strategy, and competitive position.",
  alternates: { canonical: "https://askbodhi.com/assessment" },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
