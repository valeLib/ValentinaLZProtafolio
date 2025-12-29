import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../content/profile';

type Track = 'web' | 'vr';

export default function Home() {
  const [selectedTrack, setSelectedTrack] = useState<Track>('web');

  const tracks = {
    web: {
      title: 'Web & Frontend Development',
      description: 'Building accessible, performant web applications with React, TypeScript, and modern web standards.',
      highlights: [
        'Design systems and component libraries',
        'React, Vue, TypeScript expertise',
        'Dashboard and data visualization',
        'Performance optimization and modern build tools',
      ],
    },
    vr: {
      title: 'VR & Game Development',
      description: 'Creating immersive VR experiences and integrating Unity with web technologies.',
      highlights: [
        'Unity VR for Meta Quest',
        'WebGL integration with React',
        'Performance optimization for VR',
        'C# and Unity expertise',
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {profile.role}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {profile.valueStatement}
          </p>
        </motion.div>

        {/* Track selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedTrack('web')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTrack === 'web'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-pressed={selectedTrack === 'web'}
            >
              Web / Frontend
            </button>
            <button
              onClick={() => setSelectedTrack('vr')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedTrack === 'vr'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-pressed={selectedTrack === 'vr'}
            >
              Game / VR
            </button>
          </div>

          <motion.div
            key={selectedTrack}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {tracks[selectedTrack].title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {tracks[selectedTrack].description}
            </p>
            <ul className="space-y-3">
              {tracks[selectedTrack].highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
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
                  <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            View Projects
          </Link>
          <Link
            to="/experience"
            className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            View Experience
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-medium hover:border-primary-600 dark:hover:border-primary-400 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
