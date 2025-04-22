"use client";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AdminLayoutWrapper({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 ml-72">
        <Navbar />
        <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
