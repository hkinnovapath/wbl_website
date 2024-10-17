"use client";
import Handlebars from "handlebars";
import Layout from "@/components/Common/Layout";
import Modal from "@/components/Common/Modal";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ResumePreview from "./ResumeView";
import debounce from "lodash/debounce";
import moment from "moment";
import { countries } from "country-data";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

// import { languages } from "country-codes-list";

// Cache for partials
const partialCache = {};

// Optimized fetchPartials function
const fetchPartials = async (partialsNeeded) => {
  const partials = [
    "about",
    "basics",
    "education",
    "info-tag",
    "languages",
    "resume-header",
    "skills",
    "summary",
    "social",
    "title",
    "work",
    "section-header",
  ];

  const partialPromises = partialsNeeded.map(async (partial) => {
    // Use the cache if the partial has been fetched already
    if (!partialCache[partial]) {
      try {
        const response = await fetch(`/templates/partials/${partial}.hbs`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${partial}.hbs`);
        }
        const partialString = await response.text();
        Handlebars.registerPartial(partial, partialString);
        partialCache[partial] = partialString; // Cache the result
      } catch (error) {
        console.error(`Error fetching partial: ${partial}`, error);
      }
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
    eq: (a, b) => a === b
  });
};

const skillLevels = ["Beginner", "Intermediate", "Advanced", "Master"];
const fluencyLevels = ["Beginner", "Intermediate", "Advanced", "Fluent"];

export default function Assignment() {
  const [activeSection, setActiveSection] = useState("basics");
  const [skills, setSkills] = useState([{ name: "", level: "" }]);
  const [renderedHtml, setRenderedHtml] = useState<string>("");
  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);
  const [languages, setLanguages] = useState([{ language: "", fluency: "" }]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState('+1')
  const [fullPhoneNumber, setFullPhoneNumber] = useState(`${countryCode}${phoneNumber}`);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
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
  const validateDate = (index) => {
    const entry = educationEntries[index];
    if (entry.startDate && entry.endDate && entry.startDate > entry.endDate) {
      alert("End date cannot be earlier than the start date.");
    }
  };

  //for adding previous and next buttons in the work section

  const handlePrevious = () => {
    setCurrentFormIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentFormIndex((prevIndex) => Math.min(prevIndex + 1, workEntries.length - 1));
  };



  // Handle country code change
  const handleCountryChange = (e) => {
    const selectedValue = e.target.value; // e.g., +1-US
    const newCountryCode = selectedValue.split("-")[0]; // Extract only the country code part

    // Remove the old country code from the full phone number and add the new country code
    const newFullPhoneNumber = `${newCountryCode}${phoneNumber}`;

    // Update the state with the new country code and full phone number
    setCountryCode(newCountryCode);
    setFullPhoneNumber(newFullPhoneNumber);

    // Optionally update the basics state for storing full phone details
    setBasics((prevBasics) => ({
      ...prevBasics,
      phone: newFullPhoneNumber, // Store full phone number with new country code
    }));
  };

  // Handle phone number change (this part updates the phone number input)
  const handlePhoneChange = (e) => {
    // Get the entered phone number part
    let enteredPhone = e.target.value.trim();

    // Update the phone number (without country code) in state
    setPhoneNumber(enteredPhone);

    // Combine with country code to form the full phone number
    const updatedFullPhoneNumber = `${countryCode}${enteredPhone}`;

    // Update the full phone number in state
    setFullPhoneNumber(updatedFullPhoneNumber);

    // Optionally update the basics state
    setBasics((prevBasics) => ({
      ...prevBasics,
      phone: updatedFullPhoneNumber, // Store the full number with country code
    }));
  };



  const handleInputChange = (index, field, value) => {
    setEducationEntries((prevEntries) =>
      prevEntries.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleRemoveEntry = (index) => {
    setEducationEntries((prevEntries) =>
      prevEntries.filter((_, i) => i !== index)
    );
  };

  const handleAddEntry = () => {
    setEducationEntries((prevEntries) => [
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

  const debouncedSetBasics = useMemo(() => debounce(setBasics, 100), []);

  const debouncedSetSkills = useMemo(() => debounce(setSkills, 100), []);

  const debouncedSetLanguages = useMemo(() => debounce(setLanguages, 100), []);



  // Debounced function using useMemo
  const debouncedSetWorkEntries = useMemo(
    () => debounce((newEntries) => setWorkEntries(newEntries), 100),
    []
  );

  const handleChange = (index, field, value) => {
    const updatedEntries = workEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    debouncedSetWorkEntries(updatedEntries);
  };

  const handleHighlightChange = (index, highlightIndex, value) => {
    const updatedEntries = workEntries.map((entry, i) =>
      i === index
        ? {
          ...entry,
          highlights: entry.highlights.map((h, hi) =>
            hi === highlightIndex ? value : h
          ),
        }
        : entry
    );
    setWorkEntries(updatedEntries);
  };

  const handleAddWork = () => {
    const newEntry = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [""],
    };
    setWorkEntries([...workEntries, newEntry]);
    setCurrentFormIndex(workEntries.length); // Show the new form
  };

  const handleRemoveWork = (index) => {
    if (workEntries.length > 1) {
      const updatedEntries = workEntries.filter((_, i) => i !== index);
      setWorkEntries(updatedEntries);
      if (currentFormIndex >= updatedEntries.length) {
        setCurrentFormIndex(updatedEntries.length - 1); // Ensure the form index is valid
      }
    }
  };




  const toggleSection = (section) => {
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

  // Lazy Loading and memoizing rendering for optimization
  const renderTemplate = useCallback(async () => {
    try {
      const partialsNeeded: string[] = [];
      if (basics) partialsNeeded.push("about", "resume-header", "summary", "title", "info-tag", "social", "section-header");
      if (workEntries.length > 0) partialsNeeded.push("work");
      if (educationEntries.length > 0) partialsNeeded.push("education");
      if (skills.length > 0) partialsNeeded.push("skills");
      if (languages.length > 0) partialsNeeded.push("languages");

      await fetchPartials(partialsNeeded); // Load only needed partials

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
        const { valid } = await isAuthenticated();
        if (!valid) {
          router.push("/login");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        router.push("/login");
      }
    };

    checkAuthentication();
  }, [router]);

  const handleClose = () => {
    localStorage.removeItem("access_token");
    sessionStorage.clear();
    router.push("/login");
    return setShowModal(false);
  };
  return (
    <div>
      {/* ------------------------------------------button toogles------------------------------------------------ */}



      {/* --------------------------------------------------------------------------------------------------------- */}


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
          {/* ------------------------------------------------------------------------------------------- */}
           
          <div className="space-y-6 lg:col-span-3">

            {/* ----------------------------------code without validation for basics------------------------------ */}


            {/* ------------------------------------------------------------------------------------------ */}

            {/* {activeSection === "basics" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Basics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["name", "label", "email", "phone"].map((field, index) => (
                    <div key={index}>
                      <label className="block text-gray-700 dark:text-gray-300">
                        <strong>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </strong>
                        <span className="text-red-500">*</span>
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
                    <strong>
                    Summary:
                    </strong>
                    <span className="text-red-500">*</span>
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
                        <strong>
                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </strong>
                        <span>*</span>
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
            {/* <div className="mt-4">
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
              </div> */}
            {/* )} */}

            {/* ------------------------------------------------------------------------------------- */}
            {/* ------------------------------------------------------------------------------------- */}
            {activeSection === "basics" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Basics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {["name", "label", "email"].map((field, index) => (
                    <div key={index}>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Enter your ${field}`}
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={basics[field]}
                        onChange={(e) =>
                          debouncedSetBasics({
                            ...basics,
                            [field]: e.target.value,
                          })
                        }
                        required
                        pattern={
                          field === "email"
                            ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
                            : ".*"
                        }
                        title={
                          field === "email"
                            ? "Please enter a valid email address (example@domain.com)"
                            : ""
                        }
                      />
                    </div>
                  ))}

                  {/* Country Code and Phone Number */}
                  <div className="col-span-2 flex space-x-4">
                    <div className="w-1/4">
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>Phone:</strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        {/* Country Code Dropdown */}
                        <select
                          id="country-code"
                          name="country-code"
                          className="rounded-l-md border text-sm text-gray-700 dark:text-gray-300 py-2 px-3 shadow-one focus:outline-none dark:bg-black"
                          value={countryCode}
                          onChange={handleCountryChange}
                          required
                        >
                          {countries.all.map((country) => (
                            <option
                              key={`${country.alpha2}-${country.name}`}
                              value={country.countryCallingCodes[0]}
                            >
                              {country.alpha2} {country.countryCallingCodes[0]}
                            </option>
                          ))}
                        </select>

                        {/* Phone Number Input */}
                        <input
                          type="tel"
                          placeholder="Enter your phone number"
                          className="rounded-r-md border border-gray-300 p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          required
                          pattern="[0-9]{3,15}"
                          minLength={9}
                          maxLength={15}
                          title="Phone number must be between 9 and 15 digits"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                    <strong>Summary:</strong>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter a summary"
                    className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter your ${field}`}
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                        pattern={
                          field === "postalCode" ? "[0-9]{5,10}" : ".*"
                        }
                        title={
                          field === "postalCode"
                            ? "Postal code must be between 5 and 10 digits"
                            : ""
                        }
                      />
                    </div>
                  ))}
                </div>


                {/* Profiles */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-4">Profiles</h3>
                  {basics.profiles.map((profile, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-end">
                        <button
                          className={`p-1 rounded-full mr-2 ${index === 0
                              ? "bg-gray-300 cursor-not-allowed"
                              : "bg-red-600 hover:bg-red-700"
                            }`}
                          onClick={() =>
                            debouncedSetBasics({
                              ...basics,
                              profiles: basics.profiles.filter((_, i) => i !== index),
                            })
                          }
                          disabled={index === 0}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div className="flex-grow grid grid-cols-3 gap-4 items-end">
                          {/* Network Field as Select */}
                          <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                              <strong>Network:</strong>
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                              value={profile.network}
                              onChange={(e) =>
                                debouncedSetBasics({
                                  ...basics,
                                  profiles: basics.profiles.map((p, pIndex) =>
                                    pIndex === index
                                      ? { ...p, network: e.target.value }
                                      : p
                                  ),
                                })
                              }
                              required
                            >
                              <option value="" disabled>Select network</option>
                              <option value="GitHub">GitHub</option>
                              <option value="Instagram">Instagram</option>
                              <option value="Twitter">Twitter</option>
                              <option value="LinkedIn">LinkedIn</option>
                              {/* <option value="Naukri">Naukri</option> */}
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          {/* Username Field */}
                          <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                              <strong>Username:</strong>
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter your username"
                              className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                              value={profile.username}
                              onChange={(e) =>
                                debouncedSetBasics({
                                  ...basics,
                                  profiles: basics.profiles.map((p, pIndex) =>
                                    pIndex === index
                                      ? { ...p, username: e.target.value }
                                      : p
                                  ),
                                })
                              }
                              required
                            />
                          </div>
                          {/* URL Field */}
                          <div>
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                              <strong>URL:</strong>
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="url"
                              placeholder="Enter your URL"
                              className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                              value={profile.url}
                              onChange={(e) =>
                                debouncedSetBasics({
                                  ...basics,
                                  profiles: basics.profiles.map((p, pIndex) =>
                                    pIndex === index
                                      ? { ...p, url: e.target.value }
                                      : p
                                  ),
                                })
                              }
                              required
                              pattern="https?://.+|ftp://.+"
                              title="Please enter a valid URL starting with http or https"
                            />
                          </div>
                        </div>
                        {index === basics.profiles.length - 1 && (
                          <button
                            className="p-1 rounded-full bg-blue-600 hover:bg-blue-700 ml-2"
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Work Section */}
            {activeSection === "work" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
                {workEntries.length > 0 ? (
                  <div>
                    {workEntries.map((entry, index) =>
                      index === currentFormIndex ? (
                        <div key={index} className="mb-6">
                          {/* Entry Indicator */}
                          <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
                            Entry {currentFormIndex + 1} of {workEntries.length}
                          </div>

                          {/* Form Fields */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Company Field */}
                            <div>
                              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                <strong>Company:</strong>
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter company"
                                className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                value={entry.company}
                                onChange={(e) => handleChange(index, "company", e.target.value)}
                                required
                              />
                            </div>

                            {/* Position Field */}
                            <div>
                              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                <strong>Position:</strong>
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter position"
                                className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                value={entry.position}
                                onChange={(e) => handleChange(index, "position", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          {/* Date Fields */}
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Start Date */}
                            <div>
                              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                <strong>Start Date:</strong>
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="date"
                                className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                value={entry.startDate}
                                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                                required
                              />
                            </div>

                            {/* End Date */}
                            <div>
                              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                                <strong>End Date:</strong>
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="date"
                                className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                value={entry.endDate}
                                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          {/* Summary */}
                          <div className="mt-4">
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                              <strong>Summary:</strong>
                              <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              rows={4}
                              placeholder="Enter summary"
                              className="w-full border border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                              value={entry.summary}
                              onChange={(e) => handleChange(index, "summary", e.target.value)}
                              required
                            />
                          </div>

                          {/* Highlights */}
                          <div className="mt-4">
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                              <strong>Highlights:</strong>
                              <span className="text-red-500">*</span>
                            </label>
                            {entry.highlights.map((highlight, hIndex) => (
                              <div key={hIndex} className="flex items-center mb-2">
                                <input
                                  type="text"
                                  placeholder="Highlight"
                                  className="flex-1 border border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                  value={highlight}
                                  onChange={(e) =>
                                    handleHighlightChange(index, hIndex, e.target.value)
                                  }
                                  required
                                />
                                <div className="flex space-x-2 ml-2">
                                  {/* Remove Highlight Button */}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleChange(
                                        index,
                                        "highlights",
                                        entry.highlights.filter((_, hi) => hi !== hIndex)
                                      )
                                    }
                                    className="flex items-center justify-center w-6 h-6 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none"
                                    aria-label="Remove Highlight"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-4 h-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                  </button>

                                  {/* Add Highlight Button */}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleChange(index, "highlights", [...entry.highlights, ""])
                                    }
                                    className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
                                    aria-label="Add Highlight"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-4 h-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Navigation and Action Buttons */}
                          <div className="mt-6 flex justify-between items-center">
                            {/* Navigation Buttons */}
                            <div className="flex space-x-2">
                              <button
                                type="button"
                                onClick={handlePrevious}
                                disabled={currentFormIndex === 0}
                                className={`px-3 py-1 text-xs rounded-md shadow ${currentFormIndex === 0
                                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                                  }`}
                              >
                                Previous
                              </button>
                              <button
                                type="button"
                                onClick={handleNext}
                                disabled={currentFormIndex === workEntries.length - 1}
                                className={`px-3 py-1 text-xs rounded-md shadow ${currentFormIndex === workEntries.length - 1
                                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                                  }`}
                              >
                                Next
                              </button>
                            </div>

                            {/* Add/Remove Work Buttons */}
                            <div className="flex space-x-2">
                              <button
                                type="button"
                                className={`px-3 py-1 text-xs rounded-md shadow ${workEntries.length === 1
                                    ? "bg-red-300 text-gray-400 cursor-not-allowed"
                                    : "bg-red-600 text-white hover:bg-red-700"
                                  }`}
                                onClick={() => handleRemoveWork(index)}
                                disabled={workEntries.length === 1}
                              >
                                Remove Work
                              </button>
                              <button
                                type="button"
                                className="px-3 py-1 text-xs rounded-md shadow bg-blue-600 text-white hover:bg-blue-700"
                                onClick={handleAddWork}
                              >
                                Add Work
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 dark:text-gray-400">No Work Entries Available</div>
                )}
              </div>
            )}



            {/* ---------------------------Non-validated code for education ----------------------------------- */}


            {/* ----------------------------------------------------------------------------------------------- */}

            {/* {activeSection === "education" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Education</h2>
                {educationEntries.map((entry, index) => (
                  <div key={index} className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      {["institution", "degree"].map((field, i) => (
                        <div key={i}>
                          <label className="block text-gray-700 dark:text-gray-300">
                            <strong>
                              {field.charAt(0).toUpperCase() + field.slice(1)}:
                            </strong>
                            <span className="text-red-500">*</span>
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
                            <strong>
                              {field === "startDate" ? "Start Date" : "End Date"}:
                            </strong>
                            <span className="text-red-500">*</span>
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
                        <strong>
                          Summary:
                        </strong>
                        <span className="text-red-500">*</span>
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

                  </div>
                ))}

              </div>
            )} */}

            {/*----------------------------------------------------------------------------------------------------------------  */}
            {activeSection === "education" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Education</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Institution Field */}
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>Institution:</strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter institution"
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={educationEntries[0]?.institution || ''}
                        onChange={(e) => handleInputChange(0, 'institution', e.target.value)}
                        required
                      />
                    </div>

                    {/* Degree Field */}
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>Degree:</strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter degree"
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={educationEntries[0]?.degree || ''}
                        onChange={(e) => handleInputChange(0, 'degree', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Start Date Field */}
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>Start Date:</strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={educationEntries[0]?.startDate || ''}
                        onChange={(e) => handleInputChange(0, 'startDate', e.target.value)}
                        required
                        onBlur={() => validateDate(0)}
                      />
                    </div>

                    {/* End Date Field */}
                    <div>
                      <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        <strong>End Date:</strong>
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        value={educationEntries[0]?.endDate || ''}
                        onChange={(e) => handleInputChange(0, 'endDate', e.target.value)}
                        required
                        onBlur={() => validateDate(0)}
                      />
                    </div>
                  </div>

                  {educationEntries[0]?.startDate && educationEntries[0]?.endDate && educationEntries[0].startDate > educationEntries[0].endDate && (
                    <p className="text-xs text-red-500 mt-1">End date cannot be earlier than start date</p>
                  )}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {/* {activeSection === "skills" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Skills</h2>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">
                          <strong>
                            Skill:
                          </strong>
                          <span className="text-red-500">*</span>
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
                          <strong>
                            Level:
                          </strong>
                          <span className="text-red-500">*</span>
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
            )} */}
            {activeSection === "skills" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex flex-wrap items-end space-x-2 space-y-2">
                      <div className="flex-grow min-w-[150px] max-w-[300px]">
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <strong>Skill:</strong>
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter skill"
                          className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                      <div className="w-40">
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <strong>Level:</strong>
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className={`p-2 rounded-full ${skills.length <= 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                      }`}
                    onClick={() => debouncedSetSkills(skills.slice(0, -1))}
                    disabled={skills.length <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => debouncedSetSkills([...skills, { name: "", level: "Beginner" }])}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            {/* Languages Section */}
            {activeSection === "languages" && (
              <div className="rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700">
                <h2 className="mb-4 text-xl font-bold">Languages</h2>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex flex-wrap items-end space-x-2 space-y-2">
                      <div className="flex-grow min-w-[150px] max-w-[300px]">
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <strong>Language:</strong>
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter language"
                          className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                      <div className="w-40">
                        <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                          <strong>Fluency:</strong>
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full border-b border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
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
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className={`p-2 rounded-full ${languages.length <= 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700"
                      }`}
                    onClick={() => debouncedSetLanguages(languages.slice(0, -1))}
                    disabled={languages.length <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => debouncedSetLanguages([...languages, { language: "", fluency: "Beginner" }])}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1 lg:col-span-4 lg:pl-8">
            <ResumePreview renderedHtml={renderedHtml} getJson={getJson} resumeJson={resumeJson} />
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



