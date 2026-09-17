/**
 * Three moments from a founder's support inbox, shown before and after a
 * support layer - side by side, in one glance.
 *
 * This used to be a toggle. Nobody toggles. A scanner saw only the "before"
 * half and left without the argument, so both states are on screen at once
 * and the eye does the comparing.
 */

const rows = [
  {
    scenario: "The same setup question, again",
    before: {
      when: "23:41 · you, from the couch",
      body: "You answer it well, because you always do. It gets asked again tomorrow.",
      metric: "3rd time today",
    },
    after: {
      when: "09:12 · Priya, from your playbook",
      body: "Answered in your words, then written up as help doc #14.",
      metric: "4 min · you weren't pinged",
    },
  },
  {
    scenario: "A real bug, forty tickets down",
    before: {
      when: "Unread since Tuesday",
      body: "It's buried under setup questions. Nobody has read that far in three days.",
      metric: "3 days old",
    },
    after: {
      when: "Surfaced the same morning",
      body: "The playbook clears the noise, so the one real bug has nowhere to hide.",
      metric: "20 min old",
    },
  },
  {
    scenario: "The handoff to engineering",
    before: {
      when: "Slack · 16:20",
      body: "“A customer is having an issue, can you take a look?” That's the whole message.",
      metric: "0 repro steps",
    },
    after: {
      when: "Slack · 16:20",
      body: "SG-2291 · S2 · Dawn 15.2 · console log and collaborator access attached.",
      metric: "3 repro steps",
    },
  },
];

function Cell({
  tag,
  when,
  body,
  metric,
  good,
}: {
  tag: string;
  when: string;
  body: string;
  metric: string;
  good?: boolean;
}) {
  return (
    <div className={`p-5 sm:p-6 ${good ? "bg-canvas-raised" : "bg-canvas-soft"}`}>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-mute-2 md:hidden">
        {tag}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute-2">
          {when}
        </p>
        <span
          className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.06em] ${
            good
              ? "bg-signal-ok-wash text-signal-ok"
              : "bg-canvas-tint text-ink-mute"
          }`}
        >
          {metric}
        </span>
      </div>
      <p
        className={`mt-2.5 text-[15px] leading-relaxed ${
          good ? "text-ink" : "text-ink-mute"
        }`}
      >
        {body}
      </p>
    </div>
  );
}

export default function InboxCompare() {
  return (
    <div>
      {/* Column headers - desktop only; each cell carries its own tag on mobile */}
      <div className="mb-3 hidden grid-cols-2 gap-px px-6 md:grid">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-mute-2">
          Right now
        </p>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-primary">
          With Support Genius
        </p>
      </div>

      <div className="overflow-hidden rounded-[14px] border border-hairline">
        {rows.map((row, i) => (
          <div key={row.scenario} className={i > 0 ? "border-t border-hairline" : ""}>
            <p className="bg-canvas-tint px-5 py-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-secondary sm:px-6">
              {row.scenario}
            </p>
            <div className="grid gap-px bg-hairline md:grid-cols-2">
              <Cell tag="Right now" {...row.before} />
              <Cell tag="With Support Genius" {...row.after} good />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
