import React from 'react';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  type: 'certification' | 'award' | 'course';
  icon: 'award' | 'book' | 'check';
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Certificate in Web Designing",
    organization: "Inceptor School",
    date: "2023",
    type: "certification",
    icon: "award"
  },
  {
    id: 2,
    title: "Completed Software Development Training",
    organization: "Moringa School",
    date: "2025",
    type: "course",
    icon: "book"
  },
  {
    id: 3,
    title: "Developed and Deployed Multiple Websites",
    organization: "Volunteer Projects",
    date: "2024",
    type: "award",
    icon: "check"
  },
  {
    id: 4,
    title: "Completed Front-End & Back-End Projects",
    organization: "Personal & Group Projects",
    date: "2024",
    type: "course",
    icon: "book"
  },
  {
    id: 5,
    title: "Built Fullstack Project for S.J Consultancy",
    organization: "Client Work",
    date: "2025",
    type: "award",
    icon: "check"
  }
];


const Achievements: React.FC = () => {
  const getIcon = (icon: Achievement['icon']) => {
    switch (icon) {
      case 'award':
        return <Award className="w-6 h-6" />;
      case 'book':
        return <BookOpen className="w-6 h-6" />;
      case 'check':
        return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Certifications, awards, and completed courses that showcase my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  {getIcon(achievement.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.organization}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{achievement.date}</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                  {achievement.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;