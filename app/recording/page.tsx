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
    <div className=" ">
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Recordings
            <span className="text-2xl font-light">(Classes)</span>
          </h1>

          <Layout currentPage="Recordings" />
        </nav>

        {/* Section with buttons and dropdowns */}
        <section className="mb-8  flex justify-between">
          {/* Left side */}
          <div className="mt-10  flex h-1/2">
            <div className="flex flex-col ">
              <button
                className="mb-1 w-36 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600"
                onClick={() => handleButtonClick("class")}
              >
                Class
              </button>
              <button
                className="mb-1 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600"
                onClick={() => handleButtonClick("search")}
              >
                Search
              </button>
              <button
                className="mb-1 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 bg-blue-500 px-4 py-2 text-black font-bold hover:bg-blue-600"
                onClick={() => handleButtonClick("session")}
              >
                Session
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="mt-10  ml-20 flex-grow space-y-4 ">
            {renderComponent()}
          </div>
        </section>
      </main>
    </div>
  );
}
