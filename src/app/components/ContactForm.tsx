"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const formspreeEndpoint = "https://formspree.io/f/moevqkqr";

type ContactFormProps = { children: ReactNode; className?: string };

export default function ContactForm({ children, className }: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("website") ?? "")) return;

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        setStatus("We could not send your inquiry. Please try again or email dhruv.mangla@thesupportgenius.com.");
        return;
      }

      form.reset();
      setStatus("Thanks - your inquiry has been sent. We will reply soon.");
    } catch {
      setStatus("We could not send your inquiry. Please try again or email dhruv.mangla@thesupportgenius.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} aria-busy={isSubmitting}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {children}
      <p aria-live="polite" className="mt-3 text-sm text-[#707070]">{status}</p>
    </form>
  );
}
