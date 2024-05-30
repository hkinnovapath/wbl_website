"use client";
import React, { useState } from "react";
import Layout from "../../components/Common/Layout";
// Components for different sections
import Calendar from "@/components/Calendar/CalendarNew";
import CourseContent from "@/components/courseContent/CourseContent";

type ComponentType = "calendar" | "courseContent"; // Define a union type for valid component types

export default function Recordings() {
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
    <div className=" ">
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex items-center justify-between">
          <h1 className="text-4xl font-bold ">Schedule</h1>

          <Layout currentPage="schedule" />
        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="mb-8  flex justify-between">
          {/* Left side */}
          <div className="mt-10  flex h-1/2 flex-col">
            {/* <div className="flex  "> */}
            <button
              className="mb-1 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300"
              onClick={() => handleButtonClick("calendar")}
            >
              Calendar
            </button>
            <button
              className="mb-1 rounded-md bg-blue-500 bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-blue-600 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300"
              onClick={() => handleButtonClick("courseContent")}
            >
              Course Content
            </button>
          </div>
          {/* </div> */}

          {/* Right side */}
          <div className="mt-6 flex-grow space-y-4 ">{renderComponent()}</div>
        </section>
      </main>
    </div>
  );
}
