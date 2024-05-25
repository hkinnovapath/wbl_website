import React from "react";
import ResourcesTable from "@/components/Common/resourcesTable";

const subjects = [
  { id: 1, name: "GIT/GITHUB", pdfUrl: "https://docs.google.com/presentation/d/1gMPBwakgHIPyU951PSU51veKB8_I_Kf1fqF5zB4t4ts/edit?usp=sharing" },
  { id: 2, name: "HTTP_WEBSERVICES", pdfUrl: "https://docs.google.com/presentation/d/1HtSK4thmFVLDoPnOVYdl4nbFp1wWgGNuG8TTc2d5j_s/edit?usp=sharing" },
  { id: 3, name: "HTML", pdfUrl: "" },
  { id: 4, name: "CSS", pdfUrl: "" },
  { id: 5, name: "TAILWIND_CSS", pdfUrl: "" },
  { id: 6, name: "JAVASCRIPT", pdfUrl: "" },
  { id: 7, name: "REAC_JS", pdfUrl: "" },
  { id: 8, name: "MONGO_DB", pdfUrl: "" },
  { id: 9, name: "NODE_JS", pdfUrl: "" },
  { id: 10, name: "EXPRESS_JS", pdfUrl: "" },
  // Add more subjects as needed
];
const Presentation = () => {
  return (
    <div className="max-w-6xl     mx-auto px-4 sm:px-6 ">
      <h1 className="text-3xl font-bold mb-4">Presentations</h1>
      <ResourcesTable subjects={subjects}/>
    </div>
  )
};
  
export default Presentation;
