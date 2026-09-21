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
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.q} className="border-b border-hairline">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="group flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left"
            >
              <span
                className={`text-[16px] font-medium leading-snug transition-colors duration-200 ${
                  isOpen ? "text-ink" : "text-ink-secondary group-hover:text-ink"
                }`}
              >
                {faq.q}
              </span>
              <span
                aria-hidden="true"
                className="relative mt-[7px] h-3 w-3 shrink-0"
              >
                <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-ink-mute transition-colors duration-200 group-hover:bg-ink" />
                <span
                  className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-ink-mute transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-ink ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[38rem] pb-6 pr-8 text-[15px] leading-[1.68] text-ink-mute">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
