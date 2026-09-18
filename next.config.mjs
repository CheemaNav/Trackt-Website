/** @type {import('next').NextConfig} */
const nextConfig = {
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
