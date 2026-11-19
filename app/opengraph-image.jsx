import { ImageResponse } from "next/og";

export const alt = "MwegaTech: Better systems. Better business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#0A1020", color: "#F3EFE6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 44, letterSpacing: 10, fontWeight: 700 }}>
          <svg width="64" height="64" viewBox="0 0 32 32"><path d="M5 25V8l11 11L27 8v17" fill="none" stroke="#F3EFE6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="16" cy="19" r="2.6" fill="#5FD4C4" /></svg>
          MWEGATECH
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, lineHeight: 1.05, fontWeight: 700, maxWidth: 960 }}>Better systems. Better business.</div>
          <div style={{ fontSize: 34, color: "#B8C0D6" }}>Business systems consultancy for established founders</div>
        </div>
      </div>
    ),
    size
  );
}
