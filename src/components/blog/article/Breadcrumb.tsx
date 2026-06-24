import Link from "next/link";
import { categoryToSlug } from "@/lib/blog/posts";

interface BreadcrumbProps {
  category: string;
  title: string;
}

export function Breadcrumb({ category, title }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative bg-forest-night pt-[calc(var(--nav-h)_+_22px)] pb-[18px]"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-2 px-6 text-[12.5px] font-bold text-[rgba(242,232,201,0.55)]">
        <Link href="/" className="hover:text-moonbeam">
          Home
        </Link>
        <span aria-hidden="true" className="opacity-50">
          /
        </span>
        <Link href="/blog" className="hover:text-moonbeam">
          Blog
        </Link>
        <span aria-hidden="true" className="opacity-50">
          /
        </span>
        <Link href={`/blog/category/${categoryToSlug(category)}`} className="hover:text-moonbeam">
          {category}
        </Link>
        <span aria-hidden="true" className="opacity-50">
          /
        </span>
        <span className="truncate text-[rgba(242,232,201,0.85)]">{title}</span>
      </div>
    </nav>
  );
}
