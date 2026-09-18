import type { NextConfig } from "next";

// When deployed to GitHub Pages as a project site (https://<user>.github.io/<repo>),
// all asset/page URLs need to be prefixed with the repo name. Set REPO_NAME to your
// repository name via the GITHUB_REPOSITORY env var (automatically set in GitHub Actions)
// or leave empty if this will be hosted at the root of a <user>.github.io repo.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions && repo && !repo.endsWith(".github.io") ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
