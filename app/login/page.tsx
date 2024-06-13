// "use client";
// import Link from "next/link";
// import { useState, useEffect, FormEvent } from "react";
// import Router from "next/router";

// const SigninPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const [responseStatus, setResponseStatus] = useState("");
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3001/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         setResponseStatus("success");
//       } else {
//         setResponseStatus("error");
//       }

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message); // Use data.message to access the message
//       } else {
//         setMessage(data.error); // Use data.error if there is an error
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[500px] rounded-3xl bg-gradient-to-br from-pink-400 to-sky-200 p-6 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500/30  sm:p-[60px]">
//                 <h3 className="mb-3 text-center text-2xl font-bold   text-black dark:text-white sm:text-3xl">
//                 Welcome back.
//                 </h3>
//                 <p className="mb-11 text-center text-base font-medium text-black dark:text-white">
//                 Sign in to your account
//                 </p>
//                 <button className="mb-6 flex w-full items-center justify-center rounded-3xl bg-white p-3 text-base font-medium shadow-one text-primary dark:bg-white dark:shadow-signUp dark:text-black">
//                   <span className="mr-3">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g clip-path="url(#clip0_95:967)">
//                         <path
//                           d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
//                           fill="#4285F4"
//                         />
//                         <path
//                           d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
//                           fill="#34A853"
//                         />
//                         <path
//                           d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
//                           fill="#FBBC05"
//                         />
//                         <path
//                           d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
//                           fill="#EB4335"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_95:967">
//                           <rect width="20" height="20" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                   </span>
//                   Sign in with Google
//                 </button>
//                 <div className="mb-8 flex items-center justify-center">
//                   <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
//                   <p className="w-full px-5 text-center text-base font-medium text-black dark:text-white">
//                     Or, sign in with your email
//                   </p>
//                   <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color sm:block"></span>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-8">
//                     <label
//                       htmlFor="email"
//                       className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                     >
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your Email"
//                       className="w-full rounded-3xl border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white dark:shadow-signUp"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                    />
//                   </div>
//                   <div className="mb-8">
//                     <label
//                       htmlFor="password"
//                       className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                     >
//                       Your Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Enter your Password"
//                       className="w-full rounded-3xl border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white dark:shadow-signUp"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
//                     <div className="mb-4 sm:mb-0">
//                       <label
//                         htmlFor="checkboxLabel"
//                         className="flex cursor-pointer select-none items-center text-sm font-medium text-black dark:text-white"
//                       >
//                         <div className="relative">
//                           <input
//                             type="checkbox"
//                             id="checkboxLabel"
//                             className="sr-only"
//                           />
//                           <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
//                             <span className="opacity-0">
//                               <svg
//                                 width="11"
//                                 height="8"
//                                 viewBox="0 0 11 8"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
//                                   fill="#3056D3"
//                                   stroke="#3056D3"
//                                   strokeWidth="0.4"
//                                 />
//                               </svg>
//                             </span>
//                           </div>
//                         </div>
//                         Keep me signed in
//                       </label>
//                     </div>
//                     <div>
//                       <a
//                         href="#0"
//                         className="text-sm font-medium text-primary hover:underline"
//                       >
//                         Forgot Password?
//                       </a>
//                     </div>
//                   </div>
//                   <div className="mb-6">
//                     <button className="flex w-full items-center justify-center rounded-3xl bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
//                       Sign in
//                     </button>
//                   </div>
//                 </form>

//                  {/* Error/Success Message */}
//             {message && (
//               <div className={`text-center text-sm mt-4 ${responseStatus === 'success' ? 'text-[green]' : 'text-[red]'}`}>
//                 {message}
//               </div>
//             )}

//                 <p className="text-center text-base font-medium  text-black dark:text-white">
//                   Don’t you have an account?
//                   <Link href="/signup" className="text-primary hover:underline">
//                     Sign up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 left-0 z-[-1]">
//           <svg
//             width="1440"
//             height="969"
//             viewBox="0 0 1440 969"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <mask
//               id="mask0_95:1005"
//               style={{ maskType: "alpha" }}
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width="1440"
//               height="969"
//             >
//               <rect width="1440" height="969" fill="#090E34" />
//             </mask>
//             <g mask="url(#mask0_95:1005)">
//               <path
//                 opacity="0.1"
//                 d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
//                 fill="url(#paint0_linear_95:1005)"
//               />
//               <path
//                 opacity="0.1"
//                 d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
//                 fill="url(#paint1_linear_95:1005)"
//               />
//             </g>
//             <defs>
//               <linearGradient
//                 id="paint0_linear_95:1005"
//                 x1="1178.4"
//                 y1="151.853"
//                 x2="780.959"
//                 y2="453.581"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient
//                 id="paint1_linear_95:1005"
//                 x1="160.5"
//                 y1="220"
//                 x2="1099.45"
//                 y2="1192.04"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SigninPage;

