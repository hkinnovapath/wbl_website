import React from "react";

const CourseContentTable = (props: any) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-500 shadow-2xl shadow-gray-800">
        <thead>
          <tr>
            <th className="mb-1 w-1/4 border border-gray-500  bg-primary px-4 py-2 text-xl text-blue-300 sm:w-1/6 md:w-1/6 lg:w-1/4">
              Week
            </th>
            <th className="mb-1 w-3/4 border border-gray-500 bg-primary px-4 py-2 text-xl text-blue-300 sm:w-5/6 md:w-5/6 lg:w-3/4">
              Morning
            </th>
            <th className="mb-1 w-1/4 border border-gray-500  bg-primary px-4 py-2 text-xl text-blue-300 sm:w-1/6 md:w-1/6 lg:w-1/4">
              Evening
            </th>
          </tr>
        </thead>
        <tbody>
          {props.subjects.map((subject: any, index: any) => (
            <tr
              key={subject.id}
              className={`hover:bg-gray-200 dark:hover:bg-blue-500  ${
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-transparent"
                  : "bg-gray-200 dark:bg-transparent"
              }`} // Alternate row colors
            >
              <td className="border border-primary px-4  py-2    text-center text-black dark:border-blue-900 dark:text-white">
                Week {index + 1}
              </td>
              <td className="border border-primary  px-4 py-2   text-center text-blue-600 dark:border-blue-900 dark:text-white">
                <p>{subject.name}</p>
                {/* <a href={subject.pdfUrl} target='_blank' rel="noreferrer">{subject.name}</a> */}
              </td>
              <td className="border border-primary  px-4 py-2   text-center text-blue-600 dark:border-blue-900 dark:text-white">
                <p>{subject.name2}</p>
                {/* <a href={subject.pdfUrl2} target='_blank' rel="noreferrer">{subject.name2}</a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseContentTable;
