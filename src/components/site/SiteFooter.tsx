import Link from "next/link";
import { RingSeal } from "@/components/visuals/RingSeal";
import { Wordmark } from "@/components/brand/Wordmark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-deep">
      {/* faint seal watermark, pressed into the page like a stamp */}
      <RingSeal
        rings={6}
        className="pointer-events-none absolute -bottom-28 -right-20 h-[22rem] w-[22rem] text-brass/[0.05]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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
                  <span aria-hidden className="text-brass transition-transform duration-300 group-hover:translate-x-0.5">
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

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono normal-case tracking-[0.12em]">
            Record of Tenure · Vol. I · Est. {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-5">
            {site.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-faint transition-colors hover:text-muted"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-sm text-faint">© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
