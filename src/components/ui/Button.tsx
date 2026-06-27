import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[7px] font-medium leading-none " +
  "transition-[background,border-color,color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-brass text-ink hover:bg-brass-glint active:translate-y-px " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_10px_26px_-14px_rgba(201,138,58,0.85)] " +
    "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_14px_32px_-12px_rgba(230,169,78,0.8)]",
  secondary:
    "border border-line bg-ink-raised/50 text-parchment hover:border-brass/45 hover:bg-ink-raised " +
    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]",
  ghost: "text-muted hover:text-parchment",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[0.85rem]",
  md: "h-11 px-5 text-[0.93rem]",
  lg: "h-[3.35rem] px-7 text-[1rem]",
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
      className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-[3px]"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
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
