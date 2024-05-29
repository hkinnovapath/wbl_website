import Layout from "../../components/Common/Layout";
import CourseContent from "../../components/courseContent/CourseContent";
export default function courseContent() {
  return (
    <div>
      {/* Main content */}
      <main className=" mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}
        <nav className="mt-16 flex items-center justify-between  ">
          <h1 className="text-4xl font-bold">Course Content </h1>
          {/* <Breadcrumb /> */}
          <Layout currentPage="courseContent" />
        </nav>
        <div className="mx-auto mb-8 max-w-6xl px-4  sm:px-6">
          <CourseContent />
        </div>
      </main>
    </div>
  );
}
