import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Pin Turbopack to this app so it doesn't pick ~/package-lock.json as the workspace root
const appDir = path.dirname(fileURLToPath(import.meta.url));

const config: NextConfig = {
  turbopack: {
    root: appDir,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.makruzz.com",
      },
      {
        protocol: "https",
        hostname: "greenoceanseaways.com",
      },
      {
        protocol: "https",
        hostname: "nautica.com",
      },
    ],
  },
};

export default config;
