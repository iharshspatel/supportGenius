import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const serviceLinks = [
    { href: "/services/24-7-shopify-app-support", label: "24/7 app support" },
    { href: "/services/email-support", label: "Email support" },
    { href: "/services/live-chat-support", label: "Live chat support" },
    { href: "/services#knowledge-base-management", label: "Knowledge base management" },
    { href: "/services#support-operations-reporting", label: "Support operations reporting" },
  ];

  const resourceLinks = [
    { href: "/blog", label: "Practical resources" },
    { href: "/blog/when-to-outsource-shopify-app-support", label: "When to outsource support" },
  ];

  const companyLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="border-t border-hairline bg-canvas text-ink-mute">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-14 border-b border-hairline">
          {/* Services Column */}
          <div>
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-3 text-[13px]">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ink-mute hover:text-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <p className="eyebrow">Resources</p>
            <ul className="mt-4 space-y-3 text-[13px]">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ink-mute hover:text-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="eyebrow">Company</p>
            <ul className="mt-4 space-y-3 text-[13px]">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-ink-mute hover:text-ink transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Status & Brand Summary */}
          <div>
            <p className="eyebrow">Support Genius</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink-mute">
              Support Genius provides Shopify-aware customer support for growing app teams. We help you document the work, support merchants with clarity, and give your product team better context when an issue needs attention.
            </p>

            <div className="mt-6 border-l-2 border-primary-edge pl-4">
              <p className="text-[13.5px] leading-relaxed text-ink">
                Reply times are written into your agreement, not into a badge on
                a website.
              </p>
              <a
                href="mailto:support@thesupportgenius.com"
                className="link-inline mt-2 inline-block text-[13px]"
              >
                support@thesupportgenius.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-[13px]">
          <div className="flex items-center gap-2.5">
            <div className="relative h-7 w-7 overflow-hidden rounded-[7px] border border-hairline">
              <Image
                src="/logo.svg"
                alt="Support Genius"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-[15px] font-medium tracking-tight text-ink">
              Support <span className="text-primary">Genius</span>
            </span>
          </div>

          <p className="text-ink-mute-2">
            © {new Date().getFullYear()} Support Genius
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-ink-mute hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <a
              href="mailto:support@thesupportgenius.com"
              className="link-inline font-medium"
            >
              support@thesupportgenius.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
