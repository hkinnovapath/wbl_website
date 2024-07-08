import Gallery from "@/components/Gallery";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
// import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Inter } from "next/font/google";
// import Schedule from "./schedule/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <Features />
      {/* <Schedule /> */}
      {/* <Brands /> */}
      {/* <Gallery /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Video /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
