import Link from "next/link";
import { RingSeal } from "@/components/visuals/RingSeal";
import { Wordmark } from "@/components/brand/Wordmark";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-deep">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-faint">
              Founded at {site.origin.school}, {site.origin.university}.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Explore">
            <p className="label-mono">Explore</p>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-muted transition-colors hover:text-parchment"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label-mono">Get started</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[0.95rem] text-parchment transition-colors hover:text-brass-glint"
                >
                  Book an intro call
                  <span
                    aria-hidden
                    className="text-brass transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[0.95rem] text-muted transition-colors hover:text-parchment"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* the record's seal, pressed into the page */}
      <div
        aria-hidden
        className="pointer-events-none relative z-0 mt-10 flex select-none justify-center overflow-hidden sm:mt-6"
      >
        <span className="wordmark-giant">Tenure</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-9 sm:px-8">
        <div className="flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <RingSeal className="h-4 w-4 text-brass/80" />
            <span className="text-sm text-faint">
              © {year} {site.name}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            {site.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-faint transition-colors hover:text-parchment"
              >
                {item.label}
              </Link>
            ))}
            <span aria-hidden className="h-3 w-px bg-line" />
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faint transition-colors hover:text-parchment"
            >
              LinkedIn
            </a>
            <span aria-hidden className="text-faint/50">
              /
            </span>
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faint transition-colors hover:text-parchment"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
