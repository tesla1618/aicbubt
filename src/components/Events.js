"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  CalendarDays,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Tag,
} from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Summit 2024",
      date: "April 15-17",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      image: "/assets/events/1.jpg",
      description:
        "Join us for three days of cutting-edge technology discussions and networking opportunities. Don't miss out! Register now. Limited seats available...",
      category: "Conference",
      attendees: 1200,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: 2,
      title: "Innovation Workshop",
      date: "May 5",
      time: "10:00 AM - 3:00 PM",
      location: "New York, NY",
      image: "/assets/events/2.jpg",
      description:
        "Hands-on workshop exploring the latest innovations in AI, machine learning, and blockchain technology. Expert-led sessions with practical demonstrations...",
      category: "Workshop",
      attendees: 300,
      gradient: "from-violet-600 to-purple-600",
    },
    // Add more events as needed
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Upcoming Events
        </h2>
        <p className="text-gray-500 mt-1">
          Stay informed with the latest conferences, workshops, and seminars
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md
                         hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -3 }}
              >
                <div className="grid gap-3">
                  <div className="relative">
                    <motion.div
                      className="aspect-[16/9] overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                    <div
                      className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r ${event.gradient}`}
                    >
                      {event.category}
                    </div>
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="space-y-2">
                      <motion.div
                        className="flex items-center justify-between"
                        whileHover={{ x: 5 }}
                      >
                        <h3 className="text-lg font-bold text-gray-900">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-xs text-gray-600">
                          <Users className="w-3.5 h-3.5 text-blue-600" />
                          <span>{event.attendees}</span>
                        </div>
                      </motion.div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                        <div className="flex items-center space-x-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 col-span-2">
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {event.description}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-4 py-2 rounded-lg bg-gradient-to-r ${event.gradient}
                               text-white text-sm font-medium inline-flex items-center justify-center space-x-2
                               hover:shadow-lg transition-all duration-300`}
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
