import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  image: string;
  summary: string;
  tags: string[];
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    client: "Fashion Retailer",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Complete redesign and development of an e-commerce platform, focusing on user experience and performance optimization.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "40% increase in conversion rate",
      "60% improvement in page load time",
      "25% reduction in cart abandonment"
    ]
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    client: "Tech Startup",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Development of a real-time analytics dashboard for monitoring user behavior and system performance.",
    tags: ["React", "WebSocket", "Python", "Redis"],
    results: [
      "Real-time data processing",
      "90% reduction in reporting time",
      "Improved decision making"
    ]
  },
  {
    id: 3,
    title: "Mobile Banking App Modernization",
    client: "Regional Bank",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Revamped an outdated mobile banking app to improve security, accessibility, and user satisfaction.",
    tags: ["Flutter", "Firebase", "UX Design"],
    results: [
      "Increased app rating from 3.2 to 4.6 stars",
      "Enhanced biometric security",
      "30% growth in active users"
    ]
  },
  {
    id: 4,
    title: "Healthcare Portal Integration",
    client: "Medical Network",
    image: "https://images.pexels.com/photos/8376174/pexels-photo-8376174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary: "Integrated patient records across multiple systems into one centralized healthcare portal.",
    tags: ["React", "GraphQL", "PostgreSQL", "Docker"],
    results: [
      "Unified data access for 5+ departments",
      "80% reduction in duplicate records",
      "Improved patient response time by 50%"
    ]
  },
  
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Detailed analysis of selected projects and their impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{study.title}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{study.client}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{study.summary}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
