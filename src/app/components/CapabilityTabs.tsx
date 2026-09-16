"use client";

import { useRef, useState } from "react";

/**
 * Five capabilities, five real artefacts. A tab list beats a 5-in-a-3-column
 * grid (which orphans two cards) and it lets each claim show its evidence.
 */

type Tab = {
  key: string;
  label: string;
  blurb: string;
  caption: string;
  preview: React.ReactNode;
};

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-hairline-cool py-2.5 last:border-0">
      {children}
    </div>
  );
}

const tabs: Tab[] = [
  {
    key: "support",
    label: "Merchant conversations",
    blurb:
      "Someone who knows your app answers, in your voice, on the channels you already use.",
    caption: "A reply, as it actually goes out",
    preview: (
      <div className="rounded-xl bg-canvas-soft p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute-2">
          Re: Discount not applying at checkout
        </p>
        <p className="mt-3 text-[13.5px] leading-relaxed text-ink">
          Hi Dan — you&apos;ve got two rules stacking, and Shopify only honours
          one. I&apos;ve dropped a screenshot below showing which to turn off.
          <br />
          <br />
          Worth saying: this catches almost everyone, and it&apos;s our fault for
          not making it obvious. I&apos;ve passed it to the product team.
        </p>
      </div>
    ),
  },
  {
    key: "playbook",
    label: "Learning your product",
    blurb:
      "Before we answer anything, we write down how your app actually behaves — including the parts that are a bit odd.",
    caption: "Your playbook, week two",
    preview: (
      <div className="rounded-xl bg-canvas-soft p-4 text-[13px]">
        <Row>
          <span className="text-ink">Install &amp; first-run</span>
          <span className="font-mono text-[11px] text-ink-mute-2">9 answers</span>
        </Row>
        <Row>
          <span className="text-ink">Theme embeds &amp; OS 2.0</span>
          <span className="font-mono text-[11px] text-ink-mute-2">14 answers</span>
        </Row>
        <Row>
          <span className="text-ink">Billing &amp; plan changes</span>
          <span className="font-mono text-[11px] text-ink-mute-2">7 answers</span>
        </Row>
        <Row>
          <span className="text-ink">Known issues — do not promise a fix</span>
          <span className="font-mono text-[11px] text-primary">4 open</span>
        </Row>
        <Row>
          <span className="text-ink">Never touch without you</span>
          <span className="font-mono text-[11px] text-primary">6 rules</span>
        </Row>
      </div>
    ),
  },
  {
    key: "triage",
    label: "Technical triage",
    blurb:
      "When a ticket is genuinely a bug, your engineer gets a report they can open and start on.",
    caption: "What lands in your tracker",
    preview: (
      <div className="rounded-xl bg-canvas-night p-4 font-mono text-[11.5px] leading-relaxed text-white/75">
        <p className="text-white">SG-2291 · S2</p>
        <p className="mt-2 text-white/50">
          store · nordvik-supply · Plus · Dawn 15.2
        </p>
        <p className="text-white/50">app · v3.4.1</p>
        <p className="mt-2 text-white/75">
          1. Enable Trust Badge embed
          <br />
          2. Load product page, logged out
          <br />
          3. div.sg-badge height 0
        </p>
        <p className="mt-2 text-[#e0ae4e]">
          attached · console log, liquid excerpt
        </p>
      </div>
    ),
  },
  {
    key: "kb",
    label: "Knowledge base",
    blurb:
      "Every question we get asked twice becomes an article, so the third merchant never has to ask.",
    caption: "Written from real tickets, month three",
    preview: (
      <div className="rounded-xl bg-canvas-soft p-4 text-[13px]">
        <Row>
          <span className="text-ink">Badge not showing on Dawn 15.2</span>
          <span className="font-mono text-[11px] text-signal-ok">−31 tickets</span>
        </Row>
        <Row>
          <span className="text-ink">Connecting a second store</span>
          <span className="font-mono text-[11px] text-signal-ok">−18 tickets</span>
        </Row>
        <Row>
          <span className="text-ink">What happens when you uninstall</span>
          <span className="font-mono text-[11px] text-signal-ok">−12 tickets</span>
        </Row>
        <p className="pt-3 text-[12px] text-ink-mute">
          Illustrative. We report the real numbers monthly, including the
          articles that did nothing.
        </p>
      </div>
    ),
  },
  {
    key: "reporting",
    label: "What we send back",
    blurb:
      "One short note a week. What merchants struggled with, what we fixed ourselves, what needs you.",
    caption: "Friday summary",
    preview: (
      <div className="rounded-xl bg-canvas-soft p-4 text-[13px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute-2">
          Themes this week
        </p>
        {[
          { l: "Theme embed confusion", w: "68%" },
          { l: "Billing / plan questions", w: "41%" },
          { l: "Second-store setup", w: "22%" },
        ].map((b) => (
          <div key={b.l} className="mt-3">
            <div className="flex justify-between text-[12.5px] text-ink">
              <span>{b.l}</span>
              <span className="font-mono text-[11px] text-ink-mute-2">{b.w}</span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-hairline">
              <div
                className="h-full rounded-full bg-primary/70"
                style={{ width: b.w }}
              />
            </div>
          </div>
        ))}
        <p className="pt-4 text-[12.5px] leading-relaxed text-ink-mute">
          Recommendation: the embed copy in onboarding is the root cause of
          two-thirds of this. Worth 30 minutes of design time.
        </p>
      </div>
    ),
  },
];

export default function CapabilityTabs() {
  const [active, setActive] = useState(0);
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next =
      e.key === "ArrowDown"
        ? (active + 1) % tabs.length
        : (active - 1 + tabs.length) % tabs.length;
    setActive(next);
    btns.current[next]?.focus();
  };

  const tab = tabs[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
      {/* Tab list */}
      <div role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.key}
              ref={(el) => {
                btns.current[i] = el;
              }}
              role="tab"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className="group relative block w-full border-b border-hairline py-4 text-left last:border-0"
            >
              <span
                className={`absolute -left-4 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-full bg-primary transition-all duration-300 ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              />
              <span
                className={`block text-[16px] font-medium transition-colors duration-200 ${
                  on ? "text-ink" : "text-ink-mute group-hover:text-ink"
                }`}
              >
                {t.label}
              </span>
              <span
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <span className="overflow-hidden">
                  <span className="block max-w-[30rem] pt-2 text-[14px] leading-relaxed text-ink-mute">
                    {t.blurb}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Preview */}
      <div className="lg:sticky lg:top-24">
        <div key={tab.key} className="msg-in rounded-[16px] border border-hairline bg-canvas-raised p-3">
          {tab.preview}
        </div>
        <p className="mt-3 pl-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute-2">
          {tab.caption}
        </p>
      </div>
    </div>
  );
}
