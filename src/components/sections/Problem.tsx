import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEM_POINTS } from "@/lib/constants";

export function Problem() {
  return (
    <section id="problem" className="relative bg-forest-night py-[110px]">
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="before the adventure begins"
            title="Bedtime has lost its magic."
            lede="Parents want to raise great kids — but real connection keeps slipping through the cracks of busy schedules, glowing screens, and rushed routines. The minutes are there. What's missing is a simple way to use them."
          />

          <div className="mt-14 grid gap-[18px] sm:grid-cols-2">
            {PROBLEM_POINTS.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 rounded-brand border border-[rgba(242,232,201,0.12)] bg-[rgba(242,232,201,0.05)] p-[26px_24px]"
              >
                <div className="mt-0.5 text-[22px] leading-none">{point.icon}</div>
                <div>
                  <h4 className="mb-1.5 font-display text-[17px] font-semibold text-moonbeam">
                    {point.title}
                  </h4>
                  <p className="text-[14.5px] leading-relaxed text-[rgba(242,232,201,0.68)]">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
