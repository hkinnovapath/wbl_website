import React, { useState } from "react";
import videoData from "../../searchvideo.json";
import { debounce } from "lodash";

interface Video {
 id: string;
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

const SearchComp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const debouncedSearch = debounce((query: string) => {
    if (query.trim() === '') {
      setSearchResults([]);
      setShowSearchBox(false);
    } else {
      const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredVideos);
      setShowSearchBox(filteredVideos.length > 0); // Set showSearchBox based on search results
    }
  }, 300);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target?.value || '';
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setShowSearchBox(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search for videos..."
        className="border dark:bg-white border-gray-300 text-black rounded-md px-3 py-2 w-full mb-4"
      />
      {showSearchBox && searchResults.length > 0 && ( // Conditionally render the search results box
        <div className="bg-gray-100  dark:text-black  rounded-md p-4 mb-4 max-h-40 overflow-y-auto">
          {searchResults.map((video) => (
            <div key={video.id} onClick={() => handleVideoSelect(video)} className="cursor-pointer hover:bg-primarylight rounded-md px-3 py-2 mb-2 mr-2">
              {video.title}
            </div>
          ))}
        </div>
      )}
      {selectedVideo && (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">{selectedVideo.title}</h2>
          <video src={selectedVideo.videoUrl} controls className="mb-2" />
          <p className="text-black dark:text-white">{selectedVideo.description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchComp;
