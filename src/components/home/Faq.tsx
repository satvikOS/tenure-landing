import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const QA = [
  {
    q: "Does Tenure replace our Google Drive, Slack, or Notion?",
    a: "No. Tenure sits on top of the tools you already use and pulls the things that matter into one living record the next board can actually find.",
  },
  {
    q: "Who owns the information?",
    a: "The organization does. Each board inherits it; nothing leaves with an individual when their term ends.",
  },
  {
    q: "What actually happens at handoff?",
    a: "Outgoing leaders mark what matters and Tenure assembles the record. Incoming leaders open an organized history on day one — contacts, deals, playbooks, and the reasoning behind them.",
  },
  {
    q: "How long does it take to set up?",
    a: "It's built to start from your existing folder, so you're not rebuilding anything. Most of the value is simply capturing the work you're already doing.",
  },
  {
    q: "Is it only for student clubs?",
    a: "It starts there — but it's for any organization where leadership rotates on a schedule and knowledge doesn't transfer with it.",
  },
  {
    q: "What does it cost?",
    a: "We're setting pilot pricing with our Fall 2026 organizations. Book an intro call and we'll walk you through it.",
  },
];

export function Faq() {
  return (
    <section className="relative border-t border-line/60 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow index="06">Questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.1] text-parchment sm:text-[2.5rem]">
              The things boards ask first.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-muted">
              Still wondering about your organization in particular?{" "}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass underline-offset-4 transition-colors hover:text-brass-glint hover:underline"
              >
                Book an intro call
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="border-t border-line">
            {QA.map((item) => (
              <details
                key={item.q}
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[1.05rem] text-parchment transition-colors hover:text-brass-glint [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="relative h-4 w-4 shrink-0 text-brass"
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <p className="max-w-xl pb-6 text-[0.98rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
