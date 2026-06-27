import { ContourField } from "@/components/visuals/ContourField";
import { cn } from "@/lib/cn";

type Place = "tr" | "tl" | "br" | "bl" | "cr" | "cl";

const PLACES: Record<Place, string> = {
  tr: "right-0 top-0 h-[85%] w-[58%] [mask-image:radial-gradient(70%_72%_at_86%_16%,black,transparent_74%)]",
  tl: "left-0 top-0 h-[85%] w-[56%] [mask-image:radial-gradient(70%_72%_at_14%_16%,black,transparent_74%)]",
  br: "bottom-0 right-0 h-[88%] w-[60%] [mask-image:radial-gradient(72%_72%_at_86%_84%,black,transparent_74%)]",
  bl: "bottom-0 left-0 h-[88%] w-[58%] [mask-image:radial-gradient(72%_72%_at_14%_84%,black,transparent_74%)]",
  cr: "right-0 top-1/2 h-[120%] w-[52%] -translate-y-1/2 [mask-image:radial-gradient(62%_60%_at_90%_50%,black,transparent_76%)]",
  cl: "left-0 top-1/2 h-[120%] w-[52%] -translate-y-1/2 [mask-image:radial-gradient(62%_60%_at_10%_50%,black,transparent_76%)]",
};

/**
 * A faded topographic contour, placed and tinted per section so each background
 * reads differently from the next. Decorative; sits behind the content.
 */
export function SectionContour({
  place = "tr",
  seed = 0,
  className,
}: {
  place?: Place;
  seed?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -z-10", PLACES[place], className)}
    >
      <ContourField seed={seed} />
    </div>
  );
}
