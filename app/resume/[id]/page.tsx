"use client";
import Layout from "@/components/Common/Layout";
import React from "react";

export default function Assignment() {
  return (
    <div>
      <main className="container px-4 pb-6 sm:px-6">
        <nav className="sm:mt-28 mt-16 text-center justify-center sm:mb-3 flex h-24 sm:h-28 flex-col sm:justify-between sm:flex-row sm:items-center">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Resume
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Resume" />
          </div>
        </nav>

        {/* Centered "Coming Soon..." Text */}
        <div className="flex items-center justify-center" style={{ height: "400px" }}>
          <p className="text-center text-2xl font-bold">Coming Soon...</p>
        </div>
      </main>
    </div>
  );
}
