"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Layout from "@/components/Common/Layout";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Extract email from the query parameter
    const queryEmail = new URLSearchParams(window.location.search).get("email");
    if (queryEmail) {
      setEmail(decodeURIComponent(queryEmail));
    }
  }, []);

  const handleUnsubscribe = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/unsubscribe`,
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.detail || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="container px-4 pb-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex h-24 flex-col justify-center text-center sm:mt-28 sm:mb-3 sm:h-28 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Unsubscribe
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Unsubscribe" />
          </div>
        </nav>

        {/* Main content */}
        <div className="flex h-96 flex-col items-center justify-center ">
          <div className="w-full max-w-md rounded-3xl dark:bg-gray-800 bg-gray-400 p-8  shadow-md">
            {/* <h1 className="mb-4 text-center text-2xl font-bold">Unsubscribe</h1> */}
            <div className="mb-6   text-sm sm:text-lg  text-center">
              <div className=" font-extrabold pb-4 text-lg sm:text-xl lg:text-2xl my-5">We're sorry to see you go 😞</div> Please click the button below to
              unsubscribe from our mailing list.
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="mb-4  text-center  font-bold text-xs sm:text-sm lg:text-base ">Email: <span className="dark:text-blue-400 text-blue-700">{email}
                </span> </div>
              <button
                type="submit"
                className="flex   justify-center rounded-md bg-gradient-to-br from-indigo-900  to-purple-400 p-3 px-5
                 text-center   font-bold text-white transition duration-500 hover:bg-opacity-90 
          hover:bg-gradient-to-tl hover:from-indigo-900  hover:to-purple-400 hover:shadow-xl text-sm sm:text-base   lg:text-lg"
                onClick={handleUnsubscribe}
                disabled={loading} // Disable button while loading
              >
                Unsubscribe
              </button>
            </div>
            {loading ? (
              <p className="mt-4 text-center text-white">Loading...</p>
            ) : (
              message && (
                <p className="mt-4 text-center text-white">{message}</p>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
