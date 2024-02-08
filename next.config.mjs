/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.crunchbase.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cutesolution.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
