import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          Welcome to 2nx. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect
          your personal information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Personal data (e.g., email address) if you register or subscribe</li>
          <li>Device and browser information</li>
          <li>Usage data (pages visited, clicks, session time)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>To provide and personalize your experience</li>
          <li>To improve our platform and content</li>
          <li>For customer support and communication</li>
          <li>For legal compliance and security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">3. Third-Party Services</h2>
        <p className="text-gray-300">
          We may use third-party tools (e.g., analytics, ads) which may collect information according to their own
          privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">4. Data Security</h2>
        <p className="text-gray-300">
          We implement modern security measures to protect your data. However, no online system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">5. Your Choices</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>You can disable cookies in your browser settings</li>
          <li>You may unsubscribe from email communications at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">6. Updates to This Policy</h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. Changes will be posted here with a revised "Last updated"
          date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-white">7. Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about this policy, please contact us at <span className="text-yellow-400">privacy@2nx.com</span>.
        </p>

        <p className="mt-8 text-sm text-gray-500 italic">Last updated: June 7, 2025</p>
      </div>
    </div>
  );
}
