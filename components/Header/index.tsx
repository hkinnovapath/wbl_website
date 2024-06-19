// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";
// import WBLlight from "@/public/images/wbl-light.png";
// import WBLdark from "@/public/images/wbl-dark.png";

// const Header = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [openIndex, setOpenIndex] = useState(-1);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("access_token");
//     setIsAuthenticated(false);
//     router.push("/login");
//   };

//   const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
//   const closeNavbar = () => setNavbarOpen(false);
//   const handleStickyNavbar = () => setSticky(window.scrollY >= 80);

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//     return () => window.removeEventListener("scroll", handleStickyNavbar);
//   }, []);

//   const handleSubmenu = (index) => setOpenIndex(openIndex === index ? -1 : index);

//   return (
//     <header className={`header top-0 left-0 z-40 w-full items-center bg-transparent ${sticky ? "fixed bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-primary dark:bg-opacity-20" : "absolute"}`}>
//       <div className="container mt-5">
//         <div className="relative flex items-center justify-between -mx-4">
//           <div className="px-4 xl:mr-12">
//             <Link href="/" className={`header-logo block w-full ${sticky ? "py-3 lg:py-1" : "py-0"}`}>
//               <Image src={WBLdark} alt="logo" width={50} height={50} className="dark:hidden" />
//               <Image src={WBLlight} alt="logo" width={50} height={50} className="hidden dark:block" />
//             </Link>
//           </div>
//           <div className="flex items-center justify-between w-full px-4">
//             <button onClick={navbarToggleHandler} aria-label="Mobile Menu" className="block lg:hidden">
//               <div className="relative block w-8 h-8">
//                 <span className={`block w-full h-0.5 bg-black dark:bg-white transform transition-all duration-300 ${navbarOpen ? "rotate-45 translate-y-2" : ""}`}></span>
//                 <span className={`block w-full h-0.5 bg-black dark:bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`}></span>
//                 <span className={`block w-full h-0.5 bg-black dark:bg-white transform transition-all duration-300 ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
//               </div>
//             </button>
//             <nav className={`navbar absolute right-0 z-30 w-64 rounded bg-white py-4 px-6 transition-all duration-300 dark:bg-dark lg:static lg:w-auto lg:bg-transparent lg:p-0 lg:visible ${navbarOpen ? "top-full opacity-100" : "invisible top-24 opacity-0"}`}>
//               <ul className="flex flex-col space-y-4 lg:flex-row lg:space-x-12 lg:space-y-0">
//                 {menuData.map((menuItem, index) => (
//                   <li key={menuItem.id} className="group relative">
//                     {menuItem.path ? (
//                       <Link href={menuItem.path} className="block px-3 py-2 text-sm font-semibold text-dark duration-500 hover:bg-gray-200 dark:text-white dark:hover:bg-black/70 sm:text-base lg:py-6 lg:px-0" onClick={closeNavbar}>
//                         {menuItem.title}
//                       </Link>
//                     ) : (
//                       <>
//                         <button onClick={() => handleSubmenu(index)} className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-dark duration-500 hover:bg-gray-200 dark:text-white dark:hover:bg-black/70 sm:text-base lg:py-6 lg:px-0">
//                           {menuItem.title}
//                           <svg width="15" height="14" viewBox="0 0 15 14" className="ml-3">
//                             <path d="M7.816 9.975a.747.747 0 01-.35-.132L2.435 4.9a.5.5 0 01.7-.7L7.816 8.772l4.682-4.615a.5.5 0 01.7.7L8.166 9.8a.747.747 0 01-.35.175z" fill="currentColor" />
//                           </svg>
//                         </button>
//                         <div className={`absolute left-0 top-full w-64 bg-white rounded-lg shadow-lg transition-opacity duration-300 ${openIndex === index ? "opacity-100 visible" : "opacity-0 invisible"} lg:group-hover:visible lg:group-hover:opacity-100 lg:group-hover:top-full lg:group-hover:block`}>
//                           {menuItem.submenu.map((submenuItem) => (
//                             <Link href={submenuItem.path} key={submenuItem.id} className="block px-5 py-2.5 text-sm font-semibold text-dark duration-500 hover:bg-gray-200 dark:text-white dark:hover:bg-black/70 lg:text-center" onClick={closeNavbar}>
//                               {submenuItem.title}
//                             </Link>
//                           ))}
//                         </div>
//                       </>
//                     )}
//                   </li>
//                 ))}
//                 {isAuthenticated ? (
//                   <li>
//                     <button onClick={handleLogout} className="block w-full py-2 px-3 text-sm font-semibold text-white bg-gradient-to-tl from-indigo-900 to-purple-400 text-center rounded-3xl hover:bg-gradient-to-br sm:text-base lg:py-3 lg:px-6">
//                       Sign Out
//                     </button>
//                   </li>
//                 ) : (
//                   <>
//                     <li className="lg:hidden">
//                       <Link href="/login" className="block w-full py-2 px-3 text-sm font-semibold text-white bg-gradient-to-tl from-indigo-900 to-purple-400 text-center rounded-3xl hover:bg-gradient-to-br sm:text-base" onClick={closeNavbar}>
//                         Login
//                       </Link>
//                     </li>
//                     <li className="lg:hidden">
//                       <Link href="/signup" className="block w-full py-2 px-3 text-sm font-semibold text-white bg-gradient-to-tl from-indigo-900 to-purple-400 text-center rounded-3xl hover:bg-gradient-to-br sm:text-base" onClick={closeNavbar}>
//                         Register
//                       </Link>
//                     </li>
//                   </>
//                 )}
//               </ul>
//             </nav>
//             <div className="hidden items-center lg:flex">
//               {isAuthenticated ? (
//                 <button onClick={handleLogout} className="py-3 px-8 text-base font-bold text-white bg-gradient-to-br from-indigo-900 to-purple-400 rounded-md transition duration-500 hover:bg-opacity-90">
//                   Sign Out
//                 </button>
//               ) : (
//                 <>
//                   <Link href="/login" className="py-3 px-7 text-base font-bold text-dark dark:text-white">
//                     Login
//                   </Link>
//                   <Link href="/signup" className="py-3 px-8 text-base font-bold text-white bg-gradient-to-br from-indigo-900 to-purple-400 rounded-md transition duration-500 hover:bg-opacity-90">
//                     Register
//                   </Link>
//                 </>
//               )}
//               <ThemeToggler />
//             </div>
//             <ThemeToggler className="block lg:hidden" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import WBLlight from "@/public/images/wbl-light.png"; // Replace with the actual path
import WBLdark from "@/public/images/wbl-dark.png"; // Replace with the actual path
import { useRouter } from "next/navigation";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  // Close navbar when a menu item is clicked
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container mt-5">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-1" : "py-0"
                } `}
              >
                <Image
                  src={WBLdark}
                  alt="logo"
                  width={50}
                  height={50}
                  className="dark:hidden"
                />
                <Image
                  src={WBLlight}
                  alt="logo"
                  width={50}
                  height={50}
                  className="hidden dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between  px-4">
              <div className="">
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute  right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar -[.5px] -body-color/50 dark:-body-color/20 lg:-none absolute right-0 z-30 w-[250px] rounded bg-white py-4 px-6 duration-300 dark:bg-dark lg:visible lg:static lg:w-auto lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex px-3 py-2 text-sm font-semibold text-dark duration-500 hover:bg-gray-200 dark:text-white dark:hover:bg-black/70 sm:text-base sm:hover:bg-transparent sm:dark:hover:bg-transparent lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            onClick={closeNavbar}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="group- flex cursor-pointer items-center  justify-between px-3  py-2 text-sm font-semibold text-dark duration-500 hover:bg-gray-200 dark:text-white dark:hover:bg-black/70   sm:text-base sm:hover:bg-transparent sm:dark:hover:bg-transparent lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu  relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className="block rounded py-2.5 text-center text-sm font-semibold  text-dark  duration-500   hover:bg-gray-200 hover:font-semibold dark:text-white dark:hover:bg-black/70 sm:text-base lg:px-5"
                                  onClick={closeNavbar}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    {isAuthenticated ? (
                      <li className="lg:hidden">
                        <button
                          className="my-3 w-full block rounded-3xl bg-gradient-to-tl from-indigo-900 to-purple-400 py-2 px-3 text-center text-sm   font-bold text-white hover:bg-gradient-to-br   hover:from-indigo-900 hover:to-purple-400  sm:text-base"
                          // onClick={closeNavbar}
                          onClick={(e) => {
                            closeNavbar();
                            handleLogout();
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li className="lg:hidden">
                          <Link
                            href="/login"
                            className="my-3 block rounded-3xl bg-gradient-to-tl from-indigo-900 to-purple-400 py-2 px-3 text-center text-sm   font-bold text-white hover:bg-gradient-to-br   hover:from-indigo-900 hover:to-purple-400  sm:text-base"
                            onClick={closeNavbar}
                          >
                            Login
                          </Link>
                        </li>
                        <li className="lg:hidden">
                          <Link
                            href="/signup"
                            // className="block rounded-md py-3 text-base font-bold text-dark dark:text-white hover:to-purple-400  lg:bg-gradient-to-br lg:from-indigo-900 lg:to-purple-400 lg:hover:bg-opacity-90 lg:hover:bg-gradient-to-tl lg:hover:from-indigo-900"
                            className="block  rounded-3xl bg-gradient-to-tl from-indigo-900 to-purple-400 py-2 px-3  text-center text-sm  font-bold text-white   hover:bg-gradient-to-br hover:from-indigo-900  hover:to-purple-400 sm:text-base "
                            onClick={closeNavbar}
                          >
                            Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
              <div className=" hidden items-center justify-end  pr-16 lg:flex lg:pr-0">
                {/* <div className="ml-[] hidden  items-center justify-end pr-16 lg:flex lg:pr-0"> */}
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-gradient-to-br from-indigo-900 to-purple-400 py-3 px-8 text-base font-bold text-white transition duration-500 hover:bg-opacity-90"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="hover:shadow-signUp rounded-md bg-gradient-to-br  from-indigo-900 to-purple-400 py-3 px-8 text-base font-bold text-white duration-500 hover:bg-opacity-90 hover:bg-gradient-to-tl hover:from-indigo-900 hover:to-purple-400 md:block md:px-9 lg:px-6 xl:px-9 mr-3"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="hover:shadow-signUp rounded-md bg-gradient-to-br  from-indigo-900 to-purple-400 py-3 px-8 text-base font-bold text-white duration-500 hover:bg-opacity-90 hover:bg-gradient-to-tl hover:from-indigo-900 hover:to-purple-400 md:block md:px-9 lg:px-6 xl:px-9"
                    >
                      Register
                    </Link>
                  </>
                )}
                <div className=" items-center justify-end pr-16 lg:flex lg:pr-0">
                  <ThemeToggler />
                </div>
              </div>
              <div className="block items-center justify-end pr-16 lg:hidden  lg:pr-0">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
