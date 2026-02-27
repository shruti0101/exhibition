/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: false,
  },
  reactStrictMode: true,
};

export default nextConfig;