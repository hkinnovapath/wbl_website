import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <section id="contact" className="w-full overflow-hidden   pb-10 ">
      <div className="container ">
        {/* <div className="-mx-4 flex flex-wrap  "> */}
        <div className="-mx-4 flex flex-wrap">
          <div className="   w-full   px-4  lg:w-7/12 xl:w-8/12  ">
            <div
              className="wow   fadeInUp mb-12  rounded-2xl  py-2  px-8   lg:mb-5 lg:px-8"
              data-wow-delay=".15s
              "
            >
              <div className="flex  min-h-screen flex-col justify-center py-6 sm:py-4">
                <div className="relative  py-3 sm:mx-auto sm:max-w-xl">
                  <div className="absolute inset-0 hidden -skew-y-6 transform bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-500 sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl md:block"></div>
                  <div className="relative  rounded-3xl bg-gradient-to-br from-pink-400 to-sky-200 p-14 py-10  text-white shadow-lg dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500">
                    <div className="pb-6  text-center">
                      <h1 className="text-lg font-bold sm:text-2xl md:text-3xl text-black dark:text-white">
                        Get in touch!
                      </h1>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-md">
                        We&apos;d love to hear from you.
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-md">
                        Fill up the form below to send us a message.
                      </p>
                    </div>
                    <form
                      action="#"
                      className="text-xs sm:text-sm md:text-md text-black dark:text-white "
                      method="post"
                    >
                      <label htmlFor="name" className="mb-2 block">
                        Name:
                      </label>{" "}
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded  bg-white py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                      />
                      <label htmlFor="email" className="mb-2 block">
                        Email:
                      </label>
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded  bg-white py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                      />
                      <label htmlFor="email" className="mb-2 block">
                        Phone:
                      </label>
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded  bg-white py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        type="tel"
                        placeholder="Enter Your Phone"
                        name="_subject"
                      />
                      <label htmlFor="message" className="mb-2 block">
                        Message:
                      </label>
                      <textarea
                        className="focus:shadow-outline mb-4 h-64 min-h-0 w-full appearance-none rounded  bg-white py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        placeholder="Type your message here..."
                        name="message"
                        style={{ height: "121px" }}
                      ></textarea>
                      <div className="flex gap-5 justify-between">
                        <input
                          className="focus:shadow-outline w-36  rounded-lg bg-gradient-to-br  from-indigo-500  to-indigo-200 py-2 px-4 font-bold text-black hover:bg-indigo-700 hover:from-indigo-500 hover:to-indigo-200 focus:outline-none dark:text-white"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="focus:shadow-outline w-36  rounded-lg bg-gradient-to-br from-red-500 to-red-200 py-2 px-4 font-bold text-black shadow-xl hover:bg-red-700 hover:bg-gradient-to-tl hover:from-red-500 hover:to-red-200  focus:outline-none dark:text-white"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto  flex items-center justify-center  py-3 sm:mx-auto     sm:max-w-xl  lg:w-5/12 xl:w-4/12">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import ContactDetails from "./ContactDetails";

// const Contact = () => {
//   return (
//     <section id="contact" className=" pb-10  overflow-hidden">
//       <div className="container ">
//         <div className="flex flex-wrap  w-full">
//           <div className="   lg:w-7/12  xl:w-8/12 px-4 mb-8 lg:mb-0">
//             <div
//               className="wow fadeInUp mb-12 rounded-2xl py-2 px-8 lg:mb-5 lg:px-8"
//               data-wow-delay=".15s"
//             >
//               <div className="flex flex-col justify-center py-6 sm:py-4">
//                 <div className="relative py-3 sm:mx-auto sm:max-w-xl">
//                   <div className="absolute inset-0 -skew-y-6 transform dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-500 bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
//                   <div className="relative bg-gradient-to-br from-pink-400 to-sky-200 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="pb-6 text-center">
//                       <h1 className="text-3xl dark:text-white text-black">Get in touch!</h1>
//                       <p className="dark:text-gray-300 text-gray-700">
//                         We'd love to hear from you.
//                       </p>
//                       <p className="dark:text-gray-300 text-gray-700">
//                         Fill up the form below to send us a message.
//                       </p>
//                     </div>
//                     <form action="#" method="post" className="dark:text-white text-black">
//                       <label htmlFor="name" className="mb-2 block">
//                         Name:
//                       </label>
//                       <input
//                         className="focus:shadow-outline mb-4 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 bg-white shadow focus:outline-none"
//                         type="text"
//                         placeholder="Enter Your Name"
//                         name="name"
//                       />
//                       <label htmlFor="email" className="mb-2 block">
//                         Email:
//                       </label>
//                       <input
//                         className="focus:shadow-outline mb-4 w-full appearance-none rounded  py-2 px-3 leading-tight bg-white text-gray-700 shadow focus:outline-none"
//                         type="email"
//                         placeholder="Enter Your Email"
//                         name="email"
//                       />
//                       <label htmlFor="phone" className="mb-2 block">
//                         Phone:
//                       </label>
//                       <input
//                         className="focus:shadow-outline mb-4 w-full appearance-none rounded  py-2 px-3 leading-tight bg-white text-gray-700 shadow focus:outline-none"
//                         type="tel"
//                         placeholder="Enter Your Phone"
//                         name="_subject"
//                       />
//                       <label htmlFor="message" className="mb-2 block">
//                         Message:
//                       </label>
//                       <textarea
//                         className="focus:shadow-outline mb-4 w-full appearance-none rounded  py-2 px-3 bg-white leading-tight text-gray-700 shadow focus:outline-none"
//                         placeholder="Type your message here..."
//                         name="message"
//                         style={{ height: "121px" }}
//                       ></textarea>
//                       <div className="flex justify-between">
//                         <input
//                           className="focus:shadow-outline rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-200 hover:from-indigo-500 hover:to-indigo-200 py-2 px-4 font-bold dark:text-white text-black w-full lg:w-auto hover:bg-indigo-700 focus:outline-none"
//                           type="submit"
//                           value="Send ➤"
//                         />
//                         <input
//                           className="focus:shadow-outline rounded-lg bg-gradient-to-br from-red-500 to-red-200 hover:from-red-500 hover:to-red-200 py-2 px-4 font-bold dark:text-white text-black shadow-xl w-full lg:w-auto mt-4 lg:mt-0 hover:bg-red-700 focus:outline-none"
//                           type="reset"
//                           value="Reset"
//                         />
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <ContactDetails />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
