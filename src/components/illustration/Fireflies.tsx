"use client";

import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  left: number;
  top: number;
  pulseDuration: number;
  floatDuration: number;
  delay: number;
}

function createFireflies(count: number): Firefly[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: 5 + Math.random() * 90,
    top: 35 + Math.random() * 60,
    pulseDuration: 2.5 + Math.random() * 3,
    floatDuration: 4 + Math.random() * 5,
    delay: Math.random() * 5,
  }));
}

export function Fireflies() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const count = window.innerWidth < 700 ? 10 : 18;
    setFireflies(createFireflies(count));
  }, []);

  if (fireflies.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
      {fireflies.map((f) => (
        <span
          key={f.id}
          className="firefly-dot absolute h-1 w-1 rounded-full bg-amber-light"
          style={
            {
              left: `${f.left}%`,
              top: `${f.top}%`,
              boxShadow: "0 0 8px 2px rgba(224,162,74,0.9)",
              animationDuration: `${f.pulseDuration}s, ${f.floatDuration}s`,
              animationDelay: `${f.delay}s, ${f.delay}s`,
              animationName: "firefly-pulse, firefly-float",
              animationIterationCount: "infinite, infinite",
              animationTimingFunction: "ease-in-out, ease-in-out",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
