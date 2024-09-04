import { notFound } from "next/navigation";

// app/resume/[id]/page.tsx

// Define the type for the parameters
type Props = {
  params: {
    id: string;
  };
};

export default async function ResumePage({ params }: Props) {
  const { id } = params;
  const backendUrl = process.env.RESUME_PUBLIC_API_URL || 'http://localhost:8001';

  if (!id) {
    return notFound(); // Return a 404 page if no ID is provided
  }

  try {
    const response = await fetch(`${backendUrl}/api/resume/${id}`);

    if (response.ok) {
      const resumeHtml = await response.text();
      return (
        <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
      );
    } else {
      return notFound(); // Return a 404 page if the resume is not found
    }
  } catch (error) {
    console.error('Error fetching resume:', error);
    return (
      <div>An error occurred while retrieving the resume.</div>
    );
  }
}
