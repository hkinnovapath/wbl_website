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
          <h1 className="text-2xl sm:text-4xl font-bold">Assignment Page</h1>
          {/* <Breadcrumb /> */}
          <div className="hidden sm:block">
         <Layout currentPage="Assignment" />
         </div>
        </nav>
        <div className="mt-32 pb-20 text-center text-xl sm:text-4xl md:text-5xl lg:text-6xl text-red-600">
          {" "}
          Page coming soon ......
        </div>
      </main>
    </div>
  );
}
