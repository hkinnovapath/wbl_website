"use client";
import React, { useState } from "react";
import Layout from "../../components/Common/Layout";
// Components for different sections
import ClassComp from "../../components/Recording/ClassComp";
import SearchComp from "../../components/Recording/SearchComp";
import SessionComp from "../../components/Recording/SessionComp";

type ComponentType = "class" | "search" | "session"; // Define a union type for valid component types

export default function Recordings() {
  // State to manage active component
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("class"); // Specify the type of activeComponent

  // Function to set active component
  const handleButtonClick = (component: ComponentType) => {
    // Specify the type of the component parameter
    setActiveComponent(component);
  };

  // Render component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "class":
        return <ClassComp />;
      case "search":
        return <SearchComp />;
      case "session":
        return <SessionComp />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Recording
            <span className="text-lg sm:text-2xl font-light">(Classes)</span>
          </h1>

         <div className="hidden sm:block">
         <Layout currentPage="Recordings" />
         </div>
        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="mb-8 flex flex-col sm:flex-row justify-between">
          {/* Left side */}
          <div className="mt-10 flex sm:w-1/3 justify-center">
            <div className="flex flex-col w-60">
              <button
                className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleButtonClick("class")}
              >
                Class
              </button>
              <button
                className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleButtonClick("search")}
              >
                Search
              </button>
              <button
                className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleButtonClick("session")}
              >
                Session
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="mt-10 sm:ml-20 flex-grow space-y-4">
            {renderComponent()}
          </div>
        </section>
      </main>
    </div>
  );
}

// "use client";
// import React, { useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Layout from "../../components/Common/Layout";

// import ClassComp from "../../components/Recording/ClassComp";
// import SearchComp from "../../components/Recording/SearchComp";
// import SessionComp from "../../components/Recording/SessionComp";
// import { isAuthenticated } from "../../utils/auth"; // Import the auth check

// type ComponentType = "class" | "search" | "session"; // Define a union type for valid component types

// export default function Recordings() {
//   const router = useRouter(); // Initialize router
//   const pathname = usePathname(); // Get the current path
//   const [activeComponent, setActiveComponent] =
//     React.useState<ComponentType>("class"); // Specify the type of activeComponent
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState<string | null>(null);

//   useEffect(() => {
//     // Check if the user is authenticated
//     if (!isAuthenticated()) {
//       // If not authenticated, redirect to login page
//       router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
//     } else {
//       setLoading(false); // Mark loading as complete
//     }
//   }, [router, pathname]);

//   const handleButtonClick = (component: ComponentType) => {
//     setActiveComponent(component);
//   };

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "class":
//         return <ClassComp />;
//       case "search":
//         return <SearchComp />;
//       case "session":
//         return <SessionComp />;
//       default:
//         return null;
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>; // You can customize loading indicator
//   }

//   return (
//     // <Auth>
//     <div>
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
//           <h1 className="text-2xl font-bold sm:text-4xl">
//             Recordings
//             <span className="text-lg font-light sm:text-2xl">(Classes)</span>
//           </h1>
//           <div className="hidden sm:block">
//             <Layout currentPage="Recordings" />
//           </div>
//         </nav>
//         <section className="mb-8 flex flex-col justify-between sm:flex-row">
//           <div className="mt-10 flex justify-center sm:w-1/3">
//             <div className="flex w-60 flex-col">
//               <button
//                 className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
//                 onClick={() => handleButtonClick("class")}
//               >
//                 Class
//               </button>
//               <button
//                 className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
//                 onClick={() => handleButtonClick("search")}
//               >
//                 Search
//               </button>
//               <button
//                 className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
//                 onClick={() => handleButtonClick("session")}
//               >
//                 Session
//               </button>
//             </div>
//           </div>
//           <div className="mt-10 flex-grow space-y-4 sm:ml-20">
//             {renderComponent()}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



// "use client";
// import React, { useState ,useEffect} from "react";
// import Layout from "../../components/Common/Layout";
// // Components for different sections
// import ClassComp from "../../components/Recording/ClassComp";
// import SearchComp from "../../components/Recording/SearchComp";
// import SessionComp from "../../components/Recording/SessionComp";

// type ComponentType = "class" | "search" | "session"; // Define a union type for valid component types

// export default function Recordings() {

//   const [authenticated, setAuthenticated] = useState(false);  // State to track authentication status
//   const [loading, setLoading] = useState(true);  // State to manage loading state while checking auth

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const token = localStorage.getItem("access_token");

//       if (token) {
//         try {
//           const response = await fetch("http://localhost:8000/get_current_user", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           if (response.ok) {
//             setAuthenticated(true);
//           } else {
//             // Handle unauthorized access
//             setAuthenticated(false);
//           }
//         } catch (error) {
//           console.error("Error checking authentication:", error);
//           setAuthenticated(false);
//         }
//       } else {
//         setAuthenticated(false);
//       }

//       setLoading(false);
//     };

//     checkAuthentication();
//   }, []);

//   // State to manage active component
//   const [activeComponent, setActiveComponent] =
//     useState<ComponentType>("class"); // Specify the type of activeComponent

//   // Function to set active component
//   const handleButtonClick = (component: ComponentType) => {
//     // Specify the type of the component parameter
//     setActiveComponent(component);
//   };

//   // Render component based on activeComponent state
//   const renderComponent = () => {

//     if (!authenticated) {
//       return <p>You are not authorized to view this page.</p>;  // Example message for unauthorized access
//     }

//     switch (activeComponent) {
//       case "class":
//         return <ClassComp />;
//       case "search":
//         return <SearchComp />;
//       case "session":
//         return <SessionComp />;
//       default:
//         return null;
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;  // Optional: Show loading indicator while checking auth status
//   }

//   return (
//     <div>
//       {/* Main content */}
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         {/* Navbar */}
//         <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
//           <h1 className="text-2xl sm:text-4xl font-bold">
//             Recordings
//             <span className="text-lg sm:text-2xl font-light">(Classes)</span>
//           </h1>

//          <div className="hidden sm:block">
//          <Layout currentPage="Recordings" />
//          </div>
//         </nav>

//         {/* Section with buttons and dropdowns */}
//         <section className="mb-8 flex flex-col sm:flex-row justify-between">
//           {/* Left side */}
//           <div className="mt-10 flex sm:w-1/3 justify-center">
//             <div className="flex flex-col w-60">
//               <button
//                 className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleButtonClick("class")}
//               >
//                 Class
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleButtonClick("search")}
//               >
//                 Search
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleButtonClick("session")}
//               >
//                 Session
//               </button>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="mt-10 sm:ml-20 flex-grow space-y-4">
//             {renderComponent()}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
