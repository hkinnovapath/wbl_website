// import Layout from "../../components/Common/Layout";
// import ContactForm from "@/components/Contact/ContactForm";
// const ContactPage = () => {
//   return (
//     <>
//       <div className="mx-auto  w-3/4 px-4 py-6 text-white  sm:px-6">
//         <nav className="mt-16   flex items-center justify-between ">
//           {/* <div className=""> */}
//             <h1 className="text-4xl font-bold text-black dark:text-white">Contact Page</h1>
//           <div className="hidden md:block">
//             {/* <Breadcrumb /> */}
//             <Layout currentPage="ContactPage">{/* Page content */}</Layout>
//           </div>
//         </nav>
//         <div className="md:flex">
//           <div className="md:3/4  w-full ">
//             <ContactForm />
//           </div>         
//         </div>
//         <div className=" ">
//           <h1 className="mb-4 text-4xl  text-black  dark:text-white font-bold">How to find us</h1>
//           <iframe 
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.692512341928!2d-121.91246142459563!3d37.703419816267946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec05cb8a6a33%3A0x50cb7964adacbf25!2sWhitebox%20Learning%20Inc!5e0!3m2!1sen!2sin!4v1714515428412!5m2!1sen!2sin"
//             className="h-96 w-full rounded-lg shadow-2xl shadow-black brightness-90"
//             frameBorder="0"
//             aria-hidden="false"
//           ></iframe>
//         </div>
//       </div>
 
//     </>
//   );
// };

// export default ContactPage;

import Layout from "../../components/Common/Layout";
import ContactForm from "@/components/Contact/ContactForm";
const ContactPage = () => {
  return (
    <>
      <div className=" w-full mx-auto max-w-6xl px-4 pt-4 sm:px-6 text-white ">
        <nav className="pt-6 mt-16 flex-none md:flex sm:items-center sm:justify-between ">
          <h1 className="text-center text-2xl font-bold sm:py-0 sm:text-3xl lg:text-4xl  text-black dark:text-white">
            Contact Us
          </h1>
          <div className="hidden md:block">
         <Layout currentPage="Contact"/>
         </div>
        </nav>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full ">
            <ContactForm />
          </div>
        </div>
        <div  >
          <h1 className="text-center   sm:text-left  text-2xl font-bold  sm:text-3xl lg:text-4xl mb-4  text-black dark:text-white">
            How to find us
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.692512341928!2d-121.91246142459563!3d37.703419816267946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec05cb8a6a33%3A0x50cb7964adacbf25!2sWhitebox%20Learning%20Inc!5e0!3m2!1sen!2sin!4v1714515428412!5m2!1sen!2sin"
            className="h-96 w-full mb-8 rounded-lg shadow-2xl  brightness-90"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
