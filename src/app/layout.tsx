import type { Metadata } from "next";
import Script from "next/script";
import { ViewTransition } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

/* UI + body. Variable so we can use real 520/560 weights, not just for the demo . */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
}); 

/* Reserved for product surfaces: ticket ids, repro steps, log lines. */
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesupportgenius.com"),
  title: "Shopify App Support That Lets Your Team Keep Building | Support Genius",
  description:
    "Shopify-aware support for founder-led app teams. We document your product, run the ticket lifecycle, and send engineering structured issues.",
  applicationName: "Support Genius",
  category: "Shopify app support",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Support Genius",
    title: "Shopify App Support That Lets Your Team Keep Building",
    description:
      "Shopify-aware support for founder-led app teams, from merchant conversations to engineering-ready escalations.",
    images: [{ url: "/logo-full.png", alt: "Support Genius" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify App Support That Lets Your Team Keep Building",
    description:
      "Shopify-aware support for founder-led app teams, from merchant conversations to engineering-ready escalations.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased text-ink bg-canvas min-h-screen flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F1Y1E11D3R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F1Y1E11D3R');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Support Genius",
              url: "https://thesupportgenius.com",
              logo: "https://thesupportgenius.com/logo-full.png",
              email: "support@thesupportgenius.com",
              description:
                "Shopify app support for founder-led app teams, including merchant support, onboarding playbooks, and technical triage.",
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
        >
          Skip to content
        </a>
        <Header />
        <ViewTransition>
          <div id="main" className="flex-1 w-full">
            {children}
          </div>
        </ViewTransition>
        <Footer />
      </body>
    </html>
  );
}
