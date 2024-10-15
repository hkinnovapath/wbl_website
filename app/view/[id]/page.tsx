import { Suspense } from "react";

async function fetchResumeData(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_RESUME_API_URL || 'http://localhost:8001/api/node';
  console.log('API URL:', apiUrl);

  try {
    const response = await fetch(`${apiUrl}/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching resume data:', error);
    throw error;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    console.log('Fetching resume data for ID:', params.id);
    const resumeHtml = await fetchResumeData(params.id);
    
    return (
      <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
    );
  } catch (error) {
    console.error('Error in Page component:', error);
    return <div>Error: {(error as Error).message}</div>;
  }
}