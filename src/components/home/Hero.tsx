import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TenureRings } from "@/components/visuals/TenureRings";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_70%_-10%,rgba(201,138,58,0.10),transparent_55%),radial-gradient(80%_60%_at_-10%_110%,rgba(123,166,160,0.06),transparent_60%)]"
      />

      <Container className="relative grid items-center gap-16 pb-24 pt-32 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32">
        {/* ---- thesis ---- */}
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow>Institutional memory, built for turnover</Eyebrow>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 text-[2.65rem] leading-[1.04] text-parchment sm:text-[3.4rem] lg:text-[3.95rem]">
              Your board changes every year.
              <br />
              Its <em className="foil font-normal italic">memory</em> shouldn&rsquo;t.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">
              Sponsor contacts, vendor deals, budgets, the event playbook — the
              moment one board hands off, it scatters. Tenure captures the work as
              it happens, so the next team inherits a living record on day one,
              not a cold start.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={site.bookingUrl} size="lg" arrow>
                Book an intro call
              </Button>
              <Button href="#handoff" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 flex items-start gap-3 text-sm leading-relaxed text-faint">
              <span aria-hidden className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-patina" />
              Piloting {site.pilot.season} with {wordCount(site.pilot.orgCount)}{" "}
              organizations and {site.origin.partner}.
            </p>
          </Reveal>
        </div>

        {/* ---- signature ---- */}
        <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <TenureRings
            rings={12}
            labeled
            startYear={2014}
            currentTerm="2025–26"
            className="h-auto w-full"
          />

          {/* a taste of the record, inherited intact */}
          <Reveal
            delay={0.5}
            className="absolute -bottom-2 -left-1 w-[17.5rem] max-w-[78%] sm:-left-3"
          >
            <figure className="rounded-lg border border-line bg-ink-raised/85 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span aria-hidden className="h-3 w-0.5 rounded-full bg-brass" />
                <span className="label-mono">Inherited record</span>
              </div>
              <p className="mt-2.5 font-display text-lg leading-snug text-parchment">
                Aramark — sponsorship renewal
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                $4,000 · multi-year · signed Oct 2023
              </p>
              <div className="my-3 h-px w-full bg-line" />
              <p className="font-mono text-[0.7rem] leading-relaxed text-faint">
                ↳ from Maya Chen · Treasurer · Term 2023&ndash;24
              </p>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function wordCount(n: number): string {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven"];
  return words[n] ?? String(n);
}
