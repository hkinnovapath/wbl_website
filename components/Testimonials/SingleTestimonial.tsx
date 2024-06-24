// import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";
// const starIcon = (
//   <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
//     <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
//   </svg>
// );

// const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
//   const { star, name, image, content, designation } = testimonial;

//   let ratingIcons = [];
//   for (let index = 0; index < star; index++) {
//     ratingIcons.push(
//       <span key={index} className="text-yellow">
//         {starIcon}
//       </span>
//     );
//   }

//   return (
//     <div className="w-full">
//       <div
//         className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
//         data-wow-delay=".1s"
//       >
//         <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
//         <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
//           “{content}
//         </p>
//         <div className="flex items-center">
//           <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
//             <Image src={testimonial.image} alt={testimonial.name} />
//           </div>
//           <div className="w-full">
//             <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
//               {name}
//             </h5>
//             <p className="text-sm text-body-color">{designation}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleTestimonial;
// Import necessary dependencies and components
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

// Define star icon SVG
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

// Define SingleTestimonial component
const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  // Destructure testimonial data
  const { star, name, image, content, designation } = testimonial;

  // Generate star rating icons based on the given number of stars
  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  // Return JSX structure for a single testimonial
  return (
    <div className="text-justify relative sm:text-left w-full ">
      <div
        className="wow fadeInUp rounded-2xl  bg-white  p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        {/* Star rating icons */}
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        {/* Testimonial content */}
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          “{content}
        </p>
        {/* Testimonial author details */}
        <div className="flex items-center">
          {/* Testimonial author image */}
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={testimonial.image} alt={testimonial.name} />
          </div>
          {/* Testimonial author name and designation */}
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h5>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
          
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
    </div>
  );
};

// Export the SingleTestimonial component as default
export default SingleTestimonial;
