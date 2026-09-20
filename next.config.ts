import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Docker deployment: emit .next/standalone with only the traced files.
  output: "standalone",
  // The photographs are already sized and compressed at build time, and the
  // standalone runtime ships without sharp, so serve them as they are.
  images: { unoptimized: true },
};

export default nextConfig;
