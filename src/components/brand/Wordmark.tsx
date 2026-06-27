import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  href = "/",
  tone = "ink",
}: {
  className?: string;
  href?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link
      href={href}
      aria-label="Tenure — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <Logo
        className="h-8 w-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
        solid={tone === "paper" ? "#1f4467" : undefined}
      />
      <span
        className={cn(
          "font-display text-[1.4rem] font-semibold leading-none tracking-[-0.03em]",
          tone === "paper" ? "text-paper" : "text-ink",
        )}
      >
        Tenure
      </span>
    </Link>
  );
}
