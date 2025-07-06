import React from 'react';
import { Github, Linkedin,  Mail, MessageCircleMore} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Building beautiful, functional digital experiences with clean code and thoughtful design.
            </p>
    
            <div className="flex flex-col items-center md:items-start">
                <h5 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Quick Links</h5>
                <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
                  <a href="#home" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Home</a>
                  <a href="#about" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</a>
                  <a href="#skills" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Skills</a>
                  <a href="#projects" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</a>
                  <a href="#contact" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
                  <a href="#pricing" className="mx-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Packages</a>
                </nav>
            </div>
            
          </div>
          
          {/* Tech Stack */}
        <motion.div
          className="mt-20 md:mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider mb-6">Worked With</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-xl shadow-sm text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 justify-center">Get in Touch</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Amaaaarrrrrr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/joy-mutanu-93022a248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
              href="https://wa.me/254735083446?text=Hi!%20I'm%20interested%20in%20a%20website%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
              <MessageCircleMore size={20} />
              </a>
              {/* <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
              <a 
                href="mailto:mutanu801@gmail.com" 
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {year} Joy Mutanu. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
      
    </footer>

  );
};

export default Footer;
