import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing - $10/hour Flat Shopify App Support | Support Genius",
  description:
    "One rate: $10 an hour for Shopify support experts. No tiers, no setup fee, no per-ticket charge, and a 30-day money-back guarantee.",
};

/**
 * One price, one page. The old version had three tiers and a comparison matrix
 * with no prices in it - the single biggest trust hole on the site. There is
 * nothing to compare now, so the page spends its space on what an hour buys
 * and on the guarantee instead.
 */

const included = [
  "24/7 app support across your channels",
  "Email support in your tone, from your docs",
  "Live chat while merchants are still in the app",
  "Social media replies - tweets, DMs, comments",
  "Bug reports with repro steps, versions and logs",
  "Helpdesk management: sorting, tagging, clearing the queue",
  "Your support docs written and kept current",
  "Weekly summaries and monthly reporting",
  "QA on a sample of replies, every week",
];

const examples = [
  {
    hours: "40 hours",
    price: "$400",
    fit: "A month of daytime email cover for a growing app",
  },
  {
    hours: "80 hours",
    price: "$800",
    fit: "Email and live chat, most of the working day",
    featured: true,
  },
  {
    hours: "160 hours",
    price: "$1,600",
    fit: "Full-time equivalent cover across time zones",
  },
];

const faqs = [
  {
    q: "What exactly costs $10?",
    a: "Every hour a Shopify support expert spends on your account: answering merchants, writing your support docs, triaging bugs, preparing your reports. One rate for all of it. Nothing is charged per ticket, per channel or per merchant.",
  },
  {
    q: "How many hours will we need?",
    a: "It depends on your ticket volume and how many channels you want covered. We estimate it on the call from your existing ticket history, then adjust once real numbers come in - up in a busy month, down in a quiet one.",
  },
  {
    q: "How does the 30-day money-back guarantee work?",
    a: "If the support is not up to standard in your first 30 days, tell us and we refund what you have paid for that period. No notice period and no argument about it.",
  },
  {
    q: "Is there a setup fee or a contract?",
    a: "No setup fee, no onboarding fee, and no long-term contract. It is month to month, and you can change your hours or stop at any time.",
  },
  {
    q: "What happens when volume spikes?",
    a: "You book more hours for that month. Black Friday, a launch, an App Store feature - the rate does not change and neither does the team answering.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      {/* ---------------------------------------------------------------- Hero */}
      <section className="section-hero">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div data-reveal>
            <p className="eyebrow">Pricing</p>
            <h1 className="display-xxl mt-4">
              $10 an hour. That is the whole price list.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[17.5px] leading-[1.62] text-ink-mute">
              Shopify support experts, billed by the hour at one flat rate. No
              tiers to outgrow, no per-ticket charge, and 30 days to change your
              mind and get your money back.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a 30-minute call
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See how the handover works
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute-2">
              {["30-day money back", "No setup fee", "Month to month"].map(
                (b) => (
                  <span key={b} className="flex items-center gap-2">
                    <span className="status-dot-green" />
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* The price */}
          <div
            data-reveal
            className="rounded-[18px] border border-hairline bg-canvas-raised p-7 shadow-[0_18px_44px_-16px_rgba(14,21,51,0.16)] sm:p-8"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="text-[64px] font-semibold leading-none tracking-tight text-ink">
                $10
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-ink-mute-2">
                / hour, flat
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-mute">
              The same rate whether the hour goes on answering merchants,
              writing your docs, or writing up a bug for your engineer.
            </p>

            <div className="mt-6 space-y-2.5 border-t border-hairline-cool pt-6">
              {[
                ["Setup fee", "$0"],
                ["Per-ticket charge", "None"],
                ["Minimum contract", "None"],
                ["Money-back window", "30 days"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-[14px] text-ink-mute">{k}</span>
                  <span className="font-mono text-[13px] font-medium text-ink">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary mt-7 w-full">
              Book a 30-minute call
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Guarantee */}
      <section className="section-night">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div
            data-reveal
            className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-soft">
                The guarantee
              </p>
              <h2 className="display-lg mt-4 text-white">
                30 days. If it is not working, you get your money back.
              </h2>
            </div>
            <p className="text-[16px] leading-[1.65] text-white/60">
              Handing over your inbox is a real risk, so we carry some of it.
              Give it a month. If the replies are not up to your standard, say
              so and we refund what you have paid for that period - no notice
              period, no argument, and you keep the support docs we wrote.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Included */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div data-reveal className="measure-wide">
          <p className="eyebrow">What the rate covers</p>
          <h2 className="display-xl mt-4">
            Everything, at the same price per hour
          </h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
            There is no channel that costs extra and no feature held back for a
            bigger plan. You decide how many hours; the work is the same work.
          </p>
        </div>

        <ul
          data-reveal
          className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-t border-hairline pt-4"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-[15px] leading-relaxed text-ink-secondary">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- Shapes */}
      {/* ----------------------------------------------------------------- CTA */}
      <section className="section-cta border-t border-hairline">
        <div className="mx-auto max-w-[46rem] px-6 py-20 text-center lg:py-28">
          <div data-reveal>
            <h2 className="display-xl">
              Find out how many hours you actually need
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
              Thirty minutes on your ticket volume and channels, and you leave
              with a number. The first 30 days are covered either way.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a 30-minute call
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See how the handover works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- FAQ */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div data-reveal className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="display-lg mt-4">Before you book hours</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-mute">
              What counts as an hour, how many you need, and how the guarantee
              works.
            </p>
          </div>

          <div data-reveal className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
