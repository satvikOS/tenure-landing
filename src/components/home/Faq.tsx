import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Does Tenure replace our Google Drive, Slack, or Notion?",
    a: "No — Tenure sits on top of the tools you already use and pulls what matters into one system of record. The files, threads, and decisions that define how the org runs stop living in someone's personal account and start belonging to the role.",
  },
  {
    q: "Who owns the data?",
    a: "The organization does. Access passes cleanly to the next board at every transition, and nothing leaves with an individual when they graduate or move on. The seat keeps its history; the person hands off the keys.",
  },
  {
    q: "How fast is onboarding, really?",
    a: "Days instead of a semester. Because the institutional memory stays with the seat, an AI that has learned everything the role has done answers from the role's own history — budgets, vendors, past events, the reasons behind decisions — so a new leader is productive almost immediately.",
  },
  {
    q: "Is it for administrators or students?",
    a: "Both. Student organizations run their day-to-day operations — finance, events, members, documents — while administrations get the oversight and continuity that keep every org healthy across leadership changes.",
  },
  {
    q: "Is student data handled responsibly?",
    a: "Yes. Tenure runs on least-access by default, and the organization owns its records — not Tenure, not any individual. We collect only what the platform needs to do its job. See our Privacy page for the details.",
  },
  {
    q: "What does it cost?",
    a: "We're setting pilot pricing with the Fall 2026 organizations directly, so it fits a real student-org and administration budget. Book a demo and we'll walk you through it.",
  },
];

/** Plus mark that flips to a minus when its <details> opens. */
function Marker() {
  return (
    <span
      aria-hidden
      className="relative ml-4 grid h-5 w-5 shrink-0 place-items-center text-grove"
    >
      <span className="absolute h-[2px] w-3 rounded-full bg-current" />
      <span className="absolute h-[2px] w-3 rounded-full bg-current rotate-90 transition-transform duration-300 ease-out group-open:rotate-0" />
    </span>
  );
}

export function Faq() {
  return (
    <section className="relative border-t border-line bg-sand py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* LEFT — heading + nudge */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-[2.8rem]">
              The things teams <span className="text-grove">ask first.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-soft">
              Still deciding whether Tenure fits your org?{" "}
              <a
                href={site.bookingUrl}
                className="font-medium text-grove underline-offset-4 transition-colors hover:text-grove-deep hover:underline"
              >
                Book a demo
              </a>{" "}
              and ask us anything.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — accordion */}
        <Reveal delay={0.08} className="border-t border-line">
          {ITEMS.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-ink [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-medium tracking-[-0.01em]">
                  {item.q}
                </span>
                <Marker />
              </summary>
              <p className="max-w-xl pb-6 text-base leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
