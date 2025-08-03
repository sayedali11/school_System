// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
    unoptimized: true, /// ده بيعطّل نظام تحسين الصور في Next.js اللي بياخد وقت وموارد.
  },
  // transpilePackages: ["@clerk/nextjs"],
  transpilePackages: ["@clerk/nextjs"],

  // تحسين أداء البناء
  swcMinify: true,

  // إيقاف الصور البعيدة إذا لا تحتاجها
  // images: {
  //   unoptimized: true,
  // },

  // تقليل حجم sourcemaps
  productionBrowserSourceMaps: false,
};

export default nextConfig;
