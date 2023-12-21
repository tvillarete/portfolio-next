/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/music",
        destination: "https://apple-music-next.vercel.app/music",
      },
      {
        source: "/music/:path*",
        destination: "https://apple-music-next.vercel.app/music/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
