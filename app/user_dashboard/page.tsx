"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Common/Layout";

const UserDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // useEffect to fetch user details on initial load
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:8000/user_dashboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
        // Optionally handle error scenarios (e.g., redirect to login)
      }
    };

    fetchUserDetails();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/login"); // Redirect to signin page after logout
  };

  if (!user) {
    return (
      <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Loading...
      </div>
    ); // Placeholder for loading state
  }

  const data = [
    { label: "Name", value: user.fullname },
    { label: "Phone", value: user.phone },
    { label: "Email", value: user.uname },
    { label: "Logincount", value: user.logincount },
    { label: "Lastlogin", value: user.lastlogin || "Not available" },
  ];

  // Component for rendering table rows
  const TableRow = ({ label, value, isEven }) => (
    <tr
    // className={`${
    //   isEven ? "bg-pink-200 dark:bg-pink-400" : "bg-sky-200 dark:bg-sky-400"
    // }`}
    >
      <td className="whitespace-nowrap  px-6 py-4 text-sm font-medium text-black dark:text-white">
        {label}
      </td>
      <td className="rounded-4xl whitespace-nowrap  px-6 py-4 text-sm text-black dark:text-white">
        {value}
      </td>
    </tr>
  );

  return (
    <main className=" mx-auto max-w-6xl px-4 py-6 sm:px-6 ">
      <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl">User Dashboard </h1>
        <div className="hidden sm:block">
          <Layout currentPage="Dashboard" />
        </div>
      </nav>
      <section className="flex  justify-center">
        <div className="w-5/6 rounded-3xl bg-gradient-to-br from-pink-300  to-sky-200 p-8 px-10 py-10 text-white   shadow-lg dark:bg-gradient-to-br dark:from-pink-600 dark:to-sky-500  ">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
            My Details
          </h2>
          <div className="flex w-full  justify-center overflow-x-auto">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-sky-300  p-8 px-10 py-10 text-white shadow-2xl dark:bg-gradient-to-br dark:from-pink-800 dark:to-sky-600 ">
              <table className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
                <tbody>
                  {data.map((item, index) => (
                    <TableRow
                      key={index}
                      label={item.label}
                      value={item.value}
                      isEven={index % 2 === 0}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleLogout}
              className="w-1/5 rounded-xl bg-red-500 px-4 py-3 text-white transition duration-300 hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default UserDashboard;
