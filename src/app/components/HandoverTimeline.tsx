"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The handover, as a sequence - because it is one. A grid of steps was the
 * tell that nobody looked at the page.
 *
 * Three steps, stated plainly: what happens, one line of detail, and what you
 * are holding at the end of it. Read only the three headlines and you still
 * have the shape.
 *
 * The rail is measured from the exact centre of the first dot to the exact
 * centre of the final dot, so it never appears beyond the final stage.
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
  const timelineRef = useRef<HTMLOListElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const [seenSteps, setSeenSteps] = useState<number[]>([]);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const updateRail = () => {
      const bounds = timeline.getBoundingClientRect();
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const viewportMarker = viewportHeight * 0.58;
      const dots = timeline.querySelectorAll<HTMLElement>("[data-timeline-dot]");
      const firstDot = dots.item(0);
      const lastDot = dots.item(dots.length - 1);

      if (!firstDot || !lastDot) return;

      const firstBounds = firstDot.getBoundingClientRect();
      const lastBounds = lastDot.getBoundingClientRect();
      const firstCenter = firstBounds.top + firstBounds.height / 2;
      const lastCenter = lastBounds.top + lastBounds.height / 2;
      const railTop = firstCenter - bounds.top;
      const railHeight = Math.max(lastCenter - firstCenter, 1);
      const progress = Math.min(
        1,
        Math.max(0, (viewportMarker - (bounds.top + railTop)) / railHeight),
      );
      const reachedSteps = Array.from(dots).flatMap((dot, index) => {
        const dotBounds = dot.getBoundingClientRect();
        return viewportMarker >= dotBounds.top + dotBounds.height / 2 ? [index] : [];
      });

      if (railRef.current) {
        railRef.current.style.top = `${railTop}px`;
        railRef.current.style.height = `${railHeight}px`;
      }
      if (railFillRef.current) {
        railFillRef.current.style.height = `${progress * 100}%`;
      }
      setSeenSteps((current) => {
        const next = [...new Set([...current, ...reachedSteps])];
        return next.length === current.length ? current : next;
      });
    };
    let frame = 0;
    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          updateRail();
        });
      }
    };
    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(scheduleUpdate) : null;
    resizeObserver?.observe(timeline);
    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    document.addEventListener("scroll", scheduleUpdate, { passive: true, capture: true });
    window.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("resize", scheduleUpdate);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      document.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={timelineRef} className="handover-timeline relative mt-14 pl-8 sm:pl-12">
      {/* Rail */}
      <div
        aria-hidden="true"
        ref={railRef}
        className="handover-timeline-rail absolute w-px bg-hairline"
      >
        <div ref={railFillRef} className="rail-fill w-full bg-primary/70" />
      </div>

      {steps.map((s, index) => (
        <li
          key={s.num}
          data-reveal
          className="relative pb-12 last:pb-0"
        >
          <span
            aria-hidden="true"
            data-timeline-dot
            className={`handover-timeline-dot absolute -left-8 top-[7px] h-[9px] w-[9px] rounded-full bg-primary ring-4 ring-canvas sm:-left-12 ${seenSteps.includes(index) ? "is-seen" : ""}`}
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
