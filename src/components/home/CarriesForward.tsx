import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";

const FIELDS = [
  {
    n: "01",
    t: "Sponsor & partner contacts",
    d: "Names, history, and the warm intros — not a cold list.",
  },
  {
    n: "02",
    t: "Vendor deals & pricing",
    d: "Who you used, what you paid, and the terms you agreed to.",
  },
  {
    n: "03",
    t: "Budgets & approvals",
    d: "What things actually cost, and what leadership signed off on.",
  },
  {
    n: "04",
    t: "Event playbooks",
    d: "Timelines, checklists, vendors, and what worked last time.",
  },
  {
    n: "05",
    t: "Decisions & rationale",
    d: "Not just what was decided — why, so it isn't relitigated.",
  },
  {
    n: "06",
    t: "Rosters & roles",
    d: "Who did what, who to reach, and how responsibilities split.",
  },
];

export function CarriesForward() {
  return (
    <section className="relative border-t border-line/60 bg-umber/40 py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow index="04">What carries forward</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
              The fields of the record that{" "}
              <em className="foil font-normal italic">survive the year</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line-warm bg-line-warm sm:grid-cols-2 lg:grid-cols-3">
          {FIELDS.map((f, i) => (
            <Reveal
              key={f.n}
              delay={(i % 3) * 0.06}
              className="group bg-umber p-7 transition-colors hover:bg-umber-raised"
            >
              <div className="flex items-baseline justify-between">
                <span className="label-mono text-brass/80">Field {f.n}</span>
                <span
                  aria-hidden
                  className="font-mono text-faint transition-colors group-hover:text-brass"
                >
                  ↳
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-parchment">{f.t}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
