import { ArticleCard } from "@/components/blog/ArticleCard";
import type { BlogPost } from "@/lib/blog/types";

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-14">
      <h2 className="font-display text-[22px] font-semibold text-forest-night">
        Keep exploring
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
