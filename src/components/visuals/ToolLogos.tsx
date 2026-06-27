/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/cn";

const TOOLS: { src: string; name: string }[] = [
  { src: "/logos/tools/google-drive.svg", name: "Google Drive" },
  { src: "/logos/tools/gmail.svg", name: "Gmail" },
  { src: "/logos/tools/google-calendar.svg", name: "Google Calendar" },
  { src: "/logos/tools/slack-icon.svg", name: "Slack" },
  { src: "/logos/tools/notion-icon.svg", name: "Notion" },
  { src: "/logos/tools/microsoft-teams.svg", name: "Microsoft Teams" },
  { src: "/logos/tools/outlook.svg", name: "Outlook" },
  { src: "/logos/tools/excel.svg", name: "Excel" },
  { src: "/logos/tools/zoom-icon.svg", name: "Zoom" },
  { src: "/logos/tools/dropbox.svg", name: "Dropbox" },
  { src: "/logos/tools/discord-icon.svg", name: "Discord" },
  { src: "/logos/tools/box.svg", name: "Box" },
];

export function ToolLogos({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap justify-center gap-2.5", className)}>
      {TOOLS.map((t) => (
        <span
          key={t.name}
          className="group inline-flex items-center gap-2 rounded-xl border border-line bg-cloud px-3 py-2 shadow-[0_1px_2px_rgba(12,30,51,0.04)] transition-shadow hover:shadow-[0_8px_20px_-12px_rgba(12,30,51,0.3)]"
        >
          <img
            src={t.src}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
            loading="lazy"
          />
          <span className="text-[0.82rem] font-medium text-ink-soft">{t.name}</span>
        </span>
      ))}
    </div>
  );
}
