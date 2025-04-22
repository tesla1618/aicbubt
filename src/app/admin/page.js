"use client";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Activity,
} from "lucide-react";

const stats = [
  {
    name: "Total Users",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    trend: "up",
  },
  {
    name: "Total Posts",
    value: "1,234",
    change: "+23.1%",
    icon: FileText,
    trend: "up",
  },
  {
    name: "Comments",
    value: "4,567",
    change: "-5.4%",
    icon: MessageSquare,
    trend: "down",
  },
  {
    name: "Engagement",
    value: "85.2%",
    change: "+6.2%",
    icon: Activity,
    trend: "up",
  },
];

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new post",
    time: "2 minutes ago",
    avatar: "JD",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "commented on 'AI Trends 2024'",
    time: "5 minutes ago",
    avatar: "SS",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "updated their profile",
    time: "10 minutes ago",
    avatar: "MJ",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, Admin
          </h1>
          <p className="text-gray-500">Here's what's happening today.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 transition-colors"
        >
          Generate Report
        </motion.button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Activity Overview
            </h2>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            Chart placeholder
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium text-gray-900">
                      {activity.user}
                    </span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
