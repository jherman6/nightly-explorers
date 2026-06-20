import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of ${SITE.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 18, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
        and use of {SITE.url} and any related services offered by{" "}
        {SITE.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;). By using the Site, you agree to these Terms. If
        you do not agree, please do not use the Site.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        Our Site and waitlist are intended for parents and adult
        caregivers who are at least 18 years old. By using the Site, you
        confirm that you meet this requirement.
      </p>

      <h2>2. The Waitlist and Service</h2>
      <p>
        Joining the waitlist reserves your place to be notified when{" "}
        {SITE.name} launches. It does not guarantee access, pricing, or
        availability, and we may change the features, content, or
        structure of the service before launch.
      </p>

      <h2>3. Subscriptions, Billing &amp; Free Trial</h2>
      <ul>
        <li>
          Where offered, new subscriptions may include a free trial
          period (such as 7 days). Unless you cancel before the trial
          ends, your subscription will automatically convert to a paid
          plan and your payment method will be charged.
        </li>
        <li>
          Subscriptions automatically renew at the end of each billing
          period until canceled. You can cancel at any time through your
          account settings or by contacting us; cancellation takes effect
          at the end of the current billing period.
        </li>
        <li>
          Payments are processed by Stripe, Inc. By subscribing, you also
          agree to Stripe&apos;s terms governing the payment process.
        </li>
        <li>
          Except where required by law, fees are non-refundable once a
          billing period has begun.
        </li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site for any unlawful purpose or in violation of these Terms</li>
        <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
        <li>Interfere with or disrupt the operation of the Site</li>
        <li>Copy, resell, or redistribute our content without permission</li>
        <li>Use automated means to scrape or extract data from the Site without our consent</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on the Site — including text, stories, illustrations,
        the {SITE.name} name and logo, and the overall design — is owned
        by us or our licensors and is protected by copyright, trademark,
        and other laws. You may not use our content or branding without
        prior written permission.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        The Site and any future service are provided &ldquo;as is&rdquo;
        and &ldquo;as available,&rdquo; without warranties of any kind,
        express or implied. We do not guarantee that the Site will be
        uninterrupted, error-free, or secure. Our content is intended to
        support family connection and is not a substitute for
        professional parenting, medical, psychological, or educational
        advice.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.name} and its
        founders, employees, and partners will not be liable for any
        indirect, incidental, special, consequential, or punitive
        damages arising from your use of the Site, even if we have been
        advised of the possibility of such damages.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from any claims,
        damages, or expenses arising from your use of the Site or
        violation of these Terms.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your access to the Site at any time
        if we believe you have violated these Terms.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        Site after changes take effect means you accept the updated
        Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the United States and the
        state in which {SITE.name} is registered, without regard to
        conflict-of-law principles.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions about these Terms? Reach out through our{" "}
        <Link href="/contact">contact page</Link>.
      </p>

      <p className="text-[13px] text-[#445848]">
        This page is provided as a general-purpose template and does not
        constitute legal advice. We recommend having it reviewed by a
        qualified attorney before launch, especially around subscription
        billing language, which varies by state and country.
      </p>
    </LegalLayout>
  );
}
