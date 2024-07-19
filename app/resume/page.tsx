import Layout from "@/components/Common/Layout";

export default function Assignment() {
  return (
    <div>
      {/* Main content */}
      <main className=" mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-2xl font-bold sm:text-4xl">Resume </h1>
          {/* <Breadcrumb /> */}
          <div className="hidden sm:block">
            <Layout currentPage="Resume"/>
          </div>
        </nav>
        <div className="mt-32 pb-24 text-center text-xl text-red-600 sm:text-4xl md:text-5xl lg:text-6xl">
          {" "}
          Page coming soon ......
          <svg
            width="40"
            height="100"
            className="w-full mt-20 fill-current  text-center"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // fill="#000"
              className="dark:text-white text-dark "
              d="M43.935,25.145c0-10.318-8.365-18.684-18.684-18.684c-10.318,0-18.684,8.365-18.684,18.684h4.068
    c0-8.079,6.537-14.616,14.616-14.616s14.616,6.537,14.616,14.616H43.935z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </main>
    </div>
  );
}
