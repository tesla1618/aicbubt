"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({ member }) => (
  <motion.div
    className="group relative"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <div className={`relative p-4 rounded-xl ${member.bgColor} bg-opacity-5`}>
      {/* Image and Role Section */}
      <div className="text-center mb-3">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="80px"
              priority
            />
          </div>
          <div
            className={`absolute inset-0 ${member.bgColor} mix-blend-overlay opacity-40 rounded-lg`}
          />
        </div>
        <p
          className={`inline-block px-2 py-1 rounded-full text-xs ${member.bgColor} bg-opacity-10 
          ${member.textColor}`}
        >
          {member.role}
        </p>
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
          {member.bio}
        </p>
      </div>
    </div>
  </motion.div>
);

const teamMembers = [
  {
    id: 1,
    name: "Mashroom Begum",
    role: "Mohila Sromik",
    image: "/assets/people/1.jpg",
    bio: "Pioneering AI solutions with over 10 years of experience in deep learning.",
    bgColor: "bg-blue-500",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Lead Designer",
    image: "/assets/people/2.jpg",
    bio: "Creating immersive user experiences through innovative design approaches.",
    bgColor: "bg-purple-500",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Senior Developer",
    image: "/assets/people/4.jpg",
    bio: "Full-stack expert specializing in scalable architecture.",
    bgColor: "bg-rose-500",
    textColor: "text-rose-600",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    image: "/assets/people/5.jpg",
    bio: "Strategic product leader with a passion for user-centric solutions.",
    bgColor: "bg-emerald-500",
    textColor: "text-emerald-600",
  },
  {
    id: 5,
    name: "Elena Santos",
    role: "Data Scientist",
    image: "/assets/people/4.jpg",
    bio: "Machine learning expert specializing in predictive analytics.",
    bgColor: "bg-amber-500",
    textColor: "text-amber-600",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Security Engineer",
    image: "/assets/people/1.jpg",
    bio: "Cybersecurity specialist focused on blockchain and encryption.",
    bgColor: "bg-indigo-500",
    textColor: "text-indigo-600",
  },
  {
    id: 7,
    name: "Lisa Wang",
    role: "UX Researcher",
    image: "/assets/people/2.jpg",
    bio: "Conducting user research to create intuitive digital experiences.",
    bgColor: "bg-cyan-500",
    textColor: "text-cyan-600",
  },
  {
    id: 8,
    name: "Michael Foster",
    role: "Backend Engineer",
    image: "/assets/people/5.jpg",
    bio: "Specialized in building scalable cloud infrastructure.",
    bgColor: "bg-teal-500",
    textColor: "text-teal-600",
  },
  {
    id: 9,
    name: "Rachel Chen",
    role: "Mobile Developer",
    image: "/assets/people/4.jpg",
    bio: "Expert in cross-platform mobile application development.",
    bgColor: "bg-fuchsia-500",
    textColor: "text-fuchsia-600",
  },
];

export default function Team() {
  return (
    <section className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[480px,1fr] gap-16">
          {/* Left Section */}
          <div className="mb-16 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our Core Members
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Exceptional individuals working together to create extraordinary
                results. Each member brings unique expertise and vision.
              </p>

              {/* Stats without shadow effects */}
              <div className="flex items-center space-x-12 mb-12">
                <div>
                  <p
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 
                    to-purple-600 bg-clip-text text-transparent"
                  >
                    {teamMembers.length}+
                  </p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                <div>
                  <p
                    className="text-4xl font-bold bg-gradient-to-r from-purple-600 
                    to-pink-600 bg-clip-text text-transparent"
                  >
                    5+
                  </p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>

              {/* Modern CTA Button */}
              <Link href="/">
                <motion.div
                  className="group inline-flex items-center space-x-4 text-gray-900"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg font-medium">View All Members</span>
                  <div
                    className="w-10 h-10 rounded-full bg-gray-900 text-white 
                    flex items-center justify-center group-hover:scale-95 transition-transform"
                  >
                    →
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Right Section - 3x3 Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
