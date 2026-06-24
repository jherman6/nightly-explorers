"use client";

import { useEffect, useState } from "react";

interface ArticleProgress {
  /** 0–100 scroll progress through the article body */
  progress: number;
  /** Index into headingIds of the section currently in view, or -1 before the first heading */
  activeIndex: number;
}

/**
 * Tracks scroll progress through the article body (identified by
 * `articleElementId`) and which heading the reader has currently scrolled
 * past, so the left-sidebar trail/TOC and the mobile progress bar can stay
 * in sync without each re-deriving the same scroll math.
 */
export function useArticleProgress(
  articleElementId: string,
  headingIds: string[]
): ArticleProgress {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    function update() {
      const article = document.getElementById(articleElementId);
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;
      const viewportH = window.innerHeight;
      const max = articleHeight - viewportH * 0.5;
      const pct =
        max > 0
          ? Math.min(
              Math.max((window.scrollY - articleTop + viewportH * 0.3) / max, 0),
              1
            ) * 100
          : 0;
      setProgress(pct);

      const scrollPos = window.scrollY + 120;
      let nextActive = -1;
      headingIds.forEach((id, i) => {
        const heading = document.getElementById(id);
        if (heading && heading.offsetTop <= scrollPos) nextActive = i;
      });
      setActiveIndex(nextActive);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
    // headingIds is derived fresh per post render but its contents are stable
    // for the life of the page, so we intentionally key off its length here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleElementId, headingIds.length]);

  return { progress, activeIndex };
}
