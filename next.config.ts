import dotenv from 'dotenv';
import type { NextConfig } from 'next';

dotenv.config();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY, 
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY, 
  },
};

export default nextConfig;
