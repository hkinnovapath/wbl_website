import { Suspense } from "react";

async function fetchResumeData(id: string) {
  const apiUrl =process.env.RESUME_PUBLIC_API_URL;
  // console.log('API URL:', apiUrl);

  try {
    const response = await fetch(`${apiUrl}/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    // console.error('Error fetching resume data:', error);
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    // console.log('Fetching resume data for ID:', params.id);
    const resumeHtml = await fetchResumeData(params.id);
    
    return (
      // <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
      <div className="fixed inset-0 w-screen h-screen m-0 p-0 flex justify-center items-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200">
        <div className="w-[90%] h-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            srcDoc={resumeHtml}
            className="w-full h-full border-none rounded-2xl"
            title="Resume"
          />
        </div>
      </div>
    );
  } catch (error) {
    // console.error('Error in Page component:', error);
    return <div>Error: {(error as Error).message}</div>;
  }
}

