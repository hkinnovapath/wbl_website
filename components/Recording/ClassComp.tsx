import React, { useState, useEffect } from "react";
import videoData from "../../searchvideo.json";

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}

export default function ClassComp() {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [recordings, setRecordings] = useState<Video[]>([]); // Specify Video[] as the type

  useEffect(() => {
    if (selectedBatch) {
      const filteredRecordings = videoData
        .filter((video) => video.batch === selectedBatch)
        .map((video) => ({
          ...video,
          id: parseInt(video.id), // Convert id to number
        }));
      setRecordings(filteredRecordings);
    }
  }, [selectedBatch]);

  const handleBatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBatch(e.target.value);
    setSelectedVideo(null); // Reset selected video when batch changes
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selected = recordings.find(
      (recording) => recording.id === selectedId
    );
    setSelectedVideo(selected || null);
  };

  return (
    <div className="flex-grow space-y-4 ml-4">
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown1">Batch:</label>
        <select
          id="dropdown1"
          className="border dark:bg-white border-gray-300 text-black rounded-md px-2 py-1"
          value={selectedBatch}
          onChange={handleBatchChange}
        >
          <option value="">Please Select the Batch...</option>
          <option value="Jan2024">Jan 2024</option>
          <option value="April2024">April 2024</option>
          <option value="March 2024">March 2024</option>
          {/* Add more batch options as needed */}
        </select>
      </div>
      <div className="flex flex-col flex-grow">
        <label htmlFor="dropdown2">Recordings:</label>
        <select
          id="dropdown2"
          className="border dark:bg-white border-gray-300 text-black rounded-md px-2 py-1"
          onChange={handleVideoSelect}
          disabled={!selectedBatch} // Disable if no batch selected
        >
          <option value="">Please Select the Topic...</option>
          {recordings.map((recording) => (
            <option key={recording.id} value={String(recording.id)}>
              {" "}
              {/* Convert id to string */}
              {recording.title}
            </option>
          ))}
        </select>
      </div>
      {selectedVideo && (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">{selectedVideo.title}</h2>
          <video src={selectedVideo.videoUrl} controls className="mb-2" />
          <p className="text-black dark:text-white">{selectedVideo.description}</p>
        </div>
      )}
    </div>
  );
}
