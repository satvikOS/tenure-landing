import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { TenureRings } from "@/components/visuals/TenureRings";

const LOST = [
  "Sponsor relationships and warm intros",
  "Vendor deals, rates, and contacts",
  "Budgets, approvals, and what things cost",
  "Event playbooks and timelines",
  "The decisions — and why they were made",
];

export function ProblemReset() {
  return (
    <section className="relative border-t border-line/60 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-[25rem]">
            <TenureRings broken rings={12} className="w-full" />
          </div>
        </Reveal>

        <div className="order-1 max-w-xl lg:order-2">
          <Reveal>
            <Eyebrow index="01">The annual reset</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
              When the term ends, the record{" "}
              <em className="foil font-normal italic">scatters</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              For most organizations, the entire handoff is a shared folder and a
              single coffee chat. Relationships go cold. Vendors get re-negotiated
              from zero. The same mistakes get made again. Every board starts from
              scratch.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9">
              <p className="label-mono">What walks out the door</p>
              <ul className="mt-4 space-y-3">
                {LOST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[1.02rem] text-muted">
                    <span aria-hidden className="font-mono text-sm text-faint/80">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
