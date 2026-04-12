"use client";

import { useTranslations } from "next-intl";

export default function ProofBar() {
  const t = useTranslations();
  const items = t.raw("proofBar.items") as Array<{ value: string; label: string }>;

  return (
    <section className="w-full border-y" style={{ borderColor: "var(--color-stone-200)", backgroundColor: "var(--color-white)" }}>
      <div className="max-w-6xl mx-auto px-6 py-9 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item) => (
          <div key={item.value} className="px-3">
            <p className="text-[28px] font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-teal)" }}>{item.value}</p>
            <p className="text-[13px] mt-1" style={{ color: "var(--color-stone-400)" }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
