import Accordion from "@/components/Faq";
import Layout from "@/components/Common/Layout";
import Link from "next/link";

export default function Faq() {
  return (
    <div>
      {/* Main content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Navbar */}

        <nav className="mt-16 flex-none sm:flex sm:items-center sm:justify-between  ">
          <h1 className="py-5 text-center text-2xl font-bold sm:py-0 sm:text-3xl lg:text-4xl ">
            Frequently Asked Questions
          </h1>
          <div className="hidden sm:block">
            <Layout currentPage="FAQ" />
          </div>
        </nav>
        <div className="border dark:border-gray-800 ">
          <div className="rounded-lg bg-white dark:bg-transparent">
            <Accordion  
              title="What are the courses Whitebox-Learning Offers?"
              content="Fullstack Development, DSML(Data Science and Machine Learning)"
            />
            <Accordion
              title="Do you provide corporate training?"
              content="Yes, we do."
            />
            <Accordion
              title="Are all your classes online or in-person?"
              content="Most of our classes are online, but we also do in-person classes at our Dublin office."
            />
            <Accordion
              title="Are all classes mandatory for training?"
              content="Yes, You need to attend all our morning and evening classes for training. The topics covered in morning and evening sessions are different."
            />
            <Accordion
              title="Where are we located?"
              content="We are located at  6500 Dublin Blvd #214, Dublin, CA 94568"
            />
            <Accordion
              title="What if I miss any of your classes?"
              content="All our classes will be recorded and uploaded to  our learning management portal. So you can go through the recording of the class if you miss it and can access it at any given time. You may also go through previous batch recordings in case you want to come prepared for certain class."
            />
            <Accordion
              title="What's the duration of courses you offer?"
              content="8 Weeks to 12 weeks Duration."
            />
            <Accordion
              title="Do I need to have any prior experience to join your courses?"
              content="No prior experience is required. Any bachelor's degree is sufficient to enroll into our courses and get placed in a project. We only expect minimum 20 hrs/week of commitment from a candidate without any computer science background."
            />
            <Accordion
              title="Do you have Lab facilities in your institute?"
              content="Yes, We have a training room where we have sufficient machines with tools installed. You can also access these machines online via teamviewer."
            />
            <Accordion
              title="Do you charge any fee for the training?"
              content="Enrollment fee: $725(for Training and Placement servies)  Training fee:$6500(Corporate Training).Please contact our Recruiting Team at  +1 925-557-1053  for more information."
            />
            <Accordion
              title="What are the other formalities that I need to complete to enroll in your courses?"
              content="You need to sign our training agreement and submit few documents. Please contact our Recruiting Team at  +1 925-557-1053  for more information."
            />
            <Accordion
              title="Will you help in resume preparation?"
              content="Yes, We do."
            />
            <Accordion
              title="Will you help in interview preparation?"
              content="Yes, our training team will do mock interviews and interview preparation sessions for you."
            />           
            <Accordion
              title="Where can I find your class schedules and syllabus for training?"
              content={
                <>
                  Please follow the links to go through : 
                  <Link href="/schedule" className="inline-block">
                    <h1 className="text-blue-600 dark:text-blue-500">Class Schedule and Syllabus(Course Content)</h1>
                  </Link>
                </>
              }          
            />
          </div>
        </div>
      </main>
    </div>
  );
}
