import Calendar from "@/components/Common/CalendarNew";
import React from "react";

const Schedule = () => {
  return (
    <div className="lg:w-4/5 flex flex-col mx-auto w-10 pt-32 pb-10 md:pt-40 md:pb-16 overflow-y-auto">
      {/* // <div className=" px-4 sm:px-6 w-full md:w-4/5 lg:w-4/5 h-screen flex flex-col">
    // <div className="lg:w-4/5 h-screen flex flex-col flex-grow mx-auto w-full pt-32 pb-10 md:pt-40 md:pb-16"> */}
      <Calendar />
      
    </div>
    // </div>
  );
};

export default Schedule;
