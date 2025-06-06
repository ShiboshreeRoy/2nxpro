import React from 'react';

export default function Dmca() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">DMCA Notice & Takedown Policy</h1>

        <p className="mb-4 text-gray-300">
          2nx is committed to respecting the rights of copyright holders and complies with the Digital Millennium Copyright Act (DMCA). If you believe that content on our site infringes your copyright, you may submit a takedown notice as described below.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">1. Filing a DMCA Takedown Notice</h2>
        <p className="text-gray-300 mb-4">
          To file a DMCA notice, please provide a written communication that includes the following:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Your name, address, phone number, and email address.</li>
          <li>Identification of the copyrighted work being infringed.</li>
          <li>The exact URL or location of the allegedly infringing content.</li>
          <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
          <li>A statement under penalty of perjury that the information is accurate.</li>
          <li>Your physical or electronic signature.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">2. Submitting Your Notice</h2>
        <p className="text-gray-300">
          Email your DMCA takedown notice to: <span className="text-yellow-400">dmca@2nx.com</span>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">3. Counter-Notice Policy</h2>
        <p className="text-gray-300">
          If you believe your content was removed in error, you may submit a counter-notice. This must include:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Your name, address, phone number, and email.</li>
          <li>Identification of the removed content and its prior location.</li>
          <li>A statement under penalty of perjury that you believe the removal was a mistake.</li>
          <li>Consent to the jurisdiction of the courts in your district.</li>
          <li>Your signature (physical or electronic).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">4. Repeat Infringer Policy</h2>
        <p className="text-gray-300">
          2nx may terminate user accounts that are subject to repeated takedown notices or exhibit infringing behavior.
        </p>

        <p className="mt-8 text-sm text-gray-500 italic">Last updated: June 7, 2025</p>
      </div>
    </div>
  );
}
