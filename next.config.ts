/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "*",
      },
    ],
  },
  trailingSlash: true,
};
