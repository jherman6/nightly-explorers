"use client";

import { useEffect, useRef, useState } from "react";
import { WAYPOINTS } from "@/lib/constants";

export function TrailProgress() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      const docHeight = document.documentElement.scrollHeight;
      const positions = WAYPOINTS.map((wp) => {
        const el = document.getElementById(wp.id);
        if (!el) return 0;
        const max = docHeight - window.innerHeight;
        return max > 0 ? (el.offsetTop / max) * 100 : 0;
      });
      setDotPositions(positions);
    }

    function onScroll() {
      const hero = document.getElementById("hero");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 140 : 0;
      setVisible(window.scrollY > heroBottom);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) * 100 : 0;
      setProgress(pct);
    }

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-x-0 top-[72px] z-[55] h-[34px] border-b border-moonbeam/10 bg-forest-deep/60 backdrop-blur-sm transition-opacity duration-300 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={innerRef}
        className="relative mx-auto h-full w-full max-w-container px-6"
      >
        <div className="absolute left-6 right-6 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-moonbeam/[0.18]" />
        <div
          className="absolute top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-glow to-amber-light shadow-[0_0_10px_rgba(196,123,31,0.7)]"
          style={{
            left: "24px",
            width: `calc(${progress}% * (100% - 48px) / 100%)`,
          }}
        />
        {WAYPOINTS.map((wp, i) => (
          <div
            key={wp.id}
            className={`absolute top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${
              dotPositions[i] !== undefined && dotPositions[i] <= progress
                ? "bg-amber-light"
                : "bg-moonbeam/45"
            }`}
            style={{ left: `calc(24px + ${dotPositions[i] ?? 0}% * (100% - 48px) / 100%)` }}
          />
        ))}
        <div
          className="absolute top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left] duration-150 ease-linear"
          style={{
            left: `calc(24px + ${progress}% * (100% - 48px) / 100%)`,
            background:
              "radial-gradient(circle, #fff6df, #E0A24A 60%, transparent 100%)",
            boxShadow: "0 0 14px 4px rgba(224,162,74,0.85)",
          }}
        />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[13px] opacity-85">
          🏰
        </span>
      </div>
    </div>
  );
}
