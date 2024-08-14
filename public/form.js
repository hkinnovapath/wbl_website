let workEntryCount = 0;

function addWorkEntry(button) {
  const container = document.getElementById("work-section");

  // Create a new work entry form
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("work-entry");
  entryDiv.innerHTML = `
    <div class="form-group mb-4">
                    <label for="work_company" class="block mb-2"
                      >Company:</label
                    >
                    <input
                      type="text"
                      id="work_company"
                      name="work_name[]"
                      class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="work_position" class="block mb-2"
                      >Position:</label
                    >
                    <input
                      type="text"
                      id="work_position"
                      name="work_position[]"
                      class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="work_startDate" class="block mb-2"
                      >Start Date:</label
                    >
                    <input
                      type="date"
                      id="work_startDate"
                      name="work_startDate[]"
                      class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="work_endDate" class="block mb-2"
                      >End Date:</label
                    >
                    <input
                      type="date"
                      id="work_endDate"
                      name="work_endDate[]"
                      class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="work_summary" class="block mb-2"
                      >Summary:</label
                    >
                    <textarea
                      id="work_summary"
                      name="work_summary[]"
                      class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                    ></textarea>
                  </div>
                  <!-- Highlights Subsection -->
                  <h3 class="text-lg font-semibold mb-2">Highlights</h3>
                  <div class="form-group mb-4">
                    <ul class="highlights-list space-y-2">
                      <li>
                        <input
                          type="text"
                          name="work_highlights[]"
                          class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black"
                        />
                      </li>
                    </ul>
                    <button
                      type="button"
                      class=mt-2 rounded bg-green-500 p-2 text-white"
                      onclick="addHighlight(this)"
                    >
                      Add Highlight
                    </button>
                  </div>
                </div>
              </div>
              
  <div class="flex justify-evenly space-x-2 w-full">
  <button
    type="button"
    class="md:text-md w-36 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-200 p-1 py-2 px-1 text-[11px] font-bold text-black hover:bg-indigo-700 hover:from-indigo-500 hover:to-indigo-200 dark:text-white sm:py-2 sm:px-4 sm:text-sm"
    onclick="addWorkEntry()"
  >
    Add Work
  </button>
  <button
    type="button"
    class="md:text-md w-36 rounded-lg bg-gradient-to-br from-red-500 to-red-600 p-1 py-2 px-1 text-[11px] font-bold text-white hover:bg-red-700 hover:from-red-500 hover:to-red-600 mt-2 dark:text-white sm:py-2 sm:px-4 sm:text-sm"
    onclick="removeEntry(this)"
  >
    Remove Entry
  </button>
</div>

  `;
  container.appendChild(entryDiv);
  workEntryCount++;
}

function removeEntry(button) {
  const entryDiv = button.closest(".work-entry");
  entryDiv.remove();
}

function removeHighlight(button) {
  const li = button.closest("li");
  li.remove();
}

// Initialize with one work entry

// Function to remove an education entry
function removeEntry(button) {
  button.parentElement.remove();
}

