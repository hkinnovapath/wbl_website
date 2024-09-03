"use client";
import Handlebars from "handlebars";
import Layout from "@/components/Common/Layout";
import Modal from "@/components/Common/Modal";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ResumePreview from "./ResumeView";
import debounce from "lodash/debounce";
import moment from "moment";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

// import router from "next/router";

const fetchPartials = async () => {
  const partials = [
    "about",
    "basics",
    "education",
    "info-tag",
    "languages",
    "resume-header",
    "skills",
    "languages",
    "summary",
    "social",
    "title",
    "work",
    "section-header",
  ];

  const partialPromises = partials.map(async (partial) => {
    try {
      const response = await fetch(`/templates/partials/${partial}.hbs`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${partial}.hbs`);
      }
      const partialString = await response.text();
      Handlebars.registerPartial(partial, partialString);
    } catch (error) {
      console.error(`Error fetching partial: ${partial}`, error);
    }
  });

  await Promise.all(partialPromises);
};

const registerHelpers = () => {
  Handlebars.registerHelper({
    removeProtocol: (url) => url.replace(/.*?:\/\//g, ""),
    concat: (...args) => args.filter((arg) => typeof arg !== "object").join(""),
    formatAddress: (...args) =>
      args.filter((arg) => typeof arg !== "object").join(" "),
    formatDate: (date) => moment(date).format("MM/YYYY"),
    lowercase: (s) => s.toLowerCase(),
    eq: (a, b) => a === b,
  });
};

const skillLevels = ["Beginner", "Intermediate", "Advanced", "Master"];
const fluencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent"];

export default function Assignment  ()  {
  const [activeSection, setActiveSection] = useState("basics");
  const [skills, setSkills] = useState([{ name: "", level: "" }]);
  const [renderedHtml, setRenderedHtml] = useState<string>("");
  const [languages, setLanguages] = useState([{ language: "", fluency: "" }]);
  const router = useRouter(); // Initialize router
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [basics, setBasics] = useState({
    name: "",
    label: "",
    email: "",
    phone: "",
    url: "",
    summary: "",
    location: {
      address: "",
      postalCode: "",
      city: "",
      countryCode: "",
    },
    profiles: [{ network: "", username: "", url: "" }],
  });
  const [workEntries, setWorkEntries] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [""],
    },
  ]);
  const [educationEntries, setEducationEntries] = useState([
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      summary: "",
    },
  ]);
  const handleInputChange = (index, field, value) => {
    setEducationEntries(prevEntries =>
      prevEntries.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleRemoveEntry = (index) => {
    setEducationEntries(prevEntries =>
      prevEntries.filter((_, i) => i !== index)
    );
  };

  const handleAddEntry = () => {
    setEducationEntries(prevEntries => [
      ...prevEntries,
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        summary: "",
      },
    ]);
  };

  const debouncedSetBasics = useMemo(
    () => debounce(setBasics, 100),
    []
  );

  const debouncedSetSkills = useMemo(
    () => debounce(setSkills, 100),
    []
  );

  const debouncedSetLanguages = useMemo(
    () => debounce(setLanguages, 100),
    []
  );

  const debouncedSetWorkEntries = useMemo(
    () => debounce(setWorkEntries, 100),
    []
  );

  const debouncedSetEducationEntries = useMemo(
    () => debounce(setEducationEntries, 100),
    []
  );

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const resumeJson = {
    basics,
    work: workEntries,
    education: educationEntries,
    skills,
    languages,
  };

  const getJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(resumeJson, null, 2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "resume_data.json";
    link.click();
  };

  const renderTemplate = useCallback(async () => {
    try {
      await fetchPartials(); // Register partials before rendering
      const response = await fetch("/templates/resume.hbs");
      if (!response.ok) {
        throw new Error("Failed to fetch resume.hbs");
      }
      const templateString = await response.text();
      const template = Handlebars.compile(templateString);
      const resume = {
        basics,
        work: workEntries,
        education: educationEntries,
        skills,
        languages,
      };
      const html = template(resume);
      // console.log("Rendered HTML:", html);
      setRenderedHtml(html);
    } catch (error) {
      console.error("Error rendering template", error);
    }
  }, [basics, workEntries, educationEntries, skills, languages]);

  useEffect(() => {
    registerHelpers();
    renderTemplate();
  }, [renderTemplate]);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const { valid, message } = await isAuthenticated();
        if (!valid) {
          router.push("/login");
          // setErrorMessage(message);
          // setShowModal(true); // Show modal if not valid
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        // setErrorMessage("An error occurred while checking authentication");
        // setShowModal(true);
        router.push("/login");
      }
    };

    checkAuthentication();
  }, [router]); // Empty dependency array to run effect only once on mount


  const handleClose = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    router.push("/login");
    return setShowModal(false);
  };

  return (
    <div>
    <main className="container mx-auto px-4 pb-6 dark:bg-gray-800 dark:text-white sm:px-6">
      <nav className="mt-20 flex h-28 flex-col items-start justify-center sm:mt-28 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-center text-2xl font-bold sm:pt-0 sm:text-start sm:text-3xl lg:text-4xl">
          Create Resume
        </h1>
        <div className="hidden sm:block">
          <Layout currentPage="Resume" />
        </div>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-8">
        <div className="col-span-1 lg:col-span-1">
          <ul className="space-y-2">
            {["Basics", "Work", "Education", "Skills", "Languages"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => toggleSection(section.toLowerCase())}
                    className={`w-full border-l-4 px-4 py-2 text-left font-semibold transition-all ${activeSection === section.toLowerCase()
                        ? "border-indigo-600 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300"
                        : "border-transparent text-gray-800 dark:text-gray-300"
                      }`}
                  >
                    {section}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="space-y-6 lg:col-span-4">
          {activeSection === "basics" && (
            <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-bold">Basics</h2>
              <div className="grid grid-cols-2 gap-4">
                {["name", "label", "email", "phone"].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 dark:text-gray-300">
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      placeholder={`Enter your ${field}`}
                      className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      value={basics[field]}
                      onChange={(e) =>
                        debouncedSetBasics({
                          ...basics,
                          [field]: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Summary:
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter a summary"
                  className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  value={basics.summary}
                  onChange={(e) =>
                    debouncedSetBasics({ ...basics, summary: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {["address", "postalCode", "city", "countryCode"].map((field, index) => (
                  <div key={index}>
                    <label className="block text-gray-700 dark:text-gray-300">
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter your ${field}`}
                      className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      value={basics.location[field]}
                      onChange={(e) =>
                        debouncedSetBasics({
                          ...basics,
                          location: {
                            ...basics.location,
                            [field]: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                ))}
              </div>
              {/* Profiles */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Profiles</h3>
                {basics.profiles.map((profile, index) => (
                  <div key={index} className="mb-4">
                    <div className="grid grid-cols-3 gap-4">
                      {["network", "username", "url"].map((field, i) => (
                        <div key={i}>
                          <label className="block text-gray-700 dark:text-gray-300">
                            {field.charAt(0).toUpperCase() + field.slice(1)}:
                          </label>
                          <input
                            type={field === "url" ? "url" : "text"}
                            placeholder={`Enter your ${field}`}
                            className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                            value={profile[field]}
                            onChange={(e) =>
                              debouncedSetBasics({
                                ...basics,
                                profiles: basics.profiles.map((p, pIndex) =>
                                  pIndex === index
                                    ? { ...p, [field]: e.target.value }
                                    : p
                                ),
                              })
                            }
                            required
                          />
                        </div>
                      ))}
                    </div>
                    <button
                      className="mt-2 text-red-600 dark:text-red-400"
                      onClick={() =>
                        debouncedSetBasics({
                          ...basics,
                          profiles: basics.profiles.filter((_, i) => i !== index),
                        })
                      }
                    >
                      Remove Profile
                    </button>
                  </div>
                ))}
                <button
                  className="mt-2 text-blue-600 dark:text-blue-400"
                  onClick={() =>
                    debouncedSetBasics({
                      ...basics,
                      profiles: [
                        ...basics.profiles,
                        { network: "", username: "", url: "" },
                      ],
                    })
                  }
                >
                  Add Profile
                </button>
              </div>
            </div>
          )}

          {/* Work Section */}
          {activeSection === "work" && (
            <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
              {workEntries.map((entry, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {["company", "position"].map((field, i) => (
                      <div key={i}>
                        <label className="block text-gray-700 dark:text-gray-300">
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <input
                          type="text"
                          placeholder={`Enter ${field}`}
                          className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={entry[field]}
                          onChange={(e) =>
                            debouncedSetWorkEntries(
                              workEntries.map((w, i) =>
                                i === index ? { ...w, [field]: e.target.value } : w
                              )
                            )
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {["startDate", "endDate"].map((field, i) => (
                      <div key={i}>
                        <label className="block text-gray-700 dark:text-gray-300">
                          {field === "startDate" ? "Start Date" : "End Date"}:
                        </label>
                        <input
                          type="date"
                          placeholder={`Enter ${field}`}
                          className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={entry[field]}
                          onChange={(e) =>
                            debouncedSetWorkEntries(
                              workEntries.map((w, i) =>
                                i === index ? { ...w, [field]: e.target.value } : w
                              )
                            )
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 dark:text-gray-300">
                      Summary:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter summary"
                      className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      value={entry.summary}
                      onChange={(e) =>
                        debouncedSetWorkEntries(
                          workEntries.map((w, i) =>
                            i === index ? { ...w, summary: e.target.value } : w
                          )
                        )
                      }
                      required
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 dark:text-gray-300">
                      Highlights:
                    </label>
                    {entry.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="mb-2 flex items-center">
                        <input
                          type="text"
                          placeholder="Highlight"
                          className="w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={highlight}
                          onChange={(e) =>
                            debouncedSetWorkEntries(
                              workEntries.map((w, i) =>
                                i === index
                                  ? {
                                    ...w,
                                    highlights: w.highlights.map((h, hi) =>
                                      hi === hIndex ? e.target.value : h
                                    ),
                                  }
                                  : w
                              )
                            )
                          }
                        />
                        <button
                          className="ml-2 text-red-600 dark:text-red-400"
                          onClick={() =>
                            debouncedSetWorkEntries(
                              workEntries.map((w, i) =>
                                i === index
                                  ? {
                                    ...w,
                                    highlights: w.highlights.filter(
                                      (_, hi) => hi !== hIndex
                                    ),
                                  }
                                  : w
                              )
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      className="mt-2 text-blue-600 dark:text-blue-400"
                      onClick={() =>
                        debouncedSetWorkEntries(
                          workEntries.map((w, i) =>
                            i === index
                              ? {
                                ...w,
                                highlights: [...w.highlights, ""],
                              }
                              : w
                          )
                        )
                      }
                    >
                      Add Highlight
                    </button>
                  </div>
                  <button
                    className="mt-2 text-red-600 dark:text-red-400"
                    onClick={() =>
                      debouncedSetWorkEntries(workEntries.filter((_, i) => i !== index))
                    }
                  >
                    Remove Work Entry
                  </button>
                </div>
              ))}
              <button
                className="text-blue-600 dark:text-blue-400"
                onClick={() =>
                  debouncedSetWorkEntries([
                    ...workEntries,
                    {
                      company: "",
                      position: "",
                      startDate: "",
                      endDate: "",
                      summary: "",
                      highlights: [""],
                    },
                  ])
                }
              >
                Add Work Entry
              </button>
            </div>
          )}


          {activeSection === "education" && (
            <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-bold">Education</h2>
              {educationEntries.map((entry, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {["institution", "degree"].map((field, i) => (
                      <div key={i}>
                        <label className="block text-gray-700 dark:text-gray-300">
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <input
                          type="text"
                          placeholder={`Enter ${field}`}
                          className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={entry[field] || ''}
                          onChange={(e) =>
                            handleInputChange(index, field, e.target.value)
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {["startDate", "endDate"].map((field, i) => (
                      <div key={i}>
                        <label className="block text-gray-700 dark:text-gray-300">
                          {field === "startDate" ? "Start Date" : "End Date"}:
                        </label>
                        <input
                          type="date"
                          placeholder={`Enter ${field}`}
                          className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={entry[field] || ''}
                          onChange={(e) =>
                            handleInputChange(index, field, e.target.value)
                          }
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 dark:text-gray-300">
                      Summary:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter summary"
                      className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      value={entry.summary || ''}
                      onChange={(e) =>
                        handleInputChange(index, 'summary', e.target.value)
                      }
                      required
                    />
                  </div>
                  <button
                    className="mt-2 text-red-600 dark:text-red-400"
                    onClick={() => handleRemoveEntry(index)}
                  >
                    Remove Education Entry
                  </button>
                </div>
              ))}
              <button
                className="text-blue-600 dark:text-blue-400"
                onClick={handleAddEntry}
              >
                Add Education Entry
              </button>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-bold">Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Skill:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter skill"
                        className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={skill.name}
                        onChange={(e) =>
                          debouncedSetSkills(
                            skills.map((s, i) =>
                              i === index ? { ...s, name: e.target.value } : s
                            )
                          )
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Level:
                      </label>
                      <select
                        className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={skill.level}
                        onChange={(e) =>
                          debouncedSetSkills(
                            skills.map((s, i) =>
                              i === index ? { ...s, level: e.target.value } : s
                            )
                          )
                        }
                        required
                      >
                        {skillLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    className="mt-2 text-red-600 dark:text-red-400"
                    onClick={() =>
                      debouncedSetSkills(skills.filter((_, i) => i !== index))
                    }
                  >
                    Remove Skill
                  </button>
                </div>
              ))}
              <button
                className="text-blue-600 dark:text-blue-400"
                onClick={() =>
                  debouncedSetSkills([...skills, { name: "", level: "Beginner" }])
                }
              >
                Add Skill
              </button>
            </div>
          )}

          {/* Languages Section */}
          {activeSection === "languages" && (
            <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
              <h2 className="mb-4 text-xl font-bold">Languages</h2>
              {languages.map((lang, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Language:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter language"
                        className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={lang.language}
                        onChange={(e) =>
                          debouncedSetLanguages(
                            languages.map((l, i) =>
                              i === index ? { ...l, language: e.target.value } : l
                            )
                          )
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300">
                        Fluency:
                      </label>
                      <select
                        className="mt-1 w-full border-b border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={lang.fluency}
                        onChange={(e) =>
                          debouncedSetLanguages(
                            languages.map((l, i) =>
                              i === index ? { ...l, fluency: e.target.value } : l
                            )
                          )
                        }
                        required
                      >
                        {fluencyLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    className="mt-2 text-red-600 dark:text-red-400"
                    onClick={() =>
                      debouncedSetLanguages(languages.filter((_, i) => i !== index))
                    }
                  >
                    Remove Language
                  </button>
                </div>
              ))}
              <button
                className="text-blue-600 dark:text-blue-400"
                onClick={() =>
                  debouncedSetLanguages([
                    ...languages,
                    { language: "", fluency: "Beginner" },
                  ])
                }
              >
                Add Language
              </button>
            </div>
          )}
        </div>

        <div className="col-span-1 lg:col-span-3 lg:pl-8">
          <ResumePreview renderedHtml={renderedHtml} getJson={getJson}  resumeJson={resumeJson}/>
        </div>
      </div>
      </main>
      {showModal && (
        <Modal
          title="Authentication Error"
          message={errorMessage}
          onClose={handleClose}
        />
      )} 
   </div>
  );
};

// export default MyComponent;


