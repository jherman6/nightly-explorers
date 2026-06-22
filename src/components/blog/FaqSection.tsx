"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/blog/types";

export function FaqSection({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-4 divide-y divide-forest-night/10 border-y border-forest-night/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-[16px] font-semibold text-forest-night"
            >
              {faq.question}
              <span aria-hidden="true" className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ↓
              </span>
            </button>
            {isOpen ? (
              <p className="pb-4 text-[14.5px] leading-relaxed text-[#445848]">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
