"use client";
import Layout from "@/components/Common/Layout";
import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function Assignment() {
  const [resumeContent, setResumeContent] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const fetchResumeContent = async () => {
      try {
        const response = await fetch("http://localhost:8001/forms"); 
        const data = await response.text();
        setResumeContent(data);
      } catch (error) {
        console.error("Error fetching resume content:", error);
      }
    };

    fetchResumeContent();
  }, []);

  useEffect(() => {
    if (resumeContent && scriptLoaded) {
      // DOM manipulation code here
      console.log("Resume content loaded and script is loaded:", resumeContent);

      const sectionLinks = document.querySelectorAll(".section-link");
      const sections = document.querySelectorAll(".section");

      sectionLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          // Remove active class from all section links and sections
          sectionLinks.forEach((link) => link.classList.remove("active"));
          sections.forEach((section) => section.classList.remove("active"));

          // Add active class to the clicked link and the corresponding section
          this.classList.add("active");
          const targetSection = document.getElementById(this.dataset.section);
          targetSection.classList.add("active");
        });
      });
    }
  }, [resumeContent, scriptLoaded]);

  const handleScriptLoad = () => {
    console.log("External script loaded successfully");
    setScriptLoaded(true);
  };

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="hidden sm:block">
          <Layout currentPage="resume" />
        </div>
        {resumeContent && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: resumeContent }} />
          </div>
        )}
        <Script
          src="/form.js"
          strategy="lazyOnload"
          onLoad={handleScriptLoad}
        />
      </main>
    </div>
  );
}
