import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DashboardMock } from "@/components/visuals/DashboardMock";
import { ContourField } from "@/components/visuals/ContourField";
import { HeroShapes } from "@/components/home/HeroShapes";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_55%_at_50%_0%,rgba(28,140,90,0.08),transparent_60%)]"
      />

      {/* faint flowing contour grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[78%] text-grove/[0.16] [mask-image:radial-gradient(80%_75%_at_50%_15%,black,transparent_74%)]"
      >
        <ContourField seed={1} />
      </div>

      {/* geometric accents (Frankli) — angular, floating, no circles */}
      <HeroShapes />

      <Container className="relative pb-16 pt-32 text-center sm:pt-40">
        <Reveal>
          <Eyebrow className="justify-center">
            University ERP · built for turnover
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="font-display mx-auto mt-6 max-w-4xl text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.6rem] lg:text-[4.25rem]">
            People graduate.
            <br />
            The <span className="text-grove">know-how stays.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Tenure runs your organization&rsquo;s finances, events, members, and
            memory in one place. When leaders change, an AI that has learned
            everything the role has done gets the next person productive in days —
            not a semester.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={site.bookingUrl} size="lg" arrow>
              Book a demo
            </Button>
            <Button href="#how" variant="secondary" size="lg">
              See how it works
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26} className="mt-14">
          <DashboardMock className="mx-auto max-w-4xl" />
        </Reveal>
      </Container>
    </section>
  );
}
