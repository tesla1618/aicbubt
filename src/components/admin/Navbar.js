"use client";
import { Menu, Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center">
            {/* <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
            >
              <Menu className="w-6 h-6" />
            </button> */}
            <div className="ml-4 lg:ml-0">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 w-full lg:w-72 rounded-lg border border-gray-200 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="h-8 w-[1px] bg-gray-200" />
            <button className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <span className="hidden sm:block text-sm font-medium">
                Admin User
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
