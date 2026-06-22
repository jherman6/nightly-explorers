import type { Metadata } from "next";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { Treeline } from "@/components/ui/Treeline";
import { getAllCategories, getAllPosts, getFeaturedPost } from "@/lib/blog/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Evidence-based articles on character development, bedtime routines, reading, screen time, and family connection for parents of children ages 2-8.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const categories = getAllCategories();
  const otherPosts = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="relative bg-forest-night py-[150px]">
        <div className="mx-auto w-full max-w-container px-6 text-center">
          <p className="eyebrow mx-auto justify-center">the field notes</p>
          <h1 className="mx-auto mt-4 max-w-[640px] font-display text-[clamp(32px,5vw,52px)] font-semibold text-moonbeam">
            Stories, Research &amp; Real Family Life
          </h1>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] text-moonbeam/78">
            Practical, evidence-based reading on character development, bedtime
            routines, screen time, and raising emotionally healthy kids.
          </p>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[80px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-container px-6">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <CategoryFilter categories={categories} />
            <div className="w-full sm:w-72">
              <BlogSearch posts={posts} />
            </div>
          </div>

          <FeaturedArticle post={featured} />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
