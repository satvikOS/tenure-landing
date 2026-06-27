"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";
import { cn } from "@/lib/cn";
import { ringPath, ringRadii, pointOnCircle, RING_VIEWBOX, RING_CENTER } from "@/lib/rings";

type TenureRingsProps = {
  /** number of growth rings — one per term/board */
  rings?: number;
  /** the "annual reset" state: the outer rings fracture and knowledge scatters */
  broken?: boolean;
  /** show the founding year + current term labels */
  labeled?: boolean;
  startYear?: number;
  currentTerm?: string;
  /** run the draw-in (set false to render the resolved state immediately) */
  play?: boolean;
  className?: string;
};

const CORE = 14;
const MAXR = 188;
const EASE = [0.16, 1, 0.3, 1] as const;

export function TenureRings({
  rings = 12,
  broken = false,
  labeled = false,
  startYear = 2014,
  currentTerm = "2025–26",
  play = true,
  className,
}: TenureRingsProps) {
  const reduce = useReducedMotion();
  const uid = useId();
  const radii = ringRadii(rings, CORE, MAXR);
  const run = play && !reduce;

  const label = broken
    ? "An organization's record fracturing as a term ends — knowledge scattering."
    : `${rings} terms of accumulated institutional memory, kept intact.`;

  const founding = pointOnCircle(CORE + 4, 0);
  const nowPoint = pointOnCircle(MAXR + 16, 0);

  return (
    <svg
      viewBox={`0 0 ${RING_VIEWBOX} ${RING_VIEWBOX}`}
      className={cn("block overflow-visible", className)}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={`${uid}-brass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9c6a28" />
          <stop offset="50%" stopColor="var(--color-brass)" />
          <stop offset="100%" stopColor="var(--color-brass-glint)" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-brass)" stopOpacity={broken ? 0.16 : 0.28} />
          <stop offset="55%" stopColor="var(--color-brass)" stopOpacity={0.05} />
          <stop offset="100%" stopColor="var(--color-brass)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-core`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--color-brass-glint)" />
          <stop offset="100%" stopColor="#8a5a22" />
        </radialGradient>
      </defs>

      {/* ambient glow — gentle "living" pulse */}
      <motion.circle
        cx={RING_CENTER}
        cy={RING_CENTER}
        r={MAXR}
        fill={`url(#${uid}-glow)`}
        initial={{ opacity: 1 }}
        animate={run ? { opacity: [0.7, 1, 0.7] } : undefined}
        transition={run ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
      />

      {/* faint outer time-ticks, slowly turning */}
      <motion.g
        style={{ transformOrigin: "200px 200px", transformBox: "view-box" }}
        initial={{ rotate: 0 }}
        animate={run ? { rotate: 360 } : undefined}
        transition={run ? { duration: 240, repeat: Infinity, ease: "linear" } : undefined}
      >
        <circle
          cx={RING_CENTER}
          cy={RING_CENTER}
          r={MAXR + 9}
          fill="none"
          stroke="var(--color-brass)"
          strokeWidth={1.4}
          strokeDasharray="1.5 13"
          strokeLinecap="round"
          opacity={broken ? 0.18 : 0.34}
        />
      </motion.g>

      {/* the rings — one per term, drawn from the founding outward */}
      {radii.map((r, i) => {
        const t = rings > 1 ? i / (rings - 1) : 1;
        const isNow = i === rings - 1;
        const isOuter = i >= rings - 3;
        const fractured = broken && isOuter;

        // broken outer rings stay partly undrawn → a visible gap = lost knowledge
        const target = fractured ? 0.5 + (rings - 1 - i) * 0.05 : 1;
        const opacity = broken
          ? isOuter
            ? 0.16
            : 0.18 + t * 0.34
          : 0.34 + t * 0.52;

        return (
          <motion.path
            key={i}
            d={ringPath(r, i + 1, 1.2 + t * 2.6)}
            fill="none"
            stroke={isNow && !broken ? "var(--color-brass-glint)" : `url(#${uid}-brass)`}
            strokeWidth={1 + t * 1 + (isNow ? 0.5 : 0)}
            strokeLinecap="round"
            style={{ opacity }}
            initial={play ? { pathLength: 0, pathOffset: fractured ? 0.07 : 0 } : false}
            animate={{ pathLength: target, pathOffset: fractured ? 0.07 : 0 }}
            transition={
              run
                ? { duration: 1.1 + t * 0.6, delay: 0.18 + i * 0.07, ease: EASE }
                : { duration: 0 }
            }
          />
        );
      })}

      {/* the founding core */}
      <motion.circle
        cx={RING_CENTER}
        cy={RING_CENTER}
        r={11}
        fill={`url(#${uid}-core)`}
        style={{ transformOrigin: "200px 200px", transformBox: "view-box" }}
        initial={play ? { scale: 0, opacity: 0 } : false}
        animate={{ scale: 1, opacity: 1 }}
        transition={run ? { delay: 0.05, duration: 0.6, ease: "backOut" } : { duration: 0 }}
      />
      <circle cx={RING_CENTER} cy={RING_CENTER} r={3.6} fill="var(--color-ink)" />

      {/* broken: knowledge fragments drifting out of the record */}
      {broken &&
        FRAGMENTS.map((f, i) => (
          <motion.rect
            key={i}
            x={f.x}
            y={f.y}
            width={f.s}
            height={f.s}
            rx={1}
            fill="var(--color-brass)"
            style={{ transformOrigin: `${f.x + f.s / 2}px ${f.y + f.s / 2}px`, transformBox: "view-box" }}
            initial={play ? { opacity: 0 } : false}
            animate={
              run
                ? { opacity: [0, 0.5, 0], x: [f.x, f.x + f.dx], y: [f.y, f.y + f.dy], rotate: [0, f.r] }
                : { opacity: 0.32 }
            }
            transition={
              run
                ? { duration: 4.5, repeat: Infinity, delay: 1 + i * 0.4, ease: "easeOut" }
                : { duration: 0 }
            }
          />
        ))}

      {/* labels — only the two that carry real information */}
      {labeled && (
        <g
          fontFamily="var(--font-mono)"
          fontSize={12}
          letterSpacing="0.14em"
          fill="var(--color-faint)"
        >
          <text x={nowPoint.x} y={nowPoint.y} textAnchor="middle" fill="var(--color-brass-glint)">
            {broken ? "TERM ENDS" : currentTerm}
          </text>
          <text x={founding.x + 16} y={founding.y + 4} textAnchor="start">
            EST. {startYear}
          </text>
        </g>
      )}
    </svg>
  );
}

// Deterministic fragment scatter, positioned around the upper-right fracture.
const FRAGMENTS = [
  { x: 300, y: 96, s: 7, dx: 34, dy: -26, r: 40 },
  { x: 330, y: 150, s: 5, dx: 40, dy: -6, r: -30 },
  { x: 286, y: 70, s: 6, dx: 22, dy: -40, r: 55 },
  { x: 348, y: 118, s: 4, dx: 30, dy: -18, r: 20 },
  { x: 268, y: 110, s: 5, dx: 44, dy: -10, r: -45 },
  { x: 318, y: 74, s: 6, dx: 18, dy: -34, r: 35 },
];
