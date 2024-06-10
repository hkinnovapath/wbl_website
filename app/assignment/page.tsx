import Layout from "../../components/Common/Layout";

export default function Assignment() {
  return (
    <div>
      {/* Main content */}
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Navbar */}
        {/* <nav className="mt-16 flex items-center justify-between  ">
          <h1 className="text-4xl font-bold">Assignment Page</h1> */}
          <nav className="mt-16 flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold">Assignment </h1>
          {/* <Breadcrumb /> */}
          <div className="hidden sm:block">
         <Layout currentPage="Assignment" />
         </div>
        </nav>
        <div className="mt-32 pb-24 text-center text-xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600">
          {" "}
          Page coming soon ......
          <svg
  width="40"
  height="100"
  className="text-center  w-full  fill-current"
  viewBox="0 0 50 50"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#000"
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
