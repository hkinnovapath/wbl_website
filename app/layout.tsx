"use client";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { AuthProvider } from "@/utils/AuthContext";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider from next-auth/react


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Whitebox-Learning</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://whitebox-learning.com/" />
      </head>
      <body className="dark:bg-black">
      <SessionProvider>
         <AuthProvider>
           {" "}
           {/* Wrap the entire application with AuthProvider */}
           <Providers>
             <Header />
             {children}
             <Footer />
             <ScrollToTop />
           </Providers>
         </AuthProvider>
         </SessionProvider>
      </body>
    </html>
  );
}





// // "use client";
// // import Footer from "@/components/Footer";
// // import Header from "@/components/Header";
// // import ScrollToTop from "@/components/ScrollToTop";
// // import { AuthProvider } from "@/utils/AuthContext"; // Import the AuthProvider
// // import { SessionProvider } from "next-auth/react"; // Import SessionProvider from next-auth/react
// // import "node_modules/react-modal-video/css/modal-video.css";
// // import "../styles/index.css";
// // import { Providers } from "./providers";

// // original 


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       <head>
//         <title>Whitebox-Learning</title>
//         <meta content="width=device-width, initial-scale=1" name="viewport" />
//         <meta
//           name="description"
//           content="A comprehensive learning ecosystem tailored for developers, machine learning enthusiasts, and data engineers."
//         />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="canonical" href="https://whitebox-learning.com/" />
//       </head>
//       <body className="dark:bg-black">
//         <AuthProvider>
//           {" "}
//           {/* Wrap the entire application with AuthProvider */}
//           <Providers>
//             <Header />
//             {children}
//             <Footer />
//             <ScrollToTop />
//           </Providers>
         
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


