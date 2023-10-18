/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.redditstatic.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.redditstatic.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
//    async redirects() {
//       return [
//         {
//           source: "/",
//           destination: "/",
//           permanent: true,
//         },
//       ];
//     },