// // -----------------------------------------------------------------------

// "use client";
// import Link from "next/link";
// import { useState, FormEvent } from "react";
// import Router from "next/router";

// const SigninPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [responseStatus, setResponseStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:8000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           "uname": email,
//           "passwd": password,
//          }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setResponseStatus("success");
//         setMessage(data.message); // Use data.message to access the message
//       } else {
//         setResponseStatus("error");
//         setMessage(data.error); // Use data.error if there is an error
//       }
//     } catch (error) {
//       setResponseStatus("error");
//       setMessage("An error occurred during login");
//     } finally {
//       setLoading(false);
//     }

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[500px] rounded-3xl bg-gradient-to-br from-pink-400 to-sky-200 p-6 dark:bg-gradient-to-br dark:from-pink-700 dark:to-sky-500/30 sm:p-[60px]">
//                 <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
//                   Welcome back.
//                 </h3>
//                 <p className="mb-11 text-center text-base font-medium text-black dark:text-white">
//                   Sign in to your account
//                 </p>
//                 <button className="mb-6 flex w-full items-center justify-center rounded-3xl bg-white p-3 text-base font-medium shadow-one text-primary dark:bg-white dark:shadow-signUp dark:text-black">
//                   <span className="mr-3">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <g clipPath="url(#clip0_95:967)">
//                         <path
//                           d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
//                           fill="#4285F4"
//                         />
//                         <path
//                           d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
//                           fill="#34A853"
//                         />
//                         <path
//                           d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
//                           fill="#FBBC05"
//                         />
//                         <path
//                           d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
//                           fill="#EB4335"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_95:967">
//                           <rect width="20" height="20" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                   </span>
//                   Sign in with Google
//                 </button>
//                 <div className="mb-8 flex items-center justify-center">
//                   <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
//                   <p className="w-full px-5 text-center text-base font-medium text-black dark:text-white">
//                     Or, sign in with your email
//                   </p>
//                   <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-8">
//                     <label
//                       htmlFor="email"
//                       className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                     >
//                       Email Address <span className="text-[red]">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       className="dark:shadow-signUp w-full rounded-3xl border border-transparent py-2 px-4 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:py-3 sm:px-6"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div className="mb-8">
//                     <label
//                       htmlFor="password"
//                       className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                     >
//                       Password <span className="text-[red]">*</span>
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       className="dark:shadow-signUp w-full rounded-3xl border border-transparent py-2 px-4 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-white sm:py-3 sm:px-6"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </div>
//                   {loading ? (
//                     <div className="flex justify-center mb-4">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         className="inline h-6 w-6 animate-spin"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M12 2.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 0112 18zm9-6a.75.75 0 01-.75-.75h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5h3a.75.75 0 01-.75.75zm-15 0a.75.75 0 01-.75-.75H2.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h3a.75.75 0 01-.75.75zm12.364-6.364a.75.75 0 011.061-1.061l2.121 2.121a.75.75 0 01-1.061 1.061L18.364 5.636a.75.75 0 010-1.061zm-12.728 0a.75.75 0 010 1.061L2.515 7.818a.75.75 0 11-1.061-1.061L3.636 3.636a.75.75 0 011.061 0zM18.364 18.364a.75.75 0 011.061 0l2.121 2.121a.75.75 0 01-1.061 1.061L18.364 19.425a.75.75 0 010-1.061zm-12.728 0a.75.75 0 010 1.061l-2.121 2.121a.75.75 0 01-1.061-1.061l2.121-2.121a.75.75 0 011.061 0z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                   ) : (
//                     message && (
//                       <div
//                         className={`mb-4 rounded-lg ${
//                           responseStatus === "success"
//                             ? "bg-green-200 text-green-700"
//                             : "bg-red-200 text-red-700"
//                         } px-4 py-2 text-center`}
//                       >
//                         {message}
//                       </div>
//                     )
//                   )}

