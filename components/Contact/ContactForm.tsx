import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    // <section id="contact" className="border overflow-hidden  py-16 md:py-20 lg:py-28">
    <section id="contact" className="  pb-10 overflow-hidden ">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap  ">
          <div className="   px-4   w-full  lg:w-7/12 xl:w-8/12  ">
            <div
              // className="wow   fadeInUp mb-12  rounded-2xl  py-11 px-8   lg:mb-5 lg:px-8 sm:p-[55px]  xl:p-[55px]"
              className="wow   fadeInUp mb-12  rounded-2xl  py-2  px-8   lg:mb-5 lg:px-8"
              data-wow-delay=".15s
              "
            >
              {/* <div className="flex border border-red-700  min-h-screen flex-col justify-center py-6 sm:py-12"> */}
              <div className="flex  min-h-screen flex-col justify-center py-6 sm:py-4">
                <div className="relative py-3 sm:mx-auto sm:max-w-xl">
                  <div className="absolute inset-0 -skew-y-6 transform dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-500 bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
                  {/* <div className="relative bg-indigo-400 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20"> */}
                  <div className="relative bg-gradient-to-br from-pink-400 to-sky-200 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="pb-6 text-center">
                      <h1 className="text-3xl dark:text-white text-black" >Get in touch!</h1>
                      <p className="dark:text-gray-300 text-gray-700">
                        We&apos;d love to hear from you.
                      </p>
                      <p className="dark:text-gray-300 text-gray-700">
                        Fill up the form below to send us a message.
                      </p>
                    </div>
                    <form action="#" className="dark:text-white text-black " method="post" >
                      <label htmlFor="name" className="mb-2 block">
                        Name:
                      </label>{" "}
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 bg-white shadow focus:outline-none"
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                      />
                      <label htmlFor="email" className="mb-2 block">
                        Email:
                      </label>
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight bg-white text-gray-700 shadow focus:outline-none"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                      />
                      <label htmlFor="email" className="mb-2 block">
                        Phone:
                      </label>
                      <input
                        className="focus:shadow-outline mb-4 w-full appearance-none rounded border py-2 px-3 leading-tight bg-white text-gray-700 shadow focus:outline-none"
                        type="tel"
                        placeholder="Enter Your Phone"
                        name="_subject"
                      />
                      <label htmlFor="message" className="mb-2 block">
                        Message:
                      </label>
                      <textarea
                        className="focus:shadow-outline mb-4 h-64 min-h-0 w-full appearance-none rounded border py-2 px-3 bg-white leading-tight text-gray-700 shadow focus:outline-none"
                        // type="text"
                        placeholder="Type your message here..."
                        name="message"
                        style={{ height: "121px" }}
                      ></textarea>
                      <div className="flex justify-between">
                        <input
                          className="focus:shadow-outline rounded-lg shadow-xl bg-indigo-600 py-2 px-4 font-bold text-white  w-36 hover:bg-indigo-700 focus:outline-none"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="focus:shadow-outline rounded-lg bg-red-600 py-2 px-4 font-bold text-white shadow-xl w-36  hover:bg-red-700 focus:outline-none"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
