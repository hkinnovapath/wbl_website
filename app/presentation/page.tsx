// "use client";
// import React, { useState } from "react";
// import Layout from "../../components/Common/Layout";
// // Components for different sections
// import Presentation from "../../components/Presentation/Presentation";
// import Cheatsheets from "../../components/Presentation/Cheatsheets";
// import Installations from "../../components/Presentation/Installations";
// import Miscellaneous from "../../components/Presentation/Miscellaneous";
// import Software from "../../components/Presentation/Software";
// import Books from "../../components/Presentation/Books";
// type ComponentType =
//   | "presentation"
//   | "cheatsheets"
//   | "installation"
//   | "miscellaneous"
//   | "books"
//   | "software";
// export default function Recordings() {
//   // State to manage active component
//   const [activeComponent, setActiveComponent] =
//     useState<ComponentType>("presentation"); // Specify the type of activeComponent

//   // Function to set active component
//   const handleButtonClick = (component: ComponentType) => {
//     setActiveComponent(component);
//   };

//   // Render component based on activeComponent state
//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "presentation":
//         return <Presentation />;
//       case "cheatsheets":
//         return <Cheatsheets />;
//       case "books":
//         return <Books />;
//       case "software":
//         return <Software />;
//       case "installation":
//         return <Installations />;
//       case "miscellaneous":
//         return <Miscellaneous />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className=" ">
//       {/* Main content */}
//       <main className=" mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         {/* Navbar */}
//         <nav className="mt-16 flex items-center justify-between ">
//           <h1 className="text-4xl font-bold">
//             Course Material
//             <span className="text-2xl font-light"> (PDF)</span>
//           </h1>
//           <Layout currentPage="Presentation"/>
//         </nav>

//         <section className="mb-8   flex justify-between">
//           {/* Left side */}
//           <div className="mt-10  flex h-1/2">
//             <div className="flex flex-col ">
//               <button
//                 className={`mb-1 w-36 rounded-md    bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300  bg-blue-500 px-4 py-2 text-black font-bold   hover:bg-blue-600 ${
//                   activeComponent === "presentation" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("presentation")}
//               >
//                 Presentation
//               </button>
//               <button
//                 className={`mb-1 rounded-md    bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600 ${
//                   activeComponent === "cheatsheets" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("cheatsheets")}
//               >
//                 Cheatsheets
//               </button>
//               <button
//                 className={`mb-1 rounded-md   bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600 ${
//                   activeComponent === "software" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("software")}
//               >
//                 Software
//               </button>

//               <button
//                 className={`mb-1 rounded-md   bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600 ${
//                   activeComponent === "installation" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("installation")}
//               >
//                 Installation
//               </button>
//               <button
//                 className={`mb-1 rounded-md   bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600 ${
//                   activeComponent === "books" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("books")}
//               >
//                 Books
//               </button>
//               <button
//                 className={`mb-1 rounded-md   bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600 ${
//                   activeComponent === "miscellaneous" ? "bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("miscellaneous")}
//               >
//                 Miscellaneous
//               </button>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="ml-20  flex-grow ">{renderComponent()}</div>
//         </section>
//       </main>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Layout from "../../components/Common/Layout";
// // Components for different sections
// import Presentation from "../../components/Presentation/Presentation";
// import Cheatsheets from "../../components/Presentation/Cheatsheets";
// import Installations from "../../components/Presentation/Installations";
// import Miscellaneous from "../../components/Presentation/Miscellaneous";
// import Software from "../../components/Presentation/Software";
// import Books from "../../components/Presentation/Books";

// type ComponentType =
//   | "presentation"
//   | "cheatsheets"
//   | "installation"
//   | "miscellaneous"
//   | "books"
//   | "software";

// export default function Recordings() {
//   // State to manage active component
//   const [activeComponent, setActiveComponent] =
//     useState<ComponentType>("presentation"); // Specify the type of activeComponent

//   // Function to set active component
//   const handleButtonClick = (component: ComponentType) => {
//     setActiveComponent(component);
//   };

//   // Render component based on activeComponent state
//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "presentation":
//         return <Presentation />;
//       case "cheatsheets":
//         return <Cheatsheets />;
//       case "books":
//         return <Books />;
//       case "software":
//         return <Software />;
//       case "installation":
//         return <Installations />;
//       case "miscellaneous":
//         return <Miscellaneous />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {/* Main content */}
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         {/* Navbar */}
//         <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
//           <h1 className="text-2xl sm:text-4xl font-bold">
//             Course Material
//             <span className="text-lg sm:text-2xl font-light"> (PDF)</span>
//           </h1>
//           <div className="hidden sm:block">
//         <Layout currentPage="Recordings" />
//         </div>
//         </nav>

