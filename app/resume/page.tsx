"use client";
import Layout from "@/components/Common/Layout";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Modal from "@/components/Common/Modal"; // Import the Modal component
// import ClassComp from "@/components/Recording/ClassComp";
// import SearchComp from "@/components/Recording/SearchComp";
// import SessionComp from "@/components/Recording/SessionComp";
// import CourseNavigation from "@/components/Common/CourseNavigation";


export default function Assignment() {
  const [resumeContent, setResumeContent] = useState(null);
  // const [scriptLoaded, setScriptLoaded] = useState(false);
  const contentRef = useRef(null);


  const router = useRouter(); // Initialize router
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility


  useEffect(() => {
    const fetchResumeContent = async () => {
      try {
        const response = await fetch("./form.html");
        const data = await response.text();
        setResumeContent(data);
      } catch (error) {
        console.error("Error fetching resume content:", error);
      }
    };

    fetchResumeContent();
  }, [resumeContent]); // Dependency array includes resumeContent

  useEffect(() => {
    if (resumeContent && contentRef.current) {
      // Set the HTML content
      contentRef.current.innerHTML = resumeContent;

      // Function to handle section link clicks
      const handleLinkClick = (event) => {
        event.preventDefault();
        const sectionLinks = contentRef.current.querySelectorAll(".section-link");
        const sections = contentRef.current.querySelectorAll(".section");

        // Remove active class from all section links and sections
        sectionLinks.forEach((link) => link.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));

        // Add active class to the clicked link and the corresponding section
        event.target.classList.add("active");
        const targetSection = contentRef.current.querySelector(`#${event.target.dataset.section}`);
        if (targetSection) targetSection.classList.add("active");
      };

      // Attach event listeners to section links
      const sectionLinks = contentRef.current.querySelectorAll(".section-link");
      sectionLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

      // Cleanup function to remove event listeners
      return () => {
        sectionLinks.forEach((link) => link.removeEventListener("click", handleLinkClick));
      };
    }
  }, [resumeContent]);

  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        if (!valid) {
          setErrorMessage(message);
          setShowModal(true); // Show modal if not valid
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
  }, []); // Empty dependency array to run effect only once on mount


  const handleClose = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    router.push("/login");
    return setShowModal(false);
  };

  return (
    <div key={resumeContent}> {/* The key property forces the component to re-mount */}
      <main className="container px-4 pb-6 sm:px-6">
        {/* Navbar */}
        <nav className="sm:mt-28 mt-16 text-center justify-center sm:mb-3 flex h-24 sm:h-28 flex-col sm:justify-between sm:flex-row sm:items-center">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Create Resume
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Resume"/>
          </div>
        </nav>
        {/* Render the HTML content */}
        <div ref={contentRef} />
        <Script
          src="/form.js"
          strategy="lazyOnload"
        />
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
