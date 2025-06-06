import React from 'react';

const trendingVideos = [
  {
    id: 1,
    title: 'HD Blonde MILF Action',
    thumbnail: 'https://source.unsplash.com/400x250/?video',
    views: '1.2M',
    duration: '8:30',
    category: 'MILF',
  },
  {
    id: 2,
    title: 'Teen Girl Next Door',
    thumbnail: 'https://source.unsplash.com/400x250/?girl',
    views: '950K',
    duration: '6:45',
    category: 'Teen',
  },
  {
    id: 3,
    title: 'Amateur Couple Fun',
    thumbnail: 'https://source.unsplash.com/400x250/?couple',
    views: '850K',
    duration: '10:22',
    category: 'Amateur',
  },
  {
    id: 4,
    title: 'Big Tits in Public',
    thumbnail: 'https://source.unsplash.com/400x250/?busty',
    views: '1.5M',
    duration: '9:12',
    category: 'Big Tits',
  },
];

export default function TrendingVideos() {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-400 to-yellow-300 mb-10 animate-pulse">
          🔥 Trending on 2NXPro
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trendingVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition duration-300 border border-zinc-800 hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:opacity-85 transition"
                />
                <span className="absolute bottom-2 right-2 text-xs bg-black/70 px-2 py-0.5 rounded text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-base font-semibold text-white line-clamp-2">{video.title}</h2>
                <div className="text-sm text-zinc-400 mt-1 flex justify-between">
                  <span>{video.views} views</span>
                  <span className="text-pink-400 font-medium">{video.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
