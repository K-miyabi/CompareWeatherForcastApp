import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLEC_LIFF_ID: process.env.NEXT_PUBLEC_LIFF_ID,
    LIFF_URL: process.env.LIFF_URL,
    LIFF_CHANNEL_ID: process.env.LIFF_CHANNEL_ID,
  },
};

export default nextConfig;
