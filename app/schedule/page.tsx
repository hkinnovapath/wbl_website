// "use client";
// import React, { useState } from "react";
// import Layout from "../../components/Common/Layout";
// // Components for different sections
// import Calendar from "@/components/Calendar/CalendarNew";
// import CourseContent from "@/components/courseContent/CourseContent";

// type ComponentType = "calendar" | "courseContent"; // Define a union type for valid component types

// export default function Recordings() {
//   // State to manage active component
//   const [activeComponent, setActiveComponent] =
//     useState<ComponentType>("calendar"); // Specify the type of activeComponent

//   // Function to set active component
//   const handleButtonClick = (component: ComponentType) => {
//     // Specify the type of the component parameter
//     setActiveComponent(component);
//   };

//   // Render component based on activeComponent state
//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "calendar":
//         return <Calendar />;
//       case "courseContent":
//         return <CourseContent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className=" ">
//       {/* Main content */}
//       <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
//         {/* Navbar */}
        // <nav className="mt-16 flex items-center justify-between">
        //   <h1 className="text-4xl font-bold ">Schedule</h1>

        //   <Layout currentPage="schedule" />
        // </nav>

        // {/* Section with buttons and dropdowns */}
        // <section className="mb-8  flex justify-between">
        //   {/* Left side */}
        //   <div className="mt-10  flex h-1/2 flex-col">
        //     <button
        //       className="mb-1 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300"
        //       onClick={() => handleButtonClick("calendar")}
        //     >
        //       Calendar
        //     </button>
        //     <button
        //       className="mb-1 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300"
        //       onClick={() => handleButtonClick("courseContent")}
        //     >
        //       Course Content
        //     </button>
        //   </div>
//           {/* </div> */}

//           {/* Right side */}
//           <div className="mt-6 flex-grow space-y-4 ">{renderComponent()}</div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Layout from "../../components/Common/Layout";
// Components for different sections
import Calendar from "@/components/Calendar/CalendarNew";
import CourseContent from "@/components/courseContent/CourseContent";

type ComponentType = "calendar" | "courseContent"; // Define a union type for valid component types

export default function Schedule() {
  // State to manage active component
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("calendar"); // Specify the type of activeComponent

  // Function to set active component
  const handleButtonClick = (component: ComponentType) => {
    // Specify the type of the component parameter
    setActiveComponent(component);
  };

  // Render component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "calendar":
        return <Calendar />;
      case "courseContent":
        return <CourseContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4  sm:px-6 lg:px-8">
        {/* Navbar */}

        <nav className="mt-16 flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <h1 className="pt-10  sm:text-start text-center  w-full text-2xl font-bold sm:pt-0 sm:text-3xl lg:text-4xl ">Schedule</h1>
        {/* <nav className="mt-16 flex-none sm:flex sm:items-center sm:justify-between  "> */}
          {/* <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Schedule</h1> */}
          <div className="hidden sm:block">
          <Layout currentPage="schedule" />
          </div>
        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="mb-8 flex flex-col sm:flex-row sm:justify-between">
          {/* Left side */}
          <div className="mt-10 flex sm:justify-start justify-center sm:gap-0 gap-5  flex-row  sm:flex-col sm:w-1/6">
            <button
              className="mb-2 sm:w-full w-2/5 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 text-sm font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:text-base lg:text-lg"
              onClick={() => handleButtonClick("calendar")}
            >
              Calendar
            </button>
            <button
              className="mb-2  sm:w-full w-2/5 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 text-sm font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:text-base lg:text-lg"
              onClick={() => handleButtonClick("courseContent")}
            >
              Course Content
            </button>
          </div>

          {/* Right side */}
          <div className="mt-6 flex-grow space-y-4 sm:mt-0 sm:ml-6">
            {renderComponent()}
          </div>
        </section>
      </main>
    </div>
  );
}

