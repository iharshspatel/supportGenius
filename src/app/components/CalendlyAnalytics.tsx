"use client";

import { useEffect } from "react";
import { CALENDLY_BOOKING_URL } from "../lib/calendly";

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export default function CalendlyAnalytics() {
  useEffect(() => {
    const trackCalendlyClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest("a") : null;
      if (anchor?.href === CALENDLY_BOOKING_URL) window.gtag?.("event", "generate_lead", { lead_source: "calendly", event_label: "Book a Call" });
    };
    document.addEventListener("click", trackCalendlyClick);
    return () => document.removeEventListener("click", trackCalendlyClick);
  }, []);
  return null;
}
