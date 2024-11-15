

// *****************old code**************


// import React, { useState, useEffect } from "react";

// type Session = {
//   sessionid: number;
//   title: string;
//   type: string;
//   link: string; // Ensure this matches the database structure
// };

// type SessionResponse = {
//   sessions: Session[];
// };

// export default function SessionComp() {
//   const [sessions, setSessions] = useState<Session[]>([]);
//   const [selectedType, setSelectedType] = useState<string>("");
//   const [filteredSessions, setFilteredSessions] = useState<Session[]>([]);
//   const [selectedSession, setSelectedSession] = useState<Session | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const sessionsDataFromStorage = sessionStorage.getItem("sessions_data");
//     const sessionsDataTimestamp = sessionStorage.getItem(
//       "sessions_data_timestamp"
//     );
//     const dataAge =
//       Date.now() -
//       (sessionsDataTimestamp ? parseInt(sessionsDataTimestamp, 10) : 0);

//     if (sessionsDataFromStorage && dataAge < 86400000) {
//       // Data is valid for 24 hours
//       const parsedSessions = JSON.parse(sessionsDataFromStorage);
//       setSessions(parsedSessions);
//       setIsLoading(false);
//     } else {
//       fetchSessions();
//     }
//   }, []);

//   useEffect(() => {
//     if (selectedType) {
//       setFilteredSessions(
//         sessions.filter((session) => session.type === selectedType)
//       );
//     } else {
//       setFilteredSessions([]);
//     }
//   }, [selectedType, sessions]);

