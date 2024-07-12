// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import { isAuthenticated } from "@/utils/auth";
// import Modal from "@/components/Common/Modal"; // Import the Modal component
// import Layout from "@/components/Common/Layout";
// import ResourcesTable from "@/components/Common/resourcesTable";
// import CourseNavigation from "@/components/Common/CourseNavigation";

// type ComponentType =
//   | "Presentations"
//   | "Cheatsheets"
//   | "Installations"
//   | "Miscellaneous"
//   | "Books"
//   | "Softwares";

// const buttons = [
//   { type: "Presentations", label: "Presentation" },
//   { type: "Cheatsheets", label: "Cheatsheets" },
//   { type: "Softwares", label: "Software" },
//   { type: "Installations", label: "Installation" },
//   { type: "Books", label: "Books" },
//   { type: "Miscellaneous", label: "Miscellaneous" },
// ];

// const fetchPresentationData = async (course: string, type: ComponentType) => {
//   try {
//     const response = await fetch(
//       `http://127.0.0.1:8000/materials?course=${course}&search=${type}`
//     );
//     console.log(response);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     return null;
//   }
// };

// export default function Presentation() {
//   const router = useRouter(); // Initialize router
//   const searchParams = useSearchParams();
//   const course = searchParams.get("course") || "ML"; // Replace "defaultCourse" with a suitable default value if needed

//   const [activeComponent, setActiveComponent] =
//     useState<ComponentType>("Presentations");
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       setError(null);

//       const sessionData = sessionStorage.getItem(
//         `data_${course}_${activeComponent}`
//       );
//       const sessionDataTimestamp = sessionStorage.getItem(
//         `data_${course}_${activeComponent}_timestamp`
//       );
//       const dataAge =
//         Date.now() -
//         (sessionDataTimestamp ? parseInt(sessionDataTimestamp, 10) : 0);

//       if (sessionData && dataAge < 86400000) {
//         setData(JSON.parse(sessionData));
//       } else {
//         const fetchedData = await fetchPresentationData(
//           course,
//           activeComponent
//         );
//         console.log(fetchedData);

//         if (fetchedData) {
//           setData(fetchedData);
//           sessionStorage.setItem(
//             `data_${course}_${activeComponent}`,
//             JSON.stringify(fetchedData)
//           );
//           sessionStorage.setItem(
//             `data_${course}_${activeComponent}_timestamp`,
//             Date.now().toString()
//           );
//         } else {
//           console.log(fetchedData);
//           setError("No data found");
//         }
//       }

//       setLoading(false);
//     };
//     getData();
//   }, [course, activeComponent]);

//   const handleButtonClick = (component: ComponentType) => {
//     setActiveComponent(component);
//   };

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const { valid, message } = await isAuthenticated();
//         if (!valid) {
//           setErrorMessage(message);
//           setShowModal(true); // Show modal if not valid
//         } else {
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error while checking authentication:", error);
//         setErrorMessage("An error occurred while checking authentication");
//         setShowModal(true);
//       }
//     };

//     checkAuthentication();
//   }, []); // Empty dependency array to run effect only once on mount
//   if (loading) {
//     return (
//       <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
//         <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
//           Loading&nbsp;
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
//           >
//             <circle cx="4" cy="12" r="3" fill="currentColor">
//               <animate
//                 id="svgSpinners3DotsScale0"
//                 attributeName="r"
//                 begin="0;svgSpinners3DotsScale1.end-0.2s"
//                 dur="0.6s"
//                 values="3;.2;3"
//               />
//             </circle>
//             <circle cx="12" cy="12" r="3" fill="currentColor">
//               <animate
//                 attributeName="r"
//                 begin="svgSpinners3DotsScale0.end-0.48s"
//                 dur="0.6s"
//                 values="3;.2;3"
//               />
//             </circle>
//             <circle cx="20" cy="12" r="3" fill="currentColor">
//               <animate
//                 id="svgSpinners3DotsScale1"
//                 attributeName="r"
//                 begin="svgSpinners3DotsScale0.end-0.36s"
//                 dur="0.6s"
//                 values="3;.2;3"
//               />
//             </circle>
//           </svg>
//         </div>
//       </div>
//     );
//   }

