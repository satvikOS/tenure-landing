import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium leading-none " +
  "transition-[background,border-color,color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grove " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-grove text-cloud hover:bg-grove-bright active:translate-y-px " +
    "shadow-[0_10px_26px_-12px_rgba(28,140,90,0.65)] hover:shadow-[0_14px_30px_-12px_rgba(37,169,109,0.7)]",
  secondary:
    "bg-cloud text-ink border border-line hover:border-ink/20 hover:bg-sand/60 " +
    "shadow-[0_1px_2px_rgba(12,30,51,0.05)]",
  light:
    "bg-cloud/10 text-paper border border-paper/25 backdrop-blur-sm hover:bg-cloud/15 hover:border-paper/40",
  ghost: "text-ink-soft hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.85rem]",
  md: "h-11 px-5 text-[0.93rem]",
  lg: "h-[3.25rem] px-7 text-[1rem]",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

function Arrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-[3px]"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