function addEducationEntry() {
  const container = document.getElementById("education-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("education-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="education_institution">Institution:</label>
      <input type="text" name="education_institution[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div><br>
    <div class="form-group">
      <label for="education_area">Area of Study:</label>
      <input type="text" name="education_area[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div><br>
    <div class="form-group">
      <label for="education_startDate">Start Date:</label>
      <input type="date" name="education_startDate[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div><br>
    <div class="form-group">
      <label for="education_endDate">End Date:</label>
      <input type="date" name="education_endDate[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div><br>
    <div class="form-group">
      <label for="education_score">Score:</label>
      <input type="text" name="education_score[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div><br>
    <button type="button" onclick="removeEntry(this)" 
    class="md:text-md w-36 rounded-lg bg-gradient-to-br from-red-500 to-red-200 p-1 px-1 text-[11px] font-bold text-black shadow-xl hover:bg-red-700 hover:bg-gradient-to-tl hover:from-red-500 hover:to-red-200 dark:text-white sm:py-2 sm:px-4 sm:text-sm"
    >Remove</button>
  `;

  // Get the "Add Education" button
  const addButton = document.querySelector(
    'button[onclick= "addEducationEntry()"]'
  );

  // Get the parent element of the button
  const parentElement = addButton.parentNode;

  // Insert the new entry before the button
  parentElement.insertBefore(entryDiv, addButton);
}

// Function to remove a certificate entry
function removeEntry(button) {
  button.parentElement.remove();
}

function addCertificateEntry() {
  const container = document.getElementById("certificates-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("certificate-entry"); // Add the CSS class

  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="certificates_name">Name:</label>
      <input type="text" name="certificates_name[]" class="form-control w-full rounded-xl border border-gray-500 bg-gray-100 p-2 text-black" />
    </div>
    <div class="form-group">
      <label for="certificates_date">Date:</label>
      <input type="date" name="certificates_date[]" class="form-control w-full p-2 bg-gray-100 text-black border border-gray-500 rounded" />
    </div>
    <button type="button" class="bg-red-500 text-white p-2 rounded mt-4" onclick="removeEntry(this)">Remove</button>
  `;

  // Get the "Add Certificate" button
  const addButton = document.querySelector(
    'button[onclick="addCertificateEntry()"]'
  );

  // Get the parent element of the button
  const parentElement = addButton.parentNode;

  // Insert the new entry before the button
  parentElement.insertBefore(entryDiv, addButton);
}

// Function to remove a skill entry
function removeEntry(button) {
  button.parentElement.remove();
}

function addSkillEntry() {
  const container = document.getElementById("skills-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("skill-entry");
  entryDiv.innerHTML = `
   <div class="form-group mb-4">
      <label for="skills_name" class="block mb-2">Skill:</label>
      <input type="text" name="skills_name[]" class="form-control w-full rounded border border-gray-500 bg-gray-100 p-2 text-black"/>
    </div>
    <div class="form-group">
      <label for="skills_level" class="block mb-2">Level:</label>
      <select name="skills_level[]" class="form-control w-full rounded border border-gray-500 bg-gray-100 p-2 text-black"">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
    <button type="button" class="bg-red-500 text-white p-2 rounded mt-4" onclick="removeEntry(this)">Remove</button>
  `;

  // Get the "Add Skill" button
  const addButton = document.querySelector('button[onclick="addSkillEntry()"]');

  // Get the parent element of the button
  const parentElement = addButton.parentNode;

  // Insert the new entry before the button
  parentElement.insertBefore(entryDiv, addButton);
}

// Function to remove a language entry
function removeEntry(button) {
  button.parentElement.remove();
}

function addLanguageEntry() {
  const container = document.getElementById("languages-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("language-entry");

  entryDiv.innerHTML = `
    <div class="form-group mb-4">
      <label for="languages_language" class="block mb-2">Language:</label>
      <input type="text" name="languages_language[]" class="form-control w-full rounded border border-gray-500 bg-gray-100 p-2 text-black""/>
    </div>
    <div class="form-group">
      <label for="languages_fluency" class="block mb-2">Fluency:</label>
      <select name="languages_fluency[]" class="form-control w-full rounded border border-gray-500 bg-gray-100 p-2 text-black"">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Native">Native</option>
      </select>
    </div>
    <button type="button" class="bg-red-500 text-white p-2 rounded mt-4" onclick="removeEntry(this)">Remove</button>
  `;

  container.appendChild(entryDiv);

  // Get the "Add Language" button
  const addButton = document.querySelector(
    'button[onclick="addLanguageEntry()"]'
  );

  // Get the parent element of the button
  const parentElement = addButton.parentNode;

  // Insert the new entry before the button
  parentElement.insertBefore(entryDiv, addButton);
}

// Function to remove an entry (interest or keyword)
function removeEntry(button) {
  button.parentElement.remove();
}

function addHighlight(button) {
  const highlightsList = button.previousElementSibling;

  // Remove the delete button from the last highlight if it exists
  const lastHighlight = highlightsList.querySelector("li:last-child button");
  if (lastHighlight) {
    lastHighlight.remove();
  }

  const newHighlight = document.createElement("li");
  const index = highlightsList.querySelectorAll("li").length;
  newHighlight.innerHTML = `
    <input
                          type="text"
                          name="work_highlights[]"
                          class="form-control w-full p-2 bg-gray-100 text-black border border-gray-500 rounded"
                        />
   <button
  type="button"
  class="p-2 text-red-600 flex items-center space-x-2"
  onclick="deleteHighlight(this)"
>
Delete
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
</button>


  `;
  highlightsList.appendChild(newHighlight);
}

function deleteHighlight(button) {
  const highlightItem = button.parentElement;
  highlightItem.remove();

  // If there are other highlights, add the delete button to the last one
  const highlightsList = document.querySelector(".highlights-list");
  const lastHighlight = highlightsList.querySelector("li:last-child");
  if (lastHighlight && !lastHighlight.querySelector("button")) {
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.onclick = () => deleteHighlight(deleteButton);
    deleteButton.textContent = "Delete";
    lastHighlight.appendChild(deleteButton);
  }
}

let htmlContent = "";
let jsonFileContent;

function submitJson() {
  const form = document.getElementById("submit-form");
  const formData = new FormData(form);
  const jsonObject = {
    basics: {
      name: formData.get("basics_name"),
      label: formData.get("basics_label"),
      email: formData.get("basics_email"),
      phone: formData.get("basics_phone"),
      summary: formData.get("basics_summary"),
      location: {
        address: formData.get("basics_location_address"),
        postalCode: formData.get("basics_location_postalCode"),
        city: formData.get("basics_location_city"),
        countryCode: formData.get("basics_location_countryCode"),
      },
      profiles: [],
    },
    work: [],
    education: [],
    certificates: [],
    skills: [],
    languages: [],
  };

  // Add profiles
  const profilesContainer = document.getElementById("profiles-container");
  const profiles = profilesContainer.querySelectorAll(".profile");
  profiles.forEach((profile) => {
    jsonObject.basics.profiles.push({
      network: profile.querySelector('input[name="basics_profiles_network[]"]')
        .value,
      username: profile.querySelector(
        'input[name="basics_profiles_username[]"]'
      ).value,
      url: profile.querySelector('input[name="basics_profiles_url[]"]').value,
    });
  });

  // Add work experience
  const workEntries = document.querySelectorAll(".work-entry");
  workEntries.forEach((entry) => {
    jsonObject.work.push({
      name: entry.querySelector('input[name^="work_name"]').value,
      position: entry.querySelector('input[name^="work_position"]').value,
      startDate: entry.querySelector('input[name^="work_startDate"]').value,
      endDate: entry.querySelector('input[name^="work_endDate"]').value,
      summary: entry.querySelector('textarea[name^="work_summary"]').value,
      highlights: Array.from(
        entry.querySelectorAll('input[name^="work_highlights"]')
      ).map((input) => input.value),
    });
  });

  //console.log(JSON.stringify(jsonObject, null, 2));

  // Add education
  const educationEntries = document.querySelectorAll(".education-entry");
  educationEntries.forEach((entry) => {
    jsonObject.education.push({
      institution: entry.querySelector('input[name="education_institution[]"]')
        .value,
      area: entry.querySelector('input[name="education_area[]"]').value,
      startDate: entry.querySelector('input[name="education_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="education_endDate[]"]').value,
      score: entry.querySelector('input[name="education_score[]"]').value,
    });
  });

  // Add certificates
  const certificateEntries = document.querySelectorAll(".certificate-entry");
  certificateEntries.forEach((entry) => {
    jsonObject.certificates.push({
      name: entry.querySelector('input[name="certificates_name[]"]').value,

      date: entry.querySelector('input[name="certificates_date[]"]').value,
    });
  });
  const skillEntries = document.querySelectorAll(".skill-entry");
  skillEntries.forEach((entry) => {
    jsonObject.skills.push({
      name: entry.querySelector('input[name="skills_name[]"]').value,
      level: entry.querySelector('select[name="skills_level[]"]').value,
    });
  });
  const languageEntries = document.querySelectorAll(".language-entry");
  languageEntries.forEach((entry) => {
    jsonObject.languages.push({
      language: entry.querySelector('input[name="languages_language[]"]').value,
      fluency: entry.querySelector('select[name="languages_fluency[]"]').value,
    });
  });

  let jsonString = JSON.stringify(jsonObject, null, 2);
  jsonFileContent = jsonString;

  fetch(`http://localhost:8001/submit-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  })
    .then((response) => response.json())
    .then((data) => {
      htmlContent = data.html; // Save the HTML content
      const iframe = document.getElementById('html-preview-frame');
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();
      console.log("HTML Preview Updated");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getJson() {
  fetch(`http://localhost:8001/download-json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonFileContent, // Assuming jsonString contains the form data in JSON format
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to download JSON file");
      }
      return response.blob(); // Get the response as a Blob
    })
    .then(blob => {
      // Create a link element to download the file
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume-data.json"; // Set the desired file name
      document.body.appendChild(a);
      a.click(); // Programmatically click the link to trigger the download
      a.remove(); // Clean up by removing the link
      URL.revokeObjectURL(url); // Revoke the object URL
    })
    .catch(error => {
      
      console.error("Error:", error);
    });
};


//sahas
function showPdf() {
  const iframe = document.getElementById('html-preview-frame');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const htmlContent = iframeDoc.documentElement.outerHTML;

  fetch("http://localhost:8001/generate-pdf", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ html: htmlContent })
  })
  .then(response => response.blob())
  .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'resume.pdf'; // Name of the downloaded PDF
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
  })
  .catch(error => console.error('Error generating PDF:', error));
}


