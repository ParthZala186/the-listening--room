import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.claimsecure.com' },
      { protocol: 'https', hostname: 'www.bluecross.ca' },
      { protocol: 'https', hostname: 'www.canadalife.com' },
      { protocol: 'https', hostname: 'www.manulife.ca' },
      { protocol: 'https', hostname: 'www.sunlife.ca' },
      { protocol: 'https', hostname: 'home.firstcanadian.ca' },
    ],
  },
};

export default nextConfig;
