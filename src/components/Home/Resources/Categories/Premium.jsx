import React from 'react';

export default function Premium() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-6">
          Upgrade to <span className="text-white">2nx Premium</span>
        </h1>
        <p className="text-center text-gray-300 mb-8 text-lg">
          Unlock unlimited access to exclusive 4K content, ad-free streaming, early releases, and VIP support.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900/50 rounded-xl border border-yellow-400 p-6 hover:scale-105 transform transition duration-300 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="mb-4 text-sm text-gray-300">Stream HD videos with minimal ads</p>
            <p className="text-3xl font-extrabold text-yellow-400">$4.99</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
              Get Basic
            </button>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-xl border-2 border-yellow-600 p-6 hover:scale-105 transform transition duration-300 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="mb-4 text-sm">Ad-free 4K content, VIP access</p>
            <p className="text-3xl font-extrabold">$9.99</p>
            <button className="mt-4 px-4 py-2 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-800">
              Get Premium
            </button>
          </div>

          <div className="bg-gray-900/50 rounded-xl border border-yellow-400 p-6 hover:scale-105 transform transition duration-300 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Ultimate</h3>
            <p className="mb-4 text-sm text-gray-300">All access + future updates</p>
            <p className="text-3xl font-extrabold text-yellow-400">$19.99</p>
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300">
              Get Ultimate
            </button>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          All plans are billed monthly. Cancel anytime. Your support helps us grow the 2nx experience.
        </div>
      </div>
    </div>
  );
}
