import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Terms of Service</h1>

        <p className="mb-4 text-gray-300">
          Welcome to <span className="text-white font-semibold">2nx</span>. By accessing or using our platform, you agree to be bound by the following Terms of Service.
          Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">1. Acceptance of Terms</h2>
        <p className="text-gray-300">
          By using our services, you agree to comply with these terms and all applicable laws and regulations. If you do not
          agree, please do not use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">2. User Eligibility</h2>
        <p className="text-gray-300">
          You must be at least 18 years old to access or use 2nx. By using the site, you confirm that you meet this age requirement.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">3. Account Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>All activity under your account is your responsibility.</li>
          <li>You must notify us immediately if you suspect unauthorized access.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">4. Content Usage</h2>
        <p className="text-gray-300">
          All content is protected by intellectual property laws. You may not redistribute, modify, or commercially exploit
          our content without explicit permission.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">5. Prohibited Conduct</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Uploading illegal, harmful, or explicit content not in compliance with our standards.</li>
          <li>Using bots, scrapers, or other automated means to access our platform.</li>
          <li>Attempting to interfere with or disrupt our services or systems.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">6. Termination</h2>
        <p className="text-gray-300">
          We reserve the right to suspend or terminate your access at our discretion, without prior notice, if we believe
          you've violated these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">7. Disclaimer & Liability</h2>
        <p className="text-gray-300">
          The 2nx platform is provided "as is" without warranties. We are not liable for any damages resulting from the use
          of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">8. Modifications</h2>
        <p className="text-gray-300">
          We may revise these Terms of Service at any time. Continued use of 2nx means you accept any updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">9. Contact Information</h2>
        <p className="text-gray-300">
          If you have questions regarding these terms, contact us at <span className="text-yellow-400">support@2nx.com</span>.
        </p>

        <p className="mt-8 text-sm text-gray-500 italic">Last updated: June 7, 2025</p>
      </div>
    </div>
  );
}
