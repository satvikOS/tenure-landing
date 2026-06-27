import { cn } from "@/lib/cn";

/**
 * Tenure logomark — an enterprise-grade monogram in the SAP/Workday tradition:
 * a confident "T" in a navy gradient tile, grounded by a grove base bar (the
 * role's foundation that the next leader inherits). Geometric, no circles.
 *
 * Pass `solid` to render a flat tile color (e.g. on dark surfaces where the
 * gradient would blend in).
 */
export function Logo({
  className,
  solid,
}: {
  className?: string;
  solid?: string;
}) {
  const fill = solid ?? "url(#tnr-tile)";
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("block", className)}
      aria-hidden="true"
      focusable="false"
    >
      {!solid && (
        <defs>
          <linearGradient id="tnr-tile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f4467" />
            <stop offset="100%" stopColor="#0c1e33" />
          </linearGradient>
        </defs>
      )}
      <rect width="32" height="32" rx="9" fill={fill} />
      {/* T crossbar + stem */}
      <rect x="7.5" y="9" width="17" height="3.5" rx="1.4" fill="#ffffff" />
      <rect x="14.25" y="9" width="3.5" height="12" rx="1.4" fill="#ffffff" />
      {/* grove base — the foundation the next leader stands on */}
      <rect x="10.5" y="22.4" width="11" height="2.6" rx="1.3" fill="#2cb574" />
    </svg>
  );
}
