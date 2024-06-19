// import React, { useState } from "react";
// import videoData from "../../searchvideo.json";
// import { debounce } from "lodash";

// interface Video {
//  id: string;
//   title: string;
//   thumbnailUrl: string;
//   duration: string;
//   uploadTime: string;
//   views: string;
//   author: string;
//   videoUrl: string;
//   description: string;
//   subscriber: string;
//   isLive: boolean;
// }

// const SearchComp: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [searchResults, setSearchResults] = useState<Video[]>([]);
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
//   const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

//   const debouncedSearch = debounce((query: string) => {
//     if (query.trim() === '') {
//       setSearchResults([]);
//       setShowSearchBox(false);
//     } else {
//       const filteredVideos = videoData.filter((video) =>
//         video.title.toLowerCase().includes(query.toLowerCase())
//       );
//       setSearchResults(filteredVideos);
//       setShowSearchBox(filteredVideos.length > 0); // Set showSearchBox based on search results
//     }
//   }, 300);

//   const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target?.value || '';
//     setSearchQuery(query);
//     debouncedSearch(query);
//   };

//   const handleVideoSelect = (video: Video) => {
//     setSelectedVideo(video);
//     setShowSearchBox(false);
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-8 px-4">
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//         placeholder="Search for videos..."
//         className="border dark:bg-white border-gray-300 text-black rounded-md px-3 py-2 w-full mb-4"
//       />
//       {showSearchBox && searchResults.length > 0 && ( // Conditionally render the search results box
//         <div className="bg-gray-100  dark:text-black  rounded-md p-4 mb-4 max-h-40 overflow-y-auto">
//           {searchResults.map((video) => (
//             <div key={video.id} onClick={() => handleVideoSelect(video)} className="cursor-pointer hover:bg-primarylight rounded-md px-3 py-2 mb-2 mr-2">
//               {video.title}
//             </div>
//           ))}
//         </div>
//       )}
//       {selectedVideo && (
//         <div>
//           <h2 className="text-xl font-bold mt-4 mb-2">{selectedVideo.title}</h2>
//           <video src={selectedVideo.videoUrl} controls className="mb-2" />
//           <p className="text-black dark:text-white">{selectedVideo.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchComp;



import React, { useState, useRef, useCallback } from "react";
import { debounce } from "lodash";
import axios from 'axios';

interface Video {
  id: number;
  batchname: string;
  classdate: string;
  course: string;
  description: string;
  filename: string;
  forallcourses: string;
  link: string;
  status: string;
  subject: string | null;
  subjectid: number | null;
  type: string;
  videoid: string;
}

const SearchComp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for error message
  const cancelTokenRef = useRef<any>(null);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim() === '') {
        setSearchResults([]);
        setShowSearchBox(false);
        setLoading(false);
        setError(null); // Clear error state
      } else {
        setLoading(true);
        if (cancelTokenRef.current) {
          cancelTokenRef.current.cancel('New search triggered');
        }
        cancelTokenRef.current = axios.CancelToken.source();

        try {
          const response = await axios.get('http://localhost:8000/recording', {
            params: { search: query },
            cancelToken: cancelTokenRef.current.token,
          });
          const filteredVideos = response.data.recording;
          setSearchResults(filteredVideos);
          setShowSearchBox(filteredVideos.length > 0);
          setLoading(false);
          setError(null); // Clear error state
        } catch (error) {
          setLoading(false);
          if (axios.isAxiosError(error)) {
            setError(error.response?.data.detail || 'An error occurred');
          } else {
            setError('An error occurred');
          }
          setSearchResults([]);
          setShowSearchBox(false);
        }
      }
    }, 500),
    []
  );

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value || '';
    setSearchQuery(query);
    setLoading(true); // Set loading to true immediately when input changes
    debouncedSearch(query);
  };

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
    setShowSearchBox(false);
  };

  const renderVideoPlayer = (video: Video) => {
    if (video.link.includes('youtu.be') || video.link.includes('youtube.com')) {
      const youtubeId = video.link.split('/').pop();
      const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
      return (
        <iframe
          width="100%"
          height="250"
          src={youtubeEmbedUrl}
          title={video.description}
          frameBorder="0"
          allowFullScreen
          
          className="border-2 border-gray-500 rounded-xl"
        ></iframe>
      );
    } else {
      return (
        <video src={video.link} controls className="mb-2 w-full" />
      );
    }
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
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {showSearchBox && searchResults.length > 0 && !loading && (
        <div className="bg-gray-100 dark:text-black rounded-md p-4 mb-4 max-h-40 overflow-y-auto">
          {searchResults.map((video) => (
            <div key={video.id} onClick={() => handleVideoSelect(video)} className="cursor-pointer hover:bg-primarylight rounded-md px-3 py-2 mb-2 mr-2">
              {video.description}
            </div>
          ))}
        </div>
      )}
      {selectedVideo && !loading && (
        <div>
          {renderVideoPlayer(selectedVideo)}
        </div>
      )}
    </div>
  );
};

export default SearchComp;
