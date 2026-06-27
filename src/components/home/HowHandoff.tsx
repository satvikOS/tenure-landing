import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const STEPS = [
  {
    n: "01",
    t: "Capture in context",
    d: "Knowledge is logged as the work happens — tagged to a role, an event, a decision.",
  },
  {
    n: "02",
    t: "It accrues to the role",
    d: "Nothing lives in a personal inbox. It belongs to the seat, not the person who held it.",
  },
  {
    n: "03",
    t: "The term ends",
    d: "Outgoing leaders mark what matters. Tenure assembles the record for the next board.",
  },
  {
    n: "04",
    t: "Day one",
    d: "The incoming team opens an organized, living history — and picks up mid-stride.",
  },
];

// node fill deepens toward "day one" — the record filling in
const FILL = [
  "border-brass/30 bg-brass/[0.06] text-brass",
  "border-brass/40 bg-brass/[0.12] text-brass",
  "border-brass/55 bg-brass/[0.2] text-brass-glint",
  "border-brass bg-brass text-ink",
];

export function HowHandoff() {
  return (
    <section
      id="handoff"
      className="relative scroll-mt-24 border-t border-line/60 py-24 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow index="03">The handoff</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
              From cold start to{" "}
              <em className="foil font-normal italic">day one</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The transition stops being a scramble. It becomes a moment the
              record is already built for.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connector rail (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brass/20 via-brass/40 to-brass lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.08} className="relative">
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-mono text-sm",
                    FILL[i],
                  )}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 text-lg font-medium text-parchment">{s.t}</h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
