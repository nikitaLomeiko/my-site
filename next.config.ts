// next.config.js

const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  distDir: process.env.NODE_ENV === "production" ? "out" : ".next",

  basePath: process.env.NODE_ENV === "production" ? "/my-site" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-site/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
