"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("username", email); // Replace 'username' with the actual input field name
    formData.append("password", password); // Replace 'password' with the actual input field name

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const data = await response.json();

      console.log(response);
      console.log(data);

      // if (response.ok) {
      //   setMessage("Login successful!");
      //   localStorage.setItem("access_token", data.access_token);
      //   // Router.push("/");
      // } else {
      //   setMessage(data.detail || "Failed to login");
      // }
      if (response.ok) {
        setMessage(data.message || " Login successful!");
        setResponseStatus("success");
        localStorage.setItem("access_token", data.access_token);
        //   // Router.push("/");
      } else {
        setResponseStatus("error");
        setMessage(data.error || "Failed to login");
      }
    } catch (error) {
      setResponseStatus("error");
      setMessage("An error occurred during login");
    } finally {
      setLoading(false);
    }
    setEmail("");
    setPassword("");
  };

  const handleInputFocus = () => {
    setMessage("");
  };

  const handleCloseMessage = () => {
    setMessage("");
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-3xl bg-gradient-to-br from-pink-400 to-sky-200 p-6 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500/30 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Welcome back.
                </h3>
                <p className="mb-11 text-center text-base font-medium text-black dark:text-white">
                  Sign in to your account
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email Address <span className="text-[red]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="dark:shadow-signUp w-full rounded-3xl border border-transparent py-2 px-4 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:py-3 sm:px-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={handleInputFocus}
                      required
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Password <span className="text-[red]">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="dark:shadow-signUp w-full rounded-3xl border border-transparent py-2 px-4 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:py-3 sm:px-6"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={handleInputFocus}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Forgot password?
                    </label>
                  </div>
                  {loading ? (
                    <div className="  text-md mb-4  text-center font-medium text-black  dark:text-white sm:text-2xl">
                      Loading&nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className=" inline h-[30px] w-[30px] text-black dark:text-white sm:h-[50px]  sm:w-[50px]"
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
                  ) : (
                    <button
                      type="submit"
                      className="hover:shadow-signUp flex w-full items-center justify-center rounded-3xl bg-primary py-3 px-6 text-base font-medium  text-white transition duration-300 ease-in-out hover:bg-opacity-80 sm:py-4 sm:px-9"
                    >
                      Sign in
                    </button>
                  )}
                  {message && (
                    <div
                      className={`${
                        responseStatus === "success"
                          ? "border-green-400 bg-green-100 text-green-700"
                          : "border-red-400 bg-red-100 text-red-700"
                      } relative mt-4 flex items-center justify-between rounded-xl px-2 py-1 text-sm sm:px-3 sm:py-1 sm:text-base`}
                      role="alert"
                    >
                      <div>
                        <strong className="font-bold">
                          {responseStatus === "success" ? "Success" : "Error"} -{" "}
                        </strong>
                        <span className="">{message}</span>
                      </div>
                      <button
                        onClick={handleCloseMessage}
                        className="ml-4 bg-transparent text-lg font-bold text-red-700 hover:text-red-900 focus:outline-none"
                      >
                        &times;
                      </button>
                    </div>
                  )}
                </form>
                <p className="text-center text-base font-medium text-black dark:text-white">
                  Don’t have an account?{" "}
                  <Link href="/signup" className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.744L1572.89 878.261L540.484 1297.97L54.5522 717.453L1086.96 297.744Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1580.52 301.141L1067.31 -218.567L-74.7889 518.773L438.422 1038.48L1580.52 301.141Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1404.44"
                y1="419.417"
                x2="675.85"
                y2="1264.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="931.452"
                y1="-59.1586"
                x2="243.494"
                y2="784.874"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
