"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Summit 2024",
      date: "April 15-17",
      image: "/images/tech-summit.jpg",
      description:
        "Join us for three days of cutting-edge technology discussions",
    },
    {
      id: 2,
      title: "Innovation Workshop",
      date: "May 5",
      image: "/images/workshop.jpg",
      description: "Hands-on workshop exploring the latest innovations",
    },
    // Add more events as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Events
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-emerald-400 font-medium mb-3">
                  {event.date}
                </p>
                <p className="text-gray-300">{event.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium 
                           hover:bg-emerald-600 transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
