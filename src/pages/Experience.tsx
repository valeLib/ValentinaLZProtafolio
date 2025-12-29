import { useState } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../content/experience';
import type { Experience } from '../content/types';

type Category = 'all' | 'frontend' | 'fullstack';

export default function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExperiences =
    selectedCategory === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            7+ years building web applications and interactive dashboards
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {(['all', 'frontend', 'fullstack'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isExpanded={expandedId === experience.id}
                onToggle={() => toggleExpanded(experience.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function ExperienceCard({ experience, isExpanded, onToggle, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400" />

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
        {/* Header */}
        <button
          onClick={onToggle}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <div className="flex justify-between items-start gap-4 mb-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {experience.role}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {experience.company}
              </p>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
              {experience.period}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.slice(0, isExpanded ? undefined : 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && experience.technologies.length > 4 && (
              <span className="px-2 py-1 text-gray-600 dark:text-gray-400 text-xs">
                +{experience.technologies.length - 4} more
              </span>
            )}
          </div>
        </button>

        {/* Expanded content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Expand button indicator */}
        <div className="flex justify-center mt-4">
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
