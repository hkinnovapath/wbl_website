import Image from "next/image";
import TestimonialImage01 from "@/public/images/courses/fullstack development.jpeg"; // Replace with the actual path
import TestimonialImage02 from "@/public/images/courses/datascience.jpg"; // Replace with the actual path
import TestimonialImage03 from "@/public/images/test3.jpg"; // Replace with the actual path

export default function Cards() {
  return (
    <div className="mx-auto  grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
      {/* 1st testimonial */}
      <div
        className="h-100 flex flex-col rounded-2xl border border-blue-900 p-6 shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div>
          {/* <div className="relative inline-flex flex-col mb-4"> */}
          <Image
            className="rounded-xl"
            src={TestimonialImage01}
            width={300}
            height={250}
            alt="Testimonial 01"
          />
          {/* <svg
              className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg> */}
          {/* </div> */}
        </div>
        <h1 className="mt-3 text-center text-2xl font-bold">
          Fullstack Developer
        </h1>

        <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
          <cite className="not-italic text-gray-200"></cite>{" "}
          <a
            className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
            href="http://uiprogrammer.com/"
          >
            Visit
          </a>
        </div>
      </div>

      {/* 2nd testimonial */}
      <div
        className="h-100 flex flex-col  rounded-2xl border border-blue-900 p-6  shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div>
          {/* <div className="relative inline-flex flex-col mb-4"> */}
          <Image
            className="rounded-xl"
            src={TestimonialImage02}
            width={300}
            height={250}
            alt="Testimonial 02"
          />
          {/* <svg
              className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg> */}
          {/* </div> */}
        </div>
        <h1 className="mt-3 text-center text-2xl font-bold">
          Machine Learning
        </h1>

        <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
          <cite className="not-italic text-gray-200"></cite>{" "}
          <a
            className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
            href="http://uiprogrammer.com/"
          >
            Visit
          </a>
        </div>
      </div>

      {/* 3rd testimonial */}
      <div
        className="h-100  flex  flex-col rounded-2xl border border-blue-900 p-6 shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div>
          {/* <div className="relative inline-flex flex-col mb-4"> */}
          <Image
            className="rounded-xl"
            src={TestimonialImage03}
            width={300}
            height={250}
            alt="Testimonial 03"
          />
          {/* <svg
              className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
              viewBox="0 0 24 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg> */}
          {/* </div> */}
        </div>
        <h1 className="mt-3 text-center text-2xl font-bold">
          Data Engineering
        </h1>

        <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-green-700">
          <cite className="not-italic text-green-600"></cite>{" "}
          <a
            className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
            href="http://uiprogrammer.com/"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
