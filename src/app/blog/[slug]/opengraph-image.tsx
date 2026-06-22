import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog/posts";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? SITE.name;
  const category = post?.categories[0] ?? "The Nightly Explorers";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0D2A16",
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(196,123,31,0.3), transparent 55%)",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#C47B1F",
            marginBottom: "26px",
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#F2E8C9",
            lineHeight: 1.2,
            maxWidth: "960px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "24px",
            color: "rgba(242,232,201,0.65)",
          }}
        >
          {SITE.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
