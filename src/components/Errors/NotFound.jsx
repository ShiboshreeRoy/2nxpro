import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4">
      <div className="text-center max-w-xl">
        <svg
          className="mx-auto w-64 h-64 mb-6"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="256" fill="#F87171" opacity="0.1" />
          <path
            d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 128 256 128zm0 48a16 16 0 110 32 16 16 0 010-32zm0 160a16 16 0 110-32 16 16 0 010 32z"
            fill="#EF4444"
          />
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="40"
            fill="#EF4444"
            fontFamily="sans-serif"
          >
            404
          </text>
        </svg>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
