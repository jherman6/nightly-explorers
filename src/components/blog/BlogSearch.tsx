"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface SearchablePost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  categories: string[];
}

export function BlogSearch({ posts }: { posts: SearchablePost[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return posts.filter((post) => {
      const haystack = [post.title, post.excerpt, ...post.tags, ...post.categories]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, posts]);

  return (
    <div className="relative">
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles…"
        className="w-full rounded-full border border-forest-night/15 bg-white px-5 py-3 text-[15px] text-forest-night placeholder:text-[rgba(13,42,22,0.45)] focus:border-amber-glow focus:outline-none"
      />

      {query.trim() ? (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-80 overflow-y-auto rounded-brand border border-forest-night/10 bg-white shadow-[0_18px_40px_-22px_rgba(13,42,22,0.35)]">
          {results.length === 0 ? (
            <p className="p-4 text-[14px] text-[#445848]">
              No articles match &ldquo;{query}&rdquo; yet.
            </p>
          ) : (
            <ul>
              {results.map((post) => (
                <li key={post.slug} className="border-b border-forest-night/5 last:border-b-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block p-4 text-[14.5px] font-semibold text-forest-night hover:bg-forest-night/[0.04]"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
