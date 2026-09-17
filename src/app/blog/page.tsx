import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import { CALENDLY_BOOKING_URL } from "../lib/calendly";

export const metadata: Metadata = {
  title: "Shopify App Support Resources | Support Genius",
  description:
    "Practical guides for Shopify app founders: support operations, ticket quality, knowledge bases, escalations, and outsourcing decisions.",
};

export default function BlogHub() {
  const categories = [
    {
      title: "Outsourcing decisions",
      desc: "Compare support models, understand cost drivers, and know what to prepare before handing work over.",
    },
    {
      title: "Support operations",
      desc: "Build a playbook, improve response quality, report on the right metrics, and reduce support chaos.",
    },
    {
      title: "Technical triage",
      desc: "Make bug reports and engineering escalations easier to investigate without leaving merchants in the dark.",
    },
    {
      title: "Merchant onboarding",
      desc: "Reduce friction during installation, setup, and first value so customers can move forward sooner.",
    },
  ];

  const articles = [
    {
      category: "Outsourcing decisions",
      title: "When Should a Shopify App Outsource Customer Support?",
      excerpt:
        "A practical way to decide whether founder-led support, an internal hire, or a specialist support partner makes sense for your app's current stage.",
      slug: "when-to-outsource-shopify-app-support",
      author: "Support Genius",
      date: "September 2026",
    },
    {
      category: "Outsourcing decisions",
      title: "In-House vs. Outsourced Shopify App Support: Cost & Control",
      excerpt:
        "Evaluating the true salary, management overhead, and coverage trade-offs between hiring internally versus partnering with specialists.",
      slug: "in-house-vs-outsourced-shopify-app-support",
      author: "Support Genius",
      date: "September 2026",
    },
    {
      category: "Support operations",
      title: "What Does Shopify App Support Cost? Complete Budgeting Guide",
      excerpt:
        "Understand pricing drivers across founder DIY time, general BPOs, dedicated reps, and Shopify-aware fractional support operations.",
      slug: "shopify-app-support-cost",
      author: "Support Genius",
      date: "August 2026",
    },
    {
      category: "Technical triage",
      title: "The Shopify App Support KPIs Founders Should Actually Watch",
      excerpt:
        "Beyond generic vanity metrics: First Contact Resolution, Developer Escalation Rate, and theme conflict reduction.",
      slug: "shopify-app-support-kpis",
      author: "Support Genius",
      date: "August 2026",
    },
  ];

  return (
    <main className="min-h-screen text-[#171717] bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-hero pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-[46rem]">
            <h1 className="text-[32px] sm:text-[46px] lg:text-[60px] font-medium text-[#171717] leading-[1.12] tracking-[-1.5px] sm:tracking-[-1.92px]">
              Practical Shopify App Support Resources
            </h1>
            <p className="mt-5 text-[16px] sm:text-[18px] text-[#707070] leading-[1.55]">
              Better support is built from better questions, clearer systems, and honest product feedback.
              These guides help Shopify app founders make support easier to manage before - or alongside - outsourcing it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Get a support assessment
              </Link>
              <Link href="/services" className="btn-secondary w-full sm:w-auto text-center">
                Explore support services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Card */}
      <section className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 pb-14 sm:pb-16">
        <ScrollReveal>
          <div className="card-feature-dark p-6 sm:p-9 lg:p-10 rounded-[12px] relative overflow-hidden">
            <span className="spotlight-glow" />
            <div className="max-w-[42rem]">
              <h2 className="text-[24px] sm:text-[32px] font-medium text-white leading-tight">
                When Should a Shopify App Outsource Customer Support?
              </h2>
              <p className="mt-4 text-[14px] sm:text-[16px] text-[#b2b2b2] leading-relaxed">
                A practical way to decide whether founder-led support, an internal hire, or a specialist
                support partner makes sense for your app&apos;s current stage.
              </p>
              <div className="mt-8">
                <Link
                  href="/blog/when-to-outsource-shopify-app-support"
                  className="btn-primary w-full sm:w-auto inline-flex justify-center"
                >
                  Read the guide
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Topic Categories */}
      <section className="section-dark-elevated">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <ScrollReveal>
            <div className="max-w-[46rem]">
              <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-medium text-[#171717] leading-[1.12] tracking-[-1px] sm:tracking-[-1.44px]">
                Topic categories
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.title} delay={idx * 70}>
                <div className="card-feature-light p-5 sm:p-6 h-full">
                  <span className="spotlight-glow" />
                  <h3 className="text-[17px] font-medium text-[#171717]">{cat.title}</h3>
                  <p className="mt-2 text-[13px] text-[#707070] leading-relaxed">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <ScrollReveal>
          <div className="max-w-[46rem]">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-medium text-[#171717] leading-[1.12] tracking-[-1px] sm:tracking-[-1.44px]">
              Published guides
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((art, idx) => (
            <ScrollReveal key={art.slug} delay={idx * 100}>
              <Link
                href={`/blog/${art.slug}`}
                className="card-feature-light-hover p-6 sm:p-7 flex flex-col justify-between group block h-full"
              >
                <span className="spotlight-glow" />
                <div>
                  <span className="text-[11px] font-mono text-primary uppercase tracking-wider">
                    {art.category}
                  </span>
                  <h3 className="mt-3 text-[18px] font-medium text-ink group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-ink-mute leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hairline-cool flex items-center justify-between text-[12px] text-ink-mute">
                  <span>{art.author}</span>
                  <span>{art.date}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Block */}
      <section className="section-bordered py-16 sm:py-20 lg:py-24 text-center">
        <div className="mx-auto max-w-[46rem] px-5 sm:px-6">
          <ScrollReveal>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-medium text-[#171717] leading-[1.12] tracking-[-1px] sm:tracking-[-1.44px]">
              Not sure what support needs to change first?
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-[#707070] leading-[1.55]">
              A support assessment helps you identify the recurring questions, ownership gaps, and handoff issues
              that are taking time away from your product team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
                Get a support assessment
              </Link>
              <Link href={CALENDLY_BOOKING_URL} className="btn-secondary w-full sm:w-auto text-center">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
