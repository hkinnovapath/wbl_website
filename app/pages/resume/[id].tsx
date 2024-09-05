import { GetServerSideProps } from "next";

const ResumePage = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
const apiUrl = process.env.RESUME_PUBLIC_API_URL;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id;
  const response = await fetch(`${apiUrl}/${id}`);
  const html = await response.text();

  return {
    props: {
      html,
    },
  };
};

export default ResumePage;