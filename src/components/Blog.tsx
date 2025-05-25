import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Calendar, Clock, User } from 'lucide-react';
import { format } from 'date-fns';


interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date;
  readTime: number;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React's hooks system and how to use them effectively in your applications.",
    content: "# Understanding React Hooks\n\nReact Hooks are a powerful feature that allows you to use state and lifecycle features without writing a class component. Hooks simplify complex logic and promote better component design.",
    author: "Joy Mutanu",
    date: new Date('2024-02-15'),
    readTime: 5,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: "Building Scalable APIs with Flask",
    excerpt: "Learn how to create robust and scalable REST APIs using Flask and Python.",
    content: "# Building Scalable APIs with Flask\n\nFlask is a lightweight and flexible web framework for Python. It is especially useful for small to medium-sized applications. You can scale it with extensions like Flask-Restful or Flask-SQLAlchemy.",
    author: "Joy Mutanu",
    date: new Date('2024-02-10'),
    readTime: 7,
    tags: ['Python', 'Flask', 'API']
  },
  {
    id: 3,
    title: "Getting Started with Tailwind CSS",
    excerpt: "Tailwind CSS makes styling fast and consistent. Here’s how to get started and structure your UI.",
    content: "# Getting Started with Tailwind CSS\n\nTailwind CSS is a utility-first CSS framework that lets you style directly in your HTML. It speeds up development and maintains consistency across components by reducing custom CSS.",
    author: "Joy Mutanu",
    date: new Date('2024-03-05'),
    readTime: 4,
    tags: ['CSS', 'Tailwind', 'UI Design']
  },
  {
    id: 4,
    title: "Mastering Git and GitHub for Team Projects",
    excerpt: "Improve collaboration with Git best practices and GitHub workflows for developers.",
    content: "# Mastering Git and GitHub for Team Projects\n\nGit is a version control system that tracks changes and enables collaboration. GitHub provides a platform to host repositories, manage issues, and handle pull requests effectively.",
    author: "Joy Mutanu",
    date: new Date('2024-03-12'),
    readTime: 6,
    tags: ['Git', 'GitHub', 'Collaboration']
  },
  {
    id: 5,
    title: "Intro to TypeScript for JavaScript Developers",
    excerpt: "TypeScript adds type safety and better tooling to your JavaScript apps. Here’s why it’s worth learning.",
    content: "# Intro to TypeScript for JavaScript Developers\n\nTypeScript is a strongly typed superset of JavaScript. It helps catch errors early, provides better IDE support, and improves maintainability of code in large projects.",
    author: "Joy Mutanu",
    date: new Date('2024-03-18'),
    readTime: 5,
    tags: ['TypeScript', 'JavaScript', 'Frontend']
  }
];

const Blog: React.FC = () => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  const toggleExpand = (id: number) => {
    setExpandedPostId(prev => (prev === id ? null : id));
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Sharing my thoughts and experiences in web development.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedTag === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 flex-wrap gap-2">
                  <span className="flex items-center">
                    <User size={16} className="mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {format(post.date, 'MMM dd, yyyy')}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.readTime} min read
                  </span>
                </div>

                {/* Excerpt or full content */}
                {expandedPostId === post.id ? (
                  <MDEditor.Markdown source={post.content} className="prose dark:prose-invert mb-4" />
                ) : (
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  aria-label="Toggle blog content"
                  onClick={() => toggleExpand(post.id)}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  {expandedPostId === post.id ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
