"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-into-view reveal. The element structure and `initial` are constant
 * across server and client (no hydration mismatch); reduced-motion only collapses
 * the transition to an instant snap, so content always ends up visible.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </Comp>
  );
}
