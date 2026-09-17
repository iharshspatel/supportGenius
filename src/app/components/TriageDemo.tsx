"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero's centrepiece: one merchant ticket walked through the lifecycle we
 * sell - arrives, answered from the playbook, escalated with a real repro,
 * looped back into the docs.
 *
 * Built to be SCANNED, not read. Each step is one headline plus one small
 * piece of proof. If a visitor reads only the four headlines, they still get
 * the whole argument.
 */

const STEP_MS = 4200;

const steps = [
  { key: "in", label: "Ticket in", time: "09:41" },
  { key: "reply", label: "Answered", time: "09:47" },
  { key: "escalate", label: "Escalated", time: "09:52" },
  { key: "loop", label: "Loop closed", time: "10:04" },
] as const;

function Line({
  i,
  children,
  className = "",
}: {
  i: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`msg-in ${className}`}
      style={{ animationDelay: `${i * 90}ms` }}
    >
      {children}
    </div>
  );
}

/** The one thing a scanner reads. */
function Headline({ children }: { children: React.ReactNode }) {
  return (
    <Line i={0} className="text-[16px] font-medium leading-snug text-white sm:text-[17px]">
      {children}
    </Line>
  );
}

function Row({ i, mark, children }: { i: number; mark: string; children: React.ReactNode }) {
  return (
    <Line i={i} className="flex items-center gap-3 rounded-lg bg-white/[0.05] px-3 py-2.5">
      <span className="w-4 shrink-0 text-center font-mono text-[11px] text-primary-soft">
        {mark}
      </span>
      <span className="text-[12.5px] leading-snug text-white/70">{children}</span>
    </Line>
  );
}

export default function TriageDemo() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) setStep(steps.length - 1);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = inView && !paused && !manual && !reduced;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [running, step]);

  const go = (i: number) => {
    setManual(true);
    setStep(i);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden rounded-[18px] border border-hairline-night bg-canvas-night shadow-[0_40px_80px_-40px_rgba(26,23,20,0.55)]"
    >
      {/* Window bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="status-dot-green status-dot-live" />
          <span className="text-[12.5px] font-medium text-white/85">
            Shared inbox
          </span>
        </div>
        <span className="font-mono text-[10.5px] tracking-tight text-white/35">
          SG-2291
        </span>
      </div>

      {/* Stage */}
      <div
        key={step}
        className="min-h-[214px] px-4 py-5 sm:min-h-[226px] sm:px-6 sm:py-6"
      >
        {step === 0 && (
          <div className="space-y-4">
            <Headline>
              &ldquo;Badge isn&apos;t showing. We launch Friday.&rdquo;
            </Headline>

            <Line i={1} className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 font-mono text-[11px] text-white/70">
                MK
              </span>
              <p className="font-mono text-[10.5px] text-white/40">
                Marta K. · Shopify Plus · Dawn 15.2
              </p>
            </Line>

            <Line i={2} className="flex flex-wrap gap-2">
              <span className="rounded-full bg-signal-warn-wash/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-[#e0ae4e]">
                Urgent
              </span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-white/40">
                Founder not pinged
              </span>
            </Line>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <Headline>Answered from your playbook in 6 minutes.</Headline>

            <Line
              i={1}
              className="rounded-xl rounded-tr-sm border border-white/10 bg-white/[0.04] p-3.5 text-[13px] leading-relaxed text-white/85"
            >
              Check <em className="not-italic text-white">App embeds → Trust Badge</em>,
              then hard-refresh a product page.
            </Line>

            <Line
              i={2}
              className="rounded-xl rounded-tl-sm bg-white/[0.06] p-3 text-[12.5px] text-white/60"
            >
              &ldquo;Already on. Toggled it too.&rdquo;
            </Line>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3.5">
            <Headline>Escalated with a repro, not a &ldquo;customer says broken&rdquo;.</Headline>

            <Line i={1} className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#b03030]/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-[#e08484]">
                S2
              </span>
              <span className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-white/40">
                No workaround
              </span>
            </Line>

            <div className="space-y-2">
              <Row i={2} mark="↳">
                <span className="text-white/90">div.sg-badge</span> renders at
                height 0, embed enabled
              </Row>
              <Row i={3} mark="↳">
                Console log · theme.liquid · collab access attached
              </Row>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <Headline>Fixed once - then it stops coming back.</Headline>

            <div className="space-y-2">
              <Row i={1} mark="3×">
                Third report this week → help doc queued
              </Row>
              <Row i={2} mark="↗">
                Flagged as product friction in Friday&apos;s summary
              </Row>
            </div>

            <Line
              i={3}
              className="flex items-center gap-2.5 rounded-xl border border-signal-ok/25 bg-signal-ok/10 px-3.5 py-2.5"
            >
              <span className="status-dot-green" />
              <p className="text-[12.5px] text-white/85">
                23 minutes, start to finish.
              </p>
            </Line>
          </div>
        )}
      </div>

      {/* Step rail */}
      <div className="grid grid-cols-4 border-t border-white/8">
        {steps.map((s, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => go(i)}
              aria-current={active}
              className="group relative px-2 py-3 text-left transition-colors hover:bg-white/[0.04] sm:px-4"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/8" />
              {active && (
                <span
                  key={`${step}-${running}`}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-primary"
                  style={{
                    animation: running
                      ? `rail-x ${STEP_MS}ms linear both`
                      : undefined,
                    transform: running ? undefined : "scaleX(1)",
                  }}
                />
              )}
              {done && (
                <span className="absolute inset-x-0 top-0 h-px bg-primary/40" />
              )}
              <span
                className={`block font-mono text-[9.5px] tracking-[0.08em] transition-colors ${
                  active ? "text-white/45" : "text-white/25"
                }`}
              >
                {s.time}
              </span>
              <span
                className={`mt-0.5 block text-[11.5px] font-medium leading-tight transition-colors sm:text-[12.5px] ${
                  active
                    ? "text-white"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      <style>{`@keyframes rail-x { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>
    </div>
  );
}
