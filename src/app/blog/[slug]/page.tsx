import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type SectionItem = {
  id?: string;
  heading: string;
  paragraphs: string[];
  callout?: string;
  bulletPoints?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
};

type FullArticle = {
  title: string;
  category: string;
  metaDesc?: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  reviewedDate?: string;
  quickAnswer: string;
  tableOfContents?: { id: string; title: string }[];
  sections: SectionItem[];
  conclusion?: {
    heading: string;
    body: string;
  };
  relatedService: { href: string; label: string };
};

const articles: Record<string, FullArticle> = {
  "when-to-outsource-shopify-app-support": {
    title: "When Should You Outsource Shopify App Support?",
    category: "Outsourcing decisions",
    metaDesc:
      "Learn the signs that your Shopify app needs a stronger support system, how to compare options, and what to prepare before outsourcing.",
    author: "Support Genius",
    authorRole: "Support Operations Team",
    publishedDate: "September 2026",
    reviewedDate: "September 2026",
    quickAnswer:
      "You should consider outsourcing Shopify app support when customer conversations are consistently pulling founders or product staff away from work only they can do, response quality is becoming uneven, recurring questions are not being documented, or engineering is receiving poorly prepared escalations. The right time is not a universal ticket number. It is the point at which support has become a system problem rather than an occasional task.",
    tableOfContents: [
      { id: "founder-default", title: "1. The founder is still the default support team" },
      { id: "inconsistent-quality", title: "2. Response quality is becoming inconsistent" },
      { id: "repeat-questions", title: "3. The same questions keep appearing" },
      { id: "unhelpful-escalations", title: "4. Engineering receives unhelpful escalations" },
      { id: "compare-options", title: "5. Compare your options before you outsource" },
      { id: "what-to-prepare", title: "6. What to prepare before outsourcing Shopify app support" },
      { id: "small-first-step", title: "7. A small first step is better than a rushed handover" },
      { id: "conclusion", title: "Conclusion" },
    ],
    sections: [
      {
        id: "founder-default",
        heading: "1. The founder is still the default support team",
        paragraphs: [
          "Founder-led support is valuable early on because it teaches you how customers think. But it becomes expensive when it is the default response to every question. If a founder is repeatedly switching from roadmap work to inbox work, the cost is not only time. It is fragmented attention, delayed product decisions, and a customer experience that depends on who happens to be available.",
        ],
        callout:
          "A useful test: for two weeks, note how many hours are spent answering tickets, finding prior answers, asking engineers for context, and following up on unresolved issues. Include the interruptions, not only the time spent typing replies.",
      },
      {
        id: "inconsistent-quality",
        heading: "2. Response quality is becoming inconsistent",
        paragraphs: [
          "Support quality often breaks down before volume feels dramatic. One customer receives a clear answer because the founder knows the product. Another receives a short reply from someone who is guessing. A third waits because nobody is sure who owns the question. If the experience changes from ticket to ticket, you need a playbook and explicit ownership before you need more volume.",
        ],
      },
      {
        id: "repeat-questions",
        heading: "3. The same questions keep appearing",
        paragraphs: [
          "Repeat tickets are not just a queue-management issue. They can signal a weak onboarding step, confusing in-app wording, incomplete help content, an unclear pricing rule, or a product workflow that needs attention. A support system should tag and review patterns so the same question can become a better article, a reply macro, a product improvement idea, or a proactive onboarding message.",
        ],
      },
      {
        id: "unhelpful-escalations",
        heading: "4. Engineering receives unhelpful escalations",
        paragraphs: [
          "“A customer says the app is broken” is not an actionable escalation. Before engineering is pulled in, support should collect the merchant's goal, expected outcome, actual outcome, account or store context allowed by your policy, reproduction steps, screenshots or recordings, relevant timestamps, and the troubleshooting already attempted. This protects engineering focus and gives merchants a clearer update path.",
        ],
      },
      {
        id: "compare-options",
        heading: "5. Compare your options before you outsource",
        paragraphs: [
          "Before committing to an external partner, evaluate which operating model best matches your current stage, cash flow, and management bandwidth.",
        ],
        tableData: {
          headers: ["Option", "Best when", "Watch for"],
          rows: [
            [
              "Keep support founder-led",
              "The app is early, volume is low, and direct feedback is still essential to shaping the product.",
              "Support becomes an invisible tax on roadmap time; no repeatable system is being built.",
            ],
            [
              "Hire internally",
              "Volume and complexity justify a permanent role, and you can train and manage a support operation.",
              "Recruiting, training, coverage gaps, and a single person holding product knowledge.",
            ],
            [
              "Use a general support vendor",
              "The work is standard, highly documented, and does not require much Shopify or product context.",
              "Long training cycles, generic answers, and escalations that create more work for your team.",
            ],
            [
              "Use a Shopify app support specialist",
              "You need a documented support system and product-aware merchant communication without building the team first.",
              "Confirm actual Shopify experience, onboarding method, scope, escalation model, access practices, and proof.",
            ],
          ],
        },
      },
      {
        id: "what-to-prepare",
        heading: "6. What to prepare before outsourcing Shopify app support",
        paragraphs: [
          "Handing over support successfully does not require complete perfection, but having these core assets documented makes the transition significantly smoother:",
        ],
        bulletPoints: [
          "A short product walkthrough and a list of the merchant workflows your app supports.",
          "Recent tickets or anonymized examples that show common questions and tricky cases.",
          "Existing help articles, internal notes, known issues, reply macros, and escalation contacts.",
          "Your customer-facing tone, support channels, response expectations, and anything that must be approved before a reply is sent.",
          "Clear boundaries for refunds, account changes, security concerns, product commitments, and engineering escalation.",
        ],
      },
      {
        id: "small-first-step",
        heading: "7. A small first step is better than a rushed handover",
        paragraphs: [
          "You do not need to outsource everything on day one. Start by documenting the highest-volume questions, clarifying escalation rules, and testing a controlled handover. The right partner should make the system clearer before they make it larger.",
        ],
      },
    ],
    conclusion: {
      heading: "Conclusion",
      body: "Outsourcing is a good fit when support is taking meaningful attention away from product work and the current model is no longer giving merchants a consistent experience. The goal is not to put distance between you and customers. It is to build a better way to listen, respond, and act on what customers are telling you.",
    },
    relatedService: { href: "/services", label: "Explore Shopify app support services" },
  },

  "in-house-vs-outsourced-shopify-app-support": {
    title: "In-House vs. Outsourced Shopify App Support: Cost & Control",
    category: "Outsourcing decisions",
    author: "Support Genius",
    authorRole: "Support Operations Team",
    publishedDate: "September 2026",
    quickAnswer:
      "In-house hiring provides full control but carries fixed salary overhead and management burden. Outsourcing to a Shopify-aware agency gives immediate coverage, existing playbooks, and variable cost scaling without hiring friction.",
    sections: [
      {
        heading: "The true cost of hiring in-house",
        paragraphs: [
          "A full-time support rep requires salary, payroll taxes, benefits, and management overhead. For an early-stage app making $5K to $20K MRR, a dedicated hire consumes an outsized portion of revenue before ticket volume justifies 40 hours a week.",
          "Additionally, a single hire creates a single point of failure during vacations, sick leave, or sudden ticket spikes after App Store promotions.",
        ],
      },
      {
        heading: "When specialized outsourcing works best",
        paragraphs: [
          "Specialized Shopify support operations already have the tooling, escalation structures, and theme troubleshooting workflows ready from day one.",
          "You pay for the actual coverage window and ticket volume needed, allowing costs to adjust smoothly as your merchant count grows.",
        ],
      },
    ],
    relatedService: { href: "/services", label: "Compare support packages" },
  },

  "shopify-app-support-cost": {
    title: "What Does Shopify App Support Cost? Complete Budgeting Guide",
    category: "Outsourcing decisions",
    author: "Support Genius",
    authorRole: "Support Operations Team",
    publishedDate: "August 2026",
    quickAnswer:
      "Founder-handled support costs roughly $50 to $150/hr in lost developer opportunity. A full-time support hire averages $45K to $70K/year, while specialized Shopify app support packages typically range from $500 to $2,500/month based on volume.",
    sections: [
      {
        heading: "Cost breakdown by model",
        paragraphs: [
          "Founder DIY: Zero direct cash cost, but severe context switching. 10 hours a week of support interrupts roadmap development and delays feature launches.",
          "Full-time in-house hire: $4,000 to $6,000/month fully loaded, best once ticket volume exceeds 500+ tickets per month.",
          "Shopify-aware support as a service: Transparent tiered pricing offering multi-channel coverage with zero recruiting overhead.",
        ],
      },
      {
        heading: "ROI on fast response times",
        paragraphs: [
          "In the Shopify App Store ecosystem, review scores directly correlate with search ranking and install velocity. Fast, accurate support protects trial conversion and reduces churn.",
        ],
      },
    ],
    relatedService: { href: "/pricing", label: "View pricing tiers" },
  },

  "shopify-app-support-kpis": {
    title: "The Shopify App Support KPIs Founders Should Actually Watch",
    category: "Support operations",
    author: "Support Genius",
    authorRole: "Support Operations Team",
    publishedDate: "August 2026",
    quickAnswer:
      "Focus on First Response Time (FRT), First Contact Resolution (FCR), Escalation Rate to Engineering (<10% target), and Repeat Ticket Categories to systematically eliminate product friction.",
    sections: [
      {
        heading: "Vanity metrics vs. operational health",
        paragraphs: [
          "Raw ticket count tells you volume, but not health. Tracking the percentage of tickets escalated to engineering reveals whether your frontline team has adequate documentation and technical training.",
          "When engineering escalations remain under 10%, developers stay focused on building core product features rather than debugging routine merchant questions.",
        ],
      },
    ],
    relatedService: { href: "/services/technical-support-triage", label: "Improve technical triage" },
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Support Genius`,
    description: article.metaDesc || article.quickAnswer,
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const related = Object.entries(articles)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen text-ink bg-canvas">
      {/* 1. Article Header */}
      <section className="section-hero pt-14 pb-12 sm:pt-18 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-[48rem]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-soft border border-hairline text-xs font-medium text-ink mb-6">
              <span className="status-dot-green" />
              <span>{article.category}</span>
            </div>
            <h1 className="display-xxl text-ink">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-ink-mute">
              <span className="font-medium text-ink">By {article.author}</span>
              <span>•</span>
              <span>{article.authorRole}</span>
              <span>•</span>
              <span>Published {article.publishedDate}</span>
              {article.reviewedDate && (
                <>
                  <span>•</span>
                  <span>Reviewed {article.reviewedDate}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Body (Centered Layout - No empty side void) */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 sm:py-16">
        <article className="w-full">
          {/* Quick Answer Box */}
          <div className="card-feature-light border-l-4 border-l-primary bg-canvas-soft p-6 sm:p-7 mb-10">
            <span className="spotlight-glow" />
            <p className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">
              Quick Answer
            </p>
            <p className="body-md text-ink font-medium leading-relaxed">
              {article.quickAnswer}
            </p>
          </div>

          {/* Table of Contents (Works without JavaScript) */}
          {article.tableOfContents && (
            <div className="mb-12 p-6 rounded-xl border border-hairline bg-canvas">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-mute font-bold mb-3">
                In this guide
              </p>
              <ul className="space-y-2 text-sm">
                {article.tableOfContents.map((toc) => (
                  <li key={toc.id}>
                    <a
                      href={`#${toc.id}`}
                      className="text-ink hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      {toc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} id={sec.id} className="scroll-mt-24">
                <h2 className="display-md text-ink mb-4">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="body-md text-ink-mute leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                {/* Callout box if present */}
                {sec.callout && (
                  <div className="my-6 p-5 rounded-lg border border-hairline bg-canvas-soft border-l-4 border-l-ink">
                    <p className="body-sm text-ink font-medium italic">
                      {sec.callout}
                    </p>
                  </div>
                )}

                {/* Comparison Table if present */}
                {sec.tableData && (() => {
                  const table = sec.tableData;
                  return (
                    <>
                      {/* Desktop Table View */}
                      <div className="my-8 hidden md:block overflow-x-auto rounded-xl border border-hairline bg-canvas shadow-xs">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-hairline-cool bg-canvas-soft">
                              {table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  className="py-3 px-4 text-xs font-mono uppercase tracking-wider text-ink"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-hairline-cool text-xs sm:text-sm">
                            {table.rows.map((r, rIdx) => (
                              <tr key={rIdx} className="hover:bg-canvas-soft transition-colors">
                                <td className="py-3 px-4 font-semibold text-ink align-top w-1/4">
                                  {r[0]}
                                </td>
                                <td className="py-3 px-4 text-ink-mute align-top w-3/8">
                                  {r[1]}
                                </td>
                                <td className="py-3 px-4 text-ink-mute align-top w-3/8">
                                  {r[2]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile Vertical Cards View (Up-down scroll, no horizontal cutoff) */}
                      <div className="my-6 md:hidden space-y-4">
                        {table.rows.map((r, rIdx) => (
                          <div key={rIdx} className="rounded-xl border border-hairline bg-canvas p-5 shadow-xs space-y-3">
                            <p className="text-sm font-semibold text-ink pb-2 border-b border-hairline-cool">
                              {r[0]}
                            </p>
                            {table.headers.slice(1).map((h, hIdx) => (
                              <div key={hIdx}>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-ink-mute block mb-1">
                                  {h}
                                </span>
                                <p className="text-sm text-ink-mute leading-relaxed">
                                  {r[hIdx + 1]}
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}

                {/* Bullet Points if present */}
                {sec.bulletPoints && (
                  <ul className="my-6 space-y-3">
                    {sec.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-3 text-sm text-ink-mute">
                        <span className="status-dot-green mt-1.5 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Conclusion if present */}
            {article.conclusion && (
              <section id="conclusion" className="scroll-mt-24 pt-6 border-t border-hairline-cool">
                <h2 className="display-md text-ink mb-4">
                  {article.conclusion.heading}
                </h2>
                <p className="body-md text-ink-mute leading-relaxed">
                  {article.conclusion.body}
                </p>
              </section>
            )}
          </div>

          {/* Author Card & Related Articles in a 2-column balanced grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Author Card */}
            <div className="card-feature-light p-6">
              <span className="spotlight-glow" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-canvas-soft border border-primary flex items-center justify-center font-bold text-xs text-ink">
                  SG
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{article.author}</p>
                  <p className="text-xs text-ink-mute">{article.authorRole}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-ink-mute leading-relaxed">
                Specialists in Shopify app customer experience, living documentation, and technical triage.
              </p>
            </div>

            {/* Related Articles */}
            <div className="card-feature-light p-6">
              <span className="spotlight-glow" />
              <p className="text-xs font-mono uppercase tracking-wider text-ink font-bold mb-4">
                Related Articles
              </p>
              <ul className="space-y-3 text-xs">
                {related.map(([relSlug, relArt]) => (
                  <li key={relSlug} className="pb-3 border-b border-hairline-cool last:border-b-0 last:pb-0">
                    <Link
                      href={`/blog/${relSlug}`}
                      className="font-medium text-ink hover:text-primary transition-colors block leading-snug"
                    >
                      {relArt.title}
                    </Link>
                    <p className="text-[11px] text-ink-mute mt-1">{relArt.category}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conversion Block */}
          <div className="mt-8 p-8 sm:p-10 rounded-xl card-feature-dark text-white">
            <span className="spotlight-glow" />
            <h3 className="heading-lg text-white">
              Not sure what support needs to change first?
            </h3>
            <p className="mt-3 body-sm text-ink-faint leading-relaxed">
              A support assessment helps you identify the recurring questions, ownership gaps, and handoff
              issues that are taking time away from your product team.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary py-3 px-6 text-sm text-center">
                Get a support assessment
              </Link>
              <Link href="/services" className="btn-secondary py-3 px-6 text-sm text-center">
                Explore Shopify app support services
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}