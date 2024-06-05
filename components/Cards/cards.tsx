// import Image from "next/image";
// import TestimonialImage01 from "@/public/images/courses/fullstack development.jpeg"; // Replace with the actual path
// import TestimonialImage02 from "@/public/images/courses/datascience.jpg"; // Replace with the actual path
// import TestimonialImage03 from "@/public/images/test3.jpg"; // Replace with the actual path

// export default function Cards() {
//   return (
//     <div className="mx-auto  grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
//       {/* 1st testimonial */}
//       <div
//         className="h-100 flex flex-col rounded-2xl p-6 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         <div>
//           <Image
//             className="rounded-xl border dark:border-gray-700 "
//             src={TestimonialImage01}
//             width={300}
//             height={250}
//             alt="Testimonial 01"
//           />
//         </div>
//         <h1 className="mt-3 text-center text-2xl font-bold">
//           Fullstack Developer <a href=""></a>
//         </h1>

//         <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
//           <cite className="not-italic text-gray-200"></cite>{" "}
//           <a
//             className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
//             href="./signup"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </div>

//       {/* 2nd testimonial */}
//       <div
//         className="h-100 flex flex-col rounded-2xl p-6  shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         <div>
//           <Image
//             className="rounded-xl border dark:border-gray-700"
//             src={TestimonialImage02}
//             width={300}
//             height={250}
//             alt="Testimonial 02"
//           />
//         </div>
//         <h1 className="mt-3 text-center text-2xl font-bold">
//           Machine Learning
//         </h1>

//         <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
//           <cite className="not-italic text-gray-200"></cite>{" "}
//           <a
//             className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
//             href="./signup"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </div>

//       {/* 3rd testimonial */}
//       <div
//         className="h-100 flex flex-col  rounded-2xl  p-6 shadow-lg  shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
//         data-aos="fade-up"
//         data-aos-delay="400"
//       >
//         <div>
//           <Image
//             className="rounded-xl border dark:border-gray-700"
//             src={TestimonialImage03}
//             width={300}
//             height={250}
//             alt="Testimonial 03"
//           />
//         </div>
//         <h1 className="mt-3 text-center text-2xl font-bold">
//           Data Engineering
//         </h1>

//         <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-green-700">
//           <cite className="not-italic text-green-600"></cite>{" "}
//           <a
//             className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
//             href="./signup"
//           >
//             Enroll Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import TestimonialImage01 from "@/public/images/courses/fullstack development.jpeg"; // Replace with the actual path
import TestimonialImage02 from "@/public/images/courses/datascience.jpg"; // Replace with the actual path
import TestimonialImage03 from "@/public/images/test3.jpg"; // Replace with the actual path

export default function Cards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1st testimonial */}
        <div
          className="flex flex-col rounded-2xl p-6 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center">
            <Image
              className="rounded-xl border dark:border-gray-700"
              src={TestimonialImage01}
              width={300}
              height={250}
              alt="Testimonial 01"
            />
          </div>
          <h1 className="mt-3 text-center text-2xl font-bold">
            Fullstack Developer <a href=""></a>
          </h1>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./signup"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* 2nd testimonial */}
        <div
          className="flex flex-col rounded-2xl p-6 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center">
            <Image
              className="rounded-xl border dark:border-gray-700"
              src={TestimonialImage02}
              width={300}
              height={250}
              alt="Testimonial 02"
            />
          </div>
          <h1 className="mt-3 text-center text-2xl font-bold">
            Machine Learning
          </h1>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./signup"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* 3rd testimonial */}
        <div
          className="flex flex-col rounded-2xl p-6 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center">
            <Image
              className="rounded-xl border dark:border-gray-700"
              src={TestimonialImage03}
              width={300}
              height={250}
              alt="Testimonial 03"
            />
          </div>
          <h1 className="mt-3 text-center text-2xl font-bold">
            Data Engineering
          </h1>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./signup"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
