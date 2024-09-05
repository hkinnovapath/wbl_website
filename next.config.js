/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["whitebox-learning.com"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ,
  },
  async rewrites() {
    return [
      {
        //for wildcard routing use below but it will display nothing for no pages 
        source: '/:path*',
        destination: 'http://localhost:3001/:path*', // Update with your React app's port    
      },
    ];
  },
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["whitebox-learning.com"],
//   },
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
//   reactStrictMode: false,
//   env: {
//     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
//   },
//   async rewrites() {
//     return [
//       {
//         //for wildcard routing use below but it will display nothing for no pages 
//         source: '/:path*',
//         destination: 'http://localhost:3001/:path*', // Update with your React app's port
       
         
//     },
//     ];
//   },
// };

module.exports = nextConfig;

