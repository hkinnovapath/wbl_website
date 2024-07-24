// import React, { useState } from "react";
// import { useRouter, usePathname } from "next/navigation";
// const CourseNavigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("ML");
//   const router = useRouter();
//   const path = usePathname();

//   const handleNavigation = (course) => {
//     setSelectedOption(course);
//     setIsOpen(false); // Close the dropdown after selection
//     router.push(`${path}?course=${course}`);
//   };

//   return (
//     <div className="mt-10 flex justify-center sm:w-1/3">
//       <div className="flex w-60 flex-col">
//         <div className="relative">
//           <button
//             className="flex w-full items-center rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-20"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {selectedOption}
//             <span className="pl-3">
//               <svg width="15" height="14" viewBox="0 0 15 14">
//                 <path
//                   d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </span>
//           </button>
//           {isOpen && (
//             <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg sm:w-44">
//               <button
//                 className="block w-full px-4 py-2 text-left text-black hover:bg-blue-100"
//                 onClick={() => handleNavigation("ML")}
//               >
//                 Machine Learning
//               </button>
//               <button
//                 className="block w-full px-4 py-2 text-left text-black hover:bg-blue-100"
//                 onClick={() => handleNavigation("UI")}
//               >
//                 UI Fullstack
//               </button>
//               <button
//                 className="block w-full px-4 py-2 text-left text-black hover:bg-blue-100"
//                 onClick={() => handleNavigation("QA")}
//               >
//                 Quality Engineer
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseNavigation;




import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const CourseNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Machine Learning");
  const router = useRouter();
  const path = usePathname();

  const courseOptions = [
    { short: "ML", full: "Machine Learning" },
    { short: "UI", full: "UI Fullstack" },
    { short: "QA", full: "Quality Engineer" },
  ];

  const handleNavigation = (course) => {
    const selectedCourse = courseOptions.find((opt) => opt.short === course);
    setSelectedOption(selectedCourse.full);
    setIsOpen(false); // Close the dropdown after selection
    router.push(`${path}?course=${course}`);
  };

  return (
    <div className="mt-10 flex justify-center sm:w-1/3">
      <div className="flex w-60  flex-col">
        <div className="relative ">
          <button
            className="flex sm:w-52 w-full justify-between items-center rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            <span className="pl-3">
              <svg width="15" height="14" viewBox="0 0 15 14">
                <path
                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg sm:w-44">
              {courseOptions.map((option) => (
                <button
                  key={option.short}
                  className="block w-full px-4 py-2 text-left text-black hover:bg-blue-100"
                  onClick={() => handleNavigation(option.short)}
                >
                  {option.full}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;
