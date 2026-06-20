import { FinalScene } from "@/components/illustration/FinalScene";
import { Treeline } from "@/components/ui/Treeline";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export function FinalCTA() {
  return (
    <section
      id="final"
      className="relative overflow-hidden bg-gradient-to-b from-forest-night via-forest-deep to-[#04100a] py-[110px]"
    >
      <Treeline fill="#0D2A16" />
      <div className="absolute inset-0 opacity-55" aria-hidden="true">
        <FinalScene />
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-[640px] px-6 text-center">
        <p className="eyebrow mb-3.5 justify-center">the castle is closer than it looks</p>
        <h2 className="font-display text-[clamp(30px,4.6vw,48px)] font-semibold text-moonbeam">
          Tonight&apos;s Adventure Starts Here.
        </h2>
        <p className="mx-auto mt-[18px] mb-9 max-w-[480px] text-[17px] text-moonbeam/78">
          Small moments. Strong character. Lifelong memories.
        </p>

        <WaitlistForm source="final-cta" className="mx-auto max-w-[480px]" />

        <p className="mt-4 text-[13px] text-moonbeam/55">
          Your first night&apos;s conversation, challenge, and story are
          already waiting.
        </p>
      </div>
    </section>
  );
}
