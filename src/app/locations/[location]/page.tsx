import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FaqAccordion from "../../components/FaqAccordion";

type LocationDetail = {
  name: string;
  relevance: string;
  localConnection: string;
  availability: string;
  faqs: { q: string; a: string }[];
};

const locations: Record<string, LocationDetail> = {
  "united-states": {
    name: "the United States",
    relevance:
      "Support Genius helps Shopify app teams in the United States build a more dependable merchant support operation. We learn your product, document the support workflow, handle agreed day-to-day conversations, and give your product team clearer escalation context.",
    localConnection:
      "Our operations provide dedicated coverage aligned with U.S. Eastern and Pacific business hours. Having worked alongside North American app founders across the Shopify App Store ecosystem, our team understands merchant expectations during key retail events like Black Friday / Cyber Monday (BFCM), sales tax compliance questions, and high-conversion holiday seasons.",
    availability:
      "Email and chat coverage is scheduled against Eastern and Pacific business hours, with exact hours agreed during onboarding.",
    faqs: [
      {
        q: "Do you work with remote Shopify app teams outside the United States?",
        a: "Yes. The engagement is scoped around your team's support needs, collaboration preferences, tools, and agreed coverage windows regardless of your home location.",
      },
      {
        q: "Can we meet in person?",
        a: "Our discovery, onboarding, and training are structured for complete remote efficiency via async audits, recorded walkthroughs, and video calls. In-person planning sessions can be arranged for scheduled operational workshops.",
      },
    ],
  },
  "united-kingdom": {
    name: "the United Kingdom & Europe",
    relevance:
      "Support Genius provides London and European daytime support coverage for growing Shopify app developers. We ensure your European merchants receive swift, articulate technical support throughout their trading hours.",
    localConnection:
      "We operate dedicated support windows scheduled across GMT and BST time zones. Our team is well-versed in European merchant requirements, including multi-currency checkout nuances, VAT invoice workflows, and strict GDPR privacy handling rules.",
    availability:
      "Coverage runs during standard UK/European business hours (9 AM – 6 PM GMT/BST), preventing delayed responses across European time zones.",
    faqs: [
      {
        q: "Do you support European languages other than English?",
        a: "Our primary direct queue language is English, but we can utilize approved translated macros and automated localization tools for European merchant inquiries.",
      },
      {
        q: "How do you handle GDPR compliance for merchant data?",
        a: "We adhere to strict data-minimization practices, never store merchant personal data in unapproved tools, and operate under mutual Data Processing Agreements (DPAs).",
      },
    ],
  },
  "canada": {
    name: "Canada",
    relevance:
      "Support Genius supports Canadian Shopify app teams with ecosystem-native merchant care, timely escalation triage, and complete alignment with North American business rhythms.",
    localConnection:
      "With deep familiarity with the Canadian Shopify ecosystem originating from Ottawa, Toronto, and Vancouver developer hubs, we understand omnichannel retail configurations, GST/HST tax rules, and cross-border shipping app workflows.",
    availability:
      "Coverage is coordinated across Eastern (EST) and Pacific (PST) business days to ensure comprehensive North American timezone alignment.",
    faqs: [
      {
        q: "Can you assist Canadian merchants during holiday traffic surges?",
        a: "Yes. We coordinate peak staffing schedules during BFCM, Boxing Day, and promotional sales windows to maintain agreed SLAs.",
      },
      {
        q: "Do you collaborate with distributed Canadian engineering teams?",
        a: "Yes. Our team works seamlessly across Slack, GitHub, Linear, or Jira to deliver clean reproductions and triage summaries directly to your sprint backlog.",
      },
    ],
  },
  "australia": {
    name: "Australia & APAC",
    relevance:
      "Support Genius provides dedicated daytime coverage for Australia and New Zealand Shopify apps, as well as high-value overnight coverage for North American and European app teams.",
    localConnection:
      "Covering AEST and AEDT working hours, our team enables Australian app developers to offer real-time help to local APAC merchants while also providing western app founders an 'always-on' overnight support presence.",
    availability:
      "Scheduled against Australian Eastern Standard Time (AEST/AEDT) business hours with custom weekend options available upon review.",
    faqs: [
      {
        q: "How does overnight coverage work for US/European app teams?",
        a: "While your internal team is offline, our APAC presence handles incoming merchant tickets, verifies known issues, and prepares structured escalation queues so your developers wake up to solved tickets and clean bug reports.",
      },
      {
        q: "Can you manage local Australian merchant queries regarding GST?",
        a: "Yes. We follow your approved playbooks for region-specific billing, GST invoices, and Australian payment gateway behaviors.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(locations).map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const detail = locations[location];
  if (!detail) return { title: "Location Not Found" };

  return {
    title: `Shopify App Support in ${detail.name} | Support Genius`,
    description: `Support Genius provides Shopify app support for growing app teams in ${detail.name} and beyond. Learn how we support merchants, product teams, and support operations.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const detail = locations[location];

  if (!detail) {
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
              <span>Location Coverage • {detail.name}</span>
            </div>
            <h1 className="display-xxl text-ink">
              Shopify App Support for Teams in {detail.name}
            </h1>
            <p className="mt-5 body-lg text-ink-mute">
              {detail.relevance}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary py-3.5 px-7 text-base">
                Talk to a support specialist
              </Link>
              <Link href="/services" className="btn-secondary py-3.5 px-7 text-base">
                Explore Shopify app support services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: Local relevance */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 sm:py-20 lg:py-24 border-t border-hairline-cool">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="display-xl text-ink">
              Local market relevance &amp; ecosystem experience
            </h2>
            <p className="mt-5 body-lg text-ink-mute leading-relaxed">
              {detail.localConnection}
            </p>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              We ensure your merchant support operates with full context of regional merchant behaviors,
              common payment gateway questions, shipping app integrations, and seasonal shopping surges.
            </p>
          </div>

          <div className="card-feature-dark p-7 sm:p-8 rounded-xl border border-[#2e2e2e]">
            <span className="spotlight-glow" />
            <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
              <div className="flex items-center gap-2">
                <span className="status-dot-green" />
                <span className="text-sm font-semibold text-white">Coverage Parameters</span>
              </div>
              <span className="text-xs font-mono text-primary bg-[#252525] px-2.5 py-0.5 rounded">
                Active Region
              </span>
            </div>
            <ul className="mt-6 space-y-4 text-xs font-mono text-[#dfdfdf]">
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Eastern &amp; Pacific business hour coverage</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Rapid response during merchant peak trading windows</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Standard mutual NDA and data confidentiality</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-primary">✔</span>
                <span>Direct Slack/Discord developer communication channel</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Section: The same Shopify-aware support system, tailored to your team */}
      <section className="section-dark-elevated py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <h2 className="display-xl text-ink">
              The same Shopify-aware support system, tailored to your team
            </h2>
            <p className="mt-4 body-md text-ink-mute leading-relaxed">
              Whether your team works from {detail.name}, across time zones, or fully remote, your merchants
              need clear answers and your product team needs clean escalation paths. We begin by understanding
              your app and current support workload, then build an engagement around the channels, ticket volume,
              and collaboration model that make sense for your stage.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Local FAQs */}
      <section className="border-t border-hairline-cool bg-canvas-soft py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="heading-lg text-ink">
                Regional support FAQs
              </h2>
              <p className="mt-3 caption-text text-ink-mute leading-relaxed">
                Answers regarding remote collaboration, meeting preferences, and time zone coverage.
              </p>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={detail.faqs} />
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-hairline pt-8">
            <Link href="/contact" className="btn-primary py-3 px-6">
              Talk to a support specialist
            </Link>
            <Link href="/services" className="btn-secondary py-3 px-6">
              Explore Shopify app support services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}