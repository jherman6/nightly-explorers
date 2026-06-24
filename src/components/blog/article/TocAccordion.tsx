import type { TocItem } from "@/lib/blog/posts";

interface TocAccordionProps {
  tocItems: TocItem[];
}

export function TocAccordion({ tocItems }: TocAccordionProps) {
  if (tocItems.length === 0) return null;

  return (
    <details className="group mb-8 min-[1180px]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-brand border border-[rgba(13,42,22,0.1)] bg-white px-5 py-4 font-display text-[16px] font-semibold text-forest-night [&::-webkit-details-marker]:hidden">
        On this page
        <span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-180">
          ↓
        </span>
      </summary>
      <div className="rounded-b-brand border border-t-0 border-[rgba(13,42,22,0.1)] bg-white px-5 py-1.5 pb-4">
        {tocItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block py-2 text-[14px] font-bold text-[#3a4a3d] ${
              i < tocItems.length - 1 ? "border-b border-[rgba(13,42,22,0.06)]" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </details>
  );
}
