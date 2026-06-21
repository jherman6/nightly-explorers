import { Reveal } from "@/components/ui/Reveal";
import { Treeline } from "@/components/ui/Treeline";

export function Mission() {
  return (
    <section id="mission" className="relative bg-moonbeam py-[110px]">
      <Treeline fill="#F2E8C9" />
      <div className="mx-auto w-full max-w-container px-6">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow mb-3.5">why we built this</p>
              <h2 className="max-w-[680px] font-display text-[clamp(28px,4.2vw,44px)] font-semibold leading-[1.08] tracking-[-0.01em] text-forest-night">
                Extraordinary character is built in ordinary moments.
              </h2>
              <p className="mt-4 max-w-[560px] text-[clamp(16px,1.6vw,18.5px)] leading-relaxed text-[#445848]">
                We started The Nightly Explorers because the families we
                admired most weren&apos;t doing anything elaborate — they
                were just showing up, a few minutes a night, again and
                again. We wanted to make that easy for every family, not
                just the ones with a knack for it. So we built a simple
                ritual that turns one evening at a time into the kind of
                childhood people remember.
              </p>
            </div>
            <div className="rounded-[24px] bg-forest-night p-[42px_34px]">
              <p className="border-l-[3px] border-amber-glow pl-[22px] font-display text-[clamp(22px,3vw,30px)] italic leading-[1.4] text-moonbeam">
                &ldquo;We&apos;re helping families build the kind of evenings
                their kids will tell their own kids about — one story at a
                time.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
