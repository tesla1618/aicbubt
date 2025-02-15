"use client";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 768);

      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <footer
      className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      style={{
        borderRadius: isDesktop ? "60% 40% 25% 25% / 10% 25% 0% 0%" : "0",
      }}
    >
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-transform transform hover:scale-105">
              AI Community BUBT
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting students, researchers, and professionals to foster
              innovation and learning in artificial intelligence at BUBT.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                className="text-white hover:text-gray-400 transition-colors transform hover:scale-110"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                className="text-white hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-white hover:text-sky-400 transition-colors transform hover:scale-110"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.com"
                className="text-white hover:text-indigo-500 transition-colors transform hover:scale-110"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Learn AI Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn AI</h3>
            <ul className="space-y-2">
              {[
                "Beginner's Guide",
                "Machine Learning Basics",
                "Deep Learning Concepts",
                "Data Science Tools",
                "Ethics in AI",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-yellow-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Community Resources
            </h3>
            <ul className="space-y-2">
              {[
                "Events & Workshops",
                "AI Projects",
                "Mentorship Program",
                "AI Blogs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-yellow-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {[
                "Join as a Member",
                "Become a Volunteer",
                "Sponsor Us",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-yellow-400 text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © AI Community BUBT, 2025, Amar Ektu Shanti Dorkar
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 text-sm transition-colors transform hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-white hover:text-yellow-400 text-sm transition-colors transform hover:scale-105"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
