// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output: "export",
//   // basePath: "/whiteboxLearning-wbl",
//   // images: {
//   //   unoptimized: true,
//   // },
//   experimental: { missingSuspenseWithCSRBailout: false, },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: "export",
   // basePath: "/whiteboxLearning-wbl",
   // images: {
   //   unoptimized: true,
   // },
   images: {
    // Enable image optimization and set allowed domains for images
    domains: ['whitebox-learning.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ,
  },
};

module.exports = nextConfig;
