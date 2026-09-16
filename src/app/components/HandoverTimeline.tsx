/**
 * The handover, as a sequence — because it is one. A grid of steps was the
 * tell that nobody looked at the page.
 *
 * Three steps, stated plainly: what happens, one line of detail, and what you
 * are holding at the end of it. Read only the three headlines and you still
 * have the shape.
 *
 * No JavaScript: the rail fills using a scroll-driven `view()` timeline, so
 * the line tracks your actual reading position and reverses if you scroll
 * back up. Browsers without support get a filled rail and lose nothing.
 */

const steps = [
  {
    num: "01",
    weeks: "Week 1–4",
    title: "A Shopify support expert learns your app and writes the docs",
    body: "They install it on a test store, work through every setting and flow, and read your existing tickets. Then the internal docs get written: the questions merchants ask most, the approved answer for each, your tone and your policies.",
    artifact: "You end up with: a support playbook in your words, reviewed by your team",
  },
  {
    num: "02",
    weeks: "Week 5",
    title: "We start answering your merchants",
    body: "Day-to-day support runs inside the help desk you already use, under your name. Severity levels, escalation rules and refund limits are agreed before the first live ticket.",
    artifact: "You end up with: a one-page list of what still comes to you",
  },
  {
    num: "03",
    weeks: "Ongoing",
    title: "Feedback and improvement, every week",
    body: "A weekly summary, monthly reports, and a sample of replies reviewed for quality. Repeat questions become help articles, and recurring product issues go to your team with the details attached.",
    artifact: "You end up with: fewer repeat tickets, and the reasons why",
  },
];

export default function HandoverTimeline() {
  return (
    <ol className="relative mt-14 pl-8 sm:pl-12">
      {/* Rail */}
      <div
        aria-hidden="true"
        className="absolute left-[3px] top-2 bottom-8 w-px bg-hairline sm:left-[7px]"
      >
        <div className="rail-fill h-full w-full origin-top bg-primary/70" />
      </div>

      {steps.map((s) => (
        <li key={s.num} data-reveal className="relative pb-12 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-[7px] h-[7px] w-[7px] rounded-full bg-primary ring-4 ring-canvas sm:-left-12"
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
              {s.num}
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute-2">
              {s.weeks}
            </span>
          </div>
          <h3 className="display-md mt-2">{s.title}</h3>
          <p className="mt-3 max-w-[38rem] text-[15.5px] leading-relaxed text-ink-mute">
            {s.body}
          </p>
          <p className="mt-4 inline-block border-l-2 border-primary-edge pl-3 font-mono text-[11.5px] leading-relaxed text-ink-secondary">
            {s.artifact}
          </p>
        </li>
      ))}
    </ol>
  );
}
