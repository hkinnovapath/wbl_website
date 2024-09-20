import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { faArrowDown, faFileCode, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResumePreviewProps {
  renderedHtml: string;
  getJson: () => void;
  resumeJson: object;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ renderedHtml, getJson, resumeJson }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(false); // Spinner state
  const [errorMessage, setErrorMessage] = useState<string>('');

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
          background: #ffffff;
        }

        ::-webkit-scrollbar-thumb {
          background: #f0f0f0;
          border-radius: 10px;
          border: 1px solid #dcdcdc;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e0e0e0;
        }
      `;
        doc.head.appendChild(style);
      }
    }
  }, [renderedHtml]);
  const handleDownloadPdf = async () => {
    setIsLoading(true);
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
      console.log(modifiedRenderedHtml)
      console.log(JSON.stringify(resumeJson))

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
      // console.log(contentDisposition);
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
      if (error.response && error.response.status === 401) {
        // If status is 401, show the specific message to the user
        setErrorMessage(`You can't download, Please register with a new email to continue` );
      } else {
        console.error('Error downloading PDF:', error);
        setErrorMessage('An error occurred while downloading the PDF');
      }
    }
    finally {
      setIsLoading(false); // Hide spinner after download completes
    }
  };

  return (
    
    <>
    {errorMessage && (
  <div className="relative top-[-50px] overflow-hidden">
    <div
      className=" inset-x-0 top-0 p-4 rounded-md text-red-700 bg-white transition-transform transform translate-x-full duration-500 ease-in-out"
      style={{ transform: 'translateX(0)' }}
    >
      <p>{errorMessage}</p>
    </div>
  </div>
)}
    
    <div className="lg:col-span-2">
      <div className="flex h-full flex-col rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
        <div className="mb-4 flex items-center justify-between">
          <button
            className="json text-lg font-bold flex items-center   rounded-md  p-1"
            id="download-json-btn"
            onClick={getJson}
          >
            {/* -------- CHANGING THE ICONS FOR JSON AND PDF */}
            {/* <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            Json */}
             {/* <FontAwesomeIcon icon={faFileCode}  className="mr-2 w-8 h-8 text-gray-700 dark:text-gray-300"  /> */}
             <svg xmlns="http://www.w3.org/2000/svg" width="2.3rem" height="2.3rem" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM4.151 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.105.073.25.114q.142.041.319.041q.245 0 .413-.07a.56.56 0 0 0 .255-.193a.5.5 0 0 0 .084-.29a.39.39 0 0 0-.152-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214a1 1 0 0 1-.352-.367a1.1 1.1 0 0 1-.123-.524q0-.366.19-.639q.192-.272.528-.422q.337-.15.777-.149q.456 0 .779.152q.326.153.5.41q.18.255.2.566h-.75a.56.56 0 0 0-.12-.258a.6.6 0 0 0-.246-.181a.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.185.384q0 .18.144.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211a1 1 0 0 1 .375.358q.135.222.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158q-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252a1.1 1.1 0 0 1-.29-.375m-3.104-.033a1.3 1.3 0 0 1-.082-.466h.764a.6.6 0 0 0 .074.27a.5.5 0 0 0 .454.246q.285 0 .422-.164q.137-.165.137-.466v-2.745h.791v2.725q0 .66-.357 1.005q-.355.345-.985.345a1.6 1.6 0 0 1-.568-.094a1.15 1.15 0 0 1-.407-.266a1.1 1.1 0 0 1-.243-.39m9.091-1.585v.522q0 .384-.117.641a.86.86 0 0 1-.322.387a.9.9 0 0 1-.47.126a.9.9 0 0 1-.47-.126a.87.87 0 0 1-.32-.387a1.55 1.55 0 0 1-.117-.641v-.522q0-.386.117-.641a.87.87 0 0 1 .32-.387a.87.87 0 0 1 .47-.129q.265 0 .47.129a.86.86 0 0 1 .322.387q.117.255.117.641m.803.519v-.513q0-.565-.205-.973a1.46 1.46 0 0 0-.59-.63q-.38-.22-.916-.22q-.534 0-.92.22a1.44 1.44 0 0 0-.589.628q-.205.407-.205.975v.513q0 .562.205.973q.205.407.589.626q.386.217.92.217q.536 0 .917-.217q.384-.22.589-.626q.204-.41.205-.973m1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676z"/></svg>
          </button>
          <button
            className="pdf text-lg font-bold flex items-center rounded p-1"
            id="download-pdf-btn"
            onClick={handleDownloadPdf}
          >
            {/* <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            Pdf */}
            {/* <FontAwesomeIcon icon={faFilePdf} className="mr-2 w-8 h-8 text-gray-700 dark:text-gray-300" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="2.3rem" height="2.3rem" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173q.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38a.57.57 0 0 1-.238.241a.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181q.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084q0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592a1.1 1.1 0 0 1-.196.422a.8.8 0 0 1-.334.252a1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/></svg>
          </button>
        </div>
        {/* --------------------------------------------- */}
        {isLoading && (
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full relative">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-loading-bar"></div>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent opacity-30 animate-shimmer"></div>
              </div>

              {/* Inline CSS for animations */}
              <style jsx>{`
                @keyframes loading-bar {
                  0% { left: -33.33%; }
                  100% { left: 100%; }
                }
                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-loading-bar {
                  animation: loading-bar 2s ease-in-out infinite;
                }
                .animate-shimmer {
                  animation: shimmer 1.5s linear infinite;
                }
              `}</style>
            </div>
          )}
          <br/>
        <iframe
          ref={iframeRef}
          className="h-[80vh] w-full bg-gray-100 dark:bg-gray-800"
          title="Resume Preview"
        />
      </div>
    </div>
    </>
  );
};


export default ResumePreview;

