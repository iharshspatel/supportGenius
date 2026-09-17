import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Support Genius",
  description:
    "Thanks for contacting Support Genius. We have received your message and will review your Shopify app support needs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen text-[#171717] bg-white flex items-center justify-center py-20 px-6">
      <div className="mx-auto max-w-[640px] text-center">
        <h1 className="text-[32px] sm:text-[44px] font-medium text-[#171717] leading-[1.15] tracking-[-1.44px]">
          Thanks - We Have Your Support Request
        </h1>
        <p className="mt-5 text-[16px] sm:text-[18px] text-[#707070] leading-[1.55]">
          We have received your details. Our team will review the information you shared about your Shopify
          app and support setup, then follow up through your preferred contact method.
        </p>

        {/* What you can do now Card */}
        <div className="mt-10 rounded-[10px] border border-[#ededed] bg-[#fafafa] p-6 sm:p-8 text-left">
          <h2 className="text-[16px] font-medium text-[#171717]">
            What you can do now
          </h2>
          <ul className="mt-4 space-y-3.5 text-[14px] text-[#707070]">
            <li className="flex items-start gap-2.5">
              <span className="status-dot-green mt-2 shrink-0" />
              <span>
                If you prefer to choose a time now,{" "}
                <Link href="/contact" className="font-medium text-[#171717] underline hover:text-[#3ecf8e]">
                  book a discovery call on our calendar
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="status-dot-green mt-2 shrink-0" />
              <span>
                Read our core guide:{" "}
                <Link
                  href="/blog/when-to-outsource-shopify-app-support"
                  className="font-medium text-[#171717] underline hover:text-[#3ecf8e]"
                >
                  When Should You Outsource Shopify App Support?
                </Link>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="status-dot-green mt-2 shrink-0" />
              <span>
                Explore the{" "}
                <Link href="/services" className="font-medium text-[#171717] underline hover:text-[#3ecf8e]">
                  Shopify App Support Services page
                </Link>
                .
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="status-dot-green mt-2 shrink-0" />
              <span>
                If you need to correct something in your message, contact us at{" "}
                <a href="mailto:support@thesupportgenius.com" className="font-medium text-[#171717] underline hover:text-[#3ecf8e]">
                  support@thesupportgenius.com
                </a>
                .
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/" className="btn-secondary">
            Return to home page
          </Link>
        </div>
      </div>
    </main>
  );
}
