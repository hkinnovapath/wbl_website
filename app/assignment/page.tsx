import Layout from "../../components/Common/Layout";

export default function Assignment() {
  return (
    <div>
      {/* Main content */}
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Navbar */}
        <nav className="flex items-center justify-between mt-24 ">
          <h1 className="text-4xl font-bold">Assignment Page</h1>
          {/* <Breadcrumb /> */}
          <Layout currentPage="Assignment" />
        </nav>
        <div className="mt-32 text-center text-6xl text-red-600">
          {" "}
          Page coming soon ......
        </div>
      </main>
    </div>
  );
}
