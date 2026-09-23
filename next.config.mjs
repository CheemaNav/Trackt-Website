/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/whatsapp-crm",
        destination: "/features/whatsapp-crm",
        permanent: true,
      },
      {
        source: "/ai-crm",
        destination: "/industries/ai-crm",
        permanent: true,
      },
      {
        source: "/real-estate-crm",
        destination: "/industries/real-estate-crm",
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
