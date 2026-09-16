import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

type ServiceData = {
  titleTag: string;
  metaDesc: string;
  h1: string;
  heroSub: string;
  badge: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  bottomPrimaryCta?: { label: string; href: string };
  bottomSecondaryCta?: { label: string; href: string };
  contextSection?: {
    h2: string;
    body: string;
  };
  deliverablesTable?: {
    h2: string;
    intro: string;
    items: { deliverable: string; outcome: string }[];
  };
  bulletSection?: {
    h2: string;
    intro?: string;
    items: string[];
  };
  handoverSteps?: {
    step: string;
    title: string;
    desc: string;
  }[];
  conversationsSection?: {
    h2: string;
    body: string;
    sampleEscalationTitle: string;
    sampleEscalation: {
      merchant: string;
      appVersion: string;
      theme: string;
      expected: string;
      actual: string;
      repro: string[];
      severity: string;
    };
  };
  collaborationTable?: {
    h2: string;
    intro: string;
    rows: { supportHandles: string; escalateToTeam: string }[];
  };
  faqs?: { q: string; a: string }[];
};

const serviceDataMap: Record<string, ServiceData> = {
  "shopify-app-customer-support": {
    titleTag: "Shopify App Customer Support Outsourcing | Support Genius",
    metaDesc:
      "Outsource Shopify app customer support to a team that learns your product, supports merchants, and escalates issues with useful context.",
    h1: "Outsourced Customer Support for Shopify Apps",
    heroSub:
      "Give your merchants a dependable support experience without turning your founders or developers into the always-on inbox. Support Genius learns your app, follows your approved support process, and keeps the right conversations moving.",
    badge: "Managed Frontline Support",
    primaryCta: { label: "Get a support assessment", href: "/contact" },
    secondaryCta: { label: "Book a discovery call", href: "/contact" },
    bottomPrimaryCta: { label: "Talk through your ticket volume", href: "/contact" },
    bottomSecondaryCta: { label: "See all support services", href: "/services" },
    contextSection: {
      h2: "When Shopify app support starts pulling your team away from growth",
      body: "You may not need a large in-house support department. But you do need a reliable way to respond when merchants cannot install your app, do not understand a feature, have billing questions, or run into an issue that needs investigation. If support is being handled in fragments, customers feel the gaps and your team loses focus.",
    },
    deliverablesTable: {
      h2: "What your support coverage can include",
      intro:
        "Every engagement is scoped around your merchant channels and support complexity to guarantee consistent, on-brand resolution.",
      items: [
        {
          deliverable: "Merchant ticket handling",
          outcome: "Clear, helpful responses that follow your product knowledge, tone, and support rules.",
        },
        {
          deliverable: "Issue classification",
          outcome:
            "Tickets are tagged by question type, urgency, and known vs. unknown status so recurring patterns become visible.",
        },
        {
          deliverable: "Known-issue troubleshooting",
          outcome: "Merchants receive practical guidance for documented setup, configuration, and workflow questions.",
        },
        {
          deliverable: "Structured escalation",
          outcome:
            "Your product or engineering team receives reproduction details, customer context, screenshots or recordings when available, and the support steps already taken.",
        },
        {
          deliverable: "Knowledge-base feedback",
          outcome:
            "High-frequency questions become candidates for help articles, macros, onboarding improvements, or product changes.",
        },
        {
          deliverable: "Support reporting",
          outcome: "A regular view of ticket themes helps your team spot friction before it becomes a larger growth problem.",
        },
      ],
    },
    handoverSteps: [
      {
        step: "01",
        title: "Learn the app, write the docs",
        desc: "A Shopify support expert installs your app on a test store, works through every setting and flow, reads your ticket history, and writes the internal docs: frequent merchant questions, approved answers, known issues, tone and policies.",
      },
      {
        step: "02",
        title: "Start answering",
        desc: "Day-to-day support runs inside the help desk you already use, under your name, with severity levels, escalation rules and refund limits agreed before the first live ticket.",
      },
      {
        step: "03",
        title: "Feedback and improvement",
        desc: "A weekly summary, monthly reports and QA on a sample of replies. Repeat questions become help articles, and recurring product issues reach your team with the details attached.",
      },
    ],
    conversationsSection: {
      h2: "Built for the conversations Shopify app teams actually receive",
      body: "Merchant support often sits between product education and technical investigation. A customer may need help completing app setup, understanding a workflow, checking an integration, interpreting a billing change, or sharing the details of an error. We keep the response human and useful while ensuring that issues requiring engineering do not arrive as a vague forwarded message.",
      sampleEscalationTitle: "Sample Structured Escalation Format",
      sampleEscalation: {
        merchant: "mystore-us.myshopify.com (Shopify Plus, Online Store 2.0)",
        appVersion: "v2.4.1 (Tier: Growth Plan)",
        theme: "Dawn v15.0.0 (Unmodified core sections)",
        expected: "Product discount badge renders dynamically above the Buy button.",
        actual: "Badge container renders empty with console syntax error: 'app_embed block missing configuration'.",
        repro: [
          "1. Merchant navigated to Theme Customizer > App Embeds > Discount Engine.",
          "2. Enabled toggle but forgot to click Save before refreshing preview cache.",
          "3. Tested with test store product #8849201; verified collaborator theme permissions are intact.",
        ],
        severity: "Medium — merchant unblocked via temporary macro, bug logged for auto-save prompt.",
      },
    },
    collaborationTable: {
      h2: "Clear collaboration with product and engineering",
      intro:
        "A good outsourced support model does not create a wall between customers and product. It creates a better filter. We resolve approved, known questions quickly. We ask for missing information before escalating. And we send the product team a concise issue summary that makes investigation easier.",
      rows: [
        {
          supportHandles: "Documented how-to questions and routine configuration guidance",
          escalateToTeam: "New defects, outages, security concerns, and product decisions",
        },
        {
          supportHandles: "Information gathering and reproduction attempts within approved access",
          escalateToTeam: "Sensitive account changes, refunds, pricing exceptions, or policy decisions",
        },
        {
          supportHandles: "Customer communication during a known incident, using approved updates",
          escalateToTeam: "Root-cause confirmation, fixes, and commitments that require product authority",
        },
      ],
    },
    faqs: [
      {
        q: "Will merchants know they are speaking to an outsourced team?",
        a: "That decision is yours. The support experience should be consistent with your brand, tone, and customer expectations. We align on how the team is presented during onboarding.",
      },
      {
        q: "How quickly can support begin?",
        a: "Timing depends on product complexity, access, documentation quality, channels, and the agreed training and shadow period. We set a realistic handover plan during discovery rather than promising a start date before understanding the work.",
      },
      {
        q: "Can you support multiple apps?",
        a: "Potentially. We review each app's complexity, audience, volume, and required expertise so scope and staffing stay realistic.",
      },
    ],
  },

  "support-onboarding-playbooks": {
    titleTag: "Shopify App Support Onboarding & Playbooks | Support Genius",
    metaDesc:
      "Turn Shopify app knowledge into a support playbook, escalation model, and help content your team can use and improve.",
    h1: "Build a Shopify App Support Playbook Your Team Can Rely On",
    heroSub:
      "Support becomes difficult to delegate when the answers live in a founder's memory, scattered Slack threads, or old ticket replies. We help you turn product knowledge into a practical support system: common questions, reply standards, escalation rules, ownership boundaries, and a process for keeping it current.",
    badge: "Process & System Architecture",
    primaryCta: { label: "Build your support playbook", href: "/contact" },
    secondaryCta: { label: "See managed support", href: "/services/shopify-app-customer-support" },
    bottomPrimaryCta: { label: "Build your support playbook", href: "/contact" },
    bottomSecondaryCta: { label: "See managed support", href: "/services/shopify-app-customer-support" },
    bulletSection: {
      h2: "What we build",
      items: [
        "A product and merchant journey review that identifies the questions support must answer.",
        "A support taxonomy for ticket types, issue severity, known issues, and escalation triggers.",
        "Approved reply guidance and tone examples for common merchant conversations.",
        "A knowledge-base improvement plan grounded in real ticket patterns.",
        "A handover and QA routine so the system stays useful after launch.",
      ],
    },
  },

  "technical-support-triage": {
    titleTag: "Shopify App Technical Support Triage | Support Genius",
    metaDesc:
      "Improve Shopify app support escalations with structured technical triage, reproduction details, and clear communication for merchants and engineering.",
    h1: "Shopify App Technical Support Triage That Gives Engineering Useful Context",
    heroSub:
      "Not every ticket is a bug, and not every bug report arrives with enough information to investigate. Support Genius helps distinguish known guidance from product issues, collect the right evidence, and communicate clearly while your team decides the technical next step.",
    badge: "Developer-Ready Triage",
    primaryCta: { label: "Improve your escalation workflow", href: "/contact" },
    secondaryCta: {
      label: "Read the support outsourcing guide",
      href: "/blog/when-to-outsource-shopify-app-support",
    },
    bottomPrimaryCta: { label: "Improve your escalation workflow", href: "/contact" },
    bottomSecondaryCta: {
      label: "Read the support outsourcing guide",
      href: "/blog/when-to-outsource-shopify-app-support",
    },
    bulletSection: {
      h2: "A better escalation includes",
      items: [
        "Merchant account and app context, subject to your approved access rules.",
        "The expected outcome, actual outcome, and steps that can reproduce the issue.",
        "Screenshots, screen recordings, error text, relevant timestamps, and prior troubleshooting steps when available.",
        "A clear severity and customer-impact note - without making unsupported promises about resolution.",
        "A customer-facing update path so merchants know what is happening while investigation continues.",
      ],
    },
  },
};

