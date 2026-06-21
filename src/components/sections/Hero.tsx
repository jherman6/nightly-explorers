import Link from "next/link";
import { HeroScene } from "@/components/illustration/HeroScene";
import { Fireflies } from "@/components/illustration/Fireflies";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden bg-gradient-to-b from-[#061309] via-forest-deep to-forest-night"
    >
      <div className="absolute inset-0 z-[1]">
        <HeroScene />
      </div>
      <Fireflies />

      <div className="relative z-[5] mx-auto w-full max-w-container px-6 pb-[90px] pt-[146px]">
        <p className="eyebrow mb-0 text-amber-light">a nightly family ritual</p>
        <h1 className="mt-3.5 max-w-[820px] font-display text-[clamp(34px,6vw,68px)] font-semibold leading-[1.08] text-moonbeam [text-shadow:0_6px_40px_rgba(0,0,0,0.35)]">
          Raise Kind, Curious &amp; Confident Kids — One Evening at a Time.
        </h1>
        <p className="mt-[22px] max-w-[540px] text-[clamp(16px,1.8vw,19px)] leading-relaxed text-[rgba(242,232,201,0.82)]">
          Transform bedtime into a meaningful family adventure through
          conversations, character-building activities and short stories.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#final"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-light to-amber-glow px-7 py-3.5 text-[15.5px] font-bold text-[#2a1604] shadow-[0_10px_30px_-8px_rgba(196,123,31,0.65)] transition-all hover:-translate-y-0.5"
          >
            Begin the Adventure
          </Link>
          <Link
            href="/#solution"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(242,232,201,0.35)] bg-[rgba(242,232,201,0.05)] px-7 py-3.5 text-[15.5px] font-bold text-moonbeam transition-all hover:bg-[rgba(242,232,201,0.1)] hover:border-[rgba(242,232,201,0.6)]"
          >
            See How It Works
          </Link>
        </div>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[rgba(242,232,201,0.55)]">
        <span>Scroll</span>
        <span className="h-[26px] w-px animate-cueGrow bg-[rgba(242,232,201,0.45)]" />
      </div>
    </section>
  );
}
