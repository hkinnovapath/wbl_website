"use client";
import Layout from "@/components/Common/Layout";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Assignment() {
  const [resumeContent, setResumeContent] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchResumeContent = async () => {
      try {
        const response = await fetch("/resume/form.html");
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
  // useEffect(() => {
  //   if (resumeContent && scriptLoaded && contentRef.current) {
  //     // Set the HTML content
  //     contentRef.current.innerHTML = resumeContent;

  //     // Now that the content is rendered, perform DOM manipulation
  //     const sectionLinks = contentRef.current.querySelectorAll(".section-link");
  //     const sections = contentRef.current.querySelectorAll(".section");

  //     sectionLinks.forEach((link) => {
  //       link.addEventListener("click", function (event) {
  //         event.preventDefault();
  //         // Remove active class from all section links and sections
  //         sectionLinks.forEach((link) => link.classList.remove("active"));
  //         sections.forEach((section) => section.classList.remove("active"));

  //         // Add active class to the clicked link and the corresponding section
  //         this.classList.add("active");
  //         const targetSection = contentRef.current.querySelector(`#${this.dataset.section}`);
  //         if (targetSection) targetSection.classList.add("active");
  //       });
  //     });
  //   }
  // }, [resumeContent, scriptLoaded]);

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
          src="/resume/form.js"
          strategy="lazyOnload"
        />
      </main>
    </div>
  );
}