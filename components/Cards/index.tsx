import Image from "next/image";
import fsd from "@/public/images/courses/fullstack_development.jpeg"; // Replace with the actual path
import machine_learning from "@/public/images/courses/machine_learning.jpeg"; // Replace with the actual path
import data_engineer from "@/public/images/courses/data_engineer.jpg"; // Replace with the actual path

export default function Cards() {
  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* 1st testimonial */}
        <div
          className="flex flex-col rounded-2xl p-6 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center">
            <Image
              className="rounded-xl border dark:border-gray-700 sm:h-56  sm:w-[350px]"
              src={machine_learning}
              width={350}
              height={300}
              alt="Testimonial 02"
            />
          </div>
          <div className="mt-3 text-center text-2xl font-bold">
            Machine Learning
          </div>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./contact"
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
              className=" rounded-xl border dark:border-gray-700 sm:h-56 sm:w-[360px]"
              src={data_engineer}
              width={350}
              height={250}
              alt="Testimonial 03"
            />
          </div>
          <div className="mt-3 text-center text-2xl font-bold">
            Data Engineering
          </div>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./contact"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* 3rd testimonial */}
        <div
          className="flex flex-col rounded-2xl p-5 shadow-lg shadow-gray-400 duration-500 hover:scale-105 dark:shadow-gray-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex justify-center">
            <Image
              className="rounded-xl border dark:border-gray-700 sm:h-56 sm:w-[360px]"
              src={fsd}
              width={350}
              height={250}
              alt="Testimonial 01"
            />
          </div>
          <div className="mt-3 text-center text-2xl font-bold">
            Fullstack Development <a href=""></a>
          </div>
          <div className="mt-6 border-t border-gray-400 pt-5 text-center font-medium text-gray-700">
            <cite className="not-italic text-gray-200"></cite>{" "}
            <a
              className="text-blue-600 transition duration-150 ease-in-out hover:text-blue-400"
              href="./contact"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
