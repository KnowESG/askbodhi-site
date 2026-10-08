import { ImageResponse } from "next/og";
import { Mark } from "@/lib/og";

export const dynamic = "force-static";

// 512×512 raster logo for Organization schema (search engines prefer a raster logo).
export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FAFAF9" }}>
        <Mark size={400} />
      </div>
    ),
    { width: 512, height: 512 }
  );
}