// function showPdf() {
//   //Show the loading bar
//   // const apiUrl = process.env.NODE_PUBLIC_API_URL;
//   const loadingBar = document.getElementById("loading-bar");
//   const bar = document.querySelector("#loading-bar .bar");
//   loadingBar.style.display = "block";

//   // Start the loading bar animation
//   bar.style.width = "0";
//   let startTime = Date.now();

//   fetch("http://localhost:8001/generate-pdf", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ html: htmlContent }), // Send the saved HTML content
//   })
//     .then((response) => response.blob())
//     .then((blob) => {
//       const url = URL.createObjectURL(blob);
//       const pdfFrame = document.getElementById("pdf-frame");
//       pdfFrame.src = url;
//       pdfFrame.style.display = "block";
//       console.log("PDF Preview Updated");

//  

//       // Hide the loading bar after the transition is complete
//       setTimeout(() => {
//         loadingBar.style.display = "none";
//       }, responseTime);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       // Hide the loading bar in case of an error
//       loadingBar.style.display = "none";
//     })
//     // Hide the loading bar in case of an error
//     .finally(() => {
//       // Hide the loading bar
//       loadingBar.style.display = "none";
//     });
//   // Clear the JSON preview and hide it
//   document.getElementById("json-preview").innerText = "";
//   document.getElementById("json-preview").style.display = "none";
// }




async function getPdf() {
  try {
    const response = await fetch('http://localhost:8001/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ html: htmlContent })
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    document.body.appendChild(a); // Append anchor to the body
    a.click(); // Trigger download
    a.remove(); // Remove anchor from the body
    window.URL.revokeObjectURL(url); // Clean up
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
}