"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Common/Layout";
import ResourcesTable from "@/components/Common/resourcesTable";
// import Auth from "@/components/Common/auth";

type ComponentType =
  | "Presentations"
  | "Cheatsheets"
  | "Installations"
  | "Miscellaneous"
  | "Books"
  | "Softwares";

const buttons = [
  { type: "Presentations", label: "Presentation" },
  { type: "Cheatsheets", label: "Cheatsheets" },
  { type: "Softwares", label: "Software" },
  { type: "Installations", label: "Installation" },
  { type: "Books", label: "Books" },
  { type: "Miscellaneous", label: "Miscellaneous" },
];

const fetchPresentationData = async (type: ComponentType) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/presentation?search=${type}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.presentation;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
};

export default function Recordings() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Presentations");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);
      const fetchedData = await fetchPresentationData(activeComponent);
      if (fetchedData) {
        setData(fetchedData);
      } else {
        setError("No data found");
      }
      setLoading(false);
    };
    getData();
  }, [activeComponent]);

  const handleButtonClick = (component: ComponentType) => {
    setActiveComponent(component);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl">
          Course Material
          <span className="text-lg font-light sm:text-2xl"> (PDF)</span>
        </h1>
        <div className="hidden sm:block">
          <Layout currentPage="Presentations" />
        </div>
      </nav>

      <section className="mb-8 flex flex-col justify-between sm:flex-row">
        <div className="mt-10 flex justify-center sm:w-1/3">
          <div className="flex w-60 flex-col">
            {buttons.map((button) => (
              <button
                key={button.type}
                className={`mb-1 w-full rounded-md bg-gradient-to-br from-primary to-blue-300 px-4 py-2 font-bold text-black hover:bg-gradient-to-tl hover:from-primary hover:to-blue-300 sm:w-36 ${
                  activeComponent === button.type ? "bg-blue-500" : ""
                }`}
                onClick={() => handleButtonClick(button.type as ComponentType)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex-grow sm:ml-20">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : data ? (
            <ResourcesTable
              subjects={data.map((item: any) => ({
                id: item.id,
                name: item.name,
                pdfUrl: item.link,
              }))}
              type={activeComponent}
            />
          ) : (
            <p>No data to display</p>
          )}
        </div>
      </section>
    </main>
  );
}
