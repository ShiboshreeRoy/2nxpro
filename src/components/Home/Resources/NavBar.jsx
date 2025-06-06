import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const categories = [
  { name: "Amateur", link: "/category/amateur" },
  { name: "HD Videos", link: "/category/hd-videos" },
  { name: "MILF", link: "/category/milf" },
  { name: "Teen", link: "/category/teen" },
  { name: "Asian", link: "/category/asian" },
  { name: "Anal", link: "/category/anal-videos" },
  { name: "Big Tits", link: "/category/big-tits" },
  { name: "Ebony", link: "/category/ebony" },
  { name: "Blowjob", link: "/category/blowjob" },
  { name: "Threesome", link: "/category/threesome" },
  { name: "Lesbian", link: "/category/lesbian" },
  { name: "Hardcore", link: "/category/hardcore" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-2xl tracking-wide">
           <Link to="/" className="hover:text-red-500 transition">
            2NX<span className="text-red-500 hover:text-white">Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-300 text-sm font-medium">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/trending" className="hover:text-white transition">
              Trending
            </a>

            {/* Categories Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center hover:text-white transition">
                Categories <ChevronDownIcon className="ml-1 w-4 h-4" />
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                  {categories.map(({ name, link }) => (
                    <Menu.Item key={name}>
                      {({ active }) => (
                        <a
                          href={link}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          }`}
                        >
                          {name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <a href="/premium" className="hover:text-red-500 transition">
              Premium
            </a>
          </nav>

          {/* Search & Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-sm text-white px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-red-500"
            />
            <button className="text-white hover:text-red-500 transition">
              🔔
            </button>
            <img
              src="https://i.pravatar.cc/30?img=5"
              alt="User"
              className="w-8 h-8 rounded-full border border-red-500"
            />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-gray-900 text-gray-200 text-sm">
          <a href="/" className="block hover:text-white">
            Home
          </a>
          <a href="/" className="block hover:text-white">
            Trending
          </a>

          <div className="border-t border-gray-700 pt-2">
            <span className="block font-semibold text-gray-400">
              Categories
            </span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categories.map(({ name, link }) => (
                <a key={name} href={link} className="hover:text-white">
                  {name}
                </a>
              ))}
            </div>
          </div>

          <a href="/premium" className="block hover:text-red-500 pt-2">
            Premium
          </a>
        </div>
      )}
    </header>
  );
}
