// // frontend/utils/ModalContext.js
// import React, { createContext, useContext, useState } from 'react';

// const ModalContext = createContext();

// export const ModalProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [title, setTitle] = useState('');
//   const [message, setMessage] = useState('');

//   const openModal = (modalTitle, modalMessage) => {
//     setTitle(modalTitle);
//     setMessage(modalMessage);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <ModalContext.Provider value={{ isOpen, title, message, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

// export const useModal = () => {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error("useModal must be used within a ModalProvider");
//   }
//   return context;
// };
