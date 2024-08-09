// import {useSearchParams } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// interface Video {
//   id: number;
//   description: string;
//   link: string;
//   videoid: string;
// }

// interface Batch {
//   batchname: string;
// }

// const RecordingComp: React.FC = () => {
//   const searchParams = useSearchParams();
//   const course = searchParams.get('course') as string; // Get 'course' parameter from URL

//   const [batches, setBatches] = useState<Batch[]>([]);
//   const [selectedBatch, setSelectedBatch] = useState<string>('');
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
//   const [recordings, setRecordings] = useState<Video[]>([]);
//   const [isLoadingBatches, setIsLoadingBatches] = useState<boolean>(false);
//   const [isLoadingRecordings, setIsLoadingRecordings] = useState<boolean>(false);

//   useEffect(() => {
//     if (course) {
//       // Clear previous selections when course changes
//       setSelectedBatch('');
//       setRecordings([]);
//       setSelectedVideo(null);
//       fetchBatches(course);
//     }
//   }, [course]);

//   useEffect(() => {
//     if (selectedBatch) {
//       fetchRecordings(selectedBatch);
//     }
//   }, [selectedBatch]);

//   const fetchBatches = async (course: string) => {
//     try {
//       setIsLoadingBatches(true);
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches?course=${course}`);      
//       if (!response.ok) {
//         throw new Error('Failed to fetch batches');
//       }
//       const data = await response.json();
//       sessionStorage.setItem("batches_data", JSON.stringify(data.batches));
//       sessionStorage.setItem("batches_data_timestamp", Date.now().toString());
//       setBatches(data.batches);
//       if (data.batches.length > 0) {
//         setSelectedBatch(data.batches[0].batchname);
//       }
//       setIsLoadingBatches(false);
//     } catch (error) {
//       console.error('Error fetching batches:', error);
//       setIsLoadingBatches(false);
//     }
//   };

//   const fetchRecordings = async (batchname: string) => {
//     try {
//       setIsLoadingRecordings(true);
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recording?course=${course}&batchname=${batchname}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch recordings');
//       }

//       const data = await response.json();
//       setRecordings(data.batch_recordings || []);
//       setSelectedVideo(null); // Clear selected video when fetching new recordings
//       setIsLoadingRecordings(false);
//     } catch (error) {
//       console.error('Error fetching recordings:', error);
//       setIsLoadingRecordings(false);
//     }
//   };

//   const handleBatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedBatch(e.target.value);
//   };

//   const handleVideoSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedId = parseInt(e.target.value);
//     const selected = recordings.find((recording) => recording.id === selectedId);
//     setSelectedVideo(selected || null);
//   };

//   const renderVideoPlayer = (video: Video) => {
//     if (video.link.includes('youtu.be') || video.link.includes('youtube.com')) {
//       const youtubeId = video.videoid;
//       const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
//       return (
//         <iframe
//           width="100%"
//           height="250"
//           src={youtubeEmbedUrl}
//           title={video.description}
//           frameBorder="0"
//           allowFullScreen
//           className="rounded-xl border-2 border-gray-500"
//         ></iframe>
//       );
//     } else {
//       return <video src={video.link} controls className="mb-2 w-full" />;
//     }
//   };

//   return (
//     <div className="sm:mt-0 mt-6 flex-grow space-y-4">
//       <div className="flex flex-grow flex-col">
//         <label htmlFor="dropdown1">Batch:</label>
//         <select
//           id="dropdown1"
//           className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
//           value={selectedBatch}
//           onChange={handleBatchChange}
//         >
//           {isLoadingBatches ? (
//             <option disabled>Loading batches...</option>
//           ) : (
//             <>
//               <option value='' disabled>Please Select batches...</option>
//               {batches.map((batch, index) => (
//                 <option key={index} value={batch.batchname}>
//                   {batch.batchname}
//                 </option>
//               ))}
//             </>
//           )}
//         </select>
//       </div>
//       <div className="flex flex-grow flex-col justify-between ">
//         <label htmlFor="dropdown2">Recordings:</label>
//         <select
//           id="dropdown2"
//           className="rounded-md border border-gray-300 px-2 py-1 mb-5 text-black dark:bg-white"
//           onChange={handleVideoSelect}
//           disabled={!selectedBatch || isLoadingRecordings}
//         >
//           {isLoadingRecordings ? (
//             <option disabled>Loading recordings...</option>
//           ) : (
//             <>
//               <option value="">Please select a recording...</option>
//               {recordings.map((recording) => (
//                 <option key={recording.id} value={String(recording.id)}>
//                   {recording.description}
//                 </option>
//               ))}
//             </>
//           )}
//         </select>
//       </div>
//       {selectedVideo && <div>{renderVideoPlayer(selectedVideo)}</div>}
//     </div>
//   );
// };

// export default RecordingComp;



import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface Video {
  id: number;
  description: string;
  link: string;
  videoid: string;
}

interface Batch {
  batchname: string;
  batchid: number;
}

const RecordingComp: React.FC = () => {
  const searchParams = useSearchParams();
  const course = searchParams.get('course') as string; // Get 'course' parameter from URL

  const [batches, setBatches] = useState<Batch[]>([]);
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [recordings, setRecordings] = useState<Video[]>([]);
  const [isLoadingBatches, setIsLoadingBatches] = useState<boolean>(false);
  const [isLoadingRecordings, setIsLoadingRecordings] = useState<boolean>(false);

  useEffect(() => {
    if (course) {
      // Clear previous selections when course changes
      setSelectedBatch(null);
      setRecordings([]);
      setSelectedVideo(null);
      fetchBatches(course);
    }
  }, [course]);

  useEffect(() => {
    if (selectedBatch) {
      fetchRecordings(selectedBatch.batchid);
    }
  }, [selectedBatch]);

  const fetchBatches = async (course: string) => {
    try {
      setIsLoadingBatches(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batches?course=${course}`);
      if (!response.ok) {
        throw new Error('Failed to fetch batches');
      }
      const data = await response.json();
      sessionStorage.setItem("batches_data", JSON.stringify(data.batches));
      sessionStorage.setItem("batches_data_timestamp", Date.now().toString());
      setBatches(data.batches);
      if (data.batches.length > 0) {
        setSelectedBatch(data.batches[0]);
      }
      setIsLoadingBatches(false);
    } catch (error) {
      console.error('Error fetching batches:', error);
      setIsLoadingBatches(false);
    }
  };

  const fetchRecordings = async (batchid: number) => {
    try {
      setIsLoadingRecordings(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recording?course=${course}&batchid=${batchid}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recordings');
      }

      const data = await response.json();
      setRecordings(data.batch_recordings || []);
      setSelectedVideo(null); // Clear selected video when fetching new recordings
      setIsLoadingRecordings(false);
    } catch (error) {
      console.error('Error fetching recordings:', error);
      setIsLoadingRecordings(false);
    }
  };

  const handleBatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selected = batches.find((batch) => batch.batchid === selectedId);
    setSelectedBatch(selected || null);
  };

  const handleVideoSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    const selected = recordings.find((recording) => recording.id === selectedId);
    setSelectedVideo(selected || null);
  };

  const renderVideoPlayer = (video: Video) => {
    if (video.link.includes('youtu.be') || video.link.includes('youtube.com')) {
      const youtubeId = video.videoid;
      const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeId}`;
      return (
        <iframe
          width="100%"
          height="350"
          src={youtubeEmbedUrl}
          title={video.description}
          frameBorder="0"
          allowFullScreen
          className="rounded-xl border-2 h-[350px] border-gray-500"
        ></iframe>
      );
    } else {
      return <video src={video.link} controls className="mb-2 w-full" />;
    }
  };

  return (
    <div className="sm:mt-0 mt-6 flex-grow space-y-4">
      <div className="flex flex-grow flex-col">
        <label htmlFor="dropdown1">Batch:</label>
        <select
          id="dropdown1"
          className="rounded-md border border-gray-300 px-2 py-1 text-black dark:bg-white"
          value={selectedBatch ? selectedBatch.batchid : ''}
          onChange={handleBatchChange}
        >
          {isLoadingBatches ? (
            <option disabled>Loading batches...</option>
          ) : (
            <>
              <option value='' disabled>Please Select batches...</option>
              {batches.map((batch, index) => (
                <option key={index} value={batch.batchid}>
                  {batch.batchname}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      <div className="flex flex-grow flex-col justify-between ">
        <label htmlFor="dropdown2">Recordings:</label>
        <select
          id="dropdown2"
          className="rounded-md border border-gray-300 px-2 py-1 mb-5 text-black dark:bg-white"
          onChange={handleVideoSelect}
          disabled={!selectedBatch || isLoadingRecordings}
        >
          {isLoadingRecordings ? (
            <option disabled>Loading recordings...</option>
          ) : (
            <>
              <option value="">Please select a recording...</option>
              {recordings.map((recording) => (
                <option key={recording.id} value={String(recording.id)}>
                  {recording.description}
                </option>
              ))}
            </>
          )}
        </select>
      </div>
      {selectedVideo && <div>{renderVideoPlayer(selectedVideo)}</div>}
    </div>
  );
};

export default RecordingComp;
