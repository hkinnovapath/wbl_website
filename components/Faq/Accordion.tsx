'use client'
import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b  text-blue-500 dark:border-gray-800 border-gray-300 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full  flex justify-between items-center p-4 focus:outline-none dark:hover:bg-blue-900 hover:bg-gray-300 transition-colors duration-300"
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t dark:bg-transparent dark:border-gray-800 border-gray-200 bg-gray-50">
          <p className="text-gray-900 dark:text-white">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
