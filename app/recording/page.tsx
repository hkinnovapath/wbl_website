"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Common/Layout";
import { isAuthenticated } from "@/utils/auth";
// import Modal from "@/components/Common/Modal"; // Import the Modal component
import ClassComp from "@/components/Recording/ClassComp";
import SearchComp from "@/components/Recording/SearchComp";
import SessionComp from "@/components/Recording/SessionComp";
import CourseNavigation from "@/components/Common/CourseNavigation";

type ComponentType = "class" | "search" | "session"; // Define a union type for valid component types

export default function Recordings() {
  const router = useRouter(); // Initialize router
  const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // State to manage active component
  const [activeComponent, setActiveComponent] =useState<ComponentType>("class"); // Specify the type of activeComponent
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

  useEffect(() => {
    router.push(`/recording?course=ML`);
  }, [router]);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        if (!valid) {
          // setErrorMessage(message);
          // setShowModal(true); // Show modal if not valid
          router.push("/login");
          } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        // setErrorMessage("An error occurred while checking authentication");
        // setShowModal(true);
        router.push("/login");
      }
    };

    checkAuthentication();
  }, [router]); // Empty dependency array to run effect only once on mount

  // const handleClose = () => {
  //   localStorage.removeItem("access_token");
  //   sessionStorage.clear();
  //   router.push("/login");
  //   return setShowModal(false);
  // };

  return (
    <div>
      {/* Main content */}
      {/* <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6"> */}
      <main className="container ">
        {/* Navbar */}
        <nav className="mt-20 flex h-28  flex-col items-start justify-center sm:mt-28 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
          <h1 className=" text-center  text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl ">
            Recording
            <span className="text-lg font-light sm:text-2xl">(Classes)</span>
          </h1>
          <div className="hidden  sm:block">
            <Layout currentPage="Recordings" />
          </div>
        </nav>
        {/* Section with buttons and dropdowns */}
        <section className="mb-8 min-h-[500px]">
          <CourseNavigation />
          {/* Left side */}
          <div className="flex flex-col justify-start sm:flex-row ">
            <div className="mt-10 flex justify-center sm:w-1/4">
              <div className="flex flex-col">
                <button
                  className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
                  onClick={() => handleButtonClick("class")}
                >
                  Class
                </button>
                <button
                  className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
                  onClick={() => handleButtonClick("search")}
                >
                  Search
                </button>
                <button
                  className="mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36"
                  onClick={() => handleButtonClick("session")}
                >
                  Session
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="mt:5 space-y-4 sm:-mt-16 sm:ml-20 sm:w-1/2 ">
              {renderComponent()}
            </div>
          </div>
        </section>
      </main>
      {/* {showModal && (
        <Modal
          title="Authentication Error"
          message={errorMessage}
          onClose={handleClose}
        />
      )} */}
    </div>
  );
}
