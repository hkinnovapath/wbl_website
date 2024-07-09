"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/components/Common/Layout";
import ClassComp from "@/components/Recording/ClassComp";
import SearchComp from "@/components/Recording/SearchComp";
import SessionComp from "@/components/Recording/SessionComp";
import CourseNavigation from "@/components/Common/CourseNavigation";
// import { isAuthenticated } from "@/utils/auth"; // Import the auth check

type ComponentType = "class" | "search" | "session"; // Define a union type for valid component types

export default function Recordings() {
  const router = useRouter(); // Initialize router
  const pathname = usePathname(); // Get the current path

  // State to manage active component
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("class"); // Specify the type of activeComponent
  // const [loading, setLoading] = useState(false);

  // Function to set active component
  // useEffect(() => {
  //   // Check if the user is authenticated
  //   if (!isAuthenticated()) {
  //     // If not authenticated, redirect to login page with redirect path
  //     router.push(`/login?redirect=${encodeURIComponent(window.location.href)}`);
  //   } else {
  //     setLoading(false); // Mark loading as complete
  //   }
  // }, [router]);

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

  // if (loading) {
  //   return (
  //     <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
  //       Loading...
  //     </div>
  //   ); // You can customize loading indicator
  // }

  useEffect(() => {
    router.push(`/recording?course=ML`);
  }, [router]);

  return (
    <div>
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-2xl font-bold sm:text-4xl">
            Recording
            <span className="text-lg font-light sm:text-2xl">(Classes)</span>
          </h1>

          <div className="hidden sm:block">
            <Layout currentPage="Recordings" />
          </div>
        </nav>
        <CourseNavigation />
        {/* Section with buttons and dropdowns */}
        <section className="mb-8 flex flex-col justify-between sm:flex-row">
          {/* Left side */}
          <div className="mt-10 flex justify-center sm:w-1/3">
            <div className="flex w-60 flex-col">
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
          <div className="mt-10 flex-grow space-y-4 sm:ml-20">
            {renderComponent()}
          </div>
        </section>
      </main>
    </div>
  );
}
