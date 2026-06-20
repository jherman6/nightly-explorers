import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 18, 2026">
      <p>
        This Privacy Policy explains how {SITE.name} (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
        information when you visit {SITE.url} (the &ldquo;Site&rdquo;) or
        join our waitlist. By using the Site, you agree to the practices
        described here.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in a few ways:</p>
      <ul>
        <li>
          <strong>Information you provide directly:</strong> your first
          name and email address when you join the waitlist, and your
          name, email address, and message when you use our contact form.
        </li>
        <li>
          <strong>Payment information:</strong> if you choose to start a
          subscription, payment is processed by Stripe, Inc. We do not
          collect or store your full card number on our servers — Stripe
          handles that directly and shares with us only what&apos;s needed
          to manage your subscription (such as your subscription status).
        </li>
        <li>
          <strong>Usage data:</strong> standard technical information such
          as IP address, browser type, device type, and pages visited,
          collected automatically through cookies and similar
          technologies. See our{" "}
          <Link href="/cookies">Cookie Policy</Link> for details.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To send you waitlist updates and information about our launch</li>
        <li>To respond to messages submitted through our contact form</li>
        <li>To process payments and manage subscriptions, if you become a customer</li>
        <li>To understand how visitors use the Site and improve it</li>
        <li>To detect, prevent, and address fraud, abuse, or security issues</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. Children&apos;s Privacy</h2>
      <p>
        {SITE.name} is a service designed for and directed at parents and
        adult caregivers. The Site and waitlist are not directed at
        children, and we do not knowingly collect personal information
        from children under 13. If we learn that a child under 13 has
        provided us with personal information without parental consent,
        we will delete it. If you believe a child has provided us with
        information, please contact us using the details below.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>
      <ul>
        <li>
          Service providers who help us operate the Site (for example,
          email delivery, hosting, analytics, and payment processing)
        </li>
        <li>Professional advisors, where necessary for legal or financial purposes</li>
        <li>
          Law enforcement or other parties when required by law or to
          protect our rights, users, or the public
        </li>
        <li>A successor entity in the event of a merger, acquisition, or sale of assets</li>
      </ul>

      <h2>5. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to operate the Site and
        understand how it&apos;s used. You can control cookies through
        your browser settings. See our{" "}
        <Link href="/cookies">Cookie Policy</Link> for more detail.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information for as long as needed to provide
        our services, comply with legal obligations, resolve disputes,
        and enforce our agreements. Waitlist entries are retained until
        you ask us to delete them or until our service launches and you
        either convert to a customer or unsubscribe.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on where you live, you may have rights to access,
        correct, delete, or export your personal information, or to
        object to or restrict certain processing. To exercise any of
        these rights, contact us using the details below and we will
        respond within a reasonable timeframe.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We use reasonable administrative, technical, and physical
        safeguards to protect your information. No method of transmission
        or storage is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>9. International Users</h2>
      <p>
        If you access the Site from outside the United States, your
        information may be transferred to and processed in the United
        States or other countries that may have different data
        protection laws than your own.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post
        the updated version on this page and revise the &ldquo;Last
        updated&rdquo; date above.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        Questions about this Privacy Policy? Reach out through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <p className="text-[13px] text-[#445848]">
        This page is provided as a general-purpose template and does not
        constitute legal advice. We recommend having it reviewed by a
        qualified attorney before launch to ensure it fits your specific
        business and complies with applicable law (including COPPA, GDPR,
        and CCPA where relevant).
      </p>
    </LegalLayout>
  );
}
