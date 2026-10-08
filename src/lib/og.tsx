import { ImageResponse } from "next/og";

/*
 * Brand images rendered at build time (no binary files in the repo).
 * Fonts are fetched from Google Fonts; if that fails the image still renders
 * with the default font rather than breaking the build.
 */

async function googleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.85)} viewBox="0 0 315.2 267.6">
      <circle cx="110" cy="110" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="205.2" cy="110" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="157.6" cy="157.6" r="100" fill="#0F766E" fillOpacity="0.08" stroke="#0F766E" strokeOpacity="0.22" strokeWidth="5" />
      <circle cx="157.6" cy="125.9" r="25.7" fill="none" stroke="#14B8A6" strokeWidth="6" />
      <circle cx="157.6" cy="125.9" r="14" fill="#0F766E" />
    </svg>
  );
}

export async function ogImage(copy: { a: string; b: string; sub: string; leaks: string[] }) {
  const display = `AskBodhi.ai${copy.a}${copy.b}`;
  const body = `${copy.sub}`;
  const mono = copy.leaks.join("");
  const [lora, sans, geist] = await Promise.all([
    googleFont("Lora", 700, display),
    googleFont("Instrument Sans", 500, body),
    googleFont("Geist Mono", 500, mono),
  ]);
  const fonts = [
    lora && { name: "Lora", data: lora, weight: 700 as const, style: "normal" as const },
    sans && { name: "Instrument Sans", data: sans, weight: 500 as const, style: "normal" as const },
    geist && { name: "Geist Mono", data: geist, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as Array<{ name: string; data: ArrayBuffer; weight: 500 | 700; style: "normal" }>;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          background: "#FAFAF9", padding: "64px 72px", borderBottom: "10px solid #0F766E",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "Lora", fontSize: 34, color: "#1C1917" }}>
          <Mark size={56} />
          <div style={{ display: "flex" }}>
            AskBodhi<span style={{ color: "#0F766E" }}>.ai</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Lora", fontSize: 96, lineHeight: 1.02, letterSpacing: -2, color: "#1C1917" }}>
            <span>{copy.a}</span>
            <span style={{ color: "#0F766E" }}>{copy.b}</span>
          </div>
          <div style={{ marginTop: 18, fontFamily: "Instrument Sans", fontSize: 30, color: "#44403C" }}>{copy.sub}</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {copy.leaks.map((l) => (
            <div
              key={l}
              style={{
                fontFamily: "Geist Mono", fontSize: 20, color: "#9A3412", background: "#FFF7ED",
                border: "1px solid #FDBA74", borderRadius: 999, padding: "8px 18px",
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts }
  );
}
