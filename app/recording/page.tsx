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
            Recordings
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
  