
  import React, { useState, useRef, useCallback, useEffect } from "react";
  import { debounce } from "lodash";
  import axios from 'axios';
  import {useSearchParams } from 'next/navigation';
  
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
  const searchParams = useSearchParams();
  
    const course = searchParams.get('course') as string; // Get 'course' parameter from URL
  
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Video[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); // State for error message
    const cancelTokenRef = useRef<any>(null);
  
    useEffect(() => {
      if (!course) {
        setError('Course parameter is missing from the URL.');
      }
    }, [course]);
  
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
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/recording`, {
              params: {course, search: query },
              cancelToken: cancelTokenRef.current.token,
            });
            // console.log(response);
            
            const filteredVideos = response.data.batch_recordings;
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
      [course]
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
        const youtubeId = video.videoid;
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
  