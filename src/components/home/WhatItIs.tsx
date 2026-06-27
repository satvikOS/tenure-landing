import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { ProductFrame } from "@/components/visuals/ProductFrame";

const TOOLS = ["Google Drive", "Slack", "Notion", "Sheets", "Gmail", "Calendar"];

export function WhatItIs() {
  return (
    <section className="relative border-t border-line/60 py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow index="02">What Tenure is</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
              A workspace for every role, where knowledge{" "}
              <em className="foil font-normal italic">compounds</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tenure gives each role — president, treasurer, sponsorship, events —
              a living workspace. Knowledge is captured as the work happens:
              contacts, decisions, files, playbooks. When the term ends, it
              doesn&rsquo;t reset. It carries forward, tagged to the seat and the
              people who built it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <ProductFrame />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-muted">
              Built to sit on top of the tools you already use — not replace them.
            </p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-ink-raised/50 px-3 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
