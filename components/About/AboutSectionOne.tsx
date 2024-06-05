"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import img1 from "@/public/images/gallery/1.jpg";
import img2 from "@/public/images/gallery/2.jpg";
import img3 from "@/public/images/gallery/3.jpg";
import img4 from "@/public/images/gallery/4.jpg";

const imagessrc = [img1, img2, img3, img4]; // Updated array with new images

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imagePositions, setImagePositions] = useState([]);

  useEffect(() => {
    const positions = [];
    const numImages = imagessrc.length; // Number of images
    const offset = 50; // Offset for each subsequent image

    for (let i = 0; i < numImages; i++) {
      const top = i * offset;
      const left = i * offset;
      positions.push({ top, left });
    }

    setImagePositions(positions);
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Who We Are ?"
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp group relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="relative h-[300px] w-[300px]">
                  {imagessrc.map((img, index) => (
                    <div
                      key={index}
                      className="absolute h-full w-full transform rounded-md object-cover p-1 shadow-lg shadow-gray-700 transition-transform duration-300 hover:scale-110"
                      style={{
                        top: `${imagePositions[index]?.top}px`,
                        left: `${imagePositions[index]?.left}px`,
                        zIndex: hoveredIndex === index ? 10 : index,
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Image
                        src={img}
                        alt={`Gallery image ${index}`}
                        fill
                        objectit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
