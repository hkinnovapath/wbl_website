/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: "/whiteboxLearning-wbl",
  // images: {
  //   unoptimized: true,
  // },
  experimental: { missingSuspenseWithCSRBailout: false, },
};

module.exports = nextConfig;
