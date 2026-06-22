import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Treeline } from "@/components/ui/Treeline";
import { CHECKPOINTS } from "@/lib/constants";

export function Solution() {
  return (
    <section id="solution" className="relative bg-moonbeam py-[110px]">
      <Treeline fill="#F2E8C9" />
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <SectionHeading
            eyebrow="the nightly explorers way"
            title="Four small moments. One meaningful evening."
            lede="Every night follows the same easy rhythm — four checkpoints on that week's theme, each one a few minutes long, each one building on the last."
          />

          <div className="relative mt-16 grid gap-7 md:grid-cols-4 md:gap-[22px]">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-[42px] hidden h-[6px] bg-repeat-x md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #8B5A2B 2.5px, transparent 3px)",
                backgroundSize: "20px 6px",
              }}
            />
            {CHECKPOINTS.map((checkpoint) => (
              <div key={checkpoint.title} className="relative z-[1] text-left">
                <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-glow bg-forest-night text-[21px] text-moonbeam">
                  {checkpoint.icon}
                </div>
                <h4 className="mb-2 font-display text-[19px] font-semibold text-forest-night">
                  {checkpoint.title}
                </h4>
                <p className="text-[14.5px] leading-relaxed text-[#445848]">
                  {checkpoint.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
