import React from 'react';
import { ArrowRight} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
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
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="/joy.jpg"
                alt="Joy Mutanu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          </div>
        </div>
        
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