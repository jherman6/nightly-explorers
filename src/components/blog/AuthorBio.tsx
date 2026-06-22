import Link from "next/link";
import type { Author } from "@/lib/blog/types";

export function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="mt-12 flex gap-4 rounded-brand border border-forest-night/[0.08] bg-explorer-green/[0.05] p-6">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest-night font-display text-lg font-semibold text-moonbeam">
        {author.name.charAt(0)}
      </div>
      <div>
        <p className="font-display text-[15.5px] font-semibold text-forest-night">
          Written by {author.name}
        </p>
        <p className="text-[13px] font-bold uppercase tracking-wide text-amber-glow">
          {author.role}
        </p>
        <p className="mt-2 text-[14px] leading-relaxed text-[#445848]">{author.bio}</p>
        <Link
          href="/about"
          className="mt-2 inline-block text-[13.5px] font-bold text-river-blue underline underline-offset-2"
        >
          Read our story →
        </Link>
      </div>
    </div>
  );
}
