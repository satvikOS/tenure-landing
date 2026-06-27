import { cn } from "@/lib/cn";

/**
 * Tenure logomark — an enterprise monogram in the SAP/Workday tradition: a
 * confident "T" on a navy gradient chip with a soft top sheen, standing on a
 * grove platform (the foundation the next leader inherits). Geometric, no circles.
 *
 * Pass `solid` for a flat tile color (e.g. on dark surfaces).
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
      <defs>
        <linearGradient id="tnr-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26527a" />
          <stop offset="100%" stopColor="#0c1e33" />
        </linearGradient>
        <linearGradient id="tnr-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={fill} />
      <rect width="32" height="32" rx="9" fill="url(#tnr-sheen)" />
      {/* T */}
      <rect x="7.4" y="8.5" width="17.2" height="3.5" rx="1.4" fill="#ffffff" />
      <rect x="14.25" y="8.5" width="3.5" height="13" rx="1.4" fill="#ffffff" />
      {/* grove platform the T stands on */}
      <rect x="10" y="21.6" width="12" height="2.8" rx="1.4" fill="#2cb574" />
    </svg>
  );
}
