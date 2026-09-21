import { ImageResponse } from "next/og";

export const alt = "Support Genius - Shopify App Support";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e1533",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "72px",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "510px",
            height: "510px",
            borderRadius: "999px",
            background: "#ff5a1f",
            opacity: 0.16,
            right: "-155px",
            top: "-195px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "18px", background: "#ff5a1f", fontSize: "35px", fontWeight: 800 }}>S</div>
            <div style={{ display: "flex", fontSize: "39px", fontWeight: 800, letterSpacing: "-2px", marginLeft: "18px" }}>
              <span>Support</span><span style={{ color: "#ff5a1f" }}>Genius</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "850px" }}>
            <div style={{ fontSize: "66px", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-3px" }}>Shopify app support that keeps your team building.</div>
            <div style={{ marginTop: "28px", fontSize: "28px", color: "#c8cfdf", lineHeight: 1.35 }}>Merchant support, onboarding, and technical triage for Shopify app teams.</div>
          </div>
          <div style={{ display: "flex", fontSize: "22px", color: "#ff8a5c" }}>thesupportgenius.com</div>
        </div>
      </div>
    ),
    size,
  );
}
