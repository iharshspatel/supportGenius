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
    "/blog/when-to-outsource-shopify-app-support",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
