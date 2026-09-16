/**
 * The four things that go wrong for a Shopify app founder as support scales.
 * Problems only — the solution gets its own section further down the page.
 *
 * Built for scanning: four headlines carry the whole argument, the line under
 * each is optional detail, and the chip names what it costs.
 */

const problems = [
  {
    n: "01",
    head: "The inbox eats the roadmap",
    body: "Tickets arrive all day, so building the product and finding new merchants get pushed to whatever is left of the evening.",
    cost: "Ships slower",
  },
  {
    n: "02",
    head: "Slow replies turn into 1-star reviews",
    body: "A merchant waits two days for an answer. Some of them stop waiting and write about it on your listing instead.",
    cost: "Public, permanent",
  },
  {
    n: "03",
    head: "Your merchants don't sleep when you do",
    body: "A store in Berlin hits a bug at 2am your time. It sits unread until morning, and by then they have opened a second ticket.",
    cost: "Half the day uncovered",
  },
  {
    n: "04",
    head: "Hiring for it is a project of its own",
    body: "Someone who already knows Shopify, Liquid and app embeds is hard to find, slow to interview and expensive to keep busy.",
    cost: "Months + a salary",
  },
];

export default function ProblemGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
      {problems.map((p) => (
        <div
          key={p.n}
          className="rounded-[14px] border border-hairline bg-canvas-raised p-6 sm:p-7"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10.5px] tracking-[0.12em] text-ink-faint">
              {p.n}
            </span>
            <span className="rounded-full bg-signal-alert-wash px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-signal-alert">
              {p.cost}
            </span>
          </div>

          <h3 className="mt-4 text-[19px] font-semibold leading-snug text-ink sm:text-[21px]">
            {p.head}
          </h3>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-mute">
            {p.body}
          </p>
        </div>
      ))}
    </div>
  );
}
