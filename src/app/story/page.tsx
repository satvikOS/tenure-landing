import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { RingSeal } from "@/components/visuals/RingSeal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Story",
  description:
    "How Tenure began at Simon Business School — and why institutional memory shouldn't reset every time leadership changes hands.",
};

const RECORD: { label: string; value: string }[] = [
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
  { label: "Partner", value: site.origin.partner },
];

export default function StoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            We kept watching good organizations{" "}
            <em className="foil font-normal italic">start over</em>.
          </>
        }
        intro={
          <>
            Tenure began at {site.origin.school}, out of a pattern that was
            impossible to unsee: every year, capable teams inherit almost
            nothing — and rebuild what already existed.
          </>
        }
      />

      {/* 1 — Why Tenure exists */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="01">Why Tenure exists</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                Every fall, the same{" "}
                <em className="foil font-normal italic">cold start</em>.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 text-lg leading-relaxed text-muted">
                At Simon, we watched it happen up close. A capable team spends a
                year building real things &mdash; sponsor relationships, event
                playbooks, a budget that finally works &mdash; and then hands all
                of it off in a shared folder and a single coffee chat. Whatever
                doesn&rsquo;t fit in that hour is gone.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                So the next board starts from memory and guesswork. Sponsor
                relationships go cold because no one knew they were there. The
                same mistakes get made again &mdash; not from carelessness, but
                because the lesson left with the person who learned it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                None of that is a people problem. It&rsquo;s a memory problem.
                Institutional knowledge shouldn&rsquo;t depend on whether one
                person remembered to write it down on their way out. It should
                accumulate on its own, as the work happens.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <blockquote className="mt-10 border-l-2 border-brass/50 pl-6 font-display text-2xl leading-snug text-parchment sm:text-[1.75rem]">
                An organization can be years old and still wake up every fall
                with no memory of itself.
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — Founders */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="02">Founders</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                The people building the{" "}
                <em className="foil font-normal italic">record</em>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {site.founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-xl border border-line bg-ink-raised/50 p-7">
                  <RingSeal rings={3} className="h-10 w-10 text-brass" />
                  <h3 className="mt-6 font-display text-xl text-parchment">
                    {f.name}
                  </h3>
                  <p className="mt-1.5 label-mono">{f.role}</p>
                  <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">
                    Building Tenure at {site.origin.school}.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 — Mission */}
      <section className="relative border-t border-line/60 bg-umber/40 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow index="03">Mission</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2.2rem] leading-[1.08] text-parchment sm:text-[2.8rem] lg:text-[3.1rem]">
                Serve any organization where people rotate faster than{" "}
                <em className="foil font-normal italic">knowledge transfers</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                We start with student clubs, where the reset is sharpest and the
                people change every spring. The same record is built for boards,
                chapters, and committees &mdash; anywhere the calendar changes
                the leadership but not the work.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4 — Where it stands */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow index="04">Where it stands</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                Where the record{" "}
                <em className="foil font-normal italic">stands today</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Tenure is early, and honest about it. Here is exactly where
                things stand &mdash; and where they go this fall, with the first
                organizations putting it to work.
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
                {RECORD.map((r) => (
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

      <CtaBand />
    </>
  );
}
