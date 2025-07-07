import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    title: "Ambulance Ride System (Flask)",
    description: "A backend system to manage ride requests, drivers, and hospitals.",
    tags: ["Flask", "SQLAlchemy", "REST API"],
    image: "/ambulance.webp",
    demoUrl: "https://ambulance-app-b741.onrender.com/",
    codeUrl: "https://github.com/fahmy-dev/ambulance-app",
  },
  {
    title: 'FaithConnect Platform',
    description: 'A full-stack Christian platform built with React and Flask. Enables users to explore faith-based content and connect with other believers.',
    image: '/faithconnect.jpg', 
    tags: ['React', 'Flask', 'Faith App'],
    demoUrl: 'https://faithconnect0.vercel.app/',
    codeUrl: 'https://github.com/Amaaaarrrrrr/faithconnect',
  },
  {
    title: 'Camera Website',
    description: 'A modern photography/portfolio website showcasing Camara Education projects and initiatives.',
    image: '/camera.jpeg', 
    tags: ['HTML', 'CSS', 'Static Site'],
    demoUrl: 'https://amaaaarrrrrr.github.io/camera-website/',
    codeUrl: 'https://github.com/Amaaaarrrrrr/camera-website',
  },
  {
    title: 'Bizitel Website',
    description: 'A professional website for Bizitel, offering SIYB training, M&E research, and data analytics services. Features sections for e-learning, testimonials, bookings, and more.',
    image: '/school.jpg',
    tags: ['React', 'Tailwind', 'Professional Website'],
    demoUrl: 'https://sj-website-rho.vercel.app/',
    codeUrl: 'https://github.com/Amaaaarrrrrr/SJWebsite',
  },
  {
    title: "Makeup Product Website",
    description: "A React-based site using the Makeup API to browse Maybelline products.",
    tags: ["React", "API", "Tailwind CSS"],
    image: "/Makeup.jpg",
    demoUrl: "https://maybelline-project.vercel.app/",
    codeUrl: "https://github.com/Amaaaarrrrrr/maybelline-project",
  },
  {
    title: "Movie Website",
    description: "A React app showing movie info and ratings with a sleek UI.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/movie.webp",
    demoUrl: "https://tv-maze-show-mnjgt7b09-joy-mutanus-projects.vercel.app/",
    codeUrl: "https://github.com/Amaaaarrrrrr/tv_maze_show",
  },
  {
    title: "Shopping Cart",
    description: "A complete shopping cart built with React and local state.",
    tags: ["React", "JavaScript", "Cart Logic"],
    image: "/shopping.webp",
    demoUrl: "https://shopping-cart-phase2.vercel.app/",
    codeUrl: "https://github.com/Amaaaarrrrrr/shopping-cart-phase2",
  },
];

const Projects: React.FC = () => {
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag)) 
    : projects;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Here are some of the projects I've worked on. Each project reflects my skills and passion for development.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedTag === null 
                ? 'bg-blue-600 text-white dark:bg-blue-500' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedTag === tag 
                  ? 'bg-blue-600 text-white dark:bg-blue-500' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
