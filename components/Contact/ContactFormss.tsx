import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="bg-gray-200 text-black p-4 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Contact Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input type="text"  placeholder='Enter Your Name  ' id="name" name="name" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" placeholder='Enter Your Email ' id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Phone:</label>
        <input type="tel" placeholder='Enter Your Phone ' id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea id="message" placeholder='Enter Your Message .....'  name="message" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send message</button>
    </form>
  );
};

export default ContactForm;



// 'use client'
// import React, { useState } from "react";
// import axios from "axios";

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("/api/contact", formData);
//       alert("Message sent successfully");
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Error sending message. Please try again later.");
//     }
//   };

//   return (
//     <div className="w-3/4 mx-auto px-4 sm:px-6 py-12 mt-8">
//       <form onSubmit={handleSubmit} className="bg-gray-200 text-black p-4 rounded-md shadow-md">
//         <h2 className="text-lg font-bold mb-4">Contact Form</h2>
//         <div className="mb-4">
//           <label htmlFor="name" className="block mb-2">Name:</label>
//           <input type="text" placeholder="Enter Your Name" id="name" name="name" className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">Email:</label>
//           <input type="email" placeholder="Enter Your Email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="phone" className="block mb-2">Phone:</label>
//           <input type="tel" placeholder="Enter Your Phone" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md" onChange={handleChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block mb-2">Message:</label>
//           <textarea id="message" placeholder="Enter Your Message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md" onChange={handleChange}></textarea>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;
