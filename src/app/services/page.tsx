import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Shopify App Support Services | Support Genius",
  description:
    "Explore Shopify app support services: merchant support, onboarding, technical triage, knowledge base, escalation, and support reporting.",
};

export default function Services() {
  const serviceCards = [
    {
      title: "24/7 Shopify app support",
      desc: "Give merchants a real answer across time zones without leaving founders on call.",
      href: "/services/24-7-shopify-app-support",
      tag: "Always-on coverage",
    },
    {
      title: "Email support",
      desc: "Keep the inbox moving with clear, product-aware answers written in your voice.",
      href: "/services/email-support",
      tag: "Inbox coverage",
    },
    {
      title: "Live chat support",
      desc: "Help merchants while they are active in your app, before a small question becomes a dropped setup.",
      href: "/services/live-chat-support",
      tag: "Real-time help",
    },
    {
      title: "Social media support",
      desc: "Respond quickly and thoughtfully to public questions and direct messages.",
      href: "/services/social-media-support",
      tag: "Public channels",
    },
    {
      title: "Bug reporting and triage",
      desc: "Turn vague reports into reproducible, engineering-ready issues with the right context attached.",
      href: "/services/bug-reporting-and-triage",
      tag: "Engineering bridge",
    },
    {
      title: "Helpdesk management",
      desc: "Keep tickets assigned, tagged, prioritized, and moving through a clean support operation.",
      href: "/services/helpdesk-management",
      tag: "Queue operations",
    },
  ];

  const scopeComparison = [
    {
      weOwn: "Day-to-day conversations within the agreed scope",
      youRetain: "Product roadmap, feature decisions, and engineering ownership",
    },
    {
      weOwn: "Support playbook maintenance and approved knowledge-base improvements",
      youRetain: "Final approval of policies, exceptions, refunds, and commercial decisions",
    },
    {
      weOwn: "Ticket classification, investigation notes, and structured escalation",
      youRetain: "Access decisions, sensitive actions, and any action reserved for your team",
    },
    {
      weOwn: "Trend reporting and support-driven improvement ideas",
      youRetain: "Prioritization of product and business changes",
    },
  ];

  const faqs = [
    {
      q: "Can you use our existing help desk?",
      a: "In most cases, the support workflow should fit the tools your team already uses. We confirm tools, permissions, channels, and reporting needs during discovery before making recommendations.",
    },
    {
      q: "Will your team answer technical questions?",
      a: "We can handle known technical questions documented in the support playbook and triage unfamiliar or product-specific issues with the context engineering needs. The exact boundary is agreed during onboarding.",
    },
    {
      q: "Do you replace our internal support lead?",
      a: "We can complement or operate the day-to-day support function, but internal ownership should remain clear. The right model depends on your stage, ticket volume, product complexity, and team structure.",
    },
  ];

  return (
    <main className="min-h-screen text-ink bg-canvas">
      {/* 1. Hero Section */}
      <section className="section-hero pt-14 pb-12 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <h1 className="display-xxl text-ink">
              Shopify App Support Services for Growing App Teams
            </h1>
            <p className="mt-5 body-lg text-ink-mute">
              Support is not one task. It is a system of merchant conversations, product knowledge,
              technical triage, documentation, and feedback. Support Genius helps Shopify app
              teams build that system without asking founders to carry it alone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary py-3.5 px-7 text-base">
                Get a support assessment
              </Link>
              <Link href="/contact" className="btn-secondary py-3.5 px-7 text-base">
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: Choose the support outcomes you need */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-[48rem]">
          <h2 className="display-xl text-ink">
            Choose the support outcomes you need
          </h2>
          <p className="mt-4 body-md text-ink-mute leading-relaxed">
            Every Shopify app has different operational bottlenecks. Explore our specialized services
            designed to solve distinct support challenges from day-to-day replies to structured engineering escalations.
          </p>
        </div>

        {/* 5 Static Cards with Descriptive Text Links */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-feature-light p-6 sm:p-8 flex flex-col justify-between group hover:border-ink transition-colors"
            >
              <span className="spotlight-glow" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="badge-tag">{service.tag}</span>
                  <span className="text-xs font-mono text-ink-mute group-hover:text-primary transition-colors">
                    Explore &rarr;
                  </span>
                </div>
                <h3 className="mt-4 heading-md text-ink group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 body-sm text-ink-mute leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-hairline-cool flex items-center gap-1.5 text-xs font-medium text-ink group-hover:text-primary transition-colors">
                <span>View service details</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Section: What a managed support system includes */}
      <section id="knowledge-base-management" className="section-dark-elevated py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              What a managed support system includes
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              Every engagement begins with an agreed support scope. Depending on your plan, that can
              include daily ticket handling, channel coverage, approved reply macros, merchant onboarding
              assistance, troubleshooting, escalation coordination, knowledge-base updates, and a regular
              view of recurring themes.
            </p>
          </div>

          {/* Scope Comparison Table: We own vs You retain */}
          {/* Desktop Table View */}
          <div className="mt-12 hidden md:block overflow-x-auto rounded-xl border border-hairline bg-canvas shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline-cool bg-canvas-soft">
                  <th className="py-4 px-6 text-sm font-semibold text-ink w-1/2">
                    We own
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-ink w-1/2">
                    You retain
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-cool text-sm">
                {scopeComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-canvas-soft transition-colors">
                    <td className="py-4 px-6 text-ink-mute">
                      <div className="flex items-start gap-2.5">
                        <span className="status-dot-green mt-1.5 shrink-0" />
                        <span>{row.weOwn}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-ink font-medium">
                      <div className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-ink-mute-2 mt-1.5 shrink-0" />
                        <span>{row.youRetain}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Vertical Cards View (Up-down scroll, no horizontal cutoff) */}
          <div className="mt-8 md:hidden space-y-4">
            {scopeComparison.map((row, i) => (
              <div key={i} className="rounded-xl border border-hairline bg-canvas p-5 shadow-xs space-y-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink block mb-1">
                    We own
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-ink-mute leading-relaxed">
                    <span className="status-dot-green mt-1.5 shrink-0" />
                    <span>{row.weOwn}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-hairline-cool">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink block mb-1">
                    You retain
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-ink font-medium leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-ink-mute-2 mt-1.5 shrink-0" />
                    <span>{row.youRetain}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section: How we get started / Support Operations Reporting */}
      <section id="support-operations-reporting" className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-[48rem]">
          <h2 className="display-xl text-ink">
            How we get started
          </h2>
          <p className="mt-4 body-md text-ink-mute leading-relaxed">
            First we learn your app and current support reality. Then we document the recurring questions,
            define the escalation rules, train against real tickets, and begin with a controlled handover.
            The goal is not just to answer more tickets. It is to make support easier to manage, measure, and improve.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary py-3 px-6">
              Build your support plan
            </Link>
            <Link href="/how-it-works" className="btn-secondary py-3 px-6">
              See how onboarding works
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Section: Services FAQs */}
      <section className="border-t border-hairline-cool bg-canvas-soft py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-lg text-ink">
                Services FAQs
              </h2>
              <p className="mt-3 caption-text text-ink-mute leading-relaxed">
                Key questions about tooling integration, technical scope boundaries, and internal collaboration.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-hairline pt-8">
            <Link href="/contact" className="btn-primary py-3 px-6">
              Book a discovery call
            </Link>
            <Link href="/blog/when-to-outsource-shopify-app-support" className="btn-secondary py-3 px-6">
              Read: When to outsource Shopify app support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
