"use client";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const RecentBlog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogs = [
    {
      id: 1,
      title: "The Future of Generative AI in Creative Industries",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      readTime: "5 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "Exploring how generative AI is revolutionizing art, music, and design, creating new possibilities for creative professionals...",
      category: "Artificial Intelligence",
      gradient: "from-rose-600 to-pink-600",
    },
    {
      id: 2,
      title: "Understanding Large Language Models",
      date: "March 18, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "Deep dive into the architecture and capabilities of large language models and their impact on natural language processing...",
      category: "Machine Learning",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      id: 3,
      title: "Ethics in AI: Navigating the Gray Areas",
      date: "March 20, 2024",
      author: "Emma Williams",
      readTime: "6 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "Examining the ethical considerations and challenges in AI development and deployment in various sectors...",
      category: "AI Ethics",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      id: 4,
      title: "AI in Healthcare: Transforming Patient Care",
      date: "March 22, 2024",
      author: "Dr. James Miller",
      readTime: "8 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "How artificial intelligence is revolutionizing healthcare diagnostics, treatment planning, and patient monitoring...",
      category: "Healthcare AI",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      id: 5,
      title: "The Rise of AI-Powered Robotics",
      date: "March 25, 2024",
      author: "Robert Zhang",
      readTime: "6 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "Exploring the latest developments in robotics and how AI is enabling more sophisticated autonomous systems...",
      category: "Robotics",
      gradient: "from-orange-600 to-red-600",
    },
    {
      id: 6,
      title: "AI and the Future of Work",
      date: "March 27, 2024",
      author: "Lisa Anderson",
      readTime: "5 min read",
      image:
        "https://www.rws.com/media/images/scs-ai-new-img-hero-1920x1080b-03_tcm228-261952.webp?v=20250212120247",
      excerpt:
        "Analyzing how AI is reshaping the workplace and what skills will be crucial in the AI-driven future...",
      category: "Future of Work",
      gradient: "from-cyan-600 to-blue-600",
    },
  ];

  const blogsPerPage = {
    mobile: 2,
    desktop: 3,
  };

  const getVisibleBlogs = () => {
    const itemsPerPage =
      window.innerWidth >= 768 ? blogsPerPage.desktop : blogsPerPage.mobile;
    const start = currentPage * itemsPerPage;
    return blogs.slice(start, start + itemsPerPage);
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage.desktop);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Latest Articles
          </h2>
          <p className="text-gray-500 mt-1">
            Explore our latest insights on artificial intelligence and
            technology
          </p>
        </div>

        {/* Desktop version of the button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden sm:flex group items-center space-x-2 px-4 py-2 rounded-lg 
                     border border-gray-200 shadow-sm hover:shadow-md 
                     transition-all duration-300 bg-white"
        >
          <span
            className="text-sm font-medium bg-gradient-to-r from-blue-600 to-violet-600 
                          bg-clip-text text-transparent"
          >
            View All Articles
          </span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4 text-violet-600" />
          </motion.div>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {getVisibleBlogs().map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group h-[460px]"
          >
            <motion.article
              className="h-full rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm
                       hover:shadow-xl transition-all duration-500 relative"
              whileHover={{ y: -3 }}
              variants={{
                hover: {
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                },
              }}
            >
              <div className="relative h-48">
                <motion.div
                  className="h-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform transition-transform duration-500"
                  />
                </motion.div>
                <div
                  className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium text-white 
                           bg-gradient-to-r ${blog.gradient} opacity-90 backdrop-blur-sm`}
                >
                  {blog.category}
                </div>
              </div>

              <div className="p-4 flex flex-col h-[calc(500px-242px)]">
                <div className="space-y-3">
                  <motion.div className="space-y-2" whileHover={{ x: 5 }}>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 h-14">
                      {blog.title.length > 60
                        ? `${blog.title.substring(0, 60)}...`
                        : blog.title}
                    </h3>

                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </motion.div>

                  <p className="text-gray-600 text-sm line-clamp-3 h-[4.5rem]">
                    {blog.excerpt.length > 150
                      ? `${blog.excerpt.substring(0, 150)}...`
                      : blog.excerpt}
                  </p>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 mt-auto rounded-lg bg-gray-50 border border-gray-200
                           text-gray-700 text-sm font-medium inline-flex items-center justify-center
                           hover:bg-gray-100 transition-all duration-300 group/button"
                >
                  <span>Read More</span>
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </motion.span>
                </motion.button>
              </div>
            </motion.article>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls - Now visible on all screen sizes */}
      <div className="flex items-center justify-between mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevPage}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </motion.button>

        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextPage}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>

      {/* Mobile version of the button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="sm:hidden w-full mt-8 px-4 py-3 rounded-lg 
                   bg-gradient-to-r from-blue-600 to-violet-600
                   text-white font-medium shadow-sm hover:shadow-md 
                   transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>View All Articles</span>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default RecentBlog;