//         <section className="mb-8 flex flex-col sm:flex-row justify-between">
//           {/* Left side */}
//           <div className="mt-10 flex sm:w-1/3 justify-center">
//             <div className="flex flex-col w-60">
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "presentation" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("presentation")}
//               >
//                 Presentation
//               </button>
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "cheatsheets" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("cheatsheets")}
//               >
//                 Cheatsheets
//               </button>
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "software" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("software")}
//               >
//                 Software
//               </button>
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "installation" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("installation")}
//               >
//                 Installation
//               </button>
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "books" ? " bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("books")}
//               >
//                 Books
//               </button>
//               <button
//                 className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                   activeComponent === "miscellaneous" ? "bg-blue-500" : ""
//                 }`}
//                 onClick={() => handleButtonClick("miscellaneous")}
//               >
//                 Miscellaneous
//               </button>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="mt-10 sm:ml-20 flex-grow">
// {renderComponent()}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

//   "use client";
// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Common/Layout";

// type ComponentType =
//   | "Presentations"
//   | "cheatsheets"
//   | "installation"
//   | "miscellaneous"
//   | "books"
//   | "software";

// const buttons = [
//   { type: "Presentations", label: "Presentation" },
//   { type: "cheatsheets", label: "Cheatsheets" },
//   { type: "software", label: "Software" },
//   { type: "installation", label: "Installation" },
//   { type: "books", label: "Books" },
//   { type: "miscellaneous", label: "Miscellaneous" },
// ];

// const fetchPresentationData = async (type: ComponentType) => {
//   try {
//     // const response = await fetch(`/api/presentation?search=${type}`);
//     const response = await fetch(`http://127.0.0.1:8000/presentation?search=${type}`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data.presentation;
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     return null;
//   }
// };

// export default function Recordings() {
//   const [activeComponent, setActiveComponent] = useState<ComponentType>("Presentations");
//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       setLoading(true);
//       setError(null);
//       const fetchedData = await fetchPresentationData(activeComponent);
//       if (fetchedData) {
//         setData(fetchedData);
//       } else {
//         setError("No data found");
//       }
//       setLoading(false);
//     };
//     getData();
//   }, [activeComponent]);

//   const handleButtonClick = (component: ComponentType) => {
//     setActiveComponent(component);
//   };

//   return (
//     <Layout>
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
//           <h1 className="text-2xl sm:text-4xl font-bold">
//             Course Material
//             <span className="text-lg sm:text-2xl font-light"> (PDF)</span>
//           </h1>
//           <div className="hidden sm:block">
//             <Layout currentPage="Recordings" />
//           </div>
//         </nav>

//         <section className="mb-8 flex flex-col sm:flex-row justify-between">
//           <div className="mt-10 flex sm:w-1/3 justify-center">
//             <div className="flex flex-col w-60">
//               {buttons.map((button) => (
//                 <button
//                   key={button.type}
//                   className={`mb-1 w-full sm:w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold ${
//                     activeComponent === button.type ? "bg-blue-500" : ""
//                   }`}
//                   onClick={() => handleButtonClick(button.type as ComponentType)}
//                 >
//                   {button.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-10 sm:ml-20 flex-grow">
//             {loading ? (
//               <p>Loading...</p>
//             ) : error ? (
//               <p>{error}</p>
//             ) : data ? (
//               <div>
//                 {data.map((item: any, index: number) => (
//                   <div key={index} className="mb-4">
//                     <h3 className="text-xl font-bold">{item.name}</h3>
//                     {/* <p>{item.description}</p> */}
//                     <a href={item.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
//                       View PDF
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No data to display</p>
//             )}
//           </div>
//         </section>
//       </main>
//     </Layout>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Common/Layout";
import ResourcesTable from "../../components/Common/resourcesTable";

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

const fetchPresentationData = async (type: ComponentType) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/presentation?search=${type}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.presentation;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export default function Recordings() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Presentations");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      const fetchedData = await fetchPresentationData(activeComponent);
      if (fetchedData) {
        setData(fetchedData);
      } else {
        setError("No data found");
      }
      setLoading(false);
    };
    getData();
  }, [activeComponent]);

  const handleButtonClick = (component: ComponentType) => {
    setActiveComponent(component);
  };

  return (
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

      <section className="mb-8 flex flex-col justify-between sm:flex-row">
        <div className="mt-10 flex justify-center sm:w-1/3">
          <div className="flex w-60 flex-col">
            {buttons.map((button) => (
              <button
                key={button.type}
                className={`mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36 ${
                  activeComponent === button.type ? "bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick(button.type as ComponentType)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex-grow sm:ml-20">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : data ? (
            <ResourcesTable
              subjects={data.map((item: any) => ({
                id: item.id,
                name: item.name,
                pdfUrl: item.link,
              }))}
              type={activeComponent}
            />
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </section>
    </main>
  );
}
