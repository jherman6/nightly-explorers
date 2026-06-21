"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

interface StoryRevealProps {
  teaser: ReactNode;
  rest: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
}

export function StoryReveal({
  teaser,
  rest,
  expandLabel = "Read My Story",
  collapseLabel = "Show Less",
}: StoryRevealProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div>{teaser}</div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="full-story"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {rest}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mt-6 inline-flex items-center gap-2 font-display text-[16px] font-semibold text-amber-glow underline-offset-4 transition-colors hover:text-bark-brown hover:underline"
      >
        {expanded ? collapseLabel : expandLabel}
        <span aria-hidden="true" className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>
    </div>
  );
}
