import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { RingSeal } from "@/components/visuals/RingSeal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Pilot",
  description:
    "A hands-on Fall 2026 pilot with six student organizations and Simon's Office of Student Engagement, building the first year of each org's living record together.",
};

const INCLUDED: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "Hands-on setup from your existing folder",
    d: "We sit down with what you already have — the shared drive, the half-finished handoff doc, the contacts in someone’s inbox — and shape it into your first record.",
  },
  {
    n: "02",
    t: "A workspace for every role",
    d: "President, treasurer, sponsorship, events — each seat gets a living space where knowledge is captured as the work actually happens.",
  },
  {
    n: "03",
    t: "A real handoff at term’s end",
    d: "When leadership turns over, we run the transition with you, so the next board opens an organized history instead of a cold start.",
  },
  {
    n: "04",
    t: "A direct line to the founders",
    d: `You work with ${site.founders[0].name} and ${site.founders[1].name} through the whole pilot. What you tell us shapes what Tenure becomes.`,
  },
];

const WHO: string[] = [
  "Organizations with leadership that turns over every year or semester.",
  "An existing folder or drive of knowledge that’s worth keeping.",
  "A board that wants the next one to start ahead — not from zero.",
];

const STEPS: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "Onboard your existing knowledge",
    d: "We import your current drive and folders, then organize the first version of your record around the roles your org actually runs on.",
  },
  {
    n: "02",
    t: "Capture the term as it happens",
    d: "Through the fall, contacts, decisions, vendors and playbooks get logged in context — without changing the tools you already use.",
  },
  {
    n: "03",
    t: "Mark what matters at handoff",
    d: "At term’s end, outgoing leaders flag what the next board needs to know. Tenure assembles it into a clean, organized handoff.",
  },
  {
    n: "04",
    t: "The next board starts on day one",
    d: "The incoming team opens a living history and picks up mid-stride — the founding year of the record, already written.",
  },
];

// node fill deepens toward "day one" — the record filling in across the term
const FILL = [
  "border-brass/30 bg-brass/[0.06] text-brass",
  "border-brass/40 bg-brass/[0.12] text-brass",
  "border-brass/55 bg-brass/[0.2] text-brass-glint",
  "border-brass bg-brass text-ink",
];

export default function PilotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fall 2026 pilot"
        title={
          <>
            Six organizations. One{" "}
            <em className="foil font-normal italic">founding record</em>.
          </>
        }
        intro={
          <>
            This fall, Tenure runs a hands-on pilot with six student
            organizations and Simon’s Office of Student Engagement — building the
            first year of each org’s living record together.
          </>
        }
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={site.bookingUrl} size="lg" arrow>
            Book an intro call
          </Button>
          <Button
            href={`mailto:${site.email}?subject=Tenure%20pilot%20%E2%80%94%20our%20organization`}
            variant="secondary"
            size="lg"
          >
            Ask about joining
          </Button>
        </div>
      </PageHeader>

      {/* 1 — What the pilot includes */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="01">What&rsquo;s included</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                Four things every founding org{" "}
                <em className="foil font-normal italic">walks away with</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Six organizations, one term, hands-on the whole way. No
                placeholder accounts and no waiting list — here is what every
                pilot org gets.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line-warm bg-line-warm sm:grid-cols-2">
            {INCLUDED.map((f, i) => (
              <Reveal
                key={f.n}
                delay={(i % 2) * 0.06}
                className="group bg-umber p-7 transition-colors hover:bg-umber-raised"
              >
                <div className="flex items-baseline justify-between">
                  <span className="label-mono text-brass/80">Included {f.n}</span>
                  <span
                    aria-hidden
                    className="font-mono text-faint transition-colors group-hover:text-brass"
                  >
                    ↳
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-parchment">{f.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {f.d}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 2 — Who it's for */}
      <section className="relative border-t border-line/60 bg-umber/40 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="02">Who it&rsquo;s for</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                Who the first six are{" "}
                <em className="foil font-normal italic">built for</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                We&rsquo;re keeping the founding cohort small and close. A good
                fit looks like this.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 max-w-3xl">
            <ul className="border-t border-line/60">
              {WHO.map((w, i) => (
                <Reveal
                  as="li"
                  key={w}
                  delay={i * 0.06}
                  className="flex items-start gap-4 border-b border-line/60 py-5"
                >
                  <span
                    aria-hidden
                    className="mt-[0.55rem] h-2 w-2 shrink-0 bg-brass"
                  />
                  <span className="text-[1.05rem] leading-relaxed text-parchment">
                    {w}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 3 — How the pilot runs */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="03">How it runs</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                How the year{" "}
                <em className="foil font-normal italic">takes shape</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                No big migration and no new tool to learn. The pilot runs in four
                moves across a single term.
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
                    className={
                      "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-mono text-sm " +
                      FILL[i]
                    }
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-medium text-parchment">
                    {s.t}
                  </h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">
                    {s.d}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 4 — For institutions */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line-warm bg-umber p-8 sm:p-12">
              <RingSeal
                rings={6}
                className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 text-brass/[0.05]"
              />
              <div className="relative max-w-2xl">
                <p className="label-mono text-brass/80">For institutions</p>
                <h2 className="font-display mt-5 text-[2rem] leading-[1.1] text-parchment sm:text-[2.5rem]">
                  For the offices that{" "}
                  <em className="foil font-normal italic">steward them</em>.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  {site.origin.partner} is part of this pilot. If your office
                  stewards dozens of organizations, Tenure gives every one of
                  them a memory that survives turnover — so the knowledge you
                  fund each year stops leaving with the students who built it.
                </p>
                <div className="mt-9">
                  <Button href={site.bookingUrl} size="lg" arrow>
                    Book an intro call
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
