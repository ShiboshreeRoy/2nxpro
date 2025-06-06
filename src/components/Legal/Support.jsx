import React from 'react';
import { Mail, Phone, HelpCircle, MessageCircle } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto p-8 rounded-2xl bg-gray-950 shadow-2xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-teal-400 flex items-center gap-2">
          <HelpCircle size={32} /> Support Center
        </h1>

        <p className="text-gray-300 mb-6 text-lg">
          Need help? We're here 24/7. Choose your preferred method of support below or check out our FAQs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-teal-400 transition">
            <div className="text-teal-400 mb-3">
              <Mail size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-400">Reach out via email at <span className="text-teal-300">support@2nx.com</span>. Response time: within 24 hours.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-teal-400 transition">
            <div className="text-teal-400 mb-3">
              <Phone size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-400">Mon–Fri, 9 AM–5 PM: <span className="text-teal-300">+1 (800) 2NX-HELP</span></p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-teal-400 transition">
            <div className="text-teal-400 mb-3">
              <MessageCircle size={28} />
            </div>
            <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-400">Get instant help with our live support team. Available 24/7 via the chat icon.</p>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500 italic">Last updated: June 7, 2025</div>
      </div>
    </div>
  );
}
