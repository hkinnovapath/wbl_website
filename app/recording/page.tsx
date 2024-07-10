// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import Layout from "@/components/Common/Layout";

// export default function Course() {
//   const router = useRouter();

//   const handleNavigation = (course: string) => {
//     router.push(`/recording/recordingComp?course=${course}`);
//   };

//   return (
//     <div>
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
//           <h1 className="text-2xl sm:text-4xl font-bold">Select Course</h1>
//           <div className="hidden sm:block">
//             <Layout currentPage="Course" />
//           </div>
//         </nav>

//         <section className="mb-8 flex flex-col sm:flex-row justify-between">
//           <div className="mt-10 flex sm:w-1/3 justify-center">
//             <div className="flex flex-col w-60">
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("UI")}
//               >
//                UI Fullstack
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("ML")}
//               >
//                 Machine Learning
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("QA")}
//               >
//                 Quality Engineer
//               </button>
//             </div>
//           </div>

//           <div className="mt-10 capitalize text-4xl font-semibold items-center flex flex-grow space-y-4">
//             please select your course...
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Layout from "@/components/Common/Layout";
// import { isAuthenticated } from "@/utils/auth";

// export default function Course() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const { valid, message } = await isAuthenticated();
//         if (!valid) {
//           setErrorMessage(message);
//           setTimeout(() => {
//             router.push(`/login?redirect=${encodeURIComponent(window.location.href)}`);
//           }, 3000);
//         } else {
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error while checking authentication:', error);
//         setErrorMessage("An error occurred while checking authentication");
//         setLoading(false);
//       }
//     };

//     checkAuthentication();
//   }, []); // Empty dependency array to run effect only once on mount

//   const handleNavigation = (course) => {
//     router.push(`/recording/recordingComp?course=${course}`);
//   };

//   if (loading) {
//     return (
//       <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
//         {errorMessage || "Loading..."}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
//           <h1 className="text-2xl sm:text-4xl font-bold">Select Course</h1>
//           <div className="hidden sm:block">
//             <Layout currentPage="Course" />
//           </div>
//         </nav>
//         <section className="mb-8 flex flex-col sm:flex-row justify-between">
//           <div className="mt-10 flex sm:w-1/3 justify-center">
//             <div className="flex flex-col w-60">
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("UI")}
//               >
//                 UI Fullstack
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("ML")}
//               >
//                 Machine Learning
//               </button>
//               <button
//                 className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
//                 onClick={() => handleNavigation("QA")}
//               >
//                 Quality Engineer
//               </button>
//             </div>
//           </div>
//           <div className="mt-10 capitalize text-4xl font-semibold items-center flex flex-grow space-y-4">
//             Please select your course...
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Common/Layout";
import { isAuthenticated } from "@/utils/auth";
import Modal from "@/components/Common/Modal"; // Import the Modal component

export default function Course() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    console.log('UE called');
    
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        console.log(valid);
        
        if (!valid) {
          console.log(!valid);
          setErrorMessage(message);
          // setShowModal(true); // Show modal if not valid
          // setTimeout(() => {
          //   // console.log((`/login?redirect=${encodeURIComponent(window.location.href)}`));
              
          //   router.push(`/login?redirect=${encodeURIComponent(window.location.href)}`);
          // }, 3000);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error while checking authentication:', error);
        setErrorMessage("An error occurred while checking authentication");
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array to run effect only once on mount

  const handleNavigation = (course) => {
    router.push(`/recording/recordingComp?course=${course}`);
  };

  if (loading) {
    return (
      <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {errorMessage || "Loading..."}
      </div>
    );
  }

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">Select Course</h1>
          <div className="hidden sm:block">
            <Layout currentPage="Course" />
          </div>
        </nav>
        <section className="mb-8 flex flex-col sm:flex-row justify-between">
          <div className="mt-10 flex sm:w-1/3 justify-center">
            <div className="flex flex-col w-60">
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("UI")}
              >
                UI Fullstack
              </button>
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("ML")}
              >
                Machine Learning
              </button>
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("QA")}
              >
                Quality Engineer
              </button>
            </div>
          </div>
          <div className="mt-10 capitalize text-4xl font-semibold items-center flex flex-grow space-y-4">
            Please select your course...
          </div>
        </section>
      </main>
      {showModal && (
        <Modal title="Authentication Error" message={errorMessage} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
