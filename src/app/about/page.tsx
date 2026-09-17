import Link from "next/link";
import type { Metadata } from "next";
import { CALENDLY_BOOKING_URL } from "../lib/calendly";

export const metadata: Metadata = {
  title: "About Support Genius | Shopify App Support Specialists",
  description:
    "Meet the team behind Support Genius, a Shopify app support service built to help growing app teams support merchants without losing product focus.",
};

export default function About() {
  const principles = [
    {
      num: "01",
      title: "We learn before we answer",
      desc: "Product context, support history, and escalation rules come before a handover. We never guess in a live queue.",
    },
    {
      num: "02",
      title: "We document what we learn",
      desc: "A useful support playbook makes quality repeatable and makes team knowledge less fragile across your organization.",
    },
    {
      num: "03",
      title: "We make ownership visible",
      desc: "Customers should know they are being helped, and your team should know which issues need their attention.",
    },
    {
      num: "04",
      title: "We treat repeat tickets as feedback",
      desc: "The goal is not only to close conversations, but to reduce avoidable friction by improving help docs and product UX.",
    },
    {
      num: "05",
      title: "We stay honest about boundaries",
      desc: "We do not promise coverage, response times, access, or outcomes that are not written into the engagement.",
    },
  ];

  return (
    <main className="min-h-screen text-ink bg-canvas">
      {/* 1. Hero Section */}
      <section className="section-hero pt-14 pb-12 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-hairline text-xs font-medium text-ink mb-6">
              <span className="status-dot-green" />
              <span>Shopify App Specialists</span>
            </div>
            <h1 className="display-xxl text-ink">
              Support Operations for Shopify App Teams
            </h1>
            <p className="mt-5 body-lg text-ink-mute">
              Support Genius exists for the moment when a Shopify app starts growing faster than its
              founders can support it. We help small, product-led teams create a dependable merchant
              support operation without losing the context, care, and accountability their customers expect.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary py-3.5 px-7 text-base">
                Talk with our team
              </Link>
              <Link href="/services" className="btn-secondary py-3.5 px-7 text-base">
                See our support services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: Why we focus on Shopify apps */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-hairline-cool">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="display-xl text-ink">
              Why we focus on Shopify apps
            </h2>
            <p className="mt-5 body-lg text-ink-mute leading-relaxed">
              A Shopify app is not supported in the abstract. Your merchants work inside Shopify, install apps,
              configure settings, connect workflows, manage billing, and need help at the exact moment a task
              blocks them.
            </p>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              Generic support teams can learn a script. A specialist support operation learns the product and
              the ecosystem around it: theme app extensions, Cart Transform APIs, collaborator permissions, and
              App Store review expectations. That focus allows us to diagnose edge cases faster and protect your
              brand reputation with merchants.
            </p>
          </div>

          <div className="card-feature-dark p-7 sm:p-8 rounded-xl border border-[#2e2e2e]">
            <span className="spotlight-glow" />
            <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
              <div className="flex items-center gap-2">
                <span className="status-dot-green" />
                <span className="text-sm font-semibold text-white">Ecosystem Native</span>
              </div>
              <span className="text-xs font-mono text-primary bg-[#252525] px-2.5 py-0.5 rounded">
                Shopify Aware
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-xs font-mono text-[#dfdfdf]">
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Online Store 2.0 &amp; Theme App Embed Block validation</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Shopify Admin collaborator access protocols</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Recurring app charges &amp; Shopify billing triage</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Clean developer escalations formatted with reproduction logs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Section: The people behind the inbox */}
      <section className="section-dark-elevated py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              The people behind the inbox
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              We believe great support comes from dedicated people with deep product empathy, backed by
              structured processes and strict security boundaries.
            </p>
          </div>

          {/* Team Profile Card */}
          <div className="mt-12 max-w-[56rem] card-feature-light p-8 sm:p-10 border border-hairline">
            <span className="spotlight-glow" />
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
              <div className="h-20 w-20 rounded-full bg-canvas-soft border-2 border-primary flex items-center justify-center font-bold text-2xl text-ink shrink-0">
                SC
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="heading-lg text-ink">Support Operations Team</h3>
                  <span className="badge-tag-green">Shopify App Specialists</span>
                </div>
                <p className="mt-4 body-md text-ink-mute leading-relaxed">
                  With deep experience in the Shopify app ecosystem, SaaS product operations, and multi-channel
                  customer experience, our team founded Support Genius to solve the support strain faced by
                  founder-led teams. Having built support workflows, authored living playbooks, and streamlined
                  developer bug reproduction pipelines, our operations specialists work directly with app founders to turn reactive support
                  queues into durable systems that boost merchant retention and protect roadmap velocity.
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs font-medium text-ink">
                  <Link
                    href={CALENDLY_BOOKING_URL}
                    className="hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Schedule a conversation with our team &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: How we work */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[48rem]">
          <h2 className="display-xl text-ink">
            How we work
          </h2>
          <p className="mt-4 body-md text-ink-mute leading-relaxed">
            Our operating principles ensure consistency, operational transparency, and high merchant satisfaction
            from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.num} className="card-feature-light p-6 sm:p-7 flex flex-col justify-between">
              <span className="spotlight-glow" />
              <div>
                <span className="badge-tag">{p.num}</span>
                <h3 className="mt-4 heading-md text-ink">{p.title}</h3>
                <p className="mt-2.5 body-sm text-ink-mute leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Section: A partner that makes support easier to run */}
      <section className="border-t border-hairline-cool bg-canvas-soft py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              A partner that makes support easier to run
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              The best support relationship should create more clarity, not more management work.
              Support Genius gives your team a structured way to handle merchant conversations, surface
              trends, and keep product decisions where they belong - with the people who own the product.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={CALENDLY_BOOKING_URL} className="btn-primary py-3.5 px-7 text-base">
                Book a discovery call
              </Link>
              <Link href="/how-it-works" className="btn-secondary py-3.5 px-7 text-base">
                Read how the support system works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
