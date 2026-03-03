import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next.js resolves workspace root to this repo instead of parent directories.
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    qualities: [60, 70, 75, 90, 100],
  },
};

export default nextConfig;
