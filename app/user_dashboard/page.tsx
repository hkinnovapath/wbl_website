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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user_dashboard`, {
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
    // { label: "Logincount", value: user.logincount },
    // { label: "Lastlogin", value: user.lastlogin || "Not available" },
  ];

  const TableRow = ({ label, value, isEven }) => (
    <tr>
      <td className="font-bold sm:px-6 px-3 sm:py-4 py-2 text-xs sm:text-base  text-black dark:text-white">
        {label}{':-'}
      </td>
      <td className="rounded-4xl font-bold  sm:px-6 px-3 sm:py-4 py-2 text-xs sm:text-base text-black dark:text-white">
        {value}
      </td>
    </tr>
  );

  return (<>
    {/* <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6"> */}
    <main className="container px-4 py-6 sm:px-6">
              <nav className="sm:mt-28  mt-20 justify-center sm:mb-10  flex h-28 flex-col items-start sm:justify-between sm:flex-row sm:items-center">
          <h1 className=" text-center  text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            User Dashboard
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Dashboard" />
          </div>
        </nav>
      <section className="flex justify-center   h-full lg:h-[475px] ">
        <div className="sm:w-4/6 w-72  flex flex-col  justify-center  rounded-3xl  bg-gradient-to-br from-pink-400 to-sky-400 p-8 px-10 py-10 text-white shadow-lg  dark:bg-gradient-to-br dark:from-pink-500 dark:to-sky-400">
          <h2 className="mb-8  text-center sm:text-2xl text-lg font-bold text-gray-800 dark:text-white">
            My Details
          </h2>
          <div className="flex w-full  justify-center overflow-x-auto">
            <div className="rounded-2xl  bg-gradient-to-tl from-pink-400 to-sky-400  px-2 sm:px-16 py-7 sm:py-10 text-white shadow-2xl dark:bg-gradient-to-tl dark:from-pink-500 dark:to-sky-400">
              <table className="w-1/2 divide-y  divide-gray-200 dark:divide-gray-700">
                <tbody className=" ">
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
    </>
  );
};
export default UserDashboard;
