import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#04100a] py-9 text-center text-[13px] text-moonbeam/55">
      <div className="mx-auto w-full max-w-container px-6">
        <div className="font-display text-base font-semibold text-moonbeam">
          {SITE.name}
        </div>

        <nav
          aria-label="Footer"
          className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-moonbeam/70 transition-colors hover:text-moonbeam"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 flex items-center justify-center gap-5">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Nightly Explorers on Instagram"
            className="text-moonbeam/60 transition-colors hover:text-moonbeam"
          >
            Instagram
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Nightly Explorers on Facebook"
            className="text-moonbeam/60 transition-colors hover:text-moonbeam"
          >
            Facebook
          </a>
          <a
            href={SITE.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Nightly Explorers on X"
            className="text-moonbeam/60 transition-colors hover:text-moonbeam"
          >
            X
          </a>
        </div>

        <div className="mt-6">
          © {new Date().getFullYear()} {SITE.name}. One evening at a time.
        </div>
      </div>
    </footer>
  );
}
