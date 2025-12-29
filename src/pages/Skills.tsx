import { motion } from 'framer-motion';
import { skillCategories } from '../content/skills';

const proficiencyColors = {
  expert: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  advanced: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  intermediate: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
};

export default function Skills() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            A comprehensive overview of my technical skills across frontend, backend, design, and XR development
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      {skill.proficiency && (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded capitalize ${
                            proficiencyColors[skill.proficiency]
                          }`}
                        >
                          {skill.proficiency}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
            Proficiency Legend
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
                Expert
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                5+ years, production-ready
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded">
                Advanced
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                3+ years, solid experience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded">
                Intermediate
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                1-2 years, working knowledge
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
