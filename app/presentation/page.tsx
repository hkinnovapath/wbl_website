"use client";

import React, { useState } from "react";
// import Breadcrumb from "../../../components/Breadcrumb";
import Layout from "../../components/Common/Layout";
// Components for different sections
import Presentation from "./Presentation";
import Cheatsheets from "./Cheatsheets";
// import Code from "./Code";
// import Diagrams from "./Diagrams";
import Installations from "./Installations";
import Miscellaneous from "./Miscellaneous";
import Software from "./Software";
import Books from "./Books";
type ComponentType =
  | "presentation"
  | "cheatsheets"
  | "installation"
  | "miscellaneous"
  |  "books"
  | "software"; 
export default function Recordings() {
  // State to manage active component
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("presentation"); // Specify the type of activeComponent

  // Function to set active component
  const handleButtonClick = (component: ComponentType) => {
    setActiveComponent(component);
  };

  // Render component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "presentation":
        return <Presentation />;          
      case "cheatsheets":
        return <Cheatsheets />;
      case "books":
        return <Books />;
      case "software":
        return <Software />;
      // case "code":
      //   return <Code />;
      // case "diagrams":
      //   return <Diagrams />;
      case "installation":
        return <Installations />;
      case "miscellaneous":
        return <Miscellaneous />;
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      {/* Main content */}
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Navbar */}
        <nav className="flex items-center justify-between mt-24 ">
          <h1 className="text-4xl font-bold">
            Course Material
            <span className="text-2xl font-light"> (PDF)</span>
          </h1>
          {/* <Breadcrumb /> */}
          <Layout currentPage="Presentation">{/* Page content */}</Layout>
        </nav>

        {/* Section with buttons and dropdowns */}
        {/* <section className="flex border border-red-300 items-center justify-between mb-8"> */}
        <section className="flex   justify-between mb-8">
          {/* Left side */}
          <div className="flex  mt-10 h-1/2">
            <div className="flex flex-col ">
              <button
                className={`bg-blue-500 hover:bg-blue-600 w-36 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "presentation" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("presentation")}
              >
                Presentation
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "cheatsheets" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("cheatsheets")}
              >
                Cheatsheets
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "software" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("software")}
              >
                Software
              </button>
              {/* <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "code" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("code")}
              >
                Code
              </button> */}
              {/* <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "diagrams" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("diagrams")}
              >
                Diagrams
              </button> */}
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "installation" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("installation")}
              >
                Installation
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "installation" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("books")}
              >
                Books
              </button>
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mb-1 ${
                  activeComponent === "miscellaneous" ? "bg-blue-600" : ""
                }`}
                onClick={() => handleButtonClick("miscellaneous")}
              >
                Miscellaneous
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-grow  ml-20 ">{renderComponent()}</div>
        </section>
      </main>
    </div>
  );
}
