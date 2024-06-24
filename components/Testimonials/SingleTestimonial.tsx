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

  // JSX structure for a single testimonial
  return (
    <div className="w-full text-justify sm:text-left">
      <div
        className="wow fadeInUp rounded-md bg-white p-8 shadow-one dark:bg-[#1D2144] lg:px-5 xl:px-8"
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
            <Image src={image} alt={name} />
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
    </div>
  );
};

// Export the SingleTestimonial component as default
export default SingleTestimonial;
