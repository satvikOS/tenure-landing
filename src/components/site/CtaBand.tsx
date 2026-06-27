import { Container } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TenureRings } from "@/components/visuals/TenureRings";
import { site } from "@/lib/site";
import type { ReactNode } from "react";

/** Site-wide closing call to action. Reused at the foot of every page. */
export function CtaBand({
  eyebrow = "Begin the record",
  title,
  sub = "See Tenure on your organization's real handoff. A short call — we'll show you exactly what carries forward.",
}: {
  eyebrow?: string;
  title?: ReactNode;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line/60 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[46rem] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-50 [mask-image:radial-gradient(closest-side,black,transparent_78%)]"
      >
        <TenureRings rings={10} className="w-full" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_50%,rgba(201,138,58,0.08),transparent_70%)]"
      />

      <Container className="relative text-center">
        <Reveal>
          <p className="label-mono">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-[2.4rem] leading-[1.05] text-parchment sm:text-[3.2rem] lg:text-[3.6rem]">
            {title ?? (
              <>
                Hand off the org.
                <br className="hidden sm:block" /> Not a{" "}
                <em className="foil font-normal italic">cold start</em>.
              </>
            )}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">{sub}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Button href={site.bookingUrl} size="lg" arrow>
              Book an intro call
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="text-[0.97rem] text-muted underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              or email us
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
