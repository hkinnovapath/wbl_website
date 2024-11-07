// // frontend/components/Common/Modal.js
// import React from "react";

// // Define the props for the Modal component
// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   message: string;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
//         <h2 className="text-lg font-bold mb-4">{title}</h2>
//         <p className="mb-4">{message}</p>
//         <button
//           onClick={onClose}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
