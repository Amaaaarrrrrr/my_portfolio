import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/joy1.jpeg', '/joy2.jpeg'];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slideshow
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(nextImage, 5000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImage, paused]);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Joy Mutanu</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              A <span className="text-blue-600 dark:text-blue-400 font-medium">Full Stack Developer</span> passionate about creating interactive applications and experiences on the web.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="flex items-center justify-center px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors duration-300"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="https://docs.google.com/document/d/1PmZ6YsbvtlnCYkbiMoiXDutdAYOZwmWJxl2YmOzwi6c/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 font-semibold shadow transition-colors duration-300"
              >
                View CV
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Slideshow Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Joy ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                />
              ))}

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 rounded-full p-1 hidden group-hover:block"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 rounded-full p-1 hidden group-hover:block"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === currentImage ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 md:mt-32">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Worked with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech) => (
              <div key={tech} className="text-gray-500 dark:text-gray-400 font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
