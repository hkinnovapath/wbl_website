

"use client";
import Layout from "@/components/Common/Layout";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Modal from "@/components/Common/Modal";


export default function Assignment({ params }) {
  const router = useRouter(); 
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null); // State to store the URL of the fetched PDF


  
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        if (!valid) {
          setErrorMessage(message);
          setShowModal(true);
        } else {
          fetchPdf(params.id); // Fetch PDF if authenticated
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        setErrorMessage("An error occurred while checking authentication");
        setShowModal(true);
      }
    };

    checkAuthentication();
  }, []); 

  const fetchPdf = async (id) => {
    try {
      const response = await fetch(`http://localhost:8001/resume/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }

      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      setErrorMessage("An error occurred while fetching the PDF.");
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
            Resume PDF 
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Resume" />
          </div>
        </nav>

        {/* PDF Viewer */}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : pdfUrl ? (
            <iframe
              src={pdfUrl}
              width="100%"
              height="800px"
              title="Resume PDF"
            ></iframe>
          ) : (
            <p>Loading........</p>
          )}
        </div>

        <Script src="/form.js" strategy="lazyOnload" />
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
