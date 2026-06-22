import { SITE } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog/types";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const url = `${SITE.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: `${url}/opengraph-image`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          name: post.author.name,
          description: post.author.bio,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        keywords: [post.focusKeyword, ...post.secondaryKeywords].join(", "),
        articleSection: post.categories.join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
