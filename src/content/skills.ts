import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        description: 'Building complex UIs with hooks, context, and modern patterns. 5+ years of production experience.',
        proficiency: 'expert',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe development with advanced types, generics, and strict mode.',
        proficiency: 'expert',
      },
      {
        name: 'Vue.js',
        description: 'Vue 3 composition API, Pinia state management, and reactive patterns.',
        proficiency: 'advanced',
      },
      {
        name: 'Next.js',
        description: 'SSR, SSG, API routes, and performance optimization.',
        proficiency: 'advanced',
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first styling, custom design systems, and responsive design.',
        proficiency: 'expert',
      },
      {
        name: 'Redux',
        description: 'Complex state management, middleware, and Redux Toolkit.',
        proficiency: 'advanced',
      },
      {
        name: 'Vite',
        description: 'Modern build tooling, HMR, and optimization.',
        proficiency: 'advanced',
      },
      {
        name: 'Framer Motion',
        description: 'Smooth animations and interactions with accessibility support.',
        proficiency: 'intermediate',
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        description: 'RESTful APIs, Express, and backend services.',
        proficiency: 'advanced',
      },
      {
        name: 'Python',
        description: 'Flask, data processing, and scripting.',
        proficiency: 'advanced',
      },
      {
        name: 'PHP',
        description: 'Laravel framework, MVC architecture, and API development.',
        proficiency: 'intermediate',
      },
      {
        name: 'GraphQL',
        description: 'Query design, subscriptions, and client integration.',
        proficiency: 'intermediate',
      },
      {
        name: 'SQL & NoSQL',
        description: 'PostgreSQL, MySQL, MongoDB - schema design and optimization.',
        proficiency: 'intermediate',
      },
    ],
  },
  {
    name: 'Design & UX',
    skills: [
      {
        name: 'Accessibility (WCAG 2.1)',
        description: 'AA/AAA compliance, screen readers, keyboard navigation, and inclusive design.',
        proficiency: 'expert',
      },
      {
        name: 'Design Systems',
        description: 'Component libraries, design tokens, and documentation.',
        proficiency: 'advanced',
      },
      {
        name: 'Figma',
        description: 'Design handoff, component design, and prototyping.',
        proficiency: 'intermediate',
      },
      {
        name: 'Responsive Design',
        description: 'Mobile-first approach, cross-browser compatibility, and performance.',
        proficiency: 'expert',
      },
    ],
  },
  {
    name: 'XR & Game Development',
    skills: [
      {
        name: 'Unity',
        description: 'Game development, WebGL builds, and VR applications.',
        proficiency: 'advanced',
      },
      {
        name: 'C#',
        description: 'Unity scripting, OOP, and performance optimization.',
        proficiency: 'advanced',
      },
      {
        name: 'Meta Quest SDK',
        description: 'VR interaction design, hand tracking, and Quest optimization.',
        proficiency: 'intermediate',
      },
      {
        name: 'WebGL Integration',
        description: 'Unity WebGL builds integrated with React/TypeScript frontends.',
        proficiency: 'advanced',
      },
    ],
  },
  {
    name: 'Tools & Workflow',
    skills: [
      {
        name: 'Git & GitHub',
        description: 'Version control, code review, and collaborative workflows.',
        proficiency: 'expert',
      },
      {
        name: 'CI/CD',
        description: 'GitHub Actions, deployment pipelines, and automation.',
        proficiency: 'advanced',
      },
      {
        name: 'Google Cloud Platform',
        description: 'Deployment, cloud functions, and infrastructure.',
        proficiency: 'intermediate',
      },
      {
        name: 'Testing',
        description: 'Jest, React Testing Library, and E2E testing.',
        proficiency: 'intermediate',
      },
    ],
  },
];
