import { cn } from "@/lib/cn";

/**
 * A faint field of flowing contour lines — topographic "grain" used very softly
 * behind sections. Deterministic (seedable), inherits color via currentColor.
 * Decorative only.
 */
export function ContourField({
  className,
  lines = 18,
  seed = 0,
}: {
  className?: string;
  lines?: number;
  seed?: number;
}) {
  const W = 1200;
  const H = 700;
  const gap = H / (lines + 2);
  const steps = 48;

  const paths = Array.from({ length: lines }, (_, i) => {
    const baseY = gap * (i + 1.5);
    const amp = 22 + ((i + seed) % 5) * 14;
    const freq = 1.1 + ((i + seed) % 4) * 0.22;
    const phase = (i + seed) * 0.7;
    const slope = -0.1 + ((i + seed) % 3) * 0.05;
    let d = `M0 ${baseY.toFixed(1)}`;
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      const x = W * t;
      const taper = Math.sin(t * Math.PI);
      const y =
        baseY +
        slope * x +
        Math.sin(t * Math.PI * 2 * freq + phase) * amp * taper +
        Math.sin(t * Math.PI * freq * 0.5 + phase * 1.3) * amp * 0.4 * taper;
      d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        {paths.map((d, i) => (
          <path key={i} d={d} opacity={(0.22 + (i / lines) * 0.6).toFixed(2)} />
        ))}
      </g>
    </svg>
  );
}
