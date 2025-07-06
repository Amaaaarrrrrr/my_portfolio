import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const images = ['/joy1.jpeg', '/joy2.jpeg'];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextImage, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, paused]);

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Text Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Joy Mutanu</span>
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
              <Typewriter
                words={[
                  'Full Stack Developer 👩‍💻',
                  'React Enthusiast ⚛️',
                  'UI/UX Lover 🎨',
                  'MERN Stack Magician ✨',
                  'Flask & Node.js Engineer 🔧',
                  'API Whisperer 🌐',
                  'Tech Blogger ✍️',
                  'Code Mentor 💡',
                  'Bug Squasher 🐞',
                  'CSS Wizard 💫',
                  'Coffee-Fueled Coder ☕',
                  'Problem Solver & Dream Builder 💭',
                  'Creative Thinker 🧠',
                  'Passionate Debugger 🔍',
                  'Lifelong Learner 📚'
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all font-semibold shadow-md flex items-center gap-2"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="https://docs.google.com/document/d/1PmZ6YsbvtlnCYkbiMoiXDutdAYOZwmWJxl2YmOzwi6c/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all font-semibold shadow flex items-center gap-2"
              >
                View CV <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-label="Profile slideshow"
            >
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Joy Mutanu ${i + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}

              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 text-gray-800 dark:text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 text-gray-800 dark:text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImage === i
                        ? 'bg-blue-600 scale-110'
                        : 'bg-gray-300 dark:bg-gray-500 hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1+</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
