// import data from "../../sessionVideo.json";
import data from "../../sessionVideo.json";

import React, { useState } from "react";

// Define types
type Group = {
  name: string;
  subjects: string[];
};

type SessionData = {
  groups: Group[];
};

export default function SessionComp() {
  const initialData: SessionData = data;
  const [selectedGroup, setSelectedGroup] = useState(
    initialData.groups[0].name
  );
  const [selectedSubject, setSelectedSubject] = useState(
    initialData.groups[0].subjects[0]
  );

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGroupName = e.target.value;
    setSelectedGroup(selectedGroupName);
    const selectedGroupData: Group | undefined = initialData.groups.find(
      (group) => group.name === selectedGroupName
    );
    if (selectedGroupData) {
      setSelectedSubject(selectedGroupData.subjects[0]);
    }
  };

  return (
    <div className="flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown1">Group Mock:</label>
        <select
          id="dropdown1"
          className="border dark:bg-white border-gray-300 rounded-md text-black px-2 py-1"
          value={selectedGroup}
          onChange={handleGroupChange}
        >
          {initialData.groups.map((group) => (
            <option key={group.name} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown2">Please Select the Subject:</label>
        <select
          id="dropdown2"
          className="border border-gray-300 dark:bg-white text-black rounded-md px-2 py-1"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          {initialData.groups
            .find((group) => group.name === selectedGroup)
            ?.subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
