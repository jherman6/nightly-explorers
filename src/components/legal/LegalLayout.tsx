import type { ReactNode } from "react";
import { Treeline } from "@/components/ui/Treeline";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative bg-forest-night py-[120px]">
        <div className="mx-auto w-full max-w-container px-6 text-center">
          <h1 className="mx-auto max-w-[640px] font-display text-[clamp(30px,4.6vw,46px)] font-semibold text-moonbeam">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-moonbeam/55">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[80px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-[720px] px-6">
          <div className="prose-legal space-y-6 text-[15.5px] leading-[1.75] text-[#2c3b30]">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
