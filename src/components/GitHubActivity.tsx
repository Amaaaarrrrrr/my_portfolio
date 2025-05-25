import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubActivity: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">GitHub Activity</h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
          <p className="mt-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl">
            My open source contributions and coding activity.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
          <GitHubCalendar
            username="Amaaaarrrrrr"
            colorScheme={isDark ? 'dark' : 'light'}
            fontSize={16}
            blockSize={12}
            blockMargin={5}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
