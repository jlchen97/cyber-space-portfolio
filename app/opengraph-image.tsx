import { ImageResponse } from "next/og";

// Route segment configuration — Next picks these up automatically and emits
// the corresponding <meta property="og:image:*"> tags.
export const alt = "Jian Chen — Mechanical & Robotics Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// On-brand share card. Pure CSS (gradients, dots) — no external assets —
// so the route stays cold-start-friendly and renders identically everywhere.
// If you later want a hand-designed card, drop in `opengraph-image.png`
// (1200x630) next to this file and delete this route.
export default async function OpenGraphImage() {
  const GREEN = "#00e639";
  const SURFACE = "#131313";
  const ON_SURFACE = "#e5e2e1";
  const ON_SURFACE_VARIANT = "#b9ccb2";
  const MUTED = "rgba(229, 226, 225, 0.5)";
  const HAIRLINE = "rgba(229, 226, 225, 0.3)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: SURFACE,
          color: ON_SURFACE,
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Soft cyber-green corner halo (matches landing hero spotlight) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "720px",
            height: "360px",
            background:
              "radial-gradient(ellipse at top left, rgba(0,230,57,0.22), rgba(0,230,57,0.06) 45%, transparent 75%)",
            display: "flex",
          }}
        />

        {/* Subtle grid texture, very low opacity */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(229,226,225,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(229,226,225,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            display: "flex",
          }}
        />

        {/* Top status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: GREEN,
            fontSize: "20px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: GREEN,
              boxShadow: "0 0 16px rgba(0,230,57,0.8)",
              display: "flex",
            }}
          />
          <span>SYSTEMS NOMINAL</span>
        </div>

        {/* Spacer that pushes the name to vertical mid-bottom */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: "168px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          Jian Chen
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "34px",
            color: ON_SURFACE_VARIANT,
            letterSpacing: "0.02em",
          }}
        >
          Here to build the future
        </div>

        {/* Bottom metadata strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "52px",
            color: MUTED,
            fontSize: "20px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span>Mechanical</span>
          <span style={{ color: HAIRLINE, display: "flex" }}>/</span>
          <span>Robotics</span>
          <span style={{ color: HAIRLINE, display: "flex" }}>/</span>
          <span style={{ color: GREEN }}>Seattle, WA</span>
        </div>

        {/* Telemetry marker (bottom-right) — matches the landing hero */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            right: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            color: "rgba(229,226,225,0.4)",
            fontSize: "16px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span>LAT 47.6062° N</span>
          <span>LON 122.3321° W</span>
          <span style={{ color: GREEN, marginTop: "8px", display: "flex" }}>
            ● LINK ESTABLISHED
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
