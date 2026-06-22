import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Treeline } from "@/components/ui/Treeline";
import {
  categoryToSlug,
  getAllCategories,
  getCategoryNameFromSlug,
  getPostsByCategorySlug,
} from "@/lib/blog/posts";
import { buildMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = getCategoryNameFromSlug(category);
  if (!categoryName) return buildMetadata({ title: "Blog", description: "", path: "/blog" });

  return buildMetadata({
    title: `${categoryName} Articles`,
    description: `Evidence-based articles on ${categoryName.toLowerCase()} for parents of children ages 2-8, from The Nightly Explorers.`,
    path: `/blog/category/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = getCategoryNameFromSlug(category);
  if (!categoryName) notFound();

  const posts = getPostsByCategorySlug(category);
  const categories = getAllCategories();

  return (
    <>
      <section className="relative bg-forest-night py-[150px]">
        <div className="mx-auto w-full max-w-container px-6 text-center">
          <p className="eyebrow mx-auto justify-center">category</p>
          <h1 className="mx-auto mt-4 max-w-[640px] font-display text-[clamp(32px,5vw,52px)] font-semibold text-moonbeam">
            {categoryName}
          </h1>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[80px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-container px-6">
          <div className="mb-10">
            <CategoryFilter categories={categories} activeCategory={category} />
          </div>

          {posts.length === 0 ? (
            <p className="text-[15px] text-[#445848]">
              No articles in this category yet — check back soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
