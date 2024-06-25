import ContactDetails from "./ContactDetails";

const ContactForm = () => {
  return (
    <section id="contact" className="w-full  overflow-hidden pb-16 ">
      <div className="container">
        {/* <div className="-mx-4 flex flex-wrap"> */}
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full  lg:w-7/12 xl:w-8/12 ">
            <div
              className="wow fadeInUp  rounded-2xl"
              data-wow-delay=".15s
              "
            >
              <div className="flex min-h-screen flex-col  justify-start py-6 sm:justify-center sm:py-4">
                <div className="relative py-3 sm:mx-auto sm:max-w-xl">
                  <div className="absolute inset-0 hidden -skew-y-6 transform bg-gradient-to-r from-indigo-300 to-purple-400 shadow-lg dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-500 sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl md:block"></div>
                  <div className=" relative rounded-3xl bg-gradient-to-br  from-pink-400 to-sky-200 px-10 py-10 text-white   shadow-lg dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500 sm:p-16">
                    <div className="pb-6 text-center">
                      <h1 className="text-lg font-bold  text-black dark:text-white sm:text-2xl md:text-3xl">
                        Get in touch!
                      </h1>
                      <p className="md:text-md text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
                        We&apos;d love to hear from you.
                      </p>
                      <p className="md:text-md text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
                        Fill up the form below to send us a message.
                      </p>
                    </div>
                    <form
                      action="#"
                      className="md:text-md text-xs text-black dark:text-white sm:text-sm "
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
                      <div className="flex justify-between gap-3 sm:gap-5">
                        <input
                          className="
                          md:text-md focus:shadow-outline w-36
                          
                          rounded-lg bg-gradient-to-br  from-indigo-500 to-indigo-200  p-1  px-1 text-[11px] font-bold text-black hover:bg-indigo-700 hover:from-indigo-500 hover:to-indigo-200 focus:outline-none dark:text-white sm:py-2 sm:px-4 sm:text-sm"
                          type="submit"
                          value="Send ➤"
                        />
                        <input
                          className="
                          md:text-md focus:shadow-outline  w-36
                          rounded-lg bg-gradient-to-br  from-red-500 to-red-200 p-1 px-1 text-[11px] font-bold text-black shadow-xl hover:bg-red-700 hover:bg-gradient-to-tl hover:from-red-500 hover:to-red-200 focus:outline-none dark:text-white sm:py-2  sm:px-4 sm:text-sm"
                          type="reset"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto  flex  items-center justify-center  py-3 sm:mx-auto  sm:max-w-xl  lg:w-5/12 xl:w-4/12">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
