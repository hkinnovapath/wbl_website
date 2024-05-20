"use client";

import React, { useState } from "react";
// import Breadcrumb from "../../../components/Breadcrumb";
import Layout from "../../components/Common/Layout";
// Components for different sections
import ClassComp from "./ClassComp";
import SearchComp from "./SearchComp";
import SessionComp from "./SessionComp";

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
    <div className=" ">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Navbar */}
        <nav className="flex items-center justify-between mt-24">
          <h1 className="text-4xl font-bold">
            Recordings
            <span className="text-2xl font-light">(Classes)</span>
          </h1>
          {/* <Breadcrumb /> */}
          <Layout currentPage="Recordings">
      {/* Page content */}
    </Layout>

        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="flex  justify-between mb-8">
          {/* Left side */}
          <div className="flex  mt-10 h-1/2">
            <div className="flex flex-col ">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white w-36 px-4 py-2 rounded-md mb-1"
                onClick={() => handleButtonClick("class")}
              >
                Class
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1"
                onClick={() => handleButtonClick("search")}
              >
                Search
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1"
                onClick={() => handleButtonClick("session")}
              >
                Session
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-grow  mt-10 space-y-4 ml-20 ">{renderComponent()}</div>
        </section>
      </main>
    </div>
  );
}

