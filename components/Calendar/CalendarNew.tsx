// "use client";
// import { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import googleCalendarPlugin from "@fullcalendar/google-calendar";

// // import Footer from "./ui/footer";

// const Calendar = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // Google Calendar API configuration
//   const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
//   const googleCalendarId =
//     "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

//   return (
//     <div className="border p-4  dark:border-gray-800">
//       <FullCalendar
//         plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
//         initialView="timeGridWeek"
//         headerToolbar={{
//           left: "prev,next",
//           center: "title",
//           right: "timeGridWeek,timeGridDay,timeGridMonth",
//         }}
//         googleCalendarApiKey={googleCalendarApiKey}
//         events={{
//           googleCalendarId: googleCalendarId,
//           color: "grey",
//           borderColor: "black",
//           textColor: "white",
//         }}
//       />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Calendar;

"use client";
import { useState } from "react";
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

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="rounded-lg border bg-white p-6 text-black shadow-md dark:border-gray-800 dark:bg-gray-500">
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
  );
};

export default Calendar;
