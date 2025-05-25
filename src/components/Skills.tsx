import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML & CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 70, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Flask', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 65, category: 'backend' },
  { name: 'WordPress', level: 85, category: 'other' },
  { name: 'Git', level: 85, category: 'other' },
  { name: 'UI/UX Design', level: 75, category: 'other' },
  { name: 'Responsive Design', level: 90, category: 'frontend' },
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            Here are my technical skills and competencies that I've developed over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ title: 'Frontend Development', skills: frontendSkills, abbr: 'FE' },
            { title: 'Backend Development', skills: backendSkills, abbr: 'BE' },
            { title: 'Other Skills', skills: otherSkills, abbr: 'OT' }]
            .map(({ title, skills, abbr }, index) => (
              <motion.div 
                key={title}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-3">
                    <span className="text-sm font-bold">{abbr}</span>
                  </span>
                  {title}
                </h3>
                {skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
