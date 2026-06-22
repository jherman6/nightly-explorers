import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-brand border border-forest-night/[0.08] bg-white p-6 shadow-[0_14px_32px_-22px_rgba(13,42,22,0.3)] transition-transform hover:-translate-y-1"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.categories.map((category) => (
          <span
            key={category}
            className="rounded-full bg-explorer-green/10 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-explorer-green"
          >
            {category}
          </span>
        ))}
      </div>
      <h3 className="font-display text-[19px] font-semibold leading-snug text-forest-night group-hover:underline">
        {post.title}
      </h3>
      <p className="mt-3 flex-grow text-[14.5px] leading-relaxed text-[#445848]">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[12.5px] font-semibold text-[rgba(13,42,22,0.55)]">
        <span>{post.author.name}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
