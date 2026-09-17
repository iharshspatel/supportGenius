import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";
import { CALENDLY_BOOKING_URL } from "../lib/calendly";

export const metadata: Metadata = { title: "Contact Support Genius | Shopify App Support", description: "Tell us about your Shopify app and support goals, or book a 30-minute call with our team.", alternates: { canonical: "/contact" } };

export default function Contact() {
  const faqs = [
    { q: "What happens after I send an inquiry?", a: "We review the details and reply by email. If a call makes sense, you can book a time directly with our team." },
    { q: "Can you sign an NDA?", a: "If an NDA is required, let us know before sharing sensitive product or customer information. The exact process and agreement should be confirmed by the appropriate business and legal owners." },
  ];
  const nextSteps = ["Send a short overview of your app and current support needs.", "We review the details and reply by email.", "If you prefer to talk sooner, book a 30-minute call instantly."];
  return <main className="min-h-screen overflow-x-hidden bg-white text-[#171717]">
    <section className="section-hero pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20"><div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8"><div className="max-w-[46rem]">
      <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-medium tracking-[-1.44px] text-[#171717] leading-tight">Talk Through Your Shopify App Support Setup</h1>
      <p className="mt-4 text-[16px] sm:text-[18px] text-[#707070] leading-relaxed">Send us a short inquiry, or book a 30-minute call when you are ready to discuss your Shopify app support needs.</p>
      <div className="mt-8"><a href={CALENDLY_BOOKING_URL} className="btn-primary w-full sm:w-auto text-center">Book a 30-minute call</a></div>
    </div></div></section>
    <section className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-8"><div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
      <ScrollReveal><div className="card-feature-light p-5 sm:p-8 lg:p-9 border border-[#dfdfdf]"><span className="spotlight-glow" />
        <h2 className="text-[24px] sm:text-[30px] text-[#171717]">Send an inquiry</h2><p className="mt-2 text-[14px] text-[#707070] leading-relaxed">Tell us a little about your app and the support help you need.</p>
        <ContactForm className="mt-6 space-y-5 sm:space-y-6">
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2"><div><label htmlFor="name" className="block text-[14px] font-medium text-[#171717]">Your name <span className="text-primary">*</span></label><input id="name" name="name" type="text" placeholder="Jane Doe" required className="input-dark mt-2" /></div><div><label htmlFor="email" className="block text-[14px] font-medium text-[#171717]">Work email <span className="text-primary">*</span></label><input id="email" name="email" type="email" placeholder="jane@company.com" required className="input-dark mt-2" /></div></div>
          <div><label htmlFor="company" className="block text-[14px] font-medium text-[#171717]">Company name and Shopify app URL <span className="text-primary">*</span></label><input id="company" name="company" type="text" placeholder="Acme Apps (https://apps.shopify.com/your-app)" required className="input-dark mt-2" /></div>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2"><div><label htmlFor="volume" className="block text-[14px] font-medium text-[#171717]">Approximate monthly ticket volume</label><select id="volume" name="volume" className="select-dark mt-2"><option value="">Select range...</option><option value="under-150">Under 150 tickets / month</option><option value="150-500">150 to 500 tickets / month</option><option value="500-1500">500 to 1,500 tickets / month</option><option value="1500+">1,500+ tickets / month</option><option value="not-sure">Not sure yet</option></select></div><div><label htmlFor="channels" className="block text-[14px] font-medium text-[#171717]">Current support channels</label><input id="channels" name="channels" type="text" placeholder="Email, chat, App Store" className="input-dark mt-2" /></div></div>
          <div><label htmlFor="challenge" className="block text-[14px] font-medium text-[#171717]">What support help do you need? <span className="text-primary">*</span></label><textarea id="challenge" name="challenge" rows={4} required placeholder="Tell us about your support needs, ticket challenges, or priorities..." className="input-dark mt-2" /></div>
          <div className="flex flex-col gap-3 sm:flex-row"><button type="submit" className="btn-primary w-full sm:w-auto">Submit inquiry</button><a href={CALENDLY_BOOKING_URL} className="btn-secondary w-full sm:w-auto text-center">Book a call</a></div>
          <p className="pt-2 border-t border-[#ededed] text-[13px] text-[#707070] leading-relaxed">Please do not include merchant passwords, payment details, or sensitive personal data in this form.</p>
        </ContactForm>
      </div></ScrollReveal>
      <aside className="space-y-6"><ScrollReveal delay={100}><div className="card-feature-light p-6"><span className="spotlight-glow" /><div className="flex items-center gap-2.5 pb-3 border-b border-[#ededed]"><span className="status-dot-green shrink-0" /><h2 className="text-[15px] font-medium text-[#171717]">What happens next</h2></div><ul className="mt-4 space-y-3.5 text-[13px] text-[#707070]">{nextSteps.map((step) => <li key={step} className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" /><span>{step}</span></li>)}</ul></div></ScrollReveal><ScrollReveal delay={150}><div className="card-feature-light p-6"><span className="spotlight-glow" /><h3 className="font-medium text-[14px] text-[#171717]">Prefer a direct message?</h3><p className="mt-1 text-[13px] text-[#707070]">Drop us an email anytime:</p><a href="mailto:dhruv.mangla@thesupportgenius.com" className="mt-2.5 inline-block font-medium text-[14px] text-[#171717] hover:text-primary transition-colors">dhruv.mangla@thesupportgenius.com</a></div></ScrollReveal><ScrollReveal delay={200}><div className="p-4 rounded-[8px] bg-[#fafafa] border border-[#ededed] text-[13px] text-[#707070]"><p>Read our <Link href="/privacy" className="link-on-light">privacy policy</Link> for details on how inquiry data is handled.</p></div></ScrollReveal></aside>
    </div></section>
    <section className="section-dark-elevated"><div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"><div className="grid gap-8 lg:grid-cols-12 lg:items-start"><div className="lg:col-span-4"><ScrollReveal><h2 className="text-[22px] sm:text-[28px] font-medium text-[#171717] leading-[1.2] tracking-[-0.42px]">Contact FAQs</h2><p className="mt-3 text-[14px] text-[#707070] leading-relaxed">A few answers before you get in touch.</p></ScrollReveal></div><div className="lg:col-span-8"><ScrollReveal delay={100}><FaqAccordion items={faqs} /></ScrollReveal></div></div></div></section>
  </main>;
}
