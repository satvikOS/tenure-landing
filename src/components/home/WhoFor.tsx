import type { ReactNode } from "react";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";
import { SectionContour } from "@/components/visuals/SectionContour";

type Audience = {
  icon: ReactNode;
  title: string;
  body: string;
  features: string[];
  photo: string;
  alt: string;
};

function OrgIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.6" fill="currentColor" />
    </svg>
  );
}

function AdminIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 9l8-5 8 5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5.5 9v8M12 9v8M18.5 9v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const AUDIENCES: Audience[] = [
  {
    icon: <OrgIcon />,
    title: "Student organizations",
    body: "Run the club and hand it off clean: finances, events, members, and a record the next board inherits on day one — no scattered drives, no lost passwords, no starting from zero.",
    features: [
      "One ledger for budgets, dues, and reimbursements",
      "Events, rosters, and vendor contacts in one place",
      "A clean handoff the next board opens immediately",
    ],
    photo: "/photos/students-laptop.jpg",
    alt: "Student organization members gathered around a laptop on campus",
  },
  {
    icon: <AdminIcon />,
    title: "University administrations",
    body: "Oversight and continuity across every organization you steward. The institutional memory survives turnover instead of leaving with each cohort — and onboarding the next leader takes days, not a semester.",
    features: [
      "A live view across every org you oversee",
      "Spending and compliance records that persist by seat",
      "Knowledge that stays with the role through every transition",
    ],
    photo: "/photos/team-charts.jpg",
    alt: "An administrative team reviewing budgets and plans around a table",
  },
];

function Check() {
  return (
    <span
      aria-hidden
      className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md bg-grove-soft text-grove-deep"
    >
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path
          d="M3.5 8.5l3 3 6-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function WhoFor() {
  return (
    <section className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32">
      <SectionContour place="tl" seed={8} className="text-ink/[0.06]" />
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Who it&rsquo;s for</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-[2.8rem]">
              Built for both sides of the <span className="text-grove">org chart</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              The people rotate every year. The role stays. Tenure keeps the
              operations and the memory with the seat — so leaders run their term,
              and stewards keep continuity across all of them.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={0.06 + i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-cloud shadow-[0_1px_2px_rgba(12,30,51,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-28px_rgba(12,30,51,0.35)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={a.photo}
                    alt={a.alt}
                    width={1600}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-cloud/95 text-grove backdrop-blur">
                    {a.icon}
                  </span>
                  <h3 className="absolute bottom-4 left-5 font-display text-xl font-semibold text-paper">
                    {a.title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="leading-relaxed text-ink-soft">{a.body}</p>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink">
                        <Check />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
