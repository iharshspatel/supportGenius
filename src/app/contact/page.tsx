import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Support Genius | Shopify App Support",
  description:
    "Tell us about your Shopify app, ticket volume, and support goals. We will help you assess the right support setup for your team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  const contactFaqs = [
    {
      q: "Do I need exact ticket-volume data before contacting you?",
      a: "No. An approximate range is enough to start the conversation. We can review your help desk data later if the engagement moves forward.",
    },
    {
      q: "Can you sign an NDA?",
      a: "If an NDA is required, let us know before sharing sensitive product or customer information. The exact process and agreement should be confirmed by the appropriate business and legal owners.",
    },
  ];

  const nextSteps = [
    "We review the details you share and identify the questions we need to clarify.",
    "If there is a likely fit, we schedule a discovery conversation or send focused follow-up questions.",
    "We discuss scope, current support volume, access, onboarding, commercial terms, and what must remain with your internal team.",
    "If Support Genius is not the right fit, we say so clearly rather than forcing a generic proposal.",
  ];

  return (
    <main className="min-h-screen text-[#171717] bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-hero pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <div className="max-w-[46rem]">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-medium tracking-[-1.44px] text-[#171717] leading-tight">
              Talk Through Your Shopify App Support Setup
            </h1>
            <p className="mt-4 text-[16px] sm:text-[18px] text-[#707070] leading-relaxed">
              Tell us where support is getting difficult: ticket volume, response consistency, technical triage,
              onboarding, documentation, or founder time. We will review the context and discuss whether
              Support Genius is the right fit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a href="#inquiry-form" className="btn-primary w-full sm:w-auto text-center">
                Book a discovery call
              </a>
              <a href="#inquiry-form" className="btn-secondary w-full sm:w-auto text-center">
                Send an inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Sidebar Grid */}
      <section id="inquiry-form" className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
          {/* Main Inquiry Form */}
          <ScrollReveal>
            <div className="card-feature-light p-5 sm:p-8 lg:p-9 border border-[#dfdfdf]">
              <span className="spotlight-glow" />

              <ContactForm className="space-y-5 sm:space-y-6">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[14px] font-medium text-[#171717]">
                      Your name <span className="text-[#3ecf8e]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      required
                      className="input-dark mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-[#171717]">
                      Work email <span className="text-[#3ecf8e]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      className="input-dark mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-[14px] font-medium text-[#171717]">
                    Company name and Shopify app URL <span className="text-[#3ecf8e]">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Apps (https://apps.shopify.com/your-app)"
                    required
                    className="input-dark mt-2"
                  />
                </div>

                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="volume" className="block text-[14px] font-medium text-[#171717]">
                      Approximate monthly ticket volume (optional)
                    </label>
                    <select
                      id="volume"
                      name="volume"
                      className="select-dark mt-2"
                    >
                      <option value="">Select range...</option>
                      <option value="under-150">Under 150 tickets / month</option>
                      <option value="150-500">150 to 500 tickets / month</option>
                      <option value="500-1500">500 to 1,500 tickets / month</option>
                      <option value="1500+">1,500+ tickets / month</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="channels" className="block text-[14px] font-medium text-[#171717]">
                      Where do merchants contact you today?
                    </label>
                    <input
                      id="channels"
                      name="channels"
                      type="text"
                      placeholder="Email, chat, App Store, other"
                      className="input-dark mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-[14px] font-medium text-[#171717]">
                    What would you most like to improve about support? <span className="text-[#3ecf8e]">*</span>
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={4}
                    required
                    placeholder="Tell us what takes up the most founder time, where response delays happen, or what bugs you need triaged..."
                    className="input-dark mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="meetingPreference" className="block text-[14px] font-medium text-[#171717]">
                    Would you prefer a call or email follow-up?
                  </label>
                  <select
                    id="meetingPreference"
                    name="meetingPreference"
                    className="select-dark mt-2"
                  >
                    <option value="call">20-minute discovery call</option>
                    <option value="email">Detailed email assessment first</option>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Create email inquiry
                  </button>
                </div>

                {/* Form Reassurance */}
                <div className="pt-2 border-t border-[#ededed]">
                  <p className="text-[13px] text-[#707070] leading-relaxed">
                    We use the details you share to understand your support setup and respond to your inquiry.
                    Please do not include merchant passwords, payment details, or sensitive personal data in this form. Submitting opens a prefilled email draft for you to review and send.
                  </p>
                </div>
              </ContactForm>
            </div>
          </ScrollReveal>

          {/* Sidebar: What happens next & direct contacts */}
          <aside className="space-y-6">
            <ScrollReveal delay={100}>
              <div className="card-feature-light p-6">
                <span className="spotlight-glow" />
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#ededed]">
                  <span className="status-dot-green shrink-0" />
                  <h2 className="text-[15px] font-medium text-[#171717]">What happens next</h2>
                </div>
                <ul className="mt-4 space-y-3.5 text-[13px] text-[#707070]">
                  {nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3ecf8e] shrink-0 mt-2" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="card-feature-light p-6">
                <span className="spotlight-glow" />
                <h3 className="font-medium text-[14px] text-[#171717]">Prefer a direct message?</h3>
                <p className="mt-1 text-[13px] text-[#707070]">Drop us an email anytime:</p>
                <a
                  href="mailto:support@thesupportgenius.com"
                  className="mt-2.5 inline-block font-medium text-[14px] text-[#171717] hover:text-[#3ecf8e] transition-colors"
                >
                  support@thesupportgenius.com
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-4 rounded-[8px] bg-[#fafafa] border border-[#ededed] text-[13px] text-[#707070]">
                <p>
                  Read our{" "}
                  <Link href="/privacy" className="link-on-light">
                    privacy policy
                  </Link>{" "}
                  for details on how support and inquiry data is handled with strict confidentiality.
                </p>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      {/* Short Contact FAQs Section */}
      <section className="section-dark-elevated">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <h2 className="text-[22px] sm:text-[28px] font-medium text-[#171717] leading-[1.2] tracking-[-0.42px]">
                  Short contact FAQs
                </h2>
                <p className="mt-3 text-[14px] text-[#707070] leading-relaxed">
                  Initial questions about data readiness, NDAs, and the discovery process.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delay={100}>
                <FaqAccordion items={contactFaqs} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
