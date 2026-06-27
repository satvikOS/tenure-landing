import Link from "next/link";
import { RingSeal } from "@/components/visuals/RingSeal";
import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  href = "/",
  sealClassName,
}: {
  className?: string;
  href?: string;
  sealClassName?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Tenure — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <RingSeal
        className={cn(
          "h-7 w-7 text-brass transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[24deg]",
          sealClassName,
        )}
      />
      <span className="font-display text-[1.4rem] leading-none tracking-[-0.01em] text-parchment">
        Tenure
      </span>
    </Link>
  );
}
