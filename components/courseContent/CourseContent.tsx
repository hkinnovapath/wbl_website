import React from "react";
import CourseContentTable from "@/components/Common/courseContent";

const subjects = [
  {
    id: 1,
    name: "SOFTWARE ARCHITECTURES, SDLC, Agile—Scrum, XP, TDD ,SOA, SaaS",
    pdfUrl: "https://code.visualstudio.com/download",
    name2:
      "HTTP ,Front End Fundamentals,HTML, XHTML DOM XML, XPATH, XSD, XSLT, CSS",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 2,
    name: "CSS3,Pre-Processors,Grid System Firebug, Fiddler, Web Works, HTML5",
    pdfUrl: "https://git-scm.com/downloads",
    name2: "JavaScript, OOP,Asynchronous Programming",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 3,
    name: "Server Side Programming,JSP, Servlets, JSTL Java— JSF",
    pdfUrl: "https://www.mongodb.com/",
    name2: "Web Services,REST API JSON, Frisby.JS",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 4,
    name: "NodeJS ,Events Streams Modules, Express.JS Socket.IO , Data Persistence",
    pdfUrl: "https://nodejs.org/en/download",
    name2: "AJAX, XHR, DOJO, ,Bootstrap",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 5,
    name: "AngularJS, Controllers, Markup Services, Routing, Directives Testing",
    pdfUrl: "https://nodejs.org/en/download",
    name2: "BackBone.JS, Models, Views, Templates ,Routing, Collections",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 6,
    name: "MongoDB, NoSQL Mongo Shell, Data Saving, Indexing, Documents, Collections",
    pdfUrl: "https://nodejs.org/en/download",
    name2: "JQuery,Selectors, DOM, Events,AJAX, JQuery UI, Widgets , Interactions and Effects",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  {
    id: 7,
    name: "Tools Grunt, Jasmine",
    pdfUrl: "https://nodejs.org/en/download",
    name2: "Design Patterns",
    pdfUrl2: "https://code.visualstudio.com/download",
  },
  // Add more subjects as needed
];
const CourseContent = () => {
  return (
    <div className="mx-auto  max-w-4xl px-4  sm:px-6">
      <CourseContentTable subjects={subjects} />
    </div>
  );
};

export default CourseContent;
