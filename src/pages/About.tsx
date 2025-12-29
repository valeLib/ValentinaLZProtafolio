import { motion } from 'framer-motion';
import { profile } from '../content/profile';

export default function About() {
  const strengths = [
    {
      title: 'Performance',
      description: 'Optimizing bundle sizes, implementing code splitting, and achieving 95+ Lighthouse scores.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Accessibility',
      description: 'Building WCAG 2.1 AA compliant interfaces with semantic HTML, ARIA, and keyboard navigation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Maintainability',
      description: 'Writing clean, type-safe code with comprehensive design systems and documentation.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  const techSnapshot = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Vue', 'Tailwind', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Flask', 'GraphQL'] },
    { category: 'XR/Game', items: ['Unity', 'C#', 'WebGL', 'Meta Quest SDK'] },
    { category: 'Tools', items: ['Vite', 'Git', 'Figma', 'Google Cloud'] },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {profile.bio}
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Core Strengths
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{strength.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Snapshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Tech Snapshot
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techSnapshot.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-700 dark:text-gray-300 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
