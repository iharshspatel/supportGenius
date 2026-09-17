import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "./components/FaqAccordion";
import TriageDemo from "./components/TriageDemo";
import ProblemGrid from "./components/ProblemGrid";
import HireCompare from "./components/HireCompare";
import ServiceGrid from "./components/ServiceGrid";
import HandoverTimeline from "./components/HandoverTimeline";

export const metadata: Metadata = {
  title: "Shopify App Support Outsourcing | Support Genius",
  description:
    "We run merchant support for founder-led Shopify app teams. We learn your app properly, take the inbox, and send engineering bug reports they can actually start on.",
};

/* --------------------------------------------------------------------------
 * TODO - real numbers needed from the business.
 * Leaving `price: null` renders an honest "quoted on the call" line rather
 * than a pricing card with no price on it, which is the single biggest trust
 * hole on the old page. Fill these in and the cards start doing their job.
 * ------------------------------------------------------------------------ */
const plans = [
  {
    name: "Starter",
    price: null as string | null,
    volume: "Up to 150 tickets a month",
    fit: "One app, email only, and you are still the person answering everything.",
    cta: "Start here",
    featured: false,
  },
  {
    name: "Growth",
    price: null as string | null,
    volume: "Up to 500 tickets a month",
    fit: "Email and live chat, a real queue, and bugs that need to reach engineering the same day.",
    cta: "Start here",
    featured: true,
  },
  {
    name: "Scale",
    price: null as string | null,
    volume: "Custom volume",
    fit: "Several apps, or one big one, across more than one timezone.",
    cta: "Talk to us",
    featured: false,
  },
];

const notForYou = [
  {
    title: "You get under thirty tickets a month",
    body: "Keep answering them yourself. At that volume you will learn more from your merchants than we will, and you would be paying us to take that away from you.",
  },
  {
    title: "You need someone awake at 3am",
    body: "We are not twenty-four hours. We would rather say so now than have you find out during Black Friday, which is roughly the worst possible time to find out.",
  },
  {
    title: "Your app is not on Shopify",
    body: "Everything we know is Shopify-shaped - embeds, collaborator access, App Store review, the billing API. On a different platform we would be starting from zero, same as anyone.",
  },
  {
    title: "You just want the queue cleared",
    body: "We will keep telling you that your onboarding copy is causing a third of your tickets. If that is going to be irritating rather than useful, neither of us will enjoy this.",
  },
];

const faqs = [
  {
    q: "Who actually answers my merchants?",
    a: "A named person on our side, with a backup who has also been through your onboarding. You will meet them before they send a single reply, and you can veto anyone. We do not rotate a pool of strangers through your inbox.",
  },
  {
    q: "What if you get something wrong?",
    a: "We will, at some point. When it happens we tell you before you find out from the merchant, we fix the reply, and the thing we got wrong goes into the playbook so it does not happen twice. During the shadow weeks you see every draft, which is where most of the wrong answers get caught.",
  },
  {
    q: "What stays with my team?",
    a: "Roadmap calls, refunds above whatever threshold you set, anything touching merchant data, and any conversation where a merchant is genuinely angry with your company rather than confused by a feature. We write that list down in week two and stick to it.",
  },
  {
    q: "How do you learn the app?",
    a: "We install it on a test store and try to break it, read your existing tickets, and write down every question we could not answer ourselves. Then we ask you those, in one batch, rather than pinging you for a month.",
  },
  {
    q: "Can we stop?",
    a: "Thirty days notice, and the playbook and knowledge base are yours to keep - they are written in your account, not ours. If you bring support back in-house, whoever takes it over inherits everything we wrote.",
  },
];

