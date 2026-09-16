/**
 * The hire-vs-us section. This is the close for problem 04 — hiring is slow,
 * expensive and messy — so it is framed as the same decision, priced two ways.
 *
 * Six rows, scannable down either column. No interaction: the whole argument
 * is visible without a click.
 */

const rows = [
  {
    label: "Cost",
    hire: "Salary, benefits and payroll — every month, busy or quiet",
    us: "$10 an hour, only for the hours you book",
  },
  {
    label: "Time to useful",
    hire: "A job post, a pile of interviews, then months of training",
    us: "Five weeks, and we run the training",
  },
  {
    label: "Shopify knowledge",
    hire: "You teach it, in the hours you do not have",
    us: "Already there on day one — themes, embeds, checkout, the lot",
  },
  {
    label: "Coverage",
    hire: "One person, one time zone, one holiday calendar",
    us: "Round the clock, weekends included",
  },
  {
    label: "A quiet month",
    hire: "You pay exactly the same",
    us: "You book fewer hours",
  },
  {
    label: "If they leave",
    hire: "You start the entire thing over",
    us: "Our problem. Your queue never notices",
  },
];

export default function HireCompare() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-hairline-night bg-white/[0.02]">
      {/* Column headers — desktop only */}
      <div className="hidden grid-cols-[minmax(0,150px)_1fr_1fr] gap-6 border-b border-white/8 px-6 py-3.5 md:grid">
        <span />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/35">
          Hiring in-house
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-primary-soft">
          Support Genius
        </span>
      </div>

      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`grid gap-x-6 gap-y-1.5 px-5 py-4 sm:px-6 md:grid-cols-[minmax(0,150px)_1fr_1fr] md:items-baseline ${
            i > 0 ? "border-t border-white/8" : ""
          }`}
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.11em] text-white/35">
            {r.label}
          </p>
          <p className="text-[14.5px] leading-snug text-white/45 line-through decoration-white/20 md:no-underline">
            {r.hire}
          </p>
          <p className="text-[14.5px] leading-snug text-white">{r.us}</p>
        </div>
      ))}
    </div>
  );
}
