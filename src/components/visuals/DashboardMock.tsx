"use client";

import { motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------------------------------------- nav icons */
const ICONS: Record<string, string> = {
  Home: "M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10",
  Finance: "M3 21h18M5 21V11m4 10V7m4 14V9m4 12V5",
  Events: "M4 6h16v14H4zM4 9h16M8 3v4M16 3v4",
  Members: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M16 20a6 6 0 0 1 5-3",
  Documents: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h4",
  Memory: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5",
};

const NAV = ["Home", "Finance", "Events", "Members", "Documents", "Memory"];
const ACTIVE = "Finance";

const BREAKDOWN = [
  { label: "Events", pct: 38, color: "#1c8c5a" },
  { label: "Operations", pct: 24, color: "#3e7cb1" },
  { label: "Marketing", pct: 16, color: "#e8b04b" },
  { label: "Reserve", pct: 22, color: "#c9d2cc" },
];

const ROWS = [
  { tag: "Deal", item: "Aramark — renewal", amt: "$4,000", from: "Maya ’24" },
  { tag: "Event", item: "Spring Gala — venue", amt: "$1,500", from: "Priya ’24" },
  { tag: "Vendor", item: "Rochester Print", amt: "$240", from: "Jordan ’25" },
];

const ASKS = ["What's our sponsorship pipeline?", "How do we run elections?"];

/* --------------------------------------------------------------- area chart */
const PTS = [38, 52, 46, 60, 54, 70, 64, 82, 78, 96];
function chartPaths(w: number, h: number) {
  const max = 110;
  const step = w / (PTS.length - 1);
  const pt = (v: number, i: number) => [i * step, h - (v / max) * h];
  let line = "";
  PTS.forEach((v, i) => {
    const [x, y] = pt(v, i);
    if (i === 0) line += `M${x.toFixed(1)} ${y.toFixed(1)}`;
    else {
      const [px, py] = pt(PTS[i - 1], i - 1);
      const cx = (px + x) / 2;
      line += `C${cx.toFixed(1)} ${py.toFixed(1)} ${cx.toFixed(1)} ${y.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }
  });
  const area = `${line}L${w} ${h}L0 ${h}Z`;
  const last = pt(PTS[PTS.length - 1], PTS.length - 1);
  return { line, area, last };
}

function AreaChart({ reduce }: { reduce: boolean | null }) {
  const w = 320;
  const h = 92;
  const { line, area, last } = chartPaths(w, h);
  return (
    <svg viewBox={`0 0 ${w} ${h + 6}`} className="mt-3 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="dm-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c8c5a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1c8c5a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#dm-area)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, delay: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#1c8c5a"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={reduce ? { duration: 0 } : { duration: 1.3, ease: EASE, delay: 0.2 }}
      />
      <motion.circle
        cx={last[0]}
        cy={last[1]}
        r="3.5"
        fill="#1c8c5a"
        stroke="#fff"
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 1.4 }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------- frame */
export function DashboardMock({
  className,
  tilt = false,
}: {
  className?: string;
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  const animate = tilt && !reduce;

  return (
    <div className={cn(tilt && "[perspective:2200px]", className)}>
      <motion.div
        className="overflow-hidden rounded-2xl border border-line bg-cloud shadow-[0_50px_140px_-50px_rgba(12,30,51,0.5)] ring-1 ring-ink/[0.03]"
        style={tilt ? { transformStyle: "preserve-3d", transformOrigin: "50% 50%" } : undefined}
        initial={
          tilt
            ? { rotateX: 7, rotateY: -13, y: 36, opacity: 0 }
            : { opacity: 0, y: 16 }
        }
        whileInView={
          tilt
            ? { rotateX: 2.5, rotateY: -6, y: 0, opacity: 1 }
            : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, margin: "-60px" }}
        transition={animate ? { duration: 1, ease: EASE } : { duration: reduce ? 0 : 0.6 }}
      >
        {/* top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-line bg-paper/60 px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <Logo className="h-5 w-5 text-grove" />
            <span className="font-display text-sm font-semibold text-ink">Tenure</span>
            <span className="hidden text-ink-faint sm:inline">/</span>
            <span className="hidden text-[0.8rem] text-ink-soft sm:inline">
              Rochester Finance Club
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-lg border border-line bg-cloud px-2.5 py-1 text-[0.72rem] text-ink-faint lg:inline-flex">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" strokeLinecap="round" />
              </svg>
              Ask or jump to…
            </span>
            <span className="rounded-lg bg-grove px-2.5 py-1 text-[0.72rem] font-medium text-cloud">
              + New
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] lg:grid-cols-[8.5rem_1fr_11rem]">
          {/* sidebar */}
          <aside className="hidden flex-col gap-0.5 border-r border-line bg-sand/40 p-3 sm:flex">
            {NAV.map((n) => (
              <span
                key={n}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-[0.8rem]",
                  n === ACTIVE
                    ? "bg-cloud font-medium text-ink shadow-[0_1px_2px_rgba(12,30,51,0.06)]"
                    : "text-ink-soft",
                )}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={n === ACTIVE ? "#1c8c5a" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={ICONS[n]} />
                </svg>
                {n}
              </span>
            ))}
            <div className="my-2 h-px bg-line" />
            <p className="px-2 pb-1 font-mono text-[0.56rem] uppercase tracking-wider text-ink-faint">
              Roles
            </p>
            {["President", "Treasurer", "Sponsorship"].map((r) => (
              <span key={r} className="flex items-center gap-2 rounded-lg px-2 py-1 text-[0.76rem] text-ink-soft">
                <span className={cn("h-1.5 w-1.5 rounded-sm", r === "Treasurer" ? "bg-grove" : "bg-ink-faint/50")} />
                {r}
              </span>
            ))}
          </aside>

          {/* main */}
          <div className="p-4 sm:p-5">
            <p className="label-mono text-[0.58rem]">Treasurer · 2025–26</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              Your term at a glance
            </h3>

            <div className="mt-4 rounded-xl border border-line bg-paper/40 p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="label-mono text-[0.56rem]">Treasury balance</p>
                  <p className="mt-1 font-mono text-2xl font-semibold text-ink">$12,400</p>
                  <p className="mt-0.5 text-[0.72rem] font-medium text-grove">
                    ▲ $1,300 · 11.7% this month
                  </p>
                </div>
                <span className="rounded-md border border-line bg-cloud px-2 py-0.5 font-mono text-[0.62rem] text-ink-soft">
                  Fall
                </span>
              </div>
              <AreaChart reduce={reduce} />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <p className="label-mono text-[0.56rem]">Budget by category</p>
                <p className="font-mono text-[0.66rem] text-ink-faint">$18,000</p>
              </div>
              <div className="mt-2 flex h-2.5 w-full overflow-hidden rounded-full">
                {BREAKDOWN.map((b) => (
                  <motion.span
                    key={b.label}
                    style={{ backgroundColor: b.color }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.3 }}
                  />
                ))}
              </div>
              <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                {BREAKDOWN.map((b) => (
                  <span key={b.label} className="flex items-center gap-1.5 text-[0.68rem] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-sm" style={{ backgroundColor: b.color }} />
                    {b.label} <span className="text-ink-faint">{b.pct}%</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-line">
              {ROWS.map((r, i) => (
                <div
                  key={r.item}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-[0.76rem]",
                    i > 0 && "border-t border-line",
                  )}
                >
                  <span className="rounded border border-line bg-paper px-1 py-0.5 font-mono text-[0.54rem] uppercase tracking-wide text-ink-faint">
                    {r.tag}
                  </span>
                  <span className="flex-1 truncate text-ink-soft">{r.item}</span>
                  <span className="font-mono text-ink">{r.amt}</span>
                  <span className="hidden font-mono text-[0.62rem] text-ink-faint lg:inline">↳ {r.from}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI panel */}
          <aside className="hidden flex-col gap-3 border-l border-line bg-grove-soft/30 p-4 lg:flex">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cloud shadow-[0_1px_2px_rgba(12,30,51,0.08)]">
                <Logo className="h-3.5 w-3.5 text-grove" />
              </span>
              <span className="text-[0.78rem] font-semibold text-ink">Tenure AI</span>
              <motion.span
                className="ml-auto h-1.5 w-1.5 rounded-full bg-grove"
                initial={{ opacity: 1 }}
                animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-[0.76rem] leading-relaxed text-ink-soft">
              I&rsquo;ve read everything this seat has done. Ask me anything about
              the role.
            </p>
            <div className="space-y-1.5">
              {ASKS.map((a, i) => (
                <motion.span
                  key={a}
                  className="block rounded-lg border border-line bg-cloud px-2.5 py-1.5 text-[0.7rem] text-ink-soft"
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.6 + i * 0.15 }}
                >
                  {a}
                </motion.span>
              ))}
            </div>
            <div className="mt-auto rounded-lg border border-grove/25 bg-cloud p-2.5">
              <p className="text-[0.7rem] leading-relaxed text-ink-soft">
                Last gala ran <span className="font-medium text-ink">$4,200</span>{" "}
                via Priya&rsquo;s contact.
                <span className="text-grove-deep"> 3 sources ↗</span>
              </p>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
