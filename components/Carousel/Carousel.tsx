"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Run useEffect every time currentIndex changes

  return (
    <div className="group relative mx-auto h-[200px] w-full max-w-[400px] px-2 md:h-[300px] md:max-w-[600px] lg:h-[350px] lg:max-w-[700px] xl:h-[400px] xl:max-w-[1000px]">
      <div className="relative h-full w-full rounded-2xl bg-cover bg-center">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.url}
            alt={`Slide ${index}`}
            layout="fill"
            className={`rounded-2xl shadow-xl shadow-gray-700 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
