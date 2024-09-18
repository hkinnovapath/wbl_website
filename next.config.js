// import path from "path";

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   images: {
// //     domains: ["whitebox-learning.com"],
// //   },
// //   experimental: {
// //     missingSuspenseWithCSRBailout: false,
// //   },
// //   reactStrictMode: false,
// //   env: {
// //     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ,
// //   },
// // };

// // module.exports = nextConfig;
// const path = require('path');

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
//   webpack: (config, { isServer }) => {
//     config.module.rules.push({
//       test: /\.hbs$/,
//       loader: "handlebars-loader",
//       options: {
//         // Specify the directory for partials
//         partialDirs: [
//           path.resolve(__dirname, '/public/templates/partials')
//         ],
//       },
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

// const path = require('path');

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
//     RESUME_PUBLIC_API_URL: process.env.RESUME_PUBLIC_API_URL,
//   },
//   webpack: (config, { isServer }) => {
//     config.module.rules.push({
//       test: /\.hbs$/, // Handle .hbs files
//       loader: "handlebars-loader", // Use handlebars-loader
//       options: {
//         partialDirs: [
//           path.join(__dirname, 'public/templates/partials'), // Specify the directory for partials
//         ],
//       },
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;



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
//     RESUME_PUBLIC_API_URL: process.env.RESUME_PUBLIC_API_URL,
//   },
//   rewrites: async () => [
//     {
//       source: '/resume/:id',
//       destination: `${process.env.RESUME_PUBLIC_API_URL}/:id`, // Proxy request to your backend API
//     },
//   ],
//   webpack: (config, { isServer }) => {
//     config.module.rules.push({
//       test: /\.hbs$/, // Handle .hbs files
//       loader: "handlebars-loader", // Use handlebars-loader
//       options: {
//         partialDirs: [
//           // Specify the directory for partials relative to the project root
//           './public/templates/partials', // Assuming partials are in public/templates/partials
//         ],
//       },
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;


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
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    RESUME_PUBLIC_API_URL: process.env.RESUME_PUBLIC_API_URL,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.hbs$/, // Handle .hbs files
      loader: "handlebars-loader", // Use handlebars-loader
      options: {
        partialDirs: [
          // Specify the directory for partials relative to the project root
          './public/templates/partials', // Assuming partials are in public/templates/partials
        ],
      },
    });

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       //for wildcard routing use below but it will display nothing for no pages 
  //       source: '/:path*',
  //       destination: 'http://localhost:3001/:path*', // Update with your React app's port    
  //     },
  //   ];
  // },
};


module.exports = nextConfig;

