// import React from "react";

// const Calendar = () => {
//   return (
//     <div className="w-full h-full">
//       <iframe
//         src="https://calendar.google.com/calendar/u/0/embed?title=%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0whitebox-learning&showPrint=0&mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com&color=%23182C57&ctz=America/Los_Angeles&pli=1"
//         className="w-full h-full"
//         frameBorder="0"
//         scrolling="no"
//       ></iframe>
//     </div>
//   );
// };

// export default Calendar;
// "use client";

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// export default function Calendar() {
//   return (
//     <FullCalendar
//       plugins={[ dayGridPlugin ]}
//       initialView="dayGridMonth"
//     />
//   )
// }
"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// import Footer from "./ui/footer";

const Example = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Google Calendar API configuration
  const googleCalendarApiKey = "AIzaSyDOp2lKANdmMhBRNZWBXA97pQOgF_yoQ3Q";
  const googleCalendarId =
    "q84dbo0ucqc7evjifhajadmo80@group.calendar.google.com";

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay,timeGridMonth",
        }}
        googleCalendarApiKey={googleCalendarApiKey}
        events={{
          googleCalendarId: googleCalendarId,
          color: "grey",
          borderColor: "black",
          textColor: "white",
        }}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default Example;
