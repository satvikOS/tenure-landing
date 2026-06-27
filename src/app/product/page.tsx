import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductFrame } from "@/components/visuals/ProductFrame";
import { RingSeal } from "@/components/visuals/RingSeal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Product",
  description:
    "Tenure gives every role on the board its own living record — contacts, deals, decisions, and playbooks — captured as the work happens and inherited intact at handoff.",
};

const TOOLS = ["Google Drive", "Slack", "Notion", "Sheets", "Gmail", "Calendar"];

const MODES: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "Contacts & relationships",
    d: "Sponsors, partners, and alumni — with the warm intro behind each name.",
  },
  {
    n: "02",
    t: "Deals & numbers",
    d: "Vendors, pricing, and budgets — the terms you actually agreed to.",
  },
  {
    n: "03",
    t: "Decisions & rationale",
    d: "What the board chose and why, so next year doesn't relitigate it.",
  },
  {
    n: "04",
    t: "Files & playbooks",
    d: "Decks, timelines, and checklists — the documents that ran the work.",
  },
];

const SEATS = [
  "President",
  "Treasurer",
  "Sponsorship",
  "Events",
  "Marketing",
  "Recruitment",
];

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow="The product"
        title={
          <>
            A workspace for every role that{" "}
            <em className="foil font-normal italic">remembers</em>.
          </>
        }
        intro="Each seat on the board gets its own living record — contacts, deals, decisions, playbooks — captured as the work happens and inherited intact when the term turns over."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={site.bookingUrl} size="lg" arrow>
            Book an intro call
          </Button>
          <Button href="/pilot" variant="secondary" size="lg">
            Join the pilot
          </Button>
        </div>
      </PageHeader>

      {/* 1 — A living record per seat */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="01">The workspace</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                A living record per{" "}
                <em className="foil font-normal italic">seat</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Open any role and you find its working memory — the contacts,
                deals, decisions, and files that belong to that seat, kept
                current as the term runs and provenance kept on every entry.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-14">
            <ProductFrame />
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { k: "Provenance", v: "Who added it, and when" },
                { k: "Term", v: "The year it belongs to" },
                { k: "Seat", v: "The role it carries with" },
              ].map((x) => (
                <div key={x.k} className="border-t border-line pt-4">
                  <dt className="label-mono text-brass/80">{x.k}</dt>
                  <dd className="mt-2 text-[1rem] text-parchment">{x.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-muted">
                Connects to where the work already lives — no migration, no new
                place to check.
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

      {/* 2 — Captured as the work happens */}
      <section className="relative border-t border-line/60 py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="02">Capture</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                Captured as the work{" "}
                <em className="foil font-normal italic">happens</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                No one writes the handoff doc at the end of the year. The record
                fills itself, across four fields, as the team does the work.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 max-w-3xl border-t border-line">
            {MODES.map((m, i) => (
              <Reveal
                as="div"
                key={m.n}
                delay={i * 0.05}
                className="flex flex-col gap-1.5 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="label-mono shrink-0 text-brass/80 sm:w-24">
                  Field {m.n}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-parchment">{m.t}</h3>
                  <p className="mt-1.5 text-[0.97rem] leading-relaxed text-muted">
                    {m.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3 — A seat, not a person */}
      <section className="relative border-t border-line/60 bg-umber/40 py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow index="03">Ownership</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-[2rem] leading-[1.08] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
                A seat, not a{" "}
                <em className="foil font-normal italic">person</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Every record belongs to the role, not the student who created
                it. The treasurer&rsquo;s seat owns the treasurer&rsquo;s
                knowledge — vendors, budgets, approvals — no matter who is
                sitting in it this term.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                So when leadership turns over, nothing walks out the door. The
                work stays with the seat, and the next person inherits it
                intact.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-xl border border-line bg-ink-raised/60 p-7 sm:p-9">
              <RingSeal
                rings={6}
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 text-brass/[0.06]"
              />
              <p className="label-mono">Record of seats</p>
              <ul className="relative mt-6 divide-y divide-line">
                {SEATS.map((seat, i) => (
                  <li
                    key={seat}
                    className="flex items-center gap-4 py-4 first:pt-0"
                  >
                    <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-faint">
                      {`S-${String(i + 1).padStart(2, "0")}`}
                    </span>
                    <span className="flex-1 text-[1.02rem] text-parchment">
                      {seat}
                    </span>
                    <span aria-hidden className="font-mono text-patina">
                      ↳
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
