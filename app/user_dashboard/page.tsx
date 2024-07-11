"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Common/Layout";

const UserDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

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
        sessionStorage.setItem("user_data", JSON.stringify(userData));
        sessionStorage.setItem("user_data_timestamp", Date.now().toString());
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
        localStorage.removeItem("access_token");
        sessionStorage.clear();
        router.push("/login");
      }
    };

    const userDataFromStorage = sessionStorage.getItem("user_data");
    const userDataTimestamp = sessionStorage.getItem("user_data_timestamp");
    const dataAge =
      Date.now() - (userDataTimestamp ? parseInt(userDataTimestamp, 10) : 0);

    if (userDataFromStorage && dataAge < 86400000) {
      // Use data if it's less than a day old
      setUser(JSON.parse(userDataFromStorage));
    } else {
      fetchUserDetails();
    }
  }, []);

  if (!user) {
    return (
      <div className="mt-32 flex h-screen items-center justify-center pb-24 text-xl text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
        <div className="text-md mb-4 text-center font-medium text-black dark:text-white sm:text-2xl">
          Loading&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px] sm:w-[50px]"
          >
            <circle cx="4" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale0"
                attributeName="r"
                begin="0;svgSpinners3DotsScale1.end-0.2s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="12" cy="12" r="3" fill="currentColor">
              <animate
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.48s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
            <circle cx="20" cy="12" r="3" fill="currentColor">
              <animate
                id="svgSpinners3DotsScale1"
                attributeName="r"
                begin="svgSpinners3DotsScale0.end-0.36s"
                dur="0.6s"
                values="3;.2;3"
              />
            </circle>
          </svg>
        </div>
      </div>
    );
  }

  const data = [
    { label: "Name", value: user.fullname },
    { label: "Phone", value: user.phone },
    { label: "Email", value: user.uname },
    { label: "Logincount", value: user.logincount },
    { label: "Lastlogin", value: user.lastlogin || "Not available" },
  ];

  const TableRow = ({ label, value, isEven }) => (
    <tr>
      <td className="whitespace-nowrap  px-6 py-4 text-sm font-medium text-black dark:text-white">
        {label}
      </td>
      <td className="rounded-4xl whitespace-nowrap  px-6 py-4 text-sm text-black dark:text-white">
        {value}
      </td>
    </tr>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl">User Dashboard</h1>
        <div className="hidden sm:block">
          <Layout currentPage="Dashboard" />
        </div>
      </nav>
      <section className="flex justify-center">
        <div className="w-5/6 rounded-3xl bg-gradient-to-br from-pink-300 to-sky-200 p-8 px-10 py-10 text-white shadow-lg dark:bg-gradient-to-br dark:from-pink-600 dark:to-sky-500">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
            My Details
          </h2>
          <div className="flex w-full justify-center overflow-x-auto">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-sky-300 p-8 px-10 py-10 text-white shadow-2xl dark:bg-gradient-to-br dark:from-pink-800 dark:to-sky-600">
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
        </div>
      </section>
    </main>
  );
};
export default UserDashboard;
