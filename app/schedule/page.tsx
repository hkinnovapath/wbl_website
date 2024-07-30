"use client";
import React, { useState } from "react";
import Layout from "@/components/Common/Layout";
// Components for different sections
import Calendar from "@/components/Calendar";
import CourseContent from "@/components/CourseContent";

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
    <div className="">
      {/* Main content */}
      {/* <main className=" mx-auto max-w-6xl px-4  sm:px-6 lg:px-8"> */}
      <main className="container">
        {/* Navbar */}
        <nav className="sm:mt-28 mt-20 justify-center sm:mb-10 flex h-28 flex-col items-start sm:justify-between sm:flex-row sm:items-center">
          <h1 className=" text-center  text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl ">
            Schedule
          </h1>
          <div className="hidden  sm:block">
            <Layout currentPage="Schedule" />
          </div>
        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="mb-8 flex flex-col sm:flex-row sm:justify-between">
          {/* Left side */}
          <div className="flex flex-row justify-center gap-5 sm:w-1/6  sm:flex-col  sm:justify-start sm:gap-0">
            <button
              className="mb-2 w-2/5 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 text-sm font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-full sm:text-base lg:text-lg"
              onClick={() => handleButtonClick("calendar")}
            >
              Calendar
            </button>
            <button
              className="mb-2  w-2/5 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-3 py-2 text-sm font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-full sm:text-base lg:text-lg"
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
