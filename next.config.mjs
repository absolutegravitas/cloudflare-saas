import withBundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
initOpenNextCloudflareForDev();

// TODO cache-control headers don't work for static files
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false, // set to false to avoid issues with `next dev` and `next build` MOTHER FUCKING CUNT FUCK OTHERWISE WILL CAUSE AN ERROR ON EVERY GODDAMN FUCKING URL STRING THAT IS A URL UNLESS IT IS SAFELY TYPED --- FUCK THAT
  },
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINTER === "true",
  },
  typescript: {
    ignoreBuildErrors: process.env.SKIP_LINTER === "true",
  },
};

export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer()(nextConfig)
  : nextConfig;
