"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { CALENDLY_BOOKING_URL } from "../lib/calendly";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  // Auto-close menu when navigating to a new route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}`));
  };

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateIndicator = () => {
      const activeLink = nav.querySelector<HTMLAnchorElement>("[data-nav-active='true']");
      if (!activeLink) {
        setIndicator({ left: 0, width: 0, ready: false });
        return;
      }
      const navBounds = nav.getBoundingClientRect();
      const linkBounds = activeLink.getBoundingClientRect();
      setIndicator({
        left: linkBounds.left - navBounds.left,
        width: linkBounds.width,
        ready: true,
      });
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(nav);
    window.addEventListener("resize", updateIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-hairline bg-canvas/80 backdrop-blur-xl transition-colors duration-200">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
          {/* Brand Logo & Wordmark */}
          <div className="flex h-full items-center gap-8">
            <Link href="/" className="group flex shrink-0 items-center">
              <span className="text-[20px] font-bold tracking-[-0.06em] text-ink transition-transform duration-150 group-hover:scale-[1.02]">
                Support<span className="text-primary">Genius</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav ref={navRef} className="relative hidden h-full items-center gap-7 md:flex" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    data-nav-active={active}
                    aria-current={active ? "page" : undefined}
                    className={`flex h-full items-center text-[14px] font-medium transition-colors duration-200 ${
                      active
                        ? "text-ink"
                        : "text-ink-mute hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[9px] h-[2px] rounded-full bg-primary transition-[transform,width,opacity] duration-300 ease-out"
                style={{
                  width: `${indicator.width}px`,
                  transform: `translateX(${indicator.left}px)`,
                  opacity: indicator.ready ? 1 : 0,
                }}
              />
            </nav>
          </div>

          {/* Right CTA */}
          <div className="hidden items-center md:flex">
            <Link href={CALENDLY_BOOKING_URL} className="btn-primary">
              Book a call
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-hairline-strong bg-transparent text-ink hover:bg-canvas-soft md:hidden transition-colors cursor-pointer select-none active:scale-95"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 w-full border-t border-hairline bg-canvas/95 backdrop-blur-xl px-4 py-5 shadow-[0_16px_48px_-24px_rgba(26,23,20,0.3)] sm:px-6 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-[6px] px-4 py-3 text-[15px] font-medium transition-colors ${
                      active
                        ? "bg-canvas-soft text-ink border border-hairline"
                        : "text-ink-mute hover:bg-canvas-soft hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="h-2 w-2 rounded-full bg-primary" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-hairline">
                <Link
                  href={CALENDLY_BOOKING_URL}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full py-2.5 text-center justify-center"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Normal flow spacer so fixed header does not obscure page content */}
      <div className="h-16 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
