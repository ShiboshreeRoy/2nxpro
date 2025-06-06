import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6  py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">
            2NX<span className="text-red-500">Pro</span>
          </h2>
          <p className="text-sm">
            2NXPro is your ultimate destination for HD, trending, and exclusive premium content. Stream with speed, style, and satisfaction.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/trending" className="hover:text-white">Trending</a></li>
            <li><a href="/categories" className="hover:text-white">Categories</a></li>
            <li><a href="/premium" className="hover:text-red-500">Premium</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/Legal/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/Legal/terms" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/Legal/dmca" className="hover:text-white">DMCA</a></li>
            <li><a href="/Legal/support" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-300"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} 2NXPro. All rights reserved.
      </div>
    </footer>
  );
}
