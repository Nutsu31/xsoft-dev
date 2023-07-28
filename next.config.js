/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["itrum.ru"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/, // Adjust the file extensions as needed
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/", // Adjust the path as needed
          outputPath: "static/videos/", // Adjust the path as needed
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
