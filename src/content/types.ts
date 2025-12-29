export interface Profile {
  name: string;
  role: string;
  bio: string;
  valueStatement: string;
  email: string;
  linkedin: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'xr';
}

export interface Project {
  id: string;
  title: string;
  company?: string;
  problem: string;
  contribution: string;
  outcome: string;
  technologies: string[];
  category: 'web' | 'vr';
  image?: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  description: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}
