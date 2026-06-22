import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ContentRenderer } from "@/components/blog/ContentRenderer";
import { FaqSection } from "@/components/blog/FaqSection";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { Treeline } from "@/components/ui/Treeline";
import { categoryToSlug, getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/posts";
import { buildMetadata } from "@/lib/seo";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Blog", description: "", path: "/blog" });

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <ArticleJsonLd post={post} />

      <section className="relative bg-forest-night py-[120px]">
        <div className="mx-auto w-full max-w-[760px] px-6 text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${categoryToSlug(category)}`}
                className="rounded-full border border-moonbeam/30 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-amber-light hover:border-moonbeam/60"
              >
                {category}
              </Link>
            ))}
          </div>
          <h1 className="font-display text-[clamp(28px,4.4vw,46px)] font-semibold leading-tight text-moonbeam">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-2 text-[13px] font-semibold text-moonbeam/60">
            <span>{post.author.name}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[80px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-[680px] px-6">
          <ContentRenderer blocks={post.content} />
          <FaqSection faqs={post.faqs} />

          <AuthorBio author={post.author} />

          <RelatedArticles posts={relatedPosts} />

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-[14px] font-bold text-river-blue underline underline-offset-2"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
