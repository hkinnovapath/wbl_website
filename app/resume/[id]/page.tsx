import ResumeContent from "../resumePdf";

// /resume/[id]/page.tsx

// This function tells Next.js there are no static paths to generate
export async function generateStaticParams() {
  // Return an empty array because we don't need to generate any pages statically
  return [];
}

export default function Assignment() {
  return <ResumeContent />;
}
