import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/support-onboarding-playbooks",
        destination: "/services/support-onboarding-playbooks",
        permanent: true,
      },
      {
        source: "/technical-support-triage",
        destination: "/services/technical-support-triage",
        permanent: true,
      },
      {
        source: "/shopify-app-customer-support",
        destination: "/services/shopify-app-customer-support",
        permanent: true,
      },
      {
        source: "/services/knowledge-base-management",
        destination: "/services#knowledge-base-management",
        permanent: true,
      },
      {
        source: "/knowledge-base-management",
        destination: "/services#knowledge-base-management",
        permanent: true,
      },
      {
        source: "/services/support-operations-reporting",
        destination: "/services#support-operations-reporting",
        permanent: true,
      },
      {
        source: "/support-operations-reporting",
        destination: "/services#support-operations-reporting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
