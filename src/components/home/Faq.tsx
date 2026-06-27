import { Ribbons } from "@/components/visuals/Ribbons";
import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/lib/site";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "Does Tenure replace our Google Drive, Slack, or Notion?",
    a: "No — Tenure fits around the tools you already use and pulls what matters into one system of record. The files, threads, and decisions that define how the org runs stop living in someone's personal account and start belonging to the role.",
  },
  {
    q: "Who owns the data?",
    a: "The organization does. Access passes cleanly to the next board at every transition, and nothing leaves with an individual when they graduate or move on.",
  },
  {
    q: "How fast is onboarding, really?",
    a: "Days instead of a semester. Because the memory stays with the seat, an AI that has learned everything the role has done answers from the role's own history — budgets, vendors, past events, the reasons behind decisions.",
  },
  {
    q: "Is it for administrators or students?",
    a: "Both. Student organizations run their day-to-day — finance, events, members, documents — while administrations get the oversight and continuity that keep every org healthy across leadership changes.",
  },
  {
    q: "Is student data handled responsibly?",
    a: "Yes. Tenure runs on least-access by default, and the organization owns its records — not Tenure, not any individual. See our Privacy page for the details.",
  },
  {
    q: "What does it cost?",
    a: "We're setting pilot pricing with the Fall 2026 organizations directly, so it fits a real student-org and administration budget. Book a demo and we'll walk you through it.",
  },
];

export function Faq() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-paper py-24 sm:py-32">
      {/* vibrant flowing ribbons cutting in from the top-right (no background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-24 h-[82%] w-[60%] [mask-image:linear-gradient(250deg,black,black_42%,transparent_82%)]"
      >
        <Ribbons className="h-full w-full" />
      </div>

      <Container className="relative">
        <Reveal>
          <h2 className="font-display text-[2.4rem] font-semibold leading-[1] tracking-[-0.035em] text-ink sm:text-[3rem]">
            FAQ
          </h2>
        </Reveal>

        <div className="mt-10 max-w-3xl border-t border-line/70 pt-8">
          <div className="flex flex-col gap-3.5">
            {ITEMS.map((item, i) => (
              <Reveal as="div" key={item.q} delay={Math.min(i * 0.05, 0.3)}>
                <details className="group" name="faq" open={i === 2}>
                  <summary className="inline-flex w-fit max-w-[90%] cursor-pointer list-none items-center gap-3 rounded-2xl border border-line bg-cloud px-5 py-3 text-[0.98rem] text-ink shadow-[0_1px_2px_rgba(12,30,51,0.05)] transition-colors hover:border-grove/40 [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span
                      aria-hidden
                      className="relative ml-1 grid h-4 w-4 shrink-0 place-items-center text-grove"
                    >
                      <span className="absolute h-[2px] w-3 rounded-full bg-current" />
                      <span className="absolute h-[2px] w-3 rotate-90 rounded-full bg-current transition-transform duration-300 group-open:rotate-0" />
                    </span>
                  </summary>
                  <div className="ml-auto mt-3 flex w-fit max-w-lg items-start gap-3 rounded-2xl rounded-tr-md bg-grove-soft px-5 py-3.5">
                    <Logo className="mt-0.5 h-4 w-4 shrink-0 text-grove" />
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-ink-soft">
            Still deciding whether Tenure fits your org?{" "}
            <a
              href={site.bookingUrl}
              className="font-medium text-grove underline-offset-4 transition-colors hover:text-grove-deep hover:underline"
            >
              Book a demo
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