function Headline({ text }: { text: string }) {
  return (
    <h1 className="display-xxl">
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="word-rise">
          <span style={{ "--i": i } as React.CSSProperties}>{word}</span>
          {i < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <main className="text-ink">
      {/* ---------------------------------------------------------------- Hero */}
      <section className="paper relative overflow-hidden">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 pt-16 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:px-8 lg:pt-24 lg:pb-28">
          <div>
            <div className="mt-5">
              <Headline text="An on-demand support team for your shopify app." />
            </div>

            <p
              className="mt-7 max-w-[36rem] text-[17.5px] leading-[1.62] text-ink-mute msg-in"
              style={{ animationDelay: "480ms" }}
            >
              Shopify Expert Support for $10/hour. Scale up when tickets spike,
              scale down when they don't. No full-time hire, no retainer tier to
              outgrow.
            </p>

            <div
              className="msg-in mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
              style={{ animationDelay: "620ms" }}
            >
              <Link href="/contact" className="btn-primary">
                Book a 30-minute call
              </Link>
              <Link
                href="/how-it-works"
                className="link-hover-effect text-[15px] font-medium text-ink"
              >
                See how the handover works →
              </Link>
            </div>
          </div>

          <div className="msg-in" style={{ animationDelay: "300ms" }}>
            <TriageDemo />
            <p className="mt-3.5 text-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute-2">
              One ticket, start to finish. Click a step.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- The problem, shown */}
      <section className="section-dark-elevated border-y border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div data-reveal className="measure-wide">
            <p className="eyebrow">The problem</p>
            <h2 className="display-xl mt-4">
              Twenty tickets a month is fine. Two hundred is a growth ceiling.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
              Support does not break all at once. It breaks in four specific
              ways, and each one costs you more than an evening.
            </p>
          </div>

          <div data-reveal className="mt-12">
            <ProblemGrid />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Capabilities */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div data-reveal className="measure-wide">
          <p className="eyebrow">What we do</p>
          <h2 className="display-xl mt-4">Six ways support leaves your desk</h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
            All of it handled by Shopify experts - real people who already know
            themes, embeds and checkout - on a flat block of hours each month.
            Not bots, and not billed per ticket.
          </p>
        </div>

        <div data-reveal className="mt-12">
          <ServiceGrid />
        </div>
      </section>

      {/* ------------------------------------------------------------- Handover */}
      <section className="section-dark-elevated border-y border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div data-reveal className="measure-wide">
            <p className="eyebrow">The handover</p>
            <h2 className="display-xl mt-4">
              From first call to fully covered in five weeks
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
              Three steps, and you are only hands-on for the first one. Nobody
              drops into your inbox on day one and starts guessing.
            </p>
          </div>

          <HandoverTimeline />
        </div>
      </section>

      {/* ----------------------------------------------------- Instead of hiring */}
      <section className="section-night">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div data-reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-soft">
                Instead of hiring
              </p>
              <h2 className="display-xl mt-4 text-white">
                A Shopify-native expert for $10 an hour
              </h2>
              <p className="mt-6 text-[17px] leading-[1.65] text-white/60">
                Flat rate. No recruiter, no payroll, no three-month ramp. The
                same trained people answer your merchants every day - they are
                just not on your books.
              </p>

              <div className="mt-9 flex items-baseline gap-2.5">
                <span className="text-[56px] font-semibold leading-none tracking-tight text-white">
                  $10
                </span>
                <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/40">
                  / hour, flat
                </span>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-white/35">
                No setup fee · No per-ticket charge · Change hours any month
              </p>

              <Link href="/contact" className="btn-primary btn-invert mt-9">
                Book a 30-minute call
              </Link>
            </div>

            <div data-reveal>
              <HireCompare />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Pricing */}
      {/* <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div data-reveal className="measure-wide">
          <p className="eyebrow">Plans</p>
          <h2 className="display-xl mt-4">Priced on volume, not seats</h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
            You pay for the tickets we handle and the channels we cover. Not for
            headcount you never meet, and not per merchant.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              data-reveal
              className={`flex flex-col p-7 sm:p-8 ${
                p.featured ? "card-pricing-featured" : "card-feature-light"
              }`}
            >
              <span className="spotlight-glow" />
              <div className="flex items-center justify-between gap-3">
                <h3 className={`heading-lg ${p.featured ? "text-white" : ""}`}>
                  {p.name}
                </h3>
                {p.featured && <span className="badge-accent">Most teams</span>}
              </div>

              <p
                className={`mt-4 font-mono text-[12px] uppercase tracking-[0.09em] ${
                  p.featured ? "text-white/40" : "text-ink-mute-2"
                }`}
              >
                {p.volume}
              </p>

              <p
                className={`mt-1 text-[26px] leading-tight ${
                  p.featured ? "text-white" : "text-ink"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.price ?? (
                  <span
                    className={`text-[16px] ${
                      p.featured ? "text-white/60" : "text-ink-mute"
                    }`}
                  >
                    Quoted on the call
                  </span>
                )}
              </p>

              <p
                className={`mt-5 flex-1 text-[14.5px] leading-relaxed ${
                  p.featured ? "text-white/55" : "text-ink-mute"
                }`}
              >
                {p.fit}
              </p>

              <Link
                href="/pricing"
                className={`mt-8 w-full ${
                  p.featured ? "btn-primary" : "btn-secondary"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      {/* ------------------------------------------------------------------ FAQ */}
      <section className="section-dark-elevated border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div data-reveal>
              <h2 className="display-lg">The questions we always get</h2>
              <p className="mt-5 max-w-[24rem] text-[15.5px] leading-relaxed text-ink-mute">
                If yours is not here, ask it on the call. We would rather answer
                an awkward one early.
              </p>
            </div>
            <div data-reveal="soft">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Closing note
          TODO: this is the natural home for a real photo, a real name, and a
          signature. A service business about humans should show one. */}
      {/* <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <div data-reveal className="measure-wide">
          <h2 className="display-xl">Send us your worst recurring ticket</h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-ink-mute">
            Genuinely - paste the question you are most tired of answering into
            the form. We will come to the call with a draft reply and a help-doc
            outline for it, whether or not you hire us. It is the fastest way to
            see whether we understand your product.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/contact" className="btn-primary">
              Book a 30-minute call
            </Link>
            <Link
              href="/blog"
              className="link-hover-effect text-[15px] font-medium text-ink"
            >
              Or read how we think about this first →
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
