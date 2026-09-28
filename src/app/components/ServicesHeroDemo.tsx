"use client";

import { useEffect, useState } from "react";

const stages = ["Client issue", "Right service", "Team handoff", "Clear outcome"];

export default function ServicesHeroDemo() {
  const [step, setStep] = useState(0);
  const [isManuallySelected, setIsManuallySelected] = useState(false);

  useEffect(() => {
    if (isManuallySelected) return;

    const interval = window.setInterval(() => {
      setStep((currentStep) => (currentStep + 1) % stages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isManuallySelected]);

  const selectStep = (selectedStep: number) => {
    setIsManuallySelected(true);
    setStep(selectedStep);
  };

  return (
    <aside
      className={`services-hero-demo ${isManuallySelected ? "is-paused" : ""}`}
      aria-label="Example of a support request workflow"
    >
      <div className="services-hero-demo-bar">
        <div className="flex items-center gap-2.5">
          <span className="status-dot-green status-dot-live" />
          <span>Shared inbox</span>
        </div>
      </div>

      <div className="services-hero-demo-stage">
        <section className={`services-hero-demo-frame ${step === 0 ? "is-active" : ""}`}>
          <h2>&ldquo;I need help choosing the right support service.&rdquo;</h2>
          <div className="services-hero-demo-person">
            <span>MK</span>
            <p>Merchant issue received with the relevant product context</p>
          </div>
          <div className="services-hero-demo-tags">
            <span className="services-hero-demo-tag-priority">Needs guidance</span>
            <span>Service options ready</span>
          </div>
        </section>

        <section className={`services-hero-demo-frame ${step === 1 ? "is-active" : ""}`}>
          <h2>Matched with the right support path.</h2>
          <p className="services-hero-demo-message">
            The merchant gets clear guidance for the next useful action.
          </p>
          <p className="services-hero-demo-message services-hero-demo-message-muted">
            Your team sees the scope and next owner immediately.
          </p>
        </section>

        <section className={`services-hero-demo-frame ${step === 2 ? "is-active" : ""}`}>
          <h2>The right team gets a clean handoff.</h2>
          <div className="services-hero-demo-tags">
            <span className="services-hero-demo-tag-alert">Needs review</span>
            <span>Technical context attached</span>
          </div>
          <div className="services-hero-demo-row">↳ Issue, expected result, and useful context included</div>
          <div className="services-hero-demo-row">↳ No vague messages or copied ticket threads</div>
        </section>

        <section className={`services-hero-demo-frame ${step === 3 ? "is-active" : ""}`}>
          <h2>A clear outcome, without the support chaos.</h2>
          <div className="services-hero-demo-row">↗ Merchant receives an accurate update</div>
          <div className="services-hero-demo-row">↗ Repeat issue becomes a support improvement</div>
          <div className="services-hero-demo-complete">
            <span className="status-dot-green" />
            <span>Merchant can move forward.</span>
          </div>
        </section>
      </div>

      <div className="services-hero-demo-rail">
        {stages.map((stage, index) => (
          <button
            key={stage}
            type="button"
            onClick={() => selectStep(index)}
            aria-current={step === index ? "step" : undefined}
            className={`services-hero-demo-rail-step ${step === index ? "is-active" : ""}`}
          >
            <span>0{index + 1}</span>
            <strong>{stage}</strong>
          </button>
        ))}
      </div>
    </aside>
  );
}
