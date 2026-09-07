import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 40%, rgba(227,30,36,0.35), transparent 60%), linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -2,
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#e31e24" }}>Bro</span>
          <span style={{ color: "#ffffff" }}>former</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "rgba(255,255,255,0.65)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          The Global Home of Men&apos;s Reformer Pilates
        </div>
      </div>
    ),
    { ...size }
  );
}
