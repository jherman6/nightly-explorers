import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE.name} — Raise Kind, Curious & Confident Kids, One Evening at a Time`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D2A16",
          backgroundImage:
            "radial-gradient(circle at 62% 35%, rgba(196,123,31,0.35), transparent 55%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              border: "3px solid #C47B1F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
            }}
          >
            🏮
          </div>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#F2E8C9",
              letterSpacing: "-0.01em",
            }}
          >
            {SITE.name}
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#F2E8C9",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: "920px",
          }}
        >
          Raise Kind, Curious &amp; Confident Kids — One Evening at a Time.
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "26px",
            color: "rgba(242,232,201,0.75)",
            textAlign: "center",
          }}
        >
          A nightly family ritual built around conversation, challenge &amp; story.
        </div>
      </div>
    ),
    { ...size }
  );
}
