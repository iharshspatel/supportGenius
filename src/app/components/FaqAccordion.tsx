"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-hairline">
      {items.map((faq, index) => (
        <details
          key={faq.q}
          className="faq-accordion-item group border-b border-hairline"
          open={openIndex === index}
        >
          <summary
            className="flex w-full touch-manipulation cursor-pointer list-none items-start justify-between gap-6 py-5 text-left active:opacity-70 [&::-webkit-details-marker]:hidden"
            onClick={(event) => {
              event.preventDefault();
              setOpenIndex((current) => (current === index ? null : index));
            }}
          >
              <span
                className="text-[16px] font-medium leading-snug text-ink-secondary transition-colors duration-200 group-hover:text-ink"
              >
                {faq.q}
              </span>
              <span
                aria-hidden="true"
                className="relative mt-[7px] h-3 w-3 shrink-0"
              >
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink-mute transition-colors duration-200 group-hover:bg-ink" />
                <span
                  className="faq-accordion-icon absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink-mute transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-ink"
                />
              </span>
          </summary>

          <div
            className="faq-accordion-answer grid"
          >
            <div className="min-h-0 overflow-hidden">
              <p className="max-w-[38rem] pb-6 pr-8 text-[15px] leading-[1.68] text-ink-mute">
                {faq.a}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
