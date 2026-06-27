"use client";

import { motion, useReducedMotion } from "motion/react";
import { RingSeal } from "@/components/visuals/RingSeal";
import { cn } from "@/lib/cn";

type Entry = {
  kind: string;
  title: string;
  meta: string;
  from: string;
  term: string;
};

const ROLES: { label: string; count: number; active?: boolean }[] = [
  { label: "President", count: 9 },
  { label: "Treasurer", count: 14 },
  { label: "Sponsorship", count: 12, active: true },
  { label: "Events", count: 21 },
  { label: "Marketing", count: 7 },
  { label: "Recruitment", count: 5 },
];

const ENTRIES: Entry[] = [
  {
    kind: "Deal",
    title: "Aramark — multi-year renewal",
    meta: "$4,000 · signed Oct 2023 · renews Aug",
    from: "Maya Chen",
    term: "2023–24",
  },
  {
    kind: "Vendor",
    title: "Rochester Print Co. — 15% club rate",
    meta: "Net-30 · contact: Dev P. · (585) 555-0114",
    from: "Jordan Lee",
    term: "2024–25",
  },
  {
    kind: "Playbook",
    title: "Spring Gala — sponsorship deck",
    meta: "PDF · 18 slides · last used Mar 2025",
    from: "Priya Nair",
    term: "2024–25",
  },
  {
    kind: "Lead",
    title: "Wegmans — in-kind catering ask",
    meta: "Warm intro via alumni · follow up Sept",
    from: "Maya Chen",
    term: "2023–24",
  },
];

/**
 * A credible mock of a Tenure role workspace. The signature detail is provenance:
 * every record shows the term and the person it was inherited from — knowledge
 * that carried across boards instead of resetting.
 */
export function ProductFrame({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-gradient-to-b from-ink-raised to-ink shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]",
        "ring-1 ring-inset ring-white/[0.03]",
        className,
      )}
    >
      {/* window bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <RingSeal className="h-4 w-4 text-brass" />
          <span className="font-display text-sm text-parchment">Tenure</span>
          <span className="hidden text-faint sm:inline">/</span>
          <span className="hidden font-mono text-xs text-muted sm:inline">
            Rochester Finance Club
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink/60 px-2.5 py-1 font-mono text-[0.7rem] text-muted">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-patina"
            initial={{ opacity: 1 }}
            animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
            transition={reduce ? undefined : { duration: 2.4, repeat: Infinity }}
          />
          Term 2025–26
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[10.5rem_1fr]">
        {/* sidebar — index of roles */}
        <aside className="hidden border-r border-line p-3 sm:block">
          <p className="label-mono px-2 pb-2 text-[0.62rem]">Roles</p>
          <ul className="space-y-0.5">
            {ROLES.map((r) => (
              <li
                key={r.label}
                className={cn(
                  "flex items-center justify-between rounded-md px-2 py-1.5 text-[0.82rem]",
                  r.active
                    ? "bg-brass/10 text-parchment"
                    : "text-muted",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      r.active ? "bg-brass" : "bg-faint/60",
                    )}
                  />
                  {r.label}
                </span>
                <span className="font-mono text-[0.66rem] text-faint">{r.count}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* main — the role's living record */}
        <div className="p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-xl text-parchment">Sponsorship</h3>
              <p className="mt-1 font-mono text-[0.7rem] text-faint">
                12 records · carried across 3 terms
              </p>
            </div>
            <span className="rounded-md border border-line px-2.5 py-1 font-mono text-[0.68rem] text-muted">
              + Add record
            </span>
          </div>

          <ul className="mt-4 space-y-2.5">
            {ENTRIES.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
                }
                className="rounded-lg border border-line bg-ink/50 p-3.5 transition-colors hover:border-brass/30"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded border border-brass/30 bg-brass/10 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-brass">
                    {e.kind}
                  </span>
                  <span className="text-[0.92rem] text-parchment">{e.title}</span>
                </div>
                <p className="mt-1.5 font-mono text-[0.72rem] text-muted">{e.meta}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.68rem] text-faint">
                  <span aria-hidden className="text-patina">
                    ↳
                  </span>
                  inherited from {e.from} · {e.term}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
