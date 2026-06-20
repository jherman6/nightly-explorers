import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Treeline } from "@/components/ui/Treeline";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="benefits" className="relative bg-forest-night py-[110px]">
      <Treeline fill="#0D2A16" />
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="why families stay"
            title="Small evenings. Big becoming."
          />

          <div className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-brand border border-moonbeam/[0.12] bg-moonbeam/[0.05] p-[24px_22px] transition-all hover:-translate-y-[3px] hover:border-amber-glow/50 hover:bg-amber-glow/[0.08]"
              >
                <div className="mt-0.5 flex-shrink-0 text-[21px] leading-none">
                  {benefit.icon}
                </div>
                <div>
                  <h5 className="mb-1.5 font-display text-[16.5px] font-semibold text-moonbeam">
                    {benefit.title}
                  </h5>
                  <p className="text-[14px] leading-relaxed text-moonbeam/70">
                    {benefit.description}
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
