import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { ContentRenderer } from "@/components/blog/ContentRenderer";
import { FaqSection } from "@/components/blog/FaqSection";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleSidebarLeft } from "@/components/blog/article/ArticleSidebarLeft";
import { ArticleSidebarRight } from "@/components/blog/article/ArticleSidebarRight";
import { Breadcrumb } from "@/components/blog/article/Breadcrumb";
import { MobileProgressBar } from "@/components/blog/article/MobileProgressBar";
import { TocAccordion } from "@/components/blog/article/TocAccordion";
import { Treeline } from "@/components/ui/Treeline";
import { getTraitsByNames } from "@/lib/constants";
import {
  categoryToSlug,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  getTocItems,
  splitLede,
} from "@/lib/blog/posts";
import { buildMetadata } from "@/lib/seo";

const ARTICLE_ELEMENT_ID = "article-main";

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
  const tocItems = getTocItems(post.content);
  const headingIds = tocItems.map((item) => item.id);
  const sidebarTraits = getTraitsByNames(post.characterTraits ?? []);
  const primaryCategory = post.categories[0] ?? "Blog";
  const { lede, rest } = splitLede(post.content);

  return (
    <>
      <ArticleJsonLd post={post} />
      <MobileProgressBar articleElementId={ARTICLE_ELEMENT_ID} headingIds={headingIds} />

      <Breadcrumb category={primaryCategory} title={post.title} />

      <section
        className="relative pb-14 pt-7 text-center"
        style={{ background: "linear-gradient(180deg, #0D2A16 0%, #081B0F 100%)" }}
      >
        <div className="mx-auto w-full max-w-[760px] px-6">
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

      <section className="relative bg-moonbeam pb-24">
        <Treeline fill="#F2E8C9" />

        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-0 px-6 pt-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-start md:gap-11 md:pt-12 min-[1180px]:grid-cols-[260px_minmax(0,760px)_300px] min-[1180px]:justify-center min-[1180px]:gap-12">
          <ArticleSidebarLeft
            articleElementId={ARTICLE_ELEMENT_ID}
            tocItems={tocItems}
            readingTime={post.readingTime}
            category={primaryCategory}
            traits={sidebarTraits}
          />

          <main id={ARTICLE_ELEMENT_ID} className="min-w-0">
            <TocAccordion tocItems={tocItems} />

            {lede.map((block, i) =>
              block.type === "p" ? (
                <p
                  key={`lede-${i}`}
                  className={`text-[18.5px] leading-[1.7] text-[#3a4a3d] ${i > 0 ? "mt-[18px]" : ""}`}
                >
                  {block.text}
                </p>
              ) : null
            )}

            <ContentRenderer blocks={rest} />
            <FaqSection faqs={post.faqs} />

            <AuthorBio author={post.author} />

            <RelatedArticles posts={relatedPosts} />

            <p className="mt-[18px] text-[12.5px] font-bold text-[rgba(13,42,22,0.45)]">
              Published{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · Last updated{" "}
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <div className="mt-9">
              <Link
                href="/blog"
                className="text-[14px] font-bold text-river-blue underline underline-offset-2"
              >
                ← Back to all articles
              </Link>
            </div>
          </main>

          <ArticleSidebarRight relatedPosts={relatedPosts} questChipTraits={sidebarTraits} />
        </div>
      </section>
    </>
  );
}