//                   <div className="mb-6">
//                     <button
//                       type="submit"
//                       className="w-full rounded-3xl bg-primary p-3 text-base font-medium text-white transition duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-90 sm:p-4"
//                     >
//                       Sign in
//                     </button>
//                   </div>
//                 </form>

//                 <p className="text-center text-base font-medium text-black dark:text-white">
//                   Don’t you have an account?
//                   <Link href="/register" className="text-primary hover:underline">
//                     Sign Up
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 left-0 z-[-1]">
//           <svg
//             width="1440"
//             height="969"
//             viewBox="0 0 1440 969"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <mask
//               id="mask0_95:1005"
//               style={{ maskType: "alpha" }}
//               maskUnits="userSpaceOnUse"
//               x="0"
//               y="0"
//               width="1440"
//               height="969"
//             >
//               <rect width="1440" height="969" fill="#090E34" />
//             </mask>
//             <g mask="url(#mask0_95:1005)">
//               <path
//                 opacity="0.1"
//                 d="M1086.96 297.744L1572.89 878.261L540.484 1297.97L54.5522 717.453L1086.96 297.744Z"
//                 fill="url(#paint0_linear_95:1005)"
//               />
//               <path
//                 opacity="0.1"
//                 d="M1580.52 301.141L1067.31 -218.567L-74.7889 518.773L438.422 1038.48L1580.52 301.141Z"
//                 fill="url(#paint1_linear_95:1005)"
//               />
//             </g>
//             <defs>
//               <linearGradient
//                 id="paint0_linear_95:1005"
//                 x1="1404.44"
//                 y1="419.417"
//                 x2="675.85"
//                 y2="1264.2"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//               <linearGradient
//                 id="paint1_linear_95:1005"
//                 x1="931.452"
//                 y1="-59.1586"
//                 x2="243.494"
//                 y2="784.874"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#4A6CF7" />
//                 <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SigninPage;

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
      
      console.log(response)
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
        // setMessage(data.error || "Failed to login");
        setMessage(data.error || "Failed to login");
      }
    }
     catch (error) {
      setResponseStatus("error");
      setMessage("An error occurred during login");
    } finally {
      setLoading(false);
    }
    setEmail("");
    setPassword("");
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
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      Forgot password?
                    </label>
                  </div>
                  {/* {loading ? (
                    <div className="mb-4 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="inline h-6 w-6 animate-spin"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 0112 18zm9-6a.75.75 0 01-.75-.75h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5h3a.75.75 0 01-.75.75zm-15 0a.75.75 0 01-.75-.75H2.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h3a.75.75 0 01-.75.75zm12.364-6.364a.75.75 0 011.061-1.061l2.121 2.121a.75.75 0 01-1.061 1.061L18.364 5.636a.75.75 0 010-1.061zm-12.728 0a.75.75 0 010 1.061L2.515 7.818a.75.75 0 11-1.061-1.061L3.636 3.636a.75.75 0 011.061 0zM18.364 18.364a.75.75 0 011.061 0l2.121 2.121a.75.75 0 01-1.061 1.061L18.364 19.425a.75.75 0 010-1.061zm-12.728 0a.75.75 0 010 1.061l-2.121 2.121a.75.75 0 01-1.061-1.061l2.121-2.121a.75.75 0 011.061 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ) : (
                    message && (
                      <div
                        className={`mb-4 rounded-lg ${
                          message.includes("successful")
                            ? "bg-green-200 text-green-700"
                            : "bg-red-200 text-red-700"
                        } px-4 py-2 text-center`}
                      >
                        {message}
                      </div>
                    )
                  )} */}
                  {/* <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full rounded-3xl bg-primary p-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg sm:p-4"
                      disabled={loading}
                    >
                      Sign in
                    </button>
                  </div> */}


                      {loading ? (
                <div className="  mb-4 text-center  text-md font-medium text-black  dark:text-white sm:text-2xl">
                Loading&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                 
                    className=" inline w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] text-black  dark:text-white"
                >
                  <circle cx="4" cy="12" r="3"  fill="currentColor">
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
                      } relative mt-4 rounded border px-4 py-3`}
                      role="alert"
                    >
                      <strong className="font-bold">
                        {responseStatus === "success" ? "Success" : "Error"} -{" "}
                      </strong>
                      <span className="block sm:inline">{message}</span>
                    </div>
                  )}


                </form>
                <p className="text-center text-base font-medium text-black dark:text-white">
                  Don’t have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-primary hover:underline"
                  >
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
