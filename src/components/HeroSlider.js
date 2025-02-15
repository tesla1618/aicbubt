"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Explore the Future of AI",
    subtitle:
      "Join our community of innovators and shape tomorrow's technology",
    image: "/assets/slider/s01.png",
    cta: "Get Started",
    gradient: "from-purple-600 to-blue-500",
    position: "object-fit",
  },
  {
    id: 2,
    title: "Learn Deep Learning",
    subtitle: "Master the fundamentals of neural networks and deep learning",
    image: "/assets/slider/s2.png",
    cta: "Start Learning",
    gradient: "from-blue-500 to-teal-400",
    position: "object-center",
  },
  {
    id: 3,
    title: "AI Research Hub",
    subtitle: "Discover cutting-edge research and collaborate with experts",
    image: "/assets/slider/s4.jpg",
    cta: "Explore Research",
    gradient: "from-violet-600 to-purple-500",
    position: "object-left-bottom",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  return (
    <div className="relative w-full overflow-hidden bg-black aspect-[16/13] sm:aspect-[2/1] md:h-screen">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] animate-subtle-drift"></div>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Image Container */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 z-10">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-20`}
              />
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                priority
                className={`object-cover transition-transform duration-[2s] transform scale-105 ${slides[currentSlide].position}`}
                quality={100}
              />
            </div>

            {/* Content */}
            <div className="relative z-30 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl pt-12 sm:pt-8 md:pt-0">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-block px-2.5 py-1 sm:px-4 sm:py-1.5 mb-2 sm:mb-4 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-md rounded-full text-white"
                >
                  Featured
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 md:mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm sm:text-base md:text-xl text-gray-300 mb-3 sm:mb-6 md:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-none"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex space-x-3 sm:space-x-4"
                >
                  <button
                    className={`bg-gradient-to-r ${slides[currentSlide].gradient} 
                      px-4 sm:px-8 py-2 sm:py-4 rounded-full text-white text-xs sm:text-base font-semibold 
                      hover:shadow-lg hover:scale-105 transform transition-all 
                      duration-200 ease-in-out text-center`}
                  >
                    {slides[currentSlide].cta}
                  </button>
                  <button
                    className="px-4 sm:px-8 py-2 sm:py-4 rounded-full text-white text-xs sm:text-base font-semibold 
                      border border-white/30 hover:bg-white/10 transition-all duration-200
                      text-center"
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation with Arrows - Combined for mobile */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 px-4 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-4">
          {/* Left Arrow - Hidden on larger screens */}
          <button
            onClick={prevSlide}
            className="sm:hidden group bg-white/5 backdrop-blur-md rounded-full p-2
              hover:bg-white/20 transition-all duration-200"
          >
            <FiArrowLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`group flex flex-col items-center space-y-2`}
              >
                <div
                  className={`w-4 sm:w-8 md:w-16 h-0.5 sm:h-1 rounded-full transition-all duration-300 
                  ${
                    currentSlide === index
                      ? "bg-white"
                      : "bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Arrow - Hidden on larger screens */}
          <button
            onClick={nextSlide}
            className="sm:hidden group bg-white/5 backdrop-blur-md rounded-full p-2
              hover:bg-white/20 transition-all duration-200"
          >
            <FiArrowRight className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Desktop Arrow Navigation - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 
          group bg-white/5 backdrop-blur-md rounded-full p-1.5 sm:p-3 
          hover:bg-white/20 transition-all duration-200"
      >
        <FiArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 
          group bg-white/5 backdrop-blur-md rounded-full p-1.5 sm:p-3 
          hover:bg-white/20 transition-all duration-200"
      >
        <FiArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default HeroSlider;
