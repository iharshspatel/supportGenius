"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type ContactFormProps = {
  children: ReactNode;
  className?: string;
};

export default function ContactForm({ children, className }: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fields = new FormData(event.currentTarget);
    const details = [
      ["Name", fields.get("name")],
      ["Work email", fields.get("email")],
      ["Company and Shopify app URL", fields.get("company")],
      ["Monthly ticket volume", fields.get("volume") || "Not provided"],
      ["Current contact channels", fields.get("channels") || "Not provided"],
      ["Support challenge", fields.get("challenge")],
      ["Preferred follow-up", fields.get("meetingPreference")],
    ]
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n\n");

    const subject = "Support Genius discovery inquiry";
    window.location.href = `mailto:support@thesupportgenius.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
    setStatus("Your email draft is ready. Review it and send it to complete your inquiry.");
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      <p aria-live="polite" className="mt-3 text-sm text-[#707070]">
        {status}
      </p>
    </form>
  );
}
