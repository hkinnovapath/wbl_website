import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.17157 12.5858C8.78105 12.1953 8.78105 11.5622 9.17157 11.1717L12 8.34315L14.8284 11.1717C15.2189 11.5622 15.2189 12.1953 14.8284 12.5858C14.4379 12.9763 13.8047 12.9763 13.4142 12.5858L12 11.1717L10.5858 12.5858C10.1953 12.9763 9.56218 12.9763 9.17157 12.5858Z"
            fill="currentColor"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-white">
          <p className="text-gray-800">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
