import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { RingSeal } from "@/components/visuals/RingSeal";
import { site } from "@/lib/site";

export function Credibility() {
  const record: { label: string; value: string }[] = [
    {
      label: "Founded",
      value: `${site.origin.school}, ${site.origin.university}`,
    },
    {
      label: "Founders",
      value: site.founders.map((f) => f.name).join("  ·  "),
    },
    {
      label: "Pilot",
      value: `${site.pilot.season} · ${site.pilot.orgCount} organizations`,
    },
    { label: "Backing", value: site.origin.partner },
  ];

  return (
    <section className="relative border-t border-line/60 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow index="05">Where it started</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-6 text-[2rem] leading-[1.12] text-parchment sm:text-[2.5rem] lg:text-[2.8rem]">
              Built for any organization where people rotate faster than{" "}
              <em className="foil font-normal italic">knowledge transfers</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tenure started at {site.origin.school} with the people who actually
              run these organizations. It begins with student clubs — and is built
              for boards, chapters, and committees everywhere the calendar resets
              the leadership but not the work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-xl border border-line bg-ink-raised/60 p-7 sm:p-9">
            <RingSeal
              rings={5}
              className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 text-brass/[0.06]"
            />
            <p className="label-mono">Record of founding</p>
            <dl className="relative mt-6 divide-y divide-line">
              {record.map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="w-28 shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                    {r.label}
                  </dt>
                  <dd className="text-[1.02rem] text-parchment">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
