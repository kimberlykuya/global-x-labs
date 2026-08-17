/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = "global-x-labs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repoName}` : "");

module.exports = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
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