//   const handleClose = () => {
//     localStorage.removeItem("access_token");
//     sessionStorage.clear();
//     router.push("/login");
//     return setShowModal(false);
//   };
//   return (
//     <div>
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
//           <h1 className="text-2xl font-bold sm:text-4xl">
//             Course Material
//             <span className="text-lg font-light sm:text-2xl"> (PDF)</span>
//           </h1>
//           <div className="hidden sm:block">
//             <Layout currentPage="Presentations" />
//           </div>
//         </nav>
//         <CourseNavigation />
//         <section className="mb-8 flex flex-col justify-between sm:flex-row">
//           <div className="mt-10 flex justify-center sm:w-1/3">
//             <div className="flex w-60 flex-col">
//               {buttons.map((button) => (
//                 <button
//                   key={button.type}
//                   className={`mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36 ${
//                     activeComponent === button.type ? "bg-blue-500" : ""
//                   }`}
//                   onClick={() =>
//                     handleButtonClick(button.type as ComponentType)
//                   }
//                 >
//                   {button.label}
//                 </button>
//               ))}
//             </div>
//           </div>

          // <div className="mt-10 flex-grow sm:ml-20">
          //   {loading ? (
          //     <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
          //       Loading&nbsp;
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         viewBox="0 0 24 24"
          //         className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
          //       >
          //         <circle cx="4" cy="12" r="3" fill="currentColor">
          //           <animate
          //             id="svgSpinners3DotsScale0"
          //             attributeName="r"
          //             begin="0;svgSpinners3DotsScale1.end-0.2s"
          //             dur="0.6s"
          //             values="3;.2;3"
          //           />
          //         </circle>
          //         <circle cx="12" cy="12" r="3" fill="currentColor">
          //           <animate
          //             attributeName="r"
          //             begin="svgSpinners3DotsScale0.end-0.48s"
          //             dur="0.6s"
          //             values="3;.2;3"
          //           />
          //         </circle>
          //         <circle cx="20" cy="12" r="3" fill="currentColor">
          //           <animate
          //             id="svgSpinners3DotsScale1"
          //             attributeName="r"
          //             begin="svgSpinners3DotsScale0.end-0.36s"
          //             dur="0.6s"
          //             values="3;.2;3"
          //           />
          //         </circle>
          //       </svg>
          //     </div>
//             ) : error ? (
//               <p>{error}</p>
//             ) : data ? (
//               <ResourcesTable
//                 subjects={data.map((item: any) => ({
//                   id: item.id,
//                   name: item.name,
//                   pdfUrl: item.link,
//                 }))}
//                 type={activeComponent}
//               />
//             ) : (
//               <p>No data to display</p>
//             )}
//           </div>
//         </section>
//       </main>
//       {showModal && (
//         <Modal
//           title="Authentication Error"
//           message={errorMessage}
//           onClose={handleClose}
//         />
//       )}
//     </div>
//   );
// }




"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import Modal from "@/components/Common/Modal";
import Layout from "@/components/Common/Layout";
import ResourcesTable from "@/components/Common/resourcesTable";
import CourseNavigation from "@/components/Common/CourseNavigation";

type ComponentType =
  | "Presentations"
  | "Cheatsheets"
  | "Installations"
  | "Miscellaneous"
  | "Books"
  | "Softwares";

const buttons = [
  { type: "Presentations", label: "Presentation" },
  { type: "Cheatsheets", label: "Cheatsheets" },
  { type: "Softwares", label: "Software" },
  { type: "Installations", label: "Installation" },
  { type: "Books", label: "Books" },
  { type: "Miscellaneous", label: "Miscellaneous" },
];

export default function Presentation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const course = searchParams.get("course") || "ML";

  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Presentations");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        if (!valid) {
          setErrorMessage(message);
          setShowModal(true);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        setErrorMessage("An error occurred while checking authentication");
        setShowModal(true);
      }
    };

    checkAuthentication();
  }, []);

  const handleButtonClick = (component: ComponentType) => {
    setActiveComponent(component);
  };

  if (loading) {
    return (
      <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
          Loading&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
          >
            <circle cx="4" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale0"
                attributeName="r"
                begin="0;svgSpinners3DotsScale1.end-0.2s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="12" cy="12" r="3" fill="currentColor">
              <animate
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.48s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="20" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale1"
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.36s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
          </svg>
        </div>
      </div>
    );
  }

  const handleClose = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    router.push("/login");
    return setShowModal(false);
  };

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-2xl font-bold sm:text-4xl">
            Course Material
            <span className="text-lg font-light sm:text-2xl"> (PDF)</span>
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Presentations" />
          </div>
        </nav>
        <CourseNavigation />
        <section className="mb-8 flex flex-col justify-between sm:flex-row">
          <div className="mt-10 flex justify-center sm:w-1/3">
            <div className="flex w-60 flex-col">
              {buttons.map((button) => (
                <button
                  key={button.type}
                  className={`mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36 ${
                    activeComponent === button.type ? "bg-blue-500" : ""
                  }`}
                  onClick={() =>
                    handleButtonClick(button.type as ComponentType)
                  }
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 flex-grow ">
            <ResourcesTable course={course} type={activeComponent} />
          </div>
        </section>
      </main>
      {showModal && (
        <Modal
          title="Authentication Error"
          message={errorMessage}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
