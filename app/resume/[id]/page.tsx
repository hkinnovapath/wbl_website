"use client";
import Layout from "@/components/Common/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Common/Modal";

export default function Assignment({ params }) {
  const router = useRouter(); 
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [htmlContent, setHtmlContent] = useState(null); // State to store the HTML content

  useEffect(() => {
    const fetchPublicHtml = async () => {
      try {
        await fetchHtml(params.id); // Fetch HTML content publicly
        setLoading(false);
      } catch (error) {
        console.error("Error while fetching HTML:", error);
        setErrorMessage("An error occurred while fetching the resume content.");
        setShowModal(true);
      }
    };
  
    fetchPublicHtml();
  }, []);

  const fetchHtml = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/resume/${id}`, {
        method: "GET",
        headers: {
          Accept: "text/html",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch resume content");
      }

      const html = await response.text();
      setHtmlContent(html); // Store the HTML content in state
    } catch (error) {
      console.error("Error fetching resume content:", error);
      setErrorMessage("An error occurred while fetching the resume content.");
      setShowModal(true);
    }
  };

  const handleClose = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    router.push("/login");
    return setShowModal(false);
  };

  return (
    <div>
      <main className="container px-4 pb-6 sm:px-6">
        <nav className="sm:mt-28 mt-16 text-center justify-center sm:mb-3 flex h-24 sm:h-28 flex-col sm:justify-between sm:flex-row sm:items-center">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Resume
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Resume" />
          </div>
        </nav>

        {/* HTML Viewer */}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : htmlContent ? (
            <iframe
              srcDoc={htmlContent}  // Using srcDoc to embed HTML directly
              width="100%"
              height="800px"
              title="Resume Content"
            ></iframe>
          ) : (
            <p>No content available.</p>
          )}
        </div>
      </main>

      {showModal && (
        <Modal
          title="Error"
          message={errorMessage}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
