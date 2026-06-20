import type { Metadata } from "next";
import Link from "next/link";
import { FinalScene } from "@/components/illustration/FinalScene";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "You're In",
  description: "You're on The Nightly Explorers waitlist.",
  path: "/welcome",
  noIndex: true,
});

export default function WelcomePage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-forest-night via-forest-deep to-[#04100a] py-[150px]">
      <div className="absolute inset-0 opacity-55" aria-hidden="true">
        <FinalScene />
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-[560px] px-6 text-center">
        <p className="eyebrow mx-auto justify-center">you&apos;re on the list</p>
        <h1 className="mt-4 font-display text-[clamp(30px,4.6vw,46px)] font-semibold text-moonbeam">
          Welcome to the Adventure. 🏮
        </h1>
        <p className="mx-auto mt-[18px] max-w-[460px] text-[17px] leading-relaxed text-moonbeam/78">
          Your first night&apos;s conversation, challenge, and story are on
          their way. Keep an eye on your inbox — the path to the castle
          starts soon.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full border border-moonbeam/35 bg-moonbeam/5 px-7 py-3.5 text-[15.5px] font-bold text-moonbeam transition-all hover:bg-moonbeam/10 hover:border-moonbeam/60"
        >
          Back to the beginning
        </Link>
      </div>
    </section>
  );
}
