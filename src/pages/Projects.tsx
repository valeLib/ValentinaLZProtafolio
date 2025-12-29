import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../content/projects';

type Category = 'all' | 'web' | 'vr';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
            Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Case studies showcasing my work in web development, accessibility, and VR experiences
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
            {(['all', 'web', 'vr'] as Category[]).map((category) => (
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
                {category === 'vr' ? 'VR' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-white/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h2>
                  {project.company && (
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {project.company}
                    </p>
                  )}
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Problem
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.problem}</p>
                </div>

                {/* Contribution */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Contribution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.contribution}</p>
                </div>

                {/* Outcome */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Outcome
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.outcome}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
