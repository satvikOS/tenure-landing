"use client";

import { motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

const MODULES = [
  { label: "Dashboard", active: false },
  { label: "Finance", active: false },
  { label: "Events", active: false },
  { label: "Members", active: false },
  { label: "Memory", active: true },
];

const RECORDS = [
  { kind: "Deal", title: "Aramark — sponsorship renewal", from: "Maya · ’24" },
  { kind: "Playbook", title: "Spring Gala — run of show", from: "Priya · ’24" },
  { kind: "Vendor", title: "Rochester Print — 15% rate", from: "Jordan · ’25" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

/** A credible, light ERP workspace for a university organization. */
export function DashboardMock({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-cloud shadow-[0_40px_120px_-40px_rgba(12,30,51,0.35)]",
        className,
      )}
    >
      {/* top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-line bg-paper/60 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <Logo className="h-5 w-5 text-grove" />
          <span className="font-display text-sm font-semibold text-ink">Tenure</span>
          <span className="hidden text-ink-faint sm:inline">/</span>
          <span className="hidden text-[0.82rem] text-ink-soft sm:inline">
            Rochester Finance Club
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-lg border border-line bg-cloud px-2.5 py-1 font-mono text-[0.68rem] text-ink-soft sm:inline-flex">
            Term 2025–26
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-grove-soft px-2.5 py-1 text-[0.72rem] font-medium text-grove-deep">
            <motion.span
              className="h-1.5 w-1.5 rounded-sm bg-grove"
              initial={{ opacity: 1 }}
              animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
              transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
            />
            Ask Tenure
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[8.5rem_1fr]">
        {/* module rail */}
        <aside className="hidden border-r border-line bg-sand/50 p-3 sm:block">
          <p className="label-mono px-2 pb-2 text-[0.6rem]">Modules</p>
          <ul className="space-y-0.5">
            {MODULES.map((m) => (
              <li
                key={m.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-[0.84rem]",
                  m.active
                    ? "bg-cloud font-medium text-ink shadow-[0_1px_2px_rgba(12,30,51,0.06)]"
                    : "text-ink-soft",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-sm",
                    m.active ? "bg-grove" : "bg-ink-faint/50",
                  )}
                />
                {m.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* main */}
        <div className="p-4 sm:p-5">
          <div className="mb-4">
            <p className="label-mono text-[0.6rem]">Treasurer · onboarding</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              Everything this seat has ever done
            </h3>
          </div>

          {/* the AI onboarding panel — the hero feature */}
          <motion.div
            className="rounded-xl border border-grove/25 bg-grove-soft/60 p-3.5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE }}
          >
            <div className="flex items-center gap-2 text-[0.78rem] text-grove-deep">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M8 1.5l1.6 3.7 4 .3-3 2.6.9 3.9L8 12l-3.5 2 .9-3.9-3-2.6 4-.3z"
                  fill="currentColor"
                />
              </svg>
              You asked
            </div>
            <p className="mt-1.5 text-[0.95rem] font-medium text-ink">
              “How do we book the gala venue, and what did it cost last year?”
            </p>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft">
              Email events@rochester.edu by August. Last year the Memorial Art
              Gallery ran $4,200, booked through Priya&rsquo;s contact —
              <span className="text-grove-deep"> 3 sources ↗</span>
            </p>
          </motion.div>

          {/* budget + records */}
          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-paper/50 p-3.5">
              <p className="label-mono text-[0.6rem]">Budget · fall</p>
              <p className="mt-1.5 font-mono text-lg font-semibold text-ink">
                $12,400{" "}
                <span className="text-[0.8rem] font-normal text-ink-faint">
                  / $18,000
                </span>
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                <motion.div
                  className="h-full rounded-full bg-grove"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "69%" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE, delay: 0.15 }}
                />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-paper/50 p-3.5">
              <p className="label-mono text-[0.6rem]">Inherited records</p>
              <ul className="mt-2 space-y-1.5">
                {RECORDS.map((r, i) => (
                  <motion.li
                    key={r.title}
                    className="flex items-center gap-2 text-[0.78rem]"
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={
                      reduce ? { duration: 0 } : { duration: 0.4, ease: EASE, delay: 0.25 + i * 0.12 }
                    }
                  >
                    <span className="rounded border border-line bg-cloud px-1 py-0.5 font-mono text-[0.56rem] uppercase tracking-wide text-ink-faint">
                      {r.kind}
                    </span>
                    <span className="flex-1 truncate text-ink-soft">{r.title}</span>
                    <span className="hidden font-mono text-[0.6rem] text-ink-faint lg:inline">
                      {r.from}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
