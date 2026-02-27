/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
    unoptimized: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /jodit\.min\.css$/,
      use: 'null-loader',
    });

    return config;
  },
};

export default nextConfig;