"use client";

import { useEffect, useState } from "react";

const layers = [
  {
    number: "01",
    title: "Conversations",
    detail: "Questions arrive with the right context.",
  },
  {
    number: "02",
    title: "Resolution",
    detail: "Every next step has a clear owner.",
  },
  {
    number: "03",
    title: "Signals",
    detail: "Patterns make the product stronger.",
  },
];

export default function ServicesCoverageMap() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLayer((current) => (current + 1) % layers.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <aside className="services-coverage-map" aria-label="How a complete support system works">
      <div className="services-coverage-map-bar">
        <span className="status-dot-green status-dot-live" />
        <span>Your support system</span>
        <span className="services-coverage-map-status">Built to scale</span>
      </div>

      <div className="services-coverage-map-body">
        <div className="services-coverage-map-orbit" aria-hidden="true">
          <span className="services-coverage-map-orbit-ring services-coverage-map-orbit-ring-one" />
          <span className="services-coverage-map-orbit-ring services-coverage-map-orbit-ring-two" />
          <span className={`services-coverage-map-orbit-marker is-layer-${activeLayer}`} />
          <div className="services-coverage-map-orbit-core">
            <span>Support</span>
            <strong>Genius</strong>
          </div>
          <span className="services-coverage-map-orbit-label services-coverage-map-orbit-label-one">Merchant</span>
          <span className="services-coverage-map-orbit-label services-coverage-map-orbit-label-two">Team</span>
          <span className="services-coverage-map-orbit-label services-coverage-map-orbit-label-three">Product</span>
        </div>

        <div className="services-coverage-map-layers">
          <p>The loop that keeps support moving</p>
          {layers.map((layer, index) => (
            <button
              key={layer.title}
              type="button"
              className={`services-coverage-map-layer ${activeLayer === index ? "is-active" : ""}`}
              onClick={() => setActiveLayer(index)}
              aria-pressed={activeLayer === index}
            >
              <span className="services-coverage-map-layer-number">{layer.number}</span>
              <span>
                <strong>{layer.title}</strong>
                <small>{layer.detail}</small>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="services-coverage-map-footer">
        <span>Clear for merchants</span>
        <span>Useful for your team</span>
      </div>
    </aside>
  );
}
