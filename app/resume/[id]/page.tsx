"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ResumePage = () => {
  const { id: resumeId } = useParams();

  const [resumeHtml, setResumeHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.RESUME_PUBLIC_API_URL; // Ensure this is set in your environment variables

  useEffect(() => {
    const fetchResume = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${apiUrl}/${resumeId}`);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const html = await response.text();
        setResumeHtml(html);
      } catch (err) {
        console.error('Error fetching resume:', err);
        setError((err as Error).message || 'An error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    if (resumeId) {
      fetchResume();
    }
  }, [resumeId]);

  if (isLoading) {
    return <p>Loading resume...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main className="container ">
        {/* Navbar */}
        <nav className="mt-20 flex h-10  flex-col items-start justify-center sm:mt-28 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
        </nav>
    <div className="resume-page">
      {resumeHtml ? (
        <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
      ) : (
        <p>Resume not found.</p>
      )}
    </div>
    </main>
  );
};

export default ResumePage;
