import React from "react";
import ResourcesTable from "@/components/Common/resourcesTable";

const subjects = [
  { id: 1, name: "Hr_Schema", pdfUrl: "https://drive.google.com/file/d/0B2Z9J2D1hx7UNUNuTXl0WC1Ya2M/view?resourcekey=0-wN06dOLb3e6RpRlTNhQY0A" },
  { id: 2, name: "	Installation steps for VMware player & Ubantu", pdfUrl: "https://drive.google.com/file/d/0B2Z9J2D1hx7UMFlnNS0zeV80NGc/view?resourcekey=0-cyMPg1X9Ycu_SAWXYEs--w" },
  { id: 3, name: "Oracle Setup", pdfUrl: "https://drive.google.com/file/d/0B2Z9J2D1hx7UWGZrQWhUWEtQM00/view?resourcekey=0-xRPZLkRg91IZ3TePaU-p5A" },
  { id: 4, name: "Python installation", pdfUrl: "https://drive.google.com/file/d/0B2Z9J2D1hx7UUkVZS3Fkd1Q4RE0/view?resourcekey=0-gfDTnsQdTkLBRzMMk8V0Lw" },
  // Add more subjects as needed
];
const Installations = () => {
  return (
    <div className="max-w-6xl  mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Installations  </h1>
  
      <ResourcesTable subjects={subjects}/>
    </div>
  )
};

export default Installations;
