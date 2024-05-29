// import Contact from "@/components/Contact";
// import ContactDetails from "@/components/Contact/ContactDetails";
import Layout from "../../components/Common/Layout";
import ContactForm from "@/components/Contact/ContactForm";
// import Layout from "@/components/Layout";
const ContactPage = () => {
  return (
    <>
      <div className="mx-auto  w-3/4 px-4 py-6 text-white  sm:px-6">
        <nav className="mt-16   flex items-center justify-between ">
          {/* <div className=""> */}
            <h1 className="text-4xl font-bold text-black dark:text-white">Contact Page</h1>
            {/* <h1 className="text-xl font-light">Get in touch</h1>
            <h1 className="font-semibold">We'd love to hear from you.</h1> */}
          {/* </div> */}
          <div className="hidden md:block">
            {/* <Breadcrumb /> */}
            <Layout currentPage="ContactPage">{/* Page content */}</Layout>
          </div>
        </nav>
        <div className="md:flex">
          <div className="md:3/4  w-full ">
            <ContactForm />
          </div>         
        </div>
        <div className=" ">
          <h1 className="mb-4 text-4xl  text-black  dark:text-white font-bold">How to find us</h1>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.692512341928!2d-121.91246142459563!3d37.703419816267946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fec05cb8a6a33%3A0x50cb7964adacbf25!2sWhitebox%20Learning%20Inc!5e0!3m2!1sen!2sin!4v1714515428412!5m2!1sen!2sin"
            className="h-96 w-full rounded-lg shadow-2xl shadow-black brightness-90"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
 
    </>
  );
};

export default ContactPage;
