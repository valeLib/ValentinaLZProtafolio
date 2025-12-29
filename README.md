# Portfolio - Valentina Liberona Zúñiga

A modern, accessible portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Fully Accessible**: WCAG 2.1 AA compliant with semantic HTML, keyboard navigation, and screen reader support
- **Dark Mode**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**:
  - Route-level code splitting
  - Lazy loading
  - Optimized bundle size
- **Type-Safe**: Full TypeScript coverage
- **Modern Stack**: React 18, Vite, Tailwind CSS
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router (HashRouter for GitHub Pages)
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (automated)

## Project Structure

```
SimpleProtafolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── vite.svg               # Favicon
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx     # Navigation with dark mode toggle
│   │       ├── Footer.tsx     # Footer with social links
│   │       └── Layout.tsx     # Main layout with skip link
│   ├── content/               # All content is data-driven
│   │   ├── types.ts          # TypeScript interfaces
│   │   ├── profile.ts        # Personal info
│   │   ├── experience.ts     # Work experience
│   │   ├── projects.ts       # Project case studies
│   │   ├── skills.ts         # Skills by category
│   │   └── education.ts      # Education history
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Dark mode context
│   ├── pages/
│   │   ├── Home.tsx          # Landing page with track selector
│   │   ├── About.tsx         # About page
│   │   ├── Experience.tsx    # Timeline with filters
│   │   ├── Projects.tsx      # Case study cards
│   │   ├── Skills.tsx        # Categorized skills
│   │   └── Contact.tsx       # Contact information
│   ├── App.tsx               # Router configuration
│   ├── main.tsx              # Application entry point
│   └── index.css             # Tailwind imports + global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js
├── DEPLOY.md                 # Deployment instructions
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Accessibility Features

- Semantic HTML throughout
- Skip-to-content link
- Keyboard navigation support
- Visible focus states
- ARIA labels and roles
- Reduced motion support
- High contrast ratios
- Screen reader friendly

## Performance

- Lighthouse score: 95+
- Route-level code splitting
- Lazy-loaded components
- Optimized bundle size
- Minimal dependencies
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Contact

Valentina Liberona Zúñiga
- Email: vliberonaz@gmail.com
- LinkedIn: [linkedin.com/in/valentina-liberona](https://www.linkedin.com/in/valentina-liberona/)

---

Built with React, TypeScript, and Tailwind CSS
