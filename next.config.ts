import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Docker deployment: emit .next/standalone with only the traced files.
  output: "standalone",
};

export default nextConfig;
