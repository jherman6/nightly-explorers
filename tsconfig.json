import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: `How ${SITE.name} uses cookies and similar technologies.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="June 18, 2026">
      <p>
        This Cookie Policy explains how {SITE.name} uses cookies and
        similar technologies when you visit {SITE.url}.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device that help
        websites function, remember preferences, and understand how
        visitors use them.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li>
          <strong>Essential cookies:</strong> required for the Site to
          function properly, such as remembering your progress through a
          form.
        </li>
        <li>
          <strong>Analytics cookies:</strong> help us understand how
          visitors use the Site so we can improve it (for example, which
          pages are most visited).
        </li>
        <li>
          <strong>Payment cookies:</strong> set by Stripe during checkout
          to securely process payments and prevent fraud.
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third parties we work with, such as
        Stripe (payment processing) and analytics providers. These
        third parties have their own privacy and cookie policies, which
        we encourage you to review.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        Most browsers let you control cookies through their settings,
        including blocking or deleting them. Note that disabling certain
        cookies may affect how the Site functions, including your ability
        to complete a purchase.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. We will post
        the updated version on this page and revise the &ldquo;Last
        updated&rdquo; date above.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Questions about our use of cookies? Reach out through our{" "}
        <Link href="/contact">contact page</Link>. You can also read our{" "}
        <Link href="/privacy">Privacy Policy</Link> for more on how we
        handle data generally.
      </p>

      <p className="text-[13px] text-[#445848]">
        This page is provided as a general-purpose template and does not
        constitute legal advice. If you serve visitors in the EU/UK or
        other regions with specific cookie-consent requirements, you
        should add a consent banner and have this policy reviewed by a
        qualified attorney.
      </p>
    </LegalLayout>
  );
}
