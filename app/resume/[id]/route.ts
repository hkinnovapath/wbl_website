import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return new Response('Missing id parameter', { status: 400 });
  }

  try {
    // Fetch the HTML from your backend using the 'id'
    const response = await fetch(`http://localhost:8001/api/resume/${id}`);

    if (response.status === 200) {
      const resumeHtml = await response.text();

      // Serve the HTML directly as a public-facing page
      return new Response(resumeHtml, {
        headers: { 'Content-Type': 'text/html' },
        status: 200,
      });
    } else {
      return new Response('Resume not found.', { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching resume:', error);
    return new Response('An error occurred while retrieving the resume.', { status: 500 });
  }
}
