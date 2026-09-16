import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://thesupportgenius.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/404"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
