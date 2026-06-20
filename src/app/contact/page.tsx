import type { Metadata } from "next";
import { Treeline } from "@/components/ui/Treeline";
import { ContactForm } from "@/components/waitlist/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with The Nightly Explorers.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-forest-night py-[150px]">
        <div className="mx-auto w-full max-w-container px-6 text-center">
          <p className="eyebrow mx-auto justify-center">we&apos;d love to hear from you</p>
          <h1 className="mx-auto mt-4 max-w-[640px] font-display text-[clamp(32px,5vw,52px)] font-semibold text-moonbeam">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-[17px] text-[rgba(242,232,201,0.78)]">
            Questions, partnership ideas, or just want to say hello? Send us
            a note below.
          </p>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[100px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-[560px] px-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
