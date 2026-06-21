import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "AI Content Policy",
  description: `How ${SITE.name} uses (and doesn't use) artificial intelligence in our content and product.`,
  path: "/ai-policy",
});

export default function AIPolicyPage() {
  return (
    <LegalLayout title="AI Content Policy" lastUpdated="June 18, 2026">
      <p>
        Because {SITE.name} creates content for families, we want to be
        clear and upfront about where artificial intelligence (AI) is and
        isn&apos;t involved in what we make. This policy explains our
        approach and will evolve as our tools and practices do.
      </p>

      <h2>1. Our Approach</h2>
      <p>
        We use AI tools as an aid in our creative and operational
        process — for example, to help brainstorm story ideas, draft
        early versions of content, or support behind-the-scenes tasks
        like customer support and site operations. AI is a tool our team
        uses; it is not a replacement for human judgment, and it does not
        operate unsupervised in anything a child or parent experiences.
      </p>

      <h2>2. Human Review of All Content</h2>
      <p>
        Every conversation prompt, challenge, parent insight, and story
        that reaches your family is written or edited and approved by a
        human member of our team before publication. We do not publish
        AI-generated content directly to families without editorial
        review.
      </p>

      <h2>3. What We Don&apos;t Do</h2>
      <ul>
        <li>
          We do not use AI chatbots or generative AI to interact directly
          with children through our product.
        </li>
        <li>
          We do not collect data from children to train AI models.
        </li>
        <li>
          We do not use your family&apos;s personal information or
          private content to train third-party AI models without your
          explicit consent.
        </li>
      </ul>

      <h2>4. AI in Site Operations</h2>
      <p>
        We may use AI-powered tools for tasks like customer support
        triage, internal analytics, or drafting marketing copy that a
        team member reviews before it&apos;s published. These tools may
        process limited operational data (such as the content of a
        support message) in accordance with our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>5. Ongoing Transparency</h2>
      <p>
        As we build out the full {SITE.name} product, we will keep this
        page updated to reflect how AI is used in our development and
        editorial process. If you have questions about a specific piece
        of content or feature, we&apos;re happy to answer them directly.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this AI Content Policy as our tools, practices, or
        applicable regulations evolve. We will revise the &ldquo;Last
        updated&rdquo; date above when we do.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        Questions about how we use AI? Reach out through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <p className="text-[13px] text-[#445848]">
        This page is provided as a general-purpose template. AI
        disclosure norms and regulations are still developing — we
        recommend reviewing this policy periodically (and with legal
        counsel) as your use of AI tools and applicable law evolve.
      </p>
    </LegalLayout>
  );
}
