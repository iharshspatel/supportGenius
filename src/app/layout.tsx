import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

/* UI + body. Variable so we can use real 520/560 weights, not just 400/500. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Display face. Heavy geometric sans — the headlines are meant to land as
   weight and shape, not as decoration. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
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
  title: "Shopify App Support That Lets Your Team Keep Building | Support Genius",
  description:
    "Shopify-aware support for founder-led app teams. We document your product, run the ticket lifecycle, and send engineering structured issues.",
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
      className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased text-ink bg-canvas min-h-screen flex flex-col">
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
