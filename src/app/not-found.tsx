import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Support Genius",
  description:
    "The page you were looking for is no longer available. Explore Shopify app support services, resources, or contact Support Genius.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen text-[#171717] bg-white flex items-center justify-center py-20 px-6">
      <div className="mx-auto max-w-[640px] text-center">
        <h1 className="text-[32px] sm:text-[44px] font-medium text-[#171717] leading-[1.15] tracking-[-1.44px]">
          This Page Is Not Here - But Support Can Still Be Simple
        </h1>
        <p className="mt-5 text-[16px] sm:text-[18px] text-[#707070] leading-[1.55]">
          The link may be outdated, or the page may have moved. You can return to the home page,
          explore Shopify app support services, or find a practical guide in our resources.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/services" className="btn-primary w-full sm:w-auto">
            Explore support services
          </Link>
          <Link href="/" className="btn-secondary w-full sm:w-auto">
            Return home
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-[#ededed] flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#707070]">
          <Link href="/blog" className="hover:text-[#171717] transition-colors underline underline-offset-4">
            Read resources
          </Link>
          <span className="text-[#b2b2b2]">·</span>
          <Link href="/contact" className="hover:text-[#171717] transition-colors underline underline-offset-4">
            Contact Support Genius
          </Link>
        </div>
      </div>
    </main>
  );
}