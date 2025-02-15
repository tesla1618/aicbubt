"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const menuItems = {
    learn: {
      name: "Learn",
      submenu: [
        { name: "Deep Learning", href: "/" },
        { name: "Machine Learning", href: "/" },
      ],
    },
    research: {
      name: "Research",
      submenu: [
        { name: "Publications", href: "/" },
        { name: "Projects", href: "/" },
      ],
    },
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 
      ${
        hasScrolled || isOpen
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                hasScrolled || isOpen
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/assets/logo.png"
                  width={40}
                  height={40}
                  alt="Logo"
                />
                <b
                  className={`text-2xl font-bold ${
                    hasScrolled || isOpen
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  AI Community BUBT
                </b>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {Object.entries(menuItems).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    hasScrolled || isOpen
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </button>
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${
                hasScrolled || isOpen
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Blog
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  hasScrolled || isOpen
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }`}
              >
                Login
              </Link>
              <Link
                href="/"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none
              ${
                hasScrolled || isOpen
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  : "text-white hover:text-gray-200 hover:bg-white/10"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === key ? null : key)
                    }
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