// Aliases for backwards compatibility with any old links
const aliasMap: Record<string, string> = {
  "email-support": "shopify-app-customer-support",
  "chat-support": "shopify-app-customer-support",
  "onboarding-support": "support-onboarding-playbooks",
  "technical-troubleshooting": "technical-support-triage",
};

export function generateStaticParams() {
  const allSlugs = [
    ...Object.keys(serviceDataMap),
    ...Object.keys(aliasMap),
  ];
  return allSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const resolvedSlug = aliasMap[service] || service;
  const data = serviceDataMap[resolvedSlug];

  if (!data) return { title: "Service Not Found" };

  return {
    title: data.titleTag,
    description: data.metaDesc,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const resolvedSlug = aliasMap[service] || service;
  const data = serviceDataMap[resolvedSlug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen text-ink bg-canvas">
      {/* 1. Hero Section */}
      <section className="section-hero pt-14 pb-12 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-hairline text-xs font-medium text-ink mb-6">
              <span className="status-dot-green" />
              <span>{data.badge}</span>
            </div>
            <h1 className="display-xxl text-ink">
              {data.h1}
            </h1>
            <p className="mt-5 body-lg text-ink-mute">
              {data.heroSub}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href={data.primaryCta.href} className="btn-primary py-3.5 px-7 text-base">
                {data.primaryCta.label}
              </Link>
              <Link href={data.secondaryCta.href} className="btn-secondary py-3.5 px-7 text-base">
                {data.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Context Section */}
      {data.contextSection && (
        <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-hairline-cool">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              {data.contextSection.h2}
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              {data.contextSection.body}
            </p>
          </div>
        </section>
      )}

      {/* 3. Deliverables Table (If Applicable) */}
      {data.deliverablesTable && (
        <section className="section-dark-elevated py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="max-w-[48rem]">
              <h2 className="display-xl text-ink">
                {data.deliverablesTable.h2}
              </h2>
              <p className="mt-4 body-md text-ink-mute leading-relaxed">
                {data.deliverablesTable.intro}
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="mt-12 hidden md:block overflow-x-auto rounded-xl border border-hairline bg-canvas shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-hairline-cool bg-canvas-soft">
                    <th className="py-4 px-6 text-sm font-semibold text-ink w-1/3">
                      Deliverable
                    </th>
                    <th className="py-4 px-6 text-sm font-semibold text-ink w-2/3">
                      Customer-facing outcome
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline-cool text-sm">
                  {data.deliverablesTable.items.map((row, i) => (
                    <tr key={i} className="hover:bg-canvas-soft transition-colors">
                      <td className="py-4 px-6 text-ink font-medium">
                        <div className="flex items-center gap-2">
                          <span className="status-dot-green" />
                          <span>{row.deliverable}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-ink-mute">
                        {row.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Vertical Cards View (Up-down scroll, no horizontal cutoff) */}
            <div className="mt-8 md:hidden space-y-4">
              {data.deliverablesTable.items.map((row, i) => (
                <div key={i} className="rounded-xl border border-hairline bg-canvas p-5 shadow-xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="status-dot-green shrink-0" />
                    <span className="text-sm font-medium text-ink">{row.deliverable}</span>
                  </div>
                  <div className="pt-2 border-t border-hairline-cool">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-mute block mb-1">
                      Customer-facing outcome
                    </span>
                    <p className="text-sm text-ink-mute leading-relaxed">{row.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Bullet Section (What we build / Better escalation) */}
      {data.bulletSection && (
        <section className="section-dark-elevated py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="max-w-[48rem]">
              <h2 className="display-xl text-ink">
                {data.bulletSection.h2}
              </h2>
              {data.bulletSection.intro && (
                <p className="mt-4 body-md text-ink-mute leading-relaxed">
                  {data.bulletSection.intro}
                </p>
              )}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.bulletSection.items.map((item, i) => (
                <div
                  key={i}
                  className="card-feature-light p-5 flex items-start gap-3.5 border border-hairline"
                >
                  <span className="status-dot-green mt-1 shrink-0" />
                  <p className="body-md text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Handover Steps (If present) */}
      {data.handoverSteps && (
        <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              How the handover works
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              We do not guess in a shared inbox. A Shopify support expert learns the app and writes
              the docs first, then starts answering, then reports on what merchants keep asking.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.handoverSteps.map((step) => (
              <div key={step.step} className="card-feature-light p-6 sm:p-7 flex flex-col justify-between">
                <span className="spotlight-glow" />
                <div>
                  <span className="badge-tag">{step.step}</span>
                  <h3 className="mt-4 heading-md text-ink">{step.title}</h3>
                  <p className="mt-2.5 body-sm text-ink-mute leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Conversations & Sample Escalation Format (If present) */}
      {data.conversationsSection && (
        <section className="border-t border-hairline-cool bg-canvas-soft py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="max-w-[48rem]">
              <h2 className="display-xl text-ink">
                {data.conversationsSection.h2}
              </h2>
              <p className="mt-4 body-md text-ink-mute leading-relaxed">
                {data.conversationsSection.body}
              </p>
            </div>

            {/* Proof Module: Sample Escalation Format */}
            <div className="mt-12 max-w-[56rem] card-feature-dark p-6 sm:p-8 rounded-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
                <div className="flex items-center gap-2.5">
                  <span className="status-dot-green" />
                  <span className="text-sm font-semibold text-white font-mono">
                    {data.conversationsSection.sampleEscalationTitle}
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2e2e2e] text-[#3ecf8e]">
                  DEV-READY TICKET
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs font-mono text-[#b2b2b2]">
                <div>
                  <span className="text-white font-bold">STORE CONTEXT:</span>{" "}
                  {data.conversationsSection.sampleEscalation.merchant}
                </div>
                <div>
                  <span className="text-white font-bold">APP VERSION:</span>{" "}
                  {data.conversationsSection.sampleEscalation.appVersion}
                </div>
                <div>
                  <span className="text-white font-bold">ACTIVE THEME:</span>{" "}
                  {data.conversationsSection.sampleEscalation.theme}
                </div>
                <div>
                  <span className="text-white font-bold">EXPECTED:</span>{" "}
                  {data.conversationsSection.sampleEscalation.expected}
                </div>
                <div>
                  <span className="text-white font-bold">ACTUAL:</span>{" "}
                  <span className="text-accent-tomato">
                    {data.conversationsSection.sampleEscalation.actual}
                  </span>
                </div>
                <div>
                  <span className="text-white font-bold">REPRO STEPS:</span>
                  <ul className="mt-1 space-y-1 pl-3 text-[#dfdfdf]">
                    {data.conversationsSection.sampleEscalation.repro.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t border-[#333333] text-primary">
                  <span className="font-bold">TRIAGE NOTE:</span>{" "}
                  {data.conversationsSection.sampleEscalation.severity}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Collaboration Table: Support Handles vs Escalate to Team (If present) */}
      {data.collaborationTable && (
        <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              {data.collaborationTable.h2}
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              {data.collaborationTable.intro}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="mt-12 hidden md:block overflow-x-auto rounded-xl border border-hairline bg-canvas shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-hairline-cool bg-canvas-soft">
                  <th className="py-4 px-6 text-sm font-semibold text-ink w-1/2">
                    Support handles
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-ink w-1/2">
                    Escalate to your team
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline-cool text-sm">
                {data.collaborationTable.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-canvas-soft transition-colors">
                    <td className="py-4 px-6 text-ink-mute">
                      <div className="flex items-start gap-2.5">
                        <span className="status-dot-green mt-1.5 shrink-0" />
                        <span>{row.supportHandles}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-ink font-medium">
                      <div className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-ink-mute-2 mt-1.5 shrink-0" />
                        <span>{row.escalateToTeam}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Vertical Cards View (Up-down scroll, no horizontal cutoff) */}
          <div className="mt-8 md:hidden space-y-4">
            {data.collaborationTable.rows.map((row, i) => (
              <div key={i} className="rounded-xl border border-hairline bg-canvas p-5 shadow-xs space-y-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink block mb-1">
                    Support handles
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-ink-mute leading-relaxed">
                    <span className="status-dot-green mt-1.5 shrink-0" />
                    <span>{row.supportHandles}</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-hairline-cool">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-ink block mb-1">
                    Escalate to your team
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-ink font-medium leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-ink-mute-2 mt-1.5 shrink-0" />
                    <span>{row.escalateToTeam}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. FAQs (If present) */}
      {data.faqs && (
        <section className="border-t border-hairline-cool bg-canvas-soft py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <h2 className="heading-lg text-ink">
                  Frequently asked questions
                </h2>
                <p className="mt-3 caption-text text-ink-mute leading-relaxed">
                  Everything you need to know about scope, start times, and team structure.
                </p>
              </div>

              <div className="lg:col-span-8">
                <FaqAccordion items={data.faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Bottom CTA Section */}
      <section className="border-t border-hairline-cool bg-canvas py-12 sm:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl bg-canvas-soft border border-hairline">
            <div>
              <h3 className="heading-md text-ink">Ready to get started?</h3>
              <p className="mt-1 body-sm text-ink-mute">
                Take the next step towards reliable, Shopify-aware app support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Link
                href={(data.bottomPrimaryCta || data.primaryCta).href}
                className="btn-primary py-3 px-6 text-center"
              >
                {(data.bottomPrimaryCta || data.primaryCta).label}
              </Link>
              <Link
                href={(data.bottomSecondaryCta || data.secondaryCta).href}
                className="btn-secondary py-3 px-6 text-center"
              >
                {(data.bottomSecondaryCta || data.secondaryCta).label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}