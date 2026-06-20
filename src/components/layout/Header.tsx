"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${
        scrolled
          ? "bg-forest-deep/85 backdrop-blur-md shadow-[0_10px_30px_-16px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-container items-center justify-between px-6">
        <Link
          href="/"
          aria-label="The Nightly Explorers home"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-[0.01em] text-moonbeam"
        >
          <svg viewBox="0 0 26 26" fill="none" aria-hidden="true" className="h-[26px] w-[26px]">
            <circle cx="13" cy="13" r="12" stroke="#C47B1F" strokeWidth="1.4" />
            <path
              d="M13 6 L13 13 L17 16"
              stroke="#F2E8C9"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="13" cy="13" r="2.2" fill="#C47B1F" />
          </svg>
          The Nightly Explorers
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-bold text-moonbeam/82 transition-colors hover:text-moonbeam"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#final"
          className="hidden items-center justify-center gap-2.5 rounded-full border border-moonbeam/35 bg-moonbeam/5 px-7 py-3.5 text-[15.5px] font-bold text-moonbeam transition-all hover:bg-moonbeam/10 hover:border-moonbeam/60 md:inline-flex"
        >
          Begin the Adventure
        </Link>

        <Link
          href="/#final"
          className="inline-flex items-center rounded-full border border-moonbeam/40 px-4 py-2.5 text-[13.5px] font-bold text-moonbeam md:hidden"
        >
          Begin
        </Link>
      </div>
    </header>
  );
}
