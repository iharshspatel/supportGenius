import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Shopify App Support Hubs | Support Genius",
  description:
    "Explore our regional support coverage hubs across the United States, United Kingdom, Canada, and Australia. Dedicated Shopify app support tailored to your team's time zone.",
};

const locationHubs = [
  {
    slug: "united-states",
    name: "United States",
    timezone: "Eastern & Pacific (EST / PST)",
    desc: "Full business-hours coverage across North America, equipped for high-stakes retail periods such as Black Friday / Cyber Monday (BFCM).",
    badge: "North America Hub",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom & Europe",
    timezone: "London / CET (GMT / BST)",
    desc: "Dedicated daytime coverage for UK and European Shopify app merchants, aligning with GDPR-conscious workflows and European commerce patterns.",
    badge: "UK & Europe Hub",
  },
  {
    slug: "canada",
    name: "Canada",
    timezone: "Eastern & Pacific (EST / PST)",
    desc: "Native ecosystem alignment with Shopify headquarters and Canadian merchant practices, sales taxes, and multi-currency configurations.",
    badge: "Canadian Hub",
  },
  {
    slug: "australia",
    name: "Australia & APAC",
    timezone: "Sydney & Melbourne (AEST / AEDT)",
    desc: "Evening and overnight queue coverage for western teams, and prime daytime operational support for growing Asia-Pacific Shopify app developers.",
    badge: "APAC & Oceania Hub",
  },
];

export default function LocationsIndex() {
  return (
    <main className="min-h-screen text-ink bg-canvas">
      {/* Hero Section */}
      <section className="section-hero pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-hairline text-xs font-medium text-ink mb-6">
              <span className="status-dot-green" />
              <span>Multi-Timezone Coverage</span>
            </div>
            <h1 className="display-xxl text-ink">
              Shopify App Support Built for Your Time Zone
            </h1>
            <p className="mt-5 body-lg text-ink-mute leading-relaxed">
              Whether your founders and engineers are based in North America, Europe, or Asia-Pacific,
              Support Genius provides scheduled frontline merchant support tailored to your customer base.
            </p>
          </div>
        </div>
      </section>

      {/* Location Hub Cards */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="grid gap-6 sm:grid-cols-2">
          {locationHubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/locations/${hub.slug}`}
              className="card-feature-light p-6 sm:p-8 flex flex-col justify-between group hover:border-ink transition-colors"
            >
              <span className="spotlight-glow" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="badge-tag">{hub.badge}</span>
                  <span className="text-xs font-mono text-ink-mute group-hover:text-primary transition-colors">
                    Explore region &rarr;
                  </span>
                </div>
                <h2 className="mt-4 heading-lg text-ink group-hover:text-primary transition-colors">
                  {hub.name}
                </h2>
                <p className="mt-1 text-xs font-mono text-primary font-semibold">
                  {hub.timezone}
                </p>
                <p className="mt-3.5 body-sm text-ink-mute leading-relaxed">
                  {hub.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-hairline-cool flex items-center gap-1.5 text-xs font-medium text-ink group-hover:text-primary transition-colors">
                <span>View regional operations</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Global Remote Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-canvas-soft border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="heading-md text-ink">Work with a fully remote team?</h3>
            <p className="mt-1 body-sm text-ink-mute">
              We structure asynchronous handovers, Slack channels, and shared playbooks so your location is never a barrier.
            </p>
          </div>
          <Link href="/contact" className="btn-primary py-3 px-6 shrink-0">
            Discuss your coverage needs
          </Link>
        </div>
      </section>
    </main>
  );
}
