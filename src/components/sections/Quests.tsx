import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Treeline } from "@/components/ui/Treeline";
import { QUEST_TRAITS } from "@/lib/constants";

export function Quests() {
  return (
    <section id="quests" className="relative bg-forest-night py-[110px]">
      <Treeline fill="#0D2A16" />
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="52 weeks. 52 quests."
            title="Every week, a new character to grow."
            lede="One trait at a time, families move through a full year of quests — each one earning its place in your child's collection."
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {QUEST_TRAITS.map((trait) => (
              <div
                key={trait.name}
                className="group rounded-2xl border border-moonbeam/[0.14] bg-gradient-to-br from-moonbeam/[0.07] to-moonbeam/[0.02] px-3.5 py-[22px] text-center transition-all hover:-translate-y-1 hover:border-amber-light hover:bg-amber-glow/10"
              >
                <div
                  className="mx-auto mb-3 flex h-[50px] w-[46px] items-center justify-center bg-gradient-to-br from-amber-light to-amber-glow text-[19px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.35),0_6px_16px_-6px_rgba(0,0,0,0.5)]"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 18%, 100% 65%, 50% 100%, 0% 65%, 0% 18%)",
                  }}
                >
                  {trait.icon}
                </div>
                <h5 className="font-display text-[14.5px] font-semibold text-moonbeam">
                  {trait.name}
                </h5>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-[14px] font-semibold text-moonbeam/60">
            …and 44 more quests across a full 52-week journey.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
