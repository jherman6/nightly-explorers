import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Treeline } from "@/components/ui/Treeline";
import { SAMPLE_ADVENTURE } from "@/lib/constants";

export function SampleAdventure() {
  return (
    <section id="sample" className="relative bg-moonbeam py-[110px]">
      <Treeline fill="#F2E8C9" />
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <SectionHeading
            eyebrow="step inside a week"
            title="This week's quest: Kindness"
            lede="Here's exactly what one night of the adventure looks like, start to finish."
          />

          <div className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {SAMPLE_ADVENTURE.map((page) => (
              <div
                key={page.tag}
                className="flex min-h-[240px] flex-col rounded-brand border border-forest-night/[0.06] bg-[#fffdf6] p-[28px_22px] shadow-[0_18px_40px_-22px_rgba(13,42,22,0.35)]"
              >
                <span className="mb-3.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-bark-brown">
                  {page.icon} {page.tag}
                </span>
                <h4 className="mb-2.5 font-display text-[18px] font-semibold text-forest-night">
                  {page.title}
                </h4>
                <p className="flex-grow text-[14.5px] leading-relaxed text-[#445848]">
                  {page.body}
                </p>
                <span className="mt-4 text-[12.5px] font-bold text-river-blue">
                  {page.timing}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
