import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thesupportgenius.com";

  const staticRoutes = [
    "",
    "/services",
    "/how-it-works",
    "/pricing",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/locations",
    "/locations/united-states",
    "/locations/united-kingdom",
    "/locations/canada",
    "/locations/australia",
    "/services/shopify-app-customer-support",
    "/services/support-onboarding-playbooks",
    "/services/technical-support-triage",
    "/services/24-7-shopify-app-support",
    "/services/email-support",
    "/services/live-chat-support",
    "/services/social-media-support",
    "/services/bug-reporting-and-triage",
    "/services/helpdesk-management",
    "/blog/when-to-outsource-shopify-app-support",
    "/blog/in-house-vs-outsourced-shopify-app-support",
    "/blog/shopify-app-support-cost",
    "/blog/shopify-app-support-kpis",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
