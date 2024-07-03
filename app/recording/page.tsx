"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Common/Layout";

export default function Course() {
  const router = useRouter();

  const handleNavigation = (course: string) => {
    router.push(`/recording/recordingComp?course=${course}`);
  };

  return (
    <div>
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">Select Course</h1>
          <div className="hidden sm:block">
            <Layout currentPage="Course" />
          </div>
        </nav>

        <section className="mb-8 flex flex-col sm:flex-row justify-between">
          <div className="mt-10 flex sm:w-1/3 justify-center">
            <div className="flex flex-col w-60">
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("UI")}
              >
               UI Fullstack
              </button>
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("ML")}
              >
                Machine Learning
              </button>
              <button
                className="mb-1 w-full sm:w-44 rounded-md bg-gradient-to-br from-primary to-blue-300 hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 px-4 py-2 text-black font-bold"
                onClick={() => handleNavigation("QA")}
              >
                Quality Engineer
              </button>
            </div>
          </div>

          <div className="mt-10 capitalize text-4xl font-semibold items-center flex flex-grow space-y-4">
            please select your course...
          </div>
        </section>
      </main>
    </div>
  );
}
