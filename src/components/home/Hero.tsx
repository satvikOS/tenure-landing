import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DashboardMock } from "@/components/visuals/DashboardMock";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_55%_at_50%_0%,rgba(28,140,90,0.08),transparent_60%)]"
      />

      {/* geometric accents (Frankli) — angular, no circles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute left-[7%] top-[26%] h-7 w-7 rotate-[18deg] rounded-[7px] bg-coral/85" />
        <div className="absolute right-[9%] top-[20%] h-5 w-5 rotate-45 rounded-[4px] bg-violet/80" />
        <svg
          className="absolute left-[14%] top-[52%] h-8 w-8 text-gold"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l10 18H2z" />
        </svg>
        <div className="absolute right-[13%] top-[55%] h-7 w-7 text-sky">
          <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-current" />
          <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-current" />
        </div>
      </div>

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
