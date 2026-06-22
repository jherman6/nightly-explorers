import { JOSEPH } from "@/lib/blog/authors";
import { readLearnSingContent } from "@/lib/blog/content/read-learn-sing";
import { screenTimeVsReadingContent } from "@/lib/blog/content/screen-time-vs-reading";
import type { BlogPost } from "@/lib/blog/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "read-learn-sing-stories-conversation-music",
    title:
      "Read, Learn, Sing: Why Combining Stories, Conversation, and Music Helps Young Children Thrive",
    metaTitle:
      "Read, Learn, Sing: How Stories, Talk & Music Help Kids Thrive",
    metaDescription:
      "Why combining bedtime stories, conversation, and music does more for a young child's language, emotional development, and memory than any one alone — explained simply.",
    excerpt:
      "Reading, talking, and singing aren't separate evening activities — research on early childhood development suggests they work best as a combination. Here's the evidence behind why.",
    categories: ["Reading", "Family Connection"],
    tags: [
      "bedtime stories for kids",
      "reading with children",
      "social emotional learning at home",
      "family bonding activities",
    ],
    focusKeyword: "bedtime stories for kids",
    secondaryKeywords: [
      "reading with children",
      "emotional intelligence for kids",
      "meaningful family conversations",
      "child development activities",
    ],
    publishedAt: "2026-05-12",
    updatedAt: "2026-06-02",
    readingTime: "9 min read",
    featured: true,
    author: JOSEPH,
    content: readLearnSingContent,
    faqs: [
      {
        question: "What age should I start reading aloud to my child?",
        answer:
          "Most pediatric and literacy organizations recommend starting from infancy — even before a baby understands the words, hearing your voice and the rhythm of language supports early brain development. The habit matters more than the timing, so it's never too late to start if you haven't yet.",
      },
      {
        question: "Does it matter if I read the same book over and over?",
        answer:
          "Not at all — repetition is genuinely useful. Repeated readings help children notice new details, predict what's coming (which builds comprehension), and move vocabulary into long-term memory. A well-worn favorite is doing real developmental work, not just keeping the peace at bedtime.",
      },
      {
        question: "What if I'm not a confident singer?",
        answer:
          "It doesn't matter to your child. The bonding and language benefits of singing come from the rhythm, repetition, and shared moment, not vocal quality. A simple, off-key lullaby sung consistently does more than a polished recording played on a speaker.",
      },
      {
        question: "How long should our nightly story-conversation-song routine take?",
        answer:
          "There's no minimum threshold in the research — even 10–15 consistent minutes a night is enough to build the habit and capture most of the benefit. Consistency matters more than duration.",
      },
      {
        question: "What's the single best thing I can do if I only have a few minutes?",
        answer:
          "Make it a conversation, not a monologue. Whether you're reading, singing, or just talking, asking a question and genuinely listening to the answer is the ingredient most consistently linked to language and emotional development — more than any specific book or song.",
      },
    ],
    relatedSlugs: ["screen-time-vs-reading-childs-brain"],
  },
  {
    slug: "screen-time-vs-reading-childs-brain",
    title: "Screen Time vs. Reading: What Happens Inside a Child's Brain?",
    metaTitle: "Screen Time vs. Reading: What Happens in a Child's Brain?",
    metaDescription:
      "A balanced, evidence-based look at how screen time and reading differently affect a young child's attention, language, sleep, and emotional development.",
    excerpt:
      "Screen time and reading engage a young child's brain in genuinely different ways — but the honest answer is more nuanced than \"good\" or \"bad.\" Here's what the research actually shows.",
    categories: ["Screen Time", "Child Development"],
    tags: [
      "screen time alternatives",
      "reducing screen time",
      "toddler behavior",
      "preschool emotional development",
    ],
    focusKeyword: "screen time alternatives",
    secondaryKeywords: [
      "reducing screen time",
      "reading comprehension for young children",
      "parenting tips for toddlers",
      "child development activities",
    ],
    publishedAt: "2026-05-26",
    updatedAt: "2026-06-10",
    readingTime: "10 min read",
    featured: false,
    author: JOSEPH,
    content: screenTimeVsReadingContent,
    faqs: [
      {
        question: "Is all screen time bad for young children?",
        answer:
          "No — the research doesn't support a blanket \"bad\" verdict. The clearest concerns are around solo screen time for children under two, very fast-paced content, and screens right before bed. Co-viewed, high-quality content with a parent who talks about it carries far fewer of those concerns.",
      },
      {
        question: "How much screen time is appropriate for a toddler or preschooler?",
        answer:
          "General pediatric guidance suggests minimal to no screen time under 18–24 months (outside video calls), and roughly an hour or less of high-quality programming per day for preschoolers, ideally co-viewed. Treat this as a helpful general guideline rather than a strict rule for every family and situation.",
      },
      {
        question: "Does watching educational shows count differently than entertainment shows?",
        answer:
          "To some degree, yes — content quality matters. But \"educational\" labeling alone doesn't guarantee a show is well-designed for learning. Slower pacing, clear narrative structure, and content a parent can talk about afterward tend to matter more than the educational label itself.",
      },
      {
        question: "Why does my child seem cranky after screen time but not after reading?",
        answer:
          "This is commonly reported by parents, and a reasonable explanation is that fast-paced, highly stimulating content can leave a child overstimulated without having practiced self-soothing, since the screen supplied the excitement and resolution itself. Reading, by contrast, is paced by the child and caregiver, which tends to be easier to wind down from.",
      },
      {
        question: "Is it okay to use screens during stressful moments, like a long car ride?",
        answer:
          "Using a screen occasionally as a practical tool isn't the same as a daily habit, and the research doesn't suggest occasional situational use causes harm. The patterns linked to developmental concerns involve frequent, heavy, solo use — not an occasional screen during a long drive or a sick day.",
      },
    ],
    relatedSlugs: ["read-learn-sing-stories-conversation-music"],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0];
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  BLOG_POSTS.forEach((post) => post.categories.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.categories.some((c) => categoryToSlug(c) === categorySlug)
  );
}

export function getCategoryNameFromSlug(categorySlug: string): string | undefined {
  return getAllCategories().find((c) => categoryToSlug(c) === categorySlug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllPosts().filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      ...post.tags,
      ...post.categories,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
