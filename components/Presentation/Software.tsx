import React from "react";
import ResourcesTable from "@/components/Common/resourcesTable";

const subjects = [
  { id: 1, name: "Visualstudio_code", pdfUrl: "https://code.visualstudio.com/download" },
  { id: 2, name: "Git_Bash(for windows)", pdfUrl: "https://git-scm.com/downloads" },
  { id: 3, name: "NODE_JS", pdfUrl: "https://nodejs.org/en/download" },
  { id: 4, name: "MONGO_DB", pdfUrl: "https://www.mongodb.com/" },
  // Add more subjects as needed
];
const Software = () => {
  return (
    <div className="max-w-6xl  mx-auto px-4 sm:px-6 ">
      <h1 className="text-3xl font-bold mb-4">Softwares  </h1>
  
      <ResourcesTable subjects={subjects}/>
    </div>
  )
};

export default Software;
