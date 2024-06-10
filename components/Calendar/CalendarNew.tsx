// "use client";
// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";

// const Calendar = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Google Calendar API configuration
//   const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
//   const googleCalendarId =
//     "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

//   return (
//     <div className="container mx-auto max-w-4xl p-4">
//       <div className="rounded-lg border bg-white p-6 text-black shadow-md dark:border-gray-800 dark:bg-gray-500">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
//           initialView="timeGridWeek"
//           initialDate={new Date().toISOString().split("T")[0]} // Start from today
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,timeGridWeek,timeGridDay",
//           }}
//           googleCalendarApiKey={googleCalendarApiKey}
//           events={{
//             googleCalendarId: googleCalendarId,
//             color: "grey",
//             borderColor: "black",
//             textColor: "white",
//           }}
//           slotMinTime="08:00:00" // Start time at 8 AM
//           height="auto" // Adjust the height to make it responsive
//         />
//       </div>
//     </div>
//   );
// };

// export default Calendar;

// "use client";
// import { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";

// const Calendar = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Google Calendar API configuration
//   const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
//   const googleCalendarId =
//     "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

//   // Function to add custom classes to FullCalendar toolbar elements
//   const addCustomClasses = () => {
//     const toolbar = document.querySelector(".fc-header-toolbar");
//     if (toolbar) {
//       toolbar.classList.add("flex", "flex-col", "sm:flex-row");
//       const toolbarSections = toolbar.querySelectorAll(".fc-toolbar-chunk");
//       toolbarSections.forEach((section) => {
//         section.classList.add("mb-2", "sm:mb-0", "sm:mr-4");
//       });
//     }

//     const calendarTitle = document.querySelector(".fc-toolbar-title");
//     if (calendarTitle) {
//       calendarTitle.classList.add(
//         "text-sm",
//         "sm:text-base",
//         "md:text-md",
//         "lg:text-lg"
//       );
//     }

//     const calendarButtons = document.querySelectorAll(".fc-button");
//     calendarButtons.forEach((button) => {
//       button.classList.add("text-xs", "sm:text-sm", "lg:text-base");
//     });
//   };

//   useEffect(() => {
//     addCustomClasses();
//   }, []);

//   return (
//     <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
//       <div className="rounded-lg border bg-white p-4 text-black shadow-md dark:border-gray-800 dark:bg-gray-500 sm:p-6 lg:p-8">
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
//           initialView="timeGridWeek"
//           initialDate={new Date().toISOString().split("T")[0]} // Start from today
//           headerToolbar={{
//             left: "prev,next today",
//             center: "title",
//             right: "dayGridMonth,timeGridWeek,timeGridDay",
//           }}
//           googleCalendarApiKey={googleCalendarApiKey}
//           events={{
//             googleCalendarId: googleCalendarId,
//             color: "grey",
//             borderColor: "black",
//             textColor: "white",
//           }}
//           slotMinTime="08:00:00" // Start time at 8 AM
//           height="auto" // Adjust the height to make it responsive
//         />
//       </div>
//     </div>
//   );
// };

// export default Calendar;



"use client";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Google Calendar API configuration
  const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
  const googleCalendarId =
    "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

  // Function to add custom classes to FullCalendar toolbar elements
  const addCustomClasses = () => {
    const toolbar = document.querySelector(".fc-header-toolbar");
    if (toolbar) {
      toolbar.classList.add("flex", "flex-col", "sm:flex-row");
      const toolbarSections = toolbar.querySelectorAll(".fc-toolbar-chunk");
      toolbarSections.forEach((section) => {
        section.classList.add("mb-2", "sm:mb-0", "sm:mr-4");
      });
    }

    const calendarTitle = document.querySelector(".fc-toolbar-title");
    if (calendarTitle) {
      calendarTitle.classList.add(
        "text-sm",
        "sm:text-base",
        "md:text-md",
        "lg:text-lg"
      );
    }

    const calendarButtons = document.querySelectorAll(".fc-button");
    calendarButtons.forEach((button) => {
      button.classList.add("text-xs", "sm:text-sm", "lg:text-base","!capitalize");
    });
  };

  useEffect(() => {
    addCustomClasses();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
      <div className="rounded-lg border bg-white p-4 text-black shadow-md dark:border-gray-800 dark:bg-gray-500 sm:p-6 lg:p-8">
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
              initialView="timeGridWeek"
              initialDate={new Date().toISOString().split("T")[0]} // Start from today
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              googleCalendarApiKey={googleCalendarApiKey}
              events={{
                googleCalendarId: googleCalendarId,
                color: "grey",
                borderColor: "black",
                textColor: "white",
              }}
              slotMinTime="08:00:00" // Start time at 8 AM
              height="auto" // Adjust the height to make it responsive
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
