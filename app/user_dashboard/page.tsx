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
      <div className="mt-32 pb-24 text-center text-xl text-red-600 sm:text-4xl md:text-5xl lg:text-6xl">
        Loading...
      </div>
    ); // Placeholder for loading state
  }

  // Component for rendering table rows
const TableRow = ({ label, value }) => (
  <tr className="bg-gray-50 dark:bg-gray-800">
    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </td>
    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
      {value}
    </td>
  </tr>
);

  return (
    <main className=" mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-2xl font-bold sm:text-4xl">User Dashboard </h1>
        <div className="hidden sm:block">
          <Layout currentPage="Dashboard" />
        </div>
      </nav>
      <section className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
          My Details
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <tbody>
                <TableRow label="Name" value={user.fullname} />
                <TableRow label="Phone" value={user.phone} />
                <TableRow label="Email" value={user.uname} />
                <TableRow label="Logincount" value={user.logincount} />
                <TableRow
                  label="Lastlogin"
                  value={user.lastlogin || "Not available"}
                />
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleLogout}
              className="rounded-md bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
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
