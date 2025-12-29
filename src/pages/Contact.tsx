import { motion } from 'framer-motion';
import { profile } from '../content/profile';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about web development and XR.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-600 dark:hover:border-primary-400 transition-all group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Email
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Send me an email
            </p>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              {profile.email}
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-600 dark:hover:border-primary-400 transition-all group"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              LinkedIn
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Connect with me professionally
            </p>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              View Profile →
            </p>
          </a>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm particularly interested in opportunities involving:
          </p>
          <ul className="space-y-2">
            {[
              'Frontend development with React, TypeScript, and modern frameworks',
              'Accessibility-first web applications and design systems',
              'Dashboard and data visualization projects',
              'Unity WebGL integration and XR experiences',
              'Technical consulting and code reviews',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
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
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
