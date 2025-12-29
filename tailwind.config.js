/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: '#f0f9ff',
        //   100: '#e0f2fe',
        //   200: '#bae6fd',
        //   300: '#7dd3fc',
        //   400: '#38bdf8',
        //   500: '#0ea5e9',
        //   600: '#0284c7',
        //   700: '#0369a1',
        //   800: '#075985',
        //   900: '#0c4a6e',
        // },
        primary: {
          50:  '#f5f3ff',  // very light lavender, backgrounds or subtle highlights
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',  // main accent for links, icons
          500: '#8b5cf6',  // primary action color
          600: '#7c3aed',  // hover / active
          700: '#6d28d9',
          800: '#4c1d95',  // dark surfaces, outlines
          900: '#2e1065',  // deepest purple for contrast on dark bg
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
