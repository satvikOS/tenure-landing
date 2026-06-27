import { ringPath, ringRadii, RING_VIEWBOX, RING_CENTER } from "@/lib/rings";
import { cn } from "@/lib/cn";

/**
 * Static logomark — a small concentric "record seal". Inherits color via
 * `currentColor`, so it picks up `text-brass` / `text-parchment` from its parent.
 * Non-scaling stroke keeps the linework crisp at any size.
 */
export function RingSeal({
  className,
  rings = 4,
}: {
  className?: string;
  rings?: number;
}) {
  const radii = ringRadii(rings, 36, 176);
  return (
    <svg
      viewBox={`0 0 ${RING_VIEWBOX} ${RING_VIEWBOX}`}
      className={cn("block", className)}
      aria-hidden="true"
      focusable="false"
    >
      {radii.map((r, i) => (
        <path
          key={i}
          d={ringPath(r, i + 1, 3.2)}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === radii.length - 1 ? 1.6 : 1.2}
          strokeLinecap="round"
          opacity={0.55 + (i / (rings - 1)) * 0.45}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <circle cx={RING_CENTER} cy={RING_CENTER} r={15} fill="currentColor" />
      <circle cx={RING_CENTER} cy={RING_CENTER} r={5} fill="var(--color-ink)" />
    </svg>
  );
}
