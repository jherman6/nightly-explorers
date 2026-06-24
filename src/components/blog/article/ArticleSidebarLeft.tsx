"use client";

import Link from "next/link";
import { categoryToSlug } from "@/lib/blog/posts";
import { useArticleProgress } from "@/lib/blog/useArticleProgress";
import type { TocItem } from "@/lib/blog/posts";
import type { QuestTrait } from "@/types";

interface ArticleSidebarLeftProps {
  articleElementId: string;
  tocItems: TocItem[];
  readingTime: string;
  category: string;
  traits: QuestTrait[];
}

export function ArticleSidebarLeft({
  articleElementId,
  tocItems,
  readingTime,
  category,
  traits,
}: ArticleSidebarLeftProps) {
  const headingIds = tocItems.map((item) => item.id);
  const { progress, activeIndex } = useArticleProgress(articleElementId, headingIds);

  return (
    <aside
      className="sticky hidden overflow-y-auto pr-1.5 min-[1180px]:block"
      style={{
        top: "calc(var(--nav-h) + 32px)",
        maxHeight: "calc(100vh - var(--nav-h) - 56px)",
      }}
    >
      <div className="relative pl-[22px]">
        <div className="absolute left-[5px] top-1 bottom-1 w-[2px] rounded-full bg-[rgba(13,42,22,0.12)]" />
        <div
          className="absolute left-[5px] top-1 w-[2px] rounded-full transition-[height] duration-150 ease-linear"
          style={{
            height: `${progress}%`,
            background: "linear-gradient(180deg, #C47B1F, #E0A24A)",
            boxShadow: "0 0 8px rgba(196,123,31,0.5)",
          }}
        />
        <div
          className="absolute left-[5px] h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[top] duration-150 ease-linear"
          style={{
            top: `${progress}%`,
            background: "radial-gradient(circle, #fff6df, #E0A24A 60%, transparent 100%)",
            boxShadow: "0 0 10px 3px rgba(224,162,74,0.8)",
          }}
        />
        <ul className="list-none p-0">
          {tocItems.map((item, i) => {
            const passed = i < activeIndex;
            const active = i === activeIndex;
            return (
              <li key={item.id} className="relative py-[9px] pl-4">
                <span
                  className={`absolute left-[-22px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full transition-colors duration-200 ${
                    passed || active ? "bg-amber-glow" : "bg-[rgba(13,42,22,0.25)]"
                  }`}
                />
                <a
                  href={`#${item.id}`}
                  className={`text-[13.5px] font-bold leading-[1.4] transition-colors duration-200 hover:text-forest-night ${
                    active ? "text-forest-night" : "text-[rgba(13,42,22,0.55)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="my-[22px] h-px bg-[rgba(13,42,22,0.1)]" />

      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-2 text-[13px] font-bold text-forest-night">
          <span className="text-[14px]">⏱</span> {readingTime}
        </div>
        <Link
          href={`/blog/category/${categoryToSlug(category)}`}
          className="inline-block w-fit rounded-full bg-[rgba(62,111,57,0.12)] px-[11px] py-[5px] text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-explorer-green"
        >
          {category}
        </Link>
      </div>

      {traits.length > 0 ? (
        <>
          <div className="my-[22px] h-px bg-[rgba(13,42,22,0.1)]" />
          <p className="mb-[10px] text-[11.5px] font-extrabold uppercase tracking-[0.1em] text-bark-brown">
            Related Character Traits
          </p>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait) => (
              <span
                key={trait.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(13,42,22,0.08)] bg-white py-[6px] pl-2 pr-[11px] text-[12.5px] font-bold text-forest-night shadow-[0_4px_10px_-6px_rgba(13,42,22,0.2)]"
              >
                {trait.icon} {trait.name}
              </span>
            ))}
          </div>
        </>
      ) : null}
    </aside>
  );
}
