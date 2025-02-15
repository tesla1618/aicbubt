"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiCalendar, FiBell, FiArrowRight, FiX } from "react-icons/fi";

const updates = [
  {
    id: 1,
    type: "announcement",
    title: "AI Workshop Series Announced",
    description:
      "Join us for a 4-week workshop series on Deep Learning fundamentals starting next month.",
    date: "2024-03-15",
    time: "10:00 AM",
    category: "Workshop",
    isNew: true,
  },
  {
    id: 2,
    type: "notice",
    title: "Research Paper Submission Deadline",
    description:
      "Last date for submitting research papers for the upcoming AI Conference has been extended.",
    date: "2024-03-20",
    time: "11:59 PM",
    category: "Academic",
    isNew: true,
  },
  {
    id: 3,
    type: "announcement",
    title: "New AI Lab Opening",
    description:
      "State-of-the-art AI laboratory opening ceremony next week. All students are welcome.",
    date: "2024-03-25",
    time: "3:00 PM",
    category: "Event",
    isNew: false,
  },
];

const RecentUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dismissedUpdates, setDismissedUpdates] = useState(new Set());

  const categories = ["All", "Workshop", "Academic", "Event"];

  const filteredUpdates = updates.filter(
    (update) =>
      (selectedCategory === "All" || update.category === selectedCategory) &&
      !dismissedUpdates.has(update.id)
  );

  const dismissUpdate = (id) => {
    setDismissedUpdates((prev) => new Set([...prev, id]));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Recent Updates
          </h2>
          <p className="text-gray-500 mt-1">
            Stay informed with the latest announcements and notices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Updates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredUpdates.map((update) => (
            <motion.div
              key={update.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 overflow-hidden"
            >
              {/* New Badge */}
              {update.isNew && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                  New
                </div>
              )}

              {/* Dismiss Button */}

              <div className="p-6">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4
                  ${
                    update.type === "announcement"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {update.type === "announcement" ? "Announcement" : "Notice"}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 h-7 overflow-hidden text-ellipsis whitespace-nowrap">
                  {update.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {update.description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{new Date(update.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{update.time}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-600 transition-colors duration-200">
                  Read More
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredUpdates.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FiBell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No updates available
          </h3>
          <p className="text-gray-500">
            There are no updates for the selected category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default RecentUpdates;
