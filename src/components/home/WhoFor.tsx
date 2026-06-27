import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/Reveal";

type Audience = {
  icon: ReactNode;
  title: string;
  body: string;
  features: string[];
  tinted?: boolean;
};

/** A clustered, angular mark — the rotating board. No circles. */
function OrgIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="3" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.6" fill="currentColor" />
    </svg>
  );
}

/** A steady framework — the institution that stewards. */
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
      "A clean handoff packet the next board opens immediately",
    ],
  },
  {
    icon: <AdminIcon />,
    title: "University administrations",
    body: "Oversight and continuity across every organization you steward. The institutional memory survives turnover instead of leaving with each cohort — and onboarding the next leader takes days, not a semester.",
    features: [
      "A live view across every org you oversee",
      "Compliance and spending records that persist by seat",
      "Knowledge that stays with the role through every transition",
    ],
    tinted: true,
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
    <section className="relative border-t border-line py-24 sm:py-32">
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
              <article
                className={`flex h-full flex-col rounded-2xl border border-line p-7 shadow-[0_1px_2px_rgba(12,30,51,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(12,30,51,0.25)] sm:p-8 ${
                  a.tinted ? "bg-grove-soft/50" : "bg-cloud"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-cloud text-grove">
                  {a.icon}
                </span>

                <h3 className="font-display mt-6 text-xl font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{a.body}</p>

                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink">
                      <Check />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
