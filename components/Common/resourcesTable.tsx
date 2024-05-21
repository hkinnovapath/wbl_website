import React from 'react';

const ResourcesTable = (props: any) => {
  return (
    <div className="overflow-x-auto">
      <table className="shadow-2xl shadow-gray-800 table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border border-gray-500 bg-primary  text-white w-1/4 sm:w-1/6 md:w-1/6 lg:w-1/4 px-4 py-2 mb-1">Serial No.</th>
            <th className="border border-gray-500 bg-primary text-white w-3/4 sm:w-5/6 md:w-5/6 lg:w-3/4 px-4 py-2 mb-1">Subject Name</th>
          </tr>
        </thead>
        <tbody>
          {props.subjects.map((subject: any, index: any) => (
            <tr
              key={subject.id}
              className={`hover:bg-gray-200 dark:hover:bg-dark  ${index % 2 === 0 ? 'dark:bg-gray-700 bg-gray-100' : 'dark:bg-dark bg-gray-200'}`} // Alternate row colors
            >
              <td className="border text-black dark:text-white text-center    dark:border-blue-900 border-primary px-4 py-2">{index + 1}</td>
              <td className="border dark:text-blue-300 text-blue-600 text-center   dark:border-blue-900 border-primary px-4 py-2">
                <a href={subject.pdfUrl} target='_blank'>{subject.name}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesTable;
