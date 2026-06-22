export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  focusKeyword: string;
  secondaryKeywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured?: boolean;
  author: Author;
  content: ContentBlock[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}
