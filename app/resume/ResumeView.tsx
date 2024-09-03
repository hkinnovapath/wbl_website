import React, { useEffect, useRef } from "react";
import axios from "axios";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResumePreviewProps {
  renderedHtml: string;
  getJson: () => void;
  resumeJson: object;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ renderedHtml, getJson, resumeJson }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;

      if (doc) {
        doc.open();
        doc.write(renderedHtml);
        doc.close();

        // Inject external stylesheet into the iframe's document
        const styleLink = doc.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = '/templates/style.css';
        doc.head.appendChild(styleLink);

        // Optionally inject custom CSS for scrollbars and content fitting
        const style = doc.createElement('style');
        style.innerHTML = `
          /* Enable scrolling for both axes */
          body {
            overflow: auto;
            scroll-behavior: smooth;
            margin: 0;
            padding: 0;
          }

          /* Responsive layout to prevent unnecessary scroll */
          .container {
            width: 100%;
            box-sizing: border-box;
          }

          /* Scrollbar styling */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          ::-webkit-scrollbar-track {
            background: var(--scrollbar-track-color, #ffffff);
          }

          ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb-color, #ffffff);
            border-radius: 10px;
            border: 1px solid var(--scrollbar-thumb-border-color, #cccccc);
          }

          ::-webkit-scrollbar-thumb:hover {
            background: var(--scrollbar-thumb-hover-color, #e0e0e0);
          }

          /* Light theme scrollbar colors */
          :root {
            --scrollbar-track-color: #f9f9f9;
            --scrollbar-thumb-color: #f5f5f5;
            --scrollbar-thumb-hover-color: #eeeeee;
            --scrollbar-thumb-border-color: #dddddd;
          }

          /* Dark theme scrollbar colors */
          @media (prefers-color-scheme: dark) {
            :root {
              --scrollbar-track-color: #2d3748;
              --scrollbar-thumb-color: #4a5568;
              --scrollbar-thumb-hover-color: #718096;
              --scrollbar-thumb-border-color: transparent;
            }
          }
        `;
        doc.head.appendChild(style);
      }
    }
  }, [renderedHtml]);
  const handleDownloadPdf = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const apiUrl = process.env.RESUME_PUBLIC_API_URL;
      const modifiedRenderedHtml = renderedHtml.replace(
        /<\/head>/i,
        `<style>
         /* Utils */
/*----- Colors -----*/
/*----- Fonts -----*/
/*----- Dimensions and sizes -----*/
/* Base */
@font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Josefin Sans Light'), local('JosefinSans-Light'), url(https://fonts.gstatic.com/s/josefinsans/v14/Qw3FZQNVED7rKGKxtqIqX5Ecpl5te10k.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Josefin Sans Bold'), local('JosefinSans-Bold'), url(https://fonts.gstatic.com/s/josefinsans/v14/Qw3FZQNVED7rKGKxtqIqX5Ectllte10k.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI9w2_Gwfo.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_Gwfo.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPHA.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
  }
  
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf) format('truetype');
  }
  
  html {
    background: white;
  }
  
  body {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    background: white;
    margin: 50px 0 100px;
    letter-spacing: .3px;
    color: #39424B;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: none;
    margin: 0;
  }
  
  h1 {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 1px;
  }
  
  h2 {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: .5px;
  }
  
  h3 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .4px;
  }
  
  h3.bold {
    font-weight: 700;
  }
  
  h4 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 12px;
  }
  
  h4.bold {
    font-weight: 700;
  }
  
  h5 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 11px;
  }
  
  h5.italic {
    font-style: italic;
  }
  
  h6 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 10px;
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
  
  a:hover {
    color: #2895F1;
  }
  
  a .fa-external-link {
    font-size: 10px;
    vertical-align: text-top;
  }
  
  p,
  li {
    font-size: 11px;
  }
  
  blockquote {
    font-size: 11px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: italic;
    margin: 10px 25px;
  }
  
  em {
    color: #999;
  }
  
  ul {
    margin: 10px 0 0;
    -webkit-padding-start: 25px;
  }
  
  ul li {
    padding-left: 10px;
  }
  
  ul.minimal {
    list-style: none;
    padding: 0;
  }
  
  ul.minimal li {
    margin-bottom: 3px;
    padding-left: 0;
  }
  
  ul.two-column {
    -webkit-column-count: 2;
    -webkit-column-gap: 28px;
    column-count: 2;
    column-gap: 28px;
  }
  
  ul.two-column li {
    padding-left: 0;
  }
  
  @page {
    size: A4;
  }
  
  .container {
    padding-top: 20px;
  }
  
  .keyline {
    width: 45px;
    margin: 8px 0 10px;
    border-top: 1px solid #56817A;
  }
  
  .pull-left {
    float: left;
  }
  
  .pull-right {
    float: right;
  }
  
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .profile-pic {
    margin-top: -5px;
    margin-right: 18px;
  }
  
  .profile-pic img {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    border: 2px solid #56817A;
  }
  
  .summary {
    margin: 5px 0 5px;
  }
  
  .sublink {
    font-size: 70%;
    font-weight: 200;
    color: dimgray;
  }
  
  .capitalize {
    text-transform: capitalize;
  }
  
  /* Layouts */
  .page {
    background: white;
    color: black;
    width: 100%;
    min-height: 570px;
    display: block;
    margin: 0 auto;
    border-top: 10px solid #56817A;
    padding: 36px 22px 30px 34px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  }
  
  .page:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .left-column {
    float: left;
    width: 160px;
    margin-right: 20px;
    word-wrap: break-word;
  }
  
  .right-column {
    width: auto;
    overflow: hidden;
  }
  
  .item {
    margin-bottom: 15px;
  }
  
  .item:last-child {
    margin-bottom: 0;
  }
  
  @media print {
    body {
      margin: 0;
    }
  
    .page {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 36px 0 30px;
      box-shadow: none;
    }
  
    .page .resume-header,
    .page .resume-content {
      padding: 0 22px 0 34px;
    }
  
    .container {
      page-break-inside: avoid;
    }
  
    .work-container .item {
      page-break-inside: avoid;
    }
  
    .fa-external-link {
      display: none;
    }
  }
  
  /* Components */
  .info-tag-container {
    margin-bottom: 5px;
  }
  
  .info-tag-container .fa {
    font-size: 14px;
    width: 12px;
    margin-right: 5px;
    text-align: center;
    vertical-align: middle;
  }
  
  .info-tag-container .fa.fa-map-marker {
    font-size: 16px;
  }
  
  .info-tag-container .fa.fa-mobile {
    font-size: 18px;
  }
  
  .info-tag-container .fa.fa-envelope-o {
    font-size: 12px;
  }
  
  .info-tag-container .fa.fa-desktop {
    font-size: 11px;
  }
  
  .info-tag-container .fa.fa-external-link {
    width: auto;
    font-size: inherit;
    vertical-align: text-top;
  }
  
  .info-tag-container .info-text {
    font-size: 12px;
    text-transform: none;
    display: inline-block;
    vertical-align: middle;
    width: 139px;
  }
  
  .references-container .fa {
    font-size: 14px;
  }
  
  .education-container .location {
    padding-bottom: 6px;
    font-weight: 400;
  }
  
  .education-container .specialization {
    text-transform: none;
    font-style: italic;
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .main-skill {
    font-size: 80%;
  }
  
  .skill {
    margin: .15em;
    padding: .15em;
    background: ghostwhite;
    border-radius: 5px;
  }
  
        </style>`
      );
      // console.log(modifiedRenderedHtml)
     
      const response = await axios.post(`${apiUrl}/download-pdf`, {
        html: modifiedRenderedHtml,
        resumeJson: JSON.stringify(resumeJson),
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        responseType: 'blob'
      });
        

       // Extract the filename from the Content-Disposition header
    const contentDisposition = response.headers['content-disposition'];
    console.log(contentDisposition);
    let filename = 'resume.pdf'; // Default filename
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="(.+)"/);
      if (filenameMatch.length > 1) {
        filename = filenameMatch[1]; // Use the filename from the response header
      }
    }
      // Create a URL for the PDF blob and initiate download
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url); // Clean up after download
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="lg:col-span-3">
      <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="json text flex items-center rounded p-1"
            id="download-json-btn"
            onClick={getJson}
          >
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            Json
          </button>
          <button
            className="pdf text flex items-center rounded p-1"
            id="download-pdf-btn"
            onClick={handleDownloadPdf}
          >
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            Pdf
          </button>
        </div>
        <iframe
          ref={iframeRef}
          className="h-[80vh] w-full bg-gray-100 dark:bg-gray-800"
          title="Resume Preview"
        />
      </div>
    </div>
  );
};

export default ResumePreview;

