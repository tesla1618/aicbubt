"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  FileText,
  Settings,
  MessageSquare,
  BarChart2,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/admin" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Posts", icon: FileText, path: "/admin/posts" },
  { name: "Comments", icon: MessageSquare, path: "/admin/comments" },
  { name: "Analytics", icon: BarChart2, path: "/admin/analytics" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 w-72 bg-white shadow-xl z-50">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center px-6 border-b">
          <Link href="/admin" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <span className="text-xl font-bold">Admin Panel</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg
                          transition-colors group relative overflow-hidden
                          ${
                            isActive
                              ? "text-white"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-blue-600"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <item.icon
                  className={`w-5 h-5 mr-3 relative z-10 
                            ${isActive ? "text-white" : "text-gray-400"}`}
                />
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profile */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
