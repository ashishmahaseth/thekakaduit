/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/thekakaduit",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
