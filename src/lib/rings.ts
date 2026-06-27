/**
 * Geometry for the "Tenure Rings" signature.
 *
 * Each ring is one term/board. Rings are drawn as closed paths with a small
 * deterministic radial wobble so they read like organic growth rings (tree
 * cross-section / wax seal), not mechanical circles. Determinism (seed from the
 * ring index, no randomness) keeps server and client renders identical.
 */

export const RING_VIEWBOX = 400;
const C = RING_VIEWBOX / 2;

/** A closed, gently-irregular ring path at `radius`, varied by `seed`. */
export function ringPath(radius: number, seed: number, amp: number, steps = 140): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2 - Math.PI / 2;
    const wob =
      amp *
      (Math.sin(a * 3 + seed * 1.7) * 0.55 +
        Math.sin(a * 5 + seed * 0.8) * 0.3 +
        Math.sin(a * 2 + seed * 2.3) * 0.15);
    const r = radius + wob;
    const x = C + Math.cos(a) * r;
    const y = C + Math.sin(a) * r;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return `${d}Z`;
}

/** Evenly-spaced radii from a small core out to `maxR`. */
export function ringRadii(count: number, core: number, maxR: number): number[] {
  const step = (maxR - core) / count;
  return Array.from({ length: count }, (_, i) => core + (i + 1) * step);
}

/** Point on a circle of `radius`, `angleDeg` measured clockwise from 12 o'clock. */
export function pointOnCircle(radius: number, angleDeg: number): { x: number; y: number } {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: C + Math.cos(a) * radius, y: C + Math.sin(a) * radius };
}

export const RING_CENTER = C;
