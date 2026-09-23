/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old flat URLs → Features / Industries structure
      {
        source: "/whatsapp-crm",
        destination: "/features/whatsapp-crm",
        permanent: true,
      },
      {
        source: "/whatsapp-crm/",
        destination: "/features/whatsapp-crm",
        permanent: true,
      },
      {
        source: "/ai-crm",
        destination: "/industries/ai-crm",
        permanent: true,
      },
      {
        source: "/ai-crm/",
        destination: "/industries/ai-crm",
        permanent: true,
      },
      {
        source: "/real-estate-crm",
        destination: "/industries/real-estate-crm",
        permanent: true,
      },
      {
        source: "/real-estate-crm/",
        destination: "/industries/real-estate-crm",
        permanent: true,
      },
      // Short aliases that would otherwise 404
      {
        source: "/whatsapp",
        destination: "/features/whatsapp-crm",
        permanent: true,
      },
      {
        source: "/whatsapp/",
        destination: "/features/whatsapp-crm",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/industries/ai-crm",
        permanent: true,
      },
      {
        source: "/ai/",
        destination: "/industries/ai-crm",
        permanent: true,
      },
      {
        source: "/real-estate",
        destination: "/industries/real-estate-crm",
        permanent: true,
      },
      {
        source: "/real-estate/",
        destination: "/industries/real-estate-crm",
        permanent: true,
      },
      // Legal page aliases (Zayda-style paths)
      {
        source: "/privacy-policies",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/privacy-policies/",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/terms-conditions/",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Ensure HTML responses are explicitly indexable for crawlers/CDNs
        // that inspect X-Robots-Tag instead of (or in addition to) robots.txt.
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
