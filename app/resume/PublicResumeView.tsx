"use client";
import Handlebars from "handlebars";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/navigation";

const fetchPartials = async () => {
  const partials = [
    "about",
    "basics",
    "education",
    "info-tag",
    "languages",
    "resume-header",
    "skills",
    "languages",
    "summary",
    "social",
    "title",
    "work",
    "section-header",
  ];

  const partialPromises = partials.map(async (partial) => {
    try {
      const response = await fetch(`/templates/partials/${partial}.hbs`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${partial}.hbs`);
      }
      const partialString = await response.text();
      Handlebars.registerPartial(partial, partialString);
    } catch (error) {
      console.error(`Error fetching partial: ${partial}`, error);
    }
  });

  await Promise.all(partialPromises);
};

const registerHelpers = () => {
  Handlebars.registerHelper({
    removeProtocol: (url) => url.replace(/.*?:\/\//g, ""),
    concat: (...args) => args.filter((arg) => typeof arg !== "object").join(""),
    formatAddress: (...args) =>
      args.filter((arg) => typeof arg !== "object").join(" "),
    formatDate: (date) => moment(date).format("MM/YYYY"),
    lowercase: (s) => s.toLowerCase(),
    eq: (a, b) => a === b,
  });
};

const ResumeRenderer = ({ resumeId }) => {
  const [renderedHtml, setRenderedHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Initialize router

  const renderTemplate = async (resumeJson) => {
    try {
      await fetchPartials(); // Register partials before rendering
      const response = await fetch("/templates/resume.hbs");
      if (!response.ok) {
        throw new Error("Failed to fetch resume.hbs");
      }
      const templateString = await response.text();
      const template = Handlebars.compile(templateString);
      const html = template(resumeJson);
      setRenderedHtml(html);
    } catch (error) {
      console.error("Error rendering template", error);
    }
  };

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`/api/resume/${resumeId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const resumeJson = await response.json();
        await renderTemplate(resumeJson);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setErrorMessage("An error occurred while fetching resume data");
        setLoading(false);
      }
    };

    fetchResumeData();
  }, [resumeId]);

  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />;
};

export default ResumeRenderer;
