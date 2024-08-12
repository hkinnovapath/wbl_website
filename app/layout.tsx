// "use client";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";
// import "node_modules/react-modal-video/css/modal-video.css";
// import "../styles/index.css";
// import { Providers } from "./providers";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       {/* <head /> will contain the components returned by the nearest parent
//         head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     
//       <head /> */}

//       <body className="dark:bg-black">
//         <Providers>
//           <Header />
//             {children}
//           <Footer />
//           <ScrollToTop />
//         </Providers>
//       </body>
//     </html>
//   );
// }




"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/utils/AuthContext"; // Import the AuthProvider
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark:bg-black">
        <AuthProvider> {/* Wrap the entire application with AuthProvider */}
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