//   const fetchSessions = async () => {
//     try {
//       setIsLoading(true);
//       const accessToken = localStorage.getItem("access_token");
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/sessions`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch sessions");
//       }

//       const data: SessionResponse = await response.json();
//       setSessions(data.sessions);
//       sessionStorage.setItem("sessions_data", JSON.stringify(data.sessions));
//       sessionStorage.setItem("sessions_data_timestamp", Date.now().toString());
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching sessions:", error);
//       setError("Failed to load sessions. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedType(e.target.value);
//     setSelectedSession(null); // Reset the selected session when type changes
//   };

//   const handleSessionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const sessionId = parseInt(e.target.value);
//     const selected = sessions.find(
//       (session) => session.sessionid === sessionId
//     );
//     setSelectedSession(selected || null);
//   };

//   const renderVideoPlayer = (session: Session) => {
//     if (
//       session.link.includes("youtu.be") ||
//       session.link.includes("youtube.com")
//     ) {
//       const youtubeId = session.link.split("/").pop();
//       const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
//       return (
//         <iframe
//           width="100%"
//           height="350"
//           src={youtubeEmbedUrl}
//           title={session.title}
//           frameBorder="0"
//           allowFullScreen
//           className="h-[350px] rounded-xl border-2 border-gray-500"
//         ></iframe>
//       );
//     } else {
//       return <video src={session.link} controls className="mb-2 w-full" />;
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
//         Loading&nbsp;
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
//         >
//           <circle cx="4" cy="12" r="3" fill="currentColor">
//             <animate
//               id="svgSpinners3DotsScale0"
//               attributeName="r"
//               begin="0;svgSpinners3DotsScale1.end-0.2s"
//               dur="0.6s"
//               values="3;.2;3"
//             />
//           </circle>
//           <circle cx="12" cy="12" r="3" fill="currentColor">
//             <animate
//               attributeName="r"
//               begin="svgSpinners3DotsScale0.end-0.48s"
//               dur="0.6s"
//               values="3;.2;3"
//             />
//           </circle>
//           <circle cx="20" cy="12" r="3" fill="currentColor">
//             <animate
//               id="svgSpinners3DotsScale1"
//               attributeName="r"
//               begin="svgSpinners3DotsScale0.end-0.36s"
//               dur="0.6s"
//               values="3;.2;3"
//             />
//           </circle>
//         </svg>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto mt-6 max-w-full flex-grow space-y-4 sm:mt-0 sm:max-w-3xl">
//       <div className="flex flex-grow flex-col">
//         <label htmlFor="dropdown1">Session Type:</label>
//         <select
//           id="dropdown1"
//           className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           <option value="" disabled>
//             Please select a session type...
//           </option>
//           {Array.from(new Set(sessions.map((session) => session.type))).map(
//             (type) =>
//               type && (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               )
//           )}
//         </select>
//       </div>
//       <div className="flex flex-grow flex-col">
//         <label htmlFor="dropdown2">Session Name:</label>
//         <select
//           id="dropdown2"
//           className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
//           value={selectedSession ? selectedSession.sessionid.toString() : ""}
//           onChange={handleSessionSelect}
//           disabled={!selectedType || filteredSessions.length === 0}
//         >
//           <option value="" disabled>
//             Please select a session name...
//           </option>
//           {filteredSessions.map((session) => (
//             <option key={session.sessionid} value={String(session.sessionid)}>
//               {session.title}
//             </option>
//           ))}
//         </select>
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       {selectedSession && <div>{renderVideoPlayer(selectedSession)}</div>}
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Session = {
  sessionid: number;
  title: string;
  type: string;
  link: string;
};

type SessionResponse = {
  sessions: Session[];
};

type TypeResponse = {
  types: string[];
};

export default function SessionComp() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course"); // Get course from URL params

  const [types, setTypes] = useState<string[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTypes();
  }, []);

  useEffect(() => {
    if (selectedType) {
      fetchSessions();
    } else {
      setSessions([]);
      setSelectedSession(null);
    }
  }, [selectedType]);

  const fetchTypes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types`);
      if (!response.ok) {
        throw new Error("Failed to fetch types");
      }
      const data: TypeResponse = await response.json();
      // Map over the array of objects and extract the 'type' field to set as an array of strings
      setTypes(data.types.map((typeObj) => typeObj.type)); 
      setError(null);
      console.log("Fetched types:", data.types); // Debug log
    } catch (error) {
      console.error("Error fetching types:", error);
      setError("Failed to load types. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const fetchSessions = async () => {
    try {
      setIsLoading(true);
      const accessToken = localStorage.getItem("access_token");
  
      // Map the course name to the course_id
      const courseMapping = {
        "QA": 1,
        "UI": 2,
        "ML": 3,
      };
  
      // Get the course_id from the courseMapping
      const courseId = courseMapping[course];  // 'course' is the selected course name
  
      if (!courseId) {
        throw new Error("Invalid course name");
      }
  
      // Construct the URL with course_id and selectedType
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sessions?course_id=${courseId}&type=${selectedType}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch sessions");
      }
  
      const data: SessionResponse = await response.json();
      setSessions(data.sessions);
      setError(null);
      console.log("Fetched sessions:", data.sessions); // Debug log
    } catch (error) {
      console.error("Error fetching sessions:", error);
      setError("Failed to load sessions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setSelectedSession(null); // Reset the selected session when type changes
  };

  const handleSessionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sessionId = parseInt(e.target.value);
    const selected = sessions.find((session) => session.sessionid === sessionId);
    setSelectedSession(selected || null);
    console.log("Selected session:", selected); // Debug log
  };

  const renderVideoPlayer = (session: Session) => {
    if (session.link.includes("youtu.be") || session.link.includes("youtube.com")) {
      const youtubeId = session.link.split("/").pop();
      const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
      return (
        <iframe
          width="100%"
          height="350"
          src={youtubeEmbedUrl}
          title={session.title}
          frameBorder="0"
          allowFullScreen
          className="h-[350px] rounded-xl border-2 border-gray-500"
        ></iframe>
      );
    } else {
      return <video src={session.link} controls className="mb-2 w-full" />;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto mt-6 max-w-full flex-grow space-y-4 sm:mt-0 sm:max-w-3xl">
      <div className="flex flex-grow flex-col">
        <label htmlFor="typeDropdown">Session Type:</label>
        <select
          id="typeDropdown"
          className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="" disabled>
            Please select a session type...
          </option>
          {types.map((type) => (
  <option key={type} value={type}>
    {type}
  </option>
))}

        </select>
      </div>
      <div className="flex flex-grow flex-col">
        <label htmlFor="sessionDropdown">Session Name:</label>
        <select
          id="sessionDropdown"
          className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
          value={selectedSession ? selectedSession.sessionid.toString() : ""}
          onChange={handleSessionSelect}
          disabled={!selectedType || sessions.length === 0}
        >
          <option value="" disabled>
            Please select a session name...
          </option>
          {sessions.map((session) => (
            <option key={session.sessionid} value={String(session.sessionid)}>
              {session.title}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {selectedSession && <div>{renderVideoPlayer(selectedSession)}</div>}
    </div>
  );
}
