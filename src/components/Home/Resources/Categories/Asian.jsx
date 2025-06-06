import React, { useState } from 'react';

// Dummy video data with preview video URLs
const allVideos = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Premium Video #${i + 1}`,
  thumbnail: `https://placehold.co/600x340?text=Video+${i + 1}`,
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your actual video links
  duration: `${Math.floor(Math.random() * 10) + 1}:${String(Math.floor(Math.random() * 59)).padStart(2, '0')}`,
}));

const VIDEOS_PER_PAGE = 8;

export default function Asian() {
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(startIndex, startIndex + VIDEOS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPlayingVideoId(null); // Stop all playing videos when page changes
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-black text-white px-6 py-10 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">🔥 Featured Asian Premium Videos</h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="relative">
              {playingVideoId === video.id ? (
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-48 object-cover"
                  onEnded={() => setPlayingVideoId(null)}
                />
              ) : (
                <div
                  onClick={() => setPlayingVideoId(video.id)}
                  className="cursor-pointer relative"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-xs px-2 py-1 rounded text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold hover:text-red-500 cursor-pointer truncate">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-700 hover:bg-red-500 px-4 py-2 rounded text-sm disabled:opacity-30"
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-2 text-sm rounded ${
              currentPage === i + 1
                ? 'bg-red-500 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-700 hover:bg-red-500 px-4 py-2 rounded text-sm disabled:opacity-30"
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </section>
  );
}
