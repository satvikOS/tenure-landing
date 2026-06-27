import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { ContourField } from "@/components/visuals/ContourField";

/** Consistent top-of-page header for every non-home route. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(90%_70%_at_85%_-20%,rgba(201,138,58,0.09),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 hidden h-[180%] w-[58%] text-brass opacity-[0.42] blur-[1px] [mask-image:radial-gradient(58%_56%_at_84%_30%,black,transparent_72%)] sm:block"
      >
        <ContourField lines={16} seed={3} />
      </div>
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="font-display mt-6 max-w-3xl text-[2.5rem] leading-[1.06] text-parchment sm:text-[3.2rem] lg:text-[3.6rem]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.18}>
            <div className="mt-9">{children}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
