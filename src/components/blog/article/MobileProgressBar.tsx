"use client";

import { useArticleProgress } from "@/lib/blog/useArticleProgress";

interface MobileProgressBarProps {
  articleElementId: string;
  headingIds: string[];
}

export function MobileProgressBar({ articleElementId, headingIds }: MobileProgressBarProps) {
  const { progress } = useArticleProgress(articleElementId, headingIds);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 z-[75] h-1 min-[1180px]:hidden"
      style={{ top: "var(--nav-h)", background: "rgba(8,27,15,0.5)" }}
    >
      <div
        className="h-full transition-[width] duration-100 ease-linear"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #C47B1F, #E0A24A)",
          boxShadow: "0 0 8px rgba(196,123,31,0.7)",
        }}
      />
    </div>
  );
}
