import Link from "next/link";
import { categoryToSlug } from "@/lib/blog/posts";

export function CategoryFilter({
  categories,
  activeCategory,
}: {
  categories: string[];
  activeCategory?: string;
}) {
  return (
    <nav aria-label="Filter articles by category" className="flex flex-wrap gap-2.5">
      <Link
        href="/blog"
        className={`rounded-full px-4 py-2 text-[13.5px] font-bold transition-colors ${
          !activeCategory
            ? "bg-forest-night text-moonbeam"
            : "border border-forest-night/15 text-forest-night hover:bg-forest-night/5"
        }`}
      >
        All
      </Link>
      {categories.map((category) => {
        const slug = categoryToSlug(category);
        const isActive = activeCategory === slug;
        return (
          <Link
            key={category}
            href={`/blog/category/${slug}`}
            className={`rounded-full px-4 py-2 text-[13.5px] font-bold transition-colors ${
              isActive
                ? "bg-forest-night text-moonbeam"
                : "border border-forest-night/15 text-forest-night hover:bg-forest-night/5"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
