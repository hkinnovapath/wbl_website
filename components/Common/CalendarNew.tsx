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
