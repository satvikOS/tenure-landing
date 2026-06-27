"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { RingSeal } from "@/components/visuals/RingSeal";
import { cn } from "@/lib/cn";

const OUTGOING = [
  { tag: "Vendor", title: "Rochester Print Co." },
  { tag: "Playbook", title: "Spring Gala deck" },
];

/**
 * A looping, self-explanatory illustration of the handoff. Both term zones stay
 * populated with records; one highlighted record visibly crosses from the
 * outgoing board into the incoming one, arriving with its provenance intact.
 */
export function HandoffAnimation({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const loop = { duration: 5.4, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-line bg-gradient-to-b from-ink-raised to-ink p-5 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)] sm:p-6",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="label-mono">The handoff</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[0.66rem] text-faint">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-patina"
            initial={{ opacity: 1 }}
            animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
            transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
          />
          live
        </span>
      </div>

      <div className="relative h-56 sm:h-52">
        {/* outgoing zone */}
        <Zone className="left-0" label="Term 2024–25" sub="Outgoing" dim>
          {OUTGOING.map((r) => (
            <Chip key={r.title} tag={r.tag} title={r.title} />
          ))}
        </Zone>

        {/* incoming zone — already holds an inherited record */}
        <Zone className="right-0" label="Term 2025–26" sub="Incoming">
          <div className="mt-auto">
            <Chip tag="Lead" title="Wegmans — catering" from="Maya Chen · 2024–25" />
          </div>
        </Zone>

        {/* center divider + ring */}
        <div className="absolute inset-y-3 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className="h-full w-px border-l border-dashed border-line" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 rounded-full bg-ink p-1"
            initial={{ scale: 1 }}
            animate={reduce ? undefined : { scale: [1, 1, 1.14, 1, 1] }}
            transition={reduce ? undefined : { ...loop, times: [0, 0.46, 0.6, 0.74, 1] }}
          >
            <RingSeal rings={3} className="h-7 w-7 text-brass" />
          </motion.div>
        </div>

        {/* the record, crossing the boundary */}
        <motion.div
          className="absolute top-7 z-10 w-[44%] rounded-lg border border-brass/40 bg-ink-raised p-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.95)]"
          initial={{ left: "3%", opacity: 0 }}
          animate={
            reduce
              ? { left: "53%", opacity: 1 }
              : { left: ["3%", "3%", "53%", "53%", "53%"], opacity: [0, 1, 1, 1, 0] }
          }
          transition={reduce ? undefined : { ...loop, times: [0, 0.14, 0.5, 0.9, 1] }}
        >
          <div className="flex items-center gap-2">
            <span className="rounded border border-brass/30 bg-brass/10 px-1.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-wider text-brass">
              Deal
            </span>
            <span className="text-[0.82rem] text-parchment">Aramark — renewal</span>
          </div>
          <p className="mt-1.5 font-mono text-[0.64rem] text-muted">
            $4,000 · signed Oct 2023
          </p>
          <motion.p
            className="mt-2 font-mono text-[0.6rem] text-faint"
            initial={{ opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: [0, 0, 0, 1, 0] }}
            transition={reduce ? undefined : { ...loop, times: [0, 0.5, 0.55, 0.62, 1] }}
          >
            <span className="text-patina">↳</span> inherited from Maya Chen · 2023–24
          </motion.p>
        </motion.div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">
        Every record crosses the handoff with its history intact — who built it,
        what it cost, and why it matters.
      </p>
    </div>
  );
}

function Zone({
  className,
  label,
  sub,
  dim,
  children,
}: {
  className?: string;
  label: string;
  sub: string;
  dim?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute top-0 flex h-full w-[46%] flex-col rounded-lg border border-dashed border-line/70 p-3",
        dim && "opacity-70",
        className,
      )}
    >
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-faint">
        {label}
      </p>
      <p className="mb-2.5 mt-0.5 text-[0.68rem] text-muted">{sub}</p>
      <div className="flex flex-1 flex-col gap-2">{children}</div>
    </div>
  );
}

function Chip({
  tag,
  title,
  from,
}: {
  tag: string;
  title: string;
  from?: string;
}) {
  return (
    <div className="rounded-md border border-line bg-ink/50 px-2.5 py-2">
      <div className="flex items-center gap-1.5">
        <span className="rounded border border-line px-1 py-0.5 font-mono text-[0.5rem] uppercase tracking-wider text-faint">
          {tag}
        </span>
        <span className="truncate text-[0.72rem] text-muted">{title}</span>
      </div>
      {from && (
        <p className="mt-1 font-mono text-[0.54rem] text-faint">
          <span className="text-patina">↳</span> {from}
        </p>
      )}
    </div>
  );
}
