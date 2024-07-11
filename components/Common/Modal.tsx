// import React from "react";

// const Modal = ({ title, message, onClose }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 rounded-md shadow-md max-w-sm w-full">
//         <h2 className="text-xl font-bold mb-2">{title}</h2>
//         <p className="mb-4">{message}</p>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// components/Modal.js

import React from "react";

const Modal = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-600">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-500">{message}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
