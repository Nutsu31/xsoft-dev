/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["itrum.ru"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude 'fs' module from the client-side bundle
      config.resolve.fallback.fs = false;
    }

    // Additional Webpack configuration for handling video files
    config.module.rules.push({
      test: /\.(mov|mp4)$/, 
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/_next/static/videos/", 
          outputPath: "static/videos/", 
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
