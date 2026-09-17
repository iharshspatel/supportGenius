import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "How the Handover Works | Support Genius",
  description:
    "Three steps from first call to fully covered in five weeks: a Shopify support expert learns your app and writes the docs, we start answering your merchants, then we report and improve every week.",
};

/**
 * The deep-dive version of the handover section on the homepage. Same four
 * steps, same timings, same words - this page just has room for the detail
 * underneath each one.
 */

const phases = [
  {
    num: "01",
    when: "Week 1–4",
    title: "A Shopify support expert learns your app and writes the docs",
    copy: "They install it on a test store, work through every setting and flow, and read everything your merchants have already asked. The internal docs get written from that.",
    points: [
      "Install on a test store and work through every setting, flow and theme block",
      "Read the existing ticket history and rank the questions by volume",
      "Write the docs: frequent questions, approved answers, known issues, tone",
      "Record your policies: refunds, exceptions, and what only you can approve",
    ],
  },
  {
    num: "02",
    when: "Week 5",
    title: "We start answering your merchants",
    copy: "Day-to-day support runs inside the help desk you already use, under your name. Merchants get faster replies and a consistent voice; nothing else changes for them.",
    points: [
      "We work in your existing tools, with access scoped to what the job needs",
      "Severity levels and repro requirements agreed with your engineer first",
      "A one-page list of what still reaches you: roadmap, refunds, merchant data",
      "You review the first weeks of replies before they go out, if you want to",
    ],
  },
  {
    num: "03",
    when: "Ongoing",
    title: "Feedback and improvement, every week",
    copy: "The queue gets smaller because the reasons for it get fixed. You see the numbers every month and the recurring issues as they come up.",
    points: [
      "A weekly summary, a monthly report, and QA on a sample of replies",
      "Repeat questions become help articles so they stop being asked",
      "Recurring product issues go to your team with the details attached",
      "The docs stay current as the app changes",
    ],
  },
];

const owned = [
  "Day-to-day merchant conversations across the channels we cover",
  "The playbook and help docs - kept current as the product changes",
  "Ticket triage, investigation notes, and escalations with repro steps attached",
  "Weekly trend reporting and the product friction we keep running into",
];

const retained = [
  "Roadmap, feature decisions, and everything your engineers own",
  "Final say on refunds, pricing exceptions, and commercial calls",
  "Access decisions and any action that touches sensitive merchant data",
  "Priority - you decide what gets fixed first",
];

const faqs = [
  {
    q: "How do you learn our app?",
    a: "Week one is nothing but learning. We install the app on a test store, reproduce the issues merchants report most, and read the ticket history to find out what actually gets asked. Then we write it down and you correct us before anything goes out.",
  },
  {
    q: "Can you use our existing help desk?",
    a: "Yes, and we prefer to. We work inside the tools your team already uses, with access scoped to what the work requires. Tools, permissions and reporting get confirmed in week one, before anyone touches a live ticket.",
  },
  {
    q: "What stays with our product or engineering team?",
    a: "Roadmap decisions, bug fixes, sensitive account actions, and anything needing product authority. You get a one-page list of exactly what still reaches you, and everything on it arrives with the context already gathered.",
  },
  {
    q: "What does it cost?",
    a: "$10 an hour, flat, for the hours you book. No setup fee, no per-ticket charge, and you can change the hours in any month - including down, in a quiet one.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      {/* ---------------------------------------------------------------- Hero */}
      <section className="section-hero">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div data-reveal>
            <p className="eyebrow">The handover</p>
            <h1 className="display-xxl mt-4">
              From first call to fully covered in five weeks
            </h1>
            <p className="mt-6 max-w-[40rem] text-[17.5px] leading-[1.62] text-ink-mute">
              Nobody drops into your inbox on day one and starts guessing.
              Three steps - and you are only hands-on for the first one.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a 30-minute call
              </Link>
              <Link href="/services" className="btn-secondary">
                See our services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute-2">
              <span className="flex items-center gap-2">
                <span className="status-dot-green" />
                No developer time after week two
              </span>
              <span className="flex items-center gap-2">
                <span className="status-dot-green" />
                $10 / hour, flat
              </span>
            </div>
          </div>

          {/* The five weeks, at a glance */}
          <div
            data-reveal
            className="overflow-hidden rounded-[16px] border border-hairline bg-canvas-raised shadow-[0_18px_44px_-16px_rgba(14,21,51,0.16)]"
          >
            <div className="flex items-center gap-2.5 border-b border-hairline px-5 py-3.5">
              <span className="status-dot-green" />
              <span className="text-[13px] font-medium text-ink">
                A controlled transition
              </span>
            </div>

            {phases.map((p, i) => (
              <div
                key={p.num}
                className={`flex items-center justify-between gap-4 px-5 py-4 ${
                  i > 0 ? "border-t border-hairline-cool" : ""
                }`}
              >
                <div>
                  <p className="text-[14px] font-medium leading-snug text-ink">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[12.5px] text-ink-mute">
                    {p.points[0]}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-canvas-soft px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-mute">
                  {p.when}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Phases */}
      <section className="section-dark-elevated border-y border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div data-reveal className="measure-wide">
            <p className="eyebrow">Step by step</p>
            <h2 className="display-xl mt-4">What happens in each step</h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
              Each step ends with something you can hold: a support playbook, a
              set of rules for what still reaches you, and a weekly report.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {phases.map((p) => (
              <div
                key={p.num}
                data-reveal
                className="rounded-[16px] border border-hairline bg-canvas-raised p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3 border-b border-hairline-cool pb-4">
                  <span className="font-mono text-[12px] tracking-[0.1em] text-primary">
                    {p.num}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.11em] text-ink-mute-2">
                    {p.when}
                  </span>
                </div>

                <h3 className="display-md mt-5">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">
                  {p.copy}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-[14px] leading-relaxed text-ink-secondary">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Boundaries */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div data-reveal className="measure-wide">
          <p className="eyebrow">The line</p>
          <h2 className="display-xl mt-4">Who owns what, written down first</h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
            Agreed in week one, before a single live ticket. If it is not on the
            right-hand list, it does not come to you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            { title: "We own", items: owned, accent: true },
            { title: "You keep", items: retained, accent: false },
          ].map((col) => (
            <div
              key={col.title}
              data-reveal
              className="rounded-[16px] border border-hairline bg-canvas-raised p-6 sm:p-8"
            >
              <div className="flex items-center gap-2.5 border-b border-hairline-cool pb-4">
                <span
                  className={`h-2 w-2 rounded-full ${
                    col.accent ? "bg-primary" : "bg-ink"
                  }`}
                />
                <h3 className="heading-lg">{col.title}</h3>
              </div>
              <ul className="mt-5 space-y-3.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                        col.accent ? "bg-primary" : "bg-ink-faint"
                      }`}
                    />
                    <span className="text-[14.5px] leading-relaxed text-ink-mute">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="section-dark-elevated border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div data-reveal className="lg:col-span-4">
              <p className="eyebrow">Questions</p>
              <h2 className="display-lg mt-4">Before you hand anything over</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-mute">
                The transition, tool access, and where engineering stays in
                charge.
              </p>
            </div>

            <div data-reveal className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- CTA */}
      <section className="section-cta border-t border-hairline">
        <div className="mx-auto max-w-[46rem] px-6 py-20 text-center lg:py-28">
          <div data-reveal>
            <h2 className="display-xl">Start with week one</h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
              Thirty minutes on your ticket volume, your channels, and what you
              are still answering yourself at 11pm.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a 30-minute call
              </Link>
              <Link href="/services" className="btn-secondary">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
