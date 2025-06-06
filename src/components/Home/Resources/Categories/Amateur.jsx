import React, { useState } from 'react';

// Sample video data
const videos = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  title: `Sample Video ${i + 1}`,
  thumbnail: `https://placehold.co/400x225?text=Video+${i + 1}`,
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Demo video URL
  duration: `${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`,
}));

const VIDEOS_PER_PAGE = 6;

export default function AmateurVideoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [playingId, setPlayingId] = useState(null);

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);
  const start = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = videos.slice(start, start + VIDEOS_PER_PAGE);

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setPlayingId(null); // stop any playing video
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        🎬 Amateur Premium Video Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div
              className="relative"
              onClick={() => setPlayingId(video.id === playingId ? null : video.id)}
            >
              {playingId === video.id ? (
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-48 object-cover"
                  onEnded={() => setPlayingId(null)}
                />
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </>
              )}

              <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs px-2 py-1 rounded text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-gray-900 font-medium truncate">{video.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-3 mt-10">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-semibold ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => changePage(i + 1)}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === i + 1
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md font-semibold ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
