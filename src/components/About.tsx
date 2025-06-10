import React from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';
import { ArrowRight, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a dedicated Full Stack Developer with expertise in building robust, scalable web applications from front to back. I thrive on creating seamless user experiences and architecting clean backend systems that perform efficiently.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in JavaScript, with deep experience in frameworks like React for the frontend and Node.js or Python/Flask for the backend. I’m also skilled in working with REST APIs, databases like PostgreSQL and MongoDB, and deploying applications using modern DevOps practices.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy learning and adapting to new technologies, contributing to open-source projects, and building products that make an impact. Outside coding, I love mentoring others, writing technical blogs, and exploring innovation in tech.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
              Feel free to connect with me on <a href="https://www.linkedin.com/in/joy-mutanu-93022a248/" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a> or check out my <a href="https://github.com/Amaaaarrrrrr" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>.
            </p>

            <div className="mt-6">
              <a
                href="/JoyMutanu-Resume.pdf" 
                download 
                className="inline-flex items-center px-8 py-3 rounded-2xl border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-semibold shadow transition-colors duration-300"
              >
                Download CV
                <Download size={18} className="ml-2" />
              </a>
            </div>

          </div>

         

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Info</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="w-24 text-gray-600 dark:text-gray-400">Name:</span>
                  <span className="text-gray-900 dark:text-white">Joy Mutanu</span>
                </li>
                <li className="flex">
                  <span className="w-24 text-gray-600 dark:text-gray-400">Email:</span>
                  <span className="text-gray-900 dark:text-white">mutanu801@gmail.com</span>
                </li>
                <li className="flex">
                  <span className="w-24 text-gray-600 dark:text-gray-400">Location:</span>
                  <span className="text-gray-900 dark:text-white">Nairobi, Kenya</span>
                </li>
                <li className="flex">
                  <span className="w-24 text-gray-600 dark:text-gray-400">Availability:</span>
                  <span className="text-green-600 dark:text-green-400">Available for hire</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <p className="text-gray-900 dark:text-white font-medium">Full Stack Developer</p>
                  <p className="text-gray-600 dark:text-gray-400">Freelance & Personal Projects (2024 - Present)</p>
                </li>
                <li>
                  <p className="text-gray-900 dark:text-white font-medium">Backend Developer Intern</p>
                  <p className="text-gray-600 dark:text-gray-400">Remote(2024)</p>
                </li>
                <li>
                  <p className="text-gray-900 dark:text-white font-medium">Frontend Developer Intern</p>
                  <p className="text-gray-600 dark:text-gray-400">Remote(2023 - 2024)</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <p className="text-gray-900 dark:text-white font-medium">Certificate in Software Development</p>
                  <p className="text-gray-600 dark:text-gray-400">Moringa School (Ongoing)</p>
                </li>
                <li>
                  <p className="text-gray-900 dark:text-white font-medium">Certificate in Web Design</p>
                  <p className="text-gray-600 dark:text-gray-400">Inceptor School (2023)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
