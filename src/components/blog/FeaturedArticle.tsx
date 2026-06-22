import Link from "next/link";
import type { BlogPost } from "@/lib/blog/types";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-brand border border-forest-night/[0.08] bg-forest-night p-9 transition-transform hover:-translate-y-1 sm:p-12"
    >
      <p className="eyebrow mb-4 text-amber-light">featured article</p>
      <h2 className="max-w-[680px] font-display text-[clamp(24px,3.4vw,36px)] font-semibold leading-tight text-moonbeam group-hover:underline">
        {post.title}
      </h2>
      <p className="mt-4 max-w-[600px] text-[15.5px] leading-relaxed text-[rgba(242,232,201,0.78)]">
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[rgba(242,232,201,0.6)]">
        <span>{post.author.name}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
