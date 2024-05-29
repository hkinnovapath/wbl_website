// "use client";
// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import genAI from "public/Carousel/Gen-AI.jpg";
// import html_css_js from "public/Carousel/html-css-JS.webp";
// import langChain from "public/Carousel/LangChain.webp";
// import ntt from "public/Carousel/next-tailwind-TS.avif";
// import nem from "public/Carousel/node-express-mongo.jpg";
// import tlJ from "public/Carousel/testing-libs-JS.png";
// function Carousel() {
//   const slides = [
//     {
//       url: genAI,
//     },
//     {
//       url: langChain,
//     },
//     {
//       url: ntt,
//     },

//     {
//       url: html_css_js,
//     },
//     {
//       url: nem,
//     },
//     {
//       url: tlJ,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//       ></div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Carousel;

//

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import genAI from "public/Carousel/Gen-AI.jpg";
// import html_css_js from "public/Carousel/html-css-JS.webp";
// import langChain from "public/Carousel/LangChain.webp";
// import ntt from "public/Carousel/next-tailwind-TS.avif";
// import nem from "public/Carousel/node-express-mongo.jpg";
// import tlJ from "public/Carousel/testing-libs-JS.png";

// function Carousel() {
//   const slides = [
//     { url: genAI },
//     { url: langChain },
//     { url: ntt },
//     { url: html_css_js },
//     { url: nem },
//     { url: tlJ },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative">
//         <Image
//           src={slides[currentIndex].url}
//           alt={`Slide ${currentIndex}`}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-2xl"
//         />
//       </div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import genAI from "public/images/Carousel/Gen-AI.jpg";
import html_css_js from "public/images/Carousel/html-css-JS.webp";
import langChain from "public/images/Carousel/LangChain.webp";
import ntt from "public/images/Carousel/next-tailwind-TS.avif";
import nem from "public/images/Carousel/node-express-mongo.jpg";
import tlJ from "public/images/Carousel/testing-libs-JS.png";
import fapi from "public/images/Carousel/fastapi-jwt.jpg";

function Carousel() {
  const slides = [
    { url: genAI },
    { url: ntt },
    { url: html_css_js },
    { url: langChain },
    { url: nem },
    { url: tlJ },
    { url: fapi },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="lg: xl: group relative mx-auto h-[200px] w-full max-w-[400px] px-2 md:h-[300px] md:max-w-[600px] lg:h-[400px] lg:max-w-[800px] xl:h-[300px] xl:max-w-[1000px]">
      <div className="relative h-full w-full rounded-2xl bg-cover bg-center duration-500">
        <Image
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          layout="fill"
          objectFit="contain"
          className="rounded-2xl"
        />
      </div>
      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 hidden -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-2xl text-white transition hover:bg-black/50 group-hover:block"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 hidden -translate-y-1/2 transform cursor-pointer rounded-full bg-black/30 p-2 text-2xl text-white transition hover:bg-black/50 group-hover:block"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="flex justify-center space-x-2 py-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-300"
            }`}
          >
            <RxDotFilled size={30} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
