import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-moonbeam" : "text-forest-night";
  const ledeColor = tone === "dark" ? "text-moonbeam/78" : "text-[#445848]";
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={alignClass}>
      <p className="eyebrow mb-3.5">{eyebrow}</p>
      <h2
        className={`font-display font-semibold leading-[1.08] tracking-[-0.01em] text-[clamp(28px,4.2vw,44px)] max-w-[680px] ${titleColor} ${alignClass}`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-[560px] text-[clamp(16px,1.6vw,18.5px)] leading-relaxed ${ledeColor} ${alignClass}`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
