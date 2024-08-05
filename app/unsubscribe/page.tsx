import Accordion from "@/components/Faq";
import Layout from "@/components/Common/Layout";
import Link from "next/link";

export default function Unsubscribe() {
  return (
    <div>
      <main className="container px-4 pb-6 sm:px-6">
        {/* Navbar */}
        <nav className="sm:mt-28 mt-16 text-center justify-center sm:mb-3 flex h-24 sm:h-28 flex-col sm:justify-between sm:flex-row sm:items-center">
          <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
            Unsubscribe
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="Unsubscribe" />
          </div>
        </nav>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
          <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Unsubscribe</h1>
            <p className="mb-6 text-center">
              We &apos; re sorry to see you go. Please enter your email to unsubscribe from our mailing list.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Unsubscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
