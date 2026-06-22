import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#04100a] py-9 text-center text-[13px] text-[rgba(242,232,201,0.55)]">
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
              className="text-[rgba(242,232,201,0.7)] transition-colors hover:text-moonbeam"
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
            className="text-[rgba(242,232,201,0.6)] transition-colors hover:text-moonbeam"
          >
            Instagram
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Nightly Explorers on Facebook"
            className="text-[rgba(242,232,201,0.6)] transition-colors hover:text-moonbeam"
          >
            Facebook
          </a>
        </div>

        <div className="mt-6">
          © {new Date().getFullYear()} {SITE.name}. One evening at a time.
        </div>
      </div>
    </footer>
  );
}
